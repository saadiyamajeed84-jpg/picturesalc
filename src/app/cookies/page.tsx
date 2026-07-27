import { PageHero } from "@/components/PageHero";
import { LegalContent } from "@/components/LegalContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cookie Policy",
  description: "How ACE Language Centre uses cookies and similar technologies, and how you can manage your preferences.",
  path: "/cookies",
});

const sections = [
  { h: "1. What Are Cookies?", p: ["Cookies are small text files stored on your device when you visit a website. They help the site function properly and provide information to improve your experience."] },
  { h: "2. How We Use Cookies", p: ["We use essential cookies for core site functionality, analytics cookies to understand how visitors use our site, and preference cookies to remember your settings.", "We do not use cookies to collect sensitive personal information without your consent."] },
  { h: "3. Managing Cookies", p: ["You can control and delete cookies through your browser settings. Please note that disabling some cookies may affect the functionality of our website."] },
  { h: "4. Third-Party Cookies", p: ["Some cookies may be set by third-party services such as analytics or embedded maps. These are governed by the respective providers' privacy policies."] },
  { h: "5. Updates", p: ["We may update this Cookie Policy from time to time. Any changes will be posted on this page with a revised date."] },
];

export default function CookiesPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Cookie Policy" breadcrumbs={[{ name: "Home", path: "/" }, { name: "Cookies", path: "/cookies" }]} />
      <LegalContent sections={sections} />
    </>
  );
}
