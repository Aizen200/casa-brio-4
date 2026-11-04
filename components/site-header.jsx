"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { whatsappUrl } from "@/components/whatsapp";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
let A = Menu;
let h = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Villa",
    href: "/about-villa",
  },
  {
    label: "Party Room",
    href: "/party-room",
    highlight: !0,
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
function U() {
  return (
    <Link href="/" aria-label="Casa Brio" className="group inline-flex items-center">
      <span
        className={
          "\n          text-[16px]\n          font-semibold\n          tracking-[0.32em]\n          text-white\n          transition-colors\n          duration-300\n          group-hover:text-[#d4af37]\n          sm:text-[18px]\n        "
        }
      >
        CASA BRIO
      </span>
    </Link>
  );
}
export const SiteHeader = function ({ hideOnInitial: t } = {}) {
  let s = usePathname(),
    [r, d] = useState(!1),
    [c, p] = useState(!1);
  return (
    useEffect(() => {
      let t = () => {
        p(window.scrollY > 40);
      };
      return (
        t(),
        window.addEventListener("scroll", t, {
          passive: !0,
        }),
        () => {
          window.removeEventListener("scroll", t);
        }
      );
    }, []),
    useEffect(() => {
      d(!1);
    }, [s]),
    (
      <header
        suppressHydrationWarning={!0}
        className={`
        fixed
        inset-x-0
        top-0
        z-50
        w-full
        transition-all
        duration-500
        ease-out
        ${!t || c || r ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"}
        ${c ? "border-b border-white/[0.09] bg-[#08080a]/85 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)]" : "border-b border-white/[0.06] bg-[#08080a]/30 backdrop-blur-xl"}
      `}
      >
        <div
          className={
            "\n          mx-auto\n          flex\n          h-[76px]\n          w-full\n          max-w-7xl\n          items-center\n          justify-between\n          px-6\n          sm:px-8\n          lg:px-12\n        "
          }
        >
          <div className="flex min-w-[180px] items-center">
            <U />
          </div>
          <nav
            className={
              "\n            hidden\n            items-center\n            justify-center\n            gap-8\n            lg:flex\n            xl:gap-11\n          "
            }
            aria-label="Main navigation"
          >
            {h.map((t) => {
              let n = s === t.href;
              return (
                <Link
                  href={t.href}
                  className={`
                  group
                  relative
                  flex
                  h-[76px]
                  items-center
                  text-[12px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  transition-colors
                  duration-300

                  ${t.highlight ? (n ? "text-[#e4c45f]" : "text-[#d4af37] hover:text-[#f1d77b]") : n ? "text-white" : "text-white/65 hover:text-white"}
                `}
                  key={t.label}
                >
                  {t.label}
                  <span
                    className={
                      "\n                    pointer-events-none\n                    absolute\n                    bottom-[22px]\n                    left-0\n                    h-px\n                    w-0\n                    bg-[#d4af37]\n                    opacity-0\n                    transition-all\n                    duration-300\n                    ease-out\n                    group-hover:w-full\n                    group-hover:opacity-100\n                  "
                    }
                  />
                </Link>
              );
            })}
          </nav>
          <div className="hidden shrink-0 justify-end lg:flex">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={
                "\n              inline-flex\n              items-center\n              justify-center\n              border\n              border-[rgba(212,175,55,0.4)]\n              bg-[#121015]/60\n              px-4\n              py-2\n              text-[11px]\n              font-semibold\n              uppercase\n              tracking-[0.2em]\n              text-[#f4efe6]\n              backdrop-blur-md\n              transition-all\n              duration-300\n              hover:border-[#d4af37]\n              hover:bg-[#d4af37]\n              hover:text-[#08080a]\n              hover:shadow-[0_0_15px_rgba(212,175,55,0.35)]\n              active:scale-[0.98]\n            "
              }
            >
              <span>BOOK NOW</span>
            </a>
          </div>
          <button
            type="button"
            onClick={() => d((t) => !t)}
            aria-label={r ? "Close menu" : "Open menu"}
            className={
              "\n            flex\n            h-10\n            w-10\n            items-center\n            justify-center\n            border\n            border-white/10\n            bg-white/[0.03]\n            text-white\n            transition-all\n            duration-300\n            hover:border-[#d4af37]/40\n            hover:text-[#d4af37]\n            lg:hidden\n          "
            }
          >
            {r ? (
              <X className="h-[19px] w-[19px]" strokeWidth={1.5} />
            ) : (
              <A className="h-[19px] w-[19px]" strokeWidth={1.5} />
            )}
          </button>
        </div>
        <div
          className={`
          overflow-hidden
          border-t
          border-white/[0.06]
          bg-[#08080a]/95
          backdrop-blur-2xl
          transition-all
          duration-500
          lg:hidden
          ${r ? "max-h-[520px] opacity-100" : "pointer-events-none max-h-0 opacity-0"}
        `}
        >
          <nav
            className={
              "\n            mx-auto\n            flex\n            max-w-[1600px]\n            flex-col\n            px-6\n            py-5\n            sm:px-8\n          "
            }
            aria-label="Mobile navigation"
          >
            {h.map((t) => {
              let n = s === t.href;
              return (
                <Link
                  href={t.href}
                  onClick={() => d(!1)}
                  className={`
                  group
                  relative
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/[0.06]
                  py-4
                  text-[12px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  transition-colors
                  duration-300

                  ${t.highlight ? "text-[#d4af37] hover:text-[#f1d77b]" : n ? "text-white" : "text-white/65 hover:text-white"}
                `}
                  key={t.label}
                >
                  <span>{t.label}</span>
                  <span
                    className={
                      "\n                    pointer-events-none\n                    absolute\n                    bottom-0\n                    left-0\n                    h-px\n                    w-0\n                    bg-[#d4af37]\n                    opacity-0\n                    transition-all\n                    duration-300\n                    ease-out\n                    group-hover:w-16\n                    group-hover:opacity-100\n                  "
                    }
                  />
                </Link>
              );
            })}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => d(!1)}
              className={
                "\n              mt-6\n              flex\n              items-center\n              justify-center\n              border\n              border-[rgba(212,175,55,0.4)]\n              bg-[#121015]/60\n              px-4\n              py-3\n              text-[11.5px]\n              font-semibold\n              uppercase\n              tracking-[0.2em]\n              text-[#f4efe6]\n              backdrop-blur-md\n              transition-all\n              duration-300\n              hover:border-[#d4af37]\n              hover:bg-[#d4af37]\n              hover:text-[#08080a]\n              hover:shadow-[0_0_15px_rgba(212,175,55,0.35)]\n              active:scale-[0.98]\n            "
              }
            >
              <span>BOOK NOW</span>
            </a>
          </nav>
        </div>
      </header>
    )
  );
};
