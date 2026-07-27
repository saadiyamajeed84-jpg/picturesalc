export function LegalContent({ sections }: { sections: { h: string; p: string[] }[] }) {
  return (
    <div className="container-x max-w-3xl py-16">
      <p className="text-sm text-ink/50">Last updated: January 2026</p>
      <div className="mt-8 space-y-10">
        {sections.map((s) => (
          <section key={s.h}>
            <h2 className="font-display text-xl font-bold text-navy">{s.h}</h2>
            <div className="mt-3 space-y-3 text-ink/70">
              {s.p.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
