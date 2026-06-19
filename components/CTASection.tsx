import { company } from "@/lib/company";

export function CTASection() {
  return (
    <section className="px-4 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 overflow-hidden rounded-[2rem] border border-[#21428f]/10 bg-white px-6 py-10 text-[#21428f] shadow-[0_22px_80px_rgba(33,66,143,0.12)] sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[#f26522]">Contact 24 HR</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{company.cta.title}</h2>
          <p className="mt-4 text-base leading-7 text-slate-700">{company.cta.body}</p>
        </div>
        <a href={`tel:${company.phone.replace(/[^\d+]/g, "")}`} className="inline-flex items-center justify-center rounded-full bg-[#f26522] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e55b19]">
          {company.cta.button}
        </a>
      </div>
    </section>
  );
}
