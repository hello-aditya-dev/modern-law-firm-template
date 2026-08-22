export type Attorney = {
  slug: string;
  name: string;
  title: string;
  initials: string;
  location: "New York" | "London";
  email: string;
  phone: string;
  bio: string[];
  admissions: string[];
  education: string[];
  languages: string[];
  practiceSlugs: string[];
  selectedMatters?: { title: string; body: string }[];
  publications?: { title: string; venue: string; year: string }[];
  speaking?: { title: string; venue: string; year: string }[];
  recognition?: { title: string; year: string }[];
};

export const attorneys: Attorney[] = [
  {
    slug: "margaret-aldous",
    name: "Margaret Aldous",
    title: "Managing Partner",
    initials: "MA",
    location: "New York",
    email: "maldous@aldervane.law",
    phone: "+1 (212) 555-0141",
    bio: [
      "Margaret has spent two decades on the buy-side and sell-side of mid-market transactions, with a particular instinct for deals where valuation and governance risk intertwine. She founded the firm's corporate practice and still closes every mandate she takes personally.",
      "Before Aldervane, Margaret led the Northeast M&A group at a national firm and served as outside corporate counsel to three companies through full lifecycles — formation to exit. Boards ask for her when a decision is close, because her memos end in recommendations, not options.",
    ],
    admissions: ["New York", "England & Wales (Solicitor, non-practising)"],
    education: [
      "J.D., Columbia Law School — Harlan Fiske Stone Scholar",
      "B.A., Economics, Williams College, magna cum laude",
    ],
    languages: ["English"],
    practiceSlugs: ["corporate-ma", "tax-private-clients", "intellectual-property"],
    selectedMatters: [
      {
        title: "Sale of a healthcare analytics platform",
        body: "Represented founders through a competitive $340M sale to a strategic acquirer, including carve-out of a regulated data subsidiary and founder rollover terms.",
      },
      {
        title: "Special committee, going-private transaction",
        body: "Advised an independent special committee of a listed issuer through a contested take-private, negotiating price improvement and minority protections.",
      },
      {
        title: "Cross-border joint venture",
        body: "Structured a US–German manufacturing JV with staged equity contributions and IP cross-licenses; still operating profitably a decade later.",
      },
    ],
    publications: [
      {
        title: "The Case for Fewer Options",
        venue: "Journal of Corporate Counsel",
        year: "2025",
      },
      { title: "Carve-Outs Without Regret", venue: "M&A Lawyer", year: "2023" },
    ],
    speaking: [
      {
        title: "Governance in Closely-Held Companies",
        venue: "NYU Corporation Law Institute",
        year: "2025",
      },
      {
        title: "Mid-Market M&A Panel",
        venue: "Transatlantic Business Summit, London",
        year: "2024",
      },
    ],
    recognition: [
      { title: "Chambers USA — Corporate/M&A (New York)", year: "2022–2026" },
      { title: "Best Lawyers in America — M&A Law", year: "2021–2026" },
    ],
  },
  {
    slug: "thomas-reyes",
    name: "Thomas Reyes",
    title: "Partner · Head of Disputes",
    initials: "TR",
    location: "New York",
    email: "treyes@aldervane.law",
    phone: "+1 (212) 555-0142",
    bio: [
      "Tom has tried commercial cases and argued appeals for twenty-two years, with a reputation built on early case assessment: he tells clients what a dispute will cost before it costs them. He has appeared as advocate in more than sixty arbitrations under ICC, LCIA, and AAA rules.",
      "His matters tend to involve contracts worth arguing about — shareholder disputes, post-closing claims, fraud, and trade-secret theft. Opposing counsel know his files arrive complete; judges know his briefs read themselves.",
    ],
    admissions: ["New York", "U.S. Courts of Appeals, Second Circuit", "Southern & Eastern Districts of New York"],
    education: [
      "J.D., Yale Law School",
      "B.A., History, University of Chicago",
    ],
    languages: ["English", "Spanish"],
    practiceSlugs: ["litigation-arbitration", "employment"],
    selectedMatters: [
      {
        title: "Post-closing earn-out dispute",
        body: "Won a $95M ICC arbitration for sellers against a buyer's integration defense; award confirmed without modification.",
      },
      {
        title: "Founder oppression claim",
        body: "Negotiated buyout at 3.4× the initial offer after building a valuation record through expedited discovery.",
      },
      {
        title: "Second Circuit appeal, contract interpretation",
        body: "Reversed summary judgment in a precedent-setting decision on implied covenants in distribution agreements.",
      },
    ],
    publications: [
      {
        title: "The First Ninety Days of a Commercial Dispute",
        venue: "Litigation Commentary",
        year: "2024",
      },
      { title: "Arbitration Clauses That Actually Arbitrate", venue: "Dispute Resolution Times", year: "2022" },
    ],
    speaking: [
      { title: "Advocacy Masterclass", venue: "College of Commercial Arbitrators", year: "2025" },
      { title: "Cross-Examination Workshop", venue: "NYSBA Trial Academy", year: "2023" },
    ],
    recognition: [
      { title: "Chambers USA — Litigation (New York)", year: "2020–2026" },
      { title: "Benchmark Litigation — Local Litigation Star", year: "2019–2026" },
    ],
  },
  {
    slug: "priya-raman",
    name: "Priya Raman",
    title: "Partner · Head of Immigration",
    initials: "PR",
    location: "New York",
    email: "praman@aldervane.law",
    phone: "+1 (212) 555-0143",
    bio: [
      "Priya builds immigration programs for companies whose growth depends on people who were born elsewhere. She advises general counsel and heads of talent on visa strategy the way others advise on securities: sequenced, documented, and defensible.",
      "Her practice spans employment-based nonimmigrant and immigrant categories, extraordinary-ability petitions, and global relocation programs across forty-plus nationalities of clients. She joined Aldervane to run immigration like a practice, not a processing center.",
    ],
    admissions: ["New York", "New Jersey"],
    education: [
      "J.D., Georgetown University Law Center",
      "B.Sc., International Politics, Georgetown University",
    ],
    languages: ["English", "Tamil", "Hindi"],
    practiceSlugs: ["immigration", "employment"],
    selectedMatters: [
      {
        title: "Global relocation program, fintech scale-up",
        body: "Designed and ran a 14-country relocation program moving 60 engineers across three continents in eleven months, zero missed start dates.",
      },
      {
        title: "Extraordinary ability petition, research scientist",
        body: "Approved EB-1A without RFE for a client previously denied twice by other counsel; rebuilt the evidence architecture around citation influence.",
      },
      {
        title: "Worksite enforcement response",
        body: "Led I-9 audit remediation and agency negotiation for a hospitality group, resolving proposed penalties at under four percent of exposure.",
      },
    ],
    publications: [
      { title: "Cap Season Is a Strategy Problem", venue: "Corporate Immigration Review", year: "2025" },
      { title: "Evidence Architecture in EB-1 Petitions", venue: "AILA Practice Advisor", year: "2023" },
    ],
    speaking: [
      { title: "Immigration for Founders", venue: "TechStars Founder Con", year: "2025" },
      { title: "Global Mobility Compliance", venue: "Worldwide ERC Global Workforce Symposium", year: "2024" },
    ],
    recognition: [
      { title: "Best Lawyers — Immigration Law", year: "2023–2026" },
      { title: "City & State NY — Trailblazers in Law", year: "2024" },
    ],
  },
  {
    slug: "james-okonkwo",
    name: "James Okonkwo",
    title: "Partner",
    initials: "JO",
    location: "London",
    email: "jokonkwo@aldervane.law",
    phone: "+44 20 7946 0951",
    bio: [
      "James handles the employment law of consequential decisions: executive departures, workforce restructurings, and investigations where credibility is the asset at stake. Trained in both New York and English practice, he moves fluently between the two systems.",
      "Employers retain him to build frameworks that keep them out of court; executives retain him when they're already in one. The dual perspective is deliberate — he believes you cannot advise an employer well if you have never sat opposite one.",
    ],
    admissions: ["England & Wales (Solicitor Advocate)", "New York"],
    education: [
      "LL.M., Columbia Law School",
      "BCL, University of Oxford — Exeter College",
      "LL.B., King's College London",
    ],
    languages: ["English", "French"],
    practiceSlugs: ["employment", "litigation-arbitration"],
    selectedMatters: [
      {
        title: "Group restructuring, financial services client",
        body: "Planned and executed a 400-role reduction across five European jurisdictions with zero successful claims and collective consultation completed inside statutory timelines.",
      },
      {
        title: "CEO separation negotiation",
        body: "Acted for a listed company negotiating an executive departure under intense press scrutiny; clean exit announced within one news cycle.",
      },
      {
        title: "Independent investigation, board complaint",
        body: "Conducted an independent investigation into board-level allegations; report accepted in full by regulators without further inquiry.",
      },
    ],
    publications: [
      { title: "Restrictive Covenants After the Reset", venue: "Employment Law Journal (UK)", year: "2025" },
      { title: "Investigations That Survive Scrutiny", venue: "Counsel Magazine", year: "2024" },
    ],
    speaking: [
      { title: "Executive Exits Panel", venue: "IBA Employment & Discrimination Conference", year: "2025" },
      { title: "Workforce Restructuring Masterclass", venue: "Legal Week Corporate Counsel Forum", year: "2024" },
    ],
    recognition: [
      { title: "Chambers UK — Employment (London)", year: "2023–2026" },
      { title: "Legal 500 — Next Generation Partner", year: "2024–2026" },
    ],
  },
  {
    slug: "sofia-lindqvist",
    name: "Sofia Lindqvist",
    title: "Partner",
    initials: "SL",
    location: "New York",
    email: "slindqvist@aldervane.law",
    phone: "+1 (212) 555-0145",
    bio: [
      "Sofia treats intellectual property as a balance-sheet discipline: portfolios mapped to revenue, licenses drafted to monetize, and enforcement used surgically. Her clients are technology, media, and consumer businesses whose most valuable assets nobody can physically touch.",
      "She began her career in-house at a global media company, which is why her licensing agreements anticipate the business questions lawyers usually discover too late.",
    ],
    admissions: ["New York", "Connecticut"],
    education: [
      "J.D., Fordham University School of Law — Intellectual Property Law Certificate",
      "M.Sc., Media & Communications, London School of Economics",
      "B.A., Comparative Literature, Stockholm University",
    ],
    languages: ["English", "Swedish", "German"],
    practiceSlugs: ["intellectual-property", "corporate-ma"],
    selectedMatters: [
      {
        title: "Data rights renegotiation, SaaS platform",
        body: "Renegotiated customer data usage rights across an enterprise customer base, unlocking a new product line valued internally at eight figures.",
      },
      {
        title: "Brand protection program, consumer goods",
        body: "Built a multi-jurisdiction trademark enforcement program that reduced marketplace counterfeit listings by ninety percent in a year.",
      },
      {
        title: "IP diligence, acquisition target",
        body: "Uncovered broken chain-of-title in a target's core patent family during diligence; renegotiated $22M off purchase price and secured corrective assignments.",
      },
    ],
    publications: [
      { title: "Your Data Clause Is a Product Decision", venue: "Stanford Tech Law Digest", year: "2025" },
      { title: "Portfolio Pruning: The Unsexy ROI", venue: "IP Quarterly", year: "2024" },
    ],
    speaking: [
      { title: "Licensing in the Age of AI Training Data", venue: "INTA Annual Meeting", year: "2025" },
      { title: "IP Diligence Workshop", venue: "ABA IPL Section Conference", year: "2024" },
    ],
    recognition: [
      { title: "WIPR Leaders — Recommended", year: "2023–2026" },
      { title: "Best Lawyers — Advertising & Marketing Law", year: "2025–2026" },
    ],
  },
  {
    slug: "daniel-ashworth",
    name: "Daniel Ashworth",
    title: "Partner · Head of Tax & Private Clients",
    initials: "DA",
    location: "London",
    email: "dashworth@aldervane.law",
    phone: "+44 20 7946 0953",
    bio: [
      "Daniel plans tax outcomes years before they're assessed. Founders bring him their cap tables; families bring him their maps of countries lived in. Both get the same discipline: every structure must survive scrutiny and make sense in plain English.",
      "A former big-four tax adviser turned lawyer, he bridges the two professions fluently — which is why accounting firms co-counsel with him rather than around him.",
    ],
    admissions: ["England & Wales (Solicitor)", "New York"],
    education: [
      "LL.M., Taxation, New York University School of Law",
      "M.A., Law & Finance, University of Cambridge — Trinity Hall",
    ],
    languages: ["English", "German"],
    practiceSlugs: ["tax-private-clients", "corporate-ma", "immigration"],
    selectedMatters: [
      {
        title: "Pre-exit structuring, SaaS founder",
        body: "Reorganized holdings eighteen months before a $210M sale, combining QSBS sequencing, trust structures, and residency planning; six figures saved per percentage point of complexity removed.",
      },
      {
        title: "Pre-immigration plan, family relocating US→UK",
        body: "Coordinated a two-year pre-move unwinding of PFIC-heavy holdings and establishment of treaty-aware trust architecture before day one of UK residence.",
      },
      {
        title: "Audit defense, transfer pricing",
        body: "Defended a cross-border royalty structure through a two-year examination, closed with no adjustment and penalties withdrawn.",
      },
    ],
    publications: [
      { title: "The QSBS Window Nobody Watches", venue: "Private Client Business", year: "2025" },
      { title: "Residency Is a Design Choice", venue: "Tax Notes International", year: "2024" },
    ],
    speaking: [
      { title: "Founder Exit Planning", venue: "Step Asia Conference", year: "2025" },
      { title: "Cross-Border Structuring Panel", venue: "IBA Taxation Section", year: "2024" },
    ],
    recognition: [
      { title: "Legal 500 — Private Client (London)", year: "2024–2026" },
      { title: "Citywealth Powerwomen List — Finalist", year: "2023" },
    ],
  },
];
