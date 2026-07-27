import { Briefcase, MapPin, Heart, TrendingUp, Users, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Careers at ACE Language Centre",
  description:
    "Join the ACE Language Centre team in Kuala Lumpur. Explore teaching and support roles, our culture and benefits. Help students from 100+ countries ACE their English.",
  path: "/careers",
});

const roles = [
  { title: "CELTA/DELTA English Teacher", type: "Full-time", place: "Mont Kiara, KL", desc: "Teach General, Intensive or exam-prep English to motivated international learners." },
  { title: "IELTS Preparation Specialist", type: "Full-time", place: "USJ, Selangor", desc: "Deliver examiner-led IELTS courses and help students hit their target bands." },
  { title: "Young Learner Teacher", type: "Part-time", place: "Both Campuses", desc: "Bring energy and creativity to our Kids & Teens programmes." },
  { title: "Student Services Advisor", type: "Full-time", place: "Mont Kiara, KL", desc: "Guide international students through admissions, visas and accommodation." },
  { title: "Digital Marketing Executive", type: "Full-time", place: "Hybrid", desc: "Grow the ACE brand across search, social and content." },
  { title: "Learning Experience Designer", type: "Contract", place: "Remote", desc: "Design blended and AI-powered learning journeys." },
];

const perks = [
  { icon: Heart, title: "Supportive culture", text: "A student-first, people-first workplace where you're valued." },
  { icon: TrendingUp, title: "Growth & development", text: "Ongoing training, CPD and clear paths for progression." },
  { icon: Users, title: "Global community", text: "Work with colleagues and students from around the world." },
  { icon: Briefcase, title: "Great benefits", text: "Competitive pay, wellness support and modern campuses." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build your career while changing lives"
        description="At ACE, teaching English is more than a job — it's a chance to transform futures. If you're passionate, professional and student-first, we'd love to hear from you."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Careers", path: "/careers" }]}
      />

      <section className="container-x py-16">
        <SectionHeading center eyebrow="Why Work Here" title="A workplace you'll love" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="card-hover h-full rounded-2xl border border-navy/10 bg-white p-6 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-navy/5 text-navy"><p.icon className="h-7 w-7" /></span>
                <h3 className="mt-4 font-display text-lg font-bold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-ink/65">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="container-x">
          <SectionHeading center eyebrow="Open Roles" title="Current opportunities" />
          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            {roles.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 0.04}>
                <div className="flex flex-col gap-4 rounded-2xl border border-navy/10 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy">{r.title}</h3>
                    <p className="mt-1 text-sm text-ink/65">{r.desc}</p>
                    <div className="mt-2 flex flex-wrap gap-3 text-xs font-semibold text-navy-600">
                      <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" /> {r.type}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {r.place}</span>
                    </div>
                  </div>
                  <Button href="/contact" variant="primary" className="shrink-0">Apply <ArrowRight className="h-4 w-4" /></Button>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-ink/55">
            Don&apos;t see the right role? Send your CV to <a href="mailto:careers@acelanguagecentre.edu.my" className="font-semibold text-navy hover:text-gold">careers@acelanguagecentre.edu.my</a>
          </p>
        </div>
      </section>
    </>
  );
}
