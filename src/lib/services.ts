export type ServiceDetail = {
  slug: string;
  title: string;
  icon: string;
  tagline: string;
  intro: string;
  points: { title: string; text: string }[];
  steps?: string[];
  keywords: string[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "visa-assistance",
    title: "Visa Assistance",
    icon: "Stamp",
    tagline: "Your student pass, fully managed",
    intro:
      "Applying for a Malaysian student pass can feel daunting — so we handle it for you. From the moment you accept your offer, our dedicated visa team manages your entire application through Malaysia's Education Global Services (EMGS) system, keeping you informed at every stage.",
    points: [
      { title: "End-to-end EMGS processing", text: "We prepare and submit your student pass application and track it to approval." },
      { title: "Document guidance", text: "Clear checklists so your passport, photos, certificates and health forms are right first time." },
      { title: "Visa Approval Letter (VAL)", text: "We secure your VAL so you can travel to Malaysia with confidence." },
      { title: "Arrival endorsement", text: "We guide you through medical screening and passport endorsement on arrival." },
    ],
    steps: [
      "Accept your offer and receive your enrolment letter",
      "Submit your documents with our checklist",
      "We apply to EMGS and track your application",
      "Receive your VAL and travel to Malaysia",
      "Complete medical screening and get your student pass",
    ],
    keywords: ["Malaysia student visa", "Study Abroad Malaysia"],
  },
  {
    slug: "accommodation",
    title: "Accommodation",
    icon: "Home",
    tagline: "Safe, comfortable student housing",
    intro:
      "A great place to live makes all the difference. We help you find safe, verified and affordable accommodation close to our Mont Kiara and USJ campuses, so you can settle in quickly and focus on your studies.",
    points: [
      { title: "Verified housing", text: "Vetted apartments and student residences near campus and public transport." },
      { title: "Flexible options", text: "Shared or private rooms to suit your budget and preferences." },
      { title: "Move-in ready", text: "Furnished options with utilities and Wi-Fi so you can start living from day one." },
      { title: "Local support", text: "Our team helps with contracts, deposits and settling in." },
    ],
    keywords: ["student accommodation Kuala Lumpur"],
  },
  {
    slug: "airport-pickup",
    title: "Airport Pickup",
    icon: "Plane",
    tagline: "A warm welcome from the moment you land",
    intro:
      "Arriving in a new country is exciting — and a little nerve-wracking. That's why a friendly ACE representative will be waiting for you at Kuala Lumpur International Airport (KLIA/KLIA2) to welcome you and take you safely to your new home.",
    points: [
      { title: "Meet & greet at KLIA", text: "A friendly face waiting with an ACE sign as soon as you clear arrivals." },
      { title: "Safe transfer", text: "Comfortable, direct transport to your accommodation." },
      { title: "First-day orientation", text: "Guidance on SIM cards, transport and your first steps in KL." },
      { title: "24/7 arrival support", text: "Someone to call at any hour if your plans change." },
    ],
    keywords: ["airport pickup Kuala Lumpur students"],
  },
];

export const getService = (slug: string) => serviceDetails.find((s) => s.slug === slug);
