import Link from "next/link";
import { globalNavigation } from "./navigation";

export default function GlobalNav() {
  return (
    <nav aria-label="Main navigation" className="sticky top-0 z-40 hidden border-b border-[var(--brand-border)] bg-white/95 backdrop-blur lg:block">
      <div className="container-wide flex min-h-14 items-center justify-between gap-8">
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--brand-text-muted)]">HJ / Portfolio</span>
        <div className="flex items-center gap-8">
          {globalNavigation.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link py-2 text-[0.78rem] font-medium text-[var(--brand-text-secondary)] hover:text-[var(--brand-navy)]">
              {item.label}
            </Link>
          ))}
          <Link href="/resume" className="rounded-full border border-[var(--brand-border-strong)] px-4 py-2 text-xs font-semibold text-[var(--brand-navy)] transition hover:border-[var(--brand-cyan)] hover:text-[var(--brand-cyan)]">Resume ↗</Link>
        </div>
      </div>
    </nav>
  );
}
