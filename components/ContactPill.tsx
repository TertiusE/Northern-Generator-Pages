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
      <div className={`overflow-hidden rounded-[28px] border border-[#21428f]/10 bg-white shadow-[0_18px_70px_rgba(33,66,143,0.18)] transition-all duration-300 ${open ? "w-[19rem]" : "w-auto"}`}>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="group flex w-full items-center justify-between gap-4 px-3 py-3 text-left sm:px-4"
          aria-expanded={open}
        >
          <span className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f26522] text-sm font-semibold text-white shadow-[0_0_30px_rgba(242,101,34,0.35)]">
              24
            </span>
            <span className={`${open ? "block" : "hidden sm:block"}`}>
              <span className="block text-sm font-medium text-[#21428f]">Contact 24 HR</span>
            </span>
          </span>
          <span className={`hidden text-[#f26522] transition sm:block ${open ? "rotate-45" : "group-hover:translate-x-1"}`}>↗</span>
        </button>

        {open ? (
          <div className="grid gap-2 border-t border-[#21428f]/10 px-4 pb-4 pt-3 text-sm text-slate-700">
            <a className="rounded-2xl bg-slate-50 px-4 py-3 transition hover:bg-slate-100" href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}>
              Call Support
            </a>
            <a className="rounded-2xl bg-slate-50 px-4 py-3 transition hover:bg-slate-100" href={`mailto:${company.email}`}>
              Email Support
            </a>
            <Link className="rounded-2xl bg-[#f26522] px-4 py-3 font-medium text-white transition hover:bg-[#e55b19]" href="/contact">
              Contact Us
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
