import type { Metadata } from "next";
import { Container, SectionHeader, DisclaimerNote } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { MatterCard } from "@/components/cards";
import { CTABand } from "@/components/cta-band";
import { matters, matterDisclaimer } from "@/lib/matters";
import { practices } from "@/lib/practices";

export const metadata: Metadata = {
  title: "Representative Matters",
  description:
    "Selected representative engagements across corporate, disputes, immigration, employment, IP and tax — generalized for confidentiality.",
};

export default function MattersPage() {
  const grouped = practices.map((practice) => ({
    practice,
    items: matters.filter((m) => m.practiceSlug === practice.slug),
  })).filter((g) => g.items.length > 0);

  return (
    <>
      <PageHero
        eyebrow="Representative Matters"
        title="The record speaks carefully."
        sub="Selected engagements, generalized to protect confidentiality. What matters is not the size of the number — it's the pattern of judgment."
      />

      <section className="pb-16">
        <Container>
          <Reveal>
            <DisclaimerNote>{matterDisclaimer}</DisclaimerNote>
          </Reveal>

          {grouped.map(({ practice, items }) => (
            <div key={practice.slug} className="mt-16 first-of-type:mt-12">
              <Reveal className="mb-8 flex items-baseline gap-4">
                <span className="font-display text-lg italic text-brass">{practice.number}</span>
                <h2 className="font-display text-2xl font-medium tracking-[-0.01em] md:text-3xl">
                  {practice.name}
                </h2>
              </Reveal>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {items.map((matter, i) => (
                  <Reveal key={matter.id} delay={i * 70}>
                    <MatterCard matter={matter} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* Anatomy of a matter */}
      <section className="border-t border-hairline bg-card py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="How we document"
            title="Every matter, five honest fields."
            sub="This is the structure we use internally and on this page — because vague case studies are marketing, not information."
          />
          <div className="mt-12 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-5">
            {[
              { label: "Matter type", note: "What kind of engagement" },
              { label: "Client industry", note: "Sector context only — never the name" },
              { label: "Challenge", note: "The actual problem at intake" },
              { label: "Legal strategy", note: "The approach chosen and why" },
              { label: "Resolution", note: "Outcome with honest framing" },
            ].map((field, i) => (
              <Reveal key={field.label} delay={i * 60}>
                <div className="h-full bg-card p-6">
                  <p className="font-display text-xl italic text-brass">{String(i + 1).padStart(2, "0")}</p>
                  <p className="mt-3 font-medium">{field.label}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{field.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        eyebrow="Add your matter"
        title="Every record here started with a consultation."
        sub="Bring us the situation. We'll tell you honestly what we'd do — before you owe us anything."
      />
    </>
  );
}
