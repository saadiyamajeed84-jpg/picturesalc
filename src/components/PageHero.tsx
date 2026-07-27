import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs: { name: string; path: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-mesh text-white">
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="container-x relative py-12 md:py-16">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-6 max-w-3xl">
          {eyebrow && (
            <Reveal>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] md:text-5xl lg:text-6xl">
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg leading-relaxed text-white/75">{description}</p>
            </Reveal>
          )}
          {children && <div className="mt-7">{children}</div>}
        </div>
      </div>
    </section>
  );
}
