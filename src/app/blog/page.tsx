import { PageHero } from "@/components/PageHero";
import { BlogExplorer } from "@/components/blog/BlogExplorer";
import { CTABand } from "@/components/CTABand";
import { blogPosts, blogCategories } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog — English Learning Tips & Guides",
  description:
    "The ACE Language Centre blog: expert tips on IELTS, TOEFL, studying in Malaysia, business English, AI learning and grammar. 100+ SEO-rich articles to help you learn English faster.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="ACE Blog"
        title="English learning tips, guides & insights"
        description="Expert advice from our teachers — from acing IELTS to thriving as an international student in Malaysia. Over 100 in-depth articles and growing."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]}
      />
      <section className="container-x py-16">
        <BlogExplorer posts={blogPosts} categories={blogCategories} />
      </section>
      <CTABand title="Learn faster with expert guidance" subtitle="Reading is great — but structured teaching gets you there faster. Book a free consultation today." />
    </>
  );
}
