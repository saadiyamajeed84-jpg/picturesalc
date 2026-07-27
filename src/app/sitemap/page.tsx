import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { courses } from "@/lib/courses";
import { serviceDetails } from "@/lib/services";
import { blogCategories } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Sitemap",
  description: "Browse all pages on the ACE Language Centre website — courses, student services, blog, and more.",
  path: "/sitemap",
});

const groups = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Why ACE", href: "/why-ace" },
      { label: "Study in Malaysia", href: "/study-in-malaysia" },
      { label: "AI Learning", href: "/ai-learning" },
      { label: "Placement Test", href: "/placement-test" },
      { label: "Gallery", href: "/gallery" },
      { label: "Success Stories", href: "/success-stories" },
      { label: "Events", href: "/events" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Apply Now", href: "/apply" },
      { label: "Careers", href: "/careers" },
      { label: "Student Portal", href: "/student-portal" },
    ],
  },
  {
    title: "Courses",
    links: [{ label: "All Courses", href: "/courses" }, ...courses.map((c) => ({ label: c.title, href: `/courses/${c.slug}` }))],
  },
  {
    title: "Student Services",
    links: [{ label: "All Services", href: "/student-services" }, ...serviceDetails.map((s) => ({ label: s.title, href: `/student-services/${s.slug}` }))],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <PageHero eyebrow="Sitemap" title="Browse the whole site" breadcrumbs={[{ name: "Home", path: "/" }, { name: "Sitemap", path: "/sitemap" }]} />
      <section className="container-x py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="font-display text-sm font-bold uppercase tracking-wider text-gold">{g.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-ink/70 hover:text-navy">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-gold">Blog Categories</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {blogCategories.map((c) => (
              <Link key={c} href="/blog" className="rounded-full border border-navy/10 bg-white px-3 py-1.5 text-sm text-navy hover:border-navy/30">{c}</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
