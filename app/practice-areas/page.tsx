import type { Metadata } from "next";
import { Container, SectionHeader } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { PracticeRow } from "@/components/cards";
import { CTABand } from "@/components/cta-band";
import { practices } from "@/lib/practices";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Corporate & M&A, litigation & arbitration, immigration, employment, IP, and tax — partner-led practices for high-stakes matters.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Practice Areas"
        title="Deliberately narrow. Deliberately deep."
        sub="Six practices, each led by partners who have handled the matter type at scale — because judgment comes from repetition."
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <Reveal>
            <div>
              {practices.map((practice) => (
                <PracticeRow key={practice.slug} practice={practice} />
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-16">
            <div className="grid gap-8 border border-hairline bg-card p-8 md:grid-cols-[1fr_1.4fr] md:p-12">
              <SectionHeader
                eyebrow="Not sure where you fit?"
                title="Describe it in plain language."
              />
              <div className="flex flex-col justify-center gap-3 text-[15px] leading-relaxed text-ink-2">
                <p>
                  Many matters span practices — a departing founder touches
                  corporate, employment, and tax at once. The consultation asks
                  one question about your situation; the reviewing partner
                  assembles the right team, not just the nearest department.
                </p>
                <p className="text-sm text-ink-3">
                  Cross-practice matters are staffed under a single
                  accountable partner.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTABand
        title="Start with a conversation, not a retainer."
        sub="Thirty minutes with the partner who would run your matter. No fee, no obligation, no sales scripts."
      />
    </>
  );
}
