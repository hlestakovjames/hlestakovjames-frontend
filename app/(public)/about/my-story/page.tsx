import Link from "next/link";

const chapters = [
  {
    number: "01",
    title: "Early Journey",
    text: "The foundations: curiosity, learning, experimentation and the early experiences that created an interest in technology and problem solving.",
  },
  {
    number: "02",
    title: "Technology Journey",
    text: "Moving from learning technology to actually building with it — software, systems, digital products and platforms designed around real needs.",
  },
  {
    number: "03",
    title: "Leadership Journey",
    text: "Discovering that building technology is only part of the challenge. Organizations, people, coordination and direction matter just as much.",
  },
  {
    number: "04",
    title: "Where I Am Now",
    text: "Today the work sits at the intersection of technology, leadership, entrepreneurship, organizations and continuous learning.",
  },
];

export default function MyStoryPage() {
  return (
    <main className="bg-[var(--background)]">

      <section className="container-wide py-20 md:py-28">
        <p className="eyebrow text-[var(--brand-cyan)]">About · My Story</p>

        <h1 className="display-heading mt-6 max-w-5xl text-[var(--brand-navy)]">
          A journey shaped by technology, leadership and curiosity.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--brand-text-secondary)]">
          My story is not a straight line. It is a collection of experiences,
          experiments, responsibilities and lessons that continue to shape how
          I build, lead and think.
        </p>

        <div className="mt-20 border-t border-[var(--brand-border)]">
          {chapters.map((chapter) => (
            <article
              key={chapter.number}
              className="grid gap-6 border-b border-[var(--brand-border)] py-10 md:grid-cols-[100px_280px_1fr]"
            >
              <span className="text-sm font-semibold text-[var(--brand-cyan)]">
                {chapter.number}
              </span>

              <h2 className="text-2xl font-medium tracking-[-0.025em] text-[var(--brand-navy)]">
                {chapter.title}
              </h2>

              <p className="max-w-2xl leading-8 text-[var(--brand-text-secondary)]">
                {chapter.text}
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
