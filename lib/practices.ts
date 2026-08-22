export type Practice = {
  slug: string;
  name: string;
  number: string;
  tagline: string;
  short: string;
  stat: { value: string; label: string };
  overview: string[];
  matters: { title: string; body: string }[];
  approach: { title: string; body: string }[];
  attorneySlugs: string[];
  insightSlugs: string[];
  faqs: { q: string; a: string }[];
};

export const practices: Practice[] = [
  {
    slug: "corporate-ma",
    name: "Corporate & M&A",
    number: "01",
    tagline:
      "Transactions and governance for companies that cannot afford a redo.",
    short:
      "Mergers & acquisitions, commercial contracts, and corporate governance — handled partner-led, end to end.",
    stat: { value: "$2.4B", label: "transaction value advised" },
    overview: [
      "We advise buyers, sellers, boards, and investors across the full corporate lifecycle — from formation and founder arrangements through growth capital, acquisitions, exits, and everything that keeps the company compliant in between.",
      "The practice is deliberately mid-market and cross-border. Our clients are typically companies transacting between $10M and $500M, private equity and venture investors, and the boards of institutions that need counsel who can see around corners.",
    ],
    matters: [
      {
        title: "Mergers & Acquisitions",
        body: "Buy-side and sell-side M&A, carve-outs, management buyouts, and take-privates — with diligence, structuring, and negotiation led by partners.",
      },
      {
        title: "Commercial Contracts",
        body: "Strategic supplier, licensing, distribution, and joint-venture agreements where terms carry real commercial risk.",
      },
      {
        title: "Corporate Governance",
        body: "Board advisory, shareholder arrangements, fiduciary issues, special committee work, and crisis governance.",
      },
      {
        title: "Private Capital",
        body: "Venture and growth financings, fund formation side-letter negotiation, and investor relations frameworks.",
      },
      {
        title: "Restructuring & Special Situations",
        body: "Out-of-court restructurings, distressed M&A, and stakeholder negotiations when the standard playbook doesn't apply.",
      },
    ],
    approach: [
      {
        title: "Diligence that finds what matters",
        body: "We rank findings by deal impact, not by volume. You get three pages of decisions to make, not three hundred pages of noise.",
      },
      {
        title: "Terms before paper",
        body: "We negotiate the economics and risk allocation in the term sheet stage, where leverage lives — then draft to match.",
      },
      {
        title: "One accountable partner",
        body: "A single partner owns your transaction from kickoff to closing. Associates execute; judgment doesn't get delegated.",
      },
      {
        title: "Built for signing day",
        body: "Every matter runs on a closing checklist visible to you. No surprises in the final week — that's a discipline, not luck.",
      },
    ],
    attorneySlugs: ["margaret-aldous", "daniel-reyes", "sofia-lindqvist"],
    insightSlugs: ["term-sheet-leverage", "cross-border-ma-checklist"],
    faqs: [
      {
        q: "What deal sizes do you handle?",
        a: "Most transactions fall between $10M and $500M enterprise value. Below that range we're often still the right fit for first institutional rounds or complex commercial arrangements; above it, we regularly co-counsel on specific workstreams.",
      },
      {
        q: "Do you work with our existing counsel?",
        a: "Frequently. We often act as lead counsel alongside specialist firms in tax, antitrust, or foreign jurisdictions — with one integrated workplan and a single point of accountability.",
      },
      {
        q: "How do you price M&A work?",
        a: "Fixed fees per phase wherever scope allows, with success-based components available on sell-side mandates. You'll know the structure before work begins.",
      },
    ],
  },
  {
    slug: "litigation-arbitration",
    name: "Litigation & Arbitration",
    number: "02",
    tagline: "Disputes resolved by preparation, not posture.",
    short:
      "Commercial litigation and international arbitration across courts and tribunals in twelve jurisdictions.",
    stat: { value: "12", label: "jurisdictions of practice" },
    overview: [
      "When a dispute threatens value, relationships, or reputation, the strategy matters more than the motion calendar. We litigate and arbitrate commercial disputes with an emphasis on early case assessment — because most disputes are won, lost, or settled on the strength of preparation in the first ninety days.",
      "Our advocates appear before state and federal courts, the ICC, LCIA, UNCITRAL, and AAA, and in seat arbitrations from New York to London to Singapore.",
    ],
    matters: [
      {
        title: "Commercial Disputes",
        body: "Contract breaches, partnership and shareholder conflicts, fraud claims, and business torts where real money is on the table.",
      },
      {
        title: "International Arbitration",
        body: "Institutional and ad hoc arbitration under all major rules, including enforcement and challenge proceedings.",
      },
      {
        title: "Employment Disputes",
        body: "Executive departures, non-compete and trade-secret actions, discrimination claims, and workplace investigations.",
      },
      {
        title: "Pre-Dispute Strategy",
        body: "Demand response, preservation programs, and negotiated resolutions positioned to avoid filing entirely.",
      },
      {
        title: "Appellate & Critical Motions",
        body: "Dispositive motions and appeals handled by lawyers who write for a living — because at this level, briefs decide cases.",
      },
    ],
    approach: [
      {
        title: "Ninety-day case plan",
        body: "Within the first quarter you receive a written assessment: strengths, exposure, likely range of outcomes, and a budget for each path.",
      },
      {
        title: "Budgets without asterisks",
        body: "Phase budgets with defined deliverables. When strategy changes, you approve the change before it bills.",
      },
      {
        title: "Prepare like it's trial",
        body: "Cases built for decision-makers who weren't in the room — because settlement leverage comes from being ready.",
      },
      {
        title: "Settle from strength",
        body: "We pursue resolution windows aggressively when they favor you. Most of our matters resolve before hearing — on terms our clients chose.",
      },
    ],
    attorneySlugs: ["thomas-reyes", "james-okonkwo", "priya-raman"],
    insightSlugs: ["first-ninety-days-dispute", "arbitration-clause-mistakes"],
    faqs: [
      {
        q: "Will I actually go to trial?",
        a: "Statistically, most commercial disputes resolve before final hearing. We prepare every matter as if trial is certain, because that preparation is what creates favorable resolution leverage.",
      },
      {
        q: "Can you take over a case another firm started?",
        a: "Yes, and we do so regularly. We begin with a candid file assessment — including whether prior strategy should be preserved or reset.",
      },
      {
        q: "Do you offer alternative fee structures for disputes?",
        a: "Beyond phased fixed budgets, we offer flat-fee pre-litigation assessments and hybrid structures for larger matters. Litigation shouldn't be an open tab.",
      },
    ],
  },
  {
    slug: "immigration",
    name: "Immigration",
    number: "03",
    tagline: "Movement of people, managed like the asset it is.",
    short:
      "Business immigration, global relocation, and visa strategy for companies and exceptional individuals.",
    stat: { value: "40+", label: "nationalities served annually" },
    overview: [
      "For growing companies, immigration is infrastructure. We design visa strategies that keep hiring plans, funding timelines, and relocations on schedule — and we handle the individual cases inside those programs with the same rigor as a closing.",
      "The practice serves employers building teams across borders, founders relocating to build where their capital is, and families whose futures depend on a file being right the first time.",
    ],
    matters: [
      {
        title: "Business Immigration",
        body: "H-1B, L-1, O-1, TN, and E-2 strategy and filings, plus PERM labor certification and green card sequencing for key staff.",
      },
      {
        title: "Global Relocation",
        body: "Multi-country relocation programs coordinated through vetted correspondent counsel — one point of contact, consistent standards.",
      },
      {
        title: "Visas & Status",
        body: "Extraordinary ability, investor, and treaty visas; status maintenance, extensions, changes, and consular strategy.",
      },
      {
        title: "Compliance & Audits",
        body: "I-9 and public-access file compliance, worksite enforcement response, and right-to-work programs for multi-state employers.",
      },
      {
        title: "Founders & Investors",
        body: "Immigration strategy woven into fundraising and incorporation decisions — the visa conversation belongs before the wire hits.",
      },
    ],
    approach: [
      {
        title: "Strategy before paperwork",
        body: "Every case starts with a sequencing review: what you'll need in two years determines what we file today.",
      },
      {
        title: "Evidence-grade preparation",
        body: "Petitions built as advocacy documents, structured to survive scrutiny — not form-fills with attachments.",
      },
      {
        title: "Timeline honesty",
        body: "You get realistic processing expectations and contingency paths upfront, updated as regulations shift.",
      },
      {
        title: "One team, every country",
        body: "US filings and global relocations run through one matter team with correspondent oversight — nothing falls between borders.",
      },
    ],
    attorneySlugs: ["priya-raman", "sofia-lindqvist"],
    insightSlugs: ["h1b-cap-season-playbook", "founder-visa-timing"],
    faqs: [
      {
        q: "How early should we start an immigration strategy?",
        a: "Ideally before the offer letter. Filing categories, timing caps, and nationality-specific constraints can shape recruiting, compensation structure, and even entity location.",
      },
      {
        q: "Do you handle family applications too?",
        a: "Yes — for employees of corporate clients and as standalone engagements. Family stability is workforce stability; we treat both with the same seriousness.",
      },
      {
        q: "What if a case has already been denied elsewhere?",
        a: "We start with the full file and the denial grounds. Many refusals are curable with better evidence architecture or a different category — some aren't, and we'll tell you which honestly.",
      },
    ],
  },
  {
    slug: "employment",
    name: "Employment Law",
    number: "04",
    tagline: "Workforce decisions made defensibly.",
    short:
      "Counsel and disputes for executives, employers, and boards on the decisions people remember.",
    stat: { value: "94%", label: "client retention rate" },
    overview: [
      "Employment law is where legal risk and human stakes intersect. We advise employers on the decisions that define culture and liability — hires, departures, restructurings, investigations — and represent executives whose careers are on the line.",
      "On the employer side, we build the policies, agreements, and training that prevent disputes. On the executive side, we negotiate exits, enforce rights, and protect reputations.",
    ],
    matters: [
      {
        title: "Executive Contracts & Exits",
        body: "Offer negotiation, severance, change-of-control protections, and equity treatment when leadership transitions.",
      },
      {
        title: "Restructurings & Reductions",
        body: "Reduction-in-force planning, WARN analysis, and execution that treats people fairly while protecting the company.",
      },
      {
        title: "Workplace Investigations",
        body: "Independent internal investigations conducted to a standard that holds up — to regulators, boards, and juries.",
      },
      {
        title: "Non-Compete & Trade Secrets",
        body: "Enforcement and defense of restrictive covenants across states that treat them very differently.",
      },
      {
        title: "Policies & Training",
        body: "Handbooks, complaint channels, manager training, and audits that reduce claims before they exist.",
      },
    ],
    approach: [
      {
        title: "Facts first, always",
        body: "Investigations and advice start with disciplined fact development. Position follows evidence — never the reverse.",
      },
      {
        title: "Document like it will be read aloud",
        body: "We write advice, policies, and communications assuming the worst reader. Because sometimes they are.",
      },
      {
        title: "Both sides of the table",
        body: "Having represented employers and executives, we know how each side evaluates risk — which makes us harder to bluff.",
      },
      {
        title: "Culture is compliance",
        body: "The best employment defense is an organization where problems surface early. We help build that, not just react to its absence.",
      },
    ],
    attorneySlugs: ["james-okonkwo", "margaret-aldous"],
    insightSlugs: ["non-compete-map-2026", "risky-exit-checklist"],
    faqs: [
      {
        q: "Do you represent employees as well as companies?",
        a: "Yes — senior executives and professionals in contract negotiation, separation, and dispute matters, subject to conflict checks. The mix makes our advice sharper on both sides.",
      },
      {
        q: "Can you help before a problem exists?",
        a: "That's most of the practice: handbooks, agreements, training, and structured advice on live decisions before they harden into claims.",
      },
      {
        q: "What does an investigation engagement look like?",
        a: "Defined scope, independence protocols, a written report, and remediation recommendations. We can serve as outside investigator or counsel to the investigation, depending on the governance needs.",
      },
    ],
  },
  {
    slug: "intellectual-property",
    name: "Intellectual Property",
    number: "05",
    tagline: "The assets nobody can touch get protected first.",
    short:
      "IP strategy, portfolio management, licensing, and disputes for technology and creative businesses.",
    stat: { value: "$180M+", label: "licensed IP under management" },
    overview: [
      "For technology, media, and brand-led businesses, intellectual property isn't a legal afterthought — it's the balance sheet. We build IP portfolios aligned to business model, negotiate licenses that monetize them, and enforce them when the line gets crossed.",
      "The practice spans patents and trade secrets, trademarks and copyrights, data rights, and the contracts that hold the whole structure together.",
    ],
    matters: [
      {
        title: "Patents & Trade Secrets",
        body: "Portfolio strategy, prosecution coordination, trade-secret programs, and employee/contractor IP hygiene.",
      },
      {
        title: "Trademarks & Brand",
        body: "Clearance, registration, opposition proceedings, and global brand protection programs.",
      },
      {
        title: "Licensing & Commercialization",
        body: "Inbound and outbound licenses, SaaS and data terms, OEM arrangements, and royalty structures.",
      },
      {
        title: "IP Disputes",
        body: "Infringement actions, defense matters, TTAB proceedings, and cease-and-desist strategy that avoids escalation traps.",
      },
      {
        title: "IP in Transactions",
        body: "Diligence and structuring so deals capture what the IP is actually worth — the part generic diligence misses.",
      },
    ],
    approach: [
      {
        title: "Business model first",
        body: "Protection follows revenue. We map what actually drives your margins before recommending what to register.",
      },
      {
        title: "Portfolios with pruning cycles",
        body: "Annual reviews kill dead weight. Maintenance fees on forgotten filings are how budgets quietly bleed.",
      },
      {
        title: "Contracts carry the load",
        body: "Most IP value is won or lost in boilerplate. We treat license terms, assignment clauses, and data rights as first-order issues.",
      },
      {
        title: "Escalation discipline",
        body: "Enforcement letters sent strategically, not emotionally. Every demand considers how it reads to the judge who might see it later.",
      },
    ],
    attorneySlugs: ["sofia-lindqvist", "daniel-ashworth", "margaret-aldous"],
    insightSlugs: ["trade-secret-hygiene", "saas-data-rights-trap"],
    faqs: [
      {
        q: "When does a startup actually need IP counsel?",
        a: "Before the first significant disclosure or hire. Founder assignments, provisional strategy, and confidentiality hygiene cost little early and are nearly impossible to retrofit.",
      },
      {
        q: "Do you handle patent prosecution directly?",
        a: "We coordinate prosecution with specialist technical counsel under our strategy direction, and handle the surrounding matters — ownership, licensing, disputes — directly.",
      },
      {
        q: "Someone copied our product. What now?",
        a: "A structured assessment: what's actually protected, where, and what escalation serves the business. Sometimes the answer is a well-drafted letter; sometimes it's silence and a better moat.",
      },
    ],
  },
  {
    slug: "tax-private-clients",
    name: "Tax & Private Clients",
    number: "06",
    tagline: "Structure today so tomorrow doesn't renegotiate.",
    short:
      "Cross-border tax planning, entity structuring, and private client matters for founders and families.",
    stat: { value: "9", label: "figures planned across borders" },
    overview: [
      "Tax outcomes are designed years before they're assessed. We advise founders, families, and their companies on the structures — entities, trusts, holdings, and cross-border arrangements — that make growth, exit, and succession happen without avoidable leakage.",
      "Where specialized positions require it, we bring in and direct top-tier tax accounting counsel, keeping strategy unified under one roof.",
    ],
    matters: [
      {
        title: "Transaction Structuring",
        body: "Deal and holding structures for M&A and investments that survive diligence and audit alike.",
      },
      {
        title: "Founder & Equity Planning",
        body: "83(b) timing, QSBS qualification, option pool mechanics, and exit-year planning started early enough to matter.",
      },
      {
        title: "Cross-Border Families",
        body: "Pre-immigration planning, residency management, and treaty-aware structuring for internationally mobile clients.",
      },
      {
        title: "Trusts & Succession",
        body: "Trust formation, estate integration, and succession frameworks for owners transitioning control.",
      },
      {
        title: "Controversy & Positions",
        body: "Audit defense, voluntary disclosures, and opinion support for aggressive-but-defensible positions.",
      },
    ],
    approach: [
      {
        title: "Plan before the event",
        body: "Tax planning after the signature is archaeology. We engage before term sheets, before relocations, before liquidity.",
      },
      {
        title: "Defensible aggression",
        body: "We pursue every advantage that survives scrutiny and decline the ones that don't. Substances over labels, always.",
      },
      {
        title: "One integrated picture",
        body: "Corporate, personal, and cross-border threads reviewed together — because your CFO's entity chart and your estate plan are the same problem.",
      },
      {
        title: "Plain-language memos",
        body: "Our written advice is readable by the person paying for it, and durable enough to hand to the next advisor.",
      },
    ],
    attorneySlugs: ["daniel-ashworth", "margaret-aldous"],
    insightSlugs: ["qsbs-window", "pre-immigration-tax-steps"],
    faqs: [
      {
        q: "I'm selling my company next year. Is it too late for planning?",
        a: "Probably not. Twelve months still allows meaningful structuring around character of gain, residency timing, and charitable components — but each month of delay closes options. Start now.",
      },
      {
        q: "Do you replace my accountant?",
        a: "No — we work alongside them. Legal structure and tax return preparation are different disciplines; the best outcomes come from both, coordinated.",
      },
      {
        q: "How cross-border can you go?",
        a: "US–UK–EU corridors are home turf. Beyond that, we direct a vetted correspondent network under single-point responsibility.",
      },
    ],
  },
];
