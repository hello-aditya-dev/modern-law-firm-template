import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { firm } from "@/lib/firm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "New York and London offices. Reach the practice team directly — responses within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach the right desk directly."
        sub="General inquires route to the practice teams; urgent matters reach a partner by phone."
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
            {/* Offices */}
            <Reveal>
              <div className="flex flex-col gap-10">
                {firm.offices.map((office) => (
                  <address key={office.city} className="not-italic">
                    <p className="font-display text-2xl font-medium">{office.city}</p>
                    <div className="mt-3 space-y-0.5 text-[15px] leading-relaxed text-ink-2">
                      {office.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                    <a
                      href={`tel:${office.phone.replace(/[^+\d]/g, "")}`}
                      className="mt-2 inline-block font-mono text-sm text-navy hover:underline"
                    >
                      {office.phone}
                    </a>
                  </address>
                ))}

                <div className="border-t border-hairline pt-8">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-brass">
                    Direct
                  </p>
                  <a href={`mailto:${firm.email}`} className="mt-2 block font-display text-xl text-navy hover:underline">
                    {firm.email}
                  </a>
                  <dl className="mt-6 space-y-2 font-mono text-xs text-ink-3">
                    <div className="flex justify-between gap-6">
                      <dt>Response time</dt>
                      <dd className="text-right text-ink">Within one business day</dd>
                    </div>
                    <div className="flex justify-between gap-6">
                      <dt>Urgent matters</dt>
                      <dd className="text-right text-ink">Call either office</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={100}>
              <div className="border border-hairline bg-card p-7 md:p-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
