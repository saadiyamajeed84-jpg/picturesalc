"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, Star, Globe2, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-mesh text-white">
      <Image
        src="/gallery/ace-001.jpg"
        alt="ACE Language Centre campus and students in Kuala Lumpur"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />

      <div className="container-x relative grid gap-12 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            August 2026 intake now open — seats filling fast!
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-6 text-sm font-bold uppercase tracking-[0.22em] text-gold"
          >
            ACE Language Centre
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 font-display text-5xl font-extrabold leading-[1.02] md:text-6xl xl:text-7xl"
          >
            ACE Your English.
            <br />
            <span className="text-gradient-gold">Build Your Future.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/80"
          >
            Malaysia&apos;s premier English language centre for international students from{" "}
            <strong className="font-semibold text-white">100+ countries</strong> — learn English, study in Malaysia,
            and unlock global opportunities in the heart of Kuala Lumpur.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 grid max-w-lg grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4"
          >
            {[
              { icon: Globe2, value: 100, suffix: "+", label: "Countries" },
              { icon: Award, value: 7, suffix: "+", label: "Years Excellence" },
              { icon: Users, value: 8000, suffix: "+", label: "Graduates" },
              { icon: Star, value: 7.5, suffix: "", label: "Avg IELTS", raw: "7.5" },
            ].map((s) => (
              <div key={s.label}>
                <s.icon className="mb-1 h-5 w-5 text-gold" aria-hidden="true" />
                <p className="font-display text-2xl font-extrabold">
                  {s.raw ? s.raw : <CountUp value={s.value} suffix={s.suffix} />}
                </p>
                <p className="text-xs text-white/60">{s.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Button href="/courses" variant="gold">
              Explore Courses <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/why-ace" variant="white" className="bg-white/10 text-white hover:bg-white/20">
              <Play className="h-4 w-4" /> Why ACE?
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 shadow-glow">
            <Image
              src="/gallery/ace-004.jpg"
              alt="Happy international students at ACE Language Centre celebrating their English success"
              width={720}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
            <button
              className="absolute inset-0 grid place-items-center"
              aria-label="Watch our story"
            >
              <span className="grid h-16 w-16 place-items-center rounded-full bg-white/90 text-navy shadow-lg transition-transform hover:scale-110">
                <Play className="h-6 w-6 translate-x-0.5 fill-navy" />
              </span>
            </button>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-4 py-1 text-xs font-medium backdrop-blur">
              Watch Our Story
            </span>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 top-10 flex items-center gap-3 rounded-2xl bg-navy/90 p-3 pr-5 shadow-lg backdrop-blur"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-success/20">
              <CheckCircle2 className="h-5 w-5 text-success" />
            </span>
            <div>
              <p className="text-sm font-bold">Visa Approved</p>
              <p className="text-xs text-white/60">Ahmed, Saudi Arabia · 32 days</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-3 bottom-16 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 text-navy shadow-lg"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gold/20">
              <Star className="h-5 w-5 fill-gold text-gold" />
            </span>
            <div>
              <p className="text-sm font-bold">IELTS 7.5 achieved</p>
              <p className="text-xs text-ink/50">Lin, China · 10 weeks</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
