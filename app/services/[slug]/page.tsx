import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { company } from "@/lib/company";
import { getServiceBySlug, serviceSlugs } from "@/lib/services";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: service.title,
          provider: { "@type": "LocalBusiness", name: company.legalName, telephone: company.phone, email: company.email },
          areaServed: "Ontario",
          description: service.summary,
          url: `${company.siteUrl}/services/${service.slug}`,
        }}
      />
      <section className="px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-[2rem] border border-[#21428f]/10 bg-white p-6 shadow-sm sm:p-8 lg:p-12">
          <div className={`mb-6 h-1.5 w-full rounded-full bg-gradient-to-r ${service.accent}`} />
          <p className="text-xs uppercase tracking-[0.32em] text-[#f26522]">{service.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-[#102043] sm:text-5xl">{service.title}</h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-700">{service.summary}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#f26522] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e55b19]">
              Contact Us
            </Link>
            <a href={`tel:${company.phone.replace(/[^\d+]/g, "")}`} className="inline-flex items-center justify-center rounded-full border border-[#21428f]/15 bg-white px-6 py-3 text-sm font-semibold text-[#21428f] transition hover:bg-slate-50">
              Call Support
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-[1.75rem] border border-[#21428f]/10 bg-white p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.28em] text-[#f26522]">Services</p>
            <h2 className="mt-4 text-2xl font-semibold text-[#21428f]">{service.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700">{service.summary}</p>
          </article>

          <article className="rounded-[1.75rem] border border-[#21428f]/10 bg-white p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.28em] text-[#f26522]">See below for our offering</p>
            <div className="mt-5 space-y-4">
              {service.points.map((point) => (
                <div key={point} className="rounded-2xl border border-[#21428f]/10 bg-slate-50 p-5">
                  <p className="text-lg font-semibold text-[#21428f]">{point}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
