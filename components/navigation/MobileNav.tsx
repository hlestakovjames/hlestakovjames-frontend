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
    <div className="border-b border-[var(--border)] bg-[var(--background)] lg:hidden">
      <div className="container-wide flex min-h-14 items-center justify-between">
        <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[var(--text-primary)]">
          {title}
        </span>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
          className="flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.12em] text-[var(--text-secondary)]"
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true" className="text-base leading-none">
            {open ? "×" : "☰"}
          </span>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-navigation"
          aria-label={`${title} navigation`}
          className="border-t border-[var(--border)]"
        >
          <div className="container-wide py-4">
            <div className="flex flex-col">
              {items.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(`${item.href}/`));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`border-b border-[var(--border)] py-3.5 text-sm transition-colors last:border-b-0 ${
                      isActive
                        ? "font-medium text-[var(--text-primary)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      {item.label}
                      {isActive && (
                        <span aria-hidden="true" className="text-xs">
                          ●
                        </span>
                      )}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
