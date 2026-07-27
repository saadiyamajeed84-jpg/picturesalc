import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { CTABand } from "@/components/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { reviews } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Student Success Stories",
  description:
    "Read inspiring success stories from ACE Language Centre students — IELTS high scorers, visa approvals, university admissions and career transformations from 100+ countries.",
  path: "/success-stories",
});

const reviewSchema = reviews.slice(0, 6).map((r) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: { "@type": "EducationalOrganization", name: site.name },
  author: { "@type": "Person", name: r.name },
  reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
  reviewBody: r.text,
}));

export default function SuccessStoriesPage() {
  return (
    <>
      <JsonLd data={reviewSchema} />
      <PageHero
        eyebrow="Success Stories"
        title="Real students. Real results."
        description="From band 5 to band 7.5, from nervous beginner to confident graduate — these are the journeys that inspire us every day."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Success Stories", path: "/success-stories" }]}
      />

      <section className="bg-navy-gradient py-14 text-white">
        <div className="container-x grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { v: 8000, s: "+", l: "Success Stories" },
            { v: 7, s: ".5 avg", l: "IELTS Score" },
            { v: 95, s: "%", l: "Satisfaction" },
            { v: 100, s: "+", l: "Countries" },
          ].map((x) => (
            <Reveal key={x.l} className="text-center">
              <p className="font-display text-4xl font-extrabold text-gold md:text-5xl"><CountUp value={x.v} suffix={x.s} /></p>
              <p className="mt-2 text-sm text-white/70">{x.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-16">
        <div className="mb-12 grid gap-8 rounded-3xl border border-navy/10 bg-white p-8 lg:grid-cols-2 lg:items-center">
          <Image src="/gallery/ace-031.jpg" alt="ACE Language Centre graduate celebrating success" width={560} height={480} className="w-full rounded-2xl object-cover" />
          <div>
            <div className="flex gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-gold text-gold" />)}</div>
            <blockquote className="mt-4 font-display text-2xl font-bold leading-snug text-navy">
              “I came to Malaysia unable to hold a conversation. A year later, I passed IELTS 7.5 and got into my dream university. ACE believed in me before I believed in myself.”
            </blockquote>
            <p className="mt-4 font-semibold text-navy">Lin Huang</p>
            <p className="text-sm text-ink/55">China · IELTS 6.0 → 7.5</p>
          </div>
        </div>

        <SectionHeading center eyebrow="More Stories" title="Voices from our global community" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 0.05}>
              <div className="card-hover relative h-full rounded-2xl border border-navy/10 bg-white p-6">
                <Quote className="absolute right-5 top-5 h-8 w-8 text-navy/5" />
                <div className="flex gap-1">{Array.from({ length: r.rating }).map((_, s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}</div>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">“{r.text}”</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-navy text-lg">{r.flag}</span>
                  <div>
                    <p className="text-sm font-bold text-navy">{r.name}</p>
                    <p className="text-xs text-ink/50">{r.country}</p>
                  </div>
                  <span className="ml-auto rounded-full bg-success/10 px-2.5 py-1 text-[0.65rem] font-bold text-success">{r.result}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand title="Your success story starts here" />
    </>
  );
}
