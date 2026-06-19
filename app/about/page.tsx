import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "About Us",
  description: company.description,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#f26522]">About Us</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#102043] sm:text-5xl">{company.aboutHeading}</h1>
            <div className="mt-5 space-y-5 text-lg leading-8 text-slate-700">
              {company.aboutParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
              <p>
                Compliance with local laws in the event of a sudden failure of the primary electrical supply is a necessity. Our expert staff and 24/7 field service technicians are there to quickly help you maintain an uninterrupted power supply and ensure that you will be covered in the event of a power failure. This is especially important when considering current challenges due to extreme weather and aging, over-worked power grids. Let us help you mitigate any risks.
              </p>
              <p>You are in the hands of the Specialists!</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-[#21428f]/10 bg-white p-4 shadow-sm">
            <Image src="/images/team.jpg" alt="Northern Generator team" width={591} height={460} className="h-auto w-full rounded-[1.5rem] object-cover" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto grid w-full max-w-7xl gap-5 sm:grid-cols-3">
          {company.valueSections.map((section) => (
            <article key={section.title} className="rounded-[1.75rem] border border-[#21428f]/10 bg-white p-5 shadow-sm">
              <h2 className="text-xl font-semibold text-[#21428f]">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
