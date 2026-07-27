"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MessageCircle, Phone, ArrowUp, X, MessagesSquare } from "lucide-react";
import { site } from "@/lib/site";

export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Sticky mobile CTA bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-white/10 bg-navy/95 backdrop-blur md:hidden">
        <a href={`tel:${site.phoneHref}`} className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-semibold text-white">
          <Phone className="h-4 w-4 text-gold" /> Call
        </a>
        <a href={`https://wa.me/${site.whatsapp}`} className="flex flex-1 items-center justify-center gap-2 border-x border-white/10 py-3 text-sm font-semibold text-white">
          <MessageCircle className="h-4 w-4 text-success" /> WhatsApp
        </a>
        <Link href="/apply" className="flex flex-1 items-center justify-center gap-2 bg-gold py-3 text-sm font-bold text-navy">
          Enquire
        </Link>
      </div>

      {/* Desktop floating stack */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {chatOpen && (
          <div className="w-72 rounded-2xl border border-navy/10 bg-white p-4 shadow-[0_24px_60px_-20px_rgba(9,27,99,0.4)]">
            <div className="mb-2 flex items-center justify-between">
              <p className="font-display text-sm font-bold text-navy">ACE Live Chat</p>
              <button onClick={() => setChatOpen(false)} aria-label="Close chat"><X className="h-4 w-4 text-ink/50" /></button>
            </div>
            <p className="text-sm text-ink/70">Hi! 👋 How can we help you today? Chat with our student advisors on WhatsApp for an instant reply.</p>
            <a href={`https://wa.me/${site.whatsapp}`} className="mt-3 flex items-center justify-center gap-2 rounded-full bg-success py-2.5 text-sm font-semibold text-white">
              <MessageCircle className="h-4 w-4" /> Start WhatsApp Chat
            </a>
          </div>
        )}
        <a
          href={`https://wa.me/${site.whatsapp}`}
          aria-label="Chat on WhatsApp"
          className="hidden h-14 w-14 place-items-center rounded-full bg-success text-white shadow-lg transition-transform hover:scale-105 md:grid"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <button
          onClick={() => setChatOpen((v) => !v)}
          aria-label="Open live chat"
          className="hidden h-12 w-12 place-items-center rounded-full bg-navy text-white shadow-lg transition-transform hover:scale-105 md:grid"
        >
          <MessagesSquare className="h-5 w-5" />
        </button>
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="grid h-10 w-10 place-items-center rounded-full bg-white text-navy shadow-lg ring-1 ring-navy/10 transition-transform hover:scale-105"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        )}
      </div>
    </>
  );
}
