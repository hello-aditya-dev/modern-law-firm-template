import type { Metadata } from "next";
import Link from "next/link";
import { Container, SectionHeader, ButtonLink, Eyebrow, Hairline, DisclaimerNote } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { PracticeRow, AttorneyCard, MatterCard, InsightCard } from "@/components/cards";
import { CTABand } from "@/components/cta-band";
import { firm } from "@/lib/firm";
import { practices } from "@/lib/practices";
import { matters } from "@/lib/matters";
import { attorneys } from "@/lib/attorneys";
import { insights } from "@/lib/insights";
import { faqGroups } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Clear counsel for complex decisions",
  description: firm.description,
};

export default function HomePage() {
  const featuredInsight = insights[0];
  const homeFaqs = [...faqGroups[0].items.slice(0, 2), ...faqGroups[1].items.slice(0, 2)];

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="paper-grain relative overflow-hidden pb-20 pt-40 md:pb-28 md:pt-52">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <div className="flex flex-col gap-7">
              <Reveal>
                <Eyebrow>Attorneys &amp; Counselors at Law · NY / London</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display text-[clamp(44px,6.5vw,76px)] font-medium leading-[1.04] tracking-[-0.015em] text-ink">
                  Clear counsel for{" "}
                  <span className="italic text-navy">complex</span> decisions.
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="max-w-xl text-lg leading-relaxed text-ink-2">
                  Strategic legal representation for businesses, institutions
                  and individuals navigating high-stakes matters.
                </p>
              </Reveal>
              <Reveal delay={240} className="mt-2 flex flex-wrap gap-4">
                <ButtonLink href="/consultation" size="lg">
                  Request a Consultation
                </ButtonLink>
                <ButtonLink href="/practice-areas" variant="secondary" size="lg">
                  Explore Our Practice Areas
                </ButtonLink>
              </Reveal>
            </div>

            {/* Right editorial rail */}
            <Reveal delay={300} className="hidden lg:block">
              <div className="flex h-full flex-col justify-end border-l border-hairline pl-8">
                <p className="font-display text-lg italic leading-relaxed text-ink-2">
                  &ldquo;Partners do the work. That has been the entire strategy
                  since {firm.established}.&rdquo;
                </p>
                <Hairline className="my-6" />
                <dl className="flex flex-col gap-3 font-mono text-xs text-ink-3">
                  <div className="flex justify-between">
                    <dt>Founded</dt>
                    <dd className="text-ink">{firm.established}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Lawyers</dt>
                    <dd className="text-ink">38</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Offices</dt>
                    <dd className="text-ink">New York · London</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>

          {/* Sector marquee */}
          <div className="marquee-track mask-fade-x mt-16 overflow-hidden border-t border-hairline pt-8 md:mt-20">
            <div className="marquee-inner flex w-max animate-marquee items-center gap-10 pr-10">
              {[...firm.sectors, ...firm.sectors].map((sector, i) => (
                <span
                  key={`${sector}-${i}`}
                  className="whitespace-nowrap font-display text-xl italic text-ink-3 transition-colors duration-300 hover:text-navy"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ============ STATS ============ */}
      <section className="border-t border-hairline bg-card">
        <Container>
          <div className="grid divide-y divide-hairline sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {firm.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 70}>
                <div className="flex flex-col gap-1 px-2 py-12 sm:px-8 lg:py-16">
                  <span className="font-display text-[clamp(36px,4vw,52px)] font-medium leading-none tracking-[-0.01em] text-navy">
                    <Counter
                      value={stat.value}
                      prefix={stat.prefix ?? ""}
                      suffix={stat.suffix ?? ""}
                      decimals={stat.decimals ?? 0}
                    />
                  </span>
                  <span className="mt-2 text-sm text-ink-2">{stat.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ PRACTICE EXPLORER ============ */}
      <section className="py-24 md:py-32" id="practices">
        <Container>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="Practice Areas"
              title="Six practices. One standard of preparation."
              sub="Every practice is partner-led and deliberately narrow enough that we have seen your situation before."
            />
            <ButtonLink href="/practice-areas" variant="ghost">
              All practice areas
            </ButtonLink>
          </div>
          <Reveal>
            <div>
              {practices.map((practice) => (
                <PracticeRow key={practice.slug} practice={practice} />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============ APPROACH ============ */}
      <section className="border-t border-hairline bg-card py-24 md:py-32">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="How we work"
            title="Preparation is the advantage."
            sub="Four principles govern every engagement, whatever the size."
          />
          <div className="mt-14 grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-2">
            {firm.values.map((value, i) => (
              <Reveal key={value.title} delay={i * 60}>
                <div className="h-full bg-card p-8 md:p-10">
                  <p className="font-display text-2xl italic text-brass">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-display text-xl font-medium tracking-[-0.01em]">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                    {value.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ REPRESENTATIVE MATTERS ============ */}
      <section className="border-t border-hairline py-24 md:py-32">
        <Container>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="Representative Matters"
              title="The record speaks carefully."
              sub="Generalized for confidentiality. Prior results do not guarantee a similar outcome."
            />
            <ButtonLink href="/matters" variant="ghost">
              View all matters
            </ButtonLink>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {matters.slice(0, 3).map((matter, i) => (
              <Reveal key={matter.id} delay={i * 80}>
                <MatterCard matter={matter} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={150} className="mt-6">
            <DisclaimerNote>
              Representative matters are illustrative. Some were handled by our
              lawyers prior to joining the firm. Details are generalized to
              protect client confidentiality.
            </DisclaimerNote>
          </Reveal>
        </Container>
      </section>

      {/* ============ QUOTE BAND ============ */}
      <section className="navy-weave bg-navy py-24 md:py-32">
        <Container className="max-w-4xl text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-paper-ink-3">
              From a client letter
            </p>
            <blockquote className="mt-8 font-display text-[clamp(26px,4vw,42px)] font-medium italic leading-[1.25] tracking-[-0.01em] text-paper">
              &ldquo;They told us what other counsel wouldn&rsquo;t — where our
              position was weak, what it would cost to fix, and how long it
              would take. Then they did exactly what they said.&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-paper-ink-3">
              General Counsel · Technology Group
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ============ ATTORNEYS ============ */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="Attorneys"
              title="Named partners, known work."
              sub="The people on this page are the people who will handle your matter."
            />
            <ButtonLink href="/attorneys" variant="ghost">
              Meet the firm
            </ButtonLink>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {attorneys.slice(0, 4).map((attorney, i) => (
              <Reveal key={attorney.slug} delay={i * 70}>
                <AttorneyCard attorney={attorney} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ INSIGHTS ============ */}
      <section className="border-t border-hairline bg-card py-24 md:py-32">
        <Container>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="Insights"
              title="Writing worth your time."
              sub="Guides, case notes, and alerts — written by the lawyers who handle the matters."
            />
            <ButtonLink href="/insights" variant="ghost">
              Visit the library
            </ButtonLink>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal>
              <Link
                href={`/insights/${featuredInsight.slug}`}
                className="group flex h-full flex-col justify-between gap-8 border border-hairline p-8 transition-all duration-200 ease-out-expo hover:-translate-y-1 hover:border-navy/40 md:p-10"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-brass">
                    Featured · {featuredInsight.category}
                  </p>
                  <h3 className="mt-4 font-display text-[clamp(22px,2.8vw,30px)] font-medium leading-snug tracking-[-0.01em] group-hover:text-navy">
                    {featuredInsight.title}
                  </h3>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-2">
                    {featuredInsight.excerpt}
                  </p>
                </div>
                <p className="font-mono text-xs text-ink-3">
                  {featuredInsight.readingTime}
                </p>
              </Link>
            </Reveal>
            <div className="grid gap-5">
              {insights.slice(1, 3).map((insight, i) => (
                <Reveal key={insight.slug} delay={(i + 1) * 80}>
                  <InsightCard insight={insight} />
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ============ MINI FAQ ============ */}
      <section className="border-t border-hairline py-24 md:py-28">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="Before you ask"
            title="Common first questions"
          />
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-hairline border-y border-hairline">
            {homeFaqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[15px] font-medium [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span aria-hidden className="font-display text-xl text-ink-3 transition-transform duration-200 group-open:rotate-45 group-open:text-brass">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-ink-2">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
          <Reveal className="mt-8 text-center">
            <ButtonLink href="/faq" variant="ghost">
              All questions
            </ButtonLink>
          </Reveal>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
