"use client";

import { motion } from "framer-motion";
import { Play, Quote } from "lucide-react";
import { videoTestimonials } from "@/lib/data";

export function VideoTestimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {videoTestimonials.map((v, i) => (
        <motion.button
          key={v.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className={`group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-3xl bg-gradient-to-br ${v.theme} p-6 text-left text-white`}
          aria-label={`Play video testimonial from ${v.name}`}
        >
          <Quote className="absolute right-6 top-6 h-10 w-10 text-white/15" aria-hidden="true" />
          <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-navy shadow-lg transition-transform group-hover:scale-110">
            <Play className="h-6 w-6 translate-x-0.5 fill-navy" />
          </span>
          <span className="absolute right-5 top-5 rounded-full bg-black/30 px-2 py-0.5 text-xs font-medium backdrop-blur">
            {v.length}
          </span>
          <div className="relative">
            <span className="text-3xl">{v.flag}</span>
            <p className="mt-2 font-display text-lg font-bold">{v.name}</p>
            <p className="text-sm text-white/70">{v.country}</p>
            <span className="mt-3 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-bold backdrop-blur">
              {v.result}
            </span>
          </div>
        </motion.button>
      ))}
    </div>
  );
}
