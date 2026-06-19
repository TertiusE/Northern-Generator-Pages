import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { company } from "@/lib/company";
import { services } from "@/lib/services";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: company.legalName,
  areaServed: "Ontario",
  serviceType: services.map((service) => service.title),
  telephone: company.phone,
  email: company.email,
  url: company.siteUrl,
};

export default function Home() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <section className="hero-grid overflow-hidden px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28 lg:pt-12">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-cyan-100/80">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />
              {company.hero.eyebrow}
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Emergency power that feels faster, sharper, and easier to trust.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              {company.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
                Request service
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                View services
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {company.metrics.map((metric) => (
                <div key={metric.label} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-semibold text-white">{metric.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-12 top-0 h-52 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(15,23,42,0.92),rgba(15,23,42,0.72))] p-4 shadow-[0_30px_110px_rgba(8,15,31,0.4)] sm:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_28%),linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)] bg-[size:auto,36px_36px,36px_36px] opacity-80" />
              <div className="relative grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/65 p-5 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">Critical response</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">A BOA-inspired motion system, rebuilt for industrial emergency power.</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    The redesign leans into glowing grid fields, layered interface cards, controlled animation, and a high-visibility contact path that keeps action close at hand.
                  </p>
                  <div className="mt-5 grid gap-3">
                    {company.trustPoints.map((point) => (
                      <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-slate-200">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-[1.75rem] border border-cyan-300/20 bg-white/5 p-4">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-cyan-100/70">
                      <span>Live site energy</span>
                      <span>Rebuilt locally</span>
                    </div>
                    <div className="mt-4 overflow-hidden rounded-[1.35rem] border border-white/10 bg-slate-900/80">
                      <Image src="/images/generator-service.png" alt="Generator equipment" width={512} height={512} className="h-auto w-full object-cover" priority />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">Action first</p>
                      <p className="mt-2 text-lg font-semibold text-white">Contact button behaves like a system control, not an afterthought.</p>
                    </div>
                    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">All assets local</p>
                      <p className="mt-2 text-lg font-semibold text-white">No remote fonts, no third-party imagery, no external UI dependencies.</p>
                    </div>
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
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/75">Why it works</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">The site now presents Northern Generator like a premium operations partner.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Sharper service hierarchy",
                body: "Installations, maintenance, emergency repair, ATS, fuel systems, and rentals each have a clearer path.",
              },
              {
                title: "More confident contact flow",
                body: "Primary calls to action stay visible and the floating support control keeps service access one tap away.",
              },
              {
                title: "More industrial visual language",
                body: "Glowing interface lines, dark fields, crisp geometry, and controlled accent color create a stronger technical identity.",
              },
              {
                title: "Cleaner content and metadata",
                body: "Structured page metadata, sitemap, robots, and JSON-LD are in place without turning visible copy into SEO jargon.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-18 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/75">Services</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A cleaner, expandable services experience.</h2>
            </div>
            <Link href="/services" className="text-sm text-cyan-200 transition hover:text-white">See all services ↗</Link>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {services.map((service, index) => (
              <article key={service.slug} className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]">
                <div className={`h-1.5 w-full rounded-full bg-gradient-to-r ${service.accent}`} />
                <div className="mt-5 flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/70">0{index + 1} · {service.eyebrow}</p>
                  <span className="text-slate-500 transition group-hover:text-cyan-200">↗</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{service.summary}</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-400">
                  {service.deliverables.slice(0, 3).map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${service.slug}`} className="mt-6 inline-flex text-sm font-medium text-cyan-200 transition group-hover:text-white">
                  Open service detail
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-18 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 lg:grid-cols-[1fr_1fr] lg:p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/75">Field credibility</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A more grounded story, backed by public business details already on the live site.</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {company.badges.map((badge) => (
                <span key={badge} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200">{badge}</span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-[0.95fr_1.05fr]">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/60">
              <Image src="/images/team.jpg" alt="Northern Generator team" width={591} height={460} className="h-full w-full object-cover" />
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/75 p-5">
              <p className="text-sm leading-7 text-slate-300">
                The old site already signals a long operating history, emergency availability, and generator-specific expertise. This version simply packages that credibility in a clearer modern frame.
              </p>
              <div className="mt-6 space-y-4">
                {company.industries.map((industry) => (
                  <div key={industry} className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-slate-200">
                    <span>{industry}</span>
                    <span className="text-cyan-200">●</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-18 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/75">Testimonials</p>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {company.testimonials.map((testimonial) => (
              <article key={testimonial.author} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                <p className="text-xl leading-9 text-white">“{testimonial.quote}”</p>
                <div className="mt-6 text-sm text-slate-400">
                  <p className="font-semibold text-slate-200">{testimonial.author}</p>
                  <p>{testimonial.role}</p>
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
