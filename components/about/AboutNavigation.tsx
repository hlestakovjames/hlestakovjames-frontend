"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const aboutNavigation = [
  { label: "Overview", href: "/about" },
  { label: "My Story", href: "/about/my-story" },
  { label: "Vision & Values", href: "/about/vision-values" },
  { label: "How I Work", href: "/about/how-i-work" },
  { label: "What Drives Me", href: "/about/what-drives-me" },
  { label: "Beyond Technology", href: "/about/beyond-technology" },
  { label: "Principles", href: "/about/principles" },
  { label: "Personal Philosophy", href: "/about/personal-philosophy" },
];

export default function AboutNavigation() {
  const pathname = usePathname();

  return (
    <div className="border-b border-[var(--brand-border)] bg-white">
      <div className="container-wide flex min-h-14 items-center gap-6 overflow-x-auto">
        <Link
          href="/about"
          className="shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-navy)]"
        >
          About
        </Link>

        <nav
          aria-label="About navigation"
          className="flex items-center gap-5"
        >
          {aboutNavigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className="nav-link shrink-0 py-4 text-[0.78rem] font-medium text-[var(--brand-text-secondary)]"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
