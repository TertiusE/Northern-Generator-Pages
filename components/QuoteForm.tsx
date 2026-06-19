"use client";

import { FormEvent, useMemo, useState } from "react";
import { company } from "@/lib/company";

const initialState = {
  firstName: "",
  company: "",
  email: "",
  phone: "",
  howHeard: "Google Search",
  generatorMake: "",
  generatorLocation: "",
  fuelType: "",
  generatorRating: "",
  serviceRequested: "",
  message: "",
};

export function QuoteForm() {
  const [form, setForm] = useState(initialState);

  const mailto = useMemo(() => {
    const subject = encodeURIComponent("Contact Us");
    const body = encodeURIComponent(
      [
        `First Name: ${form.firstName}`,
        `Company: ${form.company}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `How did you hear about us?: ${form.howHeard}`,
        `Generator Make: ${form.generatorMake}`,
        `Generator Location: ${form.generatorLocation}`,
        `Fuel Type: ${form.fuelType}`,
        `Generator Rating in KW and Voltage: ${form.generatorRating}`,
        `Type of Service Requested: ${form.serviceRequested}`,
        "",
        `Message: ${form.message}`,
      ].join("\n")
    );
    return `mailto:${company.email}?subject=${subject}&body=${body}`;
  }, [form]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-[2rem] border border-[#21428f]/10 bg-white p-6 shadow-[0_20px_80px_rgba(33,66,143,0.12)] sm:grid-cols-2">
      {[
        ["firstName", "First Name"],
        ["company", "Company"],
        ["email", "Email"],
        ["phone", "Phone"],
        ["generatorMake", "Generator Make"],
        ["generatorLocation", "Generator Location"],
        ["fuelType", "Fuel Type"],
        ["generatorRating", "Generator Rating in KW and Voltage"],
        ["serviceRequested", "Type of Service Requested"],
      ].map(([key, label]) => (
        <label key={key} className="grid gap-2 text-sm text-slate-700">
          <span>{label}</span>
          <input
            required={key in { firstName: 1, email: 1, phone: 1 }}
            value={form[key as keyof typeof form]}
            onChange={(event) => setForm((current) => ({ ...current, [key]: event.target.value }))}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#21428f]"
          />
        </label>
      ))}

      <label className="grid gap-2 text-sm text-slate-700">
        <span>How did you hear about us?</span>
        <select
          value={form.howHeard}
          onChange={(event) => setForm((current) => ({ ...current, howHeard: event.target.value }))}
          className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#21428f]"
        >
          <option>Google Search</option>
          <option>Referral</option>
          <option>Website</option>
          <option>Social Media</option>
          <option>Other</option>
        </select>
      </label>

      <div className="hidden sm:block" />

      <label className="grid gap-2 text-sm text-slate-700 sm:col-span-2">
        <span>Message</span>
        <textarea
          rows={6}
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#21428f]"
        />
      </label>

      <div className="sm:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-6 text-slate-600">{company.contactIntro}</p>
        <button type="submit" className="inline-flex items-center justify-center rounded-full bg-[#f26522] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e55b19]">
          Send
        </button>
      </div>
    </form>
  );
}
