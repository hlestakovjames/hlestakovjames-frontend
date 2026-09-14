import Link from "next/link";
import { globalNavigation } from "./navigation";

export default function GlobalNav() {
  return (
    <nav
      aria-label="Main navigation"
      className="hidden border-b border-[var(--border)] bg-[var(--background)] lg:block"
    >
      <div className="container-wide">
        <div className="flex min-h-14 items-center justify-between gap-5 overflow-x-auto">
          {globalNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link shrink-0 text-[0.78rem] font-medium tracking-[0.01em] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
