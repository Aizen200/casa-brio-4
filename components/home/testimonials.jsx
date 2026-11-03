"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/reveal";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
let r = [
  {
    author: "Jash Hakani",
    quote:
      "Amazing villa!! Great mountain view\nGreat property & very well maintained\nrooms were spacious and clean, and all the amenities were excellent\nSpecially whole separate themed party room/cricket turf / kids play area\nThe caretaker service was outstanding Very polite, helpful, and cooperative throughout our stay. All our needs were taken care of\n[...]\nWould definitely love to visit again",
  },
  {
    author: "Nilofer Qureshi",
    quote:
      "It was sheer delight staying in this bungalow. [...] Their turf is huge, the pool is enough big for grow ups also they have smaller pools for kids.",
  },
  {
    author: "Jitendra Kumar",
    quote:
      "Affordable prices with premium quality service. Comfortable rooms, great ambiance, and fast room service. Loved my stay",
  },
  {
    author: "Tanmay Luthia",
    quote:
      "Celebrated my birthday at Casa Brio with my friends and honestly, full paisa vasool experience. The staff was super sweet and helpful, not in a forced way, just very chill and sorted whenever we needed anything. We ended up spending most of our time between the pool and the turf. The party room was also solid for music and a games night. Overall everything was smooth, no stress, just good vibes throughout. Definitely a place I’d come back to for another scene with friends.",
  },
  {
    author: "Disha Popat",
    quote:
      "We recently stayed at Casa Brio with our family and had a really great experience. One thing we especially appreciated was the dedicated kids’ play area it made a big difference for us. The space felt safe and well thought out, so the kids could play freely while we relaxed. Overall, the villa is well-maintained, spacious, and perfect for family getaways. It’s definitely a comfortable and convenient option if you’re traveling with children. Would happily visit again!",
  },
  {
    author: "Piyush Sane",
    quote:
      "After graduation, we finally planned a small reunion. Casa Brio was the perfect place for us. We spent time in the private pool, played on the turf, and just sat together in the party room talking and laughing. It was also easy for everyone to come, whether from Mumbai or Pune.",
  },
  {
    author: "ShivKumar Shah",
    quote:
      "Had a great stay at Casa Brio Villa. The property is clean and well maintained. The pool is great to relax, and the party room is perfect for small gatherings. The turf area is also a nice addition for some fun outdoor time. Overall, a great place to stay with friends.",
  },
  {
    author: "Farheen Qureshi",
    quote:
      "We recently stayed at Casa Brio in Lonavala, and it was a truly wonderful experience from start to finish. The villa is beautiful, incredibly spacious, and perfect for a relaxing getaway with family or friends. [...] The overall vibe of the villa is peaceful, clean, and luxurious. The staff was incredibly hospitable and made sure we had everything we needed.",
  },
  {
    author: "Savita Mohite",
    quote:
      "Finding a villa that is as clean as the photos is rare, but this place was truly excellent. The staff went out of their way to assist us. Since our family was traveling from both Mumbai and Pune, the location was perfect. The villa is very well maintained, and the 360-degree hill views from the terrace are beautiful - perfect for a morning chai.",
  },
];
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/travel/search?q=Casa%20Brio&g2lb=4899571%2C4899573%2C4965990%2C72471280%2C72573224%2C72647020%2C72686036%2C72799179%2C72803964%2C72880339%2C72882230%2C73064764%2C121529350%2C121608706%2C121738283%2C121921501%2C121951222%2C122078727%2C122093076%2C122097171%2C122192361&hl=en-IN&gl=in&ssta=1&ts=CAEaKwopEicyJTB4M2JjMmI3ZDk1ODQ0NDQxNzoweDJlYTg5MTY2ZjA0NWU0YzM&qs=CAEyE0Nnb0l3OG1YZ3Utc3BOUXVFQUU4Ag&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwjYjMWcz-iXAxUAAAAAHQAAAAAQAw";
function S(a, e) {
  let t = a.firstElementChild.getBoundingClientRect().width,
    s = a.scrollLeft + a.clientWidth >= a.scrollWidth - 2,
    n = a.scrollLeft <= 2,
    i = e > 0 && s ? 0 : e < 0 && n ? a.scrollWidth : a.scrollLeft + e * t;
  a.scrollTo({ left: i, behavior: "smooth" });
}
function L({ target: e, decimals: s = 0, prefix: n = "", suffix: i = "", duration: r = 2e3 }) {
  let [o, d] = useState(0),
    c = useRef(null),
    m = useRef(!1);
  return (
    useEffect(() => {
      let a = c.current;
      if (!a) return;
      if ("u" < typeof IntersectionObserver) return void d(e);
      let t = new IntersectionObserver(
        (a) => {
          for (let s of a)
            if (s.isIntersecting && !m.current) {
              m.current = !0;
              let a = performance.now(),
                s = (t) => {
                  let n = Math.min((t - a) / r, 1);
                  (d((1 - Math.pow(1 - n, 3)) * e), n < 1 ? requestAnimationFrame(s) : d(e));
                };
              (requestAnimationFrame(s), t.disconnect());
            }
        },
        {
          threshold: 0.25,
        },
      );
      return (t.observe(a), () => t.disconnect());
    }, [e, r]),
    (
      <span ref={c}>
        {n}
        {o.toFixed(s)}
        {i}
      </span>
    )
  );
}
function Testimonials() {
  let [e, o] = useState(0),
    c = useRef(null),
    m = useRef(!1);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let a = setInterval(() => {
      c.current && !m.current && S(c.current, 1);
    }, 5e3);
    return () => clearInterval(a);
  }, []);
  return (
    <section
      id="testimonials"
      className={
        "\n        relative\n        overflow-hidden\n        bg-[#080808]\n        py-16\n        sm:py-20\n        text-[#f4f0e8]\n      "
      }
    >
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c8a951]/[0.025] blur-[120px]" />
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col gap-6 pb-6 sm:pb-8 md:flex-row md:items-end md:justify-between border-b border-[rgba(212,175,55,0.15)]">
            <div className="max-w-[760px]">
              <div className="mb-4 flex items-center gap-3.5">
                <span className="h-px w-8 bg-[#d4af37]" />
                <span className="eyebrow text-xs tracking-[0.28em] font-semibold text-[#d4af37]">
                  GUEST REVIEWS
                </span>
                <span className="h-px w-8 bg-[#d4af37]" />
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-[#f4efe6] pb-2">
                Their Stay. <span className="text-[#d4af37] font-normal py-1">Their Words.</span>
              </h2>
            </div>
            <div className="max-w-md">
              <p className="font-sans text-sm font-light leading-[1.85] text-[#e6dfd5]/80">
                Birthdays, team trips and weekend getaways. Here is what our guests say.
              </p>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 inline-flex items-center gap-2 border-b border-[#d4af37] pb-1 font-sans text-xs font-medium tracking-wide text-[#d4af37]"
              >
                Read all reviews on Google
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
        <div
          className="mt-8 sm:mt-10"
          onPointerEnter={(e) => {
            "mouse" === e.pointerType && (m.current = !0);
          }}
          onPointerLeave={(e) => {
            "mouse" === e.pointerType && (m.current = !1);
          }}
          onTouchStart={() => {
            m.current = !0;
          }}
          onTouchEnd={() => {
            m.current = !1;
          }}
          onFocus={() => {
            m.current = !0;
          }}
          onBlur={() => {
            m.current = !1;
          }}
        >
          <div
            ref={c}
            className="flex snap-x snap-mandatory overflow-x-auto scrollbar-none lg:-mx-3"
            onScroll={(e) => {
              let a = e.currentTarget;
              o(Math.round(a.scrollLeft / a.firstElementChild.getBoundingClientRect().width));
            }}
          >
            {r.map((e) => (
              <div className="flex w-full shrink-0 snap-start px-0.5 lg:w-1/3 lg:px-3" key={e.author}>
                <D review={e} />
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between px-1">
            <span className="font-sans text-[12px] font-medium tracking-[0.25em] text-[#c8a951] lg:invisible">
              0{e + 1}
              {" / 0"}
              {r.length}
            </span>
            <div className="flex items-center gap-2">
              {r.map((t, s) => (
                <button
                  type="button"
                  onClick={() => {
                    let a = c.current;
                    a.scrollTo({ left: s * a.firstElementChild.getBoundingClientRect().width, behavior: "smooth" });
                  }}
                  aria-label={`Go to slide ${s + 1}`}
                  className={`h-1 rounded-full transition-all duration-300 ${s > r.length - 3 ? "lg:hidden " : ""}${e === s ? "w-7 bg-[#c8a951]" : "w-2 bg-white/20 hover:bg-white/40"}`}
                  key={s}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => S(c.current, -1)}
                aria-label="Previous review"
                className={
                  "\n                  flex\n                  h-9\n                  w-9\n                  items-center\n                  justify-center\n                  rounded-full\n                  border\n                  border-white/10\n                  bg-[#121116]\n                  text-white/70\n                  transition-all\n                  duration-300\n                  hover:border-[#c8a951]/60\n                  hover:text-[#c8a951]\n                  active:scale-95\n                "
                }
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => S(c.current, 1)}
                aria-label="Next review"
                className={
                  "\n                  flex\n                  h-9\n                  w-9\n                  items-center\n                  justify-center\n                  rounded-full\n                  border\n                  border-white/10\n                  bg-[#121116]\n                  text-white/70\n                  transition-all\n                  duration-300\n                  hover:border-[#c8a951]/60\n                  hover:text-[#c8a951]\n                  active:scale-95\n                "
                }
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <Reveal delay={200}>
          <div className="mt-10 border border-[rgba(212,175,55,0.15)] bg-[#121015] p-6 sm:mt-12 sm:p-8 lg:p-8">
            <div className="grid grid-cols-1 gap-8 divide-y divide-[rgba(212,175,55,0.15)] text-center sm:grid-cols-2 sm:gap-0 sm:divide-y-0 sm:divide-x">
              <div className="px-4 py-2 sm:py-0">
                <span className="block font-serif text-[2.2rem] sm:text-[2.6rem] font-normal tracking-tight text-[#d4af37]">
                  <L target={4.6} decimals={1} suffix=" / 5" duration={1800} />
                </span>
                <span className="mt-1.5 block font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f4efe6]">
                  Google Rating
                </span>
                <span className="mt-1 block font-sans text-xs font-light text-[#a39c93]">
                  From 21 Google reviews
                </span>
              </div>
              <div className="px-4 pt-6 pb-2 sm:py-0">
                <span className="block font-serif text-[2.2rem] sm:text-[2.6rem] font-normal tracking-tight text-[#d4af37]">
                  <L target={100} decimals={0} suffix="%" duration={2e3} />
                </span>
                <span className="mt-1.5 block font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f4efe6]">
                  Fully Private
                </span>
                <span className="mt-1 block font-sans text-xs font-light text-[#a39c93]">
                  No strangers, no sharing
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
function D({ review: e }) {
  return (
    <article className="group relative flex h-full min-h-[300px] w-full flex-col justify-between border border-[rgba(212,175,55,0.18)] bg-[#121015] p-7 shadow-xl transition-all duration-500 hover:border-[#d4af37]/60 sm:p-8 xl:p-9">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div>
        <span className="block font-serif text-3xl font-normal leading-none text-[#d4af37]">“</span>
        <p className="mt-3.5 whitespace-pre-line font-sans text-sm font-light leading-[1.85] text-[#e6dfd5]/80">
          {e.quote}
        </p>
      </div>
      <div className="mt-8 border-t border-[rgba(212,175,55,0.15)] pt-5">
        <div className="mb-2.5 h-px w-6 bg-[#d4af37] transition-all duration-500 group-hover:w-12" />
        <h3 className="font-serif text-base font-normal tracking-tight text-[#f4efe6] group-hover:text-[#d4af37] transition-colors">
          {e.author}
        </h3>
      </div>
    </article>
  );
}
export { Testimonials };
export default Testimonials;
