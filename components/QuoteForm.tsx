"use client";

import { FormEvent, useMemo, useState } from "react";
import { company } from "@/lib/company";

const initialState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  location: "",
  need: "Generator service",
  message: "",
};

export function QuoteForm() {
  const [form, setForm] = useState(initialState);

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Website inquiry: ${form.need}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Company: ${form.company}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `Site location: ${form.location}`,
        `Service need: ${form.need}`,
        "",
        form.message,
      ].join("\n")
    );
    return `mailto:${company.email}?subject=${subject}&body=${body}`;
  }, [form]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_20px_80px_rgba(8,15,31,0.38)] backdrop-blur-xl sm:grid-cols-2">
      {[
        ["name", "Name"],
        ["company", "Company"],
        ["email", "Email"],
        ["phone", "Phone"],
        ["location", "Site location"],
      ].map(([key, label]) => (
        <label key={key} className="grid gap-2 text-sm text-slate-300">
          <span>{label}</span>
          <input
            required={key in { name: 1, email: 1, phone: 1 }}
            value={form[key as keyof typeof form]}
            onChange={(event) => setForm((current) => ({ ...current, [key]: event.target.value }))}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300/60"
          />
        </label>
      ))}

      <label className="grid gap-2 text-sm text-slate-300 sm:col-span-2">
        <span>Service need</span>
        <select
          value={form.need}
          onChange={(event) => setForm((current) => ({ ...current, need: event.target.value }))}
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300/60"
        >
          <option>Generator service</option>
          <option>Emergency repair</option>
          <option>Maintenance</option>
          <option>ATS support</option>
          <option>Fuel systems</option>
          <option>Generator rental</option>
          <option>Installation or upgrade</option>
        </select>
      </label>

      <label className="grid gap-2 text-sm text-slate-300 sm:col-span-2">
        <span>Project details</span>
        <textarea
          rows={6}
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300/60"
          placeholder="Describe the generator, building, issue, urgency, or project scope."
        />
      </label>

      <div className="sm:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-6 text-slate-400">
          This preview uses a mailto handoff so the site stays fully static for GitHub Pages. The button opens your email client with the request details prefilled.
        </p>
        <button type="submit" className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
          Build email draft
        </button>
      </div>
    </form>
  );
}
