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

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: {
      "@type": "LocalBusiness",
      name: company.legalName,
      telephone: company.phone,
      email: company.email,
      areaServed: "Ontario",
    },
    areaServed: "Ontario",
    description: service.description,
    url: `${company.siteUrl}/services/${service.slug}`,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 lg:p-12">
          <div className={`mb-6 h-1.5 w-full rounded-full bg-gradient-to-r ${service.accent}`} />
          <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/75">{service.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">{service.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{service.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
              Request service
            </Link>
            <a href={`tel:${company.phone.replace(/[^\d+]/g, "")}`} className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Call {company.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">What this page improves</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">Specific messaging instead of a single generic services page.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">Each service now has its own description, metadata, internal link target, and conversion path so visitors reach the right conversation faster.</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-400">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">Common questions</p>
            <div className="mt-5 space-y-4">
              {service.faqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-white/10 bg-slate-950/55 p-5">
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
