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
  { key: "New installation", label: "New install", icon: "❄" },
  { key: "Repair — my AC is down", label: "Repair", icon: "⚡" },
  { key: "Maintenance / tune-up", label: "Tune-up", icon: "✓" },
  { key: "Commercial", label: "Commercial", icon: "▦" },
];

// FormSubmit relay — leads land in the Quantum Impact inbox until the
// client's own address is wired in. Swap the address to change recipient.
const FORM_ENDPOINT = "https://formsubmit.co/ajax/siberiancorps@gmail.com";

export default function WhySkyline() {
  const ref = useRef<HTMLElement>(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [service, setService] = useState("");
  const [serviceMissing, setServiceMissing] = useState(false);

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

  const inputCls =
    "rounded-xl border border-night/15 bg-night/[0.04] px-4 py-3.5 text-[15px] text-night placeholder:text-night/40";

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

        {/* right — free consultation card (white, high contrast) */}
        <div data-form className="opacity-0 lg:sticky lg:top-16 lg:self-start">
          <div className="overflow-hidden rounded-3xl bg-frost text-night shadow-[0_30px_90px_rgba(3,13,26,0.6)]">
            {/* ribbon */}
            <div className="from-glacier to-ice flex items-center justify-between bg-gradient-to-r px-7 py-4 md:px-9">
              <p className="font-[family-name:var(--font-plex-mono)] text-xs font-semibold tracking-[0.24em] text-night uppercase">
                ❄ Free consultation
              </p>
              <p className="font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.18em] text-night/60 uppercase">
                No obligation
              </p>
            </div>

            <div className="p-7 md:p-9">
              {sent ? (
                <div className="py-14 text-center">
                  <div className="from-glacier to-ice mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br">
                    <svg
                      viewBox="0 0 24 24"
                      className="stroke-night h-7 w-7 fill-none"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <path d="M4 12l5 5L20 6" />
                    </svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl text-night">
                    Consider it handled.
                  </h3>
                  <p className="mt-3 text-night/60">
                    A specialist calls you back within the hour.
                    <br />
                    Can&apos;t wait?{" "}
                    <a
                      href="tel:+17868078125"
                      className="text-glacier font-semibold underline underline-offset-4"
                    >
                      786 · 807 · 8125
                    </a>
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold tracking-tight text-night md:text-[1.7rem]">
                    Consult with a specialist — free.
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-night/55">
                    Tell us what&apos;s going on. A certified tech calls back —
                    usually within the hour.
                  </p>

                  <form
                    className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      if (sending) return;
                      if (!service) {
                        setServiceMissing(true);
                        return;
                      }
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
                            service,
                            _subject: "❄️ New Skyline HVAC free consultation request",
                            _template: "table",
                          }),
                        });
                      } catch {
                        // success card carries the phone number as fallback
                      }
                      setSent(true);
                    }}
                  >
                    {/* service pills */}
                    <div className="sm:col-span-2">
                      <p
                        className={`font-[family-name:var(--font-plex-mono)] mb-2.5 text-[11px] tracking-[0.2em] uppercase ${
                          serviceMissing ? "text-heat" : "text-night/50"
                        }`}
                      >
                        {serviceMissing
                          ? "→ Pick a service to continue"
                          : "What do you need?"}
                      </p>
                      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                        {SERVICES.map((s) => {
                          const active = service === s.key;
                          return (
                            <button
                              key={s.key}
                              type="button"
                              onClick={() => {
                                setService(s.key);
                                setServiceMissing(false);
                              }}
                              className={`rounded-xl border px-3 py-3 text-center text-[13px] font-medium transition-all duration-200 ${
                                active
                                  ? "from-glacier to-ice border-transparent bg-gradient-to-br text-night shadow-[0_4px_18px_rgba(56,189,248,0.45)]"
                                  : `bg-white text-night/70 hover:border-glacier/60 hover:text-night ${
                                      serviceMissing
                                        ? "border-heat/50"
                                        : "border-night/15"
                                    }`
                              }`}
                            >
                              <span className="mb-0.5 block text-base">{s.icon}</span>
                              {s.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <input required name="name" placeholder="Name" className={inputCls} />
                    <input
                      required
                      name="phone"
                      type="tel"
                      placeholder="Phone"
                      className={inputCls}
                    />
                    <input
                      name="zip"
                      placeholder="ZIP code"
                      className={`${inputCls} sm:col-span-2`}
                    />
                    <textarea
                      rows={3}
                      name="details"
                      placeholder="Tell us what's going on (optional)"
                      className={`${inputCls} sm:col-span-2`}
                    />
                    <button
                      type="submit"
                      disabled={sending}
                      className="group bg-night text-frost mt-1 rounded-xl px-6 py-4 font-[family-name:var(--font-space-grotesk)] text-[15px] font-semibold tracking-wide shadow-[0_0_0_rgba(56,189,248,0)] transition-all duration-300 hover:shadow-[0_8px_34px_rgba(56,189,248,0.5)] disabled:opacity-60 sm:col-span-2"
                    >
                      {sending ? "Sending…" : "Book my free consult"}
                      {!sending && (
                        <span className="text-ice ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      )}
                    </button>
                    <p className="font-[family-name:var(--font-plex-mono)] mt-1 text-center text-[10px] tracking-[0.18em] text-night/40 uppercase sm:col-span-2">
                      No spam · no pressure · usually 1-hour callback
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
