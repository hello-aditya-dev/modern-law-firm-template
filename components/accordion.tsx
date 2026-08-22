"use client";

import { useState } from "react";
import { Container } from "@/components/ui";

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-hairline border-y border-hairline">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-navy"
            >
              <span className="text-[15px] font-medium md:text-base">
                {item.q}
              </span>
              <span
                aria-hidden
                className={`shrink-0 font-display text-xl transition-transform duration-300 ease-out-expo ${
                  open ? "rotate-45 text-brass" : "text-ink-3"
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out-expo ${
                open ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl text-[15px] leading-relaxed text-ink-2">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function FAQSection({
  eyebrow = "FAQ",
  title,
  items,
}: {
  eyebrow?: string;
  title: string;
  items: { q: string; a: string }[];
}) {
  return (
    <section className="py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr]">
        <h2 className="font-display text-[clamp(26px,3.5vw,36px)] font-medium leading-[1.15] tracking-[-0.01em]">
          <span className="mb-3 block text-xs font-medium uppercase not-italic tracking-[0.18em] text-brass">
            {eyebrow}
          </span>
          {title}
        </h2>
        <Accordion items={items} />
      </Container>
    </section>
  );
}
