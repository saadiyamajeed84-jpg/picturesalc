import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-mesh">
      <div className="container-x grid min-h-[70vh] place-items-center py-20 text-center text-white">
        <div>
          <p className="font-display text-7xl font-extrabold text-gold md:text-9xl">404</p>
          <h1 className="mt-4 font-display text-3xl font-bold">Page not found</h1>
          <p className="mx-auto mt-3 max-w-md text-white/70">
            Sorry, we couldn&apos;t find that page. Let&apos;s get you back on track to ACE your English.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-navy hover:bg-gold-light">
              <Home className="h-4 w-4" /> Back Home
            </Link>
            <Link href="/courses" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
              Explore Courses <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
