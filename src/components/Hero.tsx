"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { asset } from "@/lib/asset";
import GHLForm from "./GHLForm";

const BENEFITS = [
  "24/7 emergency after-hours service",
  "Licensed, bonded & insured — CAC1824633",
  "Locally owned family business",
  "Same-day service · residential & commercial",
  "Fast, expert, ethical service",
  "Major credit cards accepted",
  "Financing available",
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-in]",
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: "power3.out", delay: 0.15 }
      );
      gsap.fromTo(
        "[data-benefit]",
        { opacity: 0, x: 26 },
        { opacity: 1, x: 0, duration: 0.7, stagger: 0.09, ease: "power3.out", delay: 0.5 }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Miami backdrop + legibility overlay */}
      <img
        src={asset("/media/hero-miami.jpg")}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(3,13,26,0.93) 0%, rgba(3,13,26,0.82) 42%, rgba(6,24,43,0.55) 100%)",
        }}
      />
      <div className="from-night absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* form + benefits */}
        <div className="grid items-start gap-10 py-10 md:py-14 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          {/* left — headline + GHL form on a white card */}
          <div data-hero-in id="estimate" className="opacity-0">
            <div className="overflow-hidden rounded-3xl bg-frost text-night shadow-[0_30px_90px_rgba(3,13,26,0.6)]">
              <div className="from-glacier to-ice flex items-center justify-between bg-gradient-to-r px-7 py-4 md:px-9">
                <p className="font-[family-name:var(--font-plex-mono)] text-xs font-semibold tracking-[0.24em] text-night uppercase">
                  ❄ Free consultation
                </p>
                <p className="font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.18em] text-night/60 uppercase">
                  No obligation
                </p>
              </div>

              <div className="px-5 pt-6 md:px-7">
                <h1 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold tracking-tight text-night md:text-[1.8rem] md:leading-snug">
                  Skilled AC techs standing by,
                  <br className="hidden md:block" /> ready to help today.
                </h1>
                <p className="mt-2 text-[15px] text-night/60">
                  Residential &amp; commercial · a certified tech calls back fast.
                </p>
              </div>

              <div className="p-3 md:p-5">
                <GHLForm />
                <p className="font-[family-name:var(--font-plex-mono)] mt-2 pb-2 text-center text-[10px] tracking-[0.18em] text-night/40 uppercase">
                  No spam · no pressure · usually 1-hour callback
                </p>
              </div>
            </div>
          </div>

          {/* right — service-area checklist */}
          <div className="lg:pt-6">
            <p data-hero-in className="hud-label text-ice mb-6 opacity-0">
              Serving all of Broward &amp; Miami-Dade
            </p>
            <ul className="space-y-4">
              {BENEFITS.map((b) => (
                <li key={b} data-benefit className="flex items-center gap-4 opacity-0">
                  <span className="from-glacier to-ice flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br shadow-[0_0_14px_rgba(56,189,248,0.35)]">
                    <svg
                      viewBox="0 0 24 24"
                      className="stroke-night h-4 w-4 fill-none"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 12l5 5L20 6" />
                    </svg>
                  </span>
                  <span className="text-frost text-[15.5px] font-medium md:text-[17px]">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
