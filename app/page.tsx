import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { company } from "@/lib/company";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: company.legalName,
  areaServed: "Ontario",
  telephone: company.phone,
  email: company.email,
  url: company.siteUrl,
};

export default function Home() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <section className="hero-grid overflow-hidden px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28 lg:pt-12">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#21428f]/10 bg-white px-4 py-2 text-xs uppercase tracking-[0.32em] text-[#21428f] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#f26522] shadow-[0_0_18px_rgba(242,101,34,0.5)]" />
              {company.hero.eyebrow}
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#102043] sm:text-6xl lg:text-7xl">
              {company.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
              {company.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#f26522] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e55b19]">
                Contact Us
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-[#21428f]/15 bg-white px-6 py-3 text-sm font-semibold text-[#21428f] transition hover:bg-slate-50">
                Services
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {company.metrics.map((metric) => (
                <div key={metric.label} className="rounded-[1.5rem] border border-[#21428f]/10 bg-white p-4 shadow-sm">
                  <p className="text-lg font-semibold text-[#21428f]">{metric.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-12 top-0 h-52 rounded-full bg-[#f26522]/12 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-[#21428f]/10 bg-white p-4 shadow-[0_30px_110px_rgba(33,66,143,0.12)] sm:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(33,66,143,0.08),transparent_28%),linear-gradient(rgba(33,66,143,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(33,66,143,0.06)_1px,transparent_1px)] bg-[size:auto,36px_36px,36px_36px] opacity-90" />
              <div className="relative grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-[1.75rem] border border-[#21428f]/10 bg-[#21428f] p-5 text-white">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/75">Who We Are</p>
                  <h2 className="mt-3 text-2xl font-semibold">Better Service. Better Value.</h2>
                  <p className="mt-4 text-sm leading-7 text-white/90">Our professional team works hard to provide you customized service and support at an unbeatable price.</p>
                  <div className="mt-5 grid gap-3">
                    {company.homepageBadges.map((badge) => (
                      <div key={badge} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white">
                        {badge}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-[1.75rem] border border-[#21428f]/10 bg-slate-50 p-4">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-[#21428f]/70">
                      <span>Call Support</span>
                      <span>24/7 Service Available</span>
                    </div>
                    <div className="mt-4 overflow-hidden rounded-[1.35rem] border border-[#21428f]/10 bg-white">
                      <Image src="/images/generator-service.png" alt="Generator equipment" width={512} height={512} className="h-auto w-full object-cover" priority />
                    </div>
                  </div>
                  <div className="rounded-[1.75rem] border border-[#21428f]/10 bg-white p-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-[#f26522]">About Us</p>
                    <p className="mt-2 text-lg font-semibold text-[#21428f]">{company.aboutHeading}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-18 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#f26522]">About Us</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#102043] sm:text-4xl">{company.aboutHeading}</h2>
          </div>
          <div className="grid gap-4">
            {company.aboutParagraphs.map((paragraph) => (
              <article key={paragraph.slice(0, 32)} className="rounded-[1.75rem] border border-[#21428f]/10 bg-white p-5 shadow-sm">
                <p className="text-sm leading-7 text-slate-700">{paragraph}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-18 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[#f26522]">Our</p>
              <h2 className="mt-4 text-3xl font-semibold text-[#102043] sm:text-4xl">Services</h2>
            </div>
            <Link href="/services" className="text-sm font-medium text-[#21428f] transition hover:text-[#f26522]">see all ↗</Link>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {company.homepageServiceGroups.map((group, index) => (
              <article key={group.title} className="group overflow-hidden rounded-[1.75rem] border border-[#21428f]/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className={`h-1.5 w-full rounded-full ${index % 2 === 0 ? "bg-[#21428f]" : "bg-[#f26522]"}`} />
                <h3 className="mt-5 text-2xl font-semibold text-[#21428f]">{group.title}</h3>
                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#f26522]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-18 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-8 rounded-[2rem] border border-[#21428f]/10 bg-white p-6 shadow-sm lg:grid-cols-[1fr_1fr] lg:p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#f26522]">Northern Generator Company</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {company.homepageBadges.map((badge) => (
                <span key={badge} className="rounded-full border border-[#21428f]/10 bg-slate-50 px-3 py-2 text-xs text-[#21428f]">{badge}</span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-[0.95fr_1.05fr]">
            <div className="overflow-hidden rounded-[1.75rem] border border-[#21428f]/10 bg-slate-50">
              <Image src="/images/team.jpg" alt="Northern Generator team" width={591} height={460} className="h-full w-full object-cover" />
            </div>
            <div className="grid gap-4">
              {company.valueSections.map((section) => (
                <div key={section.title} className="rounded-[1.75rem] border border-[#21428f]/10 bg-slate-50 p-5">
                  <h3 className="text-lg font-semibold text-[#21428f]">{section.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{section.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-18 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[#f26522]">Testimony</p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {company.testimonials.map((testimonial) => (
              <article key={testimonial.author} className="rounded-[1.75rem] border border-[#21428f]/10 bg-white p-6 shadow-sm">
                <p className="text-lg leading-8 text-[#102043]">“{testimonial.quote}”</p>
                <div className="mt-6 text-sm text-slate-600">
                  <p className="font-semibold text-[#21428f]">{testimonial.author}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
