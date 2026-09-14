import Link from "next/link";

type HJMarkProps = {
  href?: string;
  size?: "sm" | "md" | "lg";
  showName?: boolean;
  className?: string;
};

const sizes = {
  sm: {
    mark: "h-8 w-8 text-[0.72rem]",
    name: "text-[0.62rem]",
  },
  md: {
    mark: "h-10 w-10 text-[0.8rem]",
    name: "text-[0.68rem]",
  },
  lg: {
    mark: "h-14 w-14 text-base",
    name: "text-[0.78rem]",
  },
};

export default function HJMark({
  href = "/",
  size = "md",
  showName = false,
  className = "",
}: HJMarkProps) {
  const styles = sizes[size];

  const content = (
    <span
      className={`inline-flex items-center gap-3 ${className}`}
      aria-label="Hlestakov James"
    >
      <span
        className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[0.8rem] border border-[var(--brand-border)] bg-[var(--brand-navy)] font-semibold tracking-[-0.06em] text-white shadow-[0_6px_20px_rgba(16,42,67,0.12)] ${styles.mark}`}
      >
        <span className="relative z-10">HJ</span>
        <span
          aria-hidden="true"
          className="absolute -right-2 -top-2 h-5 w-5 rounded-full bg-[var(--brand-cyan)]"
        />
      </span>

      {showName && (
        <span
          className={`font-semibold tracking-[0.12em] text-[var(--brand-navy)] ${styles.name}`}
        >
          HLESTAKOV JAMES
        </span>
      )}
    </span>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
