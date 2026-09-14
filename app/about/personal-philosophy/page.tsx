import Link from "next/link";

const philosophies = [
  {
    label: "Technology",
    title: "Technology should expand human capability.",
    text: "I see software as a tool for creating leverage: making people more capable, organizations more coordinated and ideas more achievable.",
  },
  {
    label: "Leadership",
    title: "Leadership is responsibility before it is authority.",
    text: "A leadership role matters because of the responsibility attached to it — creating clarity, making decisions, supporting people and being accountable for outcomes.",
  },
  {
    label: "Organizations",
    title: "Strong organizations need strong systems.",
    text: "People create organizations, but systems give those organizations consistency, memory, accountability and the ability to scale.",
  },
  {
    label: "Building",
    title: "The best ideas eventually meet reality.",
    text: "Ideas need to be tested through execution. Building is where assumptions become visible and learning becomes concrete.",
  },
  {
    label: "Impact",
    title: "Impact is measured by what remains useful.",
    text: "A successful project should create value beyond its launch moment — through people it helps, systems it strengthens or opportunities it creates.",
  },
];

export default function PersonalPhilosophyPage() {
  return (
    <main className="bg-[var(--background)]">

      <section className="container-wide py-20 md:py-28">
        <p className="eyebrow text-[var(--brand-cyan)]">
          About · Personal Philosophy
        </p>

        <h1 className="display-heading mt-6 max-w-5xl text-[var(--brand-navy)]">
          How I think about technology, leadership and building.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--brand-text-secondary)]">
          These ideas continue to evolve through experience. They are less a
          fixed doctrine and more a set of questions and principles that help
          me make better decisions.
        </p>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="border-t border-[var(--brand-border)]">
            {philosophies.map((item) => (
              <article
                key={item.label}
                className="grid gap-6 border-b border-[var(--brand-border)] py-12 md:grid-cols-[180px_1fr]"
              >
                <p className="eyebrow text-[var(--brand-cyan)]">
                  {item.label}
                </p>

                <div>
                  <h2 className="max-w-3xl text-3xl font-medium tracking-[-0.035em] text-[var(--brand-navy)] md:text-4xl">
                    {item.title}
                  </h2>

                  <p className="mt-5 max-w-2xl leading-8 text-[var(--brand-text-secondary)]">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--brand-border)] bg-[var(--brand-navy)] text-white">
        <div className="container-wide py-16 md:py-20">
          <p className="eyebrow text-[var(--brand-cyan)]">Still evolving</p>

          <h2 className="mt-5 max-w-4xl text-3xl font-medium tracking-[-0.035em] md:text-5xl">
            The best philosophy is one that survives contact with real work.
          </h2>

          <Link
            href="/blog"
            className="mt-8 inline-flex text-sm font-medium text-white underline decoration-[var(--brand-cyan)] underline-offset-8"
          >
            Read what I am learning and thinking →
          </Link>
        </div>
      </section>

      <div className="container-wide py-12">
        <Link
          href="/about"
          className="inline-flex text-sm font-medium text-[var(--brand-navy)]"
        >
          ← Back to About
        </Link>
      </div>
    </main>
  );
}
