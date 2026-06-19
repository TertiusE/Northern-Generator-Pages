import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { company } from "@/lib/company";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Generator service, maintenance, emergency repair, ATS support, fuel systems, rentals, and upgrade planning across Ontario.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `${company.siteUrl}/services/${service.slug}`,
            name: service.title,
          })),
        }}
      />
      <section className="px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-14">
        <div className="mx-auto w-full max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 lg:p-12">
          <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/75">Services</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Built around uptime, response, and long-term system reliability.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            The service structure has been expanded so each capability can stand on its own page while still supporting the homepage conversion flow.
          </p>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto grid w-full max-w-7xl gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.slug} className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
              <div className={`h-1.5 w-full rounded-full bg-gradient-to-r ${service.accent}`} />
              <p className="mt-5 text-xs uppercase tracking-[0.28em] text-cyan-200/70">{service.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{service.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-400">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/services/${service.slug}`} className="mt-6 inline-flex text-sm font-medium text-cyan-200 transition hover:text-white">
                View service page ↗
              </Link>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
