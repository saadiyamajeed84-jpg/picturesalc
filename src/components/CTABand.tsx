import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export function CTABand({
  title = "Ready to ACE Your English?",
  subtitle = "Book a free consultation and placement test today. Our advisors will build a personalised learning plan around your goals — no obligation.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="container-x py-16 md:py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-navy-gradient px-8 py-14 text-center text-white shadow-soft md:px-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold md:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/75">{subtitle}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href="/apply" variant="gold">
                Book Free Consultation <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/placement-test" variant="white">
                Free Placement Test
              </Button>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4 text-success" /> WhatsApp
              </a>
              <a
                href={`tel:${site.phoneHref}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4 text-gold" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
