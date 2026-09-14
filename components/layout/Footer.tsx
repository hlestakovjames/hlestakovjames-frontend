import Link from "next/link";
import HJMark from "@/components/brand/HJMark";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Work", href: "/work" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Now", href: "/now" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.5 4.5h3l1.5 4-2.2 1.7a14.5 14.5 0 0 0 6 6l1.7-2.2 4 1.5v3c0 1.1-.9 2-2 2C10.6 20.5 3.5 13.4 3.5 5.5c0-1.1.9-2 2-2Z"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 11.5a8.5 8.5 0 0 1-12.6 7.4L4 20l1.2-3.2A8.5 8.5 0 1 1 20 11.5Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.3 8.4c.2-.4.4-.5.8-.5h.6c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.6.7c.7 1.2 1.6 2.1 2.8 2.8l.7-.6c.2-.2.4-.2.7-.1l1.6.7c.3.1.4.3.4.5v.6c0 .4-.2.6-.5.8-.5.3-1.1.3-1.7.1-1.5-.5-3-1.4-4.2-2.6s-2.1-2.7-2.6-4.2c-.2-.6-.2-1.2.1-1.7Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4 7 8 6 8-6"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.6-1.6h1.7V3.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.3H8v3h2.6v8h2.9Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M5.2 7.2A1.7 1.7 0 1 0 5.2 3.8a1.7 1.7 0 0 0 0 3.4ZM3.7 20.2h3V9h-3v11.2ZM9 9h2.9v1.5h.1c.4-.8 1.4-1.8 3.3-1.8 3.5 0 4.1 2.3 4.1 5.3v6.2h-3v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.6H9V9Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .9.1-.7.4-1.1.7-1.3-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.7-2.3 4.5-4.5 4.8.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <>
      <footer className="bg-[var(--brand-navy)] text-white">
        <div className="container-wide py-16 md:py-20">
          <div className="mb-14 h-px w-full brand-rule opacity-80" />

          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <HJMark href="/" size="lg" />

              <h2 className="mt-7 max-w-2xl text-3xl font-medium tracking-[-0.035em] md:text-5xl">
                Building ideas, systems and organizations for meaningful
                impact.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/60">
                Technology, leadership, digital products and ideas — brought
                together through LEAD · BUILD · SHARE.
              </p>

              <Link
                href="/contact/work-with-me"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-[var(--brand-navy)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand-cyan-soft)]"
              >
                Let&apos;s Talk
                <span className="text-[var(--brand-cyan)]">↗</span>
              </Link>
            </div>

            <div className="grid gap-12 sm:grid-cols-2">
              <div>
                <p className="eyebrow text-white/40">Contact</p>

                <div className="mt-6 space-y-5">
                  <a
                    href="tel:0713290745"
                    className="group flex items-start gap-3 text-sm"
                  >
                    <span className="mt-0.5 text-[var(--brand-cyan)]">
                      <PhoneIcon />
                    </span>

                    <span>
                      <span className="block text-xs uppercase tracking-[0.1em] text-white/40">
                        Phone
                      </span>
                      <span className="mt-1 block text-white/75 transition-colors group-hover:text-white">
                        0713290745
                      </span>
                    </span>
                  </a>

                  <a
                    href="https://wa.me/254713290745"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 text-sm"
                  >
                    <span className="mt-0.5 text-[var(--brand-cyan)]">
                      <WhatsAppIcon />
                    </span>

                    <span>
                      <span className="block text-xs uppercase tracking-[0.1em] text-white/40">
                        WhatsApp
                      </span>
                      <span className="mt-1 block text-white/75 transition-colors group-hover:text-white">
                        0713290745
                      </span>
                    </span>
                  </a>

                  <a
                    href="mailto:khlestakov.james@gmail.com"
                    className="group flex items-start gap-3 text-sm"
                  >
                    <span className="mt-0.5 text-[var(--brand-cyan)]">
                      <MailIcon />
                    </span>

                    <span>
                      <span className="block text-xs uppercase tracking-[0.1em] text-white/40">
                        Email
                      </span>
                      <span className="mt-1 block break-all text-white/75 transition-colors group-hover:text-white">
                        khlestakov.james@gmail.com
                      </span>
                    </span>
                  </a>
                </div>
              </div>

              <div>
                <p className="eyebrow text-white/40">Explore</p>

                <nav className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
                  {footerLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-white/15 pt-7">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="eyebrow text-white/40">Connect</p>

                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=61555979976083"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/65 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--brand-cyan)] hover:bg-[var(--brand-cyan)] hover:text-white"
                  >
                    <FacebookIcon />
                  </a>

                  <a
                    href="https://www.instagram.com/khlestakov.james?igsh=MWU4eXJkbjRhamI1bQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/65 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--brand-cyan)] hover:bg-[var(--brand-cyan)] hover:text-white"
                  >
                    <InstagramIcon />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/hlestakovjames"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/65 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--brand-cyan)] hover:bg-[var(--brand-cyan)] hover:text-white"
                  >
                    <LinkedInIcon />
                  </a>

                  <a
                    href="https://github.com/hlestakovjames"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/65 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--brand-cyan)] hover:bg-[var(--brand-cyan)] hover:text-white"
                  >
                    <GitHubIcon />
                  </a>
                </div>
              </div>

              <p className="max-w-sm text-xs leading-6 text-white/40 md:text-right">
                Technology, leadership and real-world impact.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Hlestakov James. All rights
              reserved.
            </p>

            <p className="text-[var(--brand-cyan)]">LEAD · BUILD · SHARE</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/254713290745"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Hlestakov James on WhatsApp"
        className="group fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 sm:bottom-6 sm:right-6"
      >
        <WhatsAppIcon />

        <span className="pointer-events-none absolute right-[calc(100%+0.75rem)] whitespace-nowrap rounded-full bg-[var(--brand-navy)] px-4 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
          Chat on WhatsApp
        </span>
      </a>
    </>
  );
}
