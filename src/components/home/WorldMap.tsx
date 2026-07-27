"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Users } from "lucide-react";
import { worldRegions } from "@/lib/data";

export function WorldMap() {
  const [active, setActive] = useState(0);
  const r = worldRegions[active];

  return (
    <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
        {/* Stylised dotted world silhouette */}
        <svg viewBox="0 0 100 62" className="w-full" role="img" aria-label="World map showing where ACE students come from">
          <defs>
            <pattern id="dots" width="1.6" height="1.6" patternUnits="userSpaceOnUse">
              <circle cx="0.5" cy="0.5" r="0.35" fill="rgba(255,255,255,0.14)" />
            </pattern>
          </defs>
          <rect width="100" height="62" fill="url(#dots)" />
          {worldRegions.map((region, i) => (
            <g key={region.region}>
              <motion.circle
                cx={region.x}
                cy={region.y}
                r={active === i ? 3 : 2}
                fill={active === i ? "#d6a019" : "#3ba7ff"}
                className="cursor-pointer"
                onClick={() => setActive(i)}
                animate={{ scale: active === i ? [1, 1.25, 1] : 1 }}
                transition={{ duration: 1.5, repeat: active === i ? Infinity : 0 }}
              />
              {active === i && (
                <circle cx={region.x} cy={region.y} r="5" fill="none" stroke="#d6a019" strokeWidth="0.4" opacity="0.6" />
              )}
            </g>
          ))}
        </svg>
        <div className="mt-4 flex flex-wrap gap-2">
          {worldRegions.map((region, i) => (
            <button
              key={region.region}
              onClick={() => setActive(i)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                active === i ? "bg-gold text-navy" : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              {region.region}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        key={active}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
      >
        <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-gold">
          <MapPin className="h-4 w-4" /> {r.region}
        </span>
        <p className="mt-4 font-display text-5xl font-extrabold text-white">{r.students}</p>
        <p className="mt-1 flex items-center gap-2 text-sm text-white/60">
          <Users className="h-4 w-4" /> students enrolled
        </p>
        <p className="mt-5 leading-relaxed text-white/75">{r.countries}</p>
        <p className="mt-4 text-sm text-white/50">
          Join a truly international classroom and build friendships that span the globe.
        </p>
      </motion.div>
    </div>
  );
}
