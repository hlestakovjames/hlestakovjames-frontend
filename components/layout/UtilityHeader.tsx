import Link from "next/link";
import HJMark from "@/components/brand/HJMark";

export default function UtilityHeader() {
  return (
    <header className="border-b border-[var(--brand-border)] bg-[#D89B2B]">
      <div className="container-wide flex min-h-14 items-center justify-between gap-6">
        <HJMark size="md" />

        <div className="flex items-center gap-3 text-[0.7rem] font-medium text-white">
          <Link
            href="/search"
            className="hidden transition-colors hover:text-white/75 sm:block"
          >
            Search
          </Link>

          <Link
            href="/login"
            className="rounded-full bg-[var(--brand-navy)] px-4 py-2 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand-navy-hover)]"
          >
            Login
          </Link>

          <Link
            href="/contact/work-with-me"
            className="rounded-full bg-[var(--brand-navy)] px-4 py-2 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand-navy-hover)]"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </header>
  );
}
