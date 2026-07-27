"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardCheck, ArrowRight, CheckCircle2, RotateCcw } from "lucide-react";

const q = {
  question: "Quick check: choose the correct sentence.",
  options: [
    { text: "She doesn't like coffee.", correct: true },
    { text: "She don't likes coffee.", correct: false },
    { text: "She not like coffee.", correct: false },
  ],
};

export function PlacementTeaser() {
  const [picked, setPicked] = useState<number | null>(null);

  return (
    <div className="grid gap-10 rounded-[2rem] bg-navy-gradient p-8 text-white shadow-soft md:p-12 lg:grid-cols-2 lg:items-center">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-gold">
          <ClipboardCheck className="h-4 w-4" /> Free English Level Test
        </span>
        <h2 className="mt-5 font-display text-3xl font-extrabold md:text-4xl">
          Not sure where to start? Find your English level in 2 minutes.
        </h2>
        <p className="mt-4 text-white/75">
          Take our free, no-sign-up placement test to discover your CEFR level and get a personalised
          course recommendation. Try a sample question now.
        </p>
        <Link
          href="/placement-test"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-navy transition-colors hover:bg-gold-light"
        >
          Start Full Test <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <p className="text-sm font-semibold text-white/60">Sample question</p>
        <p className="mt-2 font-display text-xl font-bold">{q.question}</p>
        <div className="mt-5 space-y-3">
          {q.options.map((o, i) => {
            const isPicked = picked === i;
            const show = picked !== null;
            return (
              <button
                key={o.text}
                onClick={() => setPicked(i)}
                disabled={show}
                className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all ${
                  show && o.correct
                    ? "border-success bg-success/20 text-white"
                    : isPicked && !o.correct
                    ? "border-red-400 bg-red-500/20 text-white"
                    : "border-white/15 bg-white/5 text-white/80 hover:border-white/40"
                }`}
              >
                {o.text}
                {show && o.correct && <CheckCircle2 className="h-5 w-5 text-success" />}
              </button>
            );
          })}
        </div>
        <AnimatePresence>
          {picked !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 flex items-center justify-between overflow-hidden"
            >
              <p className="text-sm text-white/70">
                {q.options[picked].correct ? "Correct! Ready for the full test?" : "Not quite — the full test adapts to you."}
              </p>
              <button onClick={() => setPicked(null)} aria-label="Try again" className="flex items-center gap-1 text-sm font-semibold text-gold">
                <RotateCcw className="h-4 w-4" /> Retry
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
