import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.18em] text-brass">
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  sub,
  align = "left",
  className = "",
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div
      className={`flex flex-col gap-4 ${centered ? "items-center text-center" : "items-start"} ${className}`}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="max-w-2xl font-display text-[clamp(28px,4vw,42px)] font-medium leading-[1.12] tracking-[-0.01em] text-ink">
        {title}
      </h2>
      {sub ? (
        <p className="max-w-xl text-[16px] leading-relaxed text-ink-2">{sub}</p>
      ) : null}
    </div>
  );
}

type ButtonVariant = "primary" | "secondary" | "ghost";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = {
    sm: "h-9 px-4 text-sm rounded-md",
    md: "h-11 px-6 text-sm rounded-md",
    lg: "h-13 px-8 text-[15px] rounded-md",
  };
  if (variant === "ghost") {
    return (
      <Link
        href={href}
        className={`group inline-flex items-center gap-2 text-sm font-medium text-navy underline-offset-4 hover:underline ${className}`}
      >
        {children}
        <span aria-hidden className="transition-transform duration-200 ease-out-expo group-hover:translate-x-1">
          →
        </span>
      </Link>
    );
  }
  const styles =
    variant === "primary"
      ? "bg-navy text-paper hover:bg-navy-deep active:scale-[0.99]"
      : "border border-hairline-strong bg-transparent text-ink hover:border-navy hover:text-navy active:scale-[0.99]";
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center transition-all duration-200 ease-out-expo ${styles} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Hairline({ className = "" }: { className?: string }) {
  return <hr className={`border-t border-hairline ${className}`} />;
}

export function DisclaimerNote({ children }: { children: ReactNode }) {
  return (
    <aside className="rounded-md border-l-2 border-brass bg-card px-5 py-4 text-[13px] leading-relaxed text-ink-3">
      {children}
    </aside>
  );
}
