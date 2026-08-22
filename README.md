# Aldervane — A Client-Acquisition System for Modern Law Firms

A premium editorial website template built with **Next.js 16 + Tailwind CSS v4 + TypeScript**.
Positioned as *a client-acquisition system for modern law firms* — built around one conversion goal:
getting qualified consultation requests.

Visual identity: **Financial Times × premium consulting × modern law firm.**
Ivory paper, deep navy, hairline rules, brass accents. Serif editorial typography (Fraunces + Inter).
No gavels, no scales of justice, no stock handshakes.

## Pages (16 routes)

| Route | Purpose |
|---|---|
| `/` | Editorial home: hero, sector marquee, animated stats, practice explorer, approach, matters, quote band, attorneys, insights, FAQ, CTA |
| `/practice-areas` | Practice Area Explorer (numbered editorial rows) |
| `/practice-areas/[slug]` | Practice detail ×6: overview → matters → approach → attorneys → representative matters → related insights → FAQ → CTA |
| `/attorneys` | Partner grid |
| `/attorneys/[slug]` | Attorney profile ×6: bio, admissions, education, languages, selected matters, publications, speaking, recognition |
| `/matters` | Representative Matters grouped by practice + documentation disclaimer |
| `/insights` | Resource center: featured + library |
| `/insights/[slug]` | Full articles ×12 across Insights / Practice Guides / Case Updates / Legal Alerts |
| `/faq` | Grouped legal FAQ accordions |
| `/consultation` | **Signature feature**: 5-step intake flow (help type → practice area → matter description → urgency → contact) with progress bar and reference-number success state |
| `/contact` | Offices + direct lines + designed form states |
| `/firm` | Manifesto, principles, history timeline, credentials band |
| `/careers` | Open roles + culture + EEO note |
| `/privacy` | Privacy policy boilerplate |
| `/terms` | Terms of use incl. no-attorney-client-relationship language |
| `404` | Custom not-found |

## Built-in legal compliance guardrails

- Footer attorney-advertising + no-attorney-client-relationship disclaimers
- Representative Matters page carries a full documentation warning: only publish claims your jurisdiction's advertising rules permit
- Every article ships with an informational-only disclaimer
- Consultation flow warns against sending confidential details pre-engagement

⚠️ **Before going live with a real firm:** replace all fictional names, numbers, rankings,
and matters; have counsel review disclaimers and advertising compliance in your jurisdictions.

## Design system

- Paper `#F7F4ED`, navy `#12283A`, ink `#1B1A17`, hairline borders, brass `#96743B`
- Fraunces (display serif) · Inter (body)
- Custom easing everywhere: `cubic-bezier(0.16, 1, 0.3, 1)`
- Scroll reveals, counters, sector marquee, drop caps, sticky profile sidebars
- Fully responsive · `prefers-reduced-motion` respected

## Rebrand in minutes

1. Swap tokens in `app/globals.css` (`--navy`, `--brass`, `--paper`)
2. Edit brand/offices/nav in `lib/firm.ts`
3. Fonts in `app/layout.tsx`
4. Content lives entirely in typed data files: `lib/practices.ts`, `lib/attorneys.ts`, `lib/matters.ts`, `lib/insights.ts`, `lib/faqs.ts`

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Deploy: push to GitHub → import in Vercel → zero config.
