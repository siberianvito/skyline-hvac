"use client";

import { useEffect, useRef, useState } from "react";
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

const SERVICES = [
  "New installation",
  "Repair — my AC is down",
  "Maintenance / tune-up",
  "Commercial",
];

// FormSubmit relay — leads land in the Quantum Impact inbox until the
// client's own address is wired in. Swap the address to change recipient.
const FORM_ENDPOINT = "https://formsubmit.co/ajax/siberiancorps@gmail.com";

export default function WhySkyline() {
  const ref = useRef<HTMLElement>(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-reason]"),
        { opacity: 0, x: -36 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 65%" },
        }
      );
      gsap.fromTo(
        el.querySelector("[data-form]"),
        { opacity: 0, y: 44 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 60%" },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="estimate" className="bg-night relative py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2 lg:gap-20">
        {/* left — why */}
        <div>
          <p className="hud-label text-ice mb-4">Why Skyline</p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-medium tracking-tight text-frost md:text-5xl">
            Why Miami
            <br />
            calls Skyline.
          </h2>

          <div className="mt-12 space-y-9">
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
        </div>

        {/* right — estimate form */}
        <div data-form className="opacity-0 lg:sticky lg:top-16 lg:self-start">
          <div className="glass shimmer relative overflow-hidden rounded-3xl p-8 md:p-10">
            {sent ? (
              <div className="py-16 text-center">
                <div className="glass mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                  <svg
                    viewBox="0 0 24 24"
                    className="stroke-ice h-7 w-7 fill-none"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M4 12l5 5L20 6" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl text-frost">
                  Consider it handled.
                </h3>
                <p className="text-steel mt-3">
                  We&apos;ll call you back within the hour.
                  <br />
                  Can&apos;t wait?{" "}
                  <a href="tel:+17865187045" className="text-ice underline underline-offset-4">
                    786 · 518 · 7045
                  </a>
                </p>
              </div>
            ) : (
              <>
                <p className="hud-label text-ice mb-2">Free estimate</p>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-medium text-frost md:text-3xl">
                  Get cold air on the calendar.
                </h3>

                <form
                  className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    if (sending) return;
                    setSending(true);
                    const data = Object.fromEntries(
                      new FormData(e.currentTarget).entries()
                    );
                    try {
                      await fetch(FORM_ENDPOINT, {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                          Accept: "application/json",
                        },
                        body: JSON.stringify({
                          ...data,
                          _subject: "❄️ New Skyline HVAC estimate request",
                          _template: "table",
                        }),
                      });
                    } catch {
                      // the success card shows the phone number as fallback
                    }
                    setSent(true);
                  }}
                >
                  <input
                    required
                    name="name"
                    placeholder="Name"
                    className="rounded-xl border border-frost/15 bg-night/60 px-4 py-3.5 text-[15px] text-frost placeholder:text-steel/70"
                  />
                  <input
                    required
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    className="rounded-xl border border-frost/15 bg-night/60 px-4 py-3.5 text-[15px] text-frost placeholder:text-steel/70"
                  />
                  <input
                    name="zip"
                    placeholder="ZIP code"
                    className="rounded-xl border border-frost/15 bg-night/60 px-4 py-3.5 text-[15px] text-frost placeholder:text-steel/70"
                  />
                  <select
                    defaultValue=""
                    required
                    name="service"
                    className="rounded-xl border border-frost/15 bg-night/60 px-4 py-3.5 text-[15px] text-frost"
                  >
                    <option value="" disabled>
                      What do you need?
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s} className="bg-night">
                        {s}
                      </option>
                    ))}
                  </select>
                  <textarea
                    rows={3}
                    name="details"
                    placeholder="Tell us what's going on (optional)"
                    className="rounded-xl border border-frost/15 bg-night/60 px-4 py-3.5 text-[15px] text-frost placeholder:text-steel/70 sm:col-span-2"
                  />
                  <button
                    type="submit"
                    disabled={sending}
                    className="group bg-gradient-to-r from-glacier to-ice text-night hover:shadow-[0_0_34px_rgba(56,189,248,0.45)] mt-2 rounded-xl px-6 py-4 font-[family-name:var(--font-space-grotesk)] text-[15px] font-semibold tracking-wide transition-shadow duration-300 disabled:opacity-60 sm:col-span-2"
                  >
                    {sending ? "Sending…" : "Request my estimate"}
                    {!sending && (
                      <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    )}
                  </button>
                  <p className="hud-label mt-1 text-center opacity-50 sm:col-span-2">
                    No spam · no pressure · usually 1-hour callback
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
