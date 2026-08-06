"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Icicle edge between sections — the "cold transition".
 * A jagged ice sheet with hanging drips crystallizes across as you scroll past.
 */
export default function FrostDivider({ flip = false }: { flip?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelector("svg"),
        { opacity: 0, yPercent: flip ? 30 : -30, scaleY: 0.6 },
        {
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom center",
            scrub: 0.6,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [flip]);

  // hand-drawn icicle drip line
  const drips =
    "M0,0 L0,18 L36,18 L48,44 L60,18 L110,18 L118,30 L126,18 L188,18 L202,58 L216,18 L268,18 L288,34 L306,18 L368,18 L378,26 L390,18 L448,18 L466,72 L484,18 L540,18 L556,30 L572,18 L628,18 L640,40 L654,18 L708,18 L722,26 L736,18 L800,18 L818,52 L836,18 L892,18 L904,30 L916,18 L972,18 L988,38 L1002,18 L1056,18 L1068,24 L1080,18 L1136,18 L1154,64 L1172,18 L1224,18 L1238,32 L1252,18 L1310,18 L1322,44 L1336,18 L1392,18 L1402,26 L1412,18 L1440,18 L1440,0 Z";

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none relative z-10 -my-px h-20 w-full overflow-hidden md:h-24 ${
        flip ? "rotate-180" : ""
      }`}
    >
      <svg
        className="absolute inset-x-0 top-0 h-full w-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="iceSheet" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="rgba(143,227,255,0.28)" />
            <stop offset="0.45" stopColor="rgba(56,189,248,0.10)" />
            <stop offset="1" stopColor="rgba(56,189,248,0)" />
          </linearGradient>
        </defs>
        <path d={drips} fill="url(#iceSheet)" />
        <path
          d={drips}
          fill="none"
          stroke="rgba(191,239,255,0.35)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
