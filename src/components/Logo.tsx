import Link from "next/link";
import Image from "next/image";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const aceColor = variant === "light" ? "#ffffff" : "#091B63";
  const langColor = variant === "light" ? "#ffffff" : "#091B63";
  const divider = variant === "light" ? "rgba(255,255,255,0.3)" : "rgba(9,27,99,0.2)";

  return (
    <Link href="/" aria-label="ACE Language Centre home" className="flex items-center gap-3">
      <Image
        src="/crest.svg"
        alt="ACE Language Centre crest"
        width={52}
        height={57}
        className="h-[52px] w-auto drop-shadow-sm"
        priority
      />
      <span aria-hidden="true" className="h-11 w-px" style={{ backgroundColor: divider }} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.6rem] font-extrabold italic leading-none tracking-tight">
          <span style={{ color: aceColor }}>A</span>
          <span className="text-gold">CE</span>
        </span>
        <span
          className="mt-0.5 font-display text-[0.82rem] font-bold tracking-[0.12em]"
          style={{ color: langColor }}
        >
          LANGUAGE CENTRE
        </span>
        <span className="mt-1 text-[0.5rem] font-bold tracking-[0.18em] text-gold">
          ACHIEVE · COMMUNICATE · EXCEL
        </span>
      </span>
    </Link>
  );
}
