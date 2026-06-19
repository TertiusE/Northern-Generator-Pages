import Link from "next/link";

export function CTASection() {
  return (
    <section className="px-4 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_30%),linear-gradient(135deg,#020617_0%,#0f172a_55%,#111827_100%)] px-6 py-10 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/75">Built for urgent buildings</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Make the website feel as dependable as the emergency power behind it.</h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            This redesign puts contact paths, service clarity, and a stronger industrial visual language at the center of the experience.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
            Request service
          </Link>
          <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Explore all services
          </Link>
        </div>
      </div>
    </section>
  );
}
