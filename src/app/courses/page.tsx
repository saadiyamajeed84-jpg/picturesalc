import { PageHero } from "@/components/PageHero";
import { CourseCard } from "@/components/CourseCard";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/CTABand";
import { Button } from "@/components/ui/Button";
import { courses } from "@/lib/courses";
import { pageMetadata } from "@/lib/seo";
import { ArrowRight } from "lucide-react";

export const metadata = pageMetadata({
  title: "English Courses in Malaysia",
  description:
    "Explore ACE Language Centre's English courses in Kuala Lumpur — General English, Intensive English, IELTS, TOEFL, Cambridge, Business English, Kids English and Corporate Training. CEFR-aligned, taught by certified teachers.",
  path: "/courses",
  keywords: ["English Course Malaysia", "IELTS Malaysia", "English Classes Kuala Lumpur"],
});

const categories = ["General", "Exam", "Professional", "Young Learners"] as const;

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Courses"
        title="English courses built around your goals"
        description="Whether you want everyday fluency, a top exam score, or career-ready communication, there's an ACE course designed to get you there — fast."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Courses", path: "/courses" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/placement-test" variant="gold">Take Free Placement Test</Button>
          <Button href="/apply" variant="white" className="bg-white/10 text-white hover:bg-white/20">Book Consultation</Button>
        </div>
      </PageHero>

      {categories.map((cat) => {
        const list = courses.filter((c) => c.category === cat);
        return (
          <section key={cat} className="container-x py-12 first:pt-16 md:py-16">
            <div className="mb-8 flex items-center gap-4">
              <h2 className="font-display text-2xl font-extrabold text-navy md:text-3xl">
                {cat === "Exam" ? "Exam Preparation" : cat === "General" ? "General & Intensive English" : cat === "Professional" ? "Professional & Corporate" : "Young Learners"}
              </h2>
              <span className="h-px flex-1 bg-navy/10" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {list.map((c, i) => (
                <Reveal key={c.slug} delay={i * 0.05}>
                  <CourseCard course={c} />
                </Reveal>
              ))}
            </div>
          </section>
        );
      })}

      <section className="bg-mist py-16">
        <div className="container-x flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-2xl font-extrabold text-navy">Not sure which course is right for you?</h2>
          <p className="max-w-xl text-ink/65">Take our free placement test or talk to an advisor — we&apos;ll match you to the perfect programme for your level and goals.</p>
          <Button href="/placement-test" variant="primary" className="mt-2">
            Find My Course <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <CTABand />
    </>
  );
}
