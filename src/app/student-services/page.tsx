import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/Icon";
import { CTABand } from "@/components/CTABand";
import { studentServices } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Student Services",
  description:
    "ACE Language Centre student services — visa assistance, accommodation, airport pickup, student portal, AI learning and 24/7 support for international students in Kuala Lumpur.",
  path: "/student-services",
});

export default function StudentServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Student Services"
        title="Support that goes beyond the classroom"
        description="From your visa to your very first day in Kuala Lumpur, our team is here to make your study-abroad journey smooth, safe and stress-free."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Student Services", path: "/student-services" }]}
      />
      <section className="container-x py-16">
        <SectionHeading center eyebrow="How We Help" title="Everything you need, all in one place" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studentServices.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <Link href={s.href} className="card-hover group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-7">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-navy to-navy-600 text-gold"><Icon name={s.icon} className="h-7 w-7" /></span>
                <h3 className="mt-5 font-display text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-2 flex-1 text-ink/65">{s.text}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-gold group-hover:gap-2 transition-all">Learn more <ArrowRight className="h-4 w-4" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
