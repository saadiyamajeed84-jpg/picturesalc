import Link from "next/link";
import { Star, Clock, CalendarDays, Users, UserRound, MapPin, ArrowRight, Ticket } from "lucide-react";
import { resolveFees, type Course } from "@/lib/courses";

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.15-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M5.85 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.67-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.67 2.84C6.71 7.3 9.14 5.38 12 5.38z" />
    </svg>
  );
}

export function CourseFeesCard({ course }: { course: Course }) {
  const f = resolveFees(course);
  const rating = parseFloat(f.rating);

  const quick = [
    { icon: Clock, value: course.duration },
    { icon: CalendarDays, value: course.schedule },
    { icon: UserRound, value: `Age ${f.ageRange}` },
    { icon: Users, value: f.classSize },
    { icon: MapPin, value: f.location },
  ];

  return (
    <div className="overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-soft">
      {/* Rating header */}
      <div className="border-b border-navy/10 bg-mist p-6">
        <div className="flex items-center gap-3">
          <GoogleG className="h-6 w-6" />
          <span className="font-display text-2xl font-extrabold text-navy">{f.rating}</span>
          <span className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < Math.round(rating) ? "fill-gold text-gold" : "text-navy/20"}`} />
            ))}
          </span>
        </div>
        <p className="no-justify mt-2 text-sm text-ink/60">
          {f.reviews} Google reviews · {f.studentsTrained}
        </p>
      </div>

      {/* Quick info */}
      <div className="space-y-2.5 p-6">
        {quick.map((q, i) => (
          <div key={i} className="flex items-center gap-3 text-sm text-ink/80">
            <q.icon className="h-4 w-4 shrink-0 text-navy" aria-hidden="true" />
            <span className="font-medium">{q.value}</span>
          </div>
        ))}

        <div className="grid gap-2 pt-3 sm:grid-cols-2">
          <Link
            href="/apply"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-4 py-2.5 text-sm font-bold text-navy transition-colors hover:bg-gold-light"
          >
            Apply Now <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/placement-test"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy/15 px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-navy"
          >
            Free Placement Test
          </Link>
        </div>
      </div>

      {/* Fees */}
      <div className="border-t border-navy/10 bg-navy-gradient p-6 text-white">
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Course fees</p>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/90 px-3 py-1 text-xs font-bold text-white">
            <Ticket className="h-3.5 w-3.5" /> {f.seatsLeft} seats left
          </span>
        </div>
        <p className="mt-3 font-display text-xl font-extrabold">{f.feeHighlight}</p>

        <dl className="mt-5 grid grid-cols-2 gap-3">
          {f.specs.map((s) => (
            <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-3">
              <dt className="text-[0.7rem] font-semibold uppercase tracking-wide text-white/55">{s.label}</dt>
              <dd className="mt-0.5 text-sm font-bold text-white">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
