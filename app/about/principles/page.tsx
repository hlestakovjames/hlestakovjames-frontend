import Link from "next/link";

const principles = [
  ["01", "Own the outcome", "Responsibility should extend beyond completing the assigned task."],
  ["02", "Start with the real problem", "A technically impressive solution is still the wrong solution if it solves the wrong problem."],
  ["03", "Keep things understandable", "Good systems should be understandable enough for people to operate, improve and trust them."],
  ["04", "Build for growth", "The first version matters, but so does the path that comes after it."],
  ["05", "Stay curious", "Technology changes continuously. Learning cannot be treated as a finished stage."],
  ["06", "Create meaningful impact", "The ultimate measure of the work is the value it creates for people."],
];

export default function PrinciplesPage() {
  return (
    <main className="bg-[var(--background)]">

      <section className="container-wide py-20 md:py-28">
        <p className="eyebrow text-[var(--brand-cyan)]">
          About · Principles
        </p>

        <h1 className="display-heading mt-6 max-w-5xl text-[var(--brand-navy)]">
          Standards for how I build and lead.
        </h1>

        <div className="mt-16 border-t border-[var(--brand-border)]">
          {principles.map(([number, title, text]) => (
            <article
              key={number}
              className="grid gap-6 border-b border-[var(--brand-border)] py-10 md:grid-cols-[100px_300px_1fr]"
            >
              <span className="text-sm font-semibold text-[var(--brand-cyan)]">
                {number}
              </span>

              <h2 className="text-2xl font-medium tracking-[-0.025em] text-[var(--brand-navy)]">
                {title}
              </h2>

              <p className="max-w-2xl leading-8 text-[var(--brand-text-secondary)]">
                {text}
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
