import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { EnquiryForm } from "@/components/EnquiryForm";
import { SocialLinks } from "@/components/SocialIcons";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Contact ACE Language Centre in Kuala Lumpur. Call, WhatsApp or email our student advisors, or visit our Mont Kiara and USJ campuses. Book a free consultation today.",
  path: "/contact",
});

export default function ContactPage() {
  const cards = [
    { icon: Phone, title: "Call Us", value: site.phone, href: `tel:${site.phoneHref}` },
    { icon: MessageCircle, title: "WhatsApp", value: site.phone, href: `https://wa.me/${site.whatsapp}` },
    { icon: Mail, title: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Clock, title: "Opening Hours", value: site.hours },
  ];

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="We'd love to hear from you"
        description="Have a question about courses, visas or student life in Malaysia? Our friendly advisors reply within one working day — or instantly on WhatsApp."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]}
      />

      <section className="container-x grid gap-12 py-16 lg:grid-cols-2">
        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map((c) => {
              const Inner = (
                <div className="flex h-full items-start gap-3 rounded-2xl border border-navy/10 bg-white p-5 transition-colors hover:border-navy/30">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy/5 text-navy">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-navy">{c.title}</p>
                    <p className="mt-0.5 text-sm text-ink/65">{c.value}</p>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.title} href={c.href}>{Inner}</a>
              ) : (
                <div key={c.title}>{Inner}</div>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-navy/10 bg-white p-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-navy">
              <MapPin className="h-5 w-5 text-gold" /> Our Campuses
            </h2>
            {site.campuses.map((c) => (
              <div key={c.name} className="mt-4 border-l-2 border-gold pl-3">
                <p className="text-sm font-bold text-navy">{c.name}</p>
                <p className="no-justify mt-0.5 text-sm text-ink/70">{c.address}</p>
                <a href={`tel:${c.phoneHref}`} className="mt-1 inline-block text-sm font-semibold text-navy-600 hover:text-gold">
                  {c.phone}
                </a>
              </div>
            ))}
            <p className="no-justify mt-4 text-sm text-ink/60">{site.hours}</p>
            <div className="mt-5 overflow-hidden rounded-xl border border-navy/10">
              <iframe
                title="ACE Language Centre location map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=101.62%2C3.14%2C101.72%2C3.20&layer=mapnik&marker=3.1685%2C101.6508"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4 rounded-2xl bg-navy-gradient p-6 text-white">
            <div className="flex-1">
              <p className="font-display font-bold">Follow ACE</p>
              <p className="text-sm text-white/70">Daily English tips, student stories & campus life.</p>
            </div>
            <SocialLinks className="text-white/80" iconClass="h-5 w-5" />
          </div>
        </div>

        <div>
          <EnquiryForm heading="Send Us a Message" type="contact" />
        </div>
      </section>
    </>
  );
}
