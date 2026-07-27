import { LayoutDashboard, CalendarCheck, FileCheck2, CreditCard, LineChart, LifeBuoy, Download, BookOpen, LogIn } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/CTABand";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Student Portal",
  description:
    "The ACE Language Centre student portal — track attendance, assignments, certificates, progress, payments and learning resources all in one secure place.",
  path: "/student-portal",
});

const features = [
  { icon: CalendarCheck, title: "Attendance", text: "See your attendance record and upcoming class schedule at a glance." },
  { icon: FileCheck2, title: "Assignments", text: "Submit homework, view feedback and track deadlines." },
  { icon: LineChart, title: "Progress Tracking", text: "Visual dashboards show your growth across every skill." },
  { icon: BookOpen, title: "Learning Resources", text: "Access course materials, worksheets and AI tools 24/7." },
  { icon: Download, title: "Download Materials", text: "Get certificates, receipts and study packs whenever you need them." },
  { icon: CreditCard, title: "Payment Portal", text: "Pay fees securely and view your payment history." },
  { icon: FileCheck2, title: "Certificates", text: "Download your CEFR and course completion certificates." },
  { icon: LifeBuoy, title: "Support Tickets", text: "Raise a request and get help from our student support team." },
];

export default function StudentPortalPage() {
  return (
    <>
      <PageHero
        eyebrow="Student Portal"
        title="Everything you need, in one place"
        description="Your personal ACE dashboard puts your classes, assignments, progress and payments at your fingertips — anytime, anywhere."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Student Portal", path: "/student-portal" }]}
      />

      <section className="container-x grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        <div>
          <SectionHeading eyebrow="Portal Features" title="A smarter way to manage your studies" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 0.05}>
                <div className="h-full rounded-2xl border border-navy/10 bg-white p-5">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy/5 text-navy"><f.icon className="h-5 w-5" /></span>
                  <h3 className="mt-3 font-display font-bold text-navy">{f.title}</h3>
                  <p className="mt-1 text-sm text-ink/65">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <aside className="lg:sticky lg:top-24">
          <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-soft">
            <div className="flex items-center gap-2 text-navy">
              <LayoutDashboard className="h-5 w-5 text-gold" />
              <p className="font-display font-bold">Student Login</p>
            </div>
            <form className="mt-6 space-y-4">
              <div>
                <label htmlFor="sp-id" className="mb-1.5 block text-xs font-semibold text-navy">Student ID or email</label>
                <input id="sp-id" className="w-full rounded-xl border border-navy/12 px-4 py-3 text-sm focus:border-navy focus:outline-none" placeholder="e.g. ACE-2026-001" />
              </div>
              <div>
                <label htmlFor="sp-pw" className="mb-1.5 block text-xs font-semibold text-navy">Password</label>
                <input id="sp-pw" type="password" className="w-full rounded-xl border border-navy/12 px-4 py-3 text-sm focus:border-navy focus:outline-none" placeholder="••••••••" />
              </div>
              <button type="button" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white hover:bg-navy-600">
                <LogIn className="h-4 w-4" /> Log In
              </button>
            </form>
            <p className="mt-4 text-center text-xs text-ink/50">
              New student? Your login details are emailed after enrolment. Need help? <a href="/contact" className="font-semibold text-navy hover:text-gold">Contact support</a>.
            </p>
          </div>
        </aside>
      </section>

      <CTABand title="Not a student yet?" subtitle="Enrol today to get instant access to your personal student portal and AI learning tools." />
    </>
  );
}
