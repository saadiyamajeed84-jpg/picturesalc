"use client";

import { useState } from "react";
import { CheckCircle2, RotateCcw, ArrowRight } from "lucide-react";
import Link from "next/link";

const questions = [
  { q: "Choose the correct sentence:", options: ["She don't like coffee.", "She doesn't likes coffee.", "She doesn't like coffee.", "She not like coffee."], answer: 2 },
  { q: "Complete: I ___ to London last year.", options: ["go", "went", "have gone", "going"], answer: 1 },
  { q: "Pick the correct word: This book is ___ than that one.", options: ["interesting", "more interesting", "most interesting", "interestinger"], answer: 1 },
  { q: "Complete: If it ___ tomorrow, we'll stay home.", options: ["rain", "rains", "will rain", "rained"], answer: 1 },
  { q: "Choose the best option: I've lived here ___ 2015.", options: ["for", "since", "from", "during"], answer: 1 },
  { q: "Select the correct passive: The report ___ by the team.", options: ["was written", "wrote", "has wrote", "is write"], answer: 0 },
  { q: "Pick the natural phrase:", options: ["make a decision", "do a decision", "take a decision quickly do", "have decision"], answer: 0 },
  { q: "Complete: By next year, I ___ my degree.", options: ["will finish", "will have finished", "finish", "am finishing"], answer: 1 },
  { q: "Choose the correct word: She's the woman ___ car was stolen.", options: ["who", "which", "whose", "whom"], answer: 2 },
  { q: "Select the most advanced form: 'It's important that he ___ on time.'", options: ["is", "be", "will be", "being"], answer: 1 },
];

function levelFor(score: number) {
  if (score <= 2) return { level: "A1–A2 (Beginner–Elementary)", course: "General English", text: "You have the basics — a General English course will build strong foundations fast." };
  if (score <= 4) return { level: "B1 (Intermediate)", course: "Intensive English", text: "Solid intermediate English. Intensive English will accelerate you toward fluency." };
  if (score <= 7) return { level: "B2 (Upper-Intermediate)", course: "IELTS Preparation", text: "Great level! You're ready for exam preparation like IELTS or TOEFL." };
  return { level: "C1–C2 (Advanced)", course: "Cambridge English", text: "Excellent! Consider Cambridge C1 Advanced or Business English to perfect your skills." };
}

export function PlacementQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  const select = (i: number) => {
    const next = [...answers, i];
    setAnswers(next);
    if (step + 1 < questions.length) setStep(step + 1);
    else setDone(true);
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setDone(false);
  };

  if (done) {
    const score = answers.reduce((acc, a, i) => acc + (a === questions[i].answer ? 1 : 0), 0);
    const result = levelFor(score);
    return (
      <div className="rounded-3xl border border-navy/10 bg-white p-8 text-center shadow-soft">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-success text-white"><CheckCircle2 className="h-8 w-8" /></div>
        <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-gold">Your result</p>
        <p className="mt-1 font-display text-4xl font-extrabold text-navy">{score}/{questions.length}</p>
        <p className="mt-3 font-display text-xl font-bold text-navy">{result.level}</p>
        <p className="mx-auto mt-2 max-w-md text-ink/65">{result.text}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/apply" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-navy hover:bg-gold-light">
            Book Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
          <button onClick={reset} className="inline-flex items-center gap-2 rounded-full border-2 border-navy/15 px-6 py-3 text-sm font-semibold text-navy hover:border-navy">
            <RotateCcw className="h-4 w-4" /> Retake Test
          </button>
        </div>
        <p className="mt-4 text-xs text-ink/45">This is a quick indicative test. Book a full placement test with our advisors for an accurate CEFR level.</p>
      </div>
    );
  }

  const current = questions[step];
  const progress = ((step) / questions.length) * 100;

  return (
    <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-soft">
      <div className="flex items-center justify-between text-sm font-semibold text-navy">
        <span>Question {step + 1} of {questions.length}</span>
        <span className="text-ink/50">{Math.round(progress)}%</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-mist">
        <div className="h-full rounded-full bg-gold transition-all" style={{ width: `${progress}%` }} />
      </div>
      <h2 className="mt-6 font-display text-xl font-bold text-navy md:text-2xl">{current.q}</h2>
      <div className="mt-6 grid gap-3">
        {current.options.map((opt, i) => (
          <button
            key={opt}
            onClick={() => select(i)}
            className="rounded-xl border border-navy/12 bg-white px-5 py-3.5 text-left text-sm font-medium text-ink/80 transition-all hover:border-navy hover:bg-navy hover:text-white"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
