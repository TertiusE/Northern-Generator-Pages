import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rentals",
  description: "Generator rental support for temporary power, contingency planning, outages, and transition periods during emergency power work.",
  alternates: { canonical: "/rentals" },
};

export default function RentalsPage() {
  return (
    <>
      <section className="px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <div className="mx-auto w-full max-w-7xl rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_32%),linear-gradient(160deg,rgba(15,23,42,0.92),rgba(2,6,23,0.95))] p-6 sm:p-8 lg:p-12">
          <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/75">Rentals</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Temporary power support that still feels planned, not improvised.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">Rental power can protect operations during failures, planned upgrades, equipment replacement, or special operating conditions. This page gives that service its own destination instead of burying it in general navigation.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
              Ask about rentals
            </Link>
            <Link href="/services/generator-rentals" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Rental service detail
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
