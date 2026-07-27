"use client";

import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { reviews } from "@/lib/data";

export function ReviewsSlider() {
  const [i, setI] = useState(0);
  const total = reviews.length;
  const go = (d: number) => setI((p) => (p + d + total) % total);
  const r = reviews[i];

  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative rounded-3xl border border-navy/10 bg-white p-8 shadow-soft md:p-12">
        <Quote className="absolute right-8 top-8 h-16 w-16 text-navy/5" aria-hidden="true" />
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex gap-1" aria-label={`${r.rating} out of 5 stars`}>
              {Array.from({ length: r.rating }).map((_, s) => (
                <Star key={s} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <p className="mt-5 font-display text-xl font-medium leading-relaxed text-navy md:text-2xl">
              “{r.text}”
            </p>
            <div className="mt-6 flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-navy text-xl">{r.flag}</span>
              <div>
                <p className="font-bold text-navy">{r.name}</p>
                <p className="text-sm text-ink/55">{r.country}</p>
              </div>
              <span className="ml-auto rounded-full bg-success/10 px-3 py-1 text-xs font-bold text-success">
                {r.result}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button onClick={() => go(-1)} aria-label="Previous review" className="grid h-11 w-11 place-items-center rounded-full border border-navy/15 text-navy transition-colors hover:bg-navy hover:text-white">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-1.5">
          {reviews.map((_, d) => (
            <button
              key={d}
              onClick={() => setI(d)}
              aria-label={`Go to review ${d + 1}`}
              className={`h-2 rounded-full transition-all ${d === i ? "w-6 bg-gold" : "w-2 bg-navy/20"}`}
            />
          ))}
        </div>
        <button onClick={() => go(1)} aria-label="Next review" className="grid h-11 w-11 place-items-center rounded-full border border-navy/15 text-navy transition-colors hover:bg-navy hover:text-white">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
