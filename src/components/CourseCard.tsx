import Link from "next/link";
import { ArrowRight, Clock, BarChart3 } from "lucide-react";
import { Icon } from "@/components/Icon";
import type { Course } from "@/lib/courses";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="card-hover group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6"
    >
      <span
        className="grid h-12 w-12 place-items-center rounded-xl text-white"
        style={{ backgroundColor: course.color }}
      >
        <Icon name={course.icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-4 font-display text-lg font-bold text-navy">{course.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{course.short}</p>
      <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold text-navy-600">
        <span className="inline-flex items-center gap-1 rounded-full bg-mist px-2.5 py-1">
          <BarChart3 className="h-3.5 w-3.5" /> {course.cefr}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-mist px-2.5 py-1">
          <Clock className="h-3.5 w-3.5" /> {course.duration}
        </span>
      </div>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-gold group-hover:gap-2 transition-all">
        View course <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
