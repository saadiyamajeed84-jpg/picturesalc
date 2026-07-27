import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "gold" | "outline" | "ghost" | "white";

const styles: Record<Variant, string> = {
  primary:
    "bg-navy text-white hover:bg-navy-600 shadow-[0_10px_30px_-10px_rgba(9,27,99,0.6)]",
  gold: "bg-gold text-navy hover:bg-gold-light shadow-[0_10px_30px_-10px_rgba(214,160,25,0.7)]",
  outline: "border-2 border-navy/20 text-navy hover:border-navy hover:bg-navy hover:text-white",
  ghost: "text-navy hover:bg-navy/5",
  white: "bg-white text-navy hover:bg-mist border border-white/20",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type,
  ...rest
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
} & Record<string, unknown>) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-gold ${styles[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} className={cls} {...rest}>
      {children}
    </button>
  );
}
