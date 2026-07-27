import { PageHero } from "@/components/PageHero";
import { GalleryClient } from "@/components/gallery/GalleryClient";
import { CTABand } from "@/components/CTABand";
import { pageMetadata } from "@/lib/seo";
import { galleryCount, galleryCategories } from "@/lib/gallery";

export const metadata = pageMetadata({
  title: "Campus Gallery",
  description:
    "Explore the official ACE Language Centre photo gallery — real photos of our Kuala Lumpur campus, classrooms, students, teachers, events, graduations, facilities, activities and accommodation.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Life at ACE Language Centre"
        description={`Real moments from our community — ${galleryCount} official photographs across ${galleryCategories.length} categories: campus, classrooms, students, teachers, events, graduation, facilities, activities and accommodation.`}
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }]}
      />
      <section className="container-x py-16">
        <GalleryClient />
      </section>
      <CTABand />
    </>
  );
}
