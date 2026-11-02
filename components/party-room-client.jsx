"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Lightbox } from "@/components/lightbox";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import {
  CocktailLoungeIcon,
  GamesLoungeIcon,
  LuxurySuitesIcon,
  SparklesIcon,
} from "@/components/icons";
import Link from "next/link";
import { Footer } from "@/components/footer";
let M_ = ChevronDown;
let b = [
  {
    id: "snooker-aim",
    pillLabel: "Snooker Time",
    image: "/images/bungalow/party-room-guest-snooker-aim.jpg",
    alt: "Guest taking a shot at the snooker table in the party room",
  },
  {
    id: "lounge-cheers",
    pillLabel: "Cheers",
    image: "/images/bungalow/party-room-guests-lounge-cheers.jpg",
    alt: "Guests laughing and having drinks on leather sofas in the party room",
  },
  {
    id: "bar-counter",
    pillLabel: "Private Bar",
    image: "/images/bungalow/party-room-guests-bar-counter.jpg",
    alt: "Guests chatting at the lit-up private bar",
  },
  {
    id: "snooker-friends",
    pillLabel: "Late-Night Snooker",
    image: "/images/bungalow/party-room-guests-snooker-friends.jpg",
    alt: "Friends around the snooker table at night",
  },
];
function V_() {
  let [e, a] = useState(null),
    i = useRef(null),
    { scrollYProgress: c } = useScroll({
      target: i,
      offset: ["start start", "end end"],
    }),
    d = useSpring(c, {
      stiffness: 85,
      damping: 26,
      restDelta: 0.001,
    }),
    m = useTransform(d, [0, 0.35], [0.95, 1.45]),
    x = useTransform(d, [0, 0.35], ["-20vw", "-50vw"]),
    f = useTransform(d, [0, 0.35], ["-8vh", "-38vh"]),
    p = useTransform(d, [0, 0.24, 0.35], [1, 0.95, 0]),
    u = useTransform(d, [0.15, 0.38, 0.62], [0.65, 1.05, 1.5]),
    g = useTransform(d, [0.15, 0.38, 0.62], ["10vw", "22vw", "52vw"]),
    v = useTransform(d, [0.15, 0.38, 0.62], ["4vh", "15vh", "38vh"]),
    w = useTransform(d, [0.15, 0.28, 0.52, 0.62], [0, 1, 0.95, 0]),
    N = useTransform(d, [0.38, 0.62, 0.85], [0.65, 1.05, 1.5]),
    y = useTransform(d, [0.38, 0.62, 0.85], ["-8vw", "-22vw", "-50vw"]),
    E = useTransform(d, [0.38, 0.62, 0.85], ["4vh", "15vh", "38vh"]),
    k = useTransform(d, [0.38, 0.48, 0.75, 0.85], [0, 1, 0.95, 0]),
    T = useTransform(d, [0.6, 0.82, 1], [0.65, 1.05, 1.25]),
    R = useTransform(d, [0.6, 0.82, 1], ["8vw", "20vw", "26vw"]),
    _ = useTransform(d, [0.6, 0.82, 1], ["-4vh", "-12vh", "-20vh"]),
    L = useTransform(d, [0.6, 0.72, 1], [0, 1, 1]);
  return (
    <section className="relative bg-[#050505] text-[#f4efe6] border-t border-[rgba(212,175,55,0.15)] selection:bg-[#d4af37]/30">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 h-[500px] w-[500px] rounded-full bg-[#d4af37]/[0.03] blur-[160px]" />
        <div className="absolute bottom-1/4 right-10 h-[600px] w-[600px] rounded-full bg-[#d4af37]/[0.025] blur-[180px]" />
      </div>
      <div className="relative z-10 px-6 py-16 sm:px-8 sm:py-20 md:hidden">
        <div className="text-center">
          <div className="inline-flex items-center justify-center gap-2.5 mb-3">
            <span className="h-px w-6 bg-[#d4af37]" />
            <span className="eyebrow text-[10px] tracking-[0.28em] font-semibold text-[#d4af37]">
              PARTY ROOM GUESTS
            </span>
            <span className="h-px w-6 bg-[#d4af37]" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal leading-[1.05] tracking-tight text-[#f4efe6]">
            Happy <span className="text-[#d4af37] font-normal">Guests</span>
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">
          {b.map((t, s) => (
            <button
              type="button"
              key={t.image}
              onClick={() => a(t)}
              className={`relative aspect-[3/4] overflow-hidden border border-[rgba(212,175,55,0.3)] bg-[#121015] shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-transform active:scale-95 ${s % 2 ? "translate-y-6" : ""}`}
            >
              <img src={t.image} alt={t.alt} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </button>
          ))}
        </div>
      </div>
      <div ref={i} className="relative hidden md:block h-[300vh] w-full">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505] [perspective:1200px]">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0">
            <div className="h-[400px] sm:h-[600px] w-[400px] sm:w-[600px] rounded-full bg-[#d4af37]/[0.08] blur-[140px]" />
          </div>
          <div className="pointer-events-none absolute inset-0 z-25 shadow-[inset_0_120px_160px_-30px_#050505,inset_0_-120px_160px_-30px_#050505]" />
          <div className="pointer-events-none absolute inset-0 z-25 shadow-[inset_100px_0_140px_-30px_#050505,inset_-100px_0_140px_-30px_#050505]" />
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-auto [transform-style:preserve-3d]">
            <motion.div
              style={{
                scale: m,
                x: x,
                y: f,
                opacity: p,
                rotateZ: -6,
              }}
              onClick={() => a(b[0])}
              className="absolute w-[200px] sm:w-[260px] md:w-[320px] lg:w-[370px] aspect-[3/4] cursor-pointer overflow-hidden rounded-none border border-[rgba(212,175,55,0.3)] bg-[#121015] shadow-[0_25px_70px_rgba(0,0,0,0.95)] hover:border-[#d4af37] transition-colors active:scale-95"
            >
              <img
                src={b[0].image}
                alt={b[0].alt}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50" />
            </motion.div>
            <motion.div
              style={{
                scale: u,
                x: g,
                y: v,
                opacity: w,
                rotateZ: 7,
              }}
              onClick={() => a(b[1])}
              className="absolute w-[205px] sm:w-[270px] md:w-[330px] lg:w-[380px] aspect-[3/4] cursor-pointer overflow-hidden rounded-none border border-[rgba(212,175,55,0.3)] bg-[#121015] shadow-[0_25px_70px_rgba(0,0,0,0.95)] hover:border-[#d4af37] transition-colors active:scale-95"
            >
              <img
                src={b[1].image}
                alt={b[1].alt}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50" />
            </motion.div>
            <motion.div
              style={{
                scale: N,
                x: y,
                y: E,
                opacity: k,
                rotateZ: -5,
              }}
              onClick={() => a(b[2])}
              className="absolute w-[200px] sm:w-[260px] md:w-[320px] lg:w-[370px] aspect-[3/4] cursor-pointer overflow-hidden rounded-none border border-[rgba(212,175,55,0.3)] bg-[#121015] shadow-[0_25px_70px_rgba(0,0,0,0.95)] hover:border-[#d4af37] transition-colors active:scale-95"
            >
              <img
                src={b[2].image}
                alt={b[2].alt}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50" />
            </motion.div>
            <motion.div
              style={{
                scale: T,
                x: R,
                y: _,
                opacity: L,
                rotateZ: 6,
              }}
              onClick={() => a(b[3])}
              className="absolute w-[205px] sm:w-[270px] md:w-[330px] lg:w-[380px] aspect-[3/4] cursor-pointer overflow-hidden rounded-none border border-[rgba(212,175,55,0.3)] bg-[#121015] shadow-[0_25px_70px_rgba(0,0,0,0.95)] hover:border-[#d4af37] transition-colors active:scale-95"
            >
              <img
                src={b[3].image}
                alt={b[3].alt}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50" />
            </motion.div>
          </div>
          <div className="relative z-40 text-center pointer-events-none px-6 max-w-2xl flex flex-col items-center justify-center">
            <div className="inline-flex items-center justify-center gap-2.5 sm:gap-3.5 mb-2.5 sm:mb-4">
              <span className="h-px w-6 sm:w-12 bg-[#d4af37]" />
              <span className="eyebrow text-[10px] sm:text-xs tracking-[0.28em] font-semibold text-[#d4af37]">
                PARTY ROOM GUESTS
              </span>
              <span className="h-px w-6 sm:w-12 bg-[#d4af37]" />
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-normal leading-[0.98] tracking-tight text-[#f4efe6] drop-shadow-[0_4px_40px_rgba(0,0,0,1)]">
              Happy
              <br />
              <span className="text-[#d4af37] font-normal">Guests</span>
            </h2>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {e && (
          <Lightbox
            images={b.map((t) => ({ src: t.image, alt: t.alt, label: `${t.pillLabel} · Party Room` }))}
            index={Math.max(0, b.indexOf(e))}
            onIndexChange={(t) => a(b[t])}
            onClose={() => a(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
let w = [
    {
      src: "/images/bungalow/party-room-guest-snooker-aim.jpg",
      alt: "Snooker shot in the party room",
    },
    {
      src: "/images/bungalow/party-room-guests-lounge-cheers.jpg",
      alt: "Guests on leather sofas",
    },
    {
      src: "/images/bungalow/party-room-guests-bar-counter.jpg",
      alt: "Private bar counter",
    },
    {
      src: "/images/bungalow/party-room-guests-snooker-friends.jpg",
      alt: "Friends at the snooker table",
    },
    {
      src: "/images/bungalow/speakeasy-snooker-neon.png",
      alt: "Party room with neon lights",
    },
    {
      src: "/images/bungalow/snooker-bar-lounge.jpg",
      alt: "Party room snooker table and bar",
    },
    {
      src: "/images/bungalow/bar-ambiance-warm.png",
      alt: "Party room bar",
    },
    {
      src: "/images/bungalow/billiards-leather-lounge.png",
      alt: "Leather sofas in the party room",
    },
    {
      src: "/images/bungalow/bar-counter-snooker.png",
      alt: "Party room bar counter",
    },
    {
      src: "/images/bungalow/living-lounge-party.jpg",
      alt: "Guests partying in the living room",
    },
    {
      src: "/images/bungalow/party-lounge-detail.jpg",
      alt: "Party room seating",
    },
    {
      src: "/images/bungalow/pool-party-celebration.png",
      alt: "Pool party at night",
    },
  ],
  N = [w[0], w[4], w[8]],
  y = [w[1], w[5], w[9]],
  E = [w[2], w[6], w[10]],
  k = [w[3], w[7], w[11]];
function PartyRoomClient() {
  let e = useRef(null),
    { scrollYProgress: c } = useScroll({
      target: e,
      offset: ["start start", "end end"],
    }),
    d = useSpring(c, {
      stiffness: 70,
      damping: 24,
      restDelta: 0.001,
    }),
    h = useTransform(d, [0, 0.4, 0.8], [22, 10, 0]),
    g = useTransform(d, [0, 0.4, 0.8], [-12, -4, 0]),
    b = useTransform(d, [0, 0.4, 0.8], [-8, -2, 0]),
    j = useTransform(d, [0, 0.5, 1], [0.92, 1.05, 1]),
    w = useTransform(d, [0, 1], [0, -180]),
    T = useTransform(d, [0, 1], [0, 120]),
    R = useTransform(d, [0, 1], [0, -140]),
    _ = useTransform(d, [0, 1], [0, 160]),
    L = useTransform(d, [0, 0.45], [1, 0.2]),
    S = useTransform(d, [0, 0.45], [0, -30]),
    C = useTransform(d, [0, 0.32], ["min(90vw, 365px)", "100vw"]),
    A = useTransform(d, [0, 0.32], ["78vh", "100vh"]),
    z = useTransform(d, [0, 0.32], [40, 0]),
    P = useTransform(d, [0, 0.22], ["rgba(212, 175, 55, 0.35)", "rgba(212, 175, 55, 0)"]),
    V = useTransform(d, [0, 0.12], [0.8, 0]),
    I = useTransform(d, [0, 0.2], [1, 0]),
    $ = useTransform(d, [0, 0.2], [0, -30]),
    B = useTransform(d, [0, 0.45, 0.85], [18, 8, 0]),
    O = useTransform(d, [0, 0.45, 0.85], [-12, -4, 0]),
    Y = useTransform(d, [0, 0.45, 0.85], [-8, -2, 0]),
    M = useTransform(d, [0, 0.35, 1], [0.95, 1.05, 1]),
    D = useTransform(d, [0, 1], [0, -360]),
    H = useTransform(d, [0, 1], [0, 280]),
    G = useTransform(d, [0, 1], [0, -300]);
  return (
    <main
      suppressHydrationWarning={!0}
      className="min-h-screen bg-[#08080a] text-[#f4efe6] selection:bg-[#d4af37]/30 selection:text-[#f5d77f]"
    >
      <SiteHeader />
      <div ref={e} className="relative h-[155vh] bg-[#07060a]">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center">
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] rounded-full bg-[#d4af37]/10 blur-[140px]" />
          </div>
          <div className="md:hidden flex flex-col items-center justify-center w-full h-full">
            <motion.div
              style={{
                width: C,
                height: A,
                borderRadius: z,
                borderColor: P,
              }}
              className="relative border bg-[#09080c] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.92),0_0_35px_rgba(212,175,55,0.12)] flex items-center justify-center transition-[border-radius]"
            >
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden [perspective:1200px]">
                <motion.div
                  style={{
                    rotateX: B,
                    rotateY: O,
                    rotateZ: Y,
                    scale: M,
                    transformStyle: "preserve-3d",
                  }}
                  className="w-[145vw] h-[160vh] grid grid-cols-3 gap-3 sm:gap-4 p-2 shrink-0"
                >
                  <motion.div
                    style={{
                      y: D,
                    }}
                    className="flex flex-col gap-3 sm:gap-4"
                  >
                    {N.concat(k.slice(0, 2)).map((e, t) => (
                      <div
                        className="relative aspect-[3/4] overflow-hidden rounded-sm border border-[rgba(212,175,55,0.22)] bg-[#121015] shadow-2xl"
                        key={`m-c1-${t}`}
                      >
                        <img src={e.src} alt={e.alt} className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                      </div>
                    ))}
                  </motion.div>
                  <motion.div
                    style={{
                      y: H,
                    }}
                    className="flex flex-col gap-3 sm:gap-4"
                  >
                    {y.concat(E.slice(0, 2)).map((e, t) => (
                      <div
                        className="relative aspect-[3/4] overflow-hidden rounded-sm border border-[rgba(212,175,55,0.22)] bg-[#121015] shadow-2xl"
                        key={`m-c2-${t}`}
                      >
                        <img src={e.src} alt={e.alt} className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                      </div>
                    ))}
                  </motion.div>
                  <motion.div
                    style={{
                      y: G,
                    }}
                    className="flex flex-col gap-3 sm:gap-4"
                  >
                    {E.concat(N.slice(0, 2)).map((e, t) => (
                      <div
                        className="relative aspect-[3/4] overflow-hidden rounded-sm border border-[rgba(212,175,55,0.22)] bg-[#121015] shadow-2xl"
                        key={`m-c3-${t}`}
                      >
                        <img src={e.src} alt={e.alt} className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-[#08080a]/70 via-[#08080a]/60 to-[#08080a]/85 pointer-events-none z-10" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#08080a] via-[#08080a]/80 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#08080a]/75 to-transparent pointer-events-none z-10" />
              <motion.div
                style={{
                  opacity: I,
                  y: $,
                }}
                className="relative z-20 text-center px-5 flex flex-col items-center justify-between h-full py-6 sm:py-7 pointer-events-none"
              >
                <div className="inline-flex items-center justify-center gap-2 pt-2">
                  <span className="h-px w-5 sm:w-6 bg-[#d4af37]" />
                  <span className="eyebrow text-[9.5px] sm:text-[10px] tracking-[0.24em] font-semibold text-[#d4af37]">
                    THE PARTY ROOM • LONAVALA
                  </span>
                  <span className="h-px w-5 sm:w-6 bg-[#d4af37]" />
                </div>
                <div className="my-auto py-2">
                  <h1 className="font-serif text-[2.35rem] sm:text-[2.6rem] leading-[1.08] tracking-tight text-[#f4efe6] drop-shadow-2xl">
                    Your Own Party Room.
                    <br />
                    <span className="text-[#d4af37] font-normal">Just for Your Group.</span>
                  </h1>
                  <p className="mt-3.5 font-sans text-xs font-light text-[#e6dfd5]/90 leading-relaxed drop-shadow-md max-w-[280px] mx-auto">
                    A private party room in Lonavala with a full-size snooker table, a private
                    bar, leather sofas, and no time limits.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1.5 text-[10px] tracking-[0.28em] uppercase text-[#d4af37] font-sans font-medium pb-2">
                  <span>SCROLL DOWN TO SEE MORE</span>
                  <M_ className="h-3.5 w-3.5 animate-bounce text-[#d4af37]" />
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              style={{
                opacity: V,
              }}
              className="mt-3 flex flex-col items-center justify-center"
            >
              <span className="h-4 w-px bg-gradient-to-b from-[#d4af37] to-transparent" />
            </motion.div>
          </div>
          <div className="hidden md:flex w-full h-full flex-col justify-center items-center relative">
            <div className="w-full h-full flex items-center justify-center [perspective:1400px]">
              <motion.div
                style={{
                  rotateX: h,
                  rotateY: g,
                  rotateZ: b,
                  scale: j,
                  transformStyle: "preserve-3d",
                }}
                className="w-[125vw] sm:w-[110vw] max-w-[1700px] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-8"
              >
                <motion.div
                  style={{
                    y: w,
                  }}
                  className="flex flex-col gap-4 sm:gap-6"
                >
                  {N.map((e, t) => (
                    <div
                      className="group relative aspect-[3/4] overflow-hidden rounded-none border border-[rgba(212,175,55,0.22)] bg-[#121015] shadow-2xl transition-transform duration-500 hover:scale-[1.02] hover:border-[#d4af37]"
                      key={`c1-${t}`}
                    >
                      <img
                        src={e.src}
                        alt={e.alt}
                        className="h-full w-full object-cover brightness-[0.75] contrast-[1.05] transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </motion.div>
                <motion.div
                  style={{
                    y: T,
                  }}
                  className="flex flex-col gap-4 sm:gap-6"
                >
                  {y.map((e, t) => (
                    <div
                      className="group relative aspect-[3/4] overflow-hidden rounded-none border border-[rgba(212,175,55,0.22)] bg-[#121015] shadow-2xl transition-transform duration-500 hover:scale-[1.02] hover:border-[#d4af37]"
                      key={`c2-${t}`}
                    >
                      <img
                        src={e.src}
                        alt={e.alt}
                        className="h-full w-full object-cover brightness-[0.75] contrast-[1.05] transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </motion.div>
                <motion.div
                  style={{
                    y: R,
                  }}
                  className="flex flex-col gap-4 sm:gap-6"
                >
                  {E.map((e, t) => (
                    <div
                      className="group relative aspect-[3/4] overflow-hidden rounded-none border border-[rgba(212,175,55,0.22)] bg-[#121015] shadow-2xl transition-transform duration-500 hover:scale-[1.02] hover:border-[#d4af37]"
                      key={`c3-${t}`}
                    >
                      <img
                        src={e.src}
                        alt={e.alt}
                        className="h-full w-full object-cover brightness-[0.75] contrast-[1.05] transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </motion.div>
                <motion.div
                  style={{
                    y: _,
                  }}
                  className="flex flex-col gap-4 sm:gap-6"
                >
                  {k.map((e, t) => (
                    <div
                      className="group relative aspect-[3/4] overflow-hidden rounded-none border border-[rgba(212,175,55,0.22)] bg-[#121015] shadow-2xl transition-transform duration-500 hover:scale-[1.02] hover:border-[#d4af37]"
                      key={`c4-${t}`}
                    >
                      <img
                        src={e.src}
                        alt={e.alt}
                        className="h-full w-full object-cover brightness-[0.75] contrast-[1.05] transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
            <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#08080a]/60 via-[#08080a]/35 to-[#08080a]/80 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-[#08080a] via-[#08080a]/85 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#08080a]/75 to-transparent pointer-events-none" />
            </div>
            <motion.div
              style={{
                opacity: L,
                y: S,
              }}
              className="pointer-events-none absolute z-20 text-center px-4 max-w-5xl"
            >
              <div className="inline-flex items-center justify-center gap-3.5 mb-5">
                <span className="h-px w-10 sm:w-16 bg-[#d4af37]" />
                <span className="eyebrow text-[11px] sm:text-xs tracking-[0.3em] font-semibold text-[#d4af37]">
                  THE PARTY ROOM • LONAVALA
                </span>
                <span className="h-px w-10 sm:w-16 bg-[#d4af37]" />
              </div>
              <h1 className="font-serif text-[3.2rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[7.8rem] font-normal leading-[1.05] tracking-tight text-[#f4efe6] drop-shadow-2xl">
                Your Own Party Room.
                <br />
                <span className="text-[#d4af37] font-normal">Just for Your Group.</span>
              </h1>
              <p className="mt-6 font-sans text-sm sm:text-base md:text-lg font-light text-[#e6dfd5]/85 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                A private party room in Lonavala with a full-size snooker table, a private bar,
                leather sofas, and no time limits.
              </p>
              <div className="mt-8 flex items-center justify-center gap-2 text-xs tracking-[0.25em] uppercase text-[#d4af37]/80 font-sans font-medium">
                <span>Scroll down to see more</span>
                <M_ className="h-4 w-4 animate-bounce text-[#d4af37]" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <section className="bg-[#08080a] py-10 sm:py-14 border-t border-[rgba(212,175,55,0.15)]">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <Reveal className="lg:col-span-6">
              <div className="relative aspect-[4/3] p-1.5 bg-[#121015] border-2 border-[#d4af37] shadow-[0_0_30px_rgba(212,175,55,0.22)]">
                <div className="relative h-full w-full overflow-hidden border border-[#d4af37]/40">
                  <img
                    src="/images/bungalow/snooker-bar-lounge.jpg"
                    alt="Inside the party room"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080a]/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-6">
              <div className="max-w-xl">
                <div className="mb-3.5 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#d4af37]" />
                  <span className="text-xs uppercase tracking-[0.28em] font-semibold text-[#d4af37]">
                    FULLY PRIVATE
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight text-[#fdfbf7]">
                  {"No Time Limits. "}
                  <br />
                  <span className="text-[#d4af37] font-normal">No Disturbance.</span>
                </h2>
                <p className="mt-4 font-sans text-sm sm:text-base font-light leading-relaxed text-[#e6dfd5]/80">
                  The party room is below the main villa. It is soundproof and fully private.
                  Play snooker late into the night, enjoy a drink, or put on your favourite music.
                  The room is yours until morning.
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3 pt-4 border-t border-[rgba(212,175,55,0.18)]">
                  {[
                    {
                      icon: GamesLoungeIcon,
                      label: "Full-Size Snooker Table",
                    },
                    {
                      icon: CocktailLoungeIcon,
                      label: "Private Bar",
                    },
                    {
                      icon: LuxurySuitesIcon,
                      label: "Leather Sofas",
                    },
                    {
                      icon: SparklesIcon,
                      label: "Soundproof Room",
                    },
                  ].map((e) => {
                    let T_ = e.icon;
                    return (
                      <div
                        className="flex items-center gap-3 border border-[rgba(212,175,55,0.2)] bg-[#121015] px-4 py-2.5 transition-colors duration-300 hover:border-[#d4af37]"
                        key={e.label}
                      >
                        <div className="text-[#d4af37] shrink-0 transition-transform duration-300 group-hover:scale-110">
                          <T_ className="h-5 w-5 text-[#d4af37]" />
                        </div>
                        <span className="font-sans text-xs font-medium text-[#f4efe6]">
                          {e.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-5 pt-4 border-t border-[rgba(212,175,55,0.18)] flex flex-wrap items-center gap-4">
                  <Link
                    href="/about-villa"
                    className="inline-flex items-center gap-2.5 border border-[rgba(212,175,55,0.4)] bg-[#121015] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f4efe6] transition-all hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-[#08080a]"
                  >
                    <span>See the Whole Villa</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="relative bg-[#07060a] py-10 sm:py-14 text-[#f4efe6] overflow-hidden border-t border-white/[0.08]">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[1000px] rounded-full bg-[rgba(212,175,55,0.04)] blur-[150px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-3.5 mb-2.5">
                <span className="h-px w-8 bg-[#d4af37]" />
                <span className="eyebrow text-xs tracking-[0.28em] font-semibold text-[#d4af37]">
                  3 AREAS TO ENJOY
                </span>
                <span className="h-px w-8 bg-[#d4af37]" />
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#f4efe6] tracking-tight">
                {"Where to "}
                <span className="text-[#d4af37] font-normal">Next?</span>
              </h2>
              <p className="mt-2.5 text-sm sm:text-base font-light text-[#e6dfd5]/80 max-w-xl mx-auto leading-relaxed font-sans">
                One party room with three areas. Each one is made for a different kind of fun.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-7xl mx-auto">
            {[
              {
                icon: GamesLoungeIcon,
                title: "Snooker Corner",
                description:
                  "A full-size snooker table, cue racks and leather sofas. Take your time and play all night.",
                image: "/images/bungalow/billiards-leather-lounge.png",
              },
              {
                icon: CocktailLoungeIcon,
                title: "The Private Bar",
                description:
                  "A lit-up bar with nice glasses and space to make your own drinks late at night.",
                image: "/images/bungalow/bar-counter-snooker.png",
              },
              {
                icon: LuxurySuitesIcon,
                title: "The Lounge",
                description:
                  "Soft leather seats, warm lights and good sound. A great place to sit and talk.",
                image: "/images/bungalow/speakeasy-snooker-neon.png",
              },
            ].map((e, t) => {
              let A_ = e.icon;
              return (
                <Reveal delay={90 * t} key={e.title}>
                  <div className="group relative flex flex-col justify-between min-h-[360px] sm:min-h-[400px] lg:aspect-[4/5] p-6 sm:p-7 lg:p-8 rounded-none bg-[#07060a] border border-[rgba(212,175,55,0.22)] shadow-[0_12px_40px_rgba(0,0,0,0.9)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.25)] transition-all duration-500 hover:-translate-y-1 hover:border-[#d4af37] overflow-hidden">
                    <div className="absolute inset-0 z-0">
                      <img
                        src={e.image}
                        alt={e.title}
                        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07060a] via-[#07060a]/70 to-[#07060a]/30 group-hover:via-[#07060a]/60 transition-colors duration-500" />
                    </div>
                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <div className="text-[#d4af37] transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                        <A_ className="h-9 w-9 text-[#d4af37]" />
                      </div>
                      <div className="mt-8">
                        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#f4efe6] group-hover:text-[#d4af37] transition-colors leading-tight drop-shadow-md">
                          {e.title}
                        </h3>
                        <p className="mt-3 font-sans text-sm font-light text-[#e6dfd5]/90 leading-relaxed drop-shadow">
                          {e.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={200}>
            <div className="mt-8 sm:mt-10 text-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3.5 border border-[#d4af37] bg-transparent px-9 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af37] transition-all duration-300 hover:bg-[#d4af37] hover:text-[#08080a]"
              >
                <span>Book Your Party Night</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <V_ />
      <Footer />
    </main>
  );
}
export { PartyRoomClient };
export default PartyRoomClient;
