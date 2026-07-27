import { notFound } from "next/navigation";
import {
  Clock, BarChart3, Wallet, CalendarDays, Award, CheckCircle2,
  Target, BookOpen, ClipboardCheck, GraduationCap, ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CourseCard } from "@/components/CourseCard";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { EnquiryForm } from "@/components/EnquiryForm";
import { CourseFeesCard } from "@/components/CourseFeesCard";
import { CourseTestimonials } from "@/components/CourseTestimonials";
import { AiepForm } from "@/components/AiepForm";
import { AccreditationBar } from "@/components/AccreditationBar";
import { JsonLd } from "@/components/JsonLd";
import { courses, getCourse, getCourseFaqs } from "@/lib/courses";
import { getTestimonialsForCourse } from "@/lib/testimonials";
import { pageMetadata, courseSchema, faqSchema } from "@/lib/seo";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return pageMetadata({
    title: `${course.title} Course`,
    description: `${course.overview.slice(0, 155)}`,
    path: `/courses/${course.slug}`,
    keywords: course.keywords,
  });
}

export default async function CourseDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const related = courses.filter((c) => c.slug !== course.slug && c.category === course.category).slice(0, 4);
  const fill = related.length < 4 ? courses.filter((c) => c.slug !== course.slug && !related.includes(c)).slice(0, 4 - related.length) : [];
  const relatedCourses = [...related, ...fill];
  const courseTestimonials = getTestimonialsForCourse(course.slug);
  const courseFaqs = getCourseFaqs(course);

  const facts = [
    { icon: BarChart3, label: "CEFR Level", value: course.cefr },
    { icon: Clock, label: "Duration", value: course.duration },
    { icon: Wallet, label: "Fees", value: course.fee },
    { icon: CalendarDays, label: "Schedule", value: course.schedule },
    { icon: Award, label: "Certification", value: course.certification },
  ];

  return (
    <>
      <JsonLd data={[courseSchema(course), faqSchema(courseFaqs)]} />
      <PageHero
        eyebrow={`${course.category} · ${course.level}`}
        title={course.title}
        description={course.short}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Courses", path: "/courses" },
          { name: course.title, path: `/courses/${course.slug}` },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <Button href={course.slug === "intensive-english" ? "#aiep" : "/apply"} variant="gold">
            {course.slug === "intensive-english" ? "Apply for AIEP" : "Enrol Now"} <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/placement-test" variant="white" className="bg-white/10 text-white hover:bg-white/20">Free Placement Test</Button>
        </div>
      </PageHero>

      {/* Quick facts */}
      <section className="border-b border-navy/10 bg-white">
        <div className="container-x grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-5">
          {facts.map((f) => (
            <div key={f.label} className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy/5 text-navy">
                <f.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/45">{f.label}</p>
                <p className="text-sm font-bold text-navy">{f.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AccreditationBar tone="muted" />

      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.7fr_1fr]">
        <div className="space-y-12">
          <Reveal>
            <div>
              <h2 className="font-display text-2xl font-extrabold text-navy">Course Overview</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/70">{course.overview}</p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h2 className="flex items-center gap-2 font-display text-2xl font-extrabold text-navy">
                <Target className="h-6 w-6 text-gold" /> Learning Outcomes
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {course.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2.5 rounded-xl border border-navy/10 bg-white p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    <span className="text-sm text-ink/75">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h2 className="flex items-center gap-2 font-display text-2xl font-extrabold text-navy">
                <BookOpen className="h-6 w-6 text-gold" /> Modules &amp; Curriculum
              </h2>
              <div className="mt-5 space-y-3">
                {course.modules.map((m, i) => (
                  <div key={m.title} className="flex gap-4 rounded-xl border border-navy/10 bg-white p-5">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-navy font-display text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-bold text-navy">{m.title}</p>
                      <p className="mt-0.5 text-sm text-ink/65">{m.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl bg-mist p-6">
                <h3 className="flex items-center gap-2 font-display text-lg font-bold text-navy">
                  <GraduationCap className="h-5 w-5 text-gold" /> Teaching Methods
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {course.methods.map((m) => (
                    <li key={m} className="flex items-start gap-2 text-sm text-ink/70">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-navy" /> {m}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-2xl bg-mist p-6">
                <h3 className="flex items-center gap-2 font-display text-lg font-bold text-navy">
                  <ClipboardCheck className="h-5 w-5 text-gold" /> Assessment
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {course.assessment.map((m) => (
                    <li key={m} className="flex items-start gap-2 text-sm text-ink/70">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-navy" /> {m}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="rounded-2xl border border-navy/10 bg-white p-6">
              <h3 className="font-display text-lg font-bold text-navy">Entry Requirements</h3>
              <ul className="mt-4 space-y-2.5">
                {course.entry.map((e) => (
                  <li key={e} className="flex items-start gap-2 text-sm text-ink/70">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {e}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h2 className="font-display text-2xl font-extrabold text-navy">
                What our {course.title} students say
              </h2>
              <p className="mt-2 text-ink/60">Real reviews from students who took this course. Use the arrows to read more.</p>
              <div className="mt-6">
                <CourseTestimonials items={courseTestimonials} />
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h2 className="font-display text-2xl font-extrabold text-navy">Frequently Asked Questions</h2>
              <div className="mt-6">
                <FaqAccordion faqs={courseFaqs} />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <CourseFeesCard course={course} />
          <EnquiryForm heading={`Enquire about ${course.title}`} compact type="course-enquiry" />
        </aside>
      </div>

      {/* AIEP application form — Intensive English only */}
      {course.slug === "intensive-english" && (
        <section id="aiep" className="scroll-mt-24 bg-mist py-16">
          <div className="container-x max-w-4xl">
            <div className="mb-8 text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-gold">AIEP Application</p>
              <h2 className="font-display text-3xl font-extrabold text-navy md:text-4xl">
                AIEP Application — ACE Student Visa
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-ink/65">
                Complete the form below to enrol in the ACE Intensive English Programme and begin your EMGS student visa process.
              </p>
            </div>
            <AiepForm />
          </div>
        </section>
      )}

      {/* Related courses */}
      <section className="bg-mist py-16">
        <div className="container-x">
          <div className="mb-8 flex items-center gap-4">
            <h2 className="font-display text-2xl font-extrabold text-navy">Related Courses</h2>
            <span className="h-px flex-1 bg-navy/10" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedCourses.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
