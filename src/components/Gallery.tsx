"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-card]"),
        { opacity: 0, y: 36, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 70%" },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-night relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="hud-label text-ice mb-4">The work</p>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-medium tracking-tight text-frost md:text-5xl">
            Cold, delivered.
          </h2>
          <p className="hud-label max-w-xs pb-2 opacity-50">
            Fresh install shots from the field are on the way — this wall ices
            over soon.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              data-card
              className="glass shimmer relative aspect-[4/3] overflow-hidden rounded-2xl opacity-0"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <svg
                  viewBox="0 0 24 24"
                  className="breathe stroke-ice h-8 w-8 fill-none"
                  strokeWidth="1"
                  strokeLinecap="round"
                >
                  <path d="M12 2v20M12 2l-3 3M12 2l3 3M12 22l-3-3M12 22l3-3M2 12h20M2 12l3-3M2 12l3 3M22 12l-3-3M22 12l-3 3M5.6 5.6l12.8 12.8M5.6 18.4L18.4 5.6" />
                </svg>
                <span className="hud-label opacity-40">
                  Job photo · {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
