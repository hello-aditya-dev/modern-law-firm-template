import Link from "next/link";
import { firm } from "@/lib/firm";
import { practices } from "@/lib/practices";
import { Container } from "@/components/ui";

const resourceLinks = [
  { label: "Representative Matters", href: "/matters" },
  { label: "Insights & Alerts", href: "/insights" },
  { label: "FAQ", href: "/faq" },
  { label: "Careers", href: "/careers" },
];

const firmLinks = [
  { label: "The Firm", href: "/firm" },
  { label: "Attorneys", href: "/attorneys" },
  { label: "Contact", href: "/contact" },
  { label: "Consultation", href: "/consultation" },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-paper">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-baseline gap-2.5">
              <span
                aria-hidden
                className="flex h-8 w-8 translate-y-[3px] items-center justify-center rounded-[4px] bg-paper font-display text-lg font-semibold leading-none text-navy-deep"
              >
                A
              </span>
              <span className="font-display text-xl font-semibold tracking-[-0.01em]">
                Aldervane
                <span className="ml-1 align-super text-[9px] uppercase tracking-widest text-paper-ink-3">
                  LLP
                </span>
              </span>
            </div>
            <p className="max-w-xs font-display text-lg italic leading-relaxed text-paper-ink-2">
              {firm.tagline}
            </p>
            <p className="max-w-xs text-[13px] leading-relaxed text-paper-ink-3">
              Established {firm.established}. New York · London.
            </p>
          </div>

          {/* Practices */}
          <nav aria-label="Practice areas" className="flex flex-col gap-4">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-paper-ink-3">
              Practice Areas
            </p>
            <ul className="flex flex-col gap-2.5">
              {practices.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/practice-areas/${p.slug}`}
                    className="text-sm text-paper-ink-2 transition-colors hover:text-paper"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Firm */}
          <nav aria-label="Firm" className="flex flex-col gap-4">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-paper-ink-3">
              Firm
            </p>
            <ul className="flex flex-col gap-2.5">
              {[...firmLinks, ...resourceLinks].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-paper-ink-2 transition-colors hover:text-paper"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Offices */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-paper-ink-3">
              Offices
            </p>
            {firm.offices.map((o) => (
              <address key={o.city} className="not-italic">
                <p className="text-sm font-medium">{o.city}</p>
                {o.lines.map((line) => (
                  <p key={line} className="text-[13px] text-paper-ink-3">
                    {line}
                  </p>
                ))}
                <a
                  href={`tel:${o.phone.replace(/[^+\d]/g, "")}`}
                  className="mt-1 block text-[13px] text-paper-ink-2 hover:text-paper"
                >
                  {o.phone}
                </a>
              </address>
            ))}
          </div>
        </div>

        {/* Legal notices */}
        <div className="mt-14 space-y-3 border-t border-line-paper pt-8 text-[12px] leading-relaxed text-paper-ink-3">
          <p>
            Attorney advertising. Prior results do not guarantee a similar
            outcome. The information on this site is for general information
            only and does not constitute legal advice, nor does it create an
            attorney–client relationship. Communicating with the firm through
            this site does not establish such a relationship; please do not
            send confidential information until one exists.
          </p>
          <p>
            This website is a demonstration template containing fictional firm,
            attorney, and matter information. Replace all content before
            publication and verify compliance with your jurisdiction&rsquo;s
            professional-conduct and advertising rules.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line-paper pt-6">
          <p className="text-xs text-paper-ink-3">
            © {new Date().getFullYear()} Aldervane LLP. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <Link href="/privacy" className="text-paper-ink-2 hover:text-paper">
              Privacy
            </Link>
            <Link href="/terms" className="text-paper-ink-2 hover:text-paper">
              Terms of Use
            </Link>
            <Link href="/careers" className="text-paper-ink-2 hover:text-paper">
              Careers
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
