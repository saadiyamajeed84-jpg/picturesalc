import { CalendarDays, MapPin, Clock, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/CTABand";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Events & Workshops",
  description:
    "Join ACE Language Centre events — free IELTS workshops, English speaking clubs, cultural days, open days and university pathway seminars in Kuala Lumpur.",
  path: "/events",
});

const events = [
  { title: "Free IELTS Strategy Workshop", date: "15 Feb 2026", time: "10:00 AM", place: "Mont Kiara Campus", tag: "Workshop", desc: "Learn examiner-approved strategies for all four IELTS sections. Includes a mini mock and Q&A." },
  { title: "International Speaking Club", date: "Every Friday", time: "5:00 PM", place: "Both Campuses", tag: "Club", desc: "Practise real conversation with students from 100+ countries in a fun, supportive setting." },
  { title: "Study in Malaysia Open Day", date: "1 Mar 2026", time: "9:00 AM", place: "USJ Campus", tag: "Open Day", desc: "Tour our campus, meet teachers, take a free placement test and learn about visas and pathways." },
  { title: "Business English Masterclass", date: "8 Mar 2026", time: "2:00 PM", place: "Online", tag: "Masterclass", desc: "Presentation and negotiation skills for professionals. Free for enrolled students." },
  { title: "Cultural Day Festival", date: "22 Mar 2026", time: "11:00 AM", place: "Mont Kiara Campus", tag: "Community", desc: "Celebrate our global community with food, music and performances from around the world." },
  { title: "University Pathway Seminar", date: "5 Apr 2026", time: "3:00 PM", place: "Mont Kiara Campus", tag: "Seminar", desc: "Meet partner universities and learn how ACE leads you from English study to a degree." },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="What's happening at ACE"
        description="From free IELTS workshops to cultural festivals, there's always something happening. Join us and become part of the ACE community."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Events", path: "/events" }]}
      />
      <section className="container-x py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((e, i) => (
            <Reveal key={e.title} delay={(i % 3) * 0.05}>
              <div className="card-hover flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6">
                <span className="w-fit rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-gold">{e.tag}</span>
                <h3 className="mt-4 font-display text-lg font-bold text-navy">{e.title}</h3>
                <p className="mt-2 flex-1 text-sm text-ink/65">{e.desc}</p>
                <div className="mt-4 space-y-1.5 text-sm text-ink/70">
                  <p className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-navy" /> {e.date}</p>
                  <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-navy" /> {e.time}</p>
                  <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-navy" /> {e.place}</p>
                </div>
                <Button href="/contact" variant="outline" className="mt-5 w-full">Register Interest <ArrowRight className="h-4 w-4" /></Button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
