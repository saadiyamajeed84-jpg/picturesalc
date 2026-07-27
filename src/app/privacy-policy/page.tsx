import { PageHero } from "@/components/PageHero";
import { LegalContent } from "@/components/LegalContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How ACE Language Centre collects, uses and protects your personal data in line with Malaysia's PDPA and international best practice.",
  path: "/privacy-policy",
});

const sections = [
  { h: "1. Introduction", p: ["ACE Language Centre (\"we\", \"us\") is committed to protecting your privacy. This policy explains how we collect, use and safeguard your personal information when you use our website or services.", "We comply with Malaysia's Personal Data Protection Act 2010 (PDPA) and follow international best practice for data protection."] },
  { h: "2. Information We Collect", p: ["We collect information you provide directly — such as your name, email, phone number, country and course interests when you submit an enquiry, subscribe to our newsletter, or apply for a course.", "We also collect limited technical data such as browser type and pages visited to improve our website."] },
  { h: "3. How We Use Your Information", p: ["We use your information to respond to enquiries, process applications, provide student services, send relevant updates you have opted into, and improve our offerings. We never sell your personal data to third parties."] },
  { h: "4. Data Security", p: ["We implement appropriate technical and organisational measures to protect your data against unauthorised access, loss or misuse. Access to personal data is restricted to authorised staff only."] },
  { h: "5. Your Rights", p: ["You have the right to access, correct or request deletion of your personal data, and to withdraw consent to marketing communications at any time. To exercise these rights, contact us at info@acelanguagecentre.edu.my."] },
  { h: "6. Cookies", p: ["Our website uses cookies to enhance your experience. See our Cookie Policy for details on how we use them and how you can manage your preferences."] },
  { h: "7. Contact Us", p: ["If you have questions about this policy or how we handle your data, please contact us at info@acelanguagecentre.edu.my or by phone at +60 11-6247 7018."] },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" breadcrumbs={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy" }]} />
      <LegalContent sections={sections} />
    </>
  );
}
