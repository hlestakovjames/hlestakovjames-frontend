import Link from "next/link";

const steps = [
  ["01", "Understand", "Start with the people, problem, context and desired outcome."],
  ["02", "Structure", "Turn complexity into clear requirements, priorities and systems."],
  ["03", "Build", "Move from ideas into practical, testable and maintainable solutions."],
  ["04", "Collaborate", "Bring the right people into the process and make decisions visible."],
  ["05", "Improve", "Learn from real use, refine the system and keep moving forward."],
];

export default function HowIWorkPage() {
  return (
    <main className="bg-[var(--background)]">

      <section className="container-wide py-20 md:py-28">
        <p className="eyebrow text-[var(--brand-cyan)]">
          About · How I Work
        </p>

        <h1 className="display-heading mt-6 max-w-5xl text-[var(--brand-navy)]">
          From uncertainty to useful execution.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--brand-text-secondary)]">
          My process combines strategic thinking with practical execution. The
          objective is not simply to produce something that works, but to
          understand why it should exist and how it can continue to grow.
        </p>

        <div className="mt-16 border-t border-[var(--brand-border)]">
          {steps.map(([number, title, text]) => (
            <div
              key={number}
              className="grid gap-5 border-b border-[var(--brand-border)] py-8 md:grid-cols-[80px_220px_1fr] md:items-start"
            >
              <span className="text-sm font-semibold text-[var(--brand-cyan)]">
                {number}
              </span>

              <h2 className="text-2xl font-medium tracking-[-0.025em] text-[var(--brand-navy)]">
                {title}
              </h2>

              <p className="max-w-2xl leading-7 text-[var(--brand-text-secondary)]">
                {text}
              </p>
            </div>
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
