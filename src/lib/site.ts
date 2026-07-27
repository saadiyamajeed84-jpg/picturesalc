export const site = {
  name: "ACE Language Centre",
  legalName: "World Best Services Malaysia Sdn Bhd",
  companyNo: "1310849-A",
  tagline: "Achieve · Communicate · Excel",
  slogan: "ACE Your English.",
  secondarySlogan: "Learn English. Study in Malaysia. Build Your Future.",
  url: "https://www.acelanguagecentre.edu.my",
  domain: "www.acelanguagecentre.edu.my",
  established: 2019,
  description:
    "ACE Language Centre is Malaysia's premier English language school in Kuala Lumpur. Master IELTS, TOEFL, Business & General English with expert teachers, AI learning tools, and full study-in-Malaysia support.",
  phone: "+60 11-6247 7018",
  phoneHref: "+601162477018",
  phoneUsj: "+60 16-247 7738",
  phoneUsjHref: "+60162477738",
  whatsapp: "601162477018",
  email: "info@acelanguagecentre.edu.my",
  hours: "Mon–Fri 8:30 AM – 6:00 PM · Sat 8:30 AM – 3:00 PM",
  campuses: [
    {
      name: "Mont Kiara HQ",
      address:
        "D-05-08 & D-05-09 & D-06-03, Plaza Mont Kiara, Jalan Kiara, Mont Kiara, 50480 Kuala Lumpur",
      phone: "+60 11-6247 7018",
      phoneHref: "+601162477018",
    },
    {
      name: "USJ Taipan Branch",
      address:
        "7C, Jalan USJ 10/1j, Taipan Business Centre, 47610 Subang Jaya, Selangor",
      phone: "+60 16-247 7738",
      phoneHref: "+60162477738",
    },
  ],
  addresses: [
    "D-05-08 & D-05-09 & D-06-03, Plaza Mont Kiara, Jalan Kiara, Mont Kiara, 50480 Kuala Lumpur",
    "7C, Jalan USJ 10/1j, Taipan Business Centre, 47610 Subang Jaya, Selangor",
  ],
  geo: { lat: 3.1685, lng: 101.6508 },
  social: {
    facebook: "https://www.facebook.com/ACELanguageCentre/",
    instagram: "https://www.instagram.com/acelanguagecentrekl",
    linkedin: "https://www.linkedin.com/company/ace-language-centre",
    tiktok: "https://www.tiktok.com/@acelanguagecentrekl",
    youtube: "https://www.youtube.com/channel/UCQW1rXtEEMdwIDdwm2cbFXw",
  },
  stats: {
    countries: "100+",
    years: "7+",
    students: "8,000+",
    satisfaction: "95%",
    ielts: "7.5",
  },
} as const;

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Courses", href: "/courses", mega: "courses" },
  { label: "Student Services", href: "/student-services", mega: "services" },
  { label: "AI Tools", href: "/ai-learning", mega: "ai" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;
