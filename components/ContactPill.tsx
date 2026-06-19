"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { company } from "@/lib/company";

export function ContactPill() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname.startsWith("/contact")) {
    return null;
  }

  return (
    <div className="fixed bottom-5 right-4 z-50 sm:bottom-8 sm:right-8">
      <div className={`overflow-hidden rounded-[28px] border border-cyan-300/30 bg-slate-950/90 shadow-[0_18px_70px_rgba(8,15,31,0.45)] backdrop-blur-xl transition-all duration-300 ${open ? "w-[19rem]" : "w-auto sm:w-auto"}`}>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="group flex w-full items-center justify-between gap-4 px-3 py-3 sm:px-4 text-left"
          aria-expanded={open}
        >
          <span className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-300 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)]">
              24
            </span>
            <span className={`${open ? "block" : "hidden sm:block"}`}>
              <span className="block text-[11px] uppercase tracking-[0.28em] text-cyan-200/70">Support</span>
              <span className="block text-sm font-medium text-white">Contact 24 HR</span>
            </span>
          </span>
          <span className={`hidden text-cyan-200 transition sm:block ${open ? "rotate-45" : "group-hover:translate-x-1"}`}>↗</span>
        </button>

        {open ? (
          <div className="grid gap-2 border-t border-white/10 px-4 pb-4 pt-3 text-sm text-slate-200">
            <a className="rounded-2xl bg-white/5 px-4 py-3 transition hover:bg-white/10" href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}>
              Call {company.phone}
            </a>
            <a className="rounded-2xl bg-white/5 px-4 py-3 transition hover:bg-white/10" href={`mailto:${company.email}`}>
              Email {company.email}
            </a>
            <Link className="rounded-2xl bg-cyan-300 px-4 py-3 font-medium text-slate-950 transition hover:bg-cyan-200" href="/contact">
              Request service or quote
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
