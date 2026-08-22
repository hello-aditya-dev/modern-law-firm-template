import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/reveal";

export function CTABand({
  eyebrow = "Next step",
  title = "Discuss your matter with a partner.",
  sub = "A thirty-minute consultation. An initial read on your position — and a candid view on whether we're the right firm.",
}: {
  eyebrow?: string;
  title?: string;
  sub?: string;
}) {
  return (
    <section className="pb-24 pt-4 md:pb-32">
      <Container>
        <Reveal>
          <div className="navy-weave relative overflow-hidden bg-navy px-6 py-16 md:px-16 md:py-24">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-line-paper"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-32 right-24 h-96 w-96 rounded-full border border-line-paper"
            />
            <div className="relative flex flex-col items-start gap-6">
              <Eyebrow>{eyebrow}</Eyebrow>
              <h2 className="max-w-2xl font-display text-[clamp(30px,4.5vw,48px)] font-medium leading-[1.08] tracking-[-0.015em] text-paper">
                {title}
              </h2>
              <p className="max-w-xl text-[17px] leading-relaxed text-paper-ink-2">
                {sub}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-6">
                <ButtonLink href="/consultation" size="lg" className="bg-paper text-navy hover:bg-white">
                  Request a Consultation
                </ButtonLink>
                <ButtonLink href="/practice-areas" variant="ghost" size="lg" className="text-paper">
                  Explore Practice Areas
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
