export type Testimonial = {
  name: string;
  country: string;
  flag: string;
  rating: number;
  text: string;
  result: string;
  courses: string[]; // course slugs this testimonial is relevant to
};

// 100+ verified-style student testimonials, each tagged to relevant course slugs.
export const testimonials: Testimonial[] = [
  // General English
  { name: "Aisha R.", country: "Saudi Arabia", flag: "🇸🇦", rating: 5, text: "I arrived barely able to introduce myself. Six months later I passed my university interview in English. ACE changed everything.", result: "A2 → B2 in 6 months", courses: ["general-english", "online-english"] },
  { name: "Mohammed A.", country: "Yemen", flag: "🇾🇪", rating: 5, text: "The teachers are patient and the classes are small, so I got to speak every single day. My confidence grew so fast.", result: "A1 → B1", courses: ["general-english"] },
  { name: "Yuki T.", country: "Japan", flag: "🇯🇵", rating: 5, text: "General English at ACE felt friendly and structured. I finally stopped translating in my head and started thinking in English.", result: "B1 → B2", courses: ["general-english", "online-english"] },
  { name: "Camila R.", country: "Colombia", flag: "🇨🇴", rating: 5, text: "The communicative method really works. Every lesson we talked, played and practised. I looked forward to class each day.", result: "A2 → B1", courses: ["general-english"] },
  { name: "Thi Nguyen", country: "Vietnam", flag: "🇻🇳", rating: 5, text: "Rolling weekly start dates meant I could begin right away. The placement test put me in exactly the right class.", result: "A2 → B2", courses: ["general-english"] },
  { name: "Ahmad F.", country: "Indonesia", flag: "🇮🇩", rating: 5, text: "Great value and brilliant teachers. My reading and writing improved beyond what I imagined possible.", result: "B1 → C1", courses: ["general-english"] },
  { name: "Elena K.", country: "Russia", flag: "🇷🇺", rating: 5, text: "I loved the daily speaking practice and the AI homework coach. My accent and fluency improved together.", result: "B1 → B2", courses: ["general-english"] },
  { name: "Fatou D.", country: "Senegal", flag: "🇸🇳", rating: 5, text: "The multicultural class made learning fun. I made friends from ten countries and we practised English together.", result: "A2 → B1", courses: ["general-english"] },
  { name: "Omar H.", country: "Iraq", flag: "🇮🇶", rating: 5, text: "ACE gave me a strong foundation. I now use English confidently at work and in daily life in KL.", result: "A1 → B1", courses: ["general-english"] },
  { name: " Layla M.", country: "Oman", flag: "🇴🇲", rating: 4, text: "Warm, professional and organised. The progress reports helped me see exactly how I was improving.", result: "A2 → B1", courses: ["general-english"] },

  // Intensive English / AIEP
  { name: "Chen W.", country: "China", flag: "🇨🇳", rating: 5, text: "The pace was exactly what I needed. In 12 weeks I went from struggling to confidently attending lectures in English.", result: "B1 → C1 in 12 weeks", courses: ["intensive-english"] },
  { name: "Abdulrahman S.", country: "Saudi Arabia", flag: "🇸🇦", rating: 5, text: "AIEP was intense but worth every hour. The student visa process was smooth and ACE handled everything for me.", result: "A2 → B2 · Visa approved", courses: ["intensive-english"] },
  { name: "Marta P.", country: "Poland", flag: "🇵🇱", rating: 5, text: "Full-time immersion changed my English completely. Two CEFR levels in one term — I couldn't believe my progress.", result: "B1 → C1", courses: ["intensive-english"] },
  { name: "Ibrahim K.", country: "Nigeria", flag: "🇳🇬", rating: 5, text: "The fluency labs and daily practice pushed me forward fast. Perfect for my university preparation.", result: "B1 → B2 in 8 weeks", courses: ["intensive-english"] },
  { name: "Sara N.", country: "Iran", flag: "🇮🇷", rating: 5, text: "The intensive programme and AI study planner kept me on track every day. I reached my goal ahead of schedule.", result: "A2 → B2", courses: ["intensive-english"] },
  { name: "Dmitry V.", country: "Kazakhstan", flag: "🇰🇿", rating: 5, text: "The teachers and the immersion environment were superb. My academic English is now ready for my master's.", result: "B1 → C1", courses: ["intensive-english"] },
  { name: "Wei L.", country: "China", flag: "🇨🇳", rating: 5, text: "8 weeks per level was the perfect structure. I could feel myself improving week by week.", result: "A2 → B1", courses: ["intensive-english"] },
  { name: "Tariq A.", country: "UAE", flag: "🇦🇪", rating: 5, text: "The AIEP prepared me both for exams and university. Excellent support with my student pass too.", result: "B1 → C1 · Visa approved", courses: ["intensive-english"] },

  // IELTS
  { name: "Lin H.", country: "China", flag: "🇨🇳", rating: 5, text: "I needed 7.0 for my master's. ACE got me to 7.5 in ten weeks with feedback I could actually act on.", result: "IELTS 6.0 → 7.5", courses: ["ielts-preparation"] },
  { name: "Priya S.", country: "India", flag: "🇮🇳", rating: 5, text: "The mock exams were exactly like the real thing. I walked in calm and hit my target band first try.", result: "IELTS 7.0", courses: ["ielts-preparation"] },
  { name: "Nguyen T.", country: "Vietnam", flag: "🇻🇳", rating: 5, text: "Writing was my weakness. The band-descriptor feedback lifted me from 5.5 to 7.0 in writing alone.", result: "IELTS 6.0 → 7.0", courses: ["ielts-preparation"] },
  { name: "Ahmed Al-Farsi", country: "Saudi Arabia", flag: "🇸🇦", rating: 5, text: "The teachers genuinely care. My visa was approved in 32 days and I hit IELTS 6.5 for my course.", result: "IELTS 6.5 · Visa approved", courses: ["ielts-preparation", "intensive-english"] },
  { name: "Grace O.", country: "Nigeria", flag: "🇳🇬", rating: 5, text: "The speaking simulations built my confidence. I finally spoke fluently under exam pressure.", result: "IELTS 7.5", courses: ["ielts-preparation"] },
  { name: "Reza M.", country: "Iran", flag: "🇮🇷", rating: 5, text: "Strategy sessions decoded exactly what the examiners want. My reading jumped a full band.", result: "IELTS 6.5 → 7.5", courses: ["ielts-preparation"] },
  { name: "Sofia B.", country: "Brazil", flag: "🇧🇷", rating: 5, text: "The AI writing assistant plus real examiner feedback was a winning combination. Reached my dream band.", result: "IELTS 7.0", courses: ["ielts-preparation"] },
  { name: "Hassan J.", country: "Pakistan", flag: "🇵🇰", rating: 5, text: "From 5.5 to 7.0 in eight weeks. The time-management techniques made all the difference on test day.", result: "IELTS 5.5 → 7.0", courses: ["ielts-preparation"] },
  { name: "Mei X.", country: "China", flag: "🇨🇳", rating: 5, text: "Detailed, honest feedback every week. I knew exactly what to fix and my score reflected it.", result: "IELTS 6.0 → 7.5", courses: ["ielts-preparation"] },
  { name: "Aleksandra N.", country: "Russia", flag: "🇷🇺", rating: 5, text: "Best IELTS preparation in KL. The mock exams and speaking practice were invaluable.", result: "IELTS 7.5", courses: ["ielts-preparation"] },
  { name: "Kwame A.", country: "Ghana", flag: "🇬🇭", rating: 5, text: "I registered for the official test through ACE and passed with the band I needed for the UK.", result: "IELTS 7.0", courses: ["ielts-preparation"] },
  { name: "Farah Z.", country: "Bangladesh", flag: "🇧🇩", rating: 5, text: "The listening strategies were gold. I stopped losing marks to traps and my whole score improved.", result: "IELTS 6.5 → 7.5", courses: ["ielts-preparation"] },

  // TOEFL
  { name: "Diego M.", country: "Brazil", flag: "🇧🇷", rating: 5, text: "The integrated task practice was exactly like the real exam. I scored 105 and got into my first-choice university.", result: "TOEFL 105/120", courses: ["toefl-preparation"] },
  { name: "Ji-ho K.", country: "South Korea", flag: "🇰🇷", rating: 5, text: "The computer-based practice matched the real iBT perfectly. I felt fully prepared on test day.", result: "TOEFL 102/120", courses: ["toefl-preparation"] },
  { name: "Ananya R.", country: "India", flag: "🇮🇳", rating: 5, text: "Speaking templates and note-taking training raised my score dramatically. Highly recommend.", result: "TOEFL 98 → 110", courses: ["toefl-preparation"] },
  { name: "Carlos V.", country: "Mexico", flag: "🇲🇽", rating: 5, text: "ACE helped me choose TOEFL over IELTS and it was the right call. I got into a US university.", result: "TOEFL 100/120", courses: ["toefl-preparation"] },
  { name: "Lan P.", country: "Vietnam", flag: "🇻🇳", rating: 5, text: "The academic reading speed drills were exactly what I needed. Thank you, ACE!", result: "TOEFL 95 → 108", courses: ["toefl-preparation"] },
  { name: "Nadia H.", country: "Egypt", flag: "🇪🇬", rating: 4, text: "Excellent teachers and realistic practice tests. I improved my writing score the most.", result: "TOEFL 99/120", courses: ["toefl-preparation"] },

  // PTE
  { name: "Ravi K.", country: "India", flag: "🇮🇳", rating: 5, text: "The task-type strategies were gold. I hit my target PTE score on my first attempt after just six weeks.", result: "PTE 79+ overall", courses: ["pte-preparation"] },
  { name: "Jasmeet S.", country: "India", flag: "🇮🇳", rating: 5, text: "Understanding the AI scoring completely changed how I approached the test. Results in 48 hours!", result: "PTE 84 overall", courses: ["pte-preparation"] },
  { name: "Bao T.", country: "Vietnam", flag: "🇻🇳", rating: 5, text: "As a Pearson centre, ACE knew the PTE inside out. The mock tests mirrored the real exam.", result: "PTE 76 overall", courses: ["pte-preparation"] },
  { name: "Manpreet K.", country: "India", flag: "🇮🇳", rating: 5, text: "I needed PTE for migration. ACE's strategies got me the score I needed fast.", result: "PTE 79 · Migration ready", courses: ["pte-preparation"] },
  { name: "Sunil P.", country: "Nepal", flag: "🇳🇵", rating: 5, text: "The speaking and writing integrated tasks were well taught. My fluency score soared.", result: "PTE 74 overall", courses: ["pte-preparation"] },

  // MUET
  { name: "Nur Farah", country: "Malaysia", flag: "🇲🇾", rating: 5, text: "I jumped from Band 3 to Band 4.5 and secured my university place. The writing feedback was incredibly helpful.", result: "MUET Band 3 → 4.5", courses: ["muet-preparation"] },
  { name: "Aiman R.", country: "Malaysia", flag: "🇲🇾", rating: 5, text: "The past-paper practice and speaking simulations gave me the band my course required.", result: "MUET Band 4.0", courses: ["muet-preparation"] },
  { name: "Siti K.", country: "Malaysia", flag: "🇲🇾", rating: 5, text: "Clear explanations of the band descriptors made a huge difference. Highly recommend for MUET.", result: "MUET Band 3.5 → 4.5", courses: ["muet-preparation"] },
  { name: "Danish A.", country: "Malaysia", flag: "🇲🇾", rating: 5, text: "The teachers really know MUET. I improved across all four papers and got into my first-choice programme.", result: "MUET Band 4.5", courses: ["muet-preparation"] },
  { name: "Hana L.", country: "Malaysia", flag: "🇲🇾", rating: 4, text: "Structured, focused and effective. The mock MUET with a band report showed me exactly where to improve.", result: "MUET Band 4.0", courses: ["muet-preparation"] },

  // Business English
  { name: "Nurul Aina", country: "Malaysia", flag: "🇲🇾", rating: 5, text: "I was promoted to regional manager within a year. The presentation and negotiation modules gave me real confidence.", result: "Promoted to Regional Manager", courses: ["business-english", "corporate-training"] },
  { name: "Kenji Tanaka", country: "Japan", flag: "🇯🇵", rating: 5, text: "Business English transformed my presentations. I now lead international meetings with total confidence.", result: "Promoted at work", courses: ["business-english"] },
  { name: "Andrei P.", country: "Romania", flag: "🇷🇴", rating: 5, text: "The case studies felt real and relevant. My business writing is now clear, professional and persuasive.", result: "B1 → C1 Business", courses: ["business-english"] },
  { name: " Layla H.", country: "Jordan", flag: "🇯🇴", rating: 5, text: "Cross-cultural communication training helped me work confidently with global clients.", result: "Confident global communicator", courses: ["business-english"] },
  { name: "Suresh N.", country: "India", flag: "🇮🇳", rating: 5, text: "The negotiation and meetings modules were directly useful at work. Immediate impact on my career.", result: "Career advancement", courses: ["business-english"] },
  { name: "Mariam T.", country: "Kazakhstan", flag: "🇰🇿", rating: 5, text: "Professional, practical and engaging. My email and report writing improved dramatically.", result: "B2 → C1 Business", courses: ["business-english"] },

  // Cambridge
  { name: "Sofia P.", country: "Italy", flag: "🇮🇹", rating: 5, text: "Passing C1 Advanced opened the door to my dream university. The past-paper drills made all the difference.", result: "C1 Advanced — Grade A", courses: ["cambridge-english"] },
  { name: "Lucas G.", country: "Spain", flag: "🇪🇸", rating: 5, text: "B2 First was a great milestone. A lifelong certificate and a huge confidence boost.", result: "B2 First — Grade B", courses: ["cambridge-english"] },
  { name: "Emma D.", country: "France", flag: "🇫🇷", rating: 5, text: "The examiner feedback and mock speaking exams prepared me perfectly for CAE.", result: "C1 Advanced", courses: ["cambridge-english"] },
  { name: "Paolo R.", country: "Italy", flag: "🇮🇹", rating: 5, text: "Excellent teachers and targeted grammar work. I passed with a grade higher than I expected.", result: "B2 First — Grade A", courses: ["cambridge-english"] },
  { name: "Yasmin A.", country: "Morocco", flag: "🇲🇦", rating: 4, text: "A well-structured course that built durable skills, not just exam tricks. Highly recommend.", result: "C1 Advanced", courses: ["cambridge-english"] },

  // Kids English
  { name: "Mrs. Tan", country: "Malaysia (Parent)", flag: "🇲🇾", rating: 5, text: "My daughter used to hate English homework. Now she asks to go to class. The teachers are wonderful.", result: "Cambridge Movers — Distinction", courses: ["kids-english"] },
  { name: "Mr. & Mrs. Lee", country: "Malaysia (Parents)", flag: "🇲🇾", rating: 5, text: "The phonics programme helped our son read confidently. The small classes really work for young children.", result: "Confident young reader", courses: ["kids-english"] },
  { name: "Mrs. Chen", country: "China (Parent)", flag: "🇨🇳", rating: 5, text: "The play-based learning kept my child engaged. Regular reports kept me informed every step.", result: "Pre-A1 → A1", courses: ["kids-english"] },
  { name: "Mrs. Kaur", country: "Malaysia (Parent)", flag: "🇲🇾", rating: 5, text: "Nurturing teachers and a safe environment. My daughter's speaking improved so much.", result: "Cambridge Starters — Distinction", courses: ["kids-english"] },
  { name: "Mrs. Abdullah", country: "Malaysia (Parent)", flag: "🇲🇾", rating: 5, text: "A joyful place to learn. My son looks forward to every class and his English keeps improving.", result: "A1 achieved", courses: ["kids-english"] },

  // Teen English
  { name: "Mr. Rahman", country: "Malaysia (Parent)", flag: "🇲🇾", rating: 5, text: "My son's confidence and school grades improved dramatically. The teachers really understand teenagers.", result: "School English: A", courses: ["teen-english"] },
  { name: "Aisyah (age 15)", country: "Malaysia", flag: "🇲🇾", rating: 5, text: "The classes are fun and the projects are interesting. I'm much more confident speaking English now.", result: "A2 → B1", courses: ["teen-english"] },
  { name: "Mrs. Wong", country: "Malaysia (Parent)", flag: "🇲🇾", rating: 5, text: "Teen English prepared my daughter for her Cambridge exam and improved her school results too.", result: "B1 First for Schools", courses: ["teen-english"] },
  { name: "Zaid (age 16)", country: "Saudi Arabia", flag: "🇸🇦", rating: 5, text: "I improved my writing and debating skills. The teachers make everything relevant to my life.", result: "B1 → B2", courses: ["teen-english"] },
  { name: "Mrs. Ismail", country: "Malaysia (Parent)", flag: "🇲🇾", rating: 4, text: "A supportive environment that motivates teenagers. My son now enjoys learning English.", result: "A2 → B1", courses: ["teen-english"] },

  // Corporate / HRDF
  { name: "L. Kumar", country: "Malaysia (HR Director)", flag: "🇲🇾", rating: 5, text: "Our customer satisfaction scores rose after ACE trained our support team. Professional, measurable, worth every ringgit.", result: "+18% CSAT after training", courses: ["corporate-training"] },
  { name: "Siti Aminah", country: "Malaysia (L&D Manager)", flag: "🇲🇾", rating: 5, text: "Fully HRD Corp claimable and completely tailored to our industry. The ROI reporting impressed our management.", result: "100% SBL-Khas claimed", courses: ["corporate-training"] },
  { name: "David Lim", country: "Malaysia (Operations Head)", flag: "🇲🇾", rating: 5, text: "ACE upskilled our frontline team's English on-site. Flexible scheduling and excellent trainers.", result: "Team communication improved", courses: ["corporate-training"] },
  { name: "Nur Hidayah", country: "Malaysia (HR Executive)", flag: "🇲🇾", rating: 5, text: "The needs audit and custom curriculum were spot on. Our staff loved the practical, relevant content.", result: "Bespoke programme delivered", courses: ["corporate-training"] },
  { name: "R. Chandran", country: "Malaysia (CEO)", flag: "🇲🇾", rating: 5, text: "Our executives now present and negotiate in English with confidence. A truly professional partner.", result: "Executive English upskilled", courses: ["corporate-training"] },

  // One-to-One
  { name: "Yuki S.", country: "Japan", flag: "🇯🇵", rating: 5, text: "As a busy professional, private lessons were perfect. My tutor tailored everything to my work needs. Huge progress in weeks.", result: "B1 → B2 in 30 hours", courses: ["one-to-one-english"] },
  { name: "Khalid M.", country: "Qatar", flag: "🇶🇦", rating: 5, text: "One dedicated tutor who focused entirely on my goals. The flexibility fit around my schedule perfectly.", result: "Targeted results, fast", courses: ["one-to-one-english"] },
  { name: "Beatriz S.", country: "Portugal", flag: "🇵🇹", rating: 5, text: "Private lessons accelerated my exam prep. Every session was built around exactly what I needed.", result: "Exam ready in 20 hours", courses: ["one-to-one-english"] },
  { name: "Ahmed T.", country: "Egypt", flag: "🇪🇬", rating: 5, text: "The personalised plan and undivided attention made all the difference. Best investment I made.", result: "A2 → B1 private", courses: ["one-to-one-english"] },

  // Online English
  { name: "Camila R.", country: "Colombia", flag: "🇨🇴", rating: 5, text: "I studied with ACE from home and it felt just like a real classroom. The teachers and AI tools kept me progressing.", result: "A2 → B1 online", courses: ["online-english"] },
  { name: "Oleg K.", country: "Ukraine", flag: "🇺🇦", rating: 5, text: "Live online classes across time zones worked perfectly for me. Interactive and engaging every session.", result: "B1 → B2 online", courses: ["online-english"] },
  { name: "Fatima A.", country: "Morocco", flag: "🇲🇦", rating: 5, text: "The online platform and AI practice tools are excellent. I never felt like I was missing out.", result: "A2 → B1", courses: ["online-english"] },
  { name: " Paulo M.", country: "Brazil", flag: "🇧🇷", rating: 5, text: "Same great teachers, from my living room. The global classroom made it fun and motivating.", result: "B1 → B2", courses: ["online-english"] },

  // Summer & Winter Camp
  { name: "The Kim Family", country: "South Korea", flag: "🇰🇷", rating: 5, text: "Our two children loved every day. English improved, and the trips around KL made it a holiday to remember.", result: "2-week Summer Camp", courses: ["summer-winter-camp"] },
  { name: "Mrs. Yamamoto", country: "Japan (Parent)", flag: "🇯🇵", rating: 5, text: "A perfect mix of learning and adventure. My daughter came home confident and full of stories.", result: "1-week Winter Camp", courses: ["summer-winter-camp"] },
  { name: "The Al-Saud Family", country: "Saudi Arabia", flag: "🇸🇦", rating: 5, text: "Safe, well-organised and so much fun. The morning classes and afternoon excursions were ideal.", result: "3-week Summer Camp", courses: ["summer-winter-camp"] },
  { name: "Mrs. Petrova", country: "Russia (Parent)", flag: "🇷🇺", rating: 5, text: "My son made friends from all over the world and his English improved noticeably. Highly recommend!", result: "2-week Summer Camp", courses: ["summer-winter-camp"] },

  // Ladies-Only English
  { name: "Sara A.", country: "Saudi Arabia", flag: "🇸🇦", rating: 5, text: "The women-only class made me feel so comfortable. I finally found the confidence to speak, and my English took off.", result: "A1 → B1 in 5 months", courses: ["ladies-only-english"] },
  { name: "Mona K.", country: "Kuwait", flag: "🇰🇼", rating: 5, text: "A supportive, comfortable environment with wonderful female teachers. I progressed faster than ever.", result: "A2 → B1", courses: ["ladies-only-english"] },
  { name: "Huda S.", country: "Yemen", flag: "🇾🇪", rating: 5, text: "Perfect for me. The same quality curriculum in a setting where I felt confident to participate fully.", result: "A1 → A2", courses: ["ladies-only-english"] },
  { name: "Amina B.", country: "Somalia", flag: "🇸🇴", rating: 5, text: "I loved my class. The teachers were kind and encouraging, and I made lovely friends.", result: "A2 → B1", courses: ["ladies-only-english"] },

  // Cross-course / general praise
  { name: "Aischa Diallo", country: "Senegal", flag: "🇸🇳", rating: 5, text: "The multicultural community is amazing. I made friends from 20 countries and improved faster than I imagined.", result: "IELTS 7.0", courses: ["general-english", "ielts-preparation"] },
  { name: "Fatima Noor", country: "Pakistan", flag: "🇵🇰", rating: 5, text: "Warm, professional and truly student-first. The accommodation and airport pickup made my first week stress-free.", result: "General English A2 → B2", courses: ["general-english", "intensive-english"] },
  { name: "Sofia Petrova", country: "Russia", flag: "🇷🇺", rating: 5, text: "From B1 to C1 Advanced in one year. The AI speaking coach let me practise every night. Life-changing experience.", result: "Cambridge C1 Advanced", courses: ["cambridge-english", "general-english"] },
  { name: "Nabil H.", country: "Algeria", flag: "🇩🇿", rating: 5, text: "Outstanding centre. Whatever your goal — exams, fluency or business — ACE has a course and a teacher for you.", result: "B1 → C1", courses: ["general-english", "business-english"] },
  { name: "Wanida S.", country: "Thailand", flag: "🇹🇭", rating: 5, text: "The best decision I made in Malaysia. Professional teachers, modern campus and a friendly community.", result: "A2 → B2", courses: ["general-english", "online-english"] },
  { name: "Bashir O.", country: "Sudan", flag: "🇸🇩", rating: 5, text: "ACE supported me from visa to graduation. I improved my English and built lifelong friendships.", result: "A1 → B2 · Visa approved", courses: ["intensive-english", "general-english"] },
  { name: " Layla R.", country: "Lebanon", flag: "🇱🇧", rating: 5, text: "Excellent teaching and genuine care for every student. I recommend ACE to everyone back home.", result: "B1 → C1", courses: ["general-english", "ielts-preparation"] },
  { name: "Ganbold B.", country: "Mongolia", flag: "🇲🇳", rating: 5, text: "The teachers made complex grammar simple and speaking fun. My confidence transformed.", result: "A2 → B1", courses: ["general-english"] },
  { name: "Precious A.", country: "Nigeria", flag: "🇳🇬", rating: 5, text: "Top-quality preparation and support. I achieved my target and progressed to university in Malaysia.", result: "IELTS 7.0 · University pathway", courses: ["ielts-preparation", "intensive-english"] },
  { name: "Tenzin D.", country: "Nepal", flag: "🇳🇵", rating: 5, text: "Affordable, professional and effective. The AI tools helped me practise every single day.", result: "B1 → B2", courses: ["general-english", "online-english"] },
  { name: "Hiroshi N.", country: "Japan", flag: "🇯🇵", rating: 5, text: "A wonderful place to learn. The blend of expert teaching and technology is unbeatable.", result: "B1 → C1", courses: ["business-english", "general-english"] },
  { name: "Aigerim T.", country: "Kazakhstan", flag: "🇰🇿", rating: 5, text: "ACE helped me achieve my academic goals and settle into life in KL. Forever grateful.", result: "IELTS 7.5", courses: ["ielts-preparation", "intensive-english"] },
  { name: "Mustafa E.", country: "Turkey", flag: "🇹🇷", rating: 5, text: "Great teachers, great community, great results. My English is now ready for my career.", result: "B2 → C1 Business", courses: ["business-english"] },
  { name: "Linh D.", country: "Vietnam", flag: "🇻🇳", rating: 5, text: "The placement test and personalised plan meant I never wasted a single lesson. Superb.", result: "A2 → B2", courses: ["general-english", "intensive-english"] },
  { name: "Salma K.", country: "Egypt", flag: "🇪🇬", rating: 5, text: "I felt supported from day one. The teachers pushed me to reach my full potential.", result: "IELTS 6.5 → 7.5", courses: ["ielts-preparation"] },
  { name: "Arjun P.", country: "India", flag: "🇮🇳", rating: 5, text: "Professional, results-driven and friendly. I hit my PTE target and my migration goal.", result: "PTE 79+", courses: ["pte-preparation"] },
  { name: "Mei Ling", country: "Malaysia", flag: "🇲🇾", rating: 5, text: "The most professional language centre in KL. Modern classrooms, brilliant teachers and real results.", result: "Business English C1", courses: ["business-english", "corporate-training"] },
  { name: "Yusuf A.", country: "Indonesia", flag: "🇮🇩", rating: 5, text: "My English improved beyond my expectations. The teachers and AI tools kept me motivated throughout.", result: "B1 → C1", courses: ["general-english", "online-english"] },
  { name: "Daniela R.", country: "Peru", flag: "🇵🇪", rating: 5, text: "An amazing learning experience. I gained fluency, confidence and friends from around the world.", result: "A2 → B2", courses: ["general-english"] },
  { name: "Osama F.", country: "Palestine", flag: "🇵🇸", rating: 5, text: "The support team and teachers went above and beyond. I passed my exam and felt at home in KL.", result: "IELTS 7.0", courses: ["ielts-preparation", "intensive-english"] },
  { name: "Chalida P.", country: "Thailand", flag: "🇹🇭", rating: 4, text: "Fantastic teachers and a welcoming atmosphere. My speaking improved so much in a short time.", result: "A2 → B1", courses: ["general-english"] },
  { name: "Bakyt A.", country: "Kyrgyzstan", flag: "🇰🇬", rating: 5, text: "The intensive programme was challenging and rewarding. I achieved two levels in one term.", result: "B1 → C1", courses: ["intensive-english"] },
  { name: "Rania S.", country: "Syria", flag: "🇸🇾", rating: 5, text: "A safe, welcoming place to learn. My confidence grew every week thanks to caring teachers.", result: "A1 → B1", courses: ["general-english", "ladies-only-english"] },
  { name: "Victor N.", country: "Angola", flag: "🇦🇴", rating: 5, text: "Excellent business English training that immediately helped my career. Highly professional.", result: "B1 → C1 Business", courses: ["business-english"] },
  { name: "Sang-woo P.", country: "South Korea", flag: "🇰🇷", rating: 5, text: "The TOEFL preparation was thorough and realistic. I reached the score I needed for the US.", result: "TOEFL 106/120", courses: ["toefl-preparation"] },
  { name: "Amira L.", country: "Tunisia", flag: "🇹🇳", rating: 5, text: "Wonderful teachers who care about your progress. I improved faster than at any school before.", result: "B1 → B2", courses: ["general-english"] },
  { name: "Deng W.", country: "China", flag: "🇨🇳", rating: 5, text: "The online course was flexible and effective. Live classes plus AI practice kept me improving.", result: "A2 → B1 online", courses: ["online-english"] },
  { name: "Halima Y.", country: "Somalia", flag: "🇸🇴", rating: 5, text: "Ladies-only classes made me feel confident to speak. The teachers were patient and kind.", result: "A1 → A2", courses: ["ladies-only-english"] },
  { name: "Ismail C.", country: "Comoros", flag: "🇰🇲", rating: 5, text: "A brilliant centre with dedicated teachers. My English opened doors I never thought possible.", result: "B1 → C1", courses: ["general-english", "intensive-english"] },
  { name: "Preeya M.", country: "India", flag: "🇮🇳", rating: 5, text: "The private lessons were perfectly tailored to my needs. Excellent value and rapid progress.", result: "B1 → B2 private", courses: ["one-to-one-english"] },
  { name: "Kofi B.", country: "Ghana", flag: "🇬🇭", rating: 5, text: "The Cambridge course built real, durable skills. I earned a certificate that lasts a lifetime.", result: "C1 Advanced", courses: ["cambridge-english"] },
  { name: "Natthapong S.", country: "Thailand", flag: "🇹🇭", rating: 5, text: "My son loved the summer camp — learning and adventures every day. We'll be back next year!", result: "2-week Summer Camp", courses: ["summer-winter-camp"] },
  { name: "Adebayo O.", country: "Nigeria", flag: "🇳🇬", rating: 5, text: "ACE's corporate programme upskilled our whole department. Measurable results and great trainers.", result: "Corporate English delivered", courses: ["corporate-training"] },
  { name: "Marziya K.", country: "Uzbekistan", flag: "🇺🇿", rating: 5, text: "From beginner to confident speaker in months. The teachers and community are simply the best.", result: "A1 → B1", courses: ["general-english"] },
];

export function getTestimonialsForCourse(slug: string): Testimonial[] {
  const matched = testimonials.filter((t) => t.courses.includes(slug));
  return matched.length > 0 ? matched : testimonials.slice(0, 8);
}
