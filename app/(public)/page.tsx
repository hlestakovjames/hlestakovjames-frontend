import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Nexus Hub",
    type: "VENTURE · FOUNDER",
    description: "A growing venture bringing digital solutions, technology products and media initiatives together under one organizational direction.",
    image: "/images/organizations/nexus-hub.jpeg",
    href: "https://nexushubgroup.vercel.app",
    label: "Explore venture",
  },
  {
    name: "KUHRSA",
    type: "DIGITAL SYSTEM · DEVELOPER",
    description: "A digital platform developed to support the online presence and operational needs of a university human resource students’ association.",
    image: "/images/organizations/kuhrsa.jpeg",
    href: "https://kuhrsa.vercel.app",
    label: "View live platform",
  },
];

const focus = [
  { n: "01", title: "Technology & development", text: "Designing and implementing web applications, digital platforms and software systems." },
  { n: "02", title: "Entrepreneurship & ventures", text: "Taking ideas from early thinking into structured initiatives, products and organizations." },
  { n: "03", title: "Systems thinking & innovation", text: "Understanding how components, people and processes connect — then improving how they work together." },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <section className="relative border-b border-[var(--brand-border)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(21,151,201,0.13),transparent_28%),linear-gradient(135deg,#ffffff_0%,#f2f7fa_62%,#eaf3f7_100%)]" />
        <div className="container-wide relative grid min-h-[690px] items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="max-w-4xl">
            <p className="eyebrow flex items-center gap-3 text-[var(--brand-cyan)]"><span className="h-px w-9 bg-current" /> Hlestakov James · Kenya</p>
            <h1 className="mt-8 max-w-4xl text-[clamp(3.5rem,8vw,7.8rem)] font-medium leading-[0.9] tracking-[-0.075em] text-[var(--brand-navy)]">
              I build <span className="text-[var(--brand-cyan)]">technology</span>, develop ventures and think in systems.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--brand-text-secondary)] md:text-xl">
              I’m a technologist and entrepreneur interested in turning ideas into useful digital products, building organizations and understanding how systems can solve real-world problems.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/work" className="inline-flex min-h-12 items-center rounded-full bg-[var(--brand-navy)] px-7 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--brand-cyan)]">Explore my work <span className="ml-3 text-[var(--brand-cyan-soft)]">↗</span></Link>
              <Link href="/about" className="inline-flex min-h-12 items-center rounded-full border border-[var(--brand-border-strong)] bg-white px-7 text-sm font-semibold text-[var(--brand-navy)] transition hover:border-[var(--brand-navy)]">About me</Link>
            </div>
            <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-[var(--brand-border)] pt-5 text-xs font-medium text-[var(--brand-text-muted)]">
              <span>Technology & software</span><span>Entrepreneurship</span><span>Systems thinking</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[470px] lg:ml-auto">
            <div className="absolute -right-7 -top-7 h-36 w-36 rounded-full border border-[var(--brand-cyan)]/40" />
            <div className="absolute -bottom-7 -left-7 h-32 w-32 border-b border-l border-[var(--brand-gold)]" />
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--surface-muted)] shadow-[0_35px_90px_rgba(16,42,67,0.18)]">
              <Image src="/images/personal/hlestakov-james.jpeg" alt="Hlestakov James" fill priority sizes="(max-width: 1024px) 90vw, 40vw" className="object-cover object-center" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(16,42,67,0.78)] to-transparent p-7 pt-28">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">Technologist · Entrepreneur</p>
                <p className="mt-2 text-xl font-medium text-white">Building with purpose.</p>
              </div>
            </div>
            <div className="absolute -bottom-5 right-5 bg-white px-5 py-4 shadow-xl">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[var(--brand-text-muted)]">Guiding perspective</p>
              <p className="mt-1 text-sm font-semibold text-[var(--brand-navy)]">See everything as systems.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-site grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">
          <p className="eyebrow pt-2 text-[var(--brand-cyan)]">A little about my approach</p>
          <div>
            <h2 className="max-w-5xl text-3xl font-medium leading-tight tracking-[-0.05em] text-[var(--brand-navy)] md:text-5xl">
              I’m interested in more than making software work. I want to understand the problem, the people and the system around it.
            </h2>
            <div className="mt-7 flex flex-wrap gap-5">
              <Link href="/about" className="text-sm font-semibold text-[var(--brand-navy)] underline decoration-[var(--brand-cyan)] underline-offset-8">More about me ↗</Link>
              <Link href="/capabilities" className="text-sm font-semibold text-[var(--brand-navy)] underline decoration-[var(--brand-border-strong)] underline-offset-8">Explore capabilities ↗</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-[var(--brand-border)] bg-[var(--surface-muted)]">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="eyebrow text-[var(--brand-cyan)]">Areas of focus</p>
            <h2 className="section-heading mt-5 text-[var(--brand-navy)]">Where I put my energy.</h2>
          </div>
          <div className="mt-14 grid border-t border-[var(--brand-border)] md:grid-cols-3">
            {focus.map((item, i) => <article key={item.n} className={`border-b border-[var(--brand-border)] py-8 md:px-7 md:py-9 ${i ? "md:border-l" : ""}`}>
              <p className="text-xs font-semibold text-[var(--brand-cyan)]">{item.n}</p>
              <h3 className="mt-12 max-w-xs text-2xl font-medium tracking-[-0.035em] text-[var(--brand-navy)]">{item.title}</h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--brand-text-secondary)]">{item.text}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><p className="eyebrow text-[var(--brand-cyan)]">Selected work</p><h2 className="section-heading mt-5 max-w-3xl text-[var(--brand-navy)]">Ideas taking shape in the real world.</h2></div>
            <Link href="/work" className="text-sm font-semibold text-[var(--brand-navy)] underline decoration-[var(--brand-cyan)] underline-offset-8">All projects & case studies ↗</Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project) => <article key={project.name} className="group overflow-hidden border border-[var(--brand-border)] bg-white transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(16,42,67,0.09)]">
              <a href={project.href} target="_blank" rel="noreferrer" className="block">
                <div className="relative aspect-[16/9] overflow-hidden bg-[var(--surface-muted)]">
                  <Image src={project.image} alt={project.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" />
                  <span className="absolute left-5 top-5 bg-white px-3 py-2 text-[0.62rem] font-bold tracking-[0.14em] text-[var(--brand-navy)]">{project.type}</span>
                </div>
                <div className="p-7 md:p-8">
                  <div className="flex items-start justify-between gap-5"><h3 className="text-2xl font-medium tracking-[-0.04em] text-[var(--brand-navy)]">{project.name}</h3><span className="text-lg text-[var(--brand-cyan)]">↗</span></div>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--brand-text-secondary)]">{project.description}</p>
                  <span className="mt-7 inline-block text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand-navy)]">{project.label}</span>
                </div>
              </a>
            </article>)}
          </div>
          <div className="mt-6 grid gap-6 border border-[var(--brand-border)] bg-[var(--surface-muted)] p-7 md:grid-cols-[1fr_auto] md:items-center md:p-9">
            <div><p className="eyebrow text-[var(--brand-violet)]">Product exploration · In development</p><h3 className="mt-3 text-2xl font-medium text-[var(--brand-navy)]">AssetPass</h3><p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--brand-text-secondary)]">A digital asset ecosystem concept being explored as an early product initiative. Its scope and wider positioning will be documented as the product takes shape.</p></div>
            <Link href="/work#assetpass" className="text-sm font-semibold text-[var(--brand-navy)] underline decoration-[var(--brand-violet)] underline-offset-8">Project notes ↗</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--brand-border)] bg-[var(--brand-navy)] py-20 text-white md:py-28">
        <div className="container-wide grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div><p className="eyebrow text-[var(--brand-cyan)]">Beyond individual projects</p><h2 className="mt-5 max-w-4xl text-4xl font-medium leading-tight tracking-[-0.05em] md:text-6xl">Building ventures. Exploring systems. Learning continuously.</h2><p className="mt-6 max-w-2xl text-sm leading-7 text-white/65">My entrepreneurial work and technology interests meet through Nexus Hub, independent product exploration and a long-term interest in practical innovation.</p></div>
          <Link href="/ventures" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[var(--brand-navy)] transition hover:-translate-y-0.5 hover:bg-[var(--brand-cyan-soft)]">Explore ventures ↗</Link>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-site grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div><p className="eyebrow text-[var(--brand-cyan)]">Education & development</p><h2 className="section-heading mt-5 text-[var(--brand-navy)]">Learning is part of the work.</h2></div>
          <div className="border-t border-[var(--brand-border)] pt-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-text-muted)]">Academic background</p>
            <h3 className="mt-3 text-2xl font-medium text-[var(--brand-navy)]">Bachelor of Science in Information and Communication Technology</h3>
            <p className="mt-2 text-sm text-[var(--brand-text-secondary)]">KCA University · Kenya</p>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--brand-text-secondary)]">My academic studies complement practical work in software development, digital systems and technology-led problem solving.</p>
            <Link href="/experience#education" className="mt-7 inline-block text-sm font-semibold text-[var(--brand-navy)] underline decoration-[var(--brand-cyan)] underline-offset-8">More about my background ↗</Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-muted)] py-20 md:py-28">
        <div className="container-wide flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div><p className="eyebrow text-[var(--brand-cyan)]">Connect</p><h2 className="mt-5 max-w-4xl text-4xl font-medium leading-tight tracking-[-0.05em] text-[var(--brand-navy)] md:text-6xl">Have a meaningful challenge or an idea worth exploring?</h2><p className="mt-6 max-w-xl text-sm leading-7 text-[var(--brand-text-secondary)]">I’m interested in thoughtful conversations, professional opportunities and collaborations around technology, products and organizations.</p></div>
          <div className="flex flex-wrap gap-3"><Link href="/contact" className="inline-flex min-h-12 items-center rounded-full bg-[var(--brand-navy)] px-7 text-sm font-semibold text-white transition hover:bg-[var(--brand-cyan)]">Get in touch ↗</Link><a href="https://www.linkedin.com/in/hlestakovjames" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center rounded-full border border-[var(--brand-border-strong)] bg-white px-7 text-sm font-semibold text-[var(--brand-navy)]">LinkedIn ↗</a></div>
        </div>
      </section>
    </main>
  );
}
