"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/reveal";
import { AnimatePresence, motion } from "framer-motion";
let r = Moon;
let o = Sun;
let m = [
  {
    id: "checkin",
    step: "Day 1",
    time: "2:00 PM",
    phase: "ARRIVAL & WELCOME LUNCH",
    vibe: "Welcome Drinks",
    title: "Check-in and Welcome Lunch",
    description:
      "Check in at 2:00 PM. Relax in the cool living room with a welcome drink, then enjoy a lunch cooked by your private chef.",
    highlights: [
      "Cold welcome drinks and fresh towels when you arrive",
      "A full lunch cooked by your private chef",
      "Help with your bags and a quick tour of your room",
    ],
    image: "/images/bungalow/living-dining-view.jpg",
    accentColor: "rgba(234, 179, 8, 0.12)",
    badgeIcon: o,
    badgeText: "CHECK-IN",
  },
  {
    id: "afternoon",
    step: "Day 1",
    time: "4:00 PM",
    phase: "CRICKET & POOL TIME",
    vibe: "Afternoon Fun",
    title: "Cricket Match and Pool Time",
    description:
      "At 4:00 PM, play cricket with your group on the private turf. After that, cool off in the pool or relax in the shade with a drink.",
    highlights: [
      "Netted turf with floodlights for cricket and football",
      "A swim in the pool, with sunbeds on the deck",
      "Evening tea and snacks by the pool",
    ],
    image: "/images/bungalow/cricket-turf-day.png",
    accentColor: "rgba(56, 189, 248, 0.10)",
    badgeIcon: o,
    badgeText: "AFTERNOON FUN",
  },
  {
    id: "nightparty",
    step: "Day 1",
    time: "8:30 PM",
    phase: "PARTY NIGHT",
    vibe: "Party Time",
    title: "Party Room, Barbecue & Music",
    description:
      "From 8:30 PM, head down to the party room. Play snooker and foosball, enjoy a barbecue by the pool, and play music as late as you like.",
    highlights: [
      "Full-size snooker table and cues",
      "Live barbecue and a private bar",
      "Strong sound system with no time limit",
    ],
    image: "/images/bungalow/speakeasy-snooker-neon.png",
    accentColor: "rgba(168, 85, 247, 0.14)",
    badgeIcon: r,
    badgeText: "PARTY NIGHT",
  },
  {
    id: "morning",
    step: "Day 2",
    time: "8:30 AM",
    phase: "NEXT DAY MORNING",
    vibe: "Fresh Morning",
    title: "Wake Up to Mountain Views",
    description:
      "At 8:30 AM, wake up to views of the Sahyadri hills from your room. Enjoy fresh coffee and a hot breakfast served on the terrace.",
    highlights: [
      "Morning mist over the valley through big glass windows",
      "Fresh coffee and a hot breakfast",
      "Breakfast served on the open terrace",
    ],
    image: "/images/bungalow/master-suite-view.jpg",
    accentColor: "rgba(217, 119, 6, 0.14)",
    badgeIcon: o,
    badgeText: "BREAKFAST",
  },
  {
    id: "checkout",
    step: "Day 2",
    time: "11:00 AM",
    phase: "CHECK-OUT",
    vibe: "See You Again",
    title: "Last Swim and Check-out",
    description:
      "Before check-out at 11:00 AM, take one last swim, click some group photos on the lawn, and head home feeling fresh.",
    highlights: [
      "One last swim and group photos on the lawn",
      "Quick check-out, with help for your bags",
      "Snacks packed for your trip home",
    ],
    image: "/images/bungalow/pool-day-pergola.jpg",
    accentColor: "rgba(59, 130, 246, 0.14)",
    badgeIcon: o,
    badgeText: "CHECK-OUT",
  },
];
function Journey() {
  let [e, n] = useState(0),
    i = useRef(null),
    r = () => {
      (i.current && clearInterval(i.current),
        (i.current = setInterval(() => {
          n((e) => (e + 1) % m.length);
        }, 4500)));
    };
  useEffect(
    () => (
      r(),
      () => {
        i.current && clearInterval(i.current);
      }
    ),
    [],
  );
  let l = m[e];
  return (
    l.badgeIcon,
    (
      <section
        id="journey"
        className="relative overflow-hidden bg-[#08080a] py-16 sm:py-20 text-[#f4f0e8] transition-colors duration-1000"
      >
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-1000 opacity-60"
          style={{
            background: `radial-gradient(ellipse 70% 60% at 50% 40%, ${l.accentColor}, transparent 80%)`,
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6 mb-8 sm:mb-12">
              <div>
                <div className="flex items-center gap-3.5 mb-3">
                  <span className="h-px w-8 bg-[#d4af37]" />
                  <span className="eyebrow text-xs tracking-[0.28em] font-semibold text-[#d4af37]">
                    YOUR STAY
                  </span>
                  <span className="h-px w-8 bg-[#d4af37]" />
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.12] text-[#f4efe6]">
                  A Day <span className="text-[#d4af37] font-normal">at Casa Brio.</span>
                </h2>
              </div>
              <div className="flex items-center gap-4 self-start md:self-auto">
                <span className="text-xs font-sans text-white/50 tracking-wider">{l.vibe}</span>
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="lg:col-span-5 flex flex-col justify-between h-auto lg:min-h-[520px]">
              <div className="space-y-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -20,
                      filter: "blur(4px)",
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      x: 20,
                      filter: "blur(4px)",
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="space-y-3.5"
                    key={l.id}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold tracking-wider text-[#d4af37]">
                        {l.step}
                        {" ("}
                        {l.time})
                      </span>
                      <span className="text-white/30">•</span>
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                        {l.phase}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#f4efe6] font-normal leading-[1.18]">
                      {l.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base leading-relaxed text-white/70 font-light max-w-xl">
                      {l.description}
                    </p>
                    <div className="pt-2">
                      <ul className="space-y-2.5 text-xs sm:text-[13px] font-sans font-light text-[#e6dfd5]/85">
                        {l.highlights.map((e) => (
                          <li className="flex items-center gap-2.5" key={e}>
                            <span className="h-1.5 w-1.5 shrink-0 bg-[#d4af37]" />
                            <span>{e}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="pt-6 border-t border-white/10 mt-6 lg:mt-0">
                <div className="text-[11px] font-sans text-white/40 mb-2.5 uppercase tracking-widest flex items-center justify-between">
                  <span>PICK A TIME</span>
                  <span className="text-[#d4af37]">
                    0{e + 1}
                    {" / 05"}
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {m.map((t, s) => {
                    let i = s === e;
                    return (
                      <button
                        type="button"
                        onClick={() => {
                          (n(s), r());
                        }}
                        className={`
                        relative group flex flex-col items-center py-2 px-1 border-b-2 transition-all duration-300 text-center cursor-pointer
                        ${i ? "border-[#d4af37] bg-white/[0.04]" : "border-transparent bg-transparent hover:border-white/20 hover:bg-white/[0.02]"}
                      `}
                        key={t.id}
                      >
                        <span
                          className={`text-xs font-sans transition-colors ${i ? "text-[#d4af37] font-semibold" : "text-white/60 group-hover:text-white"}`}
                        >
                          {t.step}
                        </span>
                        <span
                          className={`text-[11px] font-sans tracking-tight transition-colors line-clamp-1 mt-0.5 ${i ? "text-white font-medium" : "text-white/40 group-hover:text-white/70"}`}
                        >
                          {t.time}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 h-[380px] sm:h-[450px] lg:h-[520px]">
              <div className="relative w-full h-full border border-[rgba(212,175,55,0.25)] bg-[#121115] overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 1.08,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.02,
                    }}
                    transition={{
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0"
                    key={l.id}
                  >
                    <img
                      src={l.image}
                      alt={l.title}
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute bottom-0 inset-x-0 h-1 bg-white/10 z-30">
                  <motion.div
                    className="h-full bg-[#d4af37]"
                    initial={{
                      width: "0%",
                    }}
                    animate={{
                      width: "100%",
                    }}
                    transition={{
                      duration: 4.5,
                      ease: "linear",
                    }}
                    key={e}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
}
export { Journey };
export default Journey;
