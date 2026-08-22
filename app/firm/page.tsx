import type { Metadata } from "next";
import { Container, Eyebrow, Hairline } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CTABand } from "@/components/cta-band";
import { firm } from "@/lib/firm";
import { attorneys } from "@/lib/attorneys";
import { Monogram } from "@/components/cards";

export const metadata: Metadata = {
  title: "The Firm",
  description:
    "Founded 2009 on one rule: partners do the work. Thirty-eight lawyers across New York and London.",
};

export default function FirmPage() {
  return (
    <>
      <PageHero
        eyebrow="The Firm"
        title="A firm built as a reaction."
        sub="Aldervane was founded by six partners who left larger institutions with a single conviction: clients want the partner, not the platform."
      />

      {/* Manifesto */}
      <section className="border-t border-hairline py-20 md:py-28">
        <Container className="max-w-[800px]">
          <Reveal>
            <Eyebrow>Why we exist</Eyebrow>
          </Reveal>
          <div className="mt-8 flex flex-col gap-6 text-[18px] leading-relaxed text-ink-2">
            <Reveal>
              <p className="dropcap">
                Large firms are optimized for leverage: more associates per
                partner, more matters per associate. That model works for the
                institution and is paid for by the client — in handoffs, in
                re-briefings, and in judgment applied at the margins of
                someone&rsquo;s attention.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Aldervane inverts the ratio. Fewer matters, deeper teams, and
                partners who write, argue, and negotiate their own work. It is
                a less scalable business by design — which is precisely why it
                produces better outcomes for the clients who choose it.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Sixteen years later, the test we apply to every engagement has
                not changed: would this decision look right read aloud to the
                client? If yes, proceed. If no, call them first.
              </p>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <Hairline className="my-10" />
            <div className="flex items-center gap-4">
              <Monogram initials={attorneys[0].initials} size="md" />
              <div>
                <p className="font-display text-lg font-medium">{attorneys[0].name}</p>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-brass">
                  {attorneys[0].title}
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Values grid */}
      <section className="border-t border-hairline bg-card py-20 md:py-28">
        <Container>
          <Reveal>
            <Eyebrow>Principles</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.01em]">
              Four rules that govern the work.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-2">
            {firm.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div className="h-full bg-card p-8 md:p-10">
                  <p className="font-display text-2xl italic text-brass">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-display text-xl font-medium">{v.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="border-t border-hairline py-20 md:py-28">
        <Container className="max-w-[840px]">
          <Reveal>
            <Eyebrow>History</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.01em]">
              Sixteen years, one direction.
            </h2>
          </Reveal>
          <ol className="mt-12 divide-y divide-hairline border-y border-hairline">
            {firm.timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 60}>
                <li className="grid gap-2 py-6 sm:grid-cols-[100px_1fr] sm:gap-8">
                  <span className="font-display text-xl italic text-brass">{t.year}</span>
                  <p className="max-w-2xl text-[15px] leading-relaxed text-ink-2">{t.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Credentials */}
      <section className="border-t border-hairline bg-navy py-20 md:py-28">
        <Container>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-paper-ink-3">
              Credentials & Recognition
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-medium tracking-[-0.01em] text-paper">
              Independently reviewed. Consistently ranked.
            </h2>
          </Reveal>
          <ul className="mt-10 divide-y divide-line-paper border-y border-line-paper">
            {firm.credentials.map((c, i) => (
              <Reveal key={c} delay={i * 50}>
                <li className="flex items-start gap-5 py-5 text-paper-ink-2">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass" />
                  <span className="text-[15px] leading-relaxed">{c}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-[12px] leading-relaxed text-paper-ink-3">
              Rankings and awards are shown as template placeholders — replace
              with your firm&rsquo;s actual recognitions and ensure directory
              usage complies with their licensing terms.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTABand
        eyebrow="Meet the firm"
        title="Judge us the way we judge ourselves — by the work."
        sub="Request a consultation and speak directly with the partner who would run your matter."
      />
    </>
  );
}
