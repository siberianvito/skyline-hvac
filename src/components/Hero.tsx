"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { BOOT_EVENT } from "./Preloader";
import { asset } from "@/lib/asset";

const FLAKES = Array.from({ length: 26 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  top: `${-((i * 13) % 30)}%`,
  size: 2 + ((i * 7) % 4),
  dur: `${11 + ((i * 5) % 9)}s`,
  delay: `${-((i * 3) % 14)}s`,
  op: 0.25 + ((i * 11) % 40) / 100,
  x: `${((i * 17) % 80) - 40}px`,
}));

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);
  const tempRef = useRef<HTMLSpanElement>(null);
  const [videoDead, setVideoDead] = useState(false);

  useEffect(() => {
    const onBoot = () => {
      videoRef.current?.play().catch(() => setVideoDead(true));

      if (hudRef.current) {
        gsap.fromTo(
          hudRef.current.querySelectorAll("[data-hud]"),
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            delay: 0.3,
          }
        );
      }

      // the set-point readout cools down as the film freezes the city
      const t = { v: 92 };
      gsap.to(t, {
        v: 72,
        duration: 8,
        ease: "power1.inOut",
        delay: 1,
        onUpdate: () => {
          if (tempRef.current)
            tempRef.current.textContent = `${Math.round(t.v)}°F`;
        },
      });
    };

    window.addEventListener(BOOT_EVENT, onBoot);
    return () => window.removeEventListener(BOOT_EVENT, onBoot);
  }, []);

  // after the film freezes on the logo frame, crossfade to the frozen still
  // (some browsers blank an ended <video>) and breathe life into it
  const stillRef = useRef<HTMLImageElement>(null);
  const onEnded = () => {
    if (stillRef.current) {
      gsap.to(stillRef.current, { opacity: 1, duration: 0.8, ease: "power2.out" });
      gsap.to(stillRef.current, {
        scale: 1.06,
        duration: 16,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  };

  return (
    <section className="frost-vignette relative h-[100svh] overflow-hidden">
      {videoDead ? (
        <img
          src={asset("/media/hero-frozen.png")}
          alt="Frozen Miami skyline with the Skyline HVAC logo"
          className="absolute inset-0 h-full w-full scale-105 object-cover"
        />
      ) : (
        <>
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            muted
            playsInline
            preload="auto"
            poster={asset("/media/hero-poster.png")}
            onEnded={onEnded}
            onError={() => setVideoDead(true)}
          >
            <source src={asset("/media/hero-freeze.mp4?v=4")} type="video/mp4" />
          </video>
          <img
            ref={stillRef}
            src={asset("/media/hero-frozen.png")}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-0"
          />
        </>
      )}

      {/* drifting frost */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {FLAKES.map((f, i) => (
          <span
            key={i}
            className="flake"
            style={
              {
                left: f.left,
                top: f.top,
                width: f.size,
                height: f.size,
                "--p-dur": f.dur,
                "--p-delay": f.delay,
                "--p-op": f.op,
                "--p-x": f.x,
                "--p-y": "110vh",
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* HUD chrome */}
      <div ref={hudRef} className="absolute inset-0">
        {/* top-left — brand chip */}
        <div data-hud className="absolute top-6 left-6 flex items-center gap-4 opacity-0 md:top-8 md:left-10">
          <img src={asset("/logo.png")} alt="Skyline HVAC" className="h-11 w-auto md:h-13" />
          <div className="hidden h-9 w-px bg-night/30 md:block" />
          <p className="hud-label hud-dark hidden md:block">
            Air conditioning
            <br />
            Miami · FL
          </p>
        </div>

        {/* top-right — call CTA */}
        <div data-hud className="absolute top-6 right-6 text-right opacity-0 md:top-8 md:right-10">
          <a
            href="tel:+17865187045"
            className="glow-cta from-glacier to-ice text-night inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r px-5 py-2.5 transition-transform duration-300 hover:scale-[1.04]"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-none stroke-current"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.5 2.9.7a2 2 0 0 1 1.7 2Z" />
            </svg>
            <span className="font-[family-name:var(--font-plex-mono)] text-sm font-semibold tracking-[0.12em]">
              786 · 518 · 7045
            </span>
          </a>
          <p className="hud-label hud-dark mt-2 pr-1">24/7 rapid response</p>
        </div>

        {/* bottom-left — temperature module */}
        <div data-hud className="absolute bottom-16 left-6 opacity-0 md:bottom-10 md:left-10">
          <p className="hud-label mb-1 opacity-70">Your place · set point</p>
          <p className="font-[family-name:var(--font-space-grotesk)] text-4xl font-medium tracking-tight md:text-5xl">
            <span ref={tempRef}>92°F</span>
          </p>
        </div>

        {/* bottom-right — license + coords */}
        <div data-hud className="absolute right-6 bottom-16 text-right opacity-0 md:right-10 md:bottom-10">
          <p className="hud-label opacity-70">Licensed &amp; insured</p>
          <p className="hud-label text-ice mt-1">CAC1824633</p>
          <p className="hud-label mt-3 opacity-50">25.7617°N · 80.1918°W</p>
        </div>

        {/* bottom-center — scroll cue */}
        <div data-hud className="absolute bottom-16 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 opacity-0 md:bottom-8 md:flex">
          <span className="hud-label opacity-70">Scroll</span>
          <span className="scroll-cue block h-10 w-px bg-gradient-to-b from-ice to-transparent" />
        </div>
      </div>
    </section>
  );
}
