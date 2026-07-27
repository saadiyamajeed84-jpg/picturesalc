import { ShieldCheck } from "lucide-react";

const items = [
  "MOE Malaysia registered",
  "EMGS / KDN authorised",
  "IELTS Exam Centre (British Council)",
  "Pearson PTE Exam Centre",
  "Official GED Prep Centre",
];

const stats = ["8,000+ students · 100+ countries", "98% visa approval"];

export function AccreditationBar({ tone = "light" }: { tone?: "light" | "muted" }) {
  return (
    <section
      aria-label="Accreditations and recognitions"
      className={tone === "muted" ? "border-y border-navy/10 bg-mist" : "border-y border-navy/10 bg-white"}
    >
      <div className="container-x py-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {items.map((it) => (
            <span key={it} className="flex items-center gap-2 text-sm font-bold text-navy">
              <ShieldCheck className="h-5 w-5 shrink-0 text-success" aria-hidden="true" />
              {it}
            </span>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {stats.map((it) => (
            <span key={it} className="flex items-center gap-2 text-sm font-bold text-navy">
              <ShieldCheck className="h-5 w-5 shrink-0 text-success" aria-hidden="true" />
              {it}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
