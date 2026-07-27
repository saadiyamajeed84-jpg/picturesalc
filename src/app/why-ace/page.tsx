import { CheckCircle2, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/Icon";
import { CTABand } from "@/components/CTABand";
import { whyAce } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Why Choose ACE Language Centre",
  description:
    "Discover why thousands of students choose ACE Language Centre in Kuala Lumpur — certified teachers, proven exam results, modern facilities, AI learning tools and full student support.",
  path: "/why-ace",
});

const comparison = [
  ["Certified teachers (CELTA/DELTA/TESOL)", true],
  ["CEFR-aligned personalised curriculum", true],
  ["AI-powered learning tools included", true],
  ["Full visa & accommodation support", true],
  ["Small class sizes", true],
  ["Free placement test & consultation", true],
  ["Airport pickup for new students", true],
  ["University pathway guidance", true],
] as const;

export default function WhyAcePage() {
  return (
    <>
      <PageHero
        eyebrow="Why ACE"
        title="Why students choose ACE — and stay"
        description="We don't just teach English. We build confidence, unlock opportunities and support you every step of the way. Here's what makes ACE different."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Why ACE", path: "/why-ace" }]}
      >
        <Button href="/apply" variant="gold">Book Free Consultation <ArrowRight className="h-4 w-4" /></Button>
      </PageHero>

      <section className="container-x py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyAce.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05}>
              <div className="card-hover h-full rounded-2xl border border-navy/10 bg-white p-7">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-navy to-navy-600 text-gold">
                  <Icon name={w.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-navy">{w.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/65">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="The ACE Advantage" title="Everything included, nothing left to chance" />
            <p className="mt-4 text-ink/70">
              When you study with ACE, you get a complete premium experience — not just lessons. From your first enquiry to your
              graduation, every detail is handled by people who genuinely care about your success.
            </p>
            <Button href="/courses" variant="primary" className="mt-6">Explore Courses <ArrowRight className="h-4 w-4" /></Button>
          </div>
          <div className="rounded-3xl border border-navy/10 bg-white p-8">
            <ul className="space-y-3.5">
              {comparison.map(([label]) => (
                <li key={label as string} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
                  <span className="text-sm font-medium text-ink/80">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
