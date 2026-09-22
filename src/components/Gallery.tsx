"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { asset } from "@/lib/asset";

const JOBS = [
  { src: "/jobs/job-01.jpg", caption: "Second-story condenser lift" },
  { src: "/jobs/job-02.jpg", caption: "Commercial rooftop condenser" },
  { src: "/jobs/job-03.jpg", caption: "Twin-system install · new pads" },
  { src: "/jobs/job-04.jpg", caption: "Custom duct fabrication" },
  { src: "/jobs/job-05.jpg", caption: "High-efficiency condenser swap" },
  { src: "/jobs/job-06.jpg", caption: "Closet air handler install" },
  { src: "/jobs/job-07.jpg", caption: "Commercial venue ductwork" },
  { src: "/jobs/job-08.jpg", caption: "Multi-unit rack install" },
  { src: "/jobs/job-09.jpg", caption: "Lennox air handler install" },
  { src: "/jobs/job-10.jpg", caption: "Residential condenser install" },
  { src: "/jobs/job-11.jpg", caption: "Air handler + line set" },
];

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
          stagger: 0.07,
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
        {/* promo flyer — maintenance package offer */}
        <a href="/#estimate" className="group mb-14 block">
          <img
            src={asset("/media/gallery-flyer.jpg")}
            alt="Skyline HVAC special offer — free diagnostic for all new customers. Call (786) 807-8125."
            className="border-frost/10 w-full rounded-3xl border shadow-[0_24px_70px_rgba(3,13,26,0.55)] transition-transform duration-500 group-hover:scale-[1.01]"
          />
        </a>

        <p className="hud-label text-ice mb-4">The work</p>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-medium tracking-tight text-frost md:text-5xl">
            Cold, delivered.
          </h2>
          <p className="hud-label max-w-xs pb-2 opacity-50">
            Real installs — condensers, air handlers, custom ductwork across
            Miami-Dade, Broward &amp; Palm Beach.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {JOBS.map((job, i) => (
            <figure
              key={job.src}
              data-card
              className="group border-frost/10 hover:border-ice/40 relative aspect-[3/4] overflow-hidden rounded-2xl border opacity-0 transition-colors duration-500"
            >
              <img
                src={asset(job.src)}
                alt={job.caption}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              {/* frost sheen on hover */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/85 via-night/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
                <span className="hud-label text-frost/90">{job.caption}</span>
                <span className="hud-label text-ice/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
