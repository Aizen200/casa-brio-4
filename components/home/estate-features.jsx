"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/reveal";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
let c = [
  {
    title: "Party Room & Bar",
    category: "GAMES & FUN",
    description:
      "A private party room with a full-size snooker table, leather sofas and a strong sound system.",
    images: [
      {
        src: "/images/bungalow/billiards-leather-lounge.png",
        caption: "Full-size snooker table with cue racks and leather sofas.",
        alt: "Party room snooker table and leather sofas",
      },
      {
        src: "/images/bungalow/speakeasy-snooker-neon.png",
        caption: "Neon lights and a fun party feel.",
        alt: "Party room neon lights",
      },
      {
        src: "/images/bungalow/bar-counter-snooker.png",
        caption: "Private bar with glassware and backlit shelves.",
        alt: "Party room private bar",
      },
      {
        src: "/images/bungalow/snooker-bar-lounge.jpg",
        caption: "The full party room with foosball, snooker and seating.",
        alt: "Full view of the party room",
      },
    ],
  },
  {
    title: "Swimming Pool & Deck",
    category: "PRIVATE POOL",
    description:
      "A clear blue pool with a lit-up wooden deck, sunbeds and space to eat by the pool.",
    images: [
      {
        src: "/images/bungalow/pool-day-pergola.jpg",
        caption: "The pool in daylight, with a wooden deck and sunbeds.",
        alt: "Pool and wooden pergola during the day",
      },
      {
        src: "/images/bungalow/pool-night-pergola.jpg",
        caption: "The pool at night with warm lights.",
        alt: "Pool night view with pergola lights",
      },
      {
        src: "/images/bungalow/pool-party-celebration.png",
        caption: "An evening pool party with lights and a barbecue.",
        alt: "Pool celebration evening view",
      },
      {
        src: "/images/bungalow/garden-lounge.jpg",
        caption: "Garden deck with plants and quiet seating.",
        alt: "Garden lounge by the poolside",
      },
    ],
  },
  {
    title: "Box Cricket Turf",
    category: "PRIVATE SPORTS",
    description:
      "A fully netted cricket turf inside the villa. Play in the day, or at night under floodlights.",
    images: [
      {
        src: "/images/bungalow/cricket-turf-day.png",
        caption: "All-weather turf with safety nets all around.",
        alt: "Box cricket turf in daytime",
      },
      {
        src: "/images/bungalow/turf-play-night.jpg",
        caption: "A night match under bright floodlights.",
        alt: "Box cricket night match with floodlights",
      },
      {
        src: "/images/bungalow/turf-angle-2.png",
        caption: "Netted on all sides, with a proper pitch size.",
        alt: "Cricket turf pitch angle",
      },
      {
        src: "/images/bungalow/turf-angle-3.png",
        caption: "Space for many sports, with a kids' play area next to it.",
        alt: "Turf multi-sport play area",
      },
    ],
  },
  {
    title: "Bedrooms with a View",
    category: "MOUNTAIN VIEWS",
    description:
      "4 large bedrooms with big glass windows that look out at the misty Sahyadri hills.",
    images: [
      {
        src: "/images/bungalow/master-suite-view.jpg",
        caption: "Main bedroom with a king bed and big windows facing the mountains.",
        alt: "Master bedroom with mountain views",
      },
      {
        src: "/images/bungalow/bedroom-suite-2.jpg",
        caption: "Bedroom with soft bedding and AC.",
        alt: "Executive bedroom suite",
      },
      {
        src: "/images/bungalow/bedroom-suite-3.jpg",
        caption: "Cosy guest room with warm lamps and wooden finish.",
        alt: "Guest bedroom suite 3",
      },
      {
        src: "/images/bungalow/suite-evening-cocktails.png",
        caption: "Private balcony to enjoy the sunset with a drink.",
        alt: "Suite balcony evening cocktail view",
      },
    ],
  },
  {
    title: "Living & Dining Room",
    category: "LIVING SPACES",
    description:
      "A big living room for chatting, eating together and relaxing as a group.",
    images: [
      {
        src: "/images/bungalow/living-dining-view.jpg",
        caption: "Large living room next to a 12-seater dining table.",
        alt: "Living and dining hall view",
      },
      {
        src: "/images/bungalow/living-lounge-party.jpg",
        caption: "Big sofa with a 4K TV and surround sound.",
        alt: "Living lounge party seating",
      },
      {
        src: "/images/bungalow/party-lounge-detail.jpg",
        caption: "Chandelier and soft ceiling lights.",
        alt: "Living room architectural detail",
      },
      {
        src: "/images/bungalow/interior-portrait-1.jpg",
        caption: "Cosy corners for morning coffee and late-night chats.",
        alt: "Interior salon lounge seating",
      },
    ],
  },
  {
    title: "Modern Bathrooms",
    category: "BATHROOMS",
    description:
      "Clean, attached bathrooms with a marble finish, rain showers and soft lighting.",
    images: [
      {
        src: "/images/bungalow/designer-washroom.jpg",
        caption: "Marble bathroom with a glass shower and a big rain shower.",
        alt: "Designer Italian marble washroom",
      },
      {
        src: "/images/bungalow/interior-portrait-2.jpg",
        caption: "Modern sink area with gold taps, lit mirrors and toiletries.",
        alt: "Bespoke washroom vanity and mirror",
      },
      {
        src: "/images/bungalow/estate-balcony-view.jpg",
        caption: "Balcony with fresh air, natural light and valley views.",
        alt: "Balcony terrace mountain view",
      },
    ],
  },
];
function EstateFeatures() {
  let [e, s] = useState(null),
    n = (e, a = 0) => {
      s({
        featureIdx: e,
        imageIdx: a,
      });
    };
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#08080a] py-16 sm:py-20 text-[#f4efe6]"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col gap-6 pb-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3.5">
                <span className="h-px w-8 bg-[#d4af37]" />
                <span className="eyebrow text-xs tracking-[0.28em] font-semibold text-[#d4af37]">
                  VILLA HIGHLIGHTS
                </span>
                <span className="h-px w-8 bg-[#d4af37]" />
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-[#f4efe6] pb-2">
                Everything You Need.{" "}
                <span className="text-[#d4af37] font-normal">Nothing You Share.</span>
              </h2>
            </div>
            <p className="max-w-md font-sans text-sm font-light leading-[1.85] text-[#e6dfd5]/80">
              Six spaces made just for your group. Great for lazy afternoons, fun evenings and
              total privacy.
            </p>
          </div>
        </Reveal>
        <div className="md:hidden -mx-6 px-6 sm:-mx-8 sm:px-8">
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-3 pt-1">
            {c.map((e, t) => (
              <div
                className="w-[76vw] sm:w-[350px] shrink-0 snap-start flex flex-col"
                key={e.title}
              >
                <X_ item={e} featureIdx={t} onOpenModal={n} isMobile={!0} />
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {c.map((e, t) => (
            <X_ item={e} featureIdx={t} onOpenModal={n} key={e.title} />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {null !== e && (
          <G
            feature={c[e.featureIdx]}
            currentImageIdx={e.imageIdx}
            onClose={() => {
              s(null);
            }}
            onNext={(a) => {
              if ((a && a.stopPropagation(), !e)) return;
              let t = c[e.featureIdx],
                n = (e.imageIdx + 1) % t.images.length;
              s({
                ...e,
                imageIdx: n,
              });
            }}
            onPrev={(a) => {
              if ((a && a.stopPropagation(), !e)) return;
              let t = c[e.featureIdx],
                n = (e.imageIdx - 1 + t.images.length) % t.images.length;
              s({
                ...e,
                imageIdx: n,
              });
            }}
            onSelectImage={(a) =>
              s({
                ...e,
                imageIdx: a,
              })
            }
          />
        )}
      </AnimatePresence>
    </section>
  );
}
function X_({ item: e, featureIdx: s, onOpenModal: i, isMobile: l }) {
  let [o, c] = useState(0),
    m = e.images.length;
  useEffect(() => {
    if (m <= 1) return;
    let e = setTimeout(
      () => {
        let e = setInterval(() => {
          c((e) => (e + 1) % m);
        }, 4200);
        return () => clearInterval(e);
      },
      (s % 3) * 600,
    );
    return () => clearTimeout(e);
  }, [m, s]);
  let g = (
    <div
      onClick={() => i(s, o)}
      className="group relative flex h-full flex-col overflow-hidden rounded-none border border-[rgba(212,175,55,0.2)] bg-[#121015] shadow-xl transition-all duration-500 hover:border-[#d4af37] hover:shadow-[0_12px_35px_rgba(212,175,55,0.18)] cursor-pointer"
    >
      <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-black shrink-0">
        {e.images.map((e, t) => {
          let s = t === o;
          return (
            <img
              src={e.src}
              alt={e.alt}
              className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-1000 ease-in-out ${s ? "opacity-100 scale-100 group-hover:scale-105 z-0" : "opacity-0 scale-105 z-0 pointer-events-none"}`}
              key={e.src}
            />
          );
        })}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121015] via-transparent to-transparent pointer-events-none z-10" />
        <div className="absolute top-4 left-4 border border-[rgba(212,175,55,0.35)] bg-[#08080a]/85 px-3 py-1 backdrop-blur-md z-10 pointer-events-none">
          <span className="font-sans text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold">
            {e.category}
          </span>
        </div>
        {m > 1 && (
          <div className="absolute top-4 right-4 flex items-center gap-1 z-10 pointer-events-none bg-black/50 backdrop-blur-sm px-2 py-1 border border-[rgba(212,175,55,0.25)]">
            {e.images.map((e, t) => (
              <span
                className={`h-1 transition-all duration-500 ${t === o ? "w-3.5 bg-[#d4af37]" : "w-1 bg-white/30"}`}
                key={t}
              />
            ))}
          </div>
        )}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none z-10">
          <span className="inline-flex items-center gap-2 border border-[#d4af37] bg-[#08080a]/90 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37] shadow-lg">
            <span>View Gallery</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 pt-4">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#f4efe6] group-hover:text-[#d4af37] transition-colors">
            {e.title}
          </h3>
          <p className="mt-2 font-sans text-xs sm:text-sm font-light leading-relaxed text-[#e6dfd5]/85">
            {e.description}
          </p>
        </div>
        <div className="mt-4 pt-3 border-t border-[rgba(212,175,55,0.12)] flex items-center justify-between text-xs text-[#d4af37]">
          <span className="font-sans font-medium tracking-wide">
            See Photos ({m}
            {" photos)"}
          </span>
          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
  return l ? g : <Reveal delay={80 * s}>{g}</Reveal>;
}
function G({ feature: e, currentImageIdx: t, onClose: r, onNext: d, onPrev: c, onSelectImage: m }) {
  let x = e.images[t],
    h = e.images.length;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
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
        onClick={r}
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
      />
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
          y: 15,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.95,
          y: 15,
        }}
        transition={{
          duration: 0.28,
          ease: "easeOut",
        }}
        className="relative z-10 flex flex-col w-full max-w-6xl max-h-[94vh] overflow-hidden rounded-none border border-[#d4af37] bg-[#0c0a10] shadow-[0_25px_80px_rgba(0,0,0,0.95)]"
      >
        <div className="flex items-center justify-between border-b border-[rgba(212,175,55,0.2)] bg-[#121015] px-5 sm:px-6 py-3.5 sm:py-4 gap-4">
          <div className="flex items-center shrink-0">
            <h3 className="font-serif text-lg sm:text-2xl text-[#f4efe6] whitespace-nowrap">
              {e.title}
            </h3>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 min-w-0 justify-end">
            <p className="hidden md:block text-right font-sans text-xs font-light text-[#e6dfd5]/85 whitespace-nowrap truncate">
              {x.caption || e.description}
            </p>
            <button
              onClick={r}
              aria-label="Close dialog"
              className="flex h-9 w-9 sm:h-9 sm:w-9 items-center justify-center border border-[rgba(212,175,55,0.4)] bg-[#08080a] text-[#f4efe6] transition-colors hover:bg-[#d4af37] hover:text-[#08080a] shrink-0"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="relative w-full h-[52vh] sm:h-[60vh] md:h-[64vh] bg-black overflow-hidden">
          <div className="absolute top-4 left-4 z-20 pointer-events-none">
            <span className="border border-[rgba(212,175,55,0.5)] bg-[#08080a]/90 backdrop-blur-md px-3 sm:px-3.5 py-1 sm:py-1.5 text-[9.5px] sm:text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[#d4af37] shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              {e.category}
            </span>
          </div>
          <AnimatePresence mode="wait">
            <motion.img
              src={x.src}
              alt={x.alt}
              initial={{
                opacity: 0,
                scale: 1.04,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.98,
              }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
              className="h-full w-full object-cover object-center"
              key={x.src}
            />
          </AnimatePresence>
          {h > 1 && (
            <button
              type="button"
              onClick={c}
              aria-label="Previous photo"
              className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full border border-[#d4af37] bg-black/80 text-[#f5d77f] backdrop-blur-md transition-all duration-300 hover:border-[#f5d77f] hover:bg-[#d4af37] hover:text-[#08080a] hover:scale-110 active:scale-95 shadow-[0_4px_24px_rgba(0,0,0,0.9)] cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2.2]" />
            </button>
          )}
          {h > 1 && (
            <button
              type="button"
              onClick={d}
              aria-label="Next photo"
              className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full border border-[#d4af37] bg-black/80 text-[#f5d77f] backdrop-blur-md transition-all duration-300 hover:border-[#f5d77f] hover:bg-[#d4af37] hover:text-[#08080a] hover:scale-110 active:scale-95 shadow-[0_4px_24px_rgba(0,0,0,0.9)] cursor-pointer"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2.2]" />
            </button>
          )}
        </div>
        <div className="border-t border-[rgba(212,175,55,0.2)] bg-[#121015] p-4 sm:p-5 flex flex-col items-center justify-center gap-3">
          <div className="md:hidden text-center max-w-lg">
            <p className="font-sans text-xs font-light leading-relaxed text-[#e6dfd5]/90">
              {x.caption || e.description}
            </p>
          </div>
          {h > 1 && (
            <div className="flex items-center justify-center gap-2.5 sm:gap-3.5 overflow-x-auto max-w-full pb-1">
              {e.images.map((e, s) => (
                <button
                  onClick={() => m(s)}
                  className={`relative h-12 w-16 sm:h-14 sm:w-20 overflow-hidden border transition-all duration-300 cursor-pointer shrink-0 ${s === t ? "border-[#d4af37] scale-105 shadow-[0_0_12px_rgba(212,175,55,0.5)] ring-1 ring-[#d4af37]" : "border-white/20 opacity-50 hover:opacity-100 hover:border-white/50"}`}
                  key={e.src}
                >
                  <img
                    src={e.src}
                    alt={e.alt}
                    className="h-full w-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
export { EstateFeatures };
export default EstateFeatures;
