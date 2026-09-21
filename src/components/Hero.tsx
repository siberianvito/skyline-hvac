"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { asset } from "@/lib/asset";
import { SERVICES } from "@/lib/services";
import ConsultCard from "./ConsultCard";

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
        {/* headline + benefits (left) · form (right) */}
        <div className="grid items-start gap-x-14 gap-y-10 py-10 md:py-14 lg:grid-cols-[1fr_1.05fr] lg:grid-rows-[auto_1fr]">
          {/* headline */}
          <div data-hero-in className="opacity-0 lg:col-start-1 lg:row-start-1">
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-[2.4rem] leading-[1.08] font-semibold tracking-tight text-frost md:text-6xl">
              South Florida&apos;s
              <br />
              Trusted{" "}
              <span className="from-glacier to-ice bg-gradient-to-r bg-clip-text text-transparent">
                AC Experts.
              </span>
            </h1>
            <p className="hud-label text-ice mt-5">
              Serving all of Broward &amp; Miami-Dade · 24/7
            </p>
          </div>

          {/* form — right side, with the services we offer beneath it */}
          <div
            data-hero-in
            id="estimate"
            className="opacity-0 lg:col-start-2 lg:row-span-2 lg:row-start-1"
          >
            <ConsultCard />

            <div className="mt-7">
              <p className="hud-label text-ice mb-4">Services we offer</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {SERVICES.map((s) => (
                  <a
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="glass hover:border-ice/50 hover:text-ice rounded-lg px-3 py-2.5 text-center text-[13px] font-medium text-frost/85 transition-colors"
                  >
                    {s.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* benefits checklist + Google reviews badge */}
          <div className="lg:col-start-1 lg:row-start-2">
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

            <div data-hero-in className="mt-8 flex justify-center opacity-0 lg:max-w-md">
              <img
                src={asset("/media/google-badge.png")}
                alt="Rated Excellent — 5 stars on Google"
                className="w-56 rounded-2xl shadow-[0_10px_40px_rgba(3,13,26,0.5)] md:w-64"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
