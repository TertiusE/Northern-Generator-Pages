import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";
import { company, fullAddress } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description: company.contactIntro,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="px-4 pb-10 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#f26522]">Contact</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#102043] sm:text-5xl">Contact Us</h1>
            <p className="mt-5 text-lg leading-8 text-slate-700">{company.contactIntro}</p>
            <div className="mt-8 grid gap-4">
              {[
                ["Call Support", company.phone, `tel:${company.phone.replace(/[^\d+]/g, "")}`],
                ["1.866.832.2489 Toll-Free", `${company.tollFree} Toll-Free`, `tel:${company.tollFree.replace(/[^\d+]/g, "")}`],
                ["Email Support", company.email, `mailto:${company.email}`],
              ].map(([label, value, href]) => (
                <div key={label} className="rounded-[1.5rem] border border-[#21428f]/10 bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#f26522]">{label}</p>
                  <a href={href} className="mt-2 inline-flex text-lg text-[#21428f] hover:text-[#f26522]">{value}</a>
                </div>
              ))}
              <div className="rounded-[1.5rem] border border-[#21428f]/10 bg-white p-4 shadow-sm">
                <p className="text-lg text-[#21428f]">{fullAddress}</p>
              </div>
              <div className="rounded-[1.5rem] border border-[#21428f]/10 bg-white p-4 shadow-sm">
                <p className="text-lg text-[#21428f]">{company.hours}</p>
              </div>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
