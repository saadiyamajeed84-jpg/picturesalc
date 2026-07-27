export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: number;
  author: string;
  body?: string[];
  takeaways?: string[];
};

const slugify = (t: string) =>
  t
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

// 100+ SEO-ready article ideas grouped by category.
const ideas: Record<string, string[]> = {
  "IELTS & TOEFL": [
    "How to Score IELTS 7.0 in 3 Months: A Realistic Study Plan",
    "IELTS vs TOEFL: Which English Test Is Right for You?",
    "10 IELTS Writing Task 2 Mistakes That Cost You Band Points",
    "The Complete IELTS Speaking Part 2 Cue Card Strategy",
    "How the IELTS Listening Section Is Marked (and How to Beat It)",
    "TOEFL iBT Integrated Writing: A Step-by-Step Template",
    "Academic vs General Training IELTS: Choosing the Right Module",
    "How to Register for IELTS in Malaysia: A Complete Guide",
    "IELTS Band 8 Vocabulary You Can Actually Use",
    "5 Time-Management Hacks for the IELTS Reading Test",
    "TOEFL Speaking: How to Structure a Perfect 30-Second Response",
    "What Is a Good IELTS Score for UK, US and Australian Universities?",
  ],
  "Study in Malaysia": [
    "Why Study English in Kuala Lumpur? 7 Reasons International Students Love KL",
    "Student Visa for Malaysia: The Complete 2026 Guide",
    "Cost of Living for International Students in Kuala Lumpur",
    "Best Neighbourhoods for Students in KL: Mont Kiara vs Subang Jaya",
    "How to Open a Bank Account as an International Student in Malaysia",
    "Halal Food Guide for Muslim Students in Kuala Lumpur",
    "Getting Around KL: Public Transport Tips for Students",
    "University Pathway Programmes After English Study in Malaysia",
    "Malaysia vs Singapore for Studying English: An Honest Comparison",
    "What to Pack Before Moving to Malaysia to Study English",
    "Airport Pickup and First Week Survival Guide in KL",
    "Working Part-Time on a Student Pass in Malaysia: The Rules",
  ],
  "Learning Tips": [
    "How to Think in English (and Stop Translating in Your Head)",
    "The 30-Minute Daily Routine That Builds Real Fluency",
    "How to Learn 50 New English Words a Week and Remember Them",
    "Shadowing: The Speaking Technique Native Speakers Recommend",
    "How to Improve Your English Pronunciation at Home",
    "The Best Way to Learn English Grammar Without Boring Drills",
    "How Many Hours Does It Take to Become Fluent in English?",
    "Overcoming the Fear of Speaking English in Public",
    "How to Use Netflix and YouTube to Improve Your English",
    "Reading for Fluency: How to Choose the Right English Books",
    "Journaling in English: A Simple Habit That Transforms Writing",
    "How to Keep Learning English After Your Course Ends",
  ],
  "Business English": [
    "10 Email Phrases That Make You Sound More Professional in English",
    "How to Lead a Meeting in English with Confidence",
    "Business English Small Talk: What to Say and What to Avoid",
    "How to Give a Presentation in English That People Remember",
    "Negotiation English: Phrases for Getting to Yes",
    "Writing a Professional English Report: Structure and Tone",
    "How to Ace an English Job Interview in Malaysia",
    "Cross-Cultural Communication Tips for the Global Workplace",
    "LinkedIn in English: Writing a Profile That Gets Noticed",
    "The Most Common Business English Idioms Explained",
  ],
  "AI & EdTech": [
    "How AI Is Changing the Way We Learn English in 2026",
    "5 Ways an AI Speaking Coach Beats Studying Alone",
    "Can AI Really Correct Your English Grammar? What to Trust",
    "Using an AI Writing Assistant to Improve Your IELTS Essays",
    "How ACE Uses AI to Personalise Every Student's Learning Path",
    "AI Pronunciation Coaching: How It Works and Why It Helps",
    "The Best Free AI Tools to Practise English Conversation",
    "AI Placement Tests: How We Find Your Exact English Level",
  ],
  "Grammar & Vocabulary": [
    "Present Perfect vs Past Simple: The Clearest Explanation Ever",
    "50 Phrasal Verbs Every English Learner Should Know",
    "A vs An vs The: Mastering English Articles Once and for All",
    "Confusing Word Pairs: Affect vs Effect, Its vs It's, and More",
    "How to Use English Conditionals (Zero to Third) Correctly",
    "The Difference Between Make and Do in English",
    "Collocations: The Secret to Sounding Natural in English",
    "Reported Speech in English Made Simple",
    "Prepositions of Time and Place: A Quick Reference Guide",
    "Idioms About Success to Power Up Your Speaking",
  ],
  "Exam & Career": [
    "How English Fluency Boosts Your Salary and Career Prospects",
    "Cambridge English Certificates Explained: KET, PET, FCE, CAE",
    "How to Write an English CV That Gets Interviews",
    "English for Aviation, Hospitality and Healthcare Careers",
    "Scholarships for International Students in Malaysia",
    "How to Choose the Right English Course for Your Goals",
    "From B1 to C1: A Roadmap to Advanced English",
    "Study Planner: How to Balance English Class and Self-Study",
  ],
  "Young Learners": [
    "How to Motivate Your Child to Learn English at Home",
    "The Best Age to Start Learning English (Backed by Research)",
    "Fun English Games for Kids That Actually Teach",
    "Phonics Explained: How Children Learn to Read English",
    "Screen Time and Language Learning: Finding the Balance",
    "How to Support a Bilingual Child Without Overwhelm",
    "English Bedtime Stories: Why Reading Aloud Works Wonders",
    "Preparing Your Child for Cambridge Young Learners Exams",
  ],
  "Student Life": [
    "How to Make Friends from 100+ Countries at Language School",
    "Managing Homesickness While Studying Abroad",
    "Budgeting Tips for International Students in Malaysia",
    "Best Study Cafes and Libraries in Kuala Lumpur",
    "Weekend Trips from KL Every Student Should Take",
    "Staying Healthy and Balanced While Studying Full-Time",
    "How to Build an English-Speaking Social Life Fast",
    "Celebrating Festivals in Multicultural Malaysia",
  ],
  "Speaking & Listening": [
    "How to Understand Fast English Speakers and Native Accents",
    "Small Talk Starters for Confident English Conversations",
    "How to Improve Your English Listening in 20 Minutes a Day",
    "Reducing Your Accent vs Speaking Clearly: What Matters More",
    "How to Sound More Fluent Using Linking Words",
    "The Art of Active Listening in English Conversations",
    "Podcasts to Improve Your English Listening Skills",
    "How to Handle Misunderstandings When Speaking English",
  ],
  "Writing Skills": [
    "How to Write a Clear Paragraph in English: The PEEL Method",
    "Formal vs Informal English Writing: Knowing the Difference",
    "How to Improve Your English Essay Structure",
    "Punctuation Rules Every English Writer Should Master",
    "How to Proofread Your Own English Writing Effectively",
    "Transition Words That Make Your Writing Flow",
    "How to Write a Persuasive Argument in English",
    "Common Spelling Mistakes English Learners Make",
  ],
};

const featured: BlogPost[] = [
  {
    slug: "how-to-score-ielts-7-0-in-3-months-a-realistic-study-plan",
    title: "How to Score IELTS 7.0 in 3 Months: A Realistic Study Plan",
    category: "IELTS & TOEFL",
    excerpt:
      "A band 7.0 is achievable in 90 days with the right structure. Here is the exact week-by-week plan our top IELTS students follow.",
    date: "2026-01-14",
    readTime: 9,
    author: "Sarah Mitchell, IELTS Lead Trainer",
    takeaways: [
      "Diagnose your starting band before you build a plan",
      "Balance all four skills — but invest most in your two weakest",
      "Do at least two full, timed mock exams before test day",
      "Track band-descriptor feedback, not just raw scores",
    ],
    body: [
      "Scoring IELTS 7.0 means demonstrating consistent, accurate and fluent English across listening, reading, writing and speaking. Three months is enough time — but only if you train deliberately. The most common mistake is practising randomly instead of following a plan that targets your weakest skills first.",
      "Weeks 1–2: Diagnose and set your baseline. Sit a full mock exam under timed conditions and get it marked against the official band descriptors. This tells you exactly where your 0.5–1.5 band gap is. Most learners discover writing and speaking are their limiting factors, because those sections reward range and accuracy that take time to build.",
      "Weeks 3–6: Build core skills. Dedicate your daily study to the two lowest-scoring sections while maintaining the others. For writing, learn the Task 1 and Task 2 structures cold and write three essays a week with feedback. For speaking, record yourself answering Part 2 cue cards and use an AI speaking coach to spot pronunciation and fluency issues.",
      "Weeks 7–10: Add exam strategy. Now layer in time management and question-type techniques. In reading, practise skimming and scanning so you finish with time to check. In listening, train prediction and note-taking. Sit weekly section tests and log every mistake into an error journal you review each weekend.",
      "Weeks 11–12: Simulate and refine. Do two full, timed mock exams in exam-like conditions. Review each with a trainer, then focus your final days on confidence, sleep and logistics rather than cramming. Walk in rested — a calm mind reads and writes far better than an anxious one.",
      "At ACE Language Centre, our IELTS Preparation course compresses this journey with examiner-led feedback, AI writing analysis and realistic mock exams. Most students improve 0.5–1.5 bands, and many reach 7.0 or higher within a single term.",
    ],
  },
  {
    slug: "why-study-english-in-kuala-lumpur-7-reasons-international-students-love-kl",
    title: "Why Study English in Kuala Lumpur? 7 Reasons International Students Love KL",
    category: "Study in Malaysia",
    excerpt:
      "From affordability to world-class teachers and an English-friendly, multicultural city — here's why KL is a top destination to learn English.",
    date: "2026-01-08",
    readTime: 7,
    author: "David Ong, Student Services Director",
    takeaways: [
      "Kuala Lumpur offers premium English education at a fraction of Western costs",
      "Malaysia is safe, multicultural and highly English-friendly",
      "Strong university pathways make KL a smart study base",
    ],
    body: [
      "Kuala Lumpur has quietly become one of the best places in the world to learn English. It combines high teaching standards, genuine affordability and a welcoming multicultural culture that helps international students settle in fast. Here are seven reasons students from over 100 countries choose KL.",
      "1. Outstanding value. Tuition and living costs in Malaysia are a fraction of what you would pay in the UK, US or Australia — without compromising on quality. Your budget stretches further, letting you study longer and progress more.",
      "2. English is everywhere. Malaysia is one of Asia's most English-friendly countries. Signage, services and daily life are conducted in English, so you practise constantly outside the classroom.",
      "3. A truly multicultural home. With Malay, Chinese, Indian and international communities living side by side, KL is welcoming and diverse. You will make friends from every continent.",
      "4. Safe and modern. KL is a safe, well-connected metropolis with excellent healthcare, transport and infrastructure — reassuring for students and parents alike.",
      "5. Expert, certified teachers. ACE's international faculty brings experience from around the world, delivering communicative, results-focused lessons.",
      "6. A gateway to global universities. Malaysia hosts branch campuses of leading universities and strong pathway programmes, so your English study can lead directly into a degree.",
      "7. An unbeatable lifestyle. From street food to island getaways, studying in Malaysia is an adventure. Learn English by day and explore Southeast Asia on weekends.",
    ],
  },
  {
    slug: "how-ai-is-changing-the-way-we-learn-english-in-2026",
    title: "How AI Is Changing the Way We Learn English in 2026",
    category: "AI & EdTech",
    excerpt:
      "AI tutors, speaking coaches and instant feedback are transforming language learning. Here's how to use them well — and where human teachers still win.",
    date: "2026-01-02",
    readTime: 8,
    author: "Dr. Priya Raman, Head of Learning Innovation",
    takeaways: [
      "AI gives you unlimited, judgement-free speaking practice",
      "Instant feedback accelerates writing and pronunciation gains",
      "The best results come from blending AI tools with human teaching",
    ],
    body: [
      "Artificial intelligence has changed English learning more in two years than the previous two decades. Today, learners have access to tools that were unimaginable in a traditional classroom: on-demand conversation partners, instant essay feedback, and pronunciation coaches that hear every syllable.",
      "The biggest breakthrough is practice volume. Speaking is the skill most learners under-practise, usually because they feel self-conscious. An AI speaking coach removes that barrier entirely — you can practise a job interview or an IELTS Part 2 answer as many times as you like, with no judgement and instant, specific feedback.",
      "Writing has also been transformed. AI writing assistants can flag grammar, suggest stronger vocabulary and even predict an approximate IELTS band, helping you see exactly what separates a 6.5 essay from a 7.5 one. Used well, this shortens the feedback loop from days to seconds.",
      "But AI has limits. It cannot fully replicate the motivation, cultural insight and accountability of a great teacher. The strongest results come from a blended approach: humans set direction, build confidence and teach strategy, while AI provides the endless, patient practice in between.",
      "That is exactly how ACE Language Centre designs learning. Our AI tools — tutor, speaking coach, writing assistant, grammar checker and pronunciation coach — extend the classroom, while our expert teachers keep you motivated and on track. Technology plus humanity is the winning formula.",
    ],
  },
  {
    slug: "how-to-think-in-english-and-stop-translating-in-your-head",
    title: "How to Think in English (and Stop Translating in Your Head)",
    category: "Learning Tips",
    excerpt:
      "Translating from your first language slows you down and breaks fluency. Here are practical techniques to start thinking directly in English.",
    date: "2025-12-20",
    readTime: 6,
    author: "Sarah Mitchell, IELTS Lead Trainer",
    takeaways: [
      "Translation creates a fluency bottleneck — bypass it deliberately",
      "Label your surroundings and narrate your day in English",
      "Learn chunks and collocations, not isolated words",
    ],
    body: [
      "If you pause to translate every sentence before you speak, English will always feel slow and effortful. Fluency comes when you think directly in the language. The good news: this is a trainable habit, not a talent.",
      "Start small by narrating your daily routine silently in English — 'I'm making coffee, now I'm checking my phone.' This builds the automatic link between everyday actions and English words without the pressure of a conversation.",
      "Label your environment. Put English words to the objects around you and describe them with full sentences. The more your brain associates the world directly with English, the less it reaches for translation.",
      "Learn in chunks. Native speakers don't build sentences word by word; they use ready-made phrases and collocations like 'make a decision' or 'to be honest'. Collecting and reusing chunks lets you speak in fluent blocks rather than translating piece by piece.",
      "Finally, immerse and be patient. Surround yourself with English input, accept that early attempts will be imperfect, and keep going. With daily practice — the kind built into every ACE course — thinking in English becomes second nature.",
    ],
  },
  {
    slug: "10-email-phrases-that-make-you-sound-more-professional-in-english",
    title: "10 Email Phrases That Make You Sound More Professional in English",
    category: "Business English",
    excerpt:
      "Small wording changes make a big impression. Master these professional email phrases to communicate with polish and clarity.",
    date: "2025-12-12",
    readTime: 5,
    author: "James Carter, Business English Specialist",
    takeaways: [
      "Openers and closers set the tone of a professional email",
      "Polite, direct phrasing gets faster responses",
      "Clarity beats complexity in business writing",
    ],
    body: [
      "In business, your email is often your first impression. The right phrasing signals professionalism, respect and clarity — qualities that build trust across cultures. Here are ten phrases to elevate your business English immediately.",
      "For openers, replace 'I want to' with 'I am writing to' — as in 'I am writing to follow up on our meeting.' To reference earlier contact, use 'Further to our conversation' or 'As discussed'.",
      "When making requests, 'Could you please' and 'I would appreciate it if you could' are polite yet clear. To attach documents, 'Please find attached' remains the professional standard.",
      "For deadlines, 'At your earliest convenience' is softer than 'as soon as possible', while 'by end of business Friday' is precise and professional. To confirm, use 'I confirm that' or 'This is to confirm'.",
      "Finally, close well. 'Please don't hesitate to contact me' invites follow-up, and 'Thank you for your time and consideration' ends on a courteous note. Master these and your emails will read with confidence and polish — exactly the skills we build in ACE's Business English course.",
    ],
  },
  {
    slug: "student-visa-for-malaysia-the-complete-2026-guide",
    title: "Student Visa for Malaysia: The Complete 2026 Guide",
    category: "Study in Malaysia",
    excerpt:
      "Everything international students need to know about applying for a Malaysian student pass to study English — documents, timeline and tips.",
    date: "2025-12-05",
    readTime: 10,
    author: "David Ong, Student Services Director",
    takeaways: [
      "Start your visa application early — allow 6–8 weeks",
      "Accurate documents are the key to fast approval",
      "ACE handles your student pass application end to end",
    ],
    body: [
      "Studying English in Malaysia requires a valid student pass. While the process is straightforward, it rewards early preparation and accurate paperwork. This guide walks you through what to expect in 2026.",
      "Step 1: Secure your offer. First, enrol in an accredited course such as those at ACE Language Centre. You will receive an offer letter, which is required to begin your visa application through Malaysia's Education Global Services (EMGS) system.",
      "Step 2: Prepare your documents. You'll typically need a passport valid for at least 18 months, passport-sized photos, academic certificates, a health declaration and proof of funds. Ensuring these are accurate and complete is the single biggest factor in a fast approval.",
      "Step 3: EMGS application and VAL. Your institution submits your application to EMGS. Once approved, you receive a Visa Approval Letter (VAL), which you use to enter Malaysia. Processing usually takes several weeks, so apply early.",
      "Step 4: Arrival and endorsement. After arriving in Malaysia, you complete a medical screening and your passport is endorsed with the student pass. Keep copies of everything and follow your institution's guidance closely.",
      "At ACE, our dedicated visa team manages this entire process for you — from EMGS submission to arrival support and airport pickup — so you can focus on your English while we handle the paperwork.",
    ],
  },
];

const generatedFromIdeas: BlogPost[] = Object.entries(ideas).flatMap(([category, titles], ci) =>
  titles.map((title, i) => {
    const slug = slugify(title);
    if (featured.some((f) => f.slug === slug)) return null;
    const day = ((ci * 7 + i * 3) % 27) + 1;
    const month = ((ci + i) % 11) + 1;
    return {
      slug,
      title,
      category,
      excerpt: excerptFor(title, category),
      date: `2025-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
      readTime: 5 + ((i + ci) % 6),
      author: authorFor(category),
    } as BlogPost;
  }),
).filter(Boolean) as BlogPost[];

function authorFor(category: string): string {
  const map: Record<string, string> = {
    "IELTS & TOEFL": "Sarah Mitchell, IELTS Lead Trainer",
    "Study in Malaysia": "David Ong, Student Services Director",
    "Business English": "James Carter, Business English Specialist",
    "AI & EdTech": "Dr. Priya Raman, Head of Learning Innovation",
    "Young Learners": "Emily Foo, Young Learner Coordinator",
  };
  return map[category] ?? "The ACE Academic Team";
}

function excerptFor(title: string, category: string): string {
  return `Practical, expert guidance on "${title.toLowerCase()}" from the teachers at ACE Language Centre. Clear steps, real examples and study tips to help you progress faster in ${category.toLowerCase()}.`;
}

export const blogPosts: BlogPost[] = [...featured, ...generatedFromIdeas];

export const blogCategories = Array.from(new Set(blogPosts.map((p) => p.category)));

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);

export function bodyFor(post: BlogPost): string[] {
  if (post.body?.length) return post.body;
  return [
    `${post.title} is one of the questions our students ask most at ACE Language Centre. In this guide, our ${post.category.toLowerCase()} specialists share the practical, proven approach we use in class — no jargon, just clear steps you can apply today.`,
    "Start with the fundamentals. Understand your current level honestly, set a specific goal, and choose a small number of high-impact habits to practise daily. Consistency beats intensity: twenty focused minutes every day outperforms a marathon session once a week.",
    "Next, practise actively rather than passively. Instead of only reading or listening, produce English — speak, write, summarise and self-correct. Feedback is what turns practice into progress, whether from a teacher, a study partner or one of ACE's AI learning tools.",
    "Finally, measure and adjust. Track what improves and what stalls, then double down on the techniques that work for you. Language learning is personal, and the right guidance makes all the difference.",
    "Want a structured path with expert teachers and AI-powered practice? Explore ACE Language Centre's courses and book a free consultation — we'll build a plan around your goals.",
  ];
}
