"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { company } from "@/lib/company";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#21428f]/10 bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/images/logo.png" alt="Northern Generator" width={280} height={83} className="h-11 w-auto sm:h-14" priority />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {company.nav.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${active ? "text-[#21428f]" : "text-slate-700 hover:text-[#f26522]"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${company.phone.replace(/[^\d+]/g, "")}`} className="text-sm font-medium text-slate-700 hover:text-[#21428f]">
            {company.phone}
          </a>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-[#f26522] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e55b19]"
          >
            <span>Contact 24 HR</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#f26522] transition group-hover:translate-x-1">↗</span>
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-2xl border border-[#21428f]/10 bg-white p-3 text-[#21428f] lg:hidden"
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
        <div className="border-t border-[#21428f]/10 bg-white px-4 py-4 lg:hidden sm:px-6">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {company.nav.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium ${active ? "bg-[#21428f] text-white" : "bg-slate-50 text-slate-700"}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a href={`tel:${company.phone.replace(/[^\d+]/g, "")}`} className="rounded-2xl bg-[#f26522] px-4 py-3 text-sm font-semibold text-white">
              Call Support
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
