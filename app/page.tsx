import Link from "next/link";
import Footer from "@/components/layout/Footer";
import UtilityHeader from "@/components/layout/UtilityHeader";
import SiteNavigation from "@/components/navigation/SiteNavigation";

const pillars = [
  {
    number: "01",
    title: "Lead",
    description:
      "Lead people, initiatives and organizations with clarity, responsibility and a long-term view.",
    href: "/leadership",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Design and build digital products, technology systems and practical solutions around real problems.",
    href: "/work",
  },
  {
    number: "03",
    title: "Share",
    description:
      "Document ideas, lessons and perspectives through writing, experimentation and building in public.",
    href: "/blog",
  },
];

const featuredWork = [
  {
    title: "Nexus Hub",
    type: "Organization · Digital Ecosystem",
    description:
      "A growing digital ecosystem bringing technology, media and business initiatives together.",
    href: "https://nexushubgroup.vercel.app",
  },
  {
    title: "KUHRSA",
    type: "Organization · Digital Systems",
    description:
      "A technology platform and management ecosystem supporting a university human resource students' association.",
    href: "https://kuhrsa.vercel.app",
  },
  {
    title: "MercyCare",
    type: "Organization · Digital Platform",
    description:
      "A digital presence and technology foundation for compassionate home and community health services.",
    href: "https://mercycarehealth.vercel.app",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <UtilityHeader />
      <SiteNavigation />

      <main>
        <section className="border-b border-[var(--border)]">
          <div className="container-wide flex min-h-[calc(100vh-120px)] flex-col justify-between py-16 md:py-20 lg:py-24">
            <div className="max-w-5xl">
              <p className="eyebrow text-[var(--text-secondary)]">
                Founder · Technology Leader · Digital Product Builder
              </p>

              <h1 className="display-heading mt-8 max-w-6xl">
                I build organizations, digital products and systems that turn
                ideas into meaningful impact.
              </h1>

              <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
                <Link
                  href="/work"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--dark)] px-6 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Explore My Work
                </Link>

                <Link
                  href="/contact/work-with-me"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--border-strong)] px-6 text-sm font-medium transition-colors hover:border-[var(--foreground)]"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </div>

            <div className="mt-20 flex flex-col justify-between gap-6 border-t border-[var(--border)] pt-6 text-xs text-[var(--text-muted)] sm:flex-row">
              <span>
                Based in Kenya · Working across technology &amp; organizations
              </span>
              <span>LEAD · BUILD · SHARE</span>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-site">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="eyebrow text-[var(--text-muted)]">Introduction</p>
              </div>

              <div>
                <p className="body-large max-w-3xl text-[var(--text-secondary)]">
                  My work sits at the intersection of technology, leadership
                  and digital product building. I&apos;m interested in turning
                  ambitious ideas into useful systems, growing organizations
                  around them, and documenting what I learn along the way.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--border)] bg-[var(--surface)]">
          <div className="container-site py-16 md:py-20">
            <div className="grid md:grid-cols-3">
              {pillars.map((pillar, index) => (
                <Link
                  key={pillar.number}
                  href={pillar.href}
                  className={`group p-6 md:p-8 ${
                    index > 0 ? "border-t md:border-l md:border-t-0" : ""
                  } border-[var(--border)]`}
                >
                  <span className="text-xs text-[var(--text-muted)]">
                    {pillar.number}
                  </span>

                  <h2 className="mt-12 text-3xl font-medium tracking-[-0.035em] transition-transform duration-200 group-hover:translate-x-1">
                    {pillar.title}
                  </h2>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--text-secondary)]">
                    {pillar.description}
                  </p>

                  <span className="mt-8 inline-block text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-primary)]">
                    Explore →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-site">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow text-[var(--text-muted)]">Selected Work</p>
                <h2 className="section-heading mt-5 max-w-3xl">
                  Organizations, products and systems I&apos;m building.
                </h2>
              </div>

              <Link
                href="/work"
                className="shrink-0 text-sm font-medium underline decoration-[var(--border-strong)] underline-offset-8 transition-colors hover:decoration-[var(--foreground)]"
              >
                View all work
              </Link>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden border border-[var(--border)] bg-[var(--border)] md:grid-cols-3">
              {featuredWork.map((project) => (
                <a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[var(--background)] p-7 transition-colors hover:bg-[var(--surface-muted)] md:p-8"
                >
                  <p className="text-xs uppercase tracking-[0.1em] text-[var(--text-muted)]">
                    {project.type}
                  </p>

                  <h3 className="mt-16 text-2xl font-medium tracking-[-0.03em]">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                    {project.description}
                  </p>

                  <span className="mt-8 inline-block text-xs font-medium uppercase tracking-[0.1em]">
                    View project →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--dark)] py-20 text-white md:py-28">
          <div className="container-site">
            <p className="eyebrow text-white/45">Next</p>

            <div className="mt-6 flex flex-col justify-between gap-10 md:flex-row md:items-end">
              <h2 className="max-w-4xl text-4xl font-medium tracking-[-0.04em] md:text-6xl">
                Explore the work, the thinking and what&apos;s being built next.
              </h2>

              <Link
                href="/contact"
                className="shrink-0 text-sm font-medium underline underline-offset-8"
              >
                Start a conversation →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
