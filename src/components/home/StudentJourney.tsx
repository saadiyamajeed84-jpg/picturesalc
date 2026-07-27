"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, FileText, Plane, BookOpen, Award, Rocket } from "lucide-react";

const steps = [
  { icon: ClipboardCheck, title: "Free Placement Test", text: "Discover your exact CEFR level and get a personalised course recommendation." },
  { icon: FileText, title: "Enrol & Visa Support", text: "We process your student pass through EMGS and confirm your place." },
  { icon: Plane, title: "Arrive in Malaysia", text: "Airport pickup, accommodation and a warm welcome to Kuala Lumpur." },
  { icon: BookOpen, title: "Learn & Practise", text: "Communicative classes plus AI tools for daily speaking and writing practice." },
  { icon: Award, title: "Achieve Your Goal", text: "Pass your exam or reach fluency, and earn your ACE certificate." },
  { icon: Rocket, title: "Build Your Future", text: "Progress to university or your career with confident, global English." },
];

export function StudentJourney() {
  return (
    <div className="relative">
      <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-navy/10 lg:block" />
      <div className="space-y-8 lg:space-y-0">
        {steps.map((s, i) => {
          const left = i % 2 === 0;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className={`relative lg:flex lg:items-center lg:gap-8 ${left ? "" : "lg:flex-row-reverse"}`}
            >
              <div className="lg:w-1/2">
                <div className={`rounded-2xl border border-navy/10 bg-white p-6 shadow-sm ${left ? "lg:text-right" : "lg:text-left"}`}>
                  <span className={`inline-flex items-center gap-2 ${left ? "lg:flex-row-reverse" : ""}`}>
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-navy to-navy-600 text-gold">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-lg font-bold text-navy">{s.title}</span>
                  </span>
                  <p className="mt-3 text-sm text-ink/65">{s.text}</p>
                </div>
              </div>
              <div className="absolute left-1/2 hidden h-6 w-6 -translate-x-1/2 place-items-center rounded-full border-4 border-white bg-gold lg:grid">
                <span className="text-[0.6rem] font-bold text-navy">{i + 1}</span>
              </div>
              <div className="hidden lg:block lg:w-1/2" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
