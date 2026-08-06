"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { asset } from "@/lib/asset";

const CHIPS = ["Family-run", "Certified techs", "Fully stocked trucks", "Miami-Dade & Broward"];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top 55%" },
      });

      // the van pulls out from the left in perspective
      tl.fromTo(
        "[data-van]",
        { xPercent: -135, rotationY: 32, rotationZ: -2.5, opacity: 0.4 },
        {
          xPercent: 0,
          rotationY: 0,
          rotationZ: 0,
          opacity: 1,
          duration: 1.7,
          ease: "power4.out",
        }
      )
        .fromTo(
          "[data-van-shadow]",
          { scaleX: 0.35, opacity: 0 },
          { scaleX: 1, opacity: 0.55, duration: 1.4, ease: "power3.out" },
          "<0.15"
        )
        // frost trail whips out behind the van, then melts
        .fromTo(
          "[data-trail]",
          { opacity: 0.9, xPercent: -60, scaleX: 1.6 },
          {
            opacity: 0,
            xPercent: 10,
            scaleX: 0.6,
            duration: 1.3,
            stagger: 0.08,
            ease: "power2.out",
          },
          "<0.1"
        )
        // copy pops on the other side
        .fromTo(
          "[data-about]",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "back.out(1.4)" },
          "-=1.1"
        );

      // idle float so the van feels alive after parking
      gsap.to("[data-van]", {
        y: -6,
        duration: 3.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2,
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-night relative overflow-x-clip py-24 md:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-10">
        {/* left — the van rolls out */}
        <div
          className="relative order-2 lg:order-1"
          style={{ perspective: "1200px" }}
        >
          {/* frost trail streaks */}
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              data-trail
              className="absolute rounded-full opacity-0 blur-md"
              style={{
                left: "-10%",
                top: `${34 + i * 16}%`,
                width: "70%",
                height: 10 - i * 2,
                background:
                  "linear-gradient(90deg, transparent, rgba(191,239,255,0.65), transparent)",
              }}
            />
          ))}

          <img
            data-van
            src={asset("/van.png")}
            alt="The Skyline HVAC wrapped van"
            className="relative z-10 w-full max-w-[560px] drop-shadow-[0_18px_38px_rgba(3,13,26,0.75)]"
            style={{ transformStyle: "preserve-3d" }}
          />
          <div
            data-van-shadow
            className="absolute -bottom-4 left-[8%] h-7 w-[84%] rounded-[100%] bg-black/70 opacity-0 blur-xl"
          />
        </div>

        {/* right — about copy */}
        <div className="order-1 lg:order-2">
          <p data-about className="hud-label text-ice mb-4 opacity-0">
            About Skyline
          </p>
          <h2
            data-about
            className="font-[family-name:var(--font-space-grotesk)] text-4xl font-medium tracking-tight text-frost opacity-0 md:text-5xl"
          >
            Born in Miami.
            <br />
            Built for the heat.
          </h2>
          <p data-about className="text-steel mt-6 max-w-lg leading-relaxed opacity-0">
            Skyline HVAC is a Miami crew that knows exactly what an August
            afternoon feels like when the AC gives out. That&apos;s why the wrapped
            van you see around Miami-Dade rolls fully stocked — most fixes
            happen on the first visit.
          </p>
          <p data-about className="text-steel mt-4 max-w-lg leading-relaxed opacity-0">
            Installation, service, repair — handled by state-certified techs
            who treat your home like their own, and back every job with the
            license on the door: CAC1824633.
          </p>

          <div data-about className="mt-8 flex flex-wrap gap-3 opacity-0">
            {CHIPS.map((c) => (
              <span
                key={c}
                className="glass hud-label rounded-full px-4 py-2 normal-case tracking-normal"
                style={{ fontSize: "0.78rem" }}
              >
                {c}
              </span>
            ))}
          </div>

          <a
            data-about
            href="tel:+17865187045"
            className="text-ice mt-10 inline-flex items-center gap-3 font-[family-name:var(--font-space-grotesk)] text-lg opacity-0 transition-colors hover:text-frost"
          >
            <span className="bg-ice inline-block h-2 w-2 animate-pulse rounded-full" />
            Talk to the crew — 786 · 518 · 7045
          </a>
        </div>
      </div>
    </section>
  );
}
