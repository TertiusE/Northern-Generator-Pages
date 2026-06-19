import Link from "next/link";
import { company, fullAddress } from "@/lib/company";
import { services } from "@/lib/services";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 text-sm text-slate-300 sm:px-6 lg:grid-cols-[1.25fr_0.85fr_0.85fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">Northern Generator</p>
          <h2 className="max-w-md text-2xl font-semibold text-white">Emergency power support built around uptime, response, and clarity.</h2>
          <p className="max-w-xl text-slate-400">{company.description}</p>
          <div className="flex flex-wrap gap-3">
            {company.badges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-cyan-200/70">Services</p>
          <div className="space-y-3">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="block text-slate-300 transition hover:text-white">
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-cyan-200/70">Contact</p>
          <div className="space-y-3 text-slate-300">
            <p>{fullAddress}</p>
            <a className="block hover:text-white" href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}>{company.phone}</a>
            <a className="block hover:text-white" href={`tel:${company.tollFree.replace(/[^\d+]/g, "")}`}>{company.tollFree}</a>
            <a className="block hover:text-white" href={`mailto:${company.email}`}>{company.email}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
