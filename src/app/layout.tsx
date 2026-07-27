import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { JsonLd } from "@/components/JsonLd";
import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { organizationSchema, localBusinessSchema, defaultKeywords } from "@/lib/seo";
import { site } from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#091B63",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ACE Language Centre | English Language School in Kuala Lumpur, Malaysia",
    template: "%s",
  },
  description: site.description,
  keywords: defaultKeywords,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.legalName,
  alternates: { canonical: site.url },
  icons: { icon: "/crest.svg" },
  openGraph: {
    title: "ACE Language Centre | Learn English in Malaysia",
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_MY",
    images: [{ url: "/gallery/ace-002.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ACE Language Centre | Learn English in Malaysia",
    description: site.description,
    images: ["/gallery/ace-002.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="bg-white text-ink antialiased">
        <JsonLd data={[organizationSchema(), localBusinessSchema()]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <LanguageProvider>
          <TopBar />
          <Navbar />
          <main id="main" className="pb-16 md:pb-0">
            {children}
          </main>
          <Footer />
          <FloatingButtons />
        </LanguageProvider>
      </body>
    </html>
  );
}
