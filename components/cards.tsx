import Link from "next/link";
import type { Attorney } from "@/lib/attorneys";
import type { Matter } from "@/lib/matters";
import type { Insight } from "@/lib/insights";
import type { Practice } from "@/lib/practices";

export function Monogram({
  initials,
  size = "lg",
  invert = false,
}: {
  initials: string;
  size?: "md" | "lg" | "xl";
  invert?: boolean;
}) {
  const sizes = {
    md: "h-11 w-11 text-sm",
    lg: "h-16 w-16 text-lg",
    xl: "h-28 w-28 text-3xl rounded-md",
  };
  return (
    <span
      aria-hidden
      className={`flex shrink-0 items-center justify-center rounded-full border font-display font-medium tracking-wide ${
        invert
          ? "border-line-paper bg-navy-raise text-paper"
          : "border-hairline bg-card text-navy"
      } ${sizes[size]}`}
    >
      {initials}
    </span>
  );
}

export function AttorneyCard({ attorney }: { attorney: Attorney }) {
  const practiceNames = attorney.practiceSlugs
    .slice(0, 2)
    .map((slug) => slug.split("-")[0].replace(/^\w/, (c) => c.toUpperCase()))
    .join(" · ");
  return (
    <Link
      href={`/attorneys/${attorney.slug}`}
      className="group flex h-full flex-col gap-5 border border-hairline bg-card p-7 transition-all duration-200 ease-out-expo hover:-translate-y-1 hover:border-navy/40 hover:shadow-[0_16px_40px_-24px_rgba(18,40,58,0.35)]"
    >
      <Monogram initials={attorney.initials} />
      <div className="flex flex-col gap-1">
        <p className="font-display text-xl font-medium tracking-[-0.01em] group-hover:text-navy">
          {attorney.name}
        </p>
        <p className="text-[13px] uppercase tracking-[0.14em] text-brass">
          {attorney.title}
        </p>
      </div>
      <p className="text-sm leading-relaxed text-ink-2">
        {attorney.bio[0].split(". ")[0]}.
      </p>
      <div className="mt-auto flex items-center justify-between border-t border-hairline pt-4">
        <span className="font-mono text-xs text-ink-3">
          {attorney.location} · {practiceNames}
        </span>
        <span
          aria-hidden
          className="text-navy transition-transform duration-200 ease-out-expo group-hover:translate-x-1"
        >
          →
        </span>
      </div>
    </Link>
  );
}

export function MatterCard({ matter }: { matter: Matter }) {
  return (
    <article className="flex h-full flex-col border border-hairline bg-card p-7 transition-all duration-200 ease-out-expo hover:-translate-y-1 hover:border-navy/40">
      <div className="flex items-center justify-between font-mono text-xs text-ink-3">
        <span>{matter.id}</span>
        <span>{matter.year}</span>
      </div>
      <h3 className="mt-4 font-display text-xl font-medium leading-snug tracking-[-0.01em]">
        {matter.type}
      </h3>
      <dl className="mt-5 flex flex-col gap-3.5 border-t border-hairline pt-5">
        <div>
          <dt className="text-[11px] uppercase tracking-[0.16em] text-brass">
            Industry
          </dt>
          <dd className="mt-1 text-sm text-ink-2">{matter.industry}</dd>
        </div>
        <div>
          <dt className="text-[11px] uppercase tracking-[0.16em] text-brass">
            Resolution
          </dt>
          <dd className="mt-1 text-sm leading-relaxed text-ink-2">
            {matter.resolution}
          </dd>
        </div>
      </dl>
    </article>
  );
}

export function InsightCard({ insight }: { insight: Insight }) {
  return (
    <Link
      href={`/insights/${insight.slug}`}
      className="group flex h-full flex-col border-t-2 border-navy bg-card p-7 transition-all duration-200 ease-out-expo hover:-translate-y-1 hover:shadow-[0_16px_40px_-24px_rgba(18,40,58,0.35)]"
    >
      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em]">
        <span className="text-brass">{insight.category}</span>
        <span className="text-ink-3">{insight.date}</span>
      </div>
      <h3 className="mt-4 font-display text-xl font-medium leading-snug tracking-[-0.01em] group-hover:text-navy">
        {insight.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-2">{insight.excerpt}</p>
      <div className="mt-auto flex items-center justify-between border-t border-hairline pt-4 text-xs text-ink-3">
        <span>{new Date(insight.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
        <span>{insight.readingTime}</span>
      </div>
    </Link>
  );
}

export function PracticeRow({
  practice,
}: {
  practice: Practice;
}) {
  return (
    <Link
      href={`/practice-areas/${practice.slug}`}
      className="group grid grid-cols-[auto_1fr_auto] items-start gap-5 border-b border-hairline py-8 transition-colors duration-200 first:border-t hover:bg-card md:gap-10 md:px-6"
    >
      <span className="pt-1 font-display text-lg italic text-brass">
        {practice.number}
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-[clamp(22px,3vw,30px)] font-medium leading-tight tracking-[-0.01em] group-hover:text-navy">
          {practice.name}
        </h3>
        <p className="max-w-xl text-sm leading-relaxed text-ink-2">
          {practice.matters.map((m) => m.title).join(" · ")}
        </p>
      </div>
      <span
        aria-hidden
        className="mt-2 hidden text-navy opacity-0 transition-all duration-200 ease-out-expo group-hover:translate-x-1 group-hover:opacity-100 md:block"
      >
        →
      </span>
    </Link>
  );
}
