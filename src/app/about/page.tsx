import Image from "next/image";
import { Target, Eye, Heart, Users, Globe2, Award } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { CTABand } from "@/components/CTABand";
import { faculty, accreditations } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About ACE Language Centre",
  description:
    "Learn about ACE Language Centre — Malaysia's premier English language school in Kuala Lumpur. Our mission, values, expert teachers and 7+ years of helping students from 100+ countries succeed.",
  path: "/about",
});

const values = [
  { icon: Heart, title: "Student First", text: "Every decision starts with what's best for our students' learning and wellbeing." },
  { icon: Award, title: "Excellence", text: "We hold ourselves to the highest teaching and service standards, every day." },
  { icon: Globe2, title: "Global Mindset", text: "We celebrate our international community and prepare students for a global world." },
  { icon: Users, title: "Community", text: "We build lasting friendships and a supportive family across cultures." },
];

const timeline = [
  { year: "2018", text: "ACE Language Centre founded in Kuala Lumpur with a single classroom and a big vision." },
  { year: "2019", text: "Became an EMGS / KDN-authorised sponsor, welcoming international students from around the world." },
  { year: "2021", text: "Opened our second campus in USJ and launched dedicated IELTS, TOEFL & PTE preparation." },
  { year: "2023", text: "Introduced AI-powered learning tools, pioneering blended English education in Malaysia." },
  { year: "2026", text: "Now serving 8,000+ graduates from 100+ countries with an average IELTS score of 7.5." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="7+ years of helping the world ACE English"
        description="Since 2018, ACE Language Centre has grown from a single classroom into Malaysia's premier English language school — trusted by students from over 100 countries."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "About Us", path: "/about" }]}
      />

      {/* Story */}
      <section className="container-x grid gap-12 py-16 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <Image
            src="/gallery/ace-016.jpg"
            alt="Students learning English at ACE Language Centre in Kuala Lumpur"
            width={640}
            height={520}
            className="w-full rounded-3xl object-cover shadow-soft"
          />
        </Reveal>
        <div>
          <SectionHeading eyebrow="Our Story" title="Built on a passion for teaching English" />
          <div className="mt-5 space-y-4 text-ink/70">
            <p>
              ACE Language Centre was founded on a simple belief: that learning English should open doors, not create barriers.
              What began as a small centre in Kuala Lumpur has become a thriving international community where students from
              every continent learn, grow and build their futures together.
            </p>
            <p>
              We combine the warmth of a student-first culture with the rigour of world-class teaching and the power of modern
              technology. Our certified teachers, AI learning tools and full study-in-Malaysia support mean every student gets
              exactly what they need to succeed — whether that&apos;s everyday fluency, a top IELTS score or a career transformation.
            </p>
            <p>
              Today, we&apos;re proud to be one of Malaysia&apos;s most trusted English language centres, with two campuses,
              an expert faculty and thousands of success stories that inspire us to keep raising the bar.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-gradient py-14 text-white">
        <div className="container-x grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { v: 7, s: "+", l: "Years of Excellence" },
            { v: 8000, s: "+", l: "Graduates Empowered" },
            { v: 100, s: "+", l: "Countries Served" },
            { v: 40, s: "+", l: "Expert Teachers" },
          ].map((x) => (
            <Reveal key={x.l} className="text-center">
              <p className="font-display text-4xl font-extrabold text-gold md:text-5xl">
                <CountUp value={x.v} suffix={x.s} />
              </p>
              <p className="mt-2 text-sm text-white/70">{x.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="container-x grid gap-6 py-16 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl border border-navy/10 bg-white p-8">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-gold"><Target className="h-7 w-7" /></span>
            <h2 className="mt-5 font-display text-2xl font-bold text-navy">Our Mission</h2>
            <p className="mt-3 text-ink/70">
              To empower learners from every background to communicate confidently in English and unlock global opportunities —
              through exceptional teaching, innovative technology and genuine care.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="h-full rounded-3xl border border-navy/10 bg-white p-8">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold text-navy"><Eye className="h-7 w-7" /></span>
            <h2 className="mt-5 font-display text-2xl font-bold text-navy">Our Vision</h2>
            <p className="mt-3 text-ink/70">
              To be Southeast Asia&apos;s most loved and respected English language centre — the first choice for students who
              want premium education, real results and a truly international experience.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Values */}
      <section className="bg-mist py-16">
        <div className="container-x">
          <SectionHeading center eyebrow="Our Values" title="What we stand for" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="card-hover h-full rounded-2xl border border-navy/10 bg-white p-6 text-center">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-navy/5 text-navy"><v.icon className="h-7 w-7" /></span>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy">{v.title}</h3>
                  <p className="mt-2 text-sm text-ink/65">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container-x py-16">
        <SectionHeading center eyebrow="Our Journey" title="Milestones that shaped ACE" />
        <div className="mx-auto mt-12 max-w-3xl">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.05}>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-navy font-display text-sm font-bold text-gold">{t.year}</span>
                  {i < timeline.length - 1 && <span className="my-1 h-full w-px flex-1 bg-navy/15" />}
                </div>
                <p className="pb-8 pt-3 text-ink/70">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-mist py-16">
        <div className="container-x">
          <SectionHeading center eyebrow="Our Leadership & Faculty" title="The people behind ACE" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {faculty.map((t) => (
              <div key={t.name} className="flex items-start gap-4 rounded-2xl border border-navy/10 bg-white p-6">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl font-display text-lg font-bold text-white" style={{ backgroundColor: t.color }}>{t.initials}</span>
                <div>
                  <p className="font-display font-bold text-navy">{t.name}</p>
                  <p className="text-sm font-semibold text-gold">{t.role}</p>
                  <p className="mt-1 text-xs text-ink/50">{t.credentials}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="container-x py-16">
        <SectionHeading center eyebrow="Accreditations" title="Recognised & trusted" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {accreditations.map((a) => (
            <div key={a.name} className="rounded-2xl border border-navy/10 bg-white p-6 text-center">
              <p className="font-display font-bold text-navy">{a.name}</p>
              <p className="mt-1 text-sm text-ink/60">{a.note}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
