"use client";

import {
  CocktailLoungeIcon,
  GamesLoungeIcon,
  LuxurySuitesIcon,
  SingleGroupBuyoutIcon,
  SparklesIcon,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
let r = [
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
      src: "/images/bungalow/snooker-corner-cue.png",
      alt: "Snooker cues in the party room",
    },
    {
      src: "/images/bungalow/suite-evening-cocktails.png",
      alt: "Evening drinks on the balcony",
    },
  ],
  l = [
    {
      icon: GamesLoungeIcon,
      label: "Full-Size Snooker Table",
    },
    {
      icon: CocktailLoungeIcon,
      label: "Private Bar",
    },
    {
      icon: SparklesIcon,
      label: "Loud, Clear Sound System",
    },
    {
      icon: GamesLoungeIcon,
      label: "Foosball & Indoor Games",
    },
    {
      icon: LuxurySuitesIcon,
      label: "Comfy Leather Sofas",
    },
    {
      icon: SingleGroupBuyoutIcon,
      label: "Fully Private",
    },
  ];
function PartyRoomSection() {
  return (
    <section
      id="party-room"
      className="relative bg-[#07060a] py-16 sm:py-20 text-[#f4efe6] overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(212,175,55,0.06) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col gap-6 pb-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3.5">
                <span className="h-px w-8 bg-[#d4af37]" />
                <span className="eyebrow text-xs tracking-[0.28em] font-semibold text-[#d4af37]">
                  THE PARTY ROOM
                </span>
                <span className="h-px w-8 bg-[#d4af37]" />
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-[#f4efe6] pb-2">
                Party Room.{" "}
                <span className="text-[#d4af37] font-normal">Just for Your Group.</span>
              </h2>
            </div>
            <p className="max-w-md font-sans text-sm font-light leading-[1.85] text-[#e6dfd5]/80">
              A private room to play, party and relax. No time limits, no noise complaints, no
              other guests.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-4 flex flex-col h-[340px] sm:h-[400px]">
            <Reveal>
              <div className="border-l border-t border-[rgba(212,175,55,0.15)] flex flex-col h-[340px] sm:h-[400px]">
                {l.map((e) => {
                  let T = e.icon;
                  return (
                    <div
                      className="group flex flex-1 items-center gap-3.5 border-b border-r border-[rgba(212,175,55,0.15)] px-4 py-3.5 transition-colors duration-300 hover:bg-[#121015]"
                      key={e.label}
                    >
                      <div className="text-[#d4af37] shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <T className="h-5 w-5 text-[#d4af37]" />
                      </div>
                      <span className="font-sans text-xs font-medium text-[#f4efe6]">
                        {e.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-8 overflow-hidden relative">
            <Reveal delay={80}>
              <div className="relative overflow-hidden w-full h-[340px] sm:h-[400px]">
                <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
                  <span
                    className="absolute top-[12%] left-[15%] text-[#ffd700] text-sm font-serif select-none animate-sparkle-star"
                    style={{
                      animationDelay: "0.4s",
                    }}
                  >
                    ✦
                  </span>
                  <span
                    className="absolute top-[28%] right-[18%] text-[#ffe57f] text-xs font-serif select-none animate-sparkle-star"
                    style={{
                      animationDelay: "1.8s",
                    }}
                  >
                    ✧
                  </span>
                  <span
                    className="absolute bottom-[22%] left-[28%] text-[#ffd700] text-sm font-serif select-none animate-sparkle-star"
                    style={{
                      animationDelay: "1.2s",
                    }}
                  >
                    ✦
                  </span>
                  <span
                    className="absolute bottom-[14%] right-[32%] text-[#ffe57f] text-xs font-serif select-none animate-sparkle-star"
                    style={{
                      animationDelay: "2.5s",
                    }}
                  >
                    ✧
                  </span>
                  <span
                    className="absolute top-[8%] right-[8%] text-[#ffd700] text-sm font-serif select-none animate-sparkle-star"
                    style={{
                      animationDelay: "0.7s",
                    }}
                  >
                    ✦
                  </span>
                  <span
                    className="absolute top-[40%] left-[8%] h-1.5 w-1.5 rounded-full bg-[#fff8d6] shadow-[0_0_10px_#ffd700,0_0_20px_#d4af37] animate-freckle-drift-1"
                    style={{
                      animationDelay: "0.5s",
                    }}
                  />
                  <span
                    className="absolute top-[18%] right-[45%] h-1 w-1 rounded-full bg-[#ffd700] shadow-[0_0_8px_#ffd700,0_0_16px_#d4af37] animate-freckle"
                    style={{
                      animationDelay: "1.9s",
                    }}
                  />
                  <span
                    className="absolute bottom-[35%] right-[12%] h-1.5 w-1.5 rounded-full bg-[#fff8d6] shadow-[0_0_10px_#ffd700,0_0_20px_#d4af37] animate-freckle"
                    style={{
                      animationDelay: "1.6s",
                    }}
                  />
                  <span
                    className="absolute bottom-[18%] left-[8%] h-1.5 w-1.5 rounded-full bg-[#fff8d6] shadow-[0_0_10px_#ffd700,0_0_20px_#d4af37] animate-freckle-drift-2"
                    style={{
                      animationDelay: "0.3s",
                    }}
                  />
                  <span
                    className="absolute top-[70%] left-[48%] h-1 w-1 rounded-full bg-[#ffd700] shadow-[0_0_8px_#ffd700,0_0_16px_#d4af37] animate-freckle-drift-1"
                    style={{
                      animationDelay: "2.9s",
                    }}
                  />
                </div>
                <div
                  className="absolute inset-y-0 left-0 w-16 z-10 pointer-events-none"
                  style={{
                    background: "linear-gradient(90deg, #07060a 0%, transparent 100%)",
                  }}
                />
                <div
                  className="absolute inset-y-0 right-0 w-16 z-10 pointer-events-none"
                  style={{
                    background: "linear-gradient(270deg, #07060a 0%, transparent 100%)",
                  }}
                />
                <div
                  className="flex gap-4 h-full animate-party-marquee"
                  style={{
                    width: "max-content",
                  }}
                >
                  {[...r, ...r].map((e, t) => (
                    <div
                      className="relative shrink-0 w-[280px] sm:w-[320px] h-full overflow-hidden border border-[rgba(212,175,55,0.18)] bg-[#121015]"
                      key={t}
                    >
                      <img
                        src={e.src}
                        alt={e.alt}
                        className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07060a]/60 via-transparent to-transparent" />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <Reveal delay={100}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/party-room"
              className="group inline-flex items-center gap-3.5 border border-[#d4af37] bg-transparent px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af37] transition-all duration-300 hover:bg-[#d4af37] hover:text-[#08080a]"
            >
              <span>See the Party Room</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
export { PartyRoomSection };
export default PartyRoomSection;
