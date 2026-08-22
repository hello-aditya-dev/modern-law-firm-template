import type { Metadata } from "next";
import { Container, DisclaimerNote } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Accordion } from "@/components/accordion";
import { CTABand } from "@/components/cta-band";
import { faqGroups } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "How engagements start, how fees work, and how confidentiality operates at Aldervane.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Questions"
        title="Asked on every first call."
        sub="If your question isn't here, the consultation is where it gets answered — candidly."
      />

      <section className="pb-24 md:pb-32">
        <Container className="max-w-[840px]">
          {faqGroups.map((group, gi) => (
            <div key={group.group} className={gi > 0 ? "mt-16" : ""}>
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-brass">
                  {String(gi + 1).padStart(2, "0")} · {group.group}
                </p>
                <p className="mt-1.5 text-sm text-ink-3">{group.blurb}</p>
              </Reveal>
              <Reveal delay={80} className="mt-6">
                <Accordion items={group.items} />
              </Reveal>
            </div>
          ))}

          <Reveal className="mt-14">
            <DisclaimerNote>
              These answers are general information about how the firm
              operates, not legal advice. Engagement terms are confirmed in
              writing for every matter.
            </DisclaimerNote>
          </Reveal>
        </Container>
      </section>

      <CTABand
        eyebrow="The question that matters"
        title="Yours."
        sub="Thirty minutes with a partner. Bring the question you've been avoiding."
      />
    </>
  );
}
