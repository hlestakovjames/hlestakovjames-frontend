import Link from "next/link";

export default function UtilityHeader() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--background)]">
      <div className="container-wide flex min-h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="shrink-0 text-[0.72rem] font-semibold tracking-[0.14em] text-[var(--text-primary)]"
        >
          HLESTAKOV JAMES
        </Link>

        <div className="flex items-center gap-5 text-[0.72rem] font-medium text-[var(--text-secondary)]">
          <Link
            href="/search"
            className="hidden transition-colors hover:text-[var(--text-primary)] sm:block"
          >
            Search
          </Link>

          <Link
            href="/login"
            className="transition-colors hover:text-[var(--text-primary)]"
          >
            Login
          </Link>

          <Link
            href="/contact/work-with-me"
            className="hidden rounded-full bg-[var(--dark)] px-4 py-2 text-[var(--background)] transition-transform duration-200 hover:-translate-y-0.5 sm:block"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </header>
  );
}
