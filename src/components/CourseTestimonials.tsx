"use client";

import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Testimonial } from "@/lib/testimonials";

export function CourseTestimonials({ items }: { items: Testimonial[] }) {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const total = items.length;

  const go = (d: number) => {
    setDir(d);
    setI((p) => (p + d + total) % total);
  };

  const t = items[i];

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-ink/55">
          <span className="text-navy">{i + 1}</span> / {total} student reviews
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="grid h-10 w-10 place-items-center rounded-full border border-navy/15 text-navy transition-colors hover:bg-navy hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="grid h-10 w-10 place-items-center rounded-full border border-navy/15 text-navy transition-colors hover:bg-navy hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative mt-4 min-h-[15rem] overflow-hidden rounded-3xl border border-navy/10 bg-white p-8 shadow-sm">
        <Quote className="absolute right-6 top-6 h-14 w-14 text-navy/5" aria-hidden="true" />
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={i}
            custom={dir}
            initial={{ opacity: 0, x: dir * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -40 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: t.rating }).map((_, s) => (
                <Star key={s} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <p className="mt-4 font-display text-xl font-medium leading-relaxed text-navy md:text-2xl">
              “{t.text.trim()}”
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-navy text-xl">{t.flag}</span>
              <div>
                <p className="font-bold text-navy">{t.name.trim()}</p>
                <p className="text-sm text-ink/55">{t.country}</p>
              </div>
              <span className="ml-auto rounded-full bg-success/10 px-3 py-1 text-xs font-bold text-success">
                {t.result}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex flex-wrap justify-center gap-1.5">
        {items.map((_, d) => (
          <button
            key={d}
            onClick={() => {
              setDir(d > i ? 1 : -1);
              setI(d);
            }}
            aria-label={`Go to testimonial ${d + 1}`}
            className={`h-2 rounded-full transition-all ${d === i ? "w-6 bg-gold" : "w-2 bg-navy/20 hover:bg-navy/40"}`}
          />
        ))}
      </div>
    </div>
  );
}
