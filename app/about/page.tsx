import Image from "next/image";
import Link from "next/link";

const dimensions = [
  {
    number: "01",
    label: "LEAD",
    title: "Create direction and momentum.",
    text: "Leadership is about creating clarity, bringing people together and moving meaningful work forward.",
    accent: "text-[var(--brand-cyan)]",
  },
  {
    number: "02",
    label: "BUILD",
    title: "Turn ideas into useful systems.",
    text: "I enjoy taking ideas from early concepts through architecture, implementation and continuous improvement.",
    accent: "text-[var(--brand-violet)]",
  },
  {
    number: "03",
    label: "SHARE",
    title: "Make knowledge useful.",
    text: "Writing, documenting and sharing lessons turns individual experience into something other people can learn from.",
    accent: "text-[var(--brand-gold)]",
  },
];

const explore = [
  {
    title: "My Story",
    text: "The experiences and stages that shaped the person and builder I am becoming.",
    href: "/about/my-story",
  },
  {
    title: "Vision & Values",
    text: "The beliefs, ambitions and standards that guide the work.",
    href: "/about/vision-values",
  },
  {
    title: "How I Work",
    text: "The process I use to turn complexity into practical execution.",
    href: "/about/how-i-work",
  },
  {
    title: "What Drives Me",
    text: "The subjects, challenges and possibilities that keep me moving.",
    href: "/about/what-drives-me",
  },
  {
    title: "Beyond Technology",
    text: "The people, organizations and communities that make the work meaningful.",
    href: "/about/beyond-technology",
  },
  {
    title: "Personal Philosophy",
    text: "How I think about technology, leadership, organizations, building and impact.",
    href: "/about/personal-philosophy",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">

      <section className="relative overflow-hidden border-b border-[var(--brand-border)]">
        <div className="absolute inset-0 brand-gradient opacity-70" />

        <div className="container-wide relative grid gap-14 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-20">
          <div>
            <p className="eyebrow text-[var(--brand-cyan)]">
              About Hlestakov James
            </p>

            <h1 className="display-heading mt-6 max-w-5xl text-[var(--brand-navy)]">
              Technology, leadership and ideas — connected by purpose.
            </h1>

            <p className="body-large mt-8 max-w-2xl text-[var(--brand-text-secondary)]">
              I am a technology leader and digital product builder interested
              in the space where people, organizations and technology meet.
              My work moves between building software, shaping organizations,
              leading initiatives and sharing what I learn along the way.
            </p>
          </div>

          <div className="lg:justify-self-end">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden bg-[var(--surface-muted)]">
              <Image
                src="/images/personal/hlestakov.jpeg"
                alt="Hlestakov James"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 420px"
              />

              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[rgba(16,42,67,0.7)] to-transparent" />

              <div className="absolute bottom-5 left-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
                  Founder · Technology Leader
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[var(--brand-border)] bg-white">
        <div className="container-site grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow text-[var(--brand-cyan)]">
              The bigger picture
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-3xl font-medium tracking-[-0.035em] text-[var(--brand-navy)] md:text-5xl">
              I am interested in building things that become useful beyond
              their first release.
            </h2>

            <div className="mt-8 grid gap-6 text-base leading-8 text-[var(--brand-text-secondary)] md:grid-cols-2">
              <p>
                Software is one part of the work. The larger challenge is
                understanding the people, operations and goals around it, then
                turning those realities into systems that can actually work.
              </p>

              <p>
                That perspective shapes how I approach projects, leadership
                and organizations. I care about useful technology, thoughtful
                execution and creating platforms that can grow with the people
                who depend on them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--surface-muted)]">
        <div className="container-wide grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="eyebrow text-[var(--brand-cyan)]">My approach</p>

            <h2 className="section-heading mt-5 max-w-md text-[var(--brand-navy)]">
              Three dimensions of the work.
            </h2>
          </div>

          <div className="divide-y divide-[var(--brand-border)] border-y border-[var(--brand-border)]">
            {dimensions.map((item) => (
              <div
                key={item.label}
                className="grid gap-5 py-8 md:grid-cols-[100px_1fr]"
              >
                <span className={`text-sm font-semibold ${item.accent}`}>
                  {item.label}
                </span>

                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.025em] text-[var(--brand-navy)]">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-2xl leading-7 text-[var(--brand-text-secondary)]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="mb-14 max-w-3xl">
            <p className="eyebrow text-[var(--brand-cyan)]">
              Explore the person behind the work
            </p>

            <h2 className="section-heading mt-5 text-[var(--brand-navy)]">
              More than a professional profile.
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-[var(--brand-text-secondary)]">
              These areas explore the experiences, motivations, principles and
              ideas that sit behind the projects and organizations I work with.
            </p>
          </div>

          <div className="grid border-t border-[var(--brand-border)] md:grid-cols-2">
            {explore.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group border-b border-[var(--brand-border)] py-8 transition-colors hover:bg-[var(--surface-muted)] md:px-8 ${
                  index % 2 === 0 ? "md:border-r" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-medium tracking-[-0.025em] text-[var(--brand-navy)]">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-lg leading-7 text-[var(--brand-text-secondary)]">
                      {item.text}
                    </p>
                  </div>

                  <span className="shrink-0 text-lg text-[var(--brand-cyan)] transition-transform duration-200 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--brand-border)] bg-[var(--brand-navy)] text-white">
        <div className="container-wide grid gap-10 py-16 md:grid-cols-[1fr_auto] md:items-center md:py-20">
          <div>
            <p className="eyebrow text-[var(--brand-cyan)]">
              Continue exploring
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-medium tracking-[-0.035em] md:text-5xl">
              The story is better understood through the work.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/leadership"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-[var(--brand-navy)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand-cyan-soft)]"
            >
              Leadership
              <span className="ml-3 text-[var(--brand-cyan)]">↗</span>
            </Link>

            <Link
              href="/work"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/50"
            >
              Explore Work
              <span className="ml-3 text-[var(--brand-cyan)]">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
