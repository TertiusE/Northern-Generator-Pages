import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";
import { company, fullAddress } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request generator service, maintenance, rentals, ATS support, fuel-system work, or project planning with Northern Generator.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="px-4 pb-10 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/75">Contact</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Make the first action obvious.</h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">The contact experience now feels intentional: strong CTA hierarchy, a floating support control, and a static preview-safe form that builds an email draft with the request details.</p>
            <div className="mt-8 grid gap-4">
              {[
                ["Main line", company.phone, `tel:${company.phone.replace(/[^\d+]/g, "")}`],
                ["Toll free", company.tollFree, `tel:${company.tollFree.replace(/[^\d+]/g, "")}`],
                ["Email", company.email, `mailto:${company.email}`],
                ["Address", fullAddress, "#"],
              ].map(([label, value, href]) => (
                <div key={label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">{label}</p>
                  {href === "#" ? (
                    <p className="mt-2 text-lg text-white">{value}</p>
                  ) : (
                    <a href={href} className="mt-2 inline-flex text-lg text-white hover:text-cyan-200">{value}</a>
                  )}
                </div>
              ))}
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
