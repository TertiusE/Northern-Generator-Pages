import type { Metadata } from "next";
import Image from "next/image";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "About",
  description: "Northern Generator supports emergency power systems across Ontario with generator service, upgrades, rentals, and response-oriented field support.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/75">About</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">A stronger story for a business already known for emergency power support.</h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">The visual language is new, but the core facts remain grounded in the current public site: long operating history, generator specialization, 24/7 emergency posture, and Ontario service support.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {company.badges.map((badge) => (
                <span key={badge} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200">{badge}</span>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4">
            <Image src="/images/team.jpg" alt="Northern Generator team" width={591} height={460} className="h-auto w-full rounded-[1.5rem] object-cover" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto grid w-full max-w-7xl gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {[
            "Emergency power systems demand confidence before an outage ever happens.",
            "The new page structure makes services, contact paths, and trust signals easier to scan.",
            "Dark interface layers and precise accent color create a more premium industrial feel.",
            "Local assets and static deployment keep the preview lightweight and GitHub Pages friendly.",
          ].map((item) => (
            <article key={item} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-slate-300">
              {item}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
