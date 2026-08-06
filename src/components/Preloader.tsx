"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { asset } from "@/lib/asset";

export const BOOT_EVENT = "skyline:boot-done";

export default function Preloader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);
  const tempRef = useRef<HTMLSpanElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    document.documentElement.style.overflow = "hidden";
    window.scrollTo(0, 0);

    // idempotent finisher — also fired by a wall-clock failsafe so a
    // backgrounded tab (paused rAF) can never wedge the boot screen
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      document.documentElement.style.overflow = "";
      if (rootRef.current) rootRef.current.style.display = "none";
      window.dispatchEvent(new Event(BOOT_EVENT));
    };
    const failsafe = window.setTimeout(finish, 5500);

    const state = { p: 0 };
    const tl = gsap.timeline({ onComplete: finish });

    tl.to(state, {
      p: 100,
      duration: 2.7,
      ease: "power2.inOut",
      onUpdate: () => {
        const p = state.p;
        if (fillRef.current) fillRef.current.style.width = `${p}%`;
        if (pctRef.current) pctRef.current.textContent = `${Math.round(p)}%`;
        if (tempRef.current)
          tempRef.current.textContent = `${Math.round(92 - (p / 100) * 20)}°F`;
      },
    })
      // freeze flash when the bar tops out
      .to(flashRef.current, { opacity: 1, duration: 0.18, ease: "power1.in" })
      .to(flashRef.current, { opacity: 0, duration: 0.5, ease: "power2.out" })
      // shatter-out: the whole boot screen splits away
      .to(
        root,
        {
          opacity: 0,
          scale: 1.06,
          filter: "blur(10px)",
          duration: 0.75,
          ease: "power3.inOut",
        },
        "-=0.45"
      );

    return () => {
      window.clearTimeout(failsafe);
      tl.kill();
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="bg-night fixed inset-0 z-[100] flex flex-col items-center justify-center"
    >
      {/* faint frozen skyline behind the boot UI */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url(${asset("/media/hero-frozen.png")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <img
        src={asset("/logo.png")}
        alt="Skyline HVAC"
        className="relative mb-10 h-20 w-auto opacity-90 md:h-24"
      />

      {/* ice bar */}
      <div className="ice-track relative h-2.5 w-[min(420px,72vw)] overflow-visible rounded-full">
        <div
          ref={fillRef}
          className="ice-fill absolute inset-y-0 left-0 w-0 rounded-full"
        />
      </div>

      <div className="mt-4 flex w-[min(420px,72vw)] items-center justify-between">
        <span className="hud-label">Cooling system · boot</span>
        <span className="hud-label flex gap-3">
          <span ref={tempRef}>92°F</span>
          <span ref={pctRef} className="text-ice">
            0%
          </span>
        </span>
      </div>

      <span className="hud-label absolute bottom-8 opacity-60">
        Skyline HVAC — Miami, FL
      </span>

      {/* freeze flash */}
      <div
        ref={flashRef}
        className="pointer-events-none absolute inset-0 opacity-0"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(234,247,255,0.9), rgba(143,227,255,0.25) 55%, transparent 80%)",
        }}
      />
    </div>
  );
}
