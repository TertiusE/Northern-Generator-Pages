import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Rentals",
  description: company.rentalsText[0],
  alternates: { canonical: "/rentals" },
};

export default function RentalsPage() {
  return (
    <>
      <section className="px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <div className="mx-auto w-full max-w-7xl rounded-[2rem] border border-[#21428f]/10 bg-white p-6 shadow-sm sm:p-8 lg:p-12">
          <p className="text-xs uppercase tracking-[0.32em] text-[#f26522]">Rentals</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-[#102043] sm:text-5xl">At Northern Generator Company we also specialize in RENTALS.</h1>
          <div className="mt-5 space-y-5 max-w-4xl text-lg leading-8 text-slate-700">
            {company.rentalsText.map((paragraph) => (
              <p key={paragraph.slice(0, 36)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
