import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Icon } from "@/components/Icon";
import { CTABand } from "@/components/CTABand";
import { serviceDetails, getService } from "@/lib/services";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return serviceDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMetadata({
    title: s.title,
    description: s.intro.slice(0, 155),
    path: `/student-services/${s.slug}`,
    keywords: s.keywords,
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  return (
    <>
      <PageHero
        eyebrow="Student Services"
        title={s.title}
        description={s.tagline}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Student Services", path: "/student-services" },
          { name: s.title, path: `/student-services/${s.slug}` },
        ]}
      >
        <Button href="/apply" variant="gold">Get Started <ArrowRight className="h-4 w-4" /></Button>
      </PageHero>

      <section className="container-x grid gap-12 py-16 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-navy to-navy-600 text-gold"><Icon name={s.icon} className="h-8 w-8" /></span>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">{s.intro}</p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {s.points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-navy/10 bg-white p-6">
                  <CheckCircle2 className="h-6 w-6 text-success" />
                  <h3 className="mt-3 font-display font-bold text-navy">{p.title}</h3>
                  <p className="mt-1 text-sm text-ink/65">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {s.steps && (
            <div className="mt-10">
              <h2 className="font-display text-2xl font-extrabold text-navy">How it works</h2>
              <div className="mt-6 space-y-4">
                {s.steps.map((step, i) => (
                  <div key={step} className="flex gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy font-display text-sm font-bold text-white">{i + 1}</span>
                    <p className="pt-1.5 text-ink/70">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <EnquiryForm heading={`Ask about ${s.title}`} compact type="service-enquiry" />
        </aside>
      </section>

      <CTABand />
    </>
  );
}
