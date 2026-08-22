import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Hairline, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { Monogram } from "@/components/cards";
import { CTABand } from "@/components/cta-band";
import { attorneys } from "@/lib/attorneys";
import { practices } from "@/lib/practices";

export function generateStaticParams() {
  return attorneys.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const attorney = attorneys.find((a) => a.slug === slug);
  if (!attorney) return {};
  return {
    title: `${attorney.name} — ${attorney.title}`,
    description: attorney.bio[0].slice(0, 155),
  };
}

export default async function AttorneyDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const attorney = attorneys.find((a) => a.slug === slug);
  if (!attorney) notFound();

  const memberPractices = attorney.practiceSlugs
    .map((s) => practices.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const idx = attorneys.findIndex((a) => a.slug === slug);
  const next = attorneys[(idx + 1) % attorneys.length];

  return (
    <>
      {/* Profile header */}
      <section className="paper-grain border-b border-hairline pb-14 pt-36 md:pt-48">
        <Container>
          <Reveal>
            <Link
              href="/attorneys"
              className="mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-ink-3 transition-colors hover:text-navy"
            >
              ← All attorneys
            </Link>
          </Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <Reveal delay={60}>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <Monogram initials={attorney.initials} size="xl" />
                <div className="flex flex-col gap-3">
                  <h1 className="font-display text-[clamp(32px,4.5vw,52px)] font-medium leading-[1.05] tracking-[-0.015em]">
                    {attorney.name}
                  </h1>
                  <p className="text-sm uppercase tracking-[0.16em] text-brass">
                    {attorney.title}
                  </p>
                  <p className="font-mono text-xs text-ink-3">
                    {attorney.location} ·{" "}
                    <a href={`mailto:${attorney.email}`} className="hover:text-navy hover:underline">
                      {attorney.email}
                    </a>
                  </p>
                </div>
              </div>
              <div className="mt-8 flex max-w-2xl flex-col gap-4 text-[17px] leading-relaxed text-ink-2">
                {attorney.bio.map((para, i) => (
                  <p key={i} className={i === 0 ? "dropcap" : ""}>{para}</p>
                ))}
              </div>
            </Reveal>

            {/* Credentials sidebar */}
            <Reveal delay={140}>
              <aside className="border border-hairline bg-card p-7 lg:sticky lg:top-24">
                <dl className="flex flex-col divide-y divide-hairline">
                  <SidebarGroup title="Practice areas">
                    <ul className="flex flex-col gap-1.5">
                      {memberPractices.map((p) => (
                        <li key={p.slug}>
                          <Link
                            href={`/practice-areas/${p.slug}`}
                            className="text-sm text-navy underline-offset-4 hover:underline"
                          >
                            {p.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </SidebarGroup>
                  <SidebarGroup title="Admissions">
                    <ul className="flex flex-col gap-1.5">
                      {attorney.admissions.map((item) => (
                        <li key={item} className="text-sm text-ink-2">{item}</li>
                      ))}
                    </ul>
                  </SidebarGroup>
                  <SidebarGroup title="Education">
                    <ul className="flex flex-col gap-1.5">
                      {attorney.education.map((item) => (
                        <li key={item} className="text-sm text-ink-2">{item}</li>
                      ))}
                    </ul>
                  </SidebarGroup>
                  <SidebarGroup title="Languages">
                    <p className="text-sm text-ink-2">{attorney.languages.join(" · ")}</p>
                  </SidebarGroup>
                  <SidebarGroup title="Contact">
                    <a
                      href={`mailto:${attorney.email}`}
                      className="text-sm text-navy underline-offset-4 hover:underline"
                    >
                      Email {attorney.name.split(" ")[0]}
                    </a>
                    <a href={`tel:${attorney.phone.replace(/[^+\d]/g, "")}`} className="mt-1 block font-mono text-xs text-ink-3">
                      {attorney.phone}
                    </a>
                  </SidebarGroup>
                </dl>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Selected matters */}
      {attorney.selectedMatters && (
        <ProfileSection title="Selected matters" eyebrow="Experience">
          <div className="grid gap-5 md:grid-cols-3">
            {attorney.selectedMatters.map((m, i) => (
              <Reveal key={m.title} delay={i * 70}>
                <article className="h-full border border-hairline bg-card p-6">
                  <h3 className="font-display text-lg font-medium leading-snug">{m.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-2">{m.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-6 text-[12px] leading-relaxed text-ink-3">
              Matters are generalized for confidentiality; some were handled prior to joining the firm. Prior results do not guarantee similar outcomes.
            </p>
          </Reveal>
        </ProfileSection>
      )}

      {/* Publications / Speaking / Recognition */}
      {(attorney.publications || attorney.speaking || attorney.recognition) && (
        <section className="border-t border-hairline bg-card py-20 md:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-3 lg:gap-10">
              {attorney.publications && (
                <ProfileList eyebrow="Publications" items={attorney.publications.map((p) => ({ main: p.title, sub: `${p.venue}, ${p.year}` }))} />
              )}
              {attorney.speaking && (
                <ProfileList eyebrow="Speaking" items={attorney.speaking.map((s) => ({ main: s.title, sub: `${s.venue}, ${s.year}` }))} />
              )}
              {attorney.recognition && (
                <ProfileList eyebrow="Recognition" items={attorney.recognition.map((r) => ({ main: r.title, sub: String(r.year) }))} />
              )}
            </div>
          </Container>
        </section>
      )}

      {/* Next attorney */}
      <section className="border-t border-hairline py-14">
        <Container>
          <Link
            href={`/attorneys/${next.slug}`}
            className="group flex items-center justify-between gap-6 border border-hairline bg-card px-7 py-6 transition-all duration-200 ease-out-expo hover:-translate-y-1 hover:border-navy/40"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-3">
                Next profile
              </p>
              <p className="mt-1 font-display text-xl font-medium group-hover:text-navy">
                {next.name} — <span className="text-brass">{next.title}</span>
              </p>
            </div>
            <span aria-hidden className="text-navy transition-transform duration-200 ease-out-expo group-hover:translate-x-1.5">→</span>
          </Link>
        </Container>
      </section>

      <CTABand
        eyebrow={`Work with ${attorney.name.split(" ")[0]}'s team`}
        title="Request a consultation."
        sub={`Your matter will be reviewed by ${attorney.name} or the partner leading the relevant practice.`}
      />
    </>
  );
}

function SidebarGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="py-5 first:pt-0 last:pb-0">
      <dt className="mb-2.5 font-mono text-xs uppercase tracking-[0.18em] text-brass">
        {title}
      </dt>
      <dd>{children}</dd>
    </div>
  );
}

function ProfileSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-hairline py-20 md:py-28">
      <Container>
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.01em]">{title}</h2>
        </Reveal>
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}

function ProfileList({
  eyebrow,
  items,
}: {
  eyebrow: string;
  items: { main: string; sub: string }[];
}) {
  return (
    <div>
      <Eyebrow>{eyebrow}</Eyebrow>
      <Hairline className="my-5" />
      <ul className="flex flex-col gap-5">
        {items.map((item) => (
          <li key={item.main + item.sub}>
            <p className="font-display text-lg font-medium leading-snug">{item.main}</p>
            <p className="mt-1 font-mono text-xs text-ink-3">{item.sub}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
