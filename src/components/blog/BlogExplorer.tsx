"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

export function BlogExplorer({ posts, categories }: { posts: BlogPost[]; categories: string[] }) {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchCat = cat === "All" || p.category === cat;
      const matchQ = q.trim() === "" || p.title.toLowerCase().includes(q.toLowerCase());
      return matchCat && matchQ;
    });
  }, [posts, cat, q]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" aria-hidden="true" />
          <label htmlFor="blog-search" className="sr-only">Search articles</label>
          <input
            id="blog-search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search articles..."
            className="w-full rounded-full border border-navy/12 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-navy focus:outline-none"
          />
        </div>
        <p className="text-sm text-ink/50">{filtered.length} articles</p>
      </div>

      <div className="hide-scrollbar mt-6 flex gap-2 overflow-x-auto pb-2">
        {["All", ...categories].map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              cat === c ? "bg-navy text-white" : "bg-mist text-navy hover:bg-navy/10"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="card-hover group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6">
            <span className="w-fit rounded-full bg-navy/5 px-3 py-1 text-xs font-bold text-navy-600">{p.category}</span>
            <h3 className="mt-4 font-display text-lg font-bold leading-snug text-navy group-hover:text-navy-600">{p.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65 line-clamp-3">{p.excerpt}</p>
            <div className="mt-4 flex items-center justify-between text-xs text-ink/45">
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {p.readTime} min</span>
              <span className="inline-flex items-center gap-1 font-bold text-gold group-hover:gap-2 transition-all">Read <ArrowRight className="h-3.5 w-3.5" /></span>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-ink/50">No articles found. Try a different search or category.</p>
      )}
    </div>
  );
}
