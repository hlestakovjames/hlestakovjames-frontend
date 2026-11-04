import Link from "next/link";
import HJMark from "@/components/brand/HJMark";

export default function UtilityHeader() {
  return (
    <header className="border-b border-[var(--brand-border)] bg-white">
      <div className="container-wide flex min-h-[68px] items-center justify-between gap-5">
        <HJMark size="md" showName />
        <div className="flex items-center gap-5">
          <span className="hidden text-xs text-[var(--brand-text-muted)] sm:block">Kenya · Open to meaningful opportunities</span>
          <Link href="/contact" className="inline-flex min-h-10 items-center rounded-full bg-[var(--brand-navy)] px-5 text-xs font-semibold text-white transition hover:bg-[var(--brand-cyan)]">
            Get in touch <span className="ml-2 text-[var(--brand-cyan-soft)]">↗</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
