import Link from "next/link";

const areas = [
  ["People", "Technology ultimately serves people. Understanding people is therefore part of understanding technology."],
  ["Organizations", "Systems become powerful when they strengthen the organizations around them, not when they exist in isolation."],
  ["Community Impact", "The most meaningful work creates value that reaches beyond the person or organization that initiated it."],
  ["Ideas", "Ideas become more useful when they are tested, discussed, documented and eventually turned into action."],
];

export default function BeyondTechnologyPage() {
  return (
    <main className="bg-[var(--background)]">

      <section className="container-wide py-20 md:py-28">
        <p className="eyebrow text-[var(--brand-cyan)]">
          About · Beyond Technology
        </p>

        <h1 className="display-heading mt-6 max-w-5xl text-[var(--brand-navy)]">
          The technology is only one part of the story.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--brand-text-secondary)]">
          Building digital products has taught me that the hardest and most
          interesting problems often exist outside the code. People,
          organizations, communication, trust and purpose all influence what a
          system can become.
        </p>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide grid gap-0 border-t border-[var(--brand-border)] md:grid-cols-2">
          {areas.map(([title, text], index) => (
            <article
              key={title}
              className={`border-b border-[var(--brand-border)] py-10 md:px-8 ${
                index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"
              }`}
            >
              <h2 className="text-3xl font-medium tracking-[-0.035em] text-[var(--brand-navy)]">
                {title}
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-[var(--brand-text-secondary)]">
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-wide py-16">
        <p className="max-w-3xl text-2xl leading-10 text-[var(--brand-navy)] md:text-4xl">
          Technology gives us tools. People and purpose determine what those
          tools are worth.
        </p>

        <Link
          href="/about"
          className="mt-10 inline-flex text-sm font-medium text-[var(--brand-navy)]"
        >
          ← Back to About
        </Link>
      </section>
    </main>
  );
}
