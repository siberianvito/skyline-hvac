"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const REASONS = [
  {
    title: "State-certified cold",
    copy: "Florida-certified techs (CAC1824633), factory-trained on every major brand. No handymen, no guesswork — just cold air, done right.",
    icon: (
      <path d="M12 2v20M12 2l-3 3M12 2l3 3M12 22l-3-3M12 22l3-3M2 12h20M2 12l3-3M2 12l3 3M22 12l-3-3M22 12l-3 3M5 5l14 14M5 19L19 5" />
    ),
  },
  {
    title: "Same-day rescue",
    copy: "AC down in a Miami August is an emergency, and we treat it like one. Crews rolling across Miami-Dade & Broward, 24/7.",
    icon: <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />,
  },
  {
    title: "Straight pricing",
    copy: "Flat, upfront quotes before a single panel comes off. The price we say is the price you pay — in writing.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M9.5 9.5c0-1 1-1.8 2.5-1.8s2.5.8 2.5 1.8-1 1.6-2.5 2-2.5 1-2.5 2 1 1.8 2.5 1.8 2.5-.8 2.5-1.8" />
      </>
    ),
  },
  {
    title: "Install · Service · Repair",
    copy: "High-efficiency new systems, precision tune-ups, honest repairs. One crew for the full life of your AC.",
    icon: (
      <path d="M14.7 6.3a4.5 4.5 0 00-6.4 5.4L3 17v4h4l5.3-5.3a4.5 4.5 0 005.4-6.4l-3 3-2.7-.6-.6-2.7 3.3-2.7z" />
    ),
  },
];

export default function WhySkyline() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-reason]"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 70%" },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="services" className="bg-night relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="hud-label text-ice mb-4">Our services · Why Skyline</p>
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-medium tracking-tight text-frost md:text-5xl">
          Why Miami calls Skyline.
        </h2>

        <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {REASONS.map((r) => (
            <div key={r.title} data-reason className="flex gap-5 opacity-0">
              <div className="glass flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                <svg
                  viewBox="0 0 24 24"
                  className="stroke-ice h-5 w-5 fill-none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {r.icon}
                </svg>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-medium text-frost">
                  {r.title}
                </h3>
                <p className="text-steel mt-1.5 max-w-md text-[15px] leading-relaxed">
                  {r.copy}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* call strip */}
        <div className="glass mt-16 flex flex-col items-center justify-between gap-5 rounded-2xl px-8 py-7 text-center sm:flex-row sm:text-left">
          <p className="font-[family-name:var(--font-space-grotesk)] text-xl text-frost md:text-2xl">
            AC acting up right now?{" "}
            <span className="text-steel block text-base md:inline">
              We answer 24/7 — nights, weekends, holidays.
            </span>
          </p>
          <a
            href="tel:+17868078125"
            className="glow-cta from-glacier to-ice text-night shrink-0 rounded-full bg-gradient-to-r px-7 py-3.5 font-[family-name:var(--font-plex-mono)] text-sm font-semibold tracking-[0.1em]"
          >
            786 · 807 · 8125
          </a>
        </div>
      </div>
    </section>
  );
}
