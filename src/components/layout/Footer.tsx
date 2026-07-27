import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight, Clock } from "lucide-react";
import { Logo } from "@/components/Logo";
import { NewsletterForm } from "@/components/NewsletterForm";
import { SocialLinks } from "@/components/SocialIcons";
import { site } from "@/lib/site";
import { courses } from "@/lib/courses";

const columns = [
  {
    title: "Courses",
    links: courses.slice(0, 7).map((c) => ({ label: c.title, href: `/courses/${c.slug}` })),
  },
  {
    title: "Student Services",
    links: [
      { label: "Study in Malaysia", href: "/study-in-malaysia" },
      { label: "Visa Assistance", href: "/student-services/visa-assistance" },
      { label: "Accommodation", href: "/student-services/accommodation" },
      { label: "Airport Pickup", href: "/student-services/airport-pickup" },
      { label: "AI Learning Tools", href: "/ai-learning" },
      { label: "English Placement Test", href: "/placement-test" },
      { label: "Student Portal", href: "/student-portal" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Why ACE", href: "/why-ace" },
      { label: "Success Stories", href: "/success-stories" },
      { label: "Gallery", href: "/gallery" },
      { label: "Events", href: "/events" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-mesh text-white">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.6fr]">
          <div>
            <div className="inline-block rounded-2xl bg-white/95 p-4">
              <Logo />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Malaysia&apos;s premier English language centre — empowering students from 100+ countries to
              achieve, communicate and excel since 2019. A brand of {site.legalName} ({site.companyNo}).
            </p>
            <div className="mt-6 space-y-3 text-sm">
              {site.campuses.map((c) => (
                <p key={c.name} className="flex items-start gap-3 text-white/70">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>
                    <span className="font-semibold text-white">{c.name}:</span> {c.address}
                  </span>
                </p>
              ))}
              <a href={`tel:${site.phoneHref}`} className="flex items-center gap-3 hover:text-gold">
                <Phone className="h-4 w-4 text-gold" /> Mont Kiara: {site.phone}
              </a>
              <a href={`tel:${site.phoneUsjHref}`} className="flex items-center gap-3 hover:text-gold">
                <Phone className="h-4 w-4 text-gold" /> USJ: {site.phoneUsj}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-gold">
                <Mail className="h-4 w-4 text-gold" /> {site.email}
              </a>
              <a href={`https://wa.me/${site.whatsapp}`} className="flex items-center gap-3 hover:text-gold">
                <MessageCircle className="h-4 w-4 text-success" /> WhatsApp: {site.phone}
              </a>
              <p className="flex items-center gap-3 text-white/70">
                <Clock className="h-4 w-4 shrink-0 text-gold" /> {site.hours}
              </p>
            </div>
            <SocialLinks className="mt-6 text-white/70" iconClass="h-5 w-5" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-gold">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-white/70 transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="font-display text-xl font-bold">Get free English tips & intake updates</h3>
            <p className="mt-1 text-sm text-white/70">
              Join 8,000+ learners. IELTS strategies, study-in-Malaysia guides and scholarship alerts — no spam.
            </p>
          </div>
          <NewsletterForm />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row">
          <p className="no-justify text-center md:text-left">
            © 2019–{new Date().getFullYear()} ACE Language Centre ({site.legalName}) — {site.companyNo}. All rights reserved. ·{" "}
            <a href={site.url} className="hover:text-gold">{site.domain}</a>
          </p>
          <p className="flex items-center gap-2">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs">Emergency line: {site.phone}</span>
            <Link href="/apply" className="flex items-center gap-1 font-semibold text-gold hover:underline">
              Apply Now <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
