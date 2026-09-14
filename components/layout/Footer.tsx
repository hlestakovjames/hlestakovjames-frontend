import Link from "next/link";
import HJMark from "@/components/brand/HJMark";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Work", href: "/work" },
  { label: "Skills", href: "/skills" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--brand-navy)] text-white">
      <div className="container-wide py-16 md:py-20">
        <div className="mb-12 h-px w-full brand-rule opacity-80" />

        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
          <div>
            <HJMark href="/" size="lg" />

            <h2 className="mt-7 max-w-xl text-3xl font-medium tracking-[-0.035em] md:text-5xl">
              Building ideas, systems and organizations for meaningful impact.
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/65">
              Technology, leadership, digital products and ideas — brought
              together through LEAD · BUILD · SHARE.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4 self-start text-sm text-white/65">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/15 pt-6 text-xs text-white/45 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Hlestakov James. All rights reserved.
          </p>

          <p className="text-[var(--brand-cyan)]">LEAD · BUILD · SHARE</p>
        </div>
      </div>
    </footer>
  );
}
