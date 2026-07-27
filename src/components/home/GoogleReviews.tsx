"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { reviews } from "@/lib/data";

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.15-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M5.85 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.67-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.67 2.84C6.71 7.3 9.14 5.38 12 5.38z" />
    </svg>
  );
}

export function GoogleReviews() {
  const list = [...reviews, ...reviews].slice(0, 8);
  return (
    <div>
      <div className="mx-auto flex max-w-md flex-col items-center gap-2 rounded-3xl border border-navy/10 bg-white p-6 text-center shadow-soft">
        <GoogleG className="h-8 w-8" />
        <p className="font-display text-4xl font-extrabold text-navy">4.9</p>
        <div className="flex gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-gold text-gold" />)}</div>
        <p className="text-sm text-ink/55">Based on 1,280+ verified Google reviews</p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((r, i) => (
          <motion.div
            key={r.name + i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
            className="flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-5"
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-0.5">{Array.from({ length: r.rating }).map((_, s) => <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" />)}</div>
              <GoogleG className="h-4 w-4" />
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70 line-clamp-4">“{r.text}”</p>
            <div className="mt-4 flex items-center gap-2.5 border-t border-navy/5 pt-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-navy text-base">{r.flag}</span>
              <div>
                <p className="text-xs font-bold text-navy">{r.name}</p>
                <p className="text-[0.7rem] text-ink/50">{r.country}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
