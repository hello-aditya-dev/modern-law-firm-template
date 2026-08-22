import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/reveal";

export function PageHero({
  eyebrow,
  title,
  sub,
  children,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="paper-grain relative overflow-hidden pb-14 pt-36 md:pb-20 md:pt-48">
      <Container>
        <div className="flex max-w-3xl flex-col gap-5 border-l-2 border-brass pl-6 md:pl-10">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-[clamp(34px,5.5vw,60px)] font-medium leading-[1.06] tracking-[-0.015em] text-ink">
              {title}
            </h1>
          </Reveal>
          {sub ? (
            <Reveal delay={160}>
              <p className="max-w-xl text-lg leading-relaxed text-ink-2">{sub}</p>
            </Reveal>
          ) : null}
          {children ? (
            <Reveal delay={240} className="mt-2 flex flex-wrap gap-4">
              {children}
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

// Re-export button for convenience in hero CTAs
export { ButtonLink };
