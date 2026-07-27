import type { Metadata } from "next";
import { site } from "./site";

export const defaultKeywords = [
  "English Language Centre Malaysia",
  "Learn English Malaysia",
  "IELTS Malaysia",
  "Study English Kuala Lumpur",
  "English Course Malaysia",
  "English School Malaysia",
  "Study Abroad Malaysia",
  "Corporate English Training",
  "Business English Malaysia",
  "English Classes Kuala Lumpur",
];

type PageMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
};

export function pageMetadata({ title, description, path, keywords = [], image }: PageMeta): Metadata {
  const url = `${site.url}${path}`;
  const ogImage = image ?? "/gallery/ace-002.jpg";
  const fullTitle = path === "/" ? `${title}` : `${title} | ${site.name}`;
  return {
    title: fullTitle,
    description,
    keywords: [...keywords, ...defaultKeywords],
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_MY",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/crest.svg`,
    description: site.description,
    slogan: site.slogan,
    email: site.email,
    telephone: site.phone,
    sameAs: Object.values(site.social),
    address: {
      "@type": "PostalAddress",
      streetAddress: "D-05-08, Plaza Mont Kiara, Jalan Kiara, Mont Kiara",
      addressLocality: "Kuala Lumpur",
      addressRegion: "Wilayah Persekutuan",
      postalCode: "50480",
      addressCountry: "MY",
    },
    foundingDate: "2019",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1280",
      bestRating: "5",
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#localbusiness`,
    name: site.name,
    image: `${site.url}/gallery/ace-002.jpg`,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "D-05-08, Plaza Mont Kiara, Jalan Kiara, Mont Kiara",
      addressLocality: "Kuala Lumpur",
      addressRegion: "Wilayah Persekutuan",
      postalCode: "50480",
      addressCountry: "MY",
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "18:00",
      },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "08:30", closes: "15:00" },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function courseSchema(course: {
  title: string;
  overview: string;
  slug: string;
  fee: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.overview,
    url: `${site.url}/courses/${course.slug}`,
    provider: {
      "@type": "EducationalOrganization",
      name: site.name,
      sameAs: site.url,
    },
    offers: {
      "@type": "Offer",
      category: "Paid",
      priceCurrency: "MYR",
      availability: "https://schema.org/InStock",
    },
  };
}
