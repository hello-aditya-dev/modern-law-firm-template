export const faqGroups: {
  group: string;
  blurb: string;
  items: { q: string; a: string }[];
}[] = [
  {
    group: "Working together",
    blurb: "How engagements start and run.",
    items: [
      {
        q: "What happens in a first consultation?",
        a: "Thirty minutes with a partner in the relevant practice — not an intake coordinator. You describe the situation; we give you an initial read, the questions that matter, and a candid view on whether we're the right firm for it.",
      },
      {
        q: "How quickly can you engage?",
        a: "Urgent matters — injunctions, filing deadlines, enforcement actions — can typically begin within twenty-four to forty-eight hours. Ordinary engagements start within a week.",
      },
      {
        q: "Who will actually work on my matter?",
        a: "A partner leads every engagement personally. You'll meet the full team at kickoff, know the names, and reach the partner directly. Leverage happens below the partner line; judgment doesn't.",
      },
      {
        q: "Do you work with in-house counsel?",
        a: "Constantly. Roughly half our work comes as overflow or specialist support to in-house teams. We integrate into your workflows and reporting rather than replacing anything that works.",
      },
    ],
  },
  {
    group: "Fees & engagement",
    blurb: "Structure, billing, and expectations.",
    items: [
      {
        q: "How do you charge?",
        a: "Whatever structure aligns incentives: fixed fees per phase for transactions, phased budgets with deliverables for disputes, monthly retainers for advisory work, and traditional hourly billing where it fits. The structure is agreed before work begins.",
      },
      {
        q: "Will I know the cost upfront?",
        a: "Within the range honest lawyers can promise. Disputes carry inherent uncertainty; we manage it with phase budgets you approve in advance. Transactions get fixed fees wherever scope allows. No bill should ever contain a surprise.",
      },
      {
        q: "Do you require retainers?",
        a: "For new clients in contentious matters, yes — sized to the first phase and applied against fees. It protects both sides' clarity about scope.",
      },
      {
        q: "Can you estimate before we commit?",
        a: "Yes. After a first consultation we provide a written engagement outline: scope, team, fee structure, and a realistic total-range expectation for the initial phase.",
      },
    ],
  },
  {
    group: "Confidentiality & conflicts",
    blurb: "The conditions of trust.",
    items: [
      {
        q: "Is a first consultation confidential?",
        a: "Yes. Information shared in a prospective-client consultation is protected under the same professional duties that apply to established clients, subject to conflicts checks completed beforehand.",
      },
      {
        q: "What if you represent a party adverse to us?",
        a: "We run conflict checks before any substantive discussion. If a positional conflict exists, we tell you immediately and, where possible, point you to capable counsel elsewhere. We do not take positions against current clients.",
      },
      {
        q: "How is client information secured?",
        a: "Encrypted matter management, access on least-privilege basis, and no client data in unapproved AI tools — ever. Confidentiality is the operating condition of this firm, not a policy binder.",
      },
    ],
  },
];
