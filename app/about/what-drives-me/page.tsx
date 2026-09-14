import Link from "next/link";

const drivers = [
  {
    number: "01",
    title: "Technology",
    text: "The ability to turn ideas into systems that solve real problems keeps me interested in technology.",
  },
  {
    number: "02",
    title: "Leadership",
    text: "I am motivated by the challenge of creating direction, coordinating people and turning collective ambition into action.",
  },
  {
    number: "03",
    title: "Entrepreneurship",
    text: "Building something from an idea requires initiative, resilience and the willingness to learn through uncertainty.",
  },
  {
    number: "04",
    title: "Community",
    text: "Technology becomes more meaningful when it contributes to people, institutions and communities beyond the screen.",
  },
  {
    number: "05",
    title: "Learning",
    text: "There is always another system to understand, another problem to solve and another perspective worth exploring.",
  },
];

export default function WhatDrivesMePage() {
  return (
    <main className="bg-[var(--background)]">

      <section className="container-wide py-20 md:py-28">
        <p className="eyebrow text-[var(--brand-cyan)]">
          About · What Drives Me
        </p>

        <h1 className="display-heading mt-6 max-w-5xl text-[var(--brand-navy)]">
          Curiosity creates the direction. Purpose creates the momentum.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--brand-text-secondary)]">
          The things that keep me moving are not limited to a job title or
          technology stack. They are broader questions about what can be built,
          who it can serve and what it can become.
        </p>

        <div className="mt-20 grid gap-0 border-t border-[var(--brand-border)] md:grid-cols-2">
          {drivers.map((driver, index) => (
            <article
              key={driver.number}
              className={`border-b border-[var(--brand-border)] py-10 md:px-8 ${
                index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"
              }`}
            >
              <span className="text-sm font-semibold text-[var(--brand-cyan)]">
                {driver.number}
              </span>

              <h2 className="mt-6 text-3xl font-medium tracking-[-0.035em] text-[var(--brand-navy)]">
                {driver.title}
              </h2>

              <p className="mt-4 max-w-xl leading-8 text-[var(--brand-text-secondary)]">
                {driver.text}
              </p>
            </article>
          ))}
        </div>

        <Link
          href="/about"
          className="mt-12 inline-flex text-sm font-medium text-[var(--brand-navy)]"
        >
          ← Back to About
        </Link>
      </section>
    </main>
  );
}
