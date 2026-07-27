import { PageHero } from "@/components/PageHero";
import { LegalContent } from "@/components/LegalContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: "The terms and conditions governing use of the ACE Language Centre website, courses and services.",
  path: "/terms",
});

const sections = [
  { h: "1. Acceptance of Terms", p: ["By accessing this website or enrolling in our courses, you agree to these Terms of Service. If you do not agree, please do not use our website or services."] },
  { h: "2. Courses and Enrolment", p: ["Course details, fees and schedules are subject to change. Enrolment is confirmed upon acceptance of an offer and payment of applicable fees. Entry to certain courses may be subject to a placement test."] },
  { h: "3. Fees and Payment", p: ["All fees are payable in accordance with your enrolment agreement. Refund eligibility is governed by our refund policy, provided at the time of enrolment."] },
  { h: "4. Student Conduct", p: ["Students are expected to act respectfully toward staff and fellow students, attend classes, and comply with campus and visa regulations. We reserve the right to address misconduct in line with our policies."] },
  { h: "5. Intellectual Property", p: ["All content on this website and in our learning materials is the property of ACE Language Centre and may not be reproduced without permission."] },
  { h: "6. Limitation of Liability", p: ["We provide our website and services in good faith. To the extent permitted by law, we are not liable for indirect or consequential losses arising from use of our website."] },
  { h: "7. Governing Law", p: ["These terms are governed by the laws of Malaysia. Any disputes shall be subject to the jurisdiction of the Malaysian courts."] },
];

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" breadcrumbs={[{ name: "Home", path: "/" }, { name: "Terms", path: "/terms" }]} />
      <LegalContent sections={sections} />
    </>
  );
}
