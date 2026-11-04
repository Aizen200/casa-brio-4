"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SiteHeader } from "@/components/site-header";
import Link from "next/link";
import { whatsappUrl } from "@/components/whatsapp";
import { ArrowRight, ShieldCheck, Trophy, Waves, Wine } from "lucide-react";
let d = [
    {
      src: "/images/bungalow/master-suite-view.jpg",
      alt: "Casa Brio master suite with panoramic mountain views",
      position: "object-center",
    },
    {
      src: "/images/bungalow/pool-night-pergola.jpg",
      alt: "Private sapphire pool at night with pergola lighting",
      position: "object-center",
    },
    {
      src: "/images/bungalow/bedroom-suite-2.jpg",
      alt: "Luxury master bedroom suite with valley views and hanging chair",
      position: "object-center",
    },
    {
      src: "/images/bungalow/estate-balcony-view.jpg",
      alt: "Private balcony seating with panoramic Lonavala valley views",
      position: "object-center",
    },
    {
      src: "/images/bungalow/bedroom-suite-3.jpg",
      alt: "Luxury bedroom suite with wooden slat feature wall",
      position: "object-center",
    },
    {
      src: "/images/bungalow/speakeasy-snooker-neon.png",
      alt: "Party room with snooker table",
      position: "object-center",
    },
    {
      src: "/images/bungalow/interior-portrait-1.jpg",
      alt: "Premium interior suite portrait",
      position: "object-center",
    },
    {
      src: "/images/bungalow/pool-day-pergola.jpg",
      alt: "Casa Brio private pool and wooden pergola daytime",
      position: "object-center",
    },
  ],
  c = [
    {
      num: "01",
      tag: "PRIVACY",
      icon: ShieldCheck,
      value: "Fully Private",
      label: "No other guests, nothing shared",
    },
    {
      num: "02",
      tag: "POOL",
      icon: Waves,
      value: "Private Swimming Pool",
      label: "Lit-up deck with sunbeds",
    },
    {
      num: "03",
      tag: "SPORTS",
      icon: Trophy,
      value: "Box Cricket Turf",
      label: "Floodlights for night games",
    },
    {
      num: "04",
      tag: "PARTY",
      icon: Wine,
      value: "Party Room & Bar",
      label: "Snooker, music and games",
    },
  ];
export const Hero = function () {
  let e = useRef(null),
    [m, x] = useState(0),
    [g, h] = useState(null);
  useEffect(() => {
    let e = setInterval(() => {
      (h(m), x((e) => (e + 1) % d.length));
    }, 7e3);
    return () => clearInterval(e);
  }, [m]);
  let { scrollYProgress: p } = useScroll({
      target: e,
      offset: ["start start", "end start"],
    }),
    u = useTransform(p, [0, 1], ["0%", "12%"]),
    f = useTransform(p, [0, 1], ["0px", "-40px"]),
    b = useTransform(p, [0, 0.8], [1, 0]),
    v = [0.16, 1, 0.3, 1];
  return (
    <section
      ref={e}
      id="home"
      className="relative min-h-screen flex flex-col justify-between bg-[#08080a] text-[#f4efe6] overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{
            y: u,
          }}
          className="absolute inset-0 will-change-transform"
        >
          {d.map((e, t) => {
            let n = t === m;
            return n || t === g || null === g ? (
              <motion.div
                className="absolute inset-0"
                initial={!1}
                animate={{
                  opacity: +!!n,
                }}
                transition={{
                  duration: 2.2,
                  ease: "easeInOut",
                }}
                key={e.src}
              >
                <motion.img
                  src={e.src}
                  alt={e.alt}
                  className={`h-full w-full object-cover ${e.position} brightness-[0.72] contrast-[1.05]`}
                  animate={{
                    scale: n ? [1.04, 1] : 1.04,
                  }}
                  transition={{
                    duration: 9,
                    ease: "linear",
                  }}
                />
              </motion.div>
            ) : null;
          })}
          {null === g && (
            <motion.div
              className="absolute inset-0"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1.8,
                ease: "easeOut",
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[#08080a]/90 via-[#08080a]/55 to-[#08080a]/30 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-[#08080a] via-[#08080a]/85 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#08080a]/75 to-transparent pointer-events-none" />
        </motion.div>
      </div>
      <SiteHeader />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-12 sm:px-8 sm:pt-40 md:pt-44 lg:px-12 lg:pt-48 flex flex-col items-center text-center">
        <motion.div
          style={{
            y: f,
            opacity: b,
          }}
          className="w-full max-w-4xl flex flex-col items-center text-center will-change-transform"
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: v,
            }}
            className="mb-6 flex items-center justify-center gap-3.5"
          >
            <span className="h-px w-8 bg-[#d4af37]" />
            <span className="eyebrow text-xs whitespace-nowrap tracking-[0.12em] min-[390px]:tracking-[0.2em] sm:tracking-[0.28em] font-semibold text-[#d4af37]">
              PRIVATE VILLA • LONAVALA
            </span>
            <span className="h-px w-8 bg-[#d4af37]" />
          </motion.div>
          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: v,
            }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-normal leading-[1.12] tracking-tight text-[#f4efe6] pb-2"
          >
            A Private Villa.{" "}
            <span className="text-[#d4af37] font-normal">All Yours.</span>
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: v,
            }}
            className="mt-6 max-w-2xl font-sans text-base sm:text-lg font-light leading-relaxed text-[#e6dfd5]/90 text-center"
          >
            Book the whole villa in Lonavala for your group. Enjoy a private pool, a cricket turf
            with floodlights, and a party room with snooker.
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: v,
            }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={
                "\n                group\n                inline-flex\n                h-13\n                items-center\n                gap-3\n                rounded-sm\n                bg-[#d4af37]\n                px-8\n                text-xs\n                font-semibold\n                uppercase\n                tracking-[0.16em]\n                text-[#08080a]\n                shadow-[0_4px_25px_rgba(212,175,55,0.25)]\n                transition-all\n                duration-300\n                hover:bg-[#b8952b]\n                hover:shadow-[0_4px_35px_rgba(212,175,55,0.4)]\n              "
              }
            >
              <span>Book the Villa</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <Link
              href="/about-villa"
              className={
                "\n                inline-flex\n                h-13\n                items-center\n                rounded-sm\n                border\n                border-[rgba(212,175,55,0.4)]\n                bg-rgba(18,16,21,0.6)\n                px-8\n                text-xs\n                font-semibold\n                uppercase\n                tracking-[0.16em]\n                text-[#f4efe6]\n                backdrop-blur-md\n                transition-all\n                duration-300\n                hover:border-[#d4af37]\n                hover:bg-[#d4af37]\n                hover:text-[#08080a]\n              "
              }
            >
              <span>See the Villa</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pb-12 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 gap-px border border-[#d4af37]/25 bg-[#d4af37]/20 sm:hidden">
          {c.map((e) => {
            let A = e.icon;
            return (
              <div className="relative flex flex-col bg-[#121015]/95 p-4 backdrop-blur-2xl" key={e.value}>
                <span className="absolute top-3.5 right-3.5 font-serif text-xs text-[#d4af37]/40">
                  {e.num}
                </span>
                <span className="flex h-9 w-9 items-center justify-center border border-[#d4af37]/35 bg-[#d4af37]/[0.06]">
                  <A className="h-4 w-4 text-[#d4af37]" strokeWidth={1.5} />
                </span>
                <div className="mt-4 font-serif text-[18px] leading-tight text-[#f4efe6]">{e.value}</div>
                <div className="mt-1.5 font-sans text-[12px] font-light leading-snug text-[#e6dfd5]/60">
                  {e.label}
                </div>
              </div>
            );
          })}
        </div>
        <div className="relative hidden sm:block rounded-none border border-[#d4af37]/30 bg-[#121015]/90 backdrop-blur-2xl p-6 sm:p-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-[rgba(212,175,55,0.18)]">
            {c.map((e, t) => (
              <div
                className={`
                  flex flex-col justify-between gap-3
                  px-4 sm:px-6 lg:px-7
                  ${0 !== t ? "pt-5 sm:pt-0" : ""}
                  group transition-colors
                `}
                key={e.value}
              >
                <div className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#d4af37]">
                  {e.tag}
                </div>
                <div className="font-serif text-lg lg:text-[20px] font-normal text-[#f4efe6] leading-snug group-hover:text-[#d4af37] transition-colors">
                  {e.value}
                </div>
                <div className="font-sans text-xs text-[#e6dfd5]/65 font-light tracking-wide">
                  {e.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
