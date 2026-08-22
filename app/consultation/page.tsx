import type { Metadata } from "next";
import { Container, Eyebrow, Hairline } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { IntakeWizard } from "@/components/intake-wizard";

export const metadata: Metadata = {
  title: "Request a Consultation",
  description:
    "Five questions, thirty seconds of your time, one partner response within a business day.",
};

const assurances = [
  {
    title: "A partner reads it",
    body: "Your request routes directly to the practice lead — not an intake queue.",
  },
  {
    title: "One business day",
    body: "Response within a day; urgent matters same-day by phone.",
  },
  {
    title: "No fee for the first call",
    body: "The initial consultation is complimentary and without obligation.",
  },
];

export default function ConsultationPage() {
  return (
    <>
      <section className="paper-grain relative overflow-hidden pb-24 pt-36 md:pt-48">
        <Container>
          <div className="mb-14 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <div className="flex max-w-lg flex-col gap-5 border-l-2 border-brass pl-6 md:pl-8">
              <Reveal>
                <Eyebrow>Consultation</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display text-[clamp(34px,5vw,54px)] font-medium leading-[1.06] tracking-[-0.015em]">
                  Five questions.
                  <br />
                  One partner response.
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-lg leading-relaxed text-ink-2">
                  Tell us enough to route your matter to the right partner — no
                  more than that. The details belong in a privileged
                  conversation, not a web form.
                </p>
              </Reveal>

              <Reveal delay={220}>
                <ol className="mt-6 divide-y divide-hairline border-y border-hairline">
                  {assurances.map((a, i) => (
                    <li key={a.title} className="flex items-start gap-4 py-4">
                      <span className="font-display text-lg italic text-brass">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-sm font-medium">{a.title}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-ink-2">{a.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Reveal>

              <Reveal delay={280}>
                <Hairline className="my-4" />
                <p className="font-mono text-xs leading-relaxed text-ink-3">
                  Prefer email? counsel@aldervane.law · New York +1 (212)
                  555-0148 · London +44 20 7946 0958
                </p>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <IntakeWizard />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
