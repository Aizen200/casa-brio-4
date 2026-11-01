"use client";

import { useEffect, useRef, useState } from "react";
export const Reveal = function ({ children: t, className: n = "", delay: s = 0, as: R = "div" }) {
  let a = useRef(null),
    [o, l] = useState(!1);
  return (
    useEffect(() => {
      let t = a.current;
      if (!t) return;
      if ("u" < typeof IntersectionObserver) return void l(!0);
      let e = new IntersectionObserver(
        (t) => {
          for (let i of t) i.isIntersecting && (l(!0), e.disconnect());
        },
        {
          threshold: 0.15,
          rootMargin: "0px 0px -60px 0px",
        },
      );
      return (e.observe(t), () => e.disconnect());
    }, []),
    (
      <R
        ref={a}
        style={{
          transitionDelay: `${s}ms`,
        }}
        className={`reveal ${o ? "reveal-in" : ""} ${n}`}
      >
        {t}
      </R>
    )
  );
};
