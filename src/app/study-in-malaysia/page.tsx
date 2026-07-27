import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/Icon";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CTABand } from "@/components/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { studentServices } from "@/lib/data";
import { pageMetadata, faqSchema } from "@/lib/seo";

const reasons = [
  "Outstanding value — a fraction of UK/US/Australia costs",
  "One of Asia's most English-friendly countries",
  "Safe, modern and welcoming multicultural cities",
  "Gateway to global university pathways",
  "Rich culture, food and travel across Southeast Asia",
  "Simple, well-supported student visa process",
];

const faqs = [
  { q: "Do I need a visa to study English in Malaysia?", a: "Yes — international students need a student pass. ACE processes your entire application through EMGS, from offer letter to arrival endorsement." },
  { q: "How much does it cost to live in Kuala Lumpur?", a: "KL is very affordable. Most students budget RM 1,500–2,500 per month for accommodation, food and transport, depending on lifestyle." },
  { q: "Can I work while studying?", a: "Student pass holders may take limited part-time work during eligible periods, subject to current regulations. Our advisors will explain the rules." },
  { q: "Will ACE help me find accommodation?", a: "Absolutely. We offer safe, verified student housing near both campuses and arrange airport pickup so your arrival is stress-free." },
];

export const metadata = pageMetadata({
  title: "Study English in Malaysia",
  description:
    "Study English in Malaysia with ACE Language Centre. Affordable, English-friendly, safe and multicultural — with full visa, accommodation and airport pickup support in Kuala Lumpur.",
  path: "/study-in-malaysia",
  keywords: ["Study Abroad Malaysia", "Study English Kuala Lumpur"],
});

export default function StudyMalaysiaPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <PageHero
        eyebrow="Study in Malaysia"
        title="Learn English. Study in Malaysia. Build your future."
        description="Kuala Lumpur is one of the world's best-value, most welcoming destinations to learn English. And with ACE, your entire journey is fully supported."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Study in Malaysia", path: "/study-in-malaysia" }]}
      >
        <Button href="/apply" variant="gold">Start Your Application <ArrowRight className="h-4 w-4" /></Button>
      </PageHero>

      <section className="container-x grid gap-12 py-16 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <Image src="/gallery/ace-002.jpg" alt="ACE Language Centre campus — study English in Malaysia" width={640} height={480} className="w-full rounded-3xl object-cover shadow-soft" />
        </Reveal>
        <div>
          <SectionHeading eyebrow="Why Malaysia" title="A smart choice for international students" />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {reasons.map((r) => (
              <li key={r} className="flex items-start gap-2.5 rounded-xl border border-navy/10 bg-white p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                <span className="text-sm text-ink/75">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="container-x">
          <SectionHeading center eyebrow="Full Support" title="Everything handled, from visa to arrival" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {studentServices.map((s) => (
              <Link key={s.title} href={s.href} className="card-hover group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy/5 text-navy"><Icon name={s.icon} className="h-6 w-6" /></span>
                <h3 className="mt-4 font-display text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-ink/65">{s.text}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-gold group-hover:gap-2 transition-all">Learn more <ArrowRight className="h-4 w-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <SectionHeading center eyebrow="FAQs" title="Studying in Malaysia — your questions answered" />
        <div className="mt-12"><FaqAccordion faqs={faqs} /></div>
      </section>

      <CTABand />
    </>
  );
}
