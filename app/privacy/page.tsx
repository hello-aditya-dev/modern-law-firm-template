import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Aldervane collects, uses, and protects information.",
};

const sections = [
  {
    h: "1. Information we collect",
    p: [
      "We collect information you provide directly — such as your name, email address, organization, and matter description when you submit a consultation request or contact form — and limited technical data (browser type, pages visited) used to operate the site.",
    ],
  },
  {
    h: "2. How we use information",
    p: [
      "To respond to inquiries, conduct conflicts checks before substantive discussion, route matters to the appropriate practice team, and improve the website. We do not sell personal information, and we do not use client or prospective-client information to train machine-learning models.",
    ],
  },
  {
    h: "3. No attorney–client relationship",
    p: [
      "Communications through this website do not create an attorney–client relationship. Please do not send confidential or privileged information until the firm has confirmed — in writing — that an engagement exists and a conflict check is complete.",
    ],
  },
  {
    h: "4. Data retention & security",
    p: [
      "Inquiry records are retained only as long as needed for conflicts and engagement purposes. We apply industry-standard technical and organizational measures appropriate to legal-sector confidentiality obligations.",
    ],
  },
  {
    h: "5. Your rights",
    p: [
      "Depending on your jurisdiction (including GDPR and applicable US state laws), you may have rights of access, correction, deletion, and portability regarding personal data we hold. Requests can be directed to counsel@aldervane.law.",
    ],
  },
  {
    h: "6. Third-party services",
    p: [
      "This template may be connected to form-delivery, analytics, or scheduling providers by its operator. Any such integrations should be disclosed here with their privacy terms linked before publication.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        sub="Effective date: January 1, 2026 · Aldervane LLP (template content — replace with your firm's actual policy reviewed by counsel)."
      />
      <section className="pb-24 md:pb-32">
        <Container className="max-w-[760px]">
          <div className="divide-y divide-hairline border-y border-hairline">
            {sections.map((s, i) => (
              <div key={s.h} className="py-8">
                <h2 className="font-display text-xl font-medium tracking-[-0.01em]">{s.h}</h2>
                {s.p.map((para, j) => (
                  <p key={j} className="mt-3 text-[15px] leading-relaxed text-ink-2">
                    {para}
                  </p>
                ))}
                <p className="sr-only">{i}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
