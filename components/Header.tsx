"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { company } from "@/lib/company";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 shadow-[0_0_30px_rgba(34,211,238,0.18)]">
            <span className="text-sm font-semibold tracking-[0.25em] text-cyan-200">NG</span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/70">Emergency power</p>
            <p className="text-sm font-semibold text-white">{company.name}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {company.nav.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition ${active ? "text-white" : "text-slate-300 hover:text-white"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${company.phone.replace(/[^\d+]/g, "")}`} className="text-sm text-slate-300 hover:text-white">
            {company.phone}
          </a>
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-cyan-300/30 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-200/70 hover:bg-cyan-300/10"
          >
            <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-cyan-400/25 to-blue-500/25 transition duration-500 group-hover:translate-y-0" />
            <span className="relative">Contact 24 HR</span>
            <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-cyan-300 text-slate-950 transition group-hover:translate-x-1">
              ↗
            </span>
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3 text-white lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 lg:hidden sm:px-6">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {company.nav.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm ${active ? "bg-cyan-400/15 text-white" : "bg-white/5 text-slate-300"}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a href={`tel:${company.phone.replace(/[^\d+]/g, "")}`} className="rounded-2xl bg-white/5 px-4 py-3 text-sm text-white">
              Call {company.phone}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
