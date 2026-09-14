import Link from "next/link";
import { globalNavigation } from "./navigation";

export default function GlobalNav() {
  return (
    <nav
      aria-label="Main navigation"
      className="hidden border-b border-[var(--brand-border)] bg-[var(--background)] lg:block"
    >
      <div className="container-wide flex min-h-12 items-center justify-center">
        <div className="flex items-center gap-5 overflow-x-auto py-1">
          {globalNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link shrink-0 text-[0.78rem] font-medium tracking-[0.005em] text-[var(--brand-text-secondary)] hover:text-[var(--brand-navy)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
