import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { AttorneyCard } from "@/components/cards";
import { CTABand } from "@/components/cta-band";
import { attorneys } from "@/lib/attorneys";

export const metadata: Metadata = {
  title: "Attorneys",
  description:
    "Partner-led counsel across corporate, disputes, immigration, employment, IP and tax — meet the people who do the work.",
};

export default function AttorneysPage() {
  return (
    <>
      <PageHero
        eyebrow="Attorneys"
        title="Named partners. Known work."
        sub="Thirty-eight lawyers across two offices. These six lead every engagement personally."
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <Reveal className="mb-10">
            <Eyebrow>Partners</Eyebrow>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {attorneys.map((attorney, i) => (
              <Reveal key={attorney.slug} delay={(i % 3) * 70}>
                <AttorneyCard attorney={attorney} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <p className="max-w-xl text-sm leading-relaxed text-ink-3">
              The firm also includes thirty-two associates, of-counsel
              specialists and practice staff organized into partner-led matter
              teams. Team composition for your engagement is shared at kickoff.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTABand
        eyebrow="Match with a partner"
        title="The right lawyer for your matter is one conversation away."
        sub="Tell us the situation; we route you to the partner who has handled it before."
      />
    </>
  );
}
