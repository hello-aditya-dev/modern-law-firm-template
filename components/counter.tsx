"use client";

import { useEffect, useRef, useState } from "react";

export function Counter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1500,
  className = "",
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      const id = requestAnimationFrame(() =>
        setDisplay(format(value, decimals))
      );
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 4);
          setDisplay(format(value * eased, decimals));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, decimals, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

function format(n: number, decimals: number) {
  const fixed = n.toFixed(decimals);
  const [int, dec] = fixed.split(".");
  const grouped = Number(int).toLocaleString("en-US");
  return dec ? `${grouped}.${dec}` : grouped;
}
