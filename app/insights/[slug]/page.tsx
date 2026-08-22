import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, ButtonLink } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { Monogram } from "@/components/cards";
import { CTABand } from "@/components/cta-band";
import { insights, type Block } from "@/lib/insights";
import { attorneys } from "@/lib/attorneys";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  if (!insight) return {};
  return { title: insight.title, description: insight.excerpt };
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="mt-12 font-display text-[26px] font-medium leading-snug tracking-[-0.01em]">
          {block.text}
        </h2>
      );
    case "quote":
      return (
        <blockquote
          key={i}
          className="my-10 border-l-2 border-brass pl-7 font-display text-xl font-medium italic leading-relaxed text-navy md:text-2xl"
        >
          {block.text}
        </blockquote>
      );
    case "list":
      return (
        <ul key={i} className="mt-6 flex flex-col gap-3.5 border-y border-hairline py-6">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[16px] leading-relaxed">
              <span aria-hidden className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-brass" />
              <span className="text-ink-2">{item}</span>
            </li>
          ))}
        </ul>
      );
    default:
      return (
        <p key={i} className="mt-6 text-[17px] leading-relaxed text-ink-2">
          {block.text}
        </p>
      );
  }
}

export default async function InsightDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  if (!insight) notFound();

  const author = attorneys.find((a) => a.slug === insight.authorSlug);
  const idx = insights.findIndex((i) => i.slug === slug);
  const next = insights[(idx + 1) % insights.length];

  return (
    <>
      {/* Header */}
      <section className="paper-grain border-b border-hairline pb-14 pt-36 md:pt-48">
        <Container className="max-w-[800px]">
          <Reveal>
            <Link
              href="/insights"
              className="mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-ink-3 transition-colors hover:text-navy"
            >
              ← Resource center
            </Link>
          </Reveal>
          <div className="flex flex-col gap-5">
            <Reveal delay={60}>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-brass">
                {insight.category}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="font-display text-[clamp(30px,4.5vw,48px)] font-medium leading-[1.08] tracking-[-0.015em]">
                {insight.title}
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <div className="flex items-center gap-4 pt-2">
                {author && <Monogram initials={author.initials} size="md" />}
                <div className="font-mono text-xs text-ink-3">
                  <p className="text-sm not-italic text-ink">{author?.name}</p>
                  <p className="mt-0.5">
                    {author?.title} ·{" "}
                    {new Date(insight.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}{" "}
                    · {insight.readingTime}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Body */}
      <article className="py-16 md:py-20">
        <Container className="max-w-[720px]">
          <Reveal>{renderBlock(insight.body[0], 0)}</Reveal>
          {insight.body.slice(1).map((block, i) => (
            <Reveal key={i}>{renderBlock(block, i)}</Reveal>
          ))}

          <Reveal>
            <aside className="mt-14 border-t-2 border-navy bg-card p-8">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-brass">
                Disclaimer
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-ink-3">
                This article is general information, not legal advice, and does
                not create an attorney–client relationship. Situations vary;
                consult qualified counsel about your specific circumstances.
              </p>
            </aside>
          </Reveal>

          <Reveal>
            <div className="mt-10 flex flex-col items-start gap-4 border border-hairline p-8">
              <p className="font-display text-xl font-medium">Have this exact problem?</p>
              <p className="text-sm leading-relaxed text-ink-2">
                We handle matters like this every week.
              </p>
              <ButtonLink href="/consultation" variant="secondary">
                Request a Consultation
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </article>

      {/* Next */}
      <section className="border-t border-hairline py-14">
        <Container>
          <Link
            href={`/insights/${next.slug}`}
            className="group flex items-center justify-between gap-6 border border-hairline bg-card px-7 py-6 transition-all duration-200 ease-out-expo hover:-translate-y-1 hover:border-navy/40"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-3">Read next</p>
              <p className="mt-1 max-w-lg font-display text-xl font-medium leading-snug group-hover:text-navy">
                {next.title}
              </p>
            </div>
            <span aria-hidden className="shrink-0 text-navy transition-transform duration-200 ease-out-expo group-hover:translate-x-1.5">→</span>
          </Link>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
