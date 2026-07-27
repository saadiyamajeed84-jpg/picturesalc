"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { useLang } from "@/components/i18n/LanguageProvider";
import { courses } from "@/lib/courses";
import { studentServices, aiTools } from "@/lib/data";

const megaMenus = {
  courses: {
    title: "Explore Courses",
    href: "/courses",
    items: courses.map((c) => ({ label: c.title, href: `/courses/${c.slug}`, note: c.cefr })),
  },
  services: {
    title: "Student Services",
    href: "/student-services",
    items: studentServices.map((s) => ({ label: s.title, href: s.href, note: "" })),
  },
  ai: {
    title: "AI Learning Tools",
    href: "/ai-learning",
    items: aiTools.slice(0, 8).map((a) => ({ label: a.title, href: "/ai-learning", note: "" })),
  },
} as const;

const nav = [
  { label: "Home", tkey: "nav.home", href: "/" },
  { label: "About Us", tkey: "nav.about", href: "/about" },
  { label: "Courses", tkey: "nav.courses", href: "/courses", mega: "courses" as const },
  { label: "Student Services", tkey: "nav.services", href: "/student-services", mega: "services" as const },
  { label: "AI Tools", tkey: "nav.ai", href: "/ai-learning", mega: "ai" as const },
  { label: "Gallery", tkey: "nav.gallery", href: "/gallery" },
  { label: "Blog", tkey: "nav.blog", href: "/blog" },
  { label: "Contact", tkey: "nav.contact", href: "/contact" },
];

export function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActive(null);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-[0_8px_30px_-12px_rgba(9,27,99,0.25)] backdrop-blur-lg" : "bg-white"
      }`}
      onMouseLeave={() => setActive(null)}
    >
      <div className="container-x flex h-[76px] items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {nav.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <div key={item.label} className="relative" onMouseEnter={() => setActive(item.mega ?? null)}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.92rem] font-semibold transition-colors ${
                    isActive ? "text-navy" : "text-ink/70 hover:text-navy"
                  }`}
                >
                  {item.mega === "ai" && <Sparkles className="h-3.5 w-3.5 text-gold" aria-hidden="true" />}
                  {t(item.tkey)}
                  {item.mega && <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />}
                </Link>
                {isActive && (
                  <span className="absolute -bottom-0.5 left-3.5 right-3.5 h-0.5 rounded-full bg-gold" />
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/student-portal"
            className="hidden text-sm font-semibold text-ink/70 hover:text-navy xl:block"
          >
            {t("common.studentPortal")}
          </Link>
          <Link
            href="/apply"
            className="hidden items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-navy shadow-[0_10px_26px_-10px_rgba(214,160,25,0.8)] transition-all hover:bg-gold-light md:inline-flex"
          >
            {t("cta.enquire")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-full border border-navy/10 text-navy lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mega menu */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-full hidden border-t border-navy/5 bg-white/95 shadow-[0_24px_50px_-20px_rgba(9,27,99,0.35)] backdrop-blur-xl lg:block"
            onMouseEnter={() => setActive(active)}
          >
            <div className="container-x py-7">
              {(() => {
                const menu = megaMenus[active as keyof typeof megaMenus];
                return (
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">{menu.title}</p>
                      <Link href={menu.href} className="text-sm font-semibold text-navy hover:underline">
                        View all →
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4">
                      {menu.items.map((it) => (
                        <Link
                          key={it.label + it.href}
                          href={it.href}
                          className="group flex items-center justify-between rounded-xl px-4 py-3 transition-colors hover:bg-mist"
                        >
                          <span className="text-sm font-semibold text-ink group-hover:text-navy">{it.label}</span>
                          {it.note && (
                            <span className="rounded-full bg-navy/5 px-2 py-0.5 text-[0.65rem] font-bold text-navy-600">
                              {it.note}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-navy/5 bg-white lg:hidden"
          >
            <nav className="container-x flex flex-col gap-1 py-4" aria-label="Mobile navigation">
              {nav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-xl px-4 py-3 text-base font-semibold text-ink hover:bg-mist"
                >
                  {t(item.tkey)}
                </Link>
              ))}
              <Link href="/student-portal" className="rounded-xl px-4 py-3 text-base font-semibold text-ink hover:bg-mist">
                {t("common.studentPortal")}
              </Link>
              <Link
                href="/apply"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-base font-bold text-navy"
              >
                {t("cta.enquire")} <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="mt-3">
                <LanguageSwitcher variant="block" />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
