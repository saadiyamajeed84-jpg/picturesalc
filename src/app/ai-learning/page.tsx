import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/Icon";
import { CTABand } from "@/components/CTABand";
import { aiTools } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI Learning Tools",
  description:
    "ACE Language Centre's AI learning tools — AI English tutor, speaking coach, writing assistant, grammar checker, pronunciation coach and more. Learn English faster with technology-driven education in Malaysia.",
  path: "/ai-learning",
  keywords: ["AI English learning", "Learn English Malaysia"],
});

export default function AiLearningPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology Driven"
        title="Learn English faster with AI"
        description="Every ACE student gets a full suite of AI-powered tools that extend the classroom — unlimited practice, instant feedback and a personalised path to fluency, available 24/7."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "AI Learning", path: "/ai-learning" }]}
      >
        <Button href="/apply" variant="gold"><Sparkles className="h-4 w-4" /> Try ACE AI Free</Button>
      </PageHero>

      <section className="container-x py-16">
        <SectionHeading center eyebrow="Your AI Toolkit" title="10 tools that turn practice into progress" description="Human teachers set the direction. AI gives you endless, patient practice in between classes." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {aiTools.map((t, i) => (
            <Reveal key={t.title} delay={(i % 5) * 0.05}>
              <div className="card-hover h-full rounded-2xl border border-navy/10 bg-white p-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent to-navy-600 text-white">
                  <Icon name={t.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-navy">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-mesh py-16 text-white">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Image src="/gallery/ace-013.jpg" alt="Students using ACE Language Centre learning tools in class" width={620} height={620} className="w-full rounded-3xl border border-white/15 object-cover shadow-glow" />
          </Reveal>
          <div>
            <SectionHeading light eyebrow="Blended Learning" title="Technology plus humanity — the winning formula" />
            <div className="mt-5 space-y-4 text-white/75">
              <p>Research is clear: the fastest progress comes from combining expert teaching with high-volume, feedback-rich practice. That&apos;s exactly what ACE delivers.</p>
              <p>In class, our teachers build your confidence, teach strategy and keep you motivated. Between classes, your AI tools let you practise speaking, writing and grammar as much as you like — with instant, specific feedback that helps you improve every day.</p>
              <p>Your AI Progress Analytics dashboard tracks growth across every skill, so you and your teacher always know your next step.</p>
            </div>
            <Button href="/courses" variant="gold" className="mt-7">Explore Courses <ArrowRight className="h-4 w-4" /></Button>
          </div>
        </div>
      </section>

      <CTABand title="Ready to learn smarter?" subtitle="Book a free consultation and get instant access to ACE AI learning tools when you enrol." />
    </>
  );
}
