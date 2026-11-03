"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Shows the whole photo, uncropped, with nothing behind it.
// Loads the high-quality copy from /images/full.
export const FramePhoto = function ({ src: e, alt: t }) {
  let n = `/images/full/${e.split("/").pop().replace(/\.\w+$/, "")}.jpg`;
  return (
    <>
      <Image
        src={n}
        alt={t}
        fill={!0}
        priority={!0}
        unoptimized={!0}
        className="object-contain"
      />
    </>
  );
};

// Full-screen photo viewer shared by the gallery, villa highlights and party room.
// Photos are shown whole (object-contain) in the same fixed frame as the gallery lightbox.
export const Lightbox = function ({ images: e, index: t, onIndexChange: n, onClose: s, label: l }) {
  let r = e.length,
    a = e[t],
    o = useRef(null),
    i = () => n((t + 1) % r),
    c = () => n((t - 1 + r) % r),
    d = useRef(null);
  useEffect(() => {
    let e = (e) => {
      if ("Escape" === e.key) s();
      else if (r > 1 && "ArrowRight" === e.key) n((t + 1) % r);
      else if (r > 1 && "ArrowLeft" === e.key) n((t - 1 + r) % r);
    };
    window.addEventListener("keydown", e);
    let a = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", e);
      document.body.style.overflow = a;
    };
  }, [t, r, n, s]);
  useEffect(() => {
    d.current?.children[t]?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [t]);
  if (!a) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      role="dialog"
      aria-modal="true"
      aria-label={l || "Photo viewer"}
      className="fixed inset-0 z-[100] flex flex-col bg-black/60 backdrop-blur-sm"
      onClick={s}
    >
      <div
        className="flex shrink-0 items-center justify-between gap-4 px-4 pt-4 pb-3 sm:px-10 sm:pt-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <span className="shrink-0 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/15 px-3 py-1 font-sans text-xs font-semibold tracking-wider text-[#f5d77f]">
            {String(t + 1).padStart(2, "0")} / {String(r).padStart(2, "0")}
          </span>
          {(a.label || l) && (
            <span className="truncate font-sans text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#d4af37]">
              {a.label || l}
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={s}
          aria-label="Close photo viewer"
          className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:scale-105 hover:bg-white/20"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-3 sm:px-24 lg:px-28"
        onTouchStart={(e) => {
          o.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (null === o.current || r < 2) return;
          let t = e.changedTouches[0].clientX - o.current;
          o.current = null;
          if (Math.abs(t) > 45) {
            if (t < 0) i();
            else c();
          }
        }}
      >
        <div
          className="relative max-h-[60vh] sm:max-h-[72vh] max-w-[92vw] sm:max-w-[80vw] lg:max-w-[70vw] w-full aspect-[16/10] overflow-hidden rounded-none border border-amber-500/20 bg-white/[0.06] shadow-[0_0_50px_rgba(0,0,0,0.9)]"
          onClick={(e) => e.stopPropagation()}
        >
          <FramePhoto src={a.src} alt={a.alt || ""} key={a.src} />
        </div>
        {r > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                c();
              }}
              aria-label="Previous photo"
              className="absolute left-3 sm:left-8 top-1/2 z-10 flex h-11 w-11 sm:h-14 sm:w-14 -translate-y-1/2 items-center justify-center rounded-full border border-[#d4af37]/30 bg-black/60 text-[#f5d77f] backdrop-blur-md transition-all hover:scale-110 hover:border-[#d4af37] hover:bg-black/90"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                i();
              }}
              aria-label="Next photo"
              className="absolute right-3 sm:right-8 top-1/2 z-10 flex h-11 w-11 sm:h-14 sm:w-14 -translate-y-1/2 items-center justify-center rounded-full border border-[#d4af37]/30 bg-black/60 text-[#f5d77f] backdrop-blur-md transition-all hover:scale-110 hover:border-[#d4af37] hover:bg-black/90"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </>
        )}
      </div>
      <div className="shrink-0 px-3 pt-3 pb-4 sm:px-8 sm:pb-6" onClick={(e) => e.stopPropagation()}>
        {a.caption && (
          <p className="mx-auto mb-3 max-w-2xl text-center font-sans text-xs sm:text-sm font-light leading-relaxed text-[#e6dfd5]/80">
            {a.caption}
          </p>
        )}
        {r > 1 && (
          <div
            ref={d}
            className="no-scrollbar mx-auto flex w-fit max-w-full items-center gap-2 sm:gap-2.5 overflow-x-auto px-1 py-1.5"
          >
            {e.map((e, a) => (
              <button
                type="button"
                onClick={() => n(a)}
                aria-label={`Show photo ${a + 1}`}
                className={`relative h-12 w-16 sm:h-14 sm:w-20 shrink-0 overflow-hidden border transition-all duration-300 ${a === t ? "border-[#d4af37] ring-1 ring-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.6)]" : "border-white/20 opacity-50 hover:opacity-100 hover:border-white/50"}`}
                key={e.src}
              >
                <img src={e.src} alt="" className="h-full w-full object-cover object-center" />
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};
export default Lightbox;
