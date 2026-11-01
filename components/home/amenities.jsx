"use client";

import {
  BarbecueIcon,
  CocktailLoungeIcon,
  CricketTurfIcon,
  GamesLoungeIcon,
  HighSpeedWifiIcon,
  ItalianWashroomIcon,
  LivingSalonIcon,
  LuxurySuitesIcon,
  PoolIcon,
  PrivateChefIcon,
  SingleGroupBuyoutIcon,
  TerraceGardenIcon,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import Link from "next/link";
let i = [
  {
    icon: PoolIcon,
    label: "Private Swimming Pool",
    detail: "Heated water and a lit-up deck",
  },
  {
    icon: CricketTurfIcon,
    label: "Box Cricket Turf",
    detail: "Netted pitch with floodlights, inside the villa",
  },
  {
    icon: CocktailLoungeIcon,
    label: "Party Room",
    detail: "Snooker table, private bar and great sound",
  },
  {
    icon: LuxurySuitesIcon,
    label: "4 Master Suites",
    detail: "Mountain views and attached bathrooms",
  },
  {
    icon: PrivateChefIcon,
    label: "Private Chef & Staff",
    detail: "Here to help with meals and anything you need",
  },
  {
    icon: LivingSalonIcon,
    label: "Large Living Room",
    detail: "Big open space with a 4K TV",
  },
  {
    icon: ItalianWashroomIcon,
    label: "Modern Bathrooms",
    detail: "Marble finish and rain showers",
  },
  {
    icon: TerraceGardenIcon,
    label: "Open Terrace & Garden",
    detail: "Green lawns and mountain views",
  },
  {
    icon: HighSpeedWifiIcon,
    label: "High-Speed WiFi",
    detail: "Fast internet across the whole villa",
  },
  {
    icon: BarbecueIcon,
    label: "Barbecue & Outdoor Dining",
    detail: "Poolside grill and outdoor seating on request",
  },
  {
    icon: GamesLoungeIcon,
    label: "Foosball & Indoor Games",
    detail: "Inside the party room",
  },
  {
    icon: SingleGroupBuyoutIcon,
    label: "Only One Group at a Time",
    detail: "No strangers, no sharing, no time limits",
  },
];
function Amenities() {
  return (
    <section
      id="amenities"
      className="relative bg-[#08080a] py-16 sm:py-20 text-[#f4efe6] overflow-hidden"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-[rgba(212,175,55,0.15)]">
            <div>
              <div className="mb-4 flex items-center gap-3.5">
                <span className="h-px w-8 bg-[#d4af37]" />
                <span className="eyebrow text-xs tracking-[0.28em] font-semibold text-[#d4af37]">
                  WHAT&apos;S INSIDE
                </span>
                <span className="h-px w-8 bg-[#d4af37]" />
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-[#f4efe6]">
                Everything You Need,{" "}
                <span className="text-[#d4af37] font-normal">In One Place.</span>
              </h2>
            </div>
            <p className="max-w-md font-sans text-sm font-light leading-relaxed text-[#e6dfd5]/75 md:text-right">
              Everything here is only for your group. Nothing is shared.
            </p>
          </div>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-l border-t border-[rgba(212,175,55,0.15)]">
          {i.map((e, n) => {
            let I = e.icon,
              r = e.label === "Party Room",
              l = (
                <>
                  <div className="relative z-10">
                    <div className="mb-2.5 sm:mb-3.5 flex items-center justify-between">
                      <div className="text-[#d4af37] transition-transform duration-300 group-hover:scale-110">
                        <I className="h-6 w-6 sm:h-7 sm:w-7 text-[#d4af37]" />
                      </div>
                    </div>
                    <span
                      className={`block font-sans text-xs sm:text-sm font-medium leading-snug transition-colors ${r ? "text-[#d4af37]" : "text-[#f4efe6] group-hover:text-[#d4af37]"}`}
                    >
                      {e.label}
                    </span>
                    <span className="hidden sm:block font-sans text-xs font-light text-[#a39c93] leading-relaxed mt-1.5">
                      {e.detail}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-[#d4af37] transition-all duration-500 group-hover:w-full" />
                </>
              );
            return (
              <Reveal delay={30 * n} className="h-full" key={e.label}>
                {r ? (
                  <Link
                    href="/party-room"
                    className="group relative flex h-full flex-col justify-between border-b border-r border-[rgba(212,175,55,0.45)] p-3.5 sm:p-5 transition-all duration-300 overflow-hidden bg-[#131018] shadow-[0_0_25px_rgba(212,175,55,0.18)] hover:border-[#d4af37] hover:shadow-[0_0_35px_rgba(212,175,55,0.35)] cursor-pointer"
                  >
                    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                      <span
                        className="absolute top-3 right-4 text-[#ffd700] text-sm font-serif select-none animate-sparkle-star"
                        style={{
                          animationDelay: "0.2s",
                        }}
                      >
                        ✦
                      </span>
                      <span
                        className="absolute top-8 right-8 text-[#ffe57f] text-[11px] font-serif select-none animate-sparkle-star"
                        style={{
                          animationDelay: "1.4s",
                        }}
                      >
                        ✧
                      </span>
                      <span
                        className="absolute bottom-4 right-5 text-[#ffd700] text-xs font-serif select-none animate-sparkle-star"
                        style={{
                          animationDelay: "2.2s",
                        }}
                      >
                        ✦
                      </span>
                      <span
                        className="absolute top-1/2 right-3 h-1.5 w-1.5 rounded-full bg-[#fff8d6] shadow-[0_0_8px_#ffd700,0_0_14px_#d4af37] animate-freckle"
                        style={{
                          animationDelay: "0.8s",
                        }}
                      />
                      <span
                        className="absolute bottom-3 left-[40%] h-1 w-1 rounded-full bg-[#ffd700] shadow-[0_0_6px_#ffd700] animate-freckle-drift-1"
                        style={{
                          animationDelay: "1.7s",
                        }}
                      />
                    </div>
                    {l}
                  </Link>
                ) : (
                  <div className="group relative flex h-full flex-col justify-between border-b border-r border-[rgba(212,175,55,0.15)] p-3.5 sm:p-5 transition-colors duration-300 overflow-hidden bg-[#0c0a0f] hover:bg-[#131017]">
                    {l}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export { Amenities };
export default Amenities;
