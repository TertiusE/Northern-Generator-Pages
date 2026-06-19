import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { company } from "@/lib/company";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description: company.description,
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
        <div className="mx-auto w-full max-w-7xl rounded-[2rem] border border-[#21428f]/10 bg-white p-6 shadow-sm sm:p-8 lg:p-12">
          <p className="text-xs uppercase tracking-[0.32em] text-[#f26522]">Services</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-[-0.04em] text-[#102043] sm:text-5xl">The safety and protection of lives is critical.</h1>
          <p className="mt-5 max-w-5xl text-lg leading-8 text-slate-700">
            With increased power grid disruptions, the loss of utility power is inevitable and expected. The Life Safety Code C282 in Canada is a widely used standard to plan for, protect and minimize risks to occupants in buildings and facilities. Generators are key in providing emergency power via life safety equipment such as fire pumps, fire alarms, elevators, and emergency lighting. In compliance with C282 generators must be maintained and inspected regularly. As such, we are resolved and committed to helping our clients stay compliant and risk-free by providing industry-leading power generation sales and services. See below for our offering:
          </p>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto grid w-full max-w-7xl gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.slug} className="rounded-[1.75rem] border border-[#21428f]/10 bg-white p-6 shadow-sm">
              <div className={`h-1.5 w-full rounded-full bg-gradient-to-r ${service.accent}`} />
              <p className="mt-5 text-xs uppercase tracking-[0.28em] text-[#f26522]">{service.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#21428f]">{service.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-700">{service.summary}</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                {service.points.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#f26522]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/services/${service.slug}`} className="mt-6 inline-flex text-sm font-medium text-[#21428f] transition hover:text-[#f26522]">
                Request a Quote ↗
              </Link>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
