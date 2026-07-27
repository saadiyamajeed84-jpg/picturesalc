"use client";

import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Plus, Images } from "lucide-react";
import { galleryImages, galleryCategories, type GalleryImage } from "@/lib/gallery";

const PAGE_SIZE = 24;

export function GalleryClient() {
  const [cat, setCat] = useState<string>("All");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const filtered = useMemo<GalleryImage[]>(
    () => (cat === "All" ? galleryImages : galleryImages.filter((g) => g.category === cat)),
    [cat],
  );

  const shown = filtered.slice(0, visible);

  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [cat]);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length],
  );
  const next = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % filtered.length)),
    [filtered.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, prev, next]);

  const counts = useMemo(() => {
    const m: Record<string, number> = { All: galleryImages.length };
    for (const c of galleryCategories) m[c] = galleryImages.filter((g) => g.category === c).length;
    return m;
  }, []);

  const tabs = ["All", ...galleryCategories];

  return (
    <div>
      {/* Category filter */}
      <div className="hide-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-2">
        {tabs.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              cat === c ? "bg-navy text-white" : "bg-mist text-navy hover:bg-navy/10"
            }`}
          >
            {c}
            <span
              className={`rounded-full px-1.5 text-xs ${
                cat === c ? "bg-white/20 text-white" : "bg-navy/10 text-navy-600"
              }`}
            >
              {counts[c]}
            </span>
          </button>
        ))}
      </div>

      <p className="no-justify mt-4 flex items-center gap-2 text-sm text-ink/55">
        <Images className="h-4 w-4" /> Showing {shown.length} of {filtered.length} official ACE photos
      </p>

      {/* Masonry grid */}
      <div className="mt-6 columns-2 gap-3 sm:columns-3 lg:columns-4 [&>*]:mb-3">
        {shown.map((g, i) => (
          <motion.button
            key={g.src}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: (i % PAGE_SIZE) * 0.015 }}
            onClick={() => setLightbox(i)}
            className="group relative block w-full overflow-hidden rounded-2xl focus-visible:outline-gold"
            aria-label={`Open image: ${g.alt}`}
          >
            <Image
              src={g.src}
              alt={g.alt}
              width={400}
              height={300}
              loading="lazy"
              sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[0.65rem] font-bold text-navy opacity-0 transition-opacity group-hover:opacity-100">
              {g.category}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Load more */}
      {visible < filtered.length && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-navy-600"
          >
            <Plus className="h-4 w-4" /> Load More Photos
          </button>
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchStartX.current;
              if (dx > 50) prev();
              else if (dx < -50) next();
              touchStartX.current = null;
            }}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-6"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-6"
            >
              <ChevronRight className="h-7 w-7" />
            </button>

            <motion.figure
              key={filtered[lightbox].src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative flex max-h-[86vh] max-w-5xl flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                width={1280}
                height={960}
                className="max-h-[78vh] w-auto rounded-xl object-contain"
                priority
              />
              <figcaption className="mt-3 flex items-center gap-3 text-center text-sm text-white/80">
                <span className="rounded-full bg-gold px-3 py-0.5 text-xs font-bold text-navy">
                  {filtered[lightbox].category}
                </span>
                {filtered[lightbox].alt}
                <span className="text-white/50">
                  ({lightbox + 1}/{filtered.length})
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
