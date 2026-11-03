"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/reveal";
import { AnimatePresence } from "framer-motion";
import { Lightbox } from "@/components/lightbox";
import { ArrowRight, ChevronRight } from "lucide-react";
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
          <Lightbox
            images={c[e.featureIdx].images.map((t) => ({
              ...t,
              label: c[e.featureIdx].title,
            }))}
            index={e.imageIdx}
            onIndexChange={(a) =>
              s({
                ...e,
                imageIdx: a,
              })
            }
            onClose={() => {
              s(null);
            }}
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
          <span className="font-sans text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold">
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
export { EstateFeatures };
export default EstateFeatures;
