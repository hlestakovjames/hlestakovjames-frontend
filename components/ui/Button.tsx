import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "accent" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "bg-[var(--brand-navy)] text-white hover:bg-[var(--brand-navy-hover)]",
  secondary:
    "border border-[var(--brand-border-strong)] bg-white text-[var(--brand-navy)] hover:border-[var(--brand-navy)]",
  accent:
    "bg-[var(--brand-cyan)] text-white hover:bg-[var(--brand-cyan-hover)]",
  ghost:
    "text-[var(--brand-navy)] underline decoration-[var(--brand-border-strong)] underline-offset-8 hover:decoration-[var(--brand-cyan)]",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const classes = `inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
