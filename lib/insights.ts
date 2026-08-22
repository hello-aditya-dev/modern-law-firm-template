export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

export type Insight = {
  slug: string;
  title: string;
  category: "Insights" | "Practice Guides" | "Case Updates" | "Legal Alerts";
  excerpt: string;
  date: string;
  readingTime: string;
  authorSlug: string;
  practiceSlug?: string;
  body: Block[];
};

export const insights: Insight[] = [
  {
    slug: "term-sheet-leverage",
    title: "The deal is won at the term sheet, not the closing table",
    category: "Practice Guides",
    excerpt: "By signing day, ninety percent of the economic outcome is already decided. A guide to spending your leverage where it exists.",
    date: "2026-07-21",
    readingTime: "5 min read",
    authorSlug: "margaret-aldous",
    practiceSlug: "corporate-ma",
    body: [
      {
        type: "p",
        text: "Founders and boards often treat the term sheet as a formality on the way to the real negotiation. In our experience it is the real negotiation. By the time definitive documents are drafted, the parties' expectations, exclusivity, and risk allocation are substantially locked — and the side that treated the term sheet casually is negotiating from memory rather than leverage.",
      },
      { type: "h2", text: "Where leverage actually lives" },
      {
        type: "list",
        items: [
          "Exclusivity: never grant it without a binding milestone schedule and a walk-right if diligence reveals the expected.",
          "Indemnity architecture: caps, baskets, and survival periods set here rarely move later; escrows set here almost never shrink.",
          "Earn-out metrics: a metric you can't influence is a discount wearing a costume.",
          "Founder rollover: rollover economics negotiated now determine who controls the combined company later.",
        ],
      },
      { type: "h2", text: "The discipline that pays" },
      {
        type: "p",
        text: "We insist our clients decide their three non-negotiables before the first draft arrives, and we price everything else against those anchors. When both sides know what the other genuinely needs, drafting accelerates because trust compounds. When neither side has decided, every paragraph becomes a proxy war.",
      },
      {
        type: "quote",
        text: "Signing day should feel like confirmation, not discovery.",
      },
      {
        type: "p",
        text: "If the definitive-agreement phase surfaces a surprise economic term, something failed upstream — usually exclusivity granted too early or diligence sequenced too late. Fix the sequence, not just the clause.",
      },
    ],
  },
  {
    slug: "cross-border-ma-checklist",
    title: "A cross-border M&A checklist built from closed deals",
    category: "Practice Guides",
    excerpt: "Twelve items that separate transactions that close from transactions that die in month four.",
    date: "2026-06-30",
    readingTime: "6 min read",
    authorSlug: "margaret-aldous",
    practiceSlug: "corporate-ma",
    body: [
      {
        type: "p",
        text: "Cross-border transactions rarely fail on price. They fail on sequencing: regulatory filings started late, currency of obligation left ambiguous, and integration decisions made before the structure was final. This checklist condenses what we've learned closing US–UK–EU transactions into the order that actually works.",
      },
      { type: "h2", text: "Before the LOI" },
      {
        type: "list",
        items: [
          "Map every approval regime — merger control, FDI screening, sector regulators — with realistic clocks, not best-case clocks.",
          "Decide the governing law and dispute forum of the SPA as a commercial term, not boilerplate.",
          "Confirm currency of payment and currency of indemnity; they are different questions with different answers.",
          "Identify which employees transfer automatically and which require consent, per jurisdiction.",
        ],
      },
      { type: "h2", text: "Between LOI and signing" },
      {
        type: "list",
        items: [
          "Run regulatory strategy in parallel with diligence — never after it. Filings are calendar items; surprises are deal-breakers.",
          "Localize reps and warranties to actual local law exposure instead of importing a Delaware precedent wholesale.",
          "Agree the interim-operating covenant philosophy early: status quo means nothing consistent across borders unless defined.",
        ],
      },
      { type: "h2", text: "The week before signing" },
      {
        type: "p",
        text: "Re-run the approval map against any changed facts, confirm funds-flow mechanics with the paying banks in writing, and rehearse the closing agenda including who holds what in escrow. Closings go wrong at the seams between advisors; the checklist's job is removing seams.",
      },
      {
        type: "quote",
        text: "Every cross-border closing disaster we have seen was foreseeable at the LOI stage. Foreseeable is fixable.",
      },
    ],
  },
  {
    slug: "first-ninety-days-dispute",
    title: "The first ninety days decide most disputes — act like it",
    category: "Insights",
    excerpt: "Case assessment, preservation, and positioning in the first quarter cost less than improvisation ever will.",
    date: "2026-07-08",
    readingTime: "5 min read",
    authorSlug: "thomas-reyes",
    practiceSlug: "litigation-arbitration",
    body: [
      {
        type: "p",
        text: "Most commercial disputes are effectively decided long before anyone argues. Not formally — decided in the sense that by the end of the first quarter, one side understands the case better than the other, and everything afterward is execution of that advantage.",
      },
      { type: "h2", text: "What the first quarter is actually for" },
      {
        type: "list",
        items: [
          "Preservation: a defensible litigation hold issued immediately, before someone's retention policy does your opponent's discovery for them.",
          "Assessment: a written strengths-and-exposure memo with a number attached. Vague assessments produce vague settlements.",
          "Positioning: the demand response or complaint drafted with the eventual decision-maker in mind, not the immediate audience.",
          "Budget: phase costs approved before incurred, so strategy is chosen rather than defaulted into.",
        ],
      },
      { type: "h2", text: "Why early honesty is strategic" },
      {
        type: "p",
        text: "Clients sometimes want the first assessment optimistic. But an inflated view of a case produces two failures: refusing reasonable settlement windows, and building the case on the wrong documents. Candor in week three is cheaper than surprise in year two.",
      },
      {
        type: "quote",
        text: "Preparation is the only leverage available in every dispute, regardless of how strong the underlying position is.",
      },
      {
        type: "p",
        text: "Ninety days of disciplined work — hold, assessment, positioning, budget — converts uncertainty into a decision tree. From there, whether you resolve or fight, you're choosing rather than reacting.",
      },
    ],
  },
  {
    slug: "arbitration-clause-mistakes",
    title: "Five arbitration clauses that fail exactly when needed",
    category: "Insights",
    excerpt: "An arbitration clause is a machine. These five drafting errors break it under load.",
    date: "2026-05-19",
    readingTime: "4 min read",
    authorSlug: "thomas-reyes",
    practiceSlug: "litigation-arbitration",
    body: [
      {
        type: "p",
        text: "Parties discover what their arbitration clause actually says at the worst possible moment: when they need it. After sixty-plus arbitrations, we keep seeing the same five drafting failures. None are exotic. All are expensive.",
      },
      { type: "h2", text: "The five" },
      {
        type: "list",
        items: [
          "No seat specified. The seat determines supervisory court and procedural law. Omitting it invites a preliminary jurisdiction fight about the fight.",
          "Institution mismatched to dispute size. Rules designed for $50M cases drown small disputes in cost; rules designed for speed buckle under complex ones.",
          "Silence on language and location of hearings, guaranteeing procedural skirmishes that cost more than the translation would have.",
          "No interim-relief carve-out. Parties assume courts can protect assets pending arbitration. Some legal systems say otherwise.",
          "Asymmetric obligations without reciprocity drafting. One-sided clauses get one-sided treatment from tribunals and enforcing courts alike.",
        ],
      },
      { type: "h2", text: "The fix costs one hour" },
      {
        type: "p",
        text: "Seat, institution, language, hearing location, interim relief, and scope — six decisions, made deliberately, prevent the majority of arbitration-about-arbitration litigation. We include a standing clause menu in every commercial contract engagement precisely so this decision is made once, well, instead of repeatedly, badly.",
      },
    ],
  },
  {
    slug: "h1b-cap-season-playbook",
    title: "Cap season is a strategy problem, not a lottery ticket",
    category: "Practice Guides",
    excerpt: "Registration season rewards employers who planned in November. A sequencing guide for HR and GC teams.",
    date: "2026-02-24",
    readingTime: "5 min read",
    authorSlug: "priya-raman",
    practiceSlug: "immigration",
    body: [
      {
        type: "p",
        text: "Every March, employers rediscover that H-1B cap selection is random and their preparation was not random enough. The winners of cap season are rarely lucky — they are the companies that treated the preceding months as planning season.",
      },
      { type: "h2", text: "What planning season looks like" },
      {
        type: "list",
        items: [
          "Audit every F-1 STEM OPT employee's runway in autumn, not spring. Timelines that expire after cap season are candidates; timelines that expire before are problems requiring a different category entirely.",
          "Decide wage levels proactively. The prevailing wage you'll support is easier to budget in November than defend in April.",
          "Pre-clear public-access file infrastructure so selected registrations convert to filings in days, not weeks.",
          "Build the alternate-category bench: O-1, E-2, TN, L-1 options assessed per candidate while options still exist.",
        ],
      },
      { type: "h2", text: "For the ones not selected" },
      {
        type: "p",
        text: "A candidate not selected in the lottery still has value to your roadmap — cap-exempt employers, consular processing via L-1 after a year abroad, or day-one CPT edge cases each fit specific situations. What doesn't work is deciding in May what should have been decided in December.",
      },
      {
        type: "quote",
        text: "Immigration timelines reward organizations that work backward from the date they cannot miss.",
      },
    ],
  },
  {
    slug: "founder-visa-timing",
    title: "The visa conversation belongs before the wire hits",
    category: "Insights",
    excerpt: "Funding rounds change founders' immigration options. Sequencing entity, investment, and status is a design exercise.",
    date: "2026-04-15",
    readingTime: "4 min read",
    authorSlug: "priya-raman",
    practiceSlug: "immigration",
    body: [
      {
        type: "p",
        text: "Founders routinely optimize their financing structure and ignore how it locks their immigration options. Then, post-round, they learn that ownership percentages, source of funds, and even entity type determine whether investor visas, founder pathways, or intracompany transfers are available.",
      },
      { type: "h2", text: "Three decisions worth making early" },
      {
        type: "list",
        items: [
          "Ownership thresholds: several founder-friendly categories depend on percentage holdings that dilution will eventually destroy. Know your runway.",
          "Source-of-funds hygiene: treaty-investor routes examine where money came from. Clean paper trails take months to build and hours to ruin.",
          "Geography of substance: where the company truly operates affects both visa categories and tax residence — coordinate both plans or sabotage both.",
        ],
      },
      { type: "h2", text: "The pattern we see" },
      {
        type: "p",
        text: "The founders who relocate successfully treat immigration as part of incorporation week, alongside the charter and the IP assignments. The ones who struggle treat it as a travel question. Same information, opposite outcomes.",
      },
      {
        type: "p",
        text: "If you're raising with cross-border intentions, spend one hour with immigration counsel before the term sheet. It is the highest-leverage hour in the process.",
      },
    ],
  },
  {
    slug: "non-compete-map-2026",
    title: "Non-competes in 2026: a state-by-state reality check",
    category: "Case Updates",
    excerpt: "The federal ban collapsed; the state patchwork hardened. What enforceable looks like now.",
    date: "2026-06-11",
    readingTime: "5 min read",
    authorSlug: "james-okonkwo",
    practiceSlug: "employment",
    body: [
      {
        type: "p",
        text: "Following the failure of the sweeping federal prohibition, restrictive covenant law has settled into its natural condition: fifty laboratories of opinion. The practical consequence for multi-state employers is that 'our standard non-compete' is now a liability generator.",
      },
      { type: "h2", text: "The current map, broadly" },
      {
        type: "list",
        items: [
          "Bans or near-bans for most workers in a growing cohort of states, with income thresholds doing more work than job titles.",
          "Garden-leave and compensated-restraint regimes gaining legitimacy as the enforceable middle path.",
          "Courts blue-penciling aggressively — overbroad clauses increasingly die entirely rather than being narrowed.",
          "Choice-of-law shopping facing sustained hostility when the law chosen has no substantial relationship to the worker.",
        ],
      },
      { type: "h2", text: "What survives scrutiny" },
      {
        type: "p",
        text: "Narrow duration and geography tied to actual competitive harm. Consideration that is real. Protection calibrated to trade secrets genuinely held. And above all, tiering: executives, rainmakers, and everyone else governed by different instruments.",
      },
      {
        type: "quote",
        text: "The question is no longer whether your covenant is standard, but whether it is defensible in the specific courtroom your departing engineer lives in.",
      },
    ],
  },
  {
    slug: "risky-exit-checklist",
    title: "Executive departures: the employer's first-week checklist",
    category: "Practice Guides",
    excerpt: "The seven days after a senior resignation determine most of the litigation risk. Use them deliberately.",
    date: "2026-03-03",
    readingTime: "4 min read",
    authorSlug: "james-okonkwo",
    practiceSlug: "employment",
    body: [
      {
        type: "p",
        text: "When a senior executive resigns — especially toward a competitor — the following week sets the trajectory of everything after. Employers that improvise generate evidence for the other side; employers that follow a checklist preserve options.",
      },
      { type: "h2", text: "The seven days" },
      {
        type: "list",
        items: [
          "Day one: access review and revocation schedule, coordinated with IT. Preserve, don't delete — spoliation helps nobody.",
          "Days one to two: forensic imaging of devices where trade-secret exposure is plausible, documented under a defensible protocol.",
          "Day two: interview the departing executive's direct reports about what was said, taken, or promised. Memories decay fast.",
          "Day three: assess the covenant package against current law — which provisions, in which state, survive contact with reality.",
          "Days four to five: outreach decision. Sometimes the right letter preserves a relationship; sometimes silence is strategy. Decide, don't drift.",
        ],
      },
      { type: "h2", text: "The counterintuitive rule" },
      {
        type: "p",
        text: "The strongest enforcement posture often comes from treating the departing executive decently through the transition. Juries and judges notice who behaved like adults. So do the remaining employees watching how you treat people who leave.",
      },
    ],
  },
  {
    slug: "trade-secret-hygiene",
    title: "Trade secrets are lost in onboarding, not in court",
    category: "Insights",
    excerpt: "Protection programs fail at the mundane moments: hiring, contractor agreements, and demo meetings.",
    date: "2026-01-28",
    readingTime: "4 min read",
    authorSlug: "sofia-lindqvist",
    practiceSlug: "intellectual-property",
    body: [
      {
        type: "p",
        text: "Companies imagine trade-secret theft as a dramatic exfiltration. In reality, protection usually fails quietly, years earlier: a contractor agreement without assignment language, a demo given under a stale NDA, a departing employee whose access lingered for months.",
      },
      { type: "h2", text: "Where programs actually break" },
      {
        type: "list",
        items: [
          "Onboarding: no confidentiality acknowledgment, or one signed by someone without authority to bind the company receiving the employee.",
          "Contractors: work-for-hire assumptions that local copyright law quietly overrides without explicit assignment.",
          "Demos: product previews shown under NDAs that expired or never covered derivatives.",
          "Departures: access revocation measured in weeks, while resentment measures in minutes.",
        ],
      },
      { type: "h2", text: "The legal standard is the business standard" },
      {
        type: "p",
        text: "Trade-secret protection requires 'reasonable measures.' Courts interpret reasonableness by asking whether the company acted like its information mattered. Access tiers, logging, and exit interviews aren't bureaucracy — they are the elements of the cause of action.",
      },
      {
        type: "quote",
        text: "You cannot litigate your way out of an unprotected secret. You can only document your way into one that's protected.",
      },
    ],
  },
  {
    slug: "saas-data-rights-trap",
    title: "The data clause hiding in every SaaS contract",
    category: "Insights",
    excerpt: "'Aggregate and de-identified usage data' is either your next product line or your next lawsuit. Draft accordingly.",
    date: "2026-05-06",
    readingTime: "5 min read",
    authorSlug: "sofia-lindqvist",
    practiceSlug: "intellectual-property",
    body: [
      {
        type: "p",
        text: "Buried in nearly every SaaS agreement is a sentence granting the vendor rights to aggregated, anonymized usage data. Vendors read it as permission to build products. Customers increasingly read it as the beginning of a data dispute. Both are looking at the same words; the words are usually inadequate.",
      },
      { type: "h2", text: "Why the standard clause fails" },
      {
        type: "list",
        items: [
          "'De-identified' is undefined, while re-identification science advances annually. Regulators now treat weak anonymization as personal data processing.",
          "'Aggregate' doesn't distinguish statistical patterns from competitive intelligence embedded in them.",
          "Nothing addresses model training — the single largest new use customers care about, discovered by them in your release notes.",
        ],
      },
      { type: "h2", text: "Drafting that survives 2026" },
      {
        type: "p",
        text: "Define de-identification technically (standards cited), restrict re-identification attempts contractually, disclose AI-training uses affirmatively with opt-outs where regulation requires, and give customers audit visibility proportionate to sensitivity. Vendors who lead with transparency close enterprise deals faster than those who hide behind legacy clauses.",
      },
    ],
  },
  {
    slug: "qsbs-window",
    title: "QSBS: the window founders stop watching too early",
    category: "Practice Guides",
    excerpt: "Qualified Small Business Stock treatment can zero out federal gain on exit — and routine growth moves quietly disqualify it.",
    date: "2026-03-17",
    readingTime: "5 min read",
    authorSlug: "daniel-ashworth",
    practiceSlug: "tax-private-clients",
    body: [
      {
        type: "p",
        text: "Section 1202 remains the most valuable provision in the founder tax code: exclusion of federal gain on qualified small business stock held five years. It is also the most casually forfeited — not through exotic errors, but through ordinary growth decisions made without anyone checking.",
      },
      { type: "h2", text: "How founders lose it" },
      {
        type: "list",
        items: [
          "Asset tests: a subsidiary conversion or heavy passive-asset balance sheet can push the company over qualification limits unnoticed.",
          "Redemption traps: buybacks within the surrounding windows — even unrelated preferred cleanups — can taint eligibility.",
          "Holding-period amnesia: stock received in a reorganization may or may not carry tacking; assuming either way is a mistake.",
          "Cap arithmetic: aggregate gross assets ceilings tested at issuance and immediately before, on dates nobody calendars.",
        ],
      },
      { type: "h2", text: "The maintenance habit" },
      {
        type: "p",
        text: "QSBS is preserved by ritual: annual eligibility testing, board-calendar awareness of redemption windows, and documentation assembled contemporaneously. Every acquisition offer triggers the same first question — what does the buyer's structure do to my holding periods?",
      },
      {
        type: "quote",
        text: "Eight figures of federal tax turn on paperwork decisions made years before the wire hits. That deserves a recurring calendar entry.",
      },
    ],
  },
  {
    slug: "pre-immigration-tax-steps",
    title: "Moving countries? Your last year before arrival matters most",
    category: "Practice Guides",
    excerpt: "Pre-immigration planning is unwinding, timing, and documenting — in that order, before day one of residence.",
    date: "2026-02-05",
    readingTime: "5 min read",
    authorSlug: "daniel-ashworth",
    practiceSlug: "tax-private-clients",
    body: [
      {
        type: "p",
        text: "Clients arrive with moving boxes and assume tax planning starts on arrival day. It ends there. Nearly every high-value lever — trust funding, entity resets, PFIC cleanup, residency timing — must operate before the first day of tax residence, after which most doors close permanently.",
      },
      { type: "h2", text: "The pre-move year" },
      {
        type: "list",
        items: [
          "Map both systems: departure-country exit charges and arrival-country worldwide taxation interact; optimizing one blind to the other optimizes nothing.",
          "Unwind passive structures: foreign funds that become punitive PFICs on arrival are cheapest to liquidate while still non-resident.",
          "Time recognition: realize gains in the lower-rate jurisdiction while you legally can, with documentation matching the story.",
          "Paper the baseline: appraisals and records created before arrival become your entire defense against deemed-value regimes later.",
        ],
      },
      { type: "h2", text: "Coordinating with immigration" },
      {
        type: "p",
        text: "Visa strategy and tax residence are the same project. Substantial-presence math, treaty tie-breakers, and the immigration categories themselves shape which planning window exists. Run both workstreams in one room, or watch them contradict each other in two.",
      },
      {
        type: "quote",
        text: "Residency is a design choice. Make it twelve months ahead, and the system bends; make it at the border, and it doesn't.",
      },
    ],
  },
];
