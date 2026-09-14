import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import UtilityHeader from "@/components/layout/UtilityHeader";
import SiteNavigation from "@/components/navigation/SiteNavigation";

const pillars = [
  {
    number: "01",
    title: "Lead",
    label: "People · Organizations · Initiatives",
    description:
      "Lead people, initiatives and organizations with clarity, responsibility and a long-term view.",
    href: "/leadership",
    accent: "var(--brand-gold)",
  },
  {
    number: "02",
    title: "Build",
    label: "Technology · Products · Systems",
    description:
      "Design and build digital products, technology systems and practical solutions around real problems.",
    href: "/work",
    accent: "var(--brand-cyan)",
  },
  {
    number: "03",
    title: "Share",
    label: "Ideas · Lessons · Perspectives",
    description:
      "Document ideas, lessons and perspectives through writing, experimentation and building in public.",
    href: "/blog",
    accent: "var(--brand-violet)",
  },
];

const featuredWork = [
  {
    title: "Nexus Hub",
    category: "Organization · Digital Ecosystem",
    description:
      "A growing digital ecosystem bringing technology, media and business initiatives together.",
    image: "/images/organizations/nexus-hub.jpeg",
    logo: "/images/organizations/nexus-hub-logo.jpeg",
    href: "https://nexushubgroup.vercel.app",
  },
  {
    title: "KUHRSA",
    category: "Organization · Digital Systems",
    description:
      "A technology platform and management ecosystem supporting a university human resource students' association.",
    image: "/images/organizations/kuhrsa.jpeg",
    logo: "/images/organizations/kuhrsa-logo.jpeg",
    href: "https://kuhrsa.vercel.app",
  },
  {
    title: "MercyCare",
    category: "Organization · Digital Platform",
    description:
      "A digital presence and technology foundation for compassionate home and community health services.",
    image: "/images/organizations/mercycare.jpeg",
    logo: "/images/organizations/mercycare-logo.jpeg",
    href: "https://mercycarehealth.vercel.app",
  },
];

const services = [
  "Web Development",
  "Backend & APIs",
  "Business Systems",
  "Digital Products",
  "Technical Consulting",
  "Strategy",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <UtilityHeader />
      <SiteNavigation />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-[var(--brand-border)] bg-[var(--surface)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(21,151,201,0.11),transparent_28%),radial-gradient(circle_at_88%_70%,rgba(103,87,217,0.08),transparent_25%)]" />

          <div className="container-wide relative grid min-h-[calc(100vh-120px)] items-center gap-14 py-14 md:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:py-24">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-[var(--brand-cyan)]" />
                <p className="eyebrow text-[var(--brand-text-secondary)]">
                  Founder · Technology Leader · Digital Product Builder
                </p>
              </div>

              <h1 className="mt-7 max-w-4xl text-[clamp(3.4rem,7.2vw,7.4rem)] font-medium leading-[0.91] tracking-[-0.065em] text-[var(--brand-navy)]">
                Building ideas into
                <span className="block text-[var(--brand-cyan)]">
                  meaningful impact.
                </span>
              </h1>

              <p className="body-large mt-9 max-w-2xl text-[var(--brand-text-secondary)]">
                I build organizations, digital products and systems that turn
                ambitious ideas into practical solutions — while documenting
                what I learn along the way.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/work"
                  className="!inline-flex !min-h-12 !items-center !justify-center !rounded-full !bg-[var(--brand-navy)] !px-7 !text-sm !font-medium !text-white shadow-[0_12px_30px_rgba(16,42,67,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:!bg-[var(--brand-navy-hover)]"
                >
                  <span className="!text-white">
                    Explore My Work
                  </span>
                  <span className="ml-3 !text-[var(--brand-cyan)]">↗</span>
                </Link>

                <Link
                  href="/contact/work-with-me"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--brand-border-strong)] bg-white px-7 text-sm font-medium text-[var(--brand-navy)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--brand-navy)]"
                >
                  Let&apos;s Talk
                </Link>
              </div>

              <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-[var(--brand-text-muted)]">
                <span>Based in Kenya</span>
                <span className="h-1 w-1 rounded-full bg-[var(--brand-gold)]" />
                <span>Working across technology &amp; organizations</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
              <div className="absolute -right-5 -top-5 z-20 hidden h-20 w-20 rounded-full border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan-soft)] md:block" />

              <div className="relative overflow-hidden rounded-[2rem] border border-[var(--brand-border)] bg-[var(--surface-muted)] p-2 shadow-[0_30px_80px_rgba(16,42,67,0.13)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem]">
                  <Image
                    src="/images/personal/hlestakov-james.jpeg"
                    alt="Hlestakov James"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 42vw"
                    className="object-cover object-center"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(16,42,67,0.82)] via-[rgba(16,42,67,0.25)] to-transparent p-6 pt-24">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/65">
                      Hlestakov James
                    </p>
                    <p className="mt-2 max-w-xs text-sm leading-6 text-white">
                      Technology, leadership and real-world impact.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 z-20 hidden rounded-2xl border border-[var(--brand-border)] bg-white px-5 py-4 shadow-[0_16px_40px_rgba(16,42,67,0.12)] md:block">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[var(--brand-text-muted)]">
                  Focus
                </p>
                <p className="mt-1 text-sm font-medium text-[var(--brand-navy)]">
                  Lead · Build · Share
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="section-padding bg-[var(--background)]">
          <div className="container-site">
            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
              <div>
                <p className="eyebrow text-[var(--brand-cyan)]">Introduction</p>
              </div>

              <div>
                <p className="max-w-5xl text-[clamp(1.7rem,3vw,3.15rem)] font-medium leading-[1.15] tracking-[-0.045em] text-[var(--brand-navy)]">
                  My work sits at the intersection of{" "}
                  <span className="text-[var(--brand-cyan)]">technology</span>,{" "}
                  <span className="text-[var(--brand-violet)]">leadership</span>{" "}
                  and{" "}
                  <span className="text-[var(--brand-gold)]">
                    digital product building
                  </span>
                  .
                </p>

                <p className="mt-8 max-w-3xl text-base leading-8 text-[var(--brand-text-secondary)]">
                  I&apos;m interested in turning ambitious ideas into useful
                  systems, growing organizations around them, and creating
                  digital experiences that are practical, thoughtful and built
                  to last.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Build Share */}
        <section className="border-y border-[var(--brand-border)] bg-[var(--surface)]">
          <div className="container-site py-20 md:py-28">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="eyebrow text-[var(--brand-text-muted)]">
                  The framework
                </p>
                <h2 className="section-heading mt-5 max-w-3xl text-[var(--brand-navy)]">
                  Three ways I approach the work.
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-[var(--brand-text-secondary)]">
                A simple framework connecting leadership, technology and the
                ideas worth sharing.
              </p>
            </div>

            <div className="mt-16 grid border-t border-[var(--brand-border)] md:grid-cols-3">
              {pillars.map((pillar, index) => (
                <Link
                  key={pillar.number}
                  href={pillar.href}
                  className={`group relative p-7 transition-colors duration-300 hover:bg-[var(--surface-muted)] md:p-9 ${
                    index > 0 ? "border-t md:border-l md:border-t-0" : ""
                  } border-[var(--brand-border)]`}
                >
                  <span
                    className="absolute left-0 top-0 h-1 w-16 transition-all duration-300 group-hover:w-28"
                    style={{ backgroundColor: pillar.accent }}
                  />

                  <div className="flex items-start justify-between gap-6">
                    <span className="text-xs font-medium text-[var(--brand-text-muted)]">
                      {pillar.number}
                    </span>

                    <span className="text-lg text-[var(--brand-text-muted)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-16 text-4xl font-medium tracking-[-0.05em] text-[var(--brand-navy)]">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--brand-text-muted)]">
                    {pillar.label}
                  </p>

                  <p className="mt-6 max-w-sm text-sm leading-7 text-[var(--brand-text-secondary)]">
                    {pillar.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section className="section-padding">
          <div className="container-site">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <div>
                <div className="flex items-center gap-4">
                  <span className="h-px w-10 bg-[var(--brand-gold)]" />
                  <p className="eyebrow text-[var(--brand-text-muted)]">
                    Selected Work
                  </p>
                </div>

                <h2 className="section-heading mt-5 max-w-4xl text-[var(--brand-navy)]">
                  Organizations, products and systems I&apos;m building.
                </h2>
              </div>

              <Link
                href="/work"
                className="shrink-0 text-sm font-medium text-[var(--brand-navy)] underline decoration-[var(--brand-border-strong)] underline-offset-8 transition-colors hover:decoration-[var(--brand-cyan)]"
              >
                View all work →
              </Link>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {featuredWork.map((project) => (
                <a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-[1.5rem] border border-[var(--brand-border)] bg-white shadow-[0_8px_30px_rgba(16,42,67,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(16,42,67,0.11)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-muted)]">
                    <Image
                      src={project.image}
                      alt={`${project.title} project`}
                      fill
                      sizes="(max-width: 1024px) 90vw, 30vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,42,67,0.32)] via-transparent to-transparent" />

                    <div className="absolute bottom-0 right-0 translate-y-1/3 rounded-tl-2xl border-l border-t border-[var(--brand-border)] bg-white p-2 shadow-[0_8px_24px_rgba(16,42,67,0.12)] transition-transform duration-300 group-hover:translate-y-0">
                      <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-white p-1">
                        <Image
                          src={project.logo}
                          alt={`${project.title} logo`}
                          fill
                          sizes="56px"
                          className="object-contain p-1"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="p-7 pt-8">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[var(--brand-text-muted)]">
                      {project.category}
                    </p>

                    <h3 className="mt-4 text-2xl font-medium tracking-[-0.035em] text-[var(--brand-navy)]">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[var(--brand-text-secondary)]">
                      {project.description}
                    </p>

                    <span className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--brand-navy)]">
                      Explore organization
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="border-y border-[var(--brand-border)] bg-[var(--surface)]">
          <div className="container-site grid gap-14 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -left-4 -top-4 h-24 w-24 border-l border-t border-[var(--brand-gold)]" />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--brand-border)] bg-[var(--surface-muted)] p-2 shadow-[0_25px_60px_rgba(16,42,67,0.1)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
                  <Image
                    src="/images/personal/hlestakov.jpeg"
                    alt="Hlestakov James"
                    fill
                    sizes="(max-width: 1024px) 90vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="eyebrow text-[var(--brand-gold)]">
                Leadership
              </p>

              <h2 className="section-heading mt-5 max-w-3xl text-[var(--brand-navy)]">
                Building with responsibility, not just ambition.
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--brand-text-secondary)]">
                Technology creates possibilities, but organizations create
                lasting impact. My leadership work focuses on bringing people,
                ideas and systems together around meaningful objectives.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--brand-text-secondary)]">
                From growing organizations to shaping digital systems, I care
                about creating structures that help people do better work and
                make ideas sustainable.
              </p>

              <Link
                href="/leadership"
                className="mt-9 inline-flex items-center gap-3 text-sm font-medium text-[var(--brand-navy)]"
              >
                Explore leadership
                <span className="text-[var(--brand-gold)]">↗</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="section-padding">
          <div className="container-site">
            <div className="overflow-hidden rounded-[2rem] bg-[var(--brand-navy)] text-white">
              <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                <div className="relative min-h-[420px] overflow-hidden">
                  <Image
                    src="/images/organizations/nexus-hub.jpeg"
                    alt="Nexus Hub office"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover opacity-90 transition-transform duration-700 hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[rgba(16,42,67,0.05)] to-[rgba(16,42,67,0.35)]" />
                </div>

                <div className="flex flex-col justify-between p-8 md:p-12 lg:p-14">
                  <div>
                    <p className="eyebrow text-[var(--brand-cyan)]">
                      Featured Case Study
                    </p>

                    <h2 className="mt-6 text-4xl font-medium tracking-[-0.045em] md:text-5xl">
                      Building an ecosystem around technology.
                    </h2>

                    <p className="mt-6 text-sm leading-7 text-white/65">
                      Nexus Hub brings technology, media and business
                      initiatives together under one growing ecosystem.
                    </p>
                  </div>

                  <Link
                    href="/work/case-studies/nexus-hub"
                    className="mt-10 inline-flex items-center gap-3 text-sm font-medium"
                  >
                    Read the case study
                    <span className="text-[var(--brand-cyan)]">↗</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="border-y border-[var(--brand-border)] bg-[var(--surface-muted)]">
          <div className="container-site py-20 md:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
              <div>
                <p className="eyebrow text-[var(--brand-text-muted)]">
                  Experience
                </p>
                <h2 className="section-heading mt-5 text-[var(--brand-navy)]">
                  A journey still being built.
                </h2>
              </div>

              <div>
                <div className="border-t border-[var(--brand-border-strong)]">
                  <div className="grid gap-5 border-b border-[var(--brand-border-strong)] py-7 md:grid-cols-[150px_1fr_auto] md:items-center">
                    <span className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--brand-text-muted)]">
                      Now
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-[var(--brand-navy)]">
                        Founder · Technology Leader
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--brand-text-secondary)]">
                        Building organizations, digital products and systems
                        across multiple initiatives.
                      </p>
                    </div>
                    <span className="text-sm text-[var(--brand-cyan)]">↗</span>
                  </div>

                  <div className="grid gap-5 border-b border-[var(--brand-border-strong)] py-7 md:grid-cols-[150px_1fr_auto] md:items-center">
                    <span className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--brand-text-muted)]">
                      Technology
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-[var(--brand-navy)]">
                        Software · Systems · Digital Products
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--brand-text-secondary)]">
                        Designing and engineering practical technology
                        solutions around real organizational needs.
                      </p>
                    </div>
                    <span className="text-sm text-[var(--brand-cyan)]">↗</span>
                  </div>

                  <div className="grid gap-5 py-7 md:grid-cols-[150px_1fr_auto] md:items-center">
                    <span className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--brand-text-muted)]">
                      Growth
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-[var(--brand-navy)]">
                        Leadership · Entrepreneurship · Learning
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--brand-text-secondary)]">
                        Continuously learning, experimenting and building in
                        public.
                      </p>
                    </div>
                    <span className="text-sm text-[var(--brand-cyan)]">↗</span>
                  </div>
                </div>

                <Link
                  href="/experience"
                  className="mt-8 inline-flex text-sm font-medium text-[var(--brand-navy)] underline decoration-[var(--brand-border-strong)] underline-offset-8 hover:decoration-[var(--brand-cyan)]"
                >
                  Explore experience →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding">
          <div className="container-site">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="eyebrow text-[var(--brand-cyan)]">Services</p>
                <h2 className="section-heading mt-5 max-w-4xl text-[var(--brand-navy)]">
                  Turning strategy into things that work.
                </h2>
              </div>

              <Link
                href="/services"
                className="text-sm font-medium text-[var(--brand-navy)] underline decoration-[var(--brand-border-strong)] underline-offset-8 hover:decoration-[var(--brand-cyan)]"
              >
                View services →
              </Link>
            </div>

            <div className="mt-14 grid border-t border-[var(--brand-border)] md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Link
                  key={service}
                  href={`/services/${service
                    .toLowerCase()
                    .replaceAll(" ", "-")
                    .replaceAll("&", "and")}`}
                  className="group border-b border-[var(--brand-border)] p-6 transition-colors hover:bg-[var(--surface-muted)] md:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[var(--brand-text-muted)]">
                      0{index + 1}
                    </span>
                    <span className="text-[var(--brand-text-muted)] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-14 text-xl font-medium tracking-[-0.025em] text-[var(--brand-navy)]">
                    {service}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Blog + Now */}
        <section className="border-y border-[var(--brand-border)] bg-[var(--surface)]">
          <div className="container-site grid lg:grid-cols-2">
            <div className="border-b border-[var(--brand-border)] py-20 lg:border-b-0 lg:border-r lg:pr-14 lg:py-28">
              <p className="eyebrow text-[var(--brand-violet)]">From the Blog</p>

              <h2 className="mt-5 max-w-xl text-4xl font-medium tracking-[-0.045em] text-[var(--brand-navy)] md:text-5xl">
                Ideas worth exploring.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-[var(--brand-text-secondary)]">
                Writing about technology, leadership, entrepreneurship,
                organizations and the process of building.
              </p>

              <Link
                href="/blog"
                className="mt-9 inline-flex items-center gap-3 text-sm font-medium text-[var(--brand-navy)]"
              >
                Read the blog
                <span className="text-[var(--brand-violet)]">↗</span>
              </Link>
            </div>

            <div className="py-20 lg:pl-14 lg:py-28">
              <p className="eyebrow text-[var(--brand-gold)]">Now</p>

              <h2 className="mt-5 max-w-xl text-4xl font-medium tracking-[-0.045em] text-[var(--brand-navy)] md:text-5xl">
                What&apos;s being built next.
              </h2>

              <div className="mt-8 space-y-5">
                {[
                  "Current Work",
                  "Learning",
                  "Exploring",
                  "What’s Next",
                ].map((item, index) => (
                  <Link
                    key={item}
                    href="/now"
                    className="group flex items-center justify-between border-b border-[var(--brand-border)] pb-4 text-sm"
                  >
                    <span className="text-[var(--brand-text-secondary)]">
                      <span className="mr-4 text-xs text-[var(--brand-text-muted)]">
                        0{index + 1}
                      </span>
                      {item}
                    </span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden bg-[var(--brand-navy)] py-24 text-white md:py-32">
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[var(--brand-cyan)]/20" />
          <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-[var(--brand-gold)]/10" />

          <div className="container-site relative">
            <p className="eyebrow text-white/45">Start a conversation</p>

            <div className="mt-7 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <h2 className="max-w-5xl text-[clamp(2.8rem,6vw,6.4rem)] font-medium leading-[0.94] tracking-[-0.06em]">
                Have an idea worth
                <span className="block text-[var(--brand-cyan)]">
                  building?
                </span>
              </h2>

              <Link
                href="/contact/work-with-me"
                className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-white px-7 text-sm font-medium text-[var(--brand-navy)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand-cyan-soft)]"
              >
                Let&apos;s Talk
                <span className="ml-3 text-[var(--brand-cyan)]">↗</span>
              </Link>
            </div>

            <div className="mt-16 border-t border-white/15 pt-5 text-xs text-white/45">
              LEAD · BUILD · SHARE
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
