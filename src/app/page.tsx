import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Star, CheckCircle2, MapPin, Sparkles, Play, Quote,
  Stamp, Home as HomeIcon, ShieldCheck, GraduationCap, Trophy,
} from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { ReviewsSlider } from "@/components/home/ReviewsSlider";
import { WorldMap } from "@/components/home/WorldMap";
import { VideoTestimonials } from "@/components/home/VideoTestimonials";
import { GoogleReviews } from "@/components/home/GoogleReviews";
import { StudentJourney } from "@/components/home/StudentJourney";
import { PlacementTeaser } from "@/components/home/PlacementTeaser";
import { CourseCard } from "@/components/CourseCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CTABand } from "@/components/CTABand";
import { NewsletterForm } from "@/components/NewsletterForm";
import { AccreditationBar } from "@/components/AccreditationBar";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { courses } from "@/lib/courses";
import {
  whyAce, aiTools, generalFaqs, countries, partners, faculty,
  awards, universities, facilities, methodology, corporateBenefits,
} from "@/lib/data";
import { blogPosts } from "@/lib/blog";
import { faqSchema } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = {
  title: "ACE Language Centre | English Language School in Kuala Lumpur, Malaysia",
  description: site.description,
};

const stats = [
  { value: 7, suffix: "+", label: "Years of Excellence" },
  { value: 8000, suffix: "+", label: "Graduates Worldwide" },
  { value: 100, suffix: "+", label: "Countries Represented" },
  { value: 95, suffix: "%", label: "Student Satisfaction" },
];

export default function HomePage() {
  const latest = blogPosts.slice(0, 3);

  return (
    <>
      <JsonLd data={faqSchema(generalFaqs)} />
      <Hero />

      {/* Trust bar */}
      <section className="container-x relative z-10 -mt-10">
        <Reveal>
          <div className="grid gap-6 rounded-3xl border border-navy/10 bg-white p-6 shadow-soft md:grid-cols-3 lg:grid-cols-5 md:p-8">
            {whyAce.slice(0, 5).map((w) => (
              <div key={w.title} className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy/5 text-navy">
                  <Icon name={w.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-navy">{w.title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-ink/60">{w.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Stats */}
      <section className="container-x pb-16 pt-16 md:pt-24">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <Reveal key={s.label} className="text-center">
              <p className="font-display text-4xl font-extrabold text-navy md:text-5xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-ink/55">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Accreditations */}
      <AccreditationBar tone="muted" />

      {/* Why ACE */}
      <section className="container-x py-16 md:py-24">
        <SectionHeading
          center
          eyebrow="Why Choose ACE"
          title="A premium, student-first learning experience"
          description="Everything is built around your success — expert teaching, modern facilities, AI-powered practice and full support from day one."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

      {/* Course categories */}
      <section className="bg-mist py-16 md:py-24" id="courses">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Our Courses"
              title="Programmes designed for fluency, confidence & exam success"
              description="From everyday English to IELTS, TOEFL and Business English — find the course that matches your goals."
            />
            <Button href="/courses" variant="outline" className="hidden md:inline-flex">
              View All Courses <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {courses.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 4) * 0.05}>
                <CourseCard course={c} />
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Button href="/courses" variant="primary">View All Courses <ArrowRight className="h-4 w-4" /></Button>
          </div>
        </div>
      </section>

      {/* Student journey */}
      <section className="container-x py-16 md:py-24">
        <SectionHeading
          center
          eyebrow="Your Student Journey"
          title="From first enquiry to future success — step by step"
          description="We guide you through every stage of learning English and studying in Malaysia, so nothing is left to chance."
        />
        <div className="mx-auto mt-14 max-w-4xl">
          <StudentJourney />
        </div>
      </section>

      {/* Placement test teaser */}
      <section className="container-x pb-16 md:pb-24">
        <Reveal>
          <PlacementTeaser />
        </Reveal>
      </section>

      {/* Study in Malaysia */}
      <section className="bg-mesh py-16 text-white md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <Image
                src="/gallery/ace-002.jpg"
                alt="Kuala Lumpur city skyline — study English in Malaysia with ACE Language Centre"
                width={640}
                height={520}
                className="w-full rounded-3xl border border-white/10 object-cover shadow-glow"
              />
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-white p-5 text-navy shadow-soft sm:block">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gold/15">
                    <MapPin className="h-5 w-5 text-gold" />
                  </span>
                  <div>
                    <p className="font-display font-bold">2 Campuses</p>
                    <p className="text-xs text-ink/55">Mont Kiara &amp; USJ</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              light
              eyebrow="Study in Malaysia"
              title="Learn English. Study in Malaysia. Build your future."
              description="Kuala Lumpur is one of the world's best-value, safest and most English-friendly places to study. From your visa to your first day, ACE supports your entire journey."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Outstanding value vs UK/US/Australia",
                "One of Asia's most English-friendly countries",
                "Safe, modern, multicultural cities",
                "Direct pathways to global universities",
              ].map((r) => (
                <li key={r} className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                  <span className="text-sm text-white/80">{r}</span>
                </li>
              ))}
            </ul>
            <Button href="/study-in-malaysia" variant="gold" className="mt-8">
              Explore Study in Malaysia <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Visa + Accommodation feature split */}
      <section className="container-x py-16 md:py-24">
        <SectionHeading
          center
          eyebrow="Full Student Support"
          title="Everything handled — from visa to your front door"
          description="Two of the most stressful parts of studying abroad, made effortless by our dedicated student services team."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="card-hover flex h-full flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white">
              <div className="relative h-56">
                <Image src="/gallery/ace-031.jpg" alt="ACE student who received a Malaysian student visa" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-navy">
                  <Stamp className="h-4 w-4 text-gold" /> Visa Assistance
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-xl font-bold text-navy">Your student pass, fully managed</h3>
                <p className="mt-2 flex-1 text-ink/65">
                  We process your Malaysian student pass end-to-end through EMGS — from offer letter and document
                  checklists to your Visa Approval Letter and arrival endorsement. Most visas approved within weeks.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-success">
                  <ShieldCheck className="h-4 w-4" /> 98% visa approval success rate
                </div>
                <Link href="/student-services/visa-assistance" className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-gold hover:gap-2 transition-all">
                  Learn about visas <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.05}>
            <article className="card-hover flex h-full flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white">
              <div className="relative h-56">
                <Image src="/gallery/ace-015.jpg" alt="Comfortable student accommodation near ACE Language Centre in Kuala Lumpur" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-navy">
                  <HomeIcon className="h-4 w-4 text-gold" /> Accommodation
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-xl font-bold text-navy">Safe, comfortable places to live</h3>
                <p className="mt-2 flex-1 text-ink/65">
                  Choose from verified, move-in-ready student housing close to both campuses. Furnished options with
                  Wi-Fi and utilities, plus airport pickup so your very first day in Malaysia is stress-free.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-success">
                  <CheckCircle2 className="h-4 w-4" /> Verified housing &amp; free airport pickup
                </div>
                <Link href="/student-services/accommodation" className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-gold hover:gap-2 transition-all">
                  Explore accommodation <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Campus facilities */}
      <section className="bg-mist py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <Image
              src="/gallery/ace-014.jpg"
              alt="Modern ACE Language Centre campus facilities and study lounge in Kuala Lumpur"
              width={620}
              height={520}
              className="w-full rounded-3xl object-cover shadow-soft"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Campus Facilities"
              title="World-class facilities designed for learning"
              description="Our Mont Kiara and USJ campuses combine smart classrooms, AI learning labs and welcoming social spaces in KL's most connected locations."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {facilities.map((f) => (
                <div key={f.title} className="flex items-start gap-3 rounded-2xl border border-navy/10 bg-white p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy/5 text-navy">
                    <Icon name={f.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-navy">{f.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink/60">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Faculty */}
      <section className="container-x py-16 md:py-24">
        <SectionHeading
          center
          eyebrow="Our Leadership & Faculty"
          title="The people behind ACE"
          description="Led by an experienced management team and taught by specialist English educators dedicated to your success."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {faculty.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.05}>
              <div className="card-hover flex h-full items-start gap-4 rounded-2xl border border-navy/10 bg-white p-6">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl font-display text-lg font-bold text-white" style={{ backgroundColor: t.color }}>
                  {t.initials}
                </span>
                <div>
                  <p className="font-display font-bold text-navy">{t.name}</p>
                  <p className="text-sm font-semibold text-gold">{t.role}</p>
                  <p className="mt-1 text-xs text-ink/50">{t.credentials}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{t.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Learning methodology */}
      <section className="bg-mesh py-16 text-white md:py-24">
        <div className="container-x">
          <SectionHeading
            center
            light
            eyebrow="Our Learning Method"
            title="The ACE Method — a proven path to fluency"
            description="A structured, six-stage approach that blends expert teaching with AI-powered practice and continuous progress tracking."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {methodology.map((m, i) => (
              <Reveal key={m.step} delay={(i % 3) * 0.05}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur">
                  <span className="font-display text-4xl font-extrabold text-gold/40">{m.step}</span>
                  <h3 className="mt-2 font-display text-xl font-bold">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI Learning tools */}
      <section className="container-x py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Technology Driven"
              title="Learn faster with ACE AI learning tools"
              description="Every ACE student gets a full suite of AI-powered tools — your 24/7 tutor, speaking coach and writing assistant that turn practice into progress."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {aiTools.slice(0, 6).map((t) => (
                <div key={t.title} className="flex items-start gap-3 rounded-2xl border border-navy/10 bg-white p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent to-navy-600 text-white">
                    <Icon name={t.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-navy">{t.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink/60">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button href="/ai-learning" variant="primary" className="mt-8">
              <Sparkles className="h-4 w-4" /> Discover AI Learning
            </Button>
          </div>
          <Reveal>
            <Image
              src="/gallery/ace-013.jpg"
              alt="Student using ACE AI-powered English learning tools"
              width={620}
              height={620}
              className="w-full rounded-3xl object-cover shadow-soft"
            />
          </Reveal>
        </div>
      </section>

      {/* Corporate training */}
      <section className="container-x pb-16 md:pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-navy/10 bg-navy-gradient p-8 text-white md:p-14">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-gold">
                  <Icon name="Briefcase" className="h-4 w-4" /> Corporate Training
                </span>
                <h2 className="mt-5 font-display text-3xl font-extrabold md:text-4xl">
                  Upskill your team&apos;s English for the global workplace
                </h2>
                <p className="mt-4 text-white/75">
                  From frontline customer service to executive presentations, ACE designs bespoke corporate English
                  programmes that deliver measurable results — on-site, online or hybrid.
                </p>
                <Button href="/courses/corporate-training" variant="gold" className="mt-7">
                  Explore Corporate Training <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <ul className="grid gap-3">
                {corporateBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    <span className="text-sm text-white/85">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Interactive world map */}
      <section className="bg-mesh py-16 text-white md:py-24">
        <div className="container-x">
          <SectionHeading
            center
            light
            eyebrow="A Global Community"
            title="Students from every corner of the world"
            description="Explore where our learners come from. Click a region to see how many students have chosen ACE."
          />
          <div className="mt-12">
            <WorldMap />
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {countries.slice(0, 16).map((c) => (
              <span key={c} className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-white/80">
                {c}
              </span>
            ))}
            <span className="rounded-full bg-gold px-3.5 py-1.5 text-sm font-semibold text-navy">+ 80 more countries</span>
          </div>
        </div>
      </section>

      {/* Featured success story + slider */}
      <section className="container-x py-16 md:py-24">
        <SectionHeading
          center
          eyebrow="Student Success Stories"
          title="Real students. Real results."
          description="From band 5 to band 7.5, from nervous beginner to confident graduate — these are the journeys that inspire us every day."
        />
        <div className="mt-12 grid gap-8 rounded-3xl border border-navy/10 bg-mist p-6 lg:grid-cols-2 lg:items-center lg:p-10">
          <div className="relative">
            <Image src="/gallery/ace-031.jpg" alt="ACE Language Centre graduate celebrating IELTS success" width={560} height={460} className="w-full rounded-2xl object-cover" />
            <span className="absolute bottom-4 left-4 grid h-14 w-14 place-items-center rounded-full bg-white/90 text-navy shadow-lg">
              <Play className="h-6 w-6 translate-x-0.5 fill-navy" />
            </span>
          </div>
          <div>
            <Quote className="h-10 w-10 text-navy/10" />
            <blockquote className="mt-2 font-display text-2xl font-bold leading-snug text-navy">
              “I came to Malaysia unable to hold a conversation. A year later, I passed IELTS 7.5 and got into my dream university. ACE believed in me before I believed in myself.”
            </blockquote>
            <div className="mt-5 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-navy text-lg">🇨🇳</span>
              <div>
                <p className="font-bold text-navy">Lin Huang</p>
                <p className="text-sm text-ink/55">China · IELTS 6.0 → 7.5</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <ReviewsSlider />
        </div>
      </section>

      {/* Video testimonials */}
      <section className="bg-mist py-16 md:py-24">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Video Testimonials"
            title="Hear it from our students"
            description="Watch real students share how ACE helped them ace their English and build their futures."
          />
          <div className="mt-12">
            <VideoTestimonials />
          </div>
        </div>
      </section>

      {/* Google reviews */}
      <section className="container-x py-16 md:py-24">
        <SectionHeading
          center
          eyebrow="Google Reviews"
          title="Rated 4.9 out of 5 by our students"
          description="We're proud to be one of Kuala Lumpur's highest-rated English language centres."
        />
        <div className="mt-12">
          <GoogleReviews />
        </div>
      </section>

      {/* Awards */}
      <section className="bg-mesh py-16 text-white md:py-24">
        <div className="container-x">
          <SectionHeading
            center
            light
            eyebrow="Awards & Recognition"
            title="Excellence that's been recognised"
            description="Our commitment to premium English education has earned recognition across the region."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {awards.map((a, i) => (
              <Reveal key={a.title} delay={(i % 4) * 0.05}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gold/20 text-gold">
                    <Trophy className="h-7 w-7" />
                  </span>
                  <p className="mt-4 font-display text-sm font-bold uppercase tracking-wide text-gold">{a.year}</p>
                  <h3 className="mt-1 font-display font-bold">{a.title}</h3>
                  <p className="mt-1 text-xs text-white/60">{a.org}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners marquee */}
      <section className="border-y border-navy/10 bg-white py-12">
        <div className="container-x">
          <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-ink/40">
            Trusted &amp; accredited partners
          </p>
          <div className="hide-scrollbar overflow-hidden">
            <div className="marquee-track flex w-max gap-10">
              {[...partners, ...partners].map((p, i) => (
                <span key={p + i} className="whitespace-nowrap font-display text-lg font-bold text-navy/40">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* University pathways */}
      <section className="container-x py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="University Pathways"
              title="Your bridge to top universities"
              description="Complete your English at ACE and progress smoothly into degree programmes at leading Malaysian and international universities. Our advisors guide every step."
            />
            <Button href="/study-in-malaysia" variant="primary" className="mt-7">
              <GraduationCap className="h-4 w-4" /> Explore Pathways
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
            {universities.map((u, i) => (
              <Reveal key={u} delay={(i % 4) * 0.04}>
                <div className="flex h-full items-center gap-3 rounded-xl border border-navy/10 bg-white p-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-navy/5 text-navy">
                    <GraduationCap className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold text-navy">{u}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="bg-mist py-16 md:py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Campus Gallery"
              title="Life at ACE Language Centre"
              description="Modern facilities, a global community and unforgettable moments in the heart of Kuala Lumpur."
            />
            <Button href="/gallery" variant="outline" className="hidden md:inline-flex">
              View Gallery <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: "/gallery/ace-011.jpg", label: "Smart classrooms" },
              { src: "/gallery/ace-041.jpg", label: "Our community" },
              { src: "/gallery/ace-013.jpg", label: "AI learning labs" },
              { src: "/gallery/ace-014.jpg", label: "Study lounges" },
            ].map((g, i) => (
              <Reveal key={g.src} delay={(i % 4) * 0.05}>
                <div className="group relative aspect-square overflow-hidden rounded-2xl">
                  <Image src={g.src} alt={`ACE Language Centre — ${g.label}`} fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-navy opacity-0 transition-opacity group-hover:opacity-100">{g.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Latest articles */}
      <section className="container-x py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Latest from the Blog"
            title="English learning tips, guides & insights"
            description="Expert advice on IELTS, studying in Malaysia, and mastering English."
          />
          <Button href="/blog" variant="outline" className="hidden md:inline-flex">
            Read the Blog <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {latest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link href={`/blog/${p.slug}`} className="card-hover flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6">
                <span className="w-fit rounded-full bg-navy/5 px-3 py-1 text-xs font-bold text-navy-600">{p.category}</span>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug text-navy">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{p.excerpt}</p>
                <span className="mt-4 text-xs text-ink/45">{p.readTime} min read</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-mist py-16 md:py-24">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Frequently Asked Questions"
            title="Everything you need to know"
            description="Can't find your answer? Message us on WhatsApp for an instant reply."
          />
          <div className="mt-12">
            <FaqAccordion faqs={generalFaqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABand />

      {/* Newsletter */}
      <section className="container-x pb-20">
        <Reveal>
          <div className="grid gap-8 rounded-3xl border border-navy/10 bg-navy-gradient p-8 text-white md:grid-cols-2 md:items-center md:p-12">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-gold">
                <Star className="h-4 w-4 fill-gold text-gold" /> Join 8,000+ learners
              </span>
              <h2 className="mt-4 font-display text-2xl font-extrabold md:text-3xl">
                Get free English tips &amp; intake updates
              </h2>
              <p className="mt-2 text-sm text-white/70">
                IELTS strategies, study-in-Malaysia guides and scholarship alerts — straight to your inbox. No spam, ever.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </Reveal>
      </section>
    </>
  );
}
