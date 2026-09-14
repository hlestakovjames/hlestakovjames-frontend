import Link from "next/link";

const values = [
  ["01", "Ownership", "Take responsibility for the outcome, not only the task."],
  ["02", "Integrity", "Do the right thing even when it is less convenient."],
  ["03", "Curiosity", "Keep asking better questions and keep learning."],
  ["04", "Excellence", "Aim for work that is thoughtful, useful and well executed."],
  ["05", "Collaboration", "Strong outcomes are rarely created alone."],
  ["06", "Impact", "Measure the work by the value it creates for people."],
];

export default function VisionValuesPage() {
  return (
    <main className="bg-[var(--background)]">

      <section className="container-wide py-20 md:py-28">
        <p className="eyebrow text-[var(--brand-cyan)]">
          About · Vision & Values
        </p>

        <h1 className="display-heading mt-6 max-w-5xl text-[var(--brand-navy)]">
          Build useful things. Lead responsibly. Keep learning.
        </h1>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div className="border-t border-[var(--brand-border)] pt-6">
            <p className="eyebrow text-[var(--brand-violet)]">Vision</p>

            <h2 className="mt-5 text-3xl font-medium tracking-[-0.035em] text-[var(--brand-navy)]">
              Build technology and organizations that create lasting value.
            </h2>
          </div>

          <div className="border-t border-[var(--brand-border)] pt-6">
            <p className="eyebrow text-[var(--brand-gold)]">Mission</p>

            <h2 className="mt-5 text-3xl font-medium tracking-[-0.035em] text-[var(--brand-navy)]">
              Turn ideas, technology and leadership into useful real-world
              outcomes.
            </h2>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <p className="eyebrow text-[var(--brand-cyan)]">Core values</p>

          <div className="mt-10 grid border-t border-[var(--brand-border)] md:grid-cols-2 lg:grid-cols-3">
            {values.map(([number, title, text]) => (
              <article
                key={number}
                className="border-b border-[var(--brand-border)] py-8 md:border-r md:px-8 lg:nth-[3n]:border-r-0"
              >
                <span className="text-sm font-semibold text-[var(--brand-cyan)]">
                  {number}
                </span>

                <h2 className="mt-7 text-2xl font-medium tracking-[-0.025em] text-[var(--brand-navy)]">
                  {title}
                </h2>

                <p className="mt-4 leading-7 text-[var(--brand-text-secondary)]">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide py-16">
        <p className="max-w-3xl text-2xl leading-10 text-[var(--brand-navy)] md:text-4xl">
          “What I stand for is ultimately simple: thoughtful people building
          useful things and taking responsibility for the impact they create.”
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
