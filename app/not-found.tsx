import Link from "next/link";

export default function NotFound() {
  return (
    <section className="paper-grain relative flex min-h-[80vh] items-center overflow-hidden">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <div className="flex max-w-xl flex-col gap-5 border-l-2 border-brass pl-6 md:pl-10">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-3">
            Error · Page not found
          </p>
          <h1 className="font-display text-[clamp(48px,9vw,110px)] font-medium leading-none tracking-[-0.015em] text-navy">
            404
          </h1>
          <p className="max-w-md font-display text-xl italic leading-relaxed text-ink-2">
            This page could not be located after reasonable diligence.
          </p>
          <p className="max-w-md text-[15px] leading-relaxed text-ink-2">
            The link may be outdated, or the page may have been moved in a
            reorganization. Counsel is standing by either way.
          </p>
          <div className="mt-3 flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-flex h-11 items-center rounded-md bg-navy px-6 text-sm font-medium text-paper transition-all duration-200 hover:bg-navy-deep"
            >
              Return home
            </Link>
            <Link
              href="/practice-areas"
              className="inline-flex h-11 items-center rounded-md border border-hairline-strong px-6 text-sm font-medium text-ink transition-all duration-200 hover:border-navy hover:text-navy"
            >
              Practice areas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
