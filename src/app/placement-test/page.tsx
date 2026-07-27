import { PageHero } from "@/components/PageHero";
import { PlacementQuiz } from "@/components/PlacementQuiz";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Free English Placement Test",
  description:
    "Take ACE Language Centre's free English placement test online. Discover your CEFR level in minutes and get a personalised course recommendation to learn English in Malaysia.",
  path: "/placement-test",
  keywords: ["English placement test", "English level test Malaysia"],
});

export default function PlacementTestPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Placement Test"
        title="Discover your English level in minutes"
        description="Answer 10 quick questions to find your approximate CEFR level and get a personalised course recommendation. No sign-up required."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Placement Test", path: "/placement-test" }]}
      />
      <section className="container-x max-w-2xl py-16">
        <PlacementQuiz />
      </section>
    </>
  );
}
