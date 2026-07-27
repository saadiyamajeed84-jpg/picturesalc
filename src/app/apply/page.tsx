import { CheckCircle2, FileText, CalendarCheck, Plane, GraduationCap } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Reveal } from "@/components/ui/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Apply Now — Book a Free Consultation",
  description:
    "Apply to ACE Language Centre in Kuala Lumpur. Book a free consultation and placement test, get expert advice on courses and visas, and start your English journey in Malaysia.",
  path: "/apply",
});

const steps = [
  { icon: FileText, title: "Submit your enquiry", text: "Tell us your goals and current level. It takes two minutes." },
  { icon: CalendarCheck, title: "Free consultation", text: "An advisor recommends the right course and takes your placement test." },
  { icon: Plane, title: "Visa & arrival", text: "We handle your student pass, accommodation and airport pickup." },
  { icon: GraduationCap, title: "Start learning", text: "Join class, access AI tools, and begin your journey to fluency." },
];

const benefits = [
  "Free placement test & consultation",
  "Personalised course recommendation",
  "Full visa and accommodation support",
  "No obligation — advice you can trust",
];

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Apply Now"
        title="Start your English journey today"
        description="Booking is free and easy. Complete the form and our student advisors will guide you every step of the way — from choosing a course to arriving in Kuala Lumpur."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Apply Now", path: "/apply" }]}
      />

      <section className="container-x grid gap-12 py-16 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <h2 className="font-display text-2xl font-extrabold text-navy">How it works</h2>
          <div className="mt-8 space-y-6">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-gold">
                      <s.icon className="h-6 w-6" />
                    </span>
                    {i < steps.length - 1 && <span className="mt-1 h-full w-px flex-1 bg-navy/15" />}
                  </div>
                  <div className="pb-2">
                    <p className="font-display text-lg font-bold text-navy">{i + 1}. {s.title}</p>
                    <p className="mt-1 text-ink/65">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-mist p-6">
            <p className="font-display font-bold text-navy">What&apos;s included, free:</p>
            <ul className="mt-4 space-y-2.5">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-ink/75">
                  <CheckCircle2 className="h-4 w-4 text-success" /> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:sticky lg:top-24">
          <EnquiryForm heading="Book Your Free Consultation" type="application" />
        </div>
      </section>
    </>
  );
}
