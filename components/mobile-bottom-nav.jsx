"use client";

import { Building2, House, Phone, Wine } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
let l = House;
let c = Wine;
let f = [
  {
    label: "Home",
    href: "/",
    icon: l,
  },
  {
    label: "About Villa",
    href: "/about-villa",
    icon: Building2,
  },
  {
    label: "Party Room",
    href: "/party-room",
    icon: c,
    highlight: !0,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Phone,
  },
];
function MobileBottomNav() {
  let e = usePathname();
  return (
    <nav
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0c0a10]/95 backdrop-blur-xl border-t border-[rgba(212,175,55,0.22)] shadow-[0_-10px_35px_rgba(0,0,0,0.9)]"
    >
      <div className="grid grid-cols-4 items-center justify-around px-2 pt-2 pb-2.5">
        {f.map((n) => {
          let O = n.icon,
            a = e === n.href || ("/" !== n.href && e.startsWith(n.href + "/"));
          return n.highlight ? (
            <Link
              href={n.href}
              className="group relative flex flex-col items-center justify-center gap-1.5 py-1 transition-colors"
              key={n.href}
            >
              {a && (
                <span className="absolute -top-2 h-0.5 w-7 rounded-full bg-[#ffd700] shadow-[0_0_10px_rgba(255,215,0,0.8)]" />
              )}
              <div
                className={`transition-transform duration-300 ${a ? "scale-110" : "group-hover:scale-105"}`}
              >
                <O className="h-5 w-5 text-[#ffd700] drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]" />
              </div>
              <span className="font-sans text-[10.5px] tracking-[0.14em] uppercase font-bold text-[#ffd700] drop-shadow-[0_0_6px_rgba(255,215,0,0.4)]">
                {n.label}
              </span>
            </Link>
          ) : (
            <Link
              href={n.href}
              className={`group relative flex flex-col items-center justify-center gap-1.5 py-1 transition-colors ${a ? "text-[#d4af37]" : "text-[#9e988f] hover:text-[#f4efe6]"}`}
              key={n.href}
            >
              {a && (
                <span className="absolute -top-2 h-0.5 w-7 rounded-full bg-[#d4af37] shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
              )}
              <div
                className={`transition-transform duration-300 ${a ? "scale-110 text-[#d4af37]" : "group-hover:scale-105"}`}
              >
                <O className="h-5 w-5" />
              </div>
              <span
                className={`font-sans text-[10.5px] tracking-[0.14em] uppercase transition-colors ${a ? "font-semibold text-[#d4af37]" : "font-normal text-[#9e988f] group-hover:text-[#f4efe6]"}`}
              >
                {n.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
export { MobileBottomNav };
export default MobileBottomNav;
