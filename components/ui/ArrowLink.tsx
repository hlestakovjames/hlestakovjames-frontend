import Link from "next/link";

type ArrowLinkProps = {
  children: string;
  href: string;
  external?: boolean;
};

export default function ArrowLink({
  children,
  href,
  external = false,
}: ArrowLinkProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-navy)]"
      >
        <span>{children}</span>
        <span className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-navy)]"
    >
      <span>{children}</span>
      <span className="transition-transform duration-200 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}
