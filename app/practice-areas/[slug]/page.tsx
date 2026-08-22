import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, ButtonLink, Hairline, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { Monogram, InsightCard, MatterCard } from "@/components/cards";
import { FAQSection } from "@/components/accordion";
import { CTABand } from "@/components/cta-band";
import { practices } from "@/lib/practices";
import { attorneys } from "@/lib/attorneys";
import { insights, type Insight } from "@/lib/insights";
import { matters } from "@/lib/matters";

export function generateStaticParams() {
  return practices.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const practice = practices.find((p) => p.slug === slug);
  if (!practice) return {};
  return { title: practice.name, description: practice.short };
}

export default async function PracticeDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const practice = practices.find((p) => p.slug === slug);
  if (!practice) notFound();

  const team = practice.attorneySlugs
    .map((s) => attorneys.find((a) => a.slug === s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));
  const relatedInsights = practice.insightSlugs
    .map((s) => insights.find((i) => i.slug === s))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));
  const relatedMatters = matters.filter((m) => m.practiceSlug === practice.slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="paper-grain relative overflow-hidden pb-16 pt-36 md:pt-48">
        <Container>
          <Reveal>
            <Link
              href="/practice-areas"
              className="mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-ink-3 transition-colors hover:text-navy"
            >
              ← All practice areas
            </Link>
          </Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-end">
            <div className="flex max-w-2xl flex-col gap-5 border-l-2 border-brass pl-6 md:pl-8">
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-3">
                  Practice {practice.number}
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display text-[clamp(34px,5.5vw,58px)] font-medium leading-[1.05] tracking-[-0.015em]">
                  {practice.name}
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="max-w-xl font-display text-lg italic leading-relaxed text-navy">
                  {practice.tagline}
                </p>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <div className="border border-hairline bg-card p-6">
                <p className="font-display text-4xl font-medium text-navy">
                  {practice.stat.value}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-ink-3">
                  {practice.stat.label}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Overview + what we handle */}
      <section className="border-t border-hairline py-20 md:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            <div className="flex flex-col gap-6">
              <Reveal>
                <Eyebrow>Overview</Eyebrow>
                <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.01em]">
                  What we handle.
                </h2>
              </Reveal>
              {practice.overview.map((para, i) => (
                <Reveal key={i} delay={i * 60}>
                  <p className={`text-[17px] leading-relaxed text-ink-2 ${i === 0 ? "dropcap" : ""}`}>
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={100}>
              <aside className="border border-hairline bg-card p-8">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-brass">
                  Matters we take on
                </p>
                <ul className="mt-6 divide-y divide-hairline">
                  {practice.matters.map((m) => (
                    <li key={m.title} className="py-4 first:pt-0 last:pb-0">
                      <p className="text-[15px] font-medium">{m.title}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-2">
                        {m.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section className="border-t border-hairline bg-card py-20 md:py-28">
        <Container>
          <Reveal>
            <Eyebrow>Approach</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.01em]">
              How the firm works on this.
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
            {practice.approach.map((step, i) => (
              <Reveal key={step.title} delay={i * 60}>
                <li className="flex h-full flex-col gap-3 bg-card p-7">
                  <span className="font-display text-xl italic text-brass">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-medium leading-snug tracking-[-0.01em]">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-2">{step.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Attorneys */}
      <section className="border-t border-hairline py-20 md:py-28">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <Eyebrow>Attorneys</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.01em]">
                Who handles this work.
              </h2>
            </Reveal>
            <ButtonLink href="/attorneys" variant="ghost">
              All attorneys
            </ButtonLink>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.slug} delay={i * 70}>
                <Link
                  href={`/attorneys/${member.slug}`}
                  className="group flex h-full flex-col gap-4 border border-hairline bg-card p-7 transition-all duration-200 ease-out-expo hover:-translate-y-1 hover:border-navy/40"
                >
                  <Monogram initials={member.initials} />
                  <div>
                    <p className="font-display text-xl font-medium group-hover:text-navy">
                      {member.name}
                    </p>
                    <p className="mt-0.5 text-[13px] uppercase tracking-[0.14em] text-brass">
                      {member.title}
                    </p>
                  </div>
                  <p className="mt-auto font-mono text-xs text-ink-3">
                    {member.location}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Related matters */}
      {relatedMatters.length > 0 && (
        <section className="border-t border-hairline py-20 md:py-28">
          <Container>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
              <Reveal>
                <Eyebrow>Representative matters</Eyebrow>
                <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.01em]">
                  From this practice.
                </h2>
              </Reveal>
              <ButtonLink href="/matters" variant="ghost">
                All matters
              </ButtonLink>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {relatedMatters.map((matter, i) => (
                <Reveal key={matter.id} delay={i * 80}>
                  <MatterCard matter={matter} />
                </Reveal>
              ))}
            </div>
            <Hairline className="my-10" />
            <Reveal>
              <InsightStrip insights={relatedInsights} />
            </Reveal>
          </Container>
        </section>
      )}

      <FAQSection eyebrow="Practice FAQ" title={`${practice.name} questions`} items={practice.faqs} />

      <CTABand
        eyebrow={`${practice.name}`}
        title="Bring us the question you're actually worried about."
        sub="Thirty minutes with the partner who runs this practice."
      />
    </>
  );
}

function InsightStrip({ insights }: { insights: Insight[] }) {
  if (insights.length === 0) return null;
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {insights.map((insight) => (
        <InsightCard key={insight.slug} insight={insight} />
      ))}
    </div>
  );
}
