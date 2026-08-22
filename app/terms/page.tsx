import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing use of the Aldervane website.",
};

const sections = [
  {
    h: "1. Acceptance",
    p: [
      "By accessing this website you agree to these terms. If you do not agree, please discontinue use. The firm may update these terms; continued use constitutes acceptance of updates.",
    ],
  },
  {
    h: "2. No legal advice",
    p: [
      "Content on this site — including articles, guides, and representative matter descriptions — is general information for informational purposes only. It is not legal advice, does not address any specific situation, and must not be relied upon as a substitute for consulting qualified counsel about your circumstances.",
    ],
  },
  {
    h: "3. No attorney–client relationship",
    p: [
      "Use of this site, submission of forms, or receipt of responses does not create an attorney–client relationship. Such a relationship arises only upon execution of a written engagement agreement signed by the firm. Until then, information sent to us may not be privileged or protected as you expect.",
    ],
  },
  {
    h: "4. Prior results",
    p: [
      "Representative matters describe past work that is generalized for confidentiality. Prior results do not guarantee or predict a similar outcome in any future matter.",
    ],
  },
  {
    h: "5. Intellectual property",
    p: [
      "Site content, design, and materials are the property of the firm or its licensors. You may view and print pages for personal, non-commercial reference. Other reproduction, distribution, or derivative use requires prior written permission.",
    ],
  },
  {
    h: "6. Limitation of liability & governing law",
    p: [
      "The site is provided 'as is' without warranties of any kind. To the fullest extent permitted by law, the firm disclaims liability for damages arising from use of the site. These terms are governed by the laws of the State of New York, without regard to conflict-of-laws principles.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        sub="Effective date: January 1, 2026 · Template content — replace with your firm's terms reviewed by counsel."
      />
      <section className="pb-24 md:pb-32">
        <Container className="max-w-[760px]">
          <div className="divide-y divide-hairline border-y border-hairline">
            {sections.map((s) => (
              <div key={s.h} className="py-8">
                <h2 className="font-display text-xl font-medium tracking-[-0.01em]">{s.h}</h2>
                {s.p.map((para, j) => (
                  <p key={j} className="mt-3 text-[15px] leading-relaxed text-ink-2">
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
