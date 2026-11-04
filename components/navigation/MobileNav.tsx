"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getSectionNavigation, globalNavigation } from "./navigation";

export default function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const section = getSectionNavigation(pathname);
  const items = section?.items ?? globalNavigation;
  const title = section?.title ?? "Explore";

  return (
    <div className="sticky top-0 z-40 border-b border-[var(--brand-border)] bg-white lg:hidden">
      <div className="container-wide flex min-h-14 items-center justify-between">
        <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[var(--brand-text-muted)]">{title}</span>
        <button type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)} className="inline-flex items-center gap-3 rounded-full border border-[var(--brand-border)] px-4 py-2 text-xs font-semibold text-[var(--brand-navy)]">
          {open ? "Close" : "Menu"} <span aria-hidden="true" className="text-base leading-none">{open ? "×" : "☰"}</span>
        </button>
      </div>
      {open && <nav id="mobile-navigation" aria-label={`${title} navigation`} className="border-t border-[var(--brand-border)] bg-white">
        <div className="container-wide grid grid-cols-2 gap-x-6 py-3">
          {items.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
            return <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={active ? "page" : undefined} className={`border-b border-[var(--brand-border)] py-4 text-sm ${active ? "font-semibold text-[var(--brand-navy)]" : "text-[var(--brand-text-secondary)]"}`}>{item.label}</Link>;
          })}
          <Link href="/resume" onClick={() => setOpen(false)} className="border-b border-[var(--brand-border)] py-4 text-sm font-semibold text-[var(--brand-cyan)]">Resume ↗</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="border-b border-[var(--brand-border)] py-4 text-sm font-semibold text-[var(--brand-cyan)]">Contact ↗</Link>
        </div>
      </nav>}
    </div>
  );
}
