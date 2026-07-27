"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import { SocialLinks } from "@/components/SocialIcons";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { useLang } from "@/components/i18n/LanguageProvider";

export function TopBar() {
  const { t } = useLang();
  return (
    <div className="relative z-[60] bg-navy text-white">
      <div className="container-x flex h-11 items-center justify-between gap-4 text-[0.78rem]">
        <div className="flex items-center gap-5">
          <a href={`tel:${site.phoneHref}`} className="flex items-center gap-1.5 transition-colors hover:text-gold">
            <Phone className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            <span className="hidden sm:inline">{site.phone}</span>
          </a>
          <a href={`mailto:${site.email}`} className="hidden items-center gap-1.5 transition-colors hover:text-gold md:flex">
            <Mail className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {site.email}
          </a>
          <span className="hidden items-center gap-1.5 lg:flex">
            <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {t("topbar.location")}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/student-portal" className="font-semibold transition-colors hover:text-gold">
            {t("common.studentPortal")}
          </Link>
          <Link href="/apply" className="hidden font-semibold transition-colors hover:text-gold sm:inline">
            {t("common.payment")}
          </Link>
          <LanguageSwitcher variant="bar" />
          <SocialLinks className="hidden sm:flex" iconClass="h-3.5 w-3.5" />
        </div>
      </div>
    </div>
  );
}
