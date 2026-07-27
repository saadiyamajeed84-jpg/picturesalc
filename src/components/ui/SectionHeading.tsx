import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <Reveal>
      <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl`}>
        {eyebrow && (
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>
        )}
        <h2 className={`font-display text-3xl font-extrabold leading-tight md:text-4xl ${light ? "text-white" : "text-navy"}`}>
          {title}
        </h2>
        {description && (
          <p className={`mt-4 text-lg ${light ? "text-white/70" : "text-ink/65"}`}>{description}</p>
        )}
      </div>
    </Reveal>
  );
}
