"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STATS = [
  { value: "CAC1824633", label: "Florida state certified" },
  { value: "100%", label: "Licensed & insured", count: 100, suffix: "%" },
  { value: "24/7", label: "Emergency response" },
  { value: "5.0★", label: "Homeowner rated" },
];

export default function Credibility() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-stat]"),
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-night relative py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="hud-label mb-10 text-center opacity-60">
          — Credentials —
        </p>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} data-stat className="text-center opacity-0">
              <p className="font-[family-name:var(--font-space-grotesk)] text-2xl font-medium tracking-tight text-frost md:text-4xl">
                {s.value}
              </p>
              <p className="hud-label mt-3 opacity-60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
