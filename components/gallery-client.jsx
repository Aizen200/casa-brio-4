"use client";

import { ArrowRight, ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { FramePhoto } from "@/components/lightbox";
import { galleryPhotos } from "@/components/gallery-photos";
let P = Maximize2;
// How many photos the grid shows at first, and adds each time "Load more" is clicked.
const PAGE_SIZE = 24;
// How many thumbnails the full-screen viewer shows on each side of the current photo.
const THUMB_RADIUS = 5;
let b = [
    {
      id: "facade-drone",
      src: "/images/bungalow/drone-facade.jpg",
      title: "The Villa from Above",
      category: "Pool & Deck",
      aspect: "wide",
      caption: "A drone view of the villa and its grounds near Tungarli hill.",
    },
    {
      id: "snooker-hero",
      src: "/images/bungalow/snooker-bar-lounge.jpg",
      title: "Snooker Table",
      category: "Party Room & Bar",
      aspect: "landscape",
      caption: "A full-size snooker table with bright lights above it.",
    },
    {
      id: "billiards-leather",
      src: "/images/bungalow/billiards-leather-lounge.png",
      title: "Leather Sofas",
      category: "Party Room & Bar",
      aspect: "portrait",
      caption: "Brown leather chairs and cue racks in the party room.",
    },
    {
      id: "bar-counter",
      src: "/images/bungalow/bar-counter-snooker.png",
      title: "Private Bar",
      category: "Party Room & Bar",
      aspect: "portrait",
      caption: "A lit-up bar with glasses and a drinks counter.",
    },
    {
      id: "turf-day",
      src: "/images/bungalow/cricket-turf-day.png",
      title: "Box Cricket Turf",
      category: "Cricket Turf",
      aspect: "wide",
      caption: "A netted turf for cricket, day or night.",
    },
    {
      id: "pool-night",
      src: "/images/bungalow/pool-night-pergola.jpg",
      title: "Pool at Night",
      category: "Pool & Deck",
      aspect: "landscape",
      caption: "Blue underwater lights make the pool glow at night.",
    },
    {
      id: "pool-day",
      src: "/images/bungalow/pool-day-pergola.jpg",
      title: "Pool in the Daytime",
      category: "Pool & Deck",
      aspect: "landscape",
      caption: "Clear water with a wooden deck and shaded seating.",
    },
    {
      id: "master-suite",
      src: "/images/bungalow/master-suite-view.jpg",
      title: "Main Bedroom",
      category: "Bedrooms & Living",
      aspect: "landscape",
      caption: "Big glass doors that open onto a balcony with hill views.",
    },
    {
      id: "living-salon",
      src: "/images/bungalow/living-lounge-party.jpg",
      title: "Living Room",
      category: "Bedrooms & Living",
      aspect: "landscape",
      caption: "A large living room with comfy sofas and soft lighting.",
    },
    {
      id: "living-dining",
      src: "/images/bungalow/living-dining-view.jpg",
      title: "Dining Area",
      category: "Bedrooms & Living",
      aspect: "landscape",
      caption: "A 12-seater marble dining table for meals cooked by the chef.",
    },
    {
      id: "speakeasy-neon",
      src: "/images/bungalow/speakeasy-snooker-neon.png",
      title: "Party Room Lights",
      category: "Party Room & Bar",
      aspect: "portrait",
      caption: "Mood lights, art on the walls and a fun night-time feel.",
    },
    {
      id: "snooker-corner",
      src: "/images/bungalow/snooker-corner-cue.png",
      title: "Snooker Cues",
      category: "Party Room & Bar",
      aspect: "portrait",
      caption: "Cues and snooker gear, ready to play.",
    },
    {
      id: "bar-ambiance",
      src: "/images/bungalow/bar-ambiance-warm.png",
      title: "The Bar Shelf",
      category: "Party Room & Bar",
      aspect: "portrait",
      caption: "Warm lights on a shelf of whisky and rum.",
    },
    {
      id: "turf-night",
      src: "/images/bungalow/turf-play-night.jpg",
      title: "Night Cricket",
      category: "Cricket Turf",
      aspect: "landscape",
      caption: "Bright floodlights so you can play cricket and football at night.",
    },
    {
      id: "turf-angle-2",
      src: "/images/bungalow/turf-angle-2.png",
      title: "Turf with Hill Views",
      category: "Cricket Turf",
      aspect: "landscape",
      caption: "Nets all around so the ball stays in, with hills in the background.",
    },
    {
      id: "turf-angle-3",
      src: "/images/bungalow/turf-angle-3.png",
      title: "Space for Many Sports",
      category: "Cricket Turf",
      aspect: "landscape",
      caption: "Big enough for cricket, football and team games.",
    },
    {
      id: "bedroom-suite-2",
      src: "/images/bungalow/bedroom-suite-2.jpg",
      title: "Bedroom 2",
      category: "Bedrooms & Living",
      aspect: "landscape",
      caption: "Soft king bed, a quiet room and fresh hill air.",
    },
    {
      id: "bedroom-suite-3",
      src: "/images/bungalow/bedroom-suite-3.jpg",
      title: "Bedroom 3",
      category: "Bedrooms & Living",
      aspect: "landscape",
      caption: "A simple, stylish room with wooden details and warm lamps.",
    },
    {
      id: "estate-balcony",
      src: "/images/bungalow/estate-balcony-view.jpg",
      title: "Balcony View",
      category: "Bedrooms & Living",
      aspect: "landscape",
      caption: "A great spot for morning coffee while the mist rolls over the valley.",
    },
    {
      id: "designer-bath",
      src: "/images/bungalow/designer-washroom.jpg",
      title: "Marble Bathroom",
      category: "Bedrooms & Living",
      aspect: "landscape",
      caption: "Attached bathroom with a rain shower, modern sink and gold taps.",
    },
    {
      id: "suite-cocktails",
      src: "/images/bungalow/suite-evening-cocktails.png",
      title: "Evening Drinks",
      category: "Party Room & Bar",
      aspect: "portrait",
      caption: "Drinks made fresh for you by the villa staff.",
    },
    {
      id: "party-lounge-detail",
      src: "/images/bungalow/party-lounge-detail.jpg",
      title: "Lounge Seating",
      category: "Party Room & Bar",
      aspect: "landscape",
      caption: "Big sofas for card games, music and long chats.",
    },
    {
      id: "interior-portrait-1",
      src: "/images/bungalow/interior-portrait-1.jpg",
      title: "Staircase",
      category: "Bedrooms & Living",
      aspect: "portrait",
      caption: "Wooden steps and brass railings that connect the floors.",
    },
    {
      id: "interior-portrait-2",
      src: "/images/bungalow/interior-portrait-2.jpg",
      title: "Entrance",
      category: "Bedrooms & Living",
      aspect: "portrait",
      caption: "Modern art and bright lights at the entrance.",
    },
    {
      id: "garden-lounge",
      src: "/images/bungalow/garden-lounge.jpg",
      title: "Garden Lawn",
      category: "Pool & Deck",
      aspect: "landscape",
      caption: "A green lawn next to the pool, great for breakfast outside."
    },
    {
      id: "kids-play",
      src: "/images/bungalow/kids-play-area.jpg",
      title: "Play Area",
      category: "Cricket Turf",
      aspect: "landscape",
      caption: "A lawn for family games and kids' play.",
    },
    ...galleryPhotos,
  ],
  x = [
    {
      label: "All",
      count: b.length,
    },
    {
      label: "Party Room & Bar",
      count: b.filter((e) => "Party Room & Bar" === e.category).length,
    },
    {
      label: "Pool & Deck",
      count: b.filter((e) => "Pool & Deck" === e.category).length,
    },
    {
      label: "Bedrooms & Living",
      count: b.filter((e) => "Bedrooms & Living" === e.category).length,
    },
    {
      label: "Cricket Turf",
      count: b.filter((e) => "Cricket Turf" === e.category).length,
    },
    {
      label: "Exterior & Views",
      count: b.filter((e) => "Exterior & Views" === e.category).length,
    },
    {
      label: "Kids Play Area",
      count: b.filter((e) => "Kids Play Area" === e.category).length,
    },
  ];
export const GalleryClient = function () {
  let [e, d] = useState("All"),
    [u, y] = useState(null),
    [v, w] = useState(b),
    [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  useEffect(() => {
    w(
      (function (e) {
        let t = [...e];
        for (let e = t.length - 1; e > 0; e--) {
          let r = Math.floor(Math.random() * (e + 1));
          [t[e], t[r]] = [t[r], t[e]];
        }
        return t;
      })(b),
    );
  }, []);
  let j = useMemo(() => ("All" === e ? v : v.filter((t) => t.category === e)), [v, e]),
    k = () => {
      y(null);
    },
    E = useCallback(() => {
      null !== u && y((e) => (e + 1) % j.length);
    }, [u, j.length]),
    S = useCallback(() => {
      null !== u && y((e) => (e - 1 + j.length) % j.length);
    }, [u, j.length]);
  return (
    useEffect(() => {
      let e = (e) => {
        null !== u &&
          ("Escape" === e.key && k(), "ArrowRight" === e.key && E(), "ArrowLeft" === e.key && S());
      };
      return (
        window.addEventListener("keydown", e),
        () => window.removeEventListener("keydown", e)
      );
    }, [u, E, S]),
    (
      <div
        suppressHydrationWarning={!0}
        className="min-h-screen bg-[#08080a] text-foreground selection:bg-[#d4af37]/30 selection:text-[#f5d77f]"
      >
        <SiteHeader />
        <main className="relative">
          <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-10 sm:pb-14">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute top-0 left-1/2 h-[550px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-500/10 via-transparent to-transparent blur-3xl" />
            </div>
            <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
              <div className="text-center mx-auto">
                <div className="max-w-3xl mx-auto">
                  <Reveal>
                    <div className="mb-4 sm:mb-5 inline-flex items-center gap-3.5 justify-center">
                      <span className="h-px w-8 bg-[#d4af37]" />
                      <span className="eyebrow text-xs tracking-[0.28em] font-semibold text-[#d4af37]">
                        PHOTO GALLERY
                      </span>
                      <span className="h-px w-8 bg-[#d4af37]" />
                    </div>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#f4efe6]">
                      Take a Look <span className="text-[#d4af37] font-normal">Around</span>
                    </h1>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <p className="mt-3.5 font-sans text-sm font-light leading-[1.8] text-[#e6dfd5]/80">
                      Photos of every part of Casa Brio, from the snooker table to the pool
                      deck.
                    </p>
                  </Reveal>
                </div>
                <div className="max-w-5xl mx-auto">
                  <Reveal delay={0.3}>
                    <div className="mt-8 -mx-6 flex w-[calc(100%+3rem)] items-center justify-start gap-2 overflow-x-auto no-scrollbar px-6 py-1 sm:mx-0 sm:w-full sm:flex-wrap sm:justify-center sm:gap-2.5 sm:overflow-x-visible sm:px-1">
                      {x.map((r) => {
                        let i = e === r.label;
                        return (
                          <button
                            onClick={() => {
                              (d(r.label), y(null), setVisibleCount(PAGE_SIZE));
                            }}
                            className={`group inline-flex shrink-0 whitespace-nowrap items-center gap-2 border px-4 sm:px-4.5 py-2 text-[12px] sm:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.18em] transition-all duration-300 ${i ? "border-[#d4af37] bg-[#d4af37] text-[#08080a]" : "border-[rgba(212,175,55,0.2)] bg-[#121015] text-[#e6dfd5]/80 hover:border-[#d4af37] hover:text-[#d4af37]"}`}
                            key={r.label}
                          >
                            <span>{r.label}</span>
                            <span
                              className={`px-1.5 py-0.5 text-[10.5px] sm:text-[11px] font-sans font-semibold ${i ? "bg-[#08080a]/20 text-[#08080a]" : "bg-[#08080a] text-[#a39c93]"}`}
                            >
                              {r.count}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
          <section className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 pb-20 sm:pb-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[240px] lg:grid-flow-row-dense gap-4 sm:gap-5">
              <AnimatePresence mode="popLayout">
                {j.slice(0, visibleCount).map((e, r) => {
                  let a = r % 8,
                    o = "lg:col-span-1 lg:row-span-1";
                  return (
                    0 === a || 7 === a
                      ? (o = "lg:col-span-2 lg:row-span-2")
                      : (3 === a || 6 === a) && (o = "lg:col-span-2 lg:row-span-1"),
                    // Tall photos get a tall tile so heads and faces are not cropped off.
                    "portrait" === e.aspect && (o = "lg:col-span-1 lg:row-span-2"),
                    (
                      <motion.div
                        layout={!0}
                        initial={{
                          opacity: 0,
                          y: 16,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.96,
                        }}
                        transition={{
                          duration: 0.35,
                          delay: (r % 8) * 0.03,
                        }}
                        className={`group relative ${"portrait" === e.aspect ? "h-[520px] sm:h-[500px]" : "h-[260px] sm:h-[290px]"} lg:h-full w-full overflow-hidden rounded-none border border-[rgba(212,175,55,0.22)] bg-white/[0.06] cursor-pointer transition-all duration-300 hover:border-[#d4af37] shadow-lg hover:shadow-[0_12px_36px_rgba(0,0,0,0.85)] ${o}`}
                        onClick={() => {
                          y(r);
                        }}
                        key={e.id}
                      >
                        <Image
                          src={e.src}
                          alt={e.title}
                          fill={!0}
                          className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-black/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#08080a]/80 backdrop-blur-md border border-[rgba(212,175,55,0.35)] text-[#f5d77f] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105">
                          <P className="h-4 w-4" />
                        </div>
                      </motion.div>
                    )
                  );
                })}
              </AnimatePresence>
            </div>
            {visibleCount < j.length && (
              <div className="mt-10 flex flex-col items-center gap-3">
                <button
                  type="button"
                  onClick={() => setVisibleCount((e) => e + PAGE_SIZE)}
                  className="inline-flex items-center gap-2 border border-[#d4af37] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af37] transition-all duration-300 hover:bg-[#d4af37] hover:text-[#08080a]"
                >
                  Load more
                </button>
                <p className="font-sans text-xs text-[#a39c93]">
                  Showing {visibleCount} of {j.length} photos
                </p>
              </div>
            )}
          </section>
          <AnimatePresence>
            {null !== u && (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
                onClick={k}
              >
                <div
                  className="absolute top-6 inset-x-6 sm:inset-x-10 z-20 flex items-center justify-between"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-amber-500/20 border border-amber-500/40 px-3 py-1 text-xs font-sans font-semibold tracking-wider text-[#f5d77f]">
                      {String(u + 1).padStart(2, "0")}
                      {" /"} {String(j.length).padStart(2, "0")}
                    </span>
                    <span className="hidden sm:inline text-xs uppercase tracking-[0.2em] text-[#d4af37]">
                      {j[u]?.category}
                    </span>
                  </div>
                  <button
                    onClick={k}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-transform hover:scale-105"
                    aria-label="Close Lightbox"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <button
                  onClick={(e) => {
                    (e.stopPropagation(), S());
                  }}
                  className="absolute left-4 sm:left-8 z-20 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-black/60 hover:bg-black/90 border border-amber-500/30 text-white transition-all hover:scale-110 hover:border-amber-400"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="h-6 w-6 text-[#f5d77f]" />
                </button>
                <button
                  onClick={(e) => {
                    (e.stopPropagation(), E());
                  }}
                  className="absolute right-4 sm:right-8 z-20 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-black/60 hover:bg-black/90 border border-amber-500/30 text-white transition-all hover:scale-110 hover:border-amber-400"
                  aria-label="Next Image"
                >
                  <ChevronRight className="h-6 w-6 text-[#f5d77f]" />
                </button>
                <div
                  className="relative max-h-[60vh] sm:max-h-[72vh] max-w-[92vw] sm:max-w-[80vw] lg:max-w-[70vw] w-full aspect-[16/10] overflow-hidden rounded-none border border-amber-500/20 bg-white/[0.06] shadow-[0_0_50px_rgba(0,0,0,0.9)]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FramePhoto src={j[u]?.src} alt={j[u]?.title} key={j[u]?.src} />
                </div>
                <div
                  className="absolute bottom-4 sm:bottom-6 inset-x-3 sm:inset-x-8 z-20 flex items-center justify-start sm:justify-center gap-2 sm:gap-2.5 overflow-x-auto scrollbar-none py-2 px-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  {j.map((e, r) => {
                    if (Math.abs(r - u) > THUMB_RADIUS) return null;
                    return (
                    <button
                      type="button"
                      onClick={() => y(r)}
                      className={`relative h-12 w-16 sm:h-14 sm:w-20 overflow-hidden border transition-all duration-300 cursor-pointer shrink-0 rounded-none ${r === u ? "border-[#d4af37] scale-105 shadow-[0_0_12px_rgba(212,175,55,0.6)] ring-1 ring-[#d4af37]" : "border-white/20 opacity-50 hover:opacity-100 hover:border-white/50"}`}
                      key={e.id}
                    >
                      <Image
                        src={e.src}
                        alt={e.title}
                        fill={!0}
                        sizes="80px"
                        className="object-cover object-center"
                      />
                    </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <section className="relative py-20 sm:py-24 border-t border-[rgba(212,175,55,0.15)] bg-[#08080a]">
            <div className="mx-auto max-w-4xl px-6 sm:px-8 text-center">
              <Reveal>
                <div className="inline-flex items-center justify-center gap-3 mb-4">
                  <span className="h-px w-6 bg-[#d4af37]" />
                  <span className="eyebrow text-xs uppercase tracking-[0.28em] font-semibold text-[#d4af37]">
                    VISIT US
                  </span>
                  <span className="h-px w-6 bg-[#d4af37]" />
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#f4efe6] leading-[1.2]">
                  Want to see the villa in person?
                </h2>
                <p className="mt-4 font-sans text-sm sm:text-base font-light text-[#e6dfd5]/80 leading-relaxed max-w-xl mx-auto mb-8">
                  Book a visit, or ask us about booking Casa Brio for your group.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className={
                      "\n                    group\n                    inline-flex\n                    h-12\n                    sm:h-13\n                    items-center\n                    gap-3\n                    rounded-none\n                    bg-[#d4af37]\n                    px-7\n                    sm:px-8\n                    text-xs\n                    font-semibold\n                    uppercase\n                    tracking-[0.16em]\n                    text-[#08080a]\n                    shadow-[0_4px_25px_rgba(212,175,55,0.25)]\n                    transition-all\n                    duration-300\n                    hover:bg-[#b8952b]\n                    hover:shadow-[0_4px_35px_rgba(212,175,55,0.4)]\n                  "
                    }
                  >
                    <span>Ask About Booking</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/party-room"
                    className={
                      "\n                    group\n                    inline-flex\n                    h-12\n                    sm:h-13\n                    items-center\n                    gap-3\n                    rounded-none\n                    border\n                    border-[rgba(212,175,55,0.4)]\n                    bg-[rgba(18,16,21,0.6)]\n                    px-7\n                    sm:px-8\n                    text-xs\n                    font-semibold\n                    uppercase\n                    tracking-[0.16em]\n                    text-[#f4efe6]\n                    backdrop-blur-md\n                    transition-all\n                    duration-300\n                    hover:border-[#d4af37]\n                    hover:bg-[#d4af37]\n                    hover:text-[#08080a]\n                  "
                    }
                  >
                    <span>See the Party Room</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    )
  );
};
