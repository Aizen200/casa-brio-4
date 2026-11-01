"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/reveal";
import { ChevronLeft, ChevronRight } from "lucide-react";
let r = [
  {
    author: "Rohan & Devina Singhal",
    quote:
      "Having the whole villa to ourselves made all the difference. The party room downstairs, with the snooker table and private bar, felt like our own club. We played cricket till 2 AM under the floodlights and had breakfast by the pool. 10/10.",
  },
  {
    author: "Arjun Verma",
    quote:
      "We booked Casa Brio for an 18-person team trip. The fast WiFi, the big living room with a 4K screen, and the peace and quiet were perfect. Evenings in the pool with a barbecue by the chef were the best part.",
  },
  {
    author: "Siddharth Kothari",
    quote:
      "Most villas in Lonavala have strict noise rules or shared gates. Casa Brio is different: a great sound system, foosball, snooker and a private cricket turf inside the villa. The staff took care of everything, from ice to mixers.",
  },
];
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
    c = useRef(null);
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
            <p className="max-w-md font-sans text-sm font-light leading-[1.85] text-[#e6dfd5]/80">
              Birthdays, team trips and weekend getaways. Here is what our guests say.
            </p>
          </div>
        </Reveal>
        <div
          className={
            "\n            mt-8\n            sm:mt-10\n            hidden\n            lg:grid\n            lg:grid-cols-3\n            lg:gap-7\n            xl:gap-8\n          "
          }
        >
          {r.map((e, t) => (
            <Reveal delay={100 * t} className="flex w-full" key={e.author}>
              <D review={e} />
            </Reveal>
          ))}
        </div>
        <div className="mt-8 block sm:mt-10 lg:hidden">
          <div
            className="w-full overflow-hidden"
            onTouchStart={(e) => {
              c.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (null === c.current) return;
              let a = e.changedTouches[0].clientX,
                t = c.current - a;
              (t > 45
                ? o((e) => (e + 1) % r.length)
                : t < -45 && o((e) => (e - 1 + r.length) % r.length),
                (c.current = null));
            }}
          >
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: `translateX(-${100 * e}%)`,
              }}
            >
              {r.map((e) => (
                <div className="w-full shrink-0 px-0.5" key={e.author}>
                  <D review={e} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between px-1">
            <span className="font-sans text-[11px] font-medium tracking-[0.25em] text-[#c8a951]">
              0{e + 1}
              {" / 0"}
              {r.length}
            </span>
            <div className="flex items-center gap-2">
              {r.map((t, s) => (
                <button
                  type="button"
                  onClick={() => o(s)}
                  aria-label={`Go to slide ${s + 1}`}
                  className={`h-1 rounded-full transition-all duration-300 ${e === s ? "w-7 bg-[#c8a951]" : "w-2 bg-white/20 hover:bg-white/40"}`}
                  key={s}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => o((e) => (e - 1 + r.length) % r.length)}
                aria-label="Previous review"
                className={
                  "\n                  flex\n                  h-9\n                  w-9\n                  items-center\n                  justify-center\n                  rounded-full\n                  border\n                  border-white/10\n                  bg-[#121116]\n                  text-white/70\n                  transition-all\n                  duration-300\n                  hover:border-[#c8a951]/60\n                  hover:text-[#c8a951]\n                  active:scale-95\n                "
                }
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => o((e) => (e + 1) % r.length)}
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
                  <L target={4.98} decimals={2} suffix=" / 5" duration={1800} />
                </span>
                <span className="mt-1.5 block font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f4efe6]">
                  Average Guest Rating
                </span>
                <span className="mt-1 block font-sans text-xs font-light text-[#a39c93]">
                  From 45+ verified stays
                </span>
              </div>
              <div className="px-4 pt-6 pb-2 sm:py-0">
                <span className="block font-serif text-[2.2rem] sm:text-[2.6rem] font-normal tracking-tight text-[#d4af37]">
                  <L target={100} decimals={0} suffix="%" duration={2e3} />
                </span>
                <span className="mt-1.5 block font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f4efe6]">
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
        <p className="mt-3.5 font-sans text-sm font-light leading-[1.85] text-[#e6dfd5]/80">
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
