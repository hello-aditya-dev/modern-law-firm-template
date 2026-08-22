import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { InsightCard } from "@/components/cards";
import { CTABand } from "@/components/cta-band";
import { insights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practice guides, case updates, and legal alerts written by the partners who handle the matters.",
};

const categories = ["All", "Practice Guides", "Insights", "Case Updates", "Legal Alerts"] as const;

export default function InsightsPage() {
  const [featured, ...rest] = insights;

  return (
    <>
      <PageHero
        eyebrow="Resource Center"
        title="Writing worth a lawyer's time."
        sub="Practice guides, case notes, and alerts — published when there's something useful to say, never on a content calendar."
      />

      <section className="pb-24 md:pb-32">
        <Container>
          {/* Category index (editorial, non-filtered) */}
          <Reveal className="mb-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.16em] text-ink-3">
            {categories.map((cat) => (
              <span key={cat} className={cat === "All" ? "text-brass" : ""}>{cat}</span>
            ))}
          </Reveal>

          {/* Featured */}
          <Reveal>
            <a
              href={`/insights/${featured.slug}`}
              className="group grid gap-8 border border-hairline bg-card transition-all duration-200 ease-out-expo hover:-translate-y-1 hover:border-navy/40 lg:grid-cols-[1fr_1.3fr]"
            >
              <div className="navy-weave relative hidden min-h-[280px] bg-navy lg:block">
                <p className="absolute bottom-8 left-8 right-8 font-display text-2xl italic leading-snug text-paper">
                  {featured.excerpt.split(".")[0]}.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-4 p-8 md:p-12">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-brass">
                  Featured · {featured.category}
                </p>
                <h2 className="font-display text-[clamp(26px,3.5vw,36px)] font-medium leading-tight tracking-[-0.015em] group-hover:text-navy">
                  {featured.title}
                </h2>
                <p className="max-w-lg text-[15px] leading-relaxed text-ink-2">
                  {featured.excerpt}
                </p>
                <p className="mt-2 font-mono text-xs text-ink-3">
                  {featured.readingTime}
                </p>
              </div>
            </a>
          </Reveal>

          {/* Grid */}
          <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((insight, i) => (
              <Reveal key={insight.slug} delay={(i % 3) * 70}>
                <InsightCard insight={insight} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        eyebrow="Beyond reading"
        title="Bring the question the article didn't answer."
        sub="Every insight here came out of a real consultation. Yours could shape the next one."
      />
    </>
  );
}
