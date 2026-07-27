import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { courses } from "@/lib/courses";
import { blogPosts } from "@/lib/blog";
import { serviceDetails } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "", "/about", "/why-ace", "/courses", "/student-services", "/study-in-malaysia",
    "/ai-learning", "/placement-test", "/student-portal", "/gallery", "/success-stories",
    "/events", "/blog", "/contact", "/apply", "/careers",
    "/privacy-policy", "/terms", "/cookies", "/sitemap",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const courseRoutes = courses.map((c) => ({
    url: `${site.url}/courses/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const serviceRoutes = serviceDetails.map((s) => ({
    url: `${site.url}/student-services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...courseRoutes, ...serviceRoutes, ...blogRoutes];
}
