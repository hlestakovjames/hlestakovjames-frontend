type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-4xl"
      }
    >
      {eyebrow && (
        <p className="eyebrow text-[var(--brand-cyan)]">{eyebrow}</p>
      )}

      <h2 className="section-heading mt-5 text-[var(--brand-navy)]">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--brand-text-secondary)]">
          {description}
        </p>
      )}
    </div>
  );
}
