export const firm = {
  name: "Aldervane",
  suffix: "LLP",
  full: "Aldervane LLP",
  tagline: "Clear counsel for complex decisions.",
  description:
    "Strategic legal representation for businesses, institutions and individuals navigating high-stakes matters.",
  email: "counsel@aldervane.law",
  phone: "+1 (212) 555-0148",
  phoneLondon: "+44 20 7946 0958",
  established: 2009,
  nav: [
    { label: "Practice Areas", href: "/practice-areas" },
    { label: "Attorneys", href: "/attorneys" },
    { label: "Matters", href: "/matters" },
    { label: "Insights", href: "/insights" },
    { label: "Firm", href: "/firm" },
    { label: "Contact", href: "/contact" },
  ],
  offices: [
    {
      city: "New York",
      lines: ["590 Madison Avenue, 34th Floor", "New York, NY 10022"],
      phone: "+1 (212) 555-0148",
    },
    {
      city: "London",
      lines: ["8 St James's Square, 4th Floor", "London SW1Y 4JU"],
      phone: "+44 20 7946 0958",
    },
  ],
  sectors: [
    "Banking & Finance",
    "Technology",
    "Healthcare & Life Sciences",
    "Energy & Infrastructure",
    "Real Estate",
    "Media & Entertainment",
    "Manufacturing",
    "Private Capital",
  ],
  stats: [
    { value: 2.4, prefix: "$", suffix: "B", decimals: 1, label: "Transaction value advised" },
    { value: 300, suffix: "+", label: "High-stakes matters resolved" },
    { value: 12, suffix: "", label: "Jurisdictions of practice" },
    { value: 94, suffix: "%", label: "Client retention rate" },
  ],
  values: [
    {
      title: "Judgment over volume",
      body: "We take fewer matters and go deeper on each one. Every engagement is led by a partner who has handled the issue at scale before — not delegated to whoever has capacity.",
    },
    {
      title: "Candor as a strategy",
      body: "You will always know where you stand: the strength of your position, the realistic range of outcomes, and what we would do if it were our own matter.",
    },
    {
      title: "Preparation is the advantage",
      body: "Opponents see our files before they see our arguments. We build every matter as if it will be decided by someone who was not in the room.",
    },
    {
      title: "Discretion by default",
      body: "Most of our best work will never be publicized. Confidentiality is not a policy here; it is the operating condition of the firm.",
    },
  ],
  timeline: [
    { year: "2009", text: "Founded in New York by six partners from larger firms who wanted partner-led service without institutional overhead." },
    { year: "2013", text: "Opened the disputes practice; first cross-border arbitration won against a top-five global firm." },
    { year: "2017", text: "London office established, extending corporate and arbitration coverage across UK and EU matters." },
    { year: "2021", text: "Immigration and employment practices launched to serve portfolio clients end-to-end." },
    { year: "2026", text: "38 lawyers, two offices, twelve jurisdictions — still organized around a simple rule: partners do the work." },
  ],
  credentials: [
    "Band 1 recognition — Corporate & M&A (independent directory, NY region)",
    "Top-tier dispute resolution ranking, commercial arbitration",
    "Listed among leading business immigration practices",
    "Chambers-ranked partners across three practices",
    "ACQ Global Award — Technology M&A, mid-market",
    "Best Lawyers listings across five disciplines",
  ],
};

export const careers = [
  {
    role: "Corporate Associate (M&A)",
    team: "Corporate",
    location: "New York",
    type: "Full-time · 3–5 PQE",
    body: "Lead diligence workstreams and draft transaction documents on mid-market M&A and growth equity matters. Direct partner contact from day one.",
  },
  {
    role: "Arbitration Associate",
    team: "Disputes",
    location: "London",
    type: "Full-time · 2–4 PQE",
    body: "Support LCIA and ICC proceedings end-to-end: pleadings, witness preparation, hearings. Strong legal writing sample required.",
  },
  {
    role: "Business Immigration Paralegal",
    team: "Immigration",
    location: "New York",
    type: "Full-time · Hybrid",
    body: "Manage non-immigrant visa portfolios for technology and finance clients. Detail obsession is a genuine requirement, not a cliché.",
  },
];

export const helpOptions = [
  { value: "advice", label: "Advice on a specific matter" },
  { value: "ongoing", label: "Ongoing outside counsel" },
  { value: "dispute", label: "A dispute or litigation" },
  { value: "transaction", label: "A transaction or deal" },
  { value: "unsure", label: "I'm not sure yet" },
];
