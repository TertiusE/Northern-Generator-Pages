import Link from "next/link";
import { company, fullAddress } from "@/lib/company";

export function Footer() {
  return (
    <footer className="border-t border-[#21428f]/10 bg-white text-[#21428f]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 text-sm sm:px-6 lg:grid-cols-[1.3fr_0.8fr_0.9fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.28em] text-[#21428f]/70">Northern Generator</p>
          <h2 className="max-w-lg text-2xl font-semibold">{company.footerBlurb}</h2>
          <div className="flex flex-wrap gap-3">
            {company.footerBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-[#21428f]/10 bg-slate-50 px-3 py-2 text-xs text-[#21428f]">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#21428f]/70">Menu Links</p>
          <div className="space-y-3">
            {company.nav.map((item) => (
              <Link key={item.href} href={item.href} className="block text-slate-700 transition hover:text-[#f26522]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#21428f]/70">Get In Touch</p>
          <div className="space-y-3 text-slate-700">
            <p>{fullAddress}</p>
            <p>{company.hours}</p>
            <a className="block hover:text-[#f26522]" href={`tel:${company.phone.replace(/[^\\d+]/g, "")}`}>{company.phone}</a>
            <a className="block hover:text-[#f26522]" href={`tel:${company.tollFree.replace(/[^\\d+]/g, "")}`}>{company.tollFree} Toll-Free</a>
            <a className="block hover:text-[#f26522]" href={`mailto:${company.email}`}>{company.email}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
