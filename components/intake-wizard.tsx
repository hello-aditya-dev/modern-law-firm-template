"use client";

import { useState } from "react";
import { practices } from "@/lib/practices";
import { helpOptions } from "@/lib/firm";
import { Container, Hairline } from "@/components/ui";
import { Reveal } from "@/components/reveal";

type Answers = {
  help: string;
  practice: string;
  description: string;
  urgency: string;
  name: string;
  email: string;
  phone: string;
};

const urgencyOptions = [
  { value: "immediate", label: "Immediate", note: "Deadline, hearing, or enforcement action pending" },
  { value: "week", label: "Within a week", note: "Matter is live but not on fire" },
  { value: "month", label: "Within a month", note: "Planning a decision that needs counsel" },
  { value: "exploring", label: "Exploring options", note: "No date yet — building understanding first" },
];

const inputCls =
  "h-12 w-full border border-hairline bg-paper px-4 text-[15px] outline-none transition-colors placeholder:text-ink-3 focus:border-navy/50";

export function IntakeWizard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    help: "",
    practice: "",
    description: "",
    urgency: "",
    name: "",
    email: "",
    phone: "",
  });
  const [reference, setReference] = useState<string | null>(null);

  const canContinue =
    (step === 0 && answers.help !== "") ||
    (step === 1 && answers.practice !== "") ||
    (step === 2 && answers.description.trim().length >= 20) ||
    (step === 3 && answers.urgency !== "") ||
    (step === 4 &&
      answers.name.trim() !== "" &&
      /.+@.+\..+/.test(answers.email));

  const set = <K extends keyof Answers>(key: K, value: Answers[K]) =>
    setAnswers((a) => ({ ...a, [key]: value }));

  if (reference) {
    return (
      <Container className="max-w-2xl">
        <Reveal>
          <div className="border border-hairline bg-card px-8 py-14 text-center md:px-14">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-brass">
              Request received · Ref {reference}
            </p>
            <h2 className="mt-4 font-display text-[clamp(28px,4vw,38px)] font-medium leading-tight tracking-[-0.01em] text-ink">
              Thank you, {answers.name.split(" ")[0]}.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-ink-2">
              A partner in{" "}
              <span className="text-navy">
                {practices.find((p) => p.slug === answers.practice)?.name}
              </span>{" "}
              will review your matter and respond within one business day —
              usually sooner given the urgency you indicated.
            </p>
            <Hairline className="my-8" />
            <div className="flex flex-col gap-1 font-mono text-xs text-ink-3">
              <span>Assistance type: {helpOptions.find((h) => h.value === answers.help)?.label}</span>
              <span>Urgency: {urgencyOptions.find((u) => u.value === answers.urgency)?.label}</span>
              <span>Confirmation sent to {answers.email}</span>
            </div>
            <p className="mt-8 text-[12px] leading-relaxed text-ink-3">
              Submitting this form does not create an attorney–client
              relationship. Please don&rsquo;t send additional confidential
              material until engagement terms are agreed.
            </p>
          </div>
        </Reveal>
      </Container>
    );
  }

  return (
    <Container className="max-w-3xl">
      {/* Progress */}
      <div className="mb-10 flex items-start gap-3" aria-hidden>
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-1 flex-col gap-2">
            <div
              className={`h-px transition-colors duration-300 ${
                i <= step ? "bg-brass" : "bg-hairline"
              }`}
            />
            <span
              className={`font-mono text-[10px] uppercase tracking-widest transition-colors duration-300 ${
                i <= step ? "text-brass" : "text-ink-3"
              }`}
            >
              {["Help", "Practice", "Details", "Urgency", "Contact"][i]}
            </span>
          </div>
        ))}
      </div>

      <div className="border border-hairline bg-card p-8 md:p-12">
        {step === 0 && (
          <StepShell
            kicker="Step 01"
            title="What do you need help with?"
            sub="This determines which partner reviews your request."
          >
            <OptionList
              options={helpOptions.map((o) => ({ value: o.value, label: o.label }))}
              value={answers.help}
              onSelect={(v) => set("help", v)}
            />
          </StepShell>
        )}

        {step === 1 && (
          <StepShell
            kicker="Step 02"
            title="Which practice area fits best?"
            sub="Not sure? Choose closest — the reviewing partner will redirect if needed."
          >
            <OptionList
              options={practices.map((p) => ({ value: p.slug, label: p.name }))}
              value={answers.practice}
              onSelect={(v) => set("practice", v)}
            />
          </StepShell>
        )}

        {step === 2 && (
          <StepShell
            kicker="Step 03"
            title="Briefly describe your matter."
            sub="Two or three sentences is plenty. Please don't include highly sensitive details at this stage."
          >
            <textarea
              value={answers.description}
              onChange={(e) => set("description", e.target.value)}
              rows={6}
              placeholder="e.g. Our company received a demand letter regarding a distribution agreement and we need to understand our exposure…"
              className="w-full resize-none border border-hairline bg-paper p-4 text-[15px] leading-relaxed outline-none transition-colors placeholder:text-ink-3 focus:border-navy/50"
            />
            <p className="mt-2 font-mono text-xs text-ink-3">
              {answers.description.trim().length}/20 characters minimum
            </p>
          </StepShell>
        )}

        {step === 3 && (
          <StepShell
            kicker="Step 04"
            title="How urgent is the matter?"
            sub="Urgency shapes who responds first."
          >
            <OptionList
              options={urgencyOptions.map((u) => ({
                value: u.value,
                label: u.label,
                note: u.note,
              }))}
              value={answers.urgency}
              onSelect={(v) => set("urgency", v)}
            />
          </StepShell>
        )}

        {step === 4 && (
          <StepShell
            kicker="Step 05"
            title="Where should we reach you?"
            sub="A partner responds personally within one business day."
          >
            <div className="flex flex-col gap-4">
              <FieldRow label="Full name">
                <input
                  value={answers.name}
                  onChange={(e) => set("name", e.target.value)}
                  placeholder="Jordan Meyer"
                  autoComplete="name"
                  className={inputCls}
                />
              </FieldRow>
              <FieldRow label="Email">
                <input
                  type="email"
                  value={answers.email}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder="jordan@company.com"
                  autoComplete="email"
                  className={inputCls}
                />
              </FieldRow>
              <FieldRow label="Phone (optional)">
                <input
                  type="tel"
                  value={answers.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  placeholder="+1 …"
                  autoComplete="tel"
                  className={inputCls}
                />
              </FieldRow>
            </div>
          </StepShell>
        )}

        {/* Controls */}
        <div className="mt-10 flex items-center justify-between border-t border-hairline pt-6">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="text-sm text-ink-2 transition-colors hover:text-navy disabled:pointer-events-none disabled:opacity-30"
          >
            ← Back
          </button>
          {step < 4 ? (
            <button
              onClick={() => canContinue && setStep((s) => s + 1)}
              disabled={!canContinue}
              className="inline-flex h-11 items-center rounded-md bg-navy px-7 text-sm font-medium text-paper transition-all duration-200 ease-out-expo hover:bg-navy-deep disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue →
            </button>
          ) : (
            <button
              onClick={() =>
                canContinue &&
                setReference(
                  `ALD-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`
                )
              }
              disabled={!canContinue}
              className="inline-flex h-11 items-center rounded-md bg-navy px-7 text-sm font-medium text-paper transition-all duration-200 ease-out-expo hover:bg-navy-deep disabled:cursor-not-allowed disabled:opacity-40"
            >
              Submit request
            </button>
          )}
        </div>
      </div>

      <p className="mt-6 text-center text-[12px] leading-relaxed text-ink-3">
        Confidential subject to prospective-client protections after conflicts
        review. No attorney–client relationship is created by submission.
      </p>
    </Container>
  );
}

function StepShell({
  kicker,
  title,
  sub,
  children,
}: {
  kicker: string;
  title: string;
  sub?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-brass">{kicker}</p>
      <h2 className="mt-3 font-display text-[clamp(24px,3.5vw,32px)] font-medium leading-tight tracking-[-0.01em]">
        {title}
      </h2>
      {sub ? <p className="mt-2 text-sm leading-relaxed text-ink-2">{sub}</p> : null}
      <div className="mt-8">{children}</div>
    </div>
  );
}

function OptionList({
  options,
  value,
  onSelect,
}: {
  options: { value: string; label: string; note?: string }[];
  value: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div role="radiogroup" className="grid gap-3 sm:grid-cols-2">
      {options.map((opt) => {
        const active = value === opt.value;
        return (
          <button
            key={opt.value}
            role="radio"
            aria-checked={active}
            onClick={() => onSelect(opt.value)}
            className={`border p-4 text-left transition-all duration-200 ease-out-expo hover:-translate-y-0.5 ${
              active
                ? "border-navy bg-navy/[0.04]"
                : "border-hairline bg-transparent hover:border-navy/40"
            }`}
          >
            <span className="flex items-center justify-between gap-3">
              <span className={`text-[15px] ${active ? "font-medium text-navy" : "text-ink"}`}>
                {opt.label}
              </span>
              <span
                aria-hidden
                className={`h-2 w-2 shrink-0 rounded-full transition-colors ${
                  active ? "bg-brass" : "bg-hairline-strong"
                }`}
              />
            </span>
            {opt.note ? (
              <span className="mt-1 block text-xs text-ink-3">{opt.note}</span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

function FieldRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] uppercase tracking-[0.16em] text-ink-3">
        {label}
      </span>
      {children}
    </label>
  );
}
