import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, CalendarDays, UserRound, Lightbulb, ArrowRight, ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts, getPost, bodyFor } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt.slice(0, 155),
    path: `/blog/${post.slug}`,
    keywords: [post.category],
  });
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const body = bodyFor(post);
  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: `${site.url}/crest.svg` } },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    articleSection: post.category,
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <PageHero
        eyebrow={post.category}
        title={post.title}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.category, path: "/blog" },
        ]}
      >
        <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
          <span className="flex items-center gap-1.5"><UserRound className="h-4 w-4 text-gold" /> {post.author}</span>
          <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4 text-gold" /> {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-gold" /> {post.readTime} min read</span>
        </div>
      </PageHero>

      <article className="container-x max-w-3xl py-16">
        {post.takeaways && (
          <Reveal>
            <div className="mb-10 rounded-2xl border border-gold/30 bg-gold/5 p-6">
              <h2 className="flex items-center gap-2 font-display text-lg font-bold text-navy">
                <Lightbulb className="h-5 w-5 text-gold" /> Key Takeaways
              </h2>
              <ul className="mt-4 space-y-2">
                {post.takeaways.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-ink/75">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}

        <div className="space-y-5 text-lg leading-relaxed text-ink/75">
          {body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-navy-gradient p-6 text-white">
          <p className="font-display text-lg font-bold">Ready to put this into practice?</p>
          <p className="mt-1 text-sm text-white/70">Book a free consultation with ACE Language Centre and get a personalised learning plan.</p>
          <Link href="/apply" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-navy">
            Book Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <Link href="/blog" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold">
          <ArrowLeft className="h-4 w-4" /> Back to all articles
        </Link>
      </article>

      {related.length > 0 && (
        <section className="bg-mist py-16">
          <div className="container-x">
            <h2 className="font-display text-2xl font-extrabold text-navy">Related articles</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="card-hover flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6">
                  <span className="w-fit rounded-full bg-navy/5 px-3 py-1 text-xs font-bold text-navy-600">{p.category}</span>
                  <h3 className="mt-4 font-display text-lg font-bold leading-snug text-navy">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-ink/65 line-clamp-2">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand />
    </>
  );
}
