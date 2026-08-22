"use client";

import { useState, type FormEvent } from "react";

const inputCls =
  "h-12 w-full border border-hairline bg-paper px-4 text-[15px] outline-none transition-colors placeholder:text-ink-3 focus:border-navy/50";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent)
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4 border border-hairline bg-card px-8 py-16 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brass/40 bg-brass/10 font-display text-xl text-brass">
          ✓
        </span>
        <h3 className="font-display text-2xl font-medium">Message received.</h3>
        <p className="max-w-sm text-[15px] leading-relaxed text-ink-2">
          A partner or the practice team will respond within one business day.
          For urgent matters, call either office directly.
        </p>
      </div>
    );

  return (
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSent(true);
      }}
      className="flex flex-col gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-[11px] uppercase tracking-[0.16em] text-ink-3">Full name</span>
          <input required name="name" placeholder="Jordan Meyer" autoComplete="name" className={inputCls} />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[11px] uppercase tracking-[0.16em] text-ink-3">Email</span>
          <input required type="email" name="email" placeholder="jordan@company.com" autoComplete="email" className={inputCls} />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-[11px] uppercase tracking-[0.16em] text-ink-3">Organization</span>
          <input name="org" placeholder="Company / institution" autoComplete="organization" className={inputCls} />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[11px] uppercase tracking-[0.16em] text-ink-3">Topic</span>
          <select name="topic" defaultValue="" className={inputCls}>
            <option value="" disabled>Select a topic</option>
            {["Corporate & M&A", "Litigation & Arbitration", "Immigration", "Employment", "Intellectual Property", "Tax & Private Clients", "Careers", "Other"].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="flex flex-col gap-1.5">
        <span className="text-[11px] uppercase tracking-[0.16em] text-ink-3">Message</span>
        <textarea
          required
          name="message"
          rows={6}
          placeholder="How can we help? Please avoid highly confidential details until engagement."
          className={`${inputCls} h-auto resize-none py-3`}
        />
      </label>
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" hidden aria-hidden="true" />
      <button
        type="submit"
        className="mt-1 inline-flex h-12 items-center justify-center rounded-md bg-navy px-8 text-sm font-medium text-paper transition-all duration-200 ease-out-expo hover:bg-navy-deep active:scale-[0.99]"
      >
        Send message
      </button>
      <p className="text-[12px] leading-relaxed text-ink-3">
        Submitting does not create an attorney–client relationship and does not
        guarantee confidentiality. Do not include sensitive facts until a
        conflict check is complete.
      </p>
    </form>
  );
}
