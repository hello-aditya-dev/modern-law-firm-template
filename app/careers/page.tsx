import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { careers } from "@/lib/firm";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join a partner-led firm where associates get real responsibility and judgment is trained, not rationed.",
};

const benefits = [
  { title: "Partner apprenticeship", body: "You draft the documents partners sign. Feedback is line-by-line and same-week." },
  { title: "Real matters early", body: "Second-years argue motions and run diligence streams. Capacity is earned, not hoarded." },
  { title: "Honest hours", body: "Busy seasons exist. So do enforced quiet weeks. Utilization targets are published internally." },
  { title: "Two cities, one firm", body: "NY–London mobility for high performers across both offices." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Train where judgment comes from."
        sub="We hire fewer lawyers than our peer set and develop them deliberately. If you want responsibility earlier than the market gives it, this is the room."
      />

      {/* Open roles */}
      <section className="pb-24 md:pb-32">
        <Container>
          <Reveal className="mb-8">
            <Eyebrow>Open positions</Eyebrow>
          </Reveal>
          <div className="divide-y divide-hairline border-y border-hairline">
            {careers.map((role, i) => (
              <Reveal key={role.role} delay={i * 60}>
                <article className="group grid gap-4 py-8 transition-colors md:grid-cols-[1fr_auto] md:items-center">
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h3 className="font-display text-2xl font-medium tracking-[-0.01em] group-hover:text-navy">
                        {role.role}
                      </h3>
                      <span className="font-mono text-xs uppercase tracking-[0.14em] text-brass">
                        {role.team}
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-xs text-ink-3">
                      {role.location} · {role.type}
                    </p>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-2">{role.body}</p>
                  </div>
                  <a
                    href={`mailto:careers@aldervane.law?subject=${encodeURIComponent(`Application — ${role.role}`)}`}
                    className="inline-flex h-10 w-fit items-center rounded-md border border-hairline-strong px-5 text-sm font-medium transition-all duration-200 hover:border-navy hover:text-navy"
                  >
                    Apply →
                  </a>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-6">
            <p className="text-sm text-ink-3">
              No role that fits? Strong candidates are always welcome at{" "}
              <a href="mailto:careers@aldervane.law" className="text-navy hover:underline">
                careers@aldervane.law
              </a>{" "}
              — include a writing sample you&rsquo;re proud of.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* What we offer */}
      <section className="border-t border-hairline bg-card py-20 md:py-28">
        <Container>
          <Reveal>
            <Eyebrow>The deal</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.01em]">
              What we ask, and what we give.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 60}>
                <div className="h-full bg-card p-7">
                  <p className="font-display text-lg italic text-brass">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 font-display text-lg font-medium leading-snug">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-2">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* EEO note */}
      <section className="border-t border-hairline py-12">
        <Container>
          <p className="max-w-3xl text-[12px] leading-relaxed text-ink-3">
            Aldervane LLP is an equal opportunity employer. All qualified
            applicants receive consideration without regard to race, color,
            religion, sex, sexual orientation, gender identity, national
            origin, disability, or veteran status. This page is template
            content; replace with your firm&rsquo;s actual policies and postings.
          </p>
        </Container>
      </section>
    </>
  );
}
