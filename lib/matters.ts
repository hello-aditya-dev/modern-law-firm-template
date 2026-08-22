export type Matter = {
  id: string;
  type: string;
  industry: string;
  practiceSlug: string;
  year: string;
  challenge: string;
  strategy: string;
  resolution: string;
};

export const matters: Matter[] = [
  {
    id: "M-241",
    type: "Sell-side M&A with regulated carve-out",
    industry: "Healthcare Technology",
    practiceSlug: "corporate-ma",
    year: "2025",
    challenge:
      "Founders of a healthcare analytics platform received a strategic offer contingent on separating a data subsidiary subject to health-information regulation — a carve-out the buyer assumed would kill the deal timeline.",
    strategy:
      "Sequenced diligence around the regulatory perimeter first, negotiated a transitional services architecture pre-signing, and obtained regulator comfort through structured engagement rather than post-closing discovery.",
    resolution:
      "Closed at $340M inside six months of LOI. Carve-out completed without price reduction; founders retained equity in the separated entity under a negotiated put arrangement.",
  },
  {
    id: "M-236",
    type: "ICC arbitration, earn-out dispute",
    industry: "Industrial Manufacturing",
    practiceSlug: "litigation-arbitration",
    year: "2024",
    challenge:
      "Sellers of an industrial components business faced a buyer claiming earn-out conditions were never met, supported by integration decisions taken unilaterally after closing.",
    strategy:
      "Built a causation record from the buyer's own operating documents showing deliberate suppression of the acquired unit's sales pipeline; briefed the tribunal on good-faith performance standards across three legal systems.",
    resolution:
      "$95M awarded to sellers following a two-week hearing; award confirmed by the New York courts without modification.",
  },
  {
    id: "M-229",
    type: "Global relocation program design",
    industry: "Financial Technology",
    practiceSlug: "immigration",
    year: "2025",
    challenge:
      "A fintech scale-up needed to move sixty engineers across fourteen countries in under a year after consolidating engineering hubs — with visa timelines that threatened every start date.",
    strategy:
      "Designed country-by-country sequencing with parallel filing tracks, negotiated correspondent counsel SLAs, and built a weekly risk dashboard for the client's talent team.",
    resolution:
      "All sixty relocations completed within eleven months with zero missed start dates and two contingency activations handled without escalation.",
  },
  {
    id: "M-224",
    type: "Group restructuring across five jurisdictions",
    industry: "Financial Services",
    practiceSlug: "employment",
    year: "2024",
    challenge:
      "A listed financial services group required a 400-role reduction across five European jurisdictions while maintaining regulatory standing and avoiding collective-dispute exposure.",
    strategy:
      "Jurisdiction-specific consultation playbooks executed in coordinated waves, with enhanced support packages targeted at litigation-risk roles and works council negotiations led locally.",
    resolution:
      "Programme completed inside statutory timelines with zero successful claims and no regulatory criticism; attrition-based savings exceeded plan by twelve percent.",
  },
  {
    id: "M-218",
    type: "IP diligence resetting purchase price",
    industry: "Enterprise Software",
    practiceSlug: "intellectual-property",
    year: "2023",
    challenge:
      "A buyer's prior diligence cleared a target's core patent family. Our review found chain-of-title breaks reaching back two founder departures and one acqui-hire.",
    strategy:
      "Quantified the defect against the target's revenue concentration, then used the corrected record to renegotiate rather than walk — protecting both sides' timeline.",
    resolution:
      "Purchase price reduced by $22M, corrective assignments executed pre-closing, and reps and warranties insurance exclusions narrowed accordingly.",
  },
  {
    id: "M-211",
    type: "Pre-exit structuring for founder liquidity event",
    industry: "B2B SaaS",
    practiceSlug: "tax-private-clients",
    year: "2025",
    challenge:
      "A founder eighteen months from a likely $200M+ exit held stock through structures that would have disqualified QSBS treatment and created avoidable state-level leakage.",
    strategy:
      "Staged reorganization respecting five-year holding periods, trust-level planning for the post-exit estate picture, and residency timing coordinated with the transaction calendar.",
    resolution:
      "Exit proceeded as planned with structuring intact; combined federal and state efficiency gains measured in eight figures against the unstructured baseline.",
  },
];

export const matterDisclaimer =
  "Representative matters are illustrative of the firm's experience. Some matters were handled by our lawyers prior to joining the firm or alongside co-counsel. Details are generalized to protect client confidentiality. Prior results do not guarantee a similar outcome. Before publishing any case information, verify what your jurisdiction's advertising rules permit.";
