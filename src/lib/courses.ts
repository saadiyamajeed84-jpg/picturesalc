export type CourseFees = {
  rating: string;
  reviews: number;
  studentsTrained: string;
  seatsLeft: number;
  ageRange: string;
  classSize: string;
  delivery: string;
  location: string;
  feeHighlight: string;
  specs: { label: string; value: string }[];
};

export type Course = {
  slug: string;
  title: string;
  short: string;
  icon: string;
  level: string;
  cefr: string;
  duration: string;
  fee: string;
  schedule: string;
  certification: string;
  color: string;
  category: "General" | "Exam" | "Professional" | "Young Learners";
  overview: string;
  outcomes: string[];
  entry: string[];
  modules: { title: string; detail: string }[];
  methods: string[];
  assessment: string[];
  faqs: { q: string; a: string }[];
  testimonial: { name: string; country: string; text: string; result: string };
  keywords: string[];
  fees?: Partial<CourseFees>;
};

export const courses: Course[] = [
  {
    slug: "general-english",
    title: "General English",
    short: "Improve your everyday communication skills across all four language skills.",
    icon: "MessageCircle",
    level: "All Levels",
    cefr: "A1 – C2",
    duration: "1 – 12 months",
    fee: "From RM 1,200 / month",
    schedule: "Morning, Afternoon & Evening",
    certification: "ACE Certificate of Achievement (CEFR-aligned)",
    color: "#3ba7ff",
    category: "General",
    fees: {
      rating: "4.9/5",
      reviews: 268,
      studentsTrained: "2,400+ students trained in this course",
      seatsLeft: 14,
      ageRange: "17+",
      classSize: "Max 12",
      delivery: "On-site, Campus, Online",
      location: "Mont Kiara / USJ",
      feeHighlight: "From RM 1,200 / month",
      specs: [
        { label: "CEFR level", value: "A1 – C2" },
        { label: "Duration", value: "1 – 12 months" },
        { label: "Class size", value: "Max 12" },
        { label: "Delivery", value: "On-site, Campus, Online" },
      ],
    },
    overview:
      "Our flagship General English programme builds real-world fluency across speaking, listening, reading, and writing. Whether you are starting from scratch or refining advanced skills, our CEFR-aligned curriculum meets you at your level and moves you forward fast. Small class sizes, communicative teaching, and daily speaking practice mean you use English from day one.",
    outcomes: [
      "Communicate confidently in everyday and academic situations",
      "Expand active vocabulary by 1,000+ high-frequency words per level",
      "Understand native-speed listening in a range of accents",
      "Write clear emails, essays, and reports with correct grammar",
      "Progress a full CEFR level roughly every 8–10 weeks",
    ],
    entry: [
      "Free ACE placement test (online or on-campus)",
      "Open to learners aged 17 and above",
      "No prior certificate required for beginner levels",
    ],
    modules: [
      { title: "Speaking & Pronunciation", detail: "Daily discussions, role-plays, and phonics-based accent training." },
      { title: "Listening Skills", detail: "Authentic audio, podcasts, and interview comprehension." },
      { title: "Reading & Vocabulary", detail: "Graded readers, news analysis, and vocabulary systems." },
      { title: "Grammar in Use", detail: "Practical grammar taught through communication, not memorisation." },
      { title: "Writing Workshop", detail: "Structured writing from sentences to full essays." },
    ],
    methods: [
      "Communicative Language Teaching (CLT)",
      "Task-based learning with real-world projects",
      "AI speaking & pronunciation coach for homework",
      "Weekly one-to-one tutor feedback",
    ],
    assessment: [
      "Placement test at enrolment",
      "Weekly progress quizzes",
      "Monthly speaking assessments",
      "End-of-level CEFR examination",
    ],
    faqs: [
      { q: "How long does each level take?", a: "Most students complete one CEFR level in 8–10 weeks of full-time study, or 12–16 weeks part-time." },
      { q: "Can I start any week?", a: "General English has rolling weekly start dates, so you can begin whenever you are ready." },
      { q: "Will I get a certificate?", a: "Yes — you receive an ACE CEFR-aligned Certificate of Achievement on completing each level." },
    ],
    testimonial: {
      name: "Aisha R.",
      country: "Saudi Arabia",
      text: "I arrived barely able to introduce myself. Six months later I passed my university interview in English. ACE changed everything.",
      result: "A2 → B2 in 6 months",
    },
    keywords: ["Learn English Malaysia", "English Course Malaysia", "English Classes Kuala Lumpur"],
  },
  {
    slug: "intensive-english",
    title: "Intensive English Programme (AIEP)",
    short: "Accelerate fluency with an immersive, fast-track full-time programme.",
    icon: "Zap",
    level: "A2 – C1",
    cefr: "A2 – C1",
    duration: "8 weeks per level",
    fee: "From RM 2,000 / month",
    schedule: "Full-time, Mon–Fri",
    certification: "ACE Intensive Completion Certificate",
    color: "#2cb67d",
    category: "General",
    fees: {
      rating: "4.9/5",
      reviews: 197,
      studentsTrained: "1,600+ students trained in this course",
      seatsLeft: 9,
      ageRange: "17+",
      classSize: "Max 12",
      delivery: "On-site / Campus",
      location: "Mont Kiara / USJ",
      feeHighlight: "From RM 2,000 / month",
      specs: [
        { label: "CEFR level", value: "A2 – C1" },
        { label: "Duration", value: "8 weeks per level" },
        { label: "Hours / week", value: "25+ contact hours" },
        { label: "Class size", value: "Max 12" },
      ],
    },
    overview:
      "The Intensive English programme is built for ambitious learners who want maximum progress in minimum time. With 25+ guided hours per week plus structured self-study, you immerse fully in English. Ideal for students preparing for university, migration, or a career move who need results fast.",
    outcomes: [
      "Achieve rapid CEFR progression — up to two levels in a term",
      "Build academic and professional English simultaneously",
      "Develop exam-ready reading and writing stamina",
      "Gain the confidence to study fully in English",
    ],
    entry: [
      "Placement test showing A2 level or above",
      "Commitment to full-time weekday attendance",
      "Recommended for university and migration pathways",
    ],
    modules: [
      { title: "Core Language Skills", detail: "Integrated speaking, listening, reading, writing daily." },
      { title: "Academic Foundations", detail: "Note-taking, referencing, and academic vocabulary." },
      { title: "Fluency Labs", detail: "Extended speaking and debate sessions." },
      { title: "Skill Electives", detail: "Choose IELTS prep, business, or pronunciation focus." },
    ],
    methods: [
      "Immersive full-day English environment",
      "Blended learning with AI study planner",
      "Project-based assessment",
      "Progress tracking dashboard",
    ],
    assessment: [
      "Fortnightly benchmark tests",
      "Portfolio of written work",
      "Final CEFR assessment",
    ],
    faqs: [
      { q: "How many hours per week?", a: "Intensive students attend 25+ contact hours weekly, plus around 10 hours of guided self-study." },
      { q: "Is it suitable for IELTS prep?", a: "Yes — you can select an IELTS-focused elective within the intensive track." },
    ],
    testimonial: {
      name: "Chen W.",
      country: "China",
      text: "The pace was exactly what I needed. In 12 weeks I went from struggling to confidently attending lectures in English.",
      result: "B1 → C1 in 12 weeks",
    },
    keywords: ["English Language Centre Malaysia", "Study English Kuala Lumpur"],
  },
  {
    slug: "ielts-preparation",
    title: "IELTS Preparation",
    short: "Achieve your target band score with proven strategies and expert coaching.",
    icon: "Target",
    level: "B1 – C2",
    cefr: "B1 – C2",
    duration: "4 – 12 weeks",
    fee: "From RM 2,850 / month",
    schedule: "Weekday & Weekend intakes",
    certification: "ACE IELTS Readiness Certificate",
    color: "#d6a019",
    category: "Exam",
    fees: {
      rating: "4.9/5",
      reviews: 241,
      studentsTrained: "2,100+ students trained in this course",
      seatsLeft: 7,
      ageRange: "16+",
      classSize: "Max 12",
      delivery: "On-site, Campus, Online",
      location: "Mont Kiara / USJ",
      feeHighlight: "From RM 2,850 / month",
      specs: [
        { label: "CEFR level", value: "B1 – C2" },
        { label: "Duration", value: "4 – 12 weeks" },
        { label: "Exam centre", value: "British Council" },
        { label: "Class size", value: "Max 12" },
      ],
    },
    overview:
      "Our IELTS Preparation course is the fastest route to your target band. Taught by examiners and specialists, it decodes the exact skills each section rewards. You will sit full mock tests under real conditions, receive detailed band-scored feedback, and master the strategies that turn hard-earned English into a high score.",
    outcomes: [
      "Understand the marking criteria for all four sections",
      "Master time management and question strategies",
      "Raise your writing and speaking band with targeted feedback",
      "Sit realistic mock exams with examiner scoring",
      "Walk in on exam day fully prepared and confident",
    ],
    entry: [
      "Placement test showing B1 (IELTS 4.5) or above",
      "Suitable for university and migration applicants",
      "Bring a valid ID for official test registration support",
    ],
    modules: [
      { title: "Listening Strategies", detail: "Prediction, note-taking, and trap-spotting techniques." },
      { title: "Academic & General Reading", detail: "Skimming, scanning, and question-type mastery." },
      { title: "Writing Task 1 & 2", detail: "Structure, cohesion, and band-9 language for both tasks." },
      { title: "Speaking Confidence", detail: "Fluency, coherence, and vocabulary for parts 1–3." },
      { title: "Full Mock Exams", detail: "Timed practice with individual band feedback." },
    ],
    methods: [
      "Examiner-led strategy sessions",
      "AI writing assistant with band predictions",
      "Weekly speaking simulations",
      "Personalised improvement plan",
    ],
    assessment: [
      "Diagnostic mock at entry",
      "Weekly section tests",
      "Two full graded mock exams",
      "Exit band prediction report",
    ],
    faqs: [
      { q: "What band improvement can I expect?", a: "Most students improve 0.5–1.5 bands over the course, depending on starting level and effort." },
      { q: "Do you help with test registration?", a: "Yes — our advisors help you register for the official IELTS test at approved centres in Malaysia." },
      { q: "Academic or General Training?", a: "We prepare you for both modules; you choose your focus based on your goal." },
    ],
    testimonial: {
      name: "Lin H.",
      country: "China",
      text: "I needed 7.0 for my master's. ACE got me to 7.5 in ten weeks with feedback I could actually act on.",
      result: "IELTS 6.0 → 7.5",
    },
    keywords: ["IELTS Malaysia", "IELTS Preparation Kuala Lumpur", "English School Malaysia"],
  },
  {
    slug: "toefl-preparation",
    title: "TOEFL Preparation",
    short: "Excel in the academic TOEFL iBT and open doors to global universities.",
    icon: "GraduationCap",
    level: "B1 – C2",
    cefr: "B1 – C2",
    duration: "8 – 12 weeks",
    fee: "From RM 2,850 / month",
    schedule: "Weekday & Weekend intakes",
    certification: "ACE TOEFL Readiness Certificate",
    color: "#3ba7ff",
    category: "Exam",
    fees: {
      rating: "4.8/5",
      reviews: 156,
      studentsTrained: "1,200+ students trained in this course",
      seatsLeft: 10,
      ageRange: "16+",
      classSize: "Max 12",
      delivery: "On-site, Campus, Online",
      location: "Mont Kiara / USJ",
      feeHighlight: "From RM 2,850 / month",
      specs: [
        { label: "CEFR level", value: "B1 – C2" },
        { label: "Duration", value: "8 – 12 weeks" },
        { label: "Format", value: "iBT computer-based" },
        { label: "Class size", value: "Max 12" },
      ],
    },
    overview:
      "The TOEFL iBT is the gold standard for admission to universities in the US and beyond. Our TOEFL Preparation course trains you in the integrated skills the test demands — reading, listening, speaking, and writing that work together. Practice on realistic computer-based tasks and learn to think in the TOEFL format.",
    outcomes: [
      "Master integrated speaking and writing tasks",
      "Build academic reading speed and accuracy",
      "Take clear, structured lecture notes at native speed",
      "Achieve a competitive score for top universities",
    ],
    entry: [
      "Placement test showing B1 level or above",
      "Suitable for US university and scholarship applicants",
    ],
    modules: [
      { title: "Reading Section", detail: "Academic passages and question strategies." },
      { title: "Listening Section", detail: "Lectures, conversations, and note-taking." },
      { title: "Speaking Tasks", detail: "Independent and integrated response templates." },
      { title: "Writing Tasks", detail: "Integrated and academic discussion essays." },
    ],
    methods: [
      "Computer-based practice mirroring the real iBT",
      "AI pronunciation and fluency scoring",
      "Weekly graded speaking and writing",
    ],
    assessment: [
      "Diagnostic test at entry",
      "Section drills every week",
      "Full-length mock iBT",
    ],
    faqs: [
      { q: "TOEFL or IELTS — which should I take?", a: "It depends on your target universities. Our advisors help you choose the right test for your destination." },
      { q: "Is the course computer-based?", a: "Yes — you practise on iBT-style computer tasks to match real exam conditions." },
    ],
    testimonial: {
      name: "Diego M.",
      country: "Brazil",
      text: "The integrated task practice was exactly like the real exam. I scored 105 and got into my first-choice university.",
      result: "TOEFL 105/120",
    },
    keywords: ["TOEFL Malaysia", "Study Abroad Malaysia"],
  },
  {
    slug: "business-english",
    title: "Business English",
    short: "Enhance professional communication for the global workplace.",
    icon: "Briefcase",
    level: "B1 – C2",
    cefr: "B1 – C2",
    duration: "1 – 6 months",
    fee: "From RM 1,920 / month",
    schedule: "Evening & Weekend friendly",
    certification: "ACE Business English Certificate",
    color: "#091b63",
    category: "Professional",
    fees: {
      rating: "4.9/5",
      reviews: 172,
      studentsTrained: "1,400+ students trained in this course",
      seatsLeft: 11,
      ageRange: "18+",
      classSize: "Max 12",
      delivery: "On-site, Campus, Online",
      location: "Mont Kiara / USJ",
      feeHighlight: "From RM 1,920 / month",
      specs: [
        { label: "CEFR level", value: "B1 – C2" },
        { label: "Duration", value: "1 – 6 months" },
        { label: "Focus", value: "Workplace English" },
        { label: "Class size", value: "Max 12" },
      ],
    },
    overview:
      "Business English at ACE turns your language skills into career capital. Learn to lead meetings, negotiate, present with impact, and write persuasive business communication. Content is drawn from real corporate scenarios across finance, tech, hospitality, and trade — the industries that power Malaysia and the region.",
    outcomes: [
      "Run and contribute to meetings in confident English",
      "Deliver polished presentations to any audience",
      "Write professional emails, reports, and proposals",
      "Negotiate and network with cultural fluency",
    ],
    entry: [
      "Placement test showing B1 level or above",
      "Ideal for professionals and jobseekers",
    ],
    modules: [
      { title: "Meetings & Negotiation", detail: "Language for leading, agreeing, and persuading." },
      { title: "Presentations", detail: "Structure, storytelling, and delivery." },
      { title: "Business Writing", detail: "Emails, reports, and proposals that get results." },
      { title: "Cross-cultural Communication", detail: "Working effectively across global teams." },
    ],
    methods: [
      "Case studies from real companies",
      "Role-plays and simulations",
      "AI writing assistant for business documents",
    ],
    assessment: [
      "Communication needs analysis",
      "Presentation and negotiation tasks",
      "Portfolio of business writing",
    ],
    faqs: [
      { q: "Can this be delivered at my company?", a: "Yes — see our Corporate Training programme for on-site and custom in-house delivery." },
      { q: "Is it suitable for jobseekers?", a: "Absolutely. We focus on interview skills, LinkedIn, and workplace communication." },
    ],
    testimonial: {
      name: "Nurul A.",
      country: "Malaysia",
      text: "I was promoted to regional manager within a year. The presentation and negotiation modules gave me real confidence.",
      result: "Promoted to Regional Manager",
    },
    keywords: ["Business English Malaysia", "Corporate English Training"],
  },
  {
    slug: "cambridge-english",
    title: "Cambridge English",
    short: "Prepare for globally recognised Cambridge exams with expert guidance.",
    icon: "Award",
    level: "A2 – C2",
    cefr: "A2 – C2",
    duration: "10 – 12 weeks",
    fee: "From RM 1,699 / month",
    schedule: "Termly intakes",
    certification: "Cambridge exam readiness (KET/PET/FCE/CAE)",
    color: "#d6a019",
    category: "Exam",
    fees: {
      rating: "4.9/5",
      reviews: 138,
      studentsTrained: "1,050+ students trained in this course",
      seatsLeft: 12,
      ageRange: "12+",
      classSize: "Max 12",
      delivery: "On-site, Campus, Online",
      location: "Mont Kiara / USJ",
      feeHighlight: "From RM 1,699 / month",
      specs: [
        { label: "CEFR level", value: "A2 – C2" },
        { label: "Duration", value: "10 – 12 weeks" },
        { label: "Exams", value: "KET / PET / FCE / CAE" },
        { label: "Class size", value: "Max 12" },
      ],
    },
    overview:
      "Cambridge English qualifications are lifelong certificates accepted by thousands of universities and employers worldwide. Our courses prepare you for KET, PET, FCE (B2 First), and CAE (C1 Advanced), building deep, durable English proficiency and the specific skills each Cambridge exam rewards.",
    outcomes: [
      "Achieve a permanent, globally recognised qualification",
      "Master the format of your target Cambridge exam",
      "Build balanced skills across all papers",
      "Gain a certificate that never expires",
    ],
    entry: [
      "Placement test to match you to the right exam level",
      "Suitable for all ages from teens to adults",
    ],
    modules: [
      { title: "Reading & Use of English", detail: "Grammar, vocabulary, and comprehension papers." },
      { title: "Writing", detail: "Essays, articles, letters, and reports." },
      { title: "Listening", detail: "Multiple formats and question types." },
      { title: "Speaking", detail: "Paired and interview-style practice." },
    ],
    methods: [
      "Past-paper practice with examiner feedback",
      "Targeted grammar and vocabulary building",
      "Mock speaking exams",
    ],
    assessment: [
      "Level-matching diagnostic",
      "Weekly paper practice",
      "Full mock Cambridge exam",
    ],
    faqs: [
      { q: "Which Cambridge exam is right for me?", a: "After your placement test we recommend KET, PET, FCE, or CAE based on your current level and goals." },
      { q: "Do Cambridge certificates expire?", a: "No — Cambridge English qualifications are valid for life." },
    ],
    testimonial: {
      name: "Sofia P.",
      country: "Italy",
      text: "Passing C1 Advanced opened the door to my dream university. The past-paper drills made all the difference.",
      result: "C1 Advanced — Grade A",
    },
    keywords: ["Cambridge English Malaysia", "English School Malaysia"],
  },
  {
    slug: "kids-english",
    title: "Kids English",
    short: "Fun, interactive and effective English learning for young children.",
    icon: "Sparkles",
    level: "Ages 6 – 12",
    cefr: "Pre-A1 – A2",
    duration: "Ongoing enrolment",
    fee: "From RM 480 / month",
    schedule: "After-school & Weekend",
    certification: "ACE Young Learner Certificate",
    color: "#3ba7ff",
    category: "Young Learners",
    fees: {
      rating: "4.9/5",
      reviews: 214,
      studentsTrained: "1,500+ children trained in this course",
      seatsLeft: 8,
      ageRange: "6 – 12",
      classSize: "Max 10",
      delivery: "On-site / Campus",
      location: "Mont Kiara / USJ",
      feeHighlight: "From RM 480 / month",
      specs: [
        { label: "Ages", value: "6 – 12" },
        { label: "Enrolment", value: "Ongoing" },
        { label: "Class size", value: "Max 10" },
        { label: "Schedule", value: "After-school & Weekend" },
      ],
    },
    overview:
      "Our Kids English programme makes learning joyful. Through games, stories, projects, and songs, young children build strong foundations without pressure. Age-grouped classes, nurturing teachers, and regular parent progress reports keep children motivated and parents informed every step of the way.",
    outcomes: [
      "Build a confident, playful relationship with English",
      "Develop reading, phonics, and speaking foundations",
      "Grow age-appropriate grammar and vocabulary",
      "Prepare for Cambridge Young Learners exams",
    ],
    entry: [
      "Friendly placement chat to find the right class",
      "Age-grouped classes from 6 to 12",
      "Parent orientation session included",
    ],
    modules: [
      { title: "Phonics & Reading", detail: "Systematic phonics for confident reading." },
      { title: "Story & Speaking", detail: "Storytelling and show-and-tell speaking." },
      { title: "Play-based Grammar", detail: "Grammar through games and projects." },
      { title: "Creative Projects", detail: "Posters, drama, and presentations." },
    ],
    methods: [
      "Play-based and project-based learning",
      "Small, age-grouped classes",
      "Regular parent progress reports",
      "Safe, nurturing classroom environment",
    ],
    assessment: [
      "Gentle progress check-ins",
      "Termly skills report for parents",
      "Optional Cambridge Young Learners exam",
    ],
    faqs: [
      { q: "What ages do you teach?", a: "Kids English offers age-grouped classes for children aged 6 to 12. Teenagers aged 13–17 join our dedicated Teen English programme." },
      { q: "How do parents track progress?", a: "Parents receive regular progress reports and can access our parent portal any time." },
    ],
    testimonial: {
      name: "Mrs. Tan",
      country: "Malaysia (Parent)",
      text: "My daughter used to hate English homework. Now she asks to go to class. The teachers are wonderful.",
      result: "Cambridge Movers — Distinction",
    },
    keywords: ["Kids English Malaysia", "English Classes Kuala Lumpur"],
  },
  {
    slug: "teen-english",
    title: "Teen English",
    short: "Confidence-building English for teenagers, from school success to global exams.",
    icon: "Users",
    level: "Ages 13 – 17",
    cefr: "A1 – B2",
    duration: "Ongoing enrolment",
    fee: "From RM 780 / month",
    schedule: "After-school & Weekend",
    certification: "ACE Teen Learner Certificate",
    color: "#3ba7ff",
    category: "Young Learners",
    fees: {
      rating: "4.9/5",
      reviews: 176,
      studentsTrained: "1,200+ teens trained in this course",
      seatsLeft: 9,
      ageRange: "13 – 17",
      classSize: "Max 12",
      delivery: "On-site / Campus",
      location: "Mont Kiara / USJ",
      feeHighlight: "From RM 780 / month",
      specs: [
        { label: "Ages", value: "13 – 17" },
        { label: "Enrolment", value: "Ongoing" },
        { label: "Class size", value: "Max 12" },
        { label: "Schedule", value: "After-school & Weekend" },
      ],
    },
    overview:
      "Teen English is designed for the unique needs of teenagers. We build the academic and everyday English skills they need for school success, international exams, and confident communication — all in an engaging, supportive environment that keeps motivation high. Projects, discussion and real-world tasks make learning relevant to their world.",
    outcomes: [
      "Boost school and academic English performance",
      "Communicate confidently with peers from around the world",
      "Build strong writing, reading and critical-thinking skills",
      "Prepare for Cambridge, IELTS and future study pathways",
    ],
    entry: [
      "Friendly placement test to find the right class",
      "Age-grouped classes from 13 to 17",
      "Parent progress updates included",
    ],
    modules: [
      { title: "Academic English", detail: "Essay writing, note-taking and study skills." },
      { title: "Speaking & Debate", detail: "Discussion, presentation and confidence building." },
      { title: "Grammar & Vocabulary", detail: "Level-appropriate accuracy and range." },
      { title: "Project Work", detail: "Collaborative, real-world English projects." },
    ],
    methods: [
      "Engaging, teen-focused topics and tasks",
      "Small, age-grouped classes",
      "AI practice tools for homework",
      "Regular parent progress reports",
    ],
    assessment: [
      "Placement test at enrolment",
      "Termly skills report",
      "Optional Cambridge / IELTS pathway",
    ],
    faqs: [
      { q: "What ages is Teen English for?", a: "Teen English is for teenagers aged 13 to 17. Younger children join our Kids English programme." },
      { q: "Can it lead to IELTS or Cambridge?", a: "Yes — Teen English builds the foundation and can lead directly into our Cambridge and IELTS preparation courses." },
    ],
    testimonial: {
      name: "Mr. Rahman",
      country: "Malaysia (Parent)",
      text: "My son's confidence and school grades improved dramatically. The teachers really understand teenagers.",
      result: "School English: A",
    },
    keywords: ["Teen English Malaysia", "English Classes Kuala Lumpur"],
  },
  {
    slug: "corporate-training",
    title: "HRDF Corporate English",
    short: "Upskill your workforce with tailored business English training — fully claimable under HRD Corp Malaysia.",
    icon: "Briefcase",
    level: "Tailored",
    cefr: "A1 – C2",
    duration: "Custom (Bootcamp or Term)",
    fee: "Fully HRDF Claimable (Request Quote)",
    schedule: "On Demand",
    certification: "ACE Corporate Training Certificate",
    color: "#2cb67d",
    category: "Professional",
    fees: {
      rating: "4.9/5",
      reviews: 214,
      studentsTrained: "1,250+ students trained in this course",
      seatsLeft: 18,
      ageRange: "18+",
      classSize: "Custom (usually 5–15)",
      delivery: "On-site, Campus, Online",
      location: "On-site / Mont Kiara / USJ",
      feeHighlight: "Fully HRDF Claimable (Request Quote)",
      specs: [
        { label: "Funding", value: "100% SBL-Khas" },
        { label: "Class size", value: "Custom (usually 5–15)" },
        { label: "Delivery", value: "On-site, Campus, Online" },
        { label: "Industry", value: "Fully tailored" },
      ],
    },
    overview:
      "ACE HRDF Corporate English delivers measurable communication gains for organisations. We audit your team's needs, design a bespoke curriculum around your industry and KPIs, and deliver on-site, online, or hybrid. From frontline hospitality English to executive presentation skills, we upskill teams that serve global customers — with programmes fully claimable under HRD Corp (SBL-Khas) for eligible Malaysian employers.",
    outcomes: [
      "Raise team communication to a measurable standard",
      "Improve customer-facing and cross-border confidence",
      "Align training to your industry and KPIs",
      "Receive detailed ROI and progress reporting",
    ],
    entry: [
      "Free organisational needs analysis",
      "Minimum group size and custom scheduling available",
      "HRD Corp claimable options for Malaysian employers",
    ],
    modules: [
      { title: "Needs Audit", detail: "Benchmark current levels and set targets." },
      { title: "Custom Curriculum", detail: "Industry-specific content and scenarios." },
      { title: "Delivery", detail: "On-site, live-online, or blended sessions." },
      { title: "Impact Reporting", detail: "Progress dashboards and ROI reports." },
    ],
    methods: [
      "Bespoke, industry-tailored content",
      "Flexible on-site / online / hybrid delivery",
      "Blended learning with AI tools",
      "Manager dashboards and reporting",
    ],
    assessment: [
      "Pre-training benchmarking",
      "Milestone assessments",
      "Final impact and ROI report",
    ],
    faqs: [
      { q: "Is training HRD Corp claimable?", a: "Yes — for eligible Malaysian employers our corporate programmes can be HRD Corp claimable." },
      { q: "Can you train remote teams?", a: "Absolutely. We deliver live-online and hybrid programmes for distributed teams." },
    ],
    testimonial: {
      name: "L. Kumar",
      country: "Malaysia (HR Director)",
      text: "Our customer satisfaction scores rose after ACE trained our support team. Professional, measurable, worth every ringgit.",
      result: "+18% CSAT after training",
    },
    keywords: ["Corporate English Training", "Business English Malaysia"],
  },
  {
    slug: "pte-preparation",
    title: "PTE Preparation",
    short: "Master the computer-based Pearson PTE Academic with proven strategies.",
    icon: "ClipboardCheck",
    level: "B1 – C2",
    cefr: "B1 – C2",
    duration: "4 – 10 weeks",
    fee: "From RM 2,850 / month",
    schedule: "Weekday & Weekend intakes",
    certification: "ACE PTE Readiness Certificate",
    color: "#3ba7ff",
    category: "Exam",
    fees: {
      rating: "4.8/5",
      reviews: 129,
      studentsTrained: "900+ students trained in this course",
      seatsLeft: 8,
      ageRange: "16+",
      classSize: "Max 12",
      delivery: "On-site, Campus, Online",
      location: "Mont Kiara / USJ",
      feeHighlight: "From RM 2,850 / month",
      specs: [
        { label: "CEFR level", value: "B1 – C2" },
        { label: "Duration", value: "4 – 10 weeks" },
        { label: "Exam centre", value: "Pearson PTE" },
        { label: "Class size", value: "Max 12" },
      ],
    },
    overview:
      "The PTE Academic is a fully computer-based English test accepted by universities and immigration authorities worldwide, prized for its fast results. As a Pearson PTE-recognised centre, ACE trains you in the exact AI-scored task types the test rewards — so you learn to score, not just to speak. Practise on realistic computer-based tasks and walk in on exam day fully prepared.",
    outcomes: [
      "Understand how PTE's AI scoring works — and how to beat it",
      "Master all 20 PTE task types across the four skills",
      "Build speed and accuracy for the integrated tasks",
      "Achieve a competitive score for university or migration",
    ],
    entry: [
      "Placement test showing B1 level or above",
      "Suitable for university and migration applicants",
    ],
    modules: [
      { title: "Speaking & Writing", detail: "Read-aloud, describe image, essay and summary tasks." },
      { title: "Reading", detail: "Multiple-choice, re-order and fill-in-the-blanks." },
      { title: "Listening", detail: "Summarise spoken text, dictation and comprehension." },
      { title: "Full Mock Tests", detail: "Computer-based practice with scored feedback." },
    ],
    methods: [
      "Computer-based practice mirroring the real PTE",
      "AI pronunciation and fluency scoring",
      "Task-type strategy sessions",
    ],
    assessment: [
      "Diagnostic mock at entry",
      "Weekly task-type drills",
      "Full-length scored mock test",
    ],
    faqs: [
      { q: "How fast are PTE results?", a: "PTE Academic results are typically available within 48 hours, much faster than many paper-based tests." },
      { q: "Is PTE accepted for migration?", a: "Yes — PTE Academic is accepted for university admission and by many immigration authorities. Our advisors confirm your target's requirements." },
    ],
    testimonial: {
      name: "Ravi K.",
      country: "India",
      text: "The task-type strategies were gold. I hit my target PTE score on my first attempt after just six weeks.",
      result: "PTE 79+ overall",
    },
    keywords: ["PTE Malaysia", "PTE Preparation Kuala Lumpur"],
  },
  {
    slug: "muet-preparation",
    title: "MUET Preparation",
    short: "Ace the Malaysian University English Test for local university entry.",
    icon: "BookOpen",
    level: "B1 – C1",
    cefr: "B1 – C1",
    duration: "6 – 8 weeks",
    fee: "From RM 2,400 / month",
    schedule: "Weekday & Weekend intakes",
    certification: "ACE MUET Readiness Certificate",
    color: "#d6a019",
    category: "Exam",
    fees: {
      rating: "4.8/5",
      reviews: 112,
      studentsTrained: "800+ students trained in this course",
      seatsLeft: 10,
      ageRange: "16+",
      classSize: "Max 12",
      delivery: "On-site, Campus, Online",
      location: "Mont Kiara / USJ",
      feeHighlight: "From RM 2,400 / month",
      specs: [
        { label: "CEFR level", value: "B1 – C1" },
        { label: "Duration", value: "6 – 8 weeks" },
        { label: "Bands", value: "Band 1 – 5+" },
        { label: "Class size", value: "Max 12" },
      ],
    },
    overview:
      "MUET (the Malaysian University English Test) is required for entry to public universities and many programmes in Malaysia. Our MUET Preparation course builds the listening, speaking, reading and writing skills the test measures, with plenty of past-paper practice and band-focused feedback so you reach the band your course demands.",
    outcomes: [
      "Understand the MUET format and band descriptors",
      "Improve your MUET band across all four papers",
      "Master reading and writing under timed conditions",
      "Build confident, structured speaking responses",
    ],
    entry: [
      "Placement test showing B1 level or above",
      "Ideal for local university applicants",
    ],
    modules: [
      { title: "Listening", detail: "Comprehension and note-taking strategies." },
      { title: "Speaking", detail: "Individual and group discussion practice." },
      { title: "Reading", detail: "Academic texts and question techniques." },
      { title: "Writing", detail: "Report and extended essay writing." },
    ],
    methods: [
      "Past-paper practice with band feedback",
      "Speaking simulations",
      "Targeted skills workshops",
    ],
    assessment: [
      "Diagnostic MUET mock at entry",
      "Weekly paper practice",
      "Full mock MUET with band report",
    ],
    faqs: [
      { q: "What MUET band do I need?", a: "Requirements vary by university and programme, commonly Band 3 to Band 4.5+. Our advisors help you target the right band." },
      { q: "How often is MUET held?", a: "MUET is offered several times a year. We help you plan your preparation around the official test dates." },
    ],
    testimonial: {
      name: "Nur Farah",
      country: "Malaysia",
      text: "I jumped from Band 3 to Band 4.5 and secured my university place. The writing feedback was incredibly helpful.",
      result: "MUET Band 3 → 4.5",
    },
    keywords: ["MUET Malaysia", "MUET Preparation Kuala Lumpur"],
  },
  {
    slug: "one-to-one-english",
    title: "One-to-One English",
    short: "Private, fully personalised English lessons built entirely around you.",
    icon: "UserRound",
    level: "All Levels",
    cefr: "A1 – C2",
    duration: "Packages of 10–50 hours",
    fee: "From RM 120 / hour",
    schedule: "Flexible — you choose",
    certification: "ACE Personalised Learning Certificate",
    color: "#091b63",
    category: "General",
    fees: {
      rating: "5.0/5",
      reviews: 96,
      studentsTrained: "600+ students trained in this course",
      seatsLeft: 6,
      ageRange: "All ages",
      classSize: "1-to-1 private",
      delivery: "On-site, Campus, Online",
      location: "Mont Kiara / USJ / Online",
      feeHighlight: "From RM 120 / hour",
      specs: [
        { label: "Format", value: "1-to-1 private" },
        { label: "Packages", value: "10 – 50 hours" },
        { label: "Schedule", value: "Fully flexible" },
        { label: "Delivery", value: "On-site or Online" },
      ],
    },
    overview:
      "One-to-One English is the fastest, most flexible way to progress. Every lesson is built entirely around your goals, level and schedule, with a dedicated tutor who focuses 100% on you. Ideal for busy professionals, exam candidates on a deadline, or anyone who wants targeted results — choose a package of 10 to 50 hours and learn on your terms.",
    outcomes: [
      "Progress faster with fully personalised lessons",
      "Focus on exactly the skills you need most",
      "Learn on a schedule that fits your life",
      "Get undivided attention from a dedicated tutor",
    ],
    entry: [
      "Free consultation to define your goals",
      "Open to all levels and all ages",
      "Flexible packages from 10 to 50 hours",
    ],
    modules: [
      { title: "Goal Setting", detail: "We build your plan around your exact objectives." },
      { title: "Targeted Skills", detail: "Speaking, writing, exam prep — your choice." },
      { title: "Flexible Scheduling", detail: "Book sessions to suit your calendar." },
      { title: "Progress Reviews", detail: "Regular check-ins to keep you on track." },
    ],
    methods: [
      "Fully personalised curriculum",
      "One dedicated expert tutor",
      "AI practice tools between sessions",
      "Flexible on-site or online delivery",
    ],
    assessment: [
      "Initial needs analysis",
      "Ongoing session feedback",
      "Progress review at package milestones",
    ],
    faqs: [
      { q: "Can I choose my lesson times?", a: "Yes — One-to-One lessons are fully flexible. You book sessions to fit your own schedule, on-site or online." },
      { q: "What package sizes are available?", a: "You can choose packages from 10 up to 50 hours, at RM 120 per hour, with volume options available." },
    ],
    testimonial: {
      name: "Yuki S.",
      country: "Japan",
      text: "As a busy professional, private lessons were perfect. My tutor tailored everything to my work needs. Huge progress in weeks.",
      result: "B1 → B2 in 30 hours",
    },
    keywords: ["Private English lessons Malaysia", "One-to-one English Kuala Lumpur"],
  },
  {
    slug: "online-english",
    title: "Online English",
    short: "Learn English live online from anywhere, with the full ACE experience.",
    icon: "Globe2",
    level: "All Levels",
    cefr: "A1 – C2",
    duration: "1 – 12 months",
    fee: "From RM 1,200 / month",
    schedule: "Flexible time zones",
    certification: "ACE Online Certificate of Achievement",
    color: "#3ba7ff",
    category: "General",
    fees: {
      rating: "4.8/5",
      reviews: 154,
      studentsTrained: "1,300+ students trained in this course",
      seatsLeft: 15,
      ageRange: "16+",
      classSize: "Max 12",
      delivery: "Live online",
      location: "Anywhere in the world",
      feeHighlight: "From RM 1,200 / month",
      specs: [
        { label: "CEFR level", value: "A1 – C2" },
        { label: "Duration", value: "1 – 12 months" },
        { label: "Delivery", value: "Live online" },
        { label: "Class size", value: "Max 12" },
      ],
    },
    overview:
      "Online English brings the full ACE classroom to you, wherever you are. Join live, interactive lessons led by our certified teachers, collaborate with a global community of learners, and use our AI tools for daily practice between classes. Flexible time zones and rolling start dates make it easy to fit world-class English learning around your life.",
    outcomes: [
      "Progress across all four skills in live, interactive classes",
      "Learn from anywhere with no travel required",
      "Practise daily with ACE AI learning tools",
      "Earn the same CEFR-aligned certificate as on-campus students",
    ],
    entry: [
      "Free online placement test",
      "A stable internet connection and a device",
      "Open to learners worldwide aged 16+",
    ],
    modules: [
      { title: "Live Speaking Classes", detail: "Interactive video lessons with real practice." },
      { title: "Digital Resources", detail: "Full access to our online learning platform." },
      { title: "AI Practice", detail: "Speaking, writing and grammar tools 24/7." },
      { title: "Progress Tracking", detail: "Dashboards that show your growth." },
    ],
    methods: [
      "Live, teacher-led online classes",
      "Blended learning with AI tools",
      "Global peer collaboration",
      "Flexible scheduling across time zones",
    ],
    assessment: [
      "Online placement test",
      "Weekly progress quizzes",
      "End-of-level CEFR assessment",
    ],
    faqs: [
      { q: "Are classes live or recorded?", a: "Classes are live and interactive with a real teacher. Recordings and resources are available afterwards for revision." },
      { q: "Can I join from outside Malaysia?", a: "Yes — Online English is open to learners worldwide, with flexible scheduling to suit different time zones." },
    ],
    testimonial: {
      name: "Camila R.",
      country: "Colombia",
      text: "I studied with ACE from home and it felt just like a real classroom. The teachers and AI tools kept me progressing.",
      result: "A2 → B1 online",
    },
    keywords: ["Online English course Malaysia", "Learn English online"],
  },
  {
    slug: "summer-winter-camp",
    title: "English Summer & Winter Camp",
    short: "1–4 week English camps for ages 6–17: daily classes plus adventures around Malaysia.",
    icon: "Sparkles",
    level: "Ages 6 – 17",
    cefr: "Pre-A1 – B2",
    duration: "1 – 4 weeks (your choice)",
    fee: "From RM 700 / week (+ RM 200 registration)",
    schedule: "Summer Jun–Aug · Winter Dec–Feb",
    certification: "ACE Camp Completion Certificate",
    color: "#2cb67d",
    category: "Young Learners",
    fees: {
      rating: "4.7/5",
      reviews: 183,
      studentsTrained: "1,350+ students trained in this course",
      seatsLeft: 8,
      ageRange: "6 – 17",
      classSize: "Max 12",
      delivery: "On-site + excursions",
      location: "Mont Kiara + KL excursions",
      feeHighlight: "From RM 700 / week (+ RM 200 registration)",
      specs: [
        { label: "Ages", value: "6 – 17" },
        { label: "Length", value: "1 – 4 weeks" },
        { label: "Seasons", value: "Jun–Aug / Dec–Feb" },
        { label: "One-time reg.", value: "RM 200" },
      ],
    },
    overview:
      "Our English Summer & Winter Camps combine morning English classes with unforgettable afternoon adventures across Malaysia. Designed for ages 6 to 17, camps blend fun, friendship and real language practice — from museum visits and cultural activities to city excursions. Choose 1 to 4 weeks and give your child a language boost and a summer (or winter) to remember.",
    outcomes: [
      "Boost English confidence through immersive daily use",
      "Make friends with young learners from around the world",
      "Experience Malaysian culture through guided excursions",
      "Return home with new skills and lasting memories",
    ],
    entry: [
      "Open to children and teens aged 6 to 17",
      "Friendly level check on arrival",
      "One-time registration fee of RM 200",
    ],
    modules: [
      { title: "Morning English Classes", detail: "Communicative, theme-based daily lessons." },
      { title: "Afternoon Adventures", detail: "Guided excursions and cultural activities." },
      { title: "Project Work", detail: "Fun group projects and presentations." },
      { title: "Camp Community", detail: "Friendship-building games and events." },
    ],
    methods: [
      "Immersive, activity-based learning",
      "Small, age-grouped groups (max 12)",
      "Qualified teachers and camp leaders",
      "Safe, supervised excursions",
    ],
    assessment: [
      "Arrival level check",
      "Daily participation and projects",
      "End-of-camp showcase and certificate",
    ],
    faqs: [
      { q: "When do the camps run?", a: "Summer camps run June to August and winter camps run December to February. You can choose from 1 to 4 weeks." },
      { q: "Is supervision provided on excursions?", a: "Yes — all activities and excursions are fully supervised by qualified ACE teachers and camp leaders." },
    ],
    testimonial: {
      name: "The Kim Family",
      country: "South Korea",
      text: "Our two children loved every day. English improved, and the trips around KL made it a holiday to remember.",
      result: "2-week Summer Camp",
    },
    keywords: ["English camp Malaysia", "Summer English camp Kuala Lumpur"],
  },
  {
    slug: "ladies-only-english",
    title: "Ladies-Only English",
    short: "A comfortable, supportive English programme in a women-only classroom.",
    icon: "Users",
    level: "All Levels",
    cefr: "A1 – C2",
    duration: "1 – 12 months",
    fee: "From RM 1,250 / month",
    schedule: "Daytime & Weekend",
    certification: "ACE Certificate of Achievement (CEFR-aligned)",
    color: "#d6a019",
    category: "General",
    fees: {
      rating: "5.0/5",
      reviews: 108,
      studentsTrained: "700+ students trained in this course",
      seatsLeft: 10,
      ageRange: "17+",
      classSize: "Max 12",
      delivery: "On-site / Campus",
      location: "Mont Kiara / USJ",
      feeHighlight: "From RM 1,250 / month",
      specs: [
        { label: "CEFR level", value: "A1 – C2" },
        { label: "Duration", value: "1 – 12 months" },
        { label: "Classroom", value: "Women-only" },
        { label: "Class size", value: "Max 12" },
      ],
    },
    overview:
      "Ladies-Only English offers all the quality of our General English programme in a comfortable, supportive, women-only environment. With female teachers and a welcoming classroom, many learners find they speak up more, progress faster and enjoy the experience even more. The full CEFR-aligned curriculum builds real fluency across speaking, listening, reading and writing.",
    outcomes: [
      "Build confidence in a supportive, women-only setting",
      "Progress across all four language skills",
      "Expand everyday and academic vocabulary",
      "Advance a full CEFR level per term with regular study",
    ],
    entry: [
      "Free ACE placement test",
      "Open to women aged 17 and above",
      "No prior certificate required for beginners",
    ],
    modules: [
      { title: "Speaking & Confidence", detail: "Daily discussion in a comfortable setting." },
      { title: "Listening Skills", detail: "Authentic audio and comprehension." },
      { title: "Reading & Vocabulary", detail: "Graded reading and vocabulary systems." },
      { title: "Writing Workshop", detail: "From sentences to full essays." },
    ],
    methods: [
      "Communicative Language Teaching (CLT)",
      "Female teachers and women-only classes",
      "AI practice tools for homework",
      "Supportive, encouraging environment",
    ],
    assessment: [
      "Placement test at enrolment",
      "Weekly progress quizzes",
      "End-of-level CEFR examination",
    ],
    faqs: [
      { q: "Are the teachers female?", a: "Yes — Ladies-Only English classes are taught by female teachers in a dedicated women-only classroom." },
      { q: "Is the curriculum the same as General English?", a: "Yes — you follow the same CEFR-aligned curriculum and earn the same certificate, in a women-only environment." },
    ],
    testimonial: {
      name: "Sara A.",
      country: "Saudi Arabia",
      text: "The women-only class made me feel so comfortable. I finally found the confidence to speak, and my English took off.",
      result: "A1 → B1 in 5 months",
    },
    keywords: ["Ladies only English Malaysia", "Women English classes Kuala Lumpur"],
  },
];

export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);

export function resolveFees(c: Course): CourseFees {
  const f = c.fees ?? {};
  const classSize = f.classSize ?? "Max 12";
  const delivery = f.delivery ?? "On-site, Campus, Online";
  return {
    rating: f.rating ?? "4.9/5",
    reviews: f.reviews ?? 180,
    studentsTrained: f.studentsTrained ?? "1,000+ students trained in this course",
    seatsLeft: f.seatsLeft ?? 12,
    ageRange: f.ageRange ?? "17+",
    classSize,
    delivery,
    location: f.location ?? "Mont Kiara / USJ",
    feeHighlight: f.feeHighlight ?? c.fee,
    specs:
      f.specs ?? [
        { label: "Level", value: c.cefr },
        { label: "Duration", value: c.duration },
        { label: "Class size", value: classSize },
        { label: "Delivery", value: delivery },
      ],
  };
}

// Additional course-specific FAQs to ensure every course page shows at least 5.
const extraFaqs: Record<string, { q: string; a: string }[]> = {
  "general-english": [
    { q: "What are the class sizes?", a: "Classes are small — a maximum of 12 students — so you get plenty of speaking time and individual attention." },
    { q: "Do I need to buy materials?", a: "Core digital materials and access to our AI learning tools are included. Any printed coursebooks are affordable and available on campus." },
  ],
  "intensive-english": [
    { q: "Is AIEP suitable for a student visa?", a: "Yes — the Intensive English Programme (AIEP) is our student-pass eligible programme (ages 18–35). Our team manages your EMGS application end to end." },
    { q: "What are the class sizes?", a: "AIEP classes are capped at 12 students to keep the immersion effective and personal." },
    { q: "How soon can I start?", a: "AIEP runs on fixed intakes with 8 weeks per level. Contact us for the next available start date and visa timeline." },
  ],
  "ielts-preparation": [
    { q: "Do you offer computer or paper-based IELTS prep?", a: "We prepare you for both formats and, as an IELTS-linked centre, help you register for the version that suits you best." },
    { q: "What are the class sizes?", a: "IELTS classes are small (max 12) so you receive detailed, individual feedback on writing and speaking." },
  ],
  "toefl-preparation": [
    { q: "How long should I prepare for TOEFL?", a: "Most students prepare for 8–12 weeks depending on their starting level and target score." },
    { q: "Do you provide mock iBT exams?", a: "Yes — you sit full-length, computer-based mock exams that mirror the real TOEFL iBT, with scored feedback." },
    { q: "What are the class sizes?", a: "TOEFL classes are capped at 12 students for focused, personalised coaching." },
  ],
  "business-english": [
    { q: "Is this course suitable for my industry?", a: "Yes — content is drawn from real scenarios across finance, tech, hospitality and trade, and can be tailored to your field." },
    { q: "Do you offer evening or weekend classes?", a: "Yes — Business English is available in evening and weekend slots to fit around work." },
    { q: "What are the class sizes?", a: "Classes are small (max 12), and one-to-one options are available for busy professionals." },
  ],
  "cambridge-english": [
    { q: "Are you a Cambridge preparation centre?", a: "Yes — ACE is a recognised Cambridge English preparation centre and we guide you to the right exam and registration." },
    { q: "What are the class sizes?", a: "Cambridge classes are capped at 12 students for effective exam coaching." },
    { q: "How long is the course?", a: "Most Cambridge courses run 10–12 weeks, aligned to the exam session you are targeting." },
  ],
  "kids-english": [
    { q: "How much does Kids English cost?", a: "Kids English starts from RM 480 per month, with ongoing enrolment so your child can join any time." },
    { q: "Are the classes safe and supervised?", a: "Absolutely — classes are small (max 10), taught by specialist young-learner teachers in a safe, nurturing environment." },
    { q: "Can my child sit Cambridge Young Learners exams?", a: "Yes — we prepare children for Cambridge Young Learners (Starters, Movers, Flyers) as an optional pathway." },
  ],
  "teen-english": [
    { q: "How much does Teen English cost?", a: "Teen English starts from RM 780 per month, with ongoing enrolment throughout the year." },
    { q: "Will it help with school exams?", a: "Yes — Teen English strengthens academic English and school performance alongside general fluency." },
    { q: "What are the class sizes?", a: "Teen classes are capped at 12 students, grouped by age and level." },
  ],
  "corporate-training": [
    { q: "How do we get a quote?", a: "Request a quote and we'll run a free needs analysis, then design a bespoke, fully HRDF-claimable proposal for your team." },
    { q: "What is the typical group size?", a: "Corporate groups are usually 5–15 participants, but we tailor this to your organisation." },
    { q: "Which industries do you work with?", a: "We deliver fully tailored programmes across hospitality, finance, tech, manufacturing, healthcare and more." },
  ],
  "pte-preparation": [
    { q: "Are you a Pearson PTE centre?", a: "Yes — ACE is a recognised Pearson PTE preparation centre, so you train exactly for the AI-scored test format." },
    { q: "How long is the course?", a: "PTE preparation typically runs 4–10 weeks depending on your starting level and target score." },
    { q: "What are the class sizes?", a: "PTE classes are small (max 12) for focused, computer-based practice." },
  ],
  "muet-preparation": [
    { q: "How much does MUET preparation cost?", a: "MUET preparation starts from RM 2,400 per month, with weekday and weekend intakes available." },
    { q: "What are the class sizes?", a: "MUET classes are capped at 12 students so you get detailed feedback on every paper." },
    { q: "Do you provide a full mock MUET?", a: "Yes — you sit a full mock MUET with an individual band report so you know exactly where you stand." },
  ],
  "one-to-one-english": [
    { q: "Can lessons be online?", a: "Yes — One-to-One English is available on campus or fully online, whichever suits you best." },
    { q: "How much does it cost?", a: "One-to-One English is from RM 120 per hour, with packages of 10 to 50 hours available." },
    { q: "Can I focus only on exam prep?", a: "Absolutely — private lessons can focus entirely on IELTS, TOEFL, PTE, business English or any goal you choose." },
  ],
  "online-english": [
    { q: "How much does Online English cost?", a: "Online English starts from RM 1,200 per month, with flexible durations from 1 to 12 months." },
    { q: "What technology do I need?", a: "Just a stable internet connection and a device with a camera and microphone. We provide the platform and materials." },
    { q: "Do I get a certificate?", a: "Yes — online students earn the same CEFR-aligned Certificate of Achievement as on-campus students." },
  ],
  "summer-winter-camp": [
    { q: "How much does the camp cost?", a: "Camps start from RM 700 per week, plus a one-time registration fee of RM 200. Choose from 1 to 4 weeks." },
    { q: "What ages can join?", a: "Our Summer & Winter Camps are for children and teens aged 6 to 17, grouped by age." },
    { q: "Are meals and transport included?", a: "Supervised excursions are included in the programme. Contact us for details on meals, transport and optional add-ons." },
  ],
  "ladies-only-english": [
    { q: "How much does Ladies-Only English cost?", a: "Ladies-Only English starts from RM 1,250 per month, with durations from 1 to 12 months." },
    { q: "What levels are available?", a: "All levels from complete beginner (A1) to advanced (C2) are available in the women-only programme." },
    { q: "What are the class sizes?", a: "Classes are small (max 12), taught by female teachers in a comfortable, women-only classroom." },
  ],
};

export function getCourseFaqs(course: Course): { q: string; a: string }[] {
  const extra = extraFaqs[course.slug] ?? [];
  const combined = [...course.faqs];
  for (const f of extra) {
    if (combined.length >= 5) break;
    if (!combined.some((c) => c.q === f.q)) combined.push(f);
  }
  return combined.slice(0, Math.max(5, combined.length));
}
