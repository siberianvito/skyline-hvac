"use client";

import { useEffect, useState } from "react";

const OPTIONS = [
  { key: "a11y-bigtext", label: "Bigger text" },
  { key: "a11y-contrast", label: "High contrast" },
  { key: "a11y-links", label: "Underline links" },
  { key: "a11y-motion", label: "Stop animations" },
  { key: "a11y-gray", label: "Grayscale" },
] as const;

const STORE = "skyline-a11y";

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string[]>([]);

  // restore saved preferences
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORE) || "[]");
      if (Array.isArray(saved)) {
        setActive(saved);
        saved.forEach((k: string) => document.documentElement.classList.add(k));
      }
    } catch {}
  }, []);

  const toggle = (key: string) => {
    const next = active.includes(key)
      ? active.filter((k) => k !== key)
      : [...active, key];
    setActive(next);
    document.documentElement.classList.toggle(key, next.includes(key));
    try {
      localStorage.setItem(STORE, JSON.stringify(next));
    } catch {}
  };

  const reset = () => {
    active.forEach((k) => document.documentElement.classList.remove(k));
    setActive([]);
    try {
      localStorage.removeItem(STORE);
    } catch {}
  };

  return (
    <div className="fixed bottom-24 left-4 z-[80] md:bottom-5 md:left-5">
      {open && (
        <div className="mb-3 w-64 overflow-hidden rounded-2xl border border-night/10 bg-white shadow-[0_24px_70px_rgba(3,13,26,0.35)]">
          <div className="from-glacier to-ice flex items-center justify-between bg-gradient-to-r px-5 py-3">
            <p className="font-[family-name:var(--font-plex-mono)] text-[11px] font-semibold tracking-[0.2em] text-night uppercase">
              Accessibility
            </p>
            <button
              aria-label="Close accessibility panel"
              onClick={() => setOpen(false)}
              className="text-night/70 hover:text-night"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <div className="p-3">
            {OPTIONS.map((o) => {
              const on = active.includes(o.key);
              return (
                <button
                  key={o.key}
                  onClick={() => toggle(o.key)}
                  aria-pressed={on}
                  className={`mb-1.5 flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-left text-[14px] font-medium transition-colors ${
                    on ? "bg-glacier text-white" : "bg-night/5 text-night/80 hover:bg-night/10"
                  }`}
                >
                  {o.label}
                  <span
                    className={`ml-3 inline-block h-4 w-7 rounded-full transition-colors ${
                      on ? "bg-white/90" : "bg-night/20"
                    }`}
                  >
                    <span
                      className={`block h-4 w-4 rounded-full transition-transform ${
                        on ? "translate-x-3 bg-glacier" : "translate-x-0 bg-white"
                      }`}
                    />
                  </span>
                </button>
              );
            })}
            <button
              onClick={reset}
              className="mt-1 w-full rounded-xl px-4 py-2 text-center font-[family-name:var(--font-plex-mono)] text-[11px] tracking-[0.15em] text-night/50 uppercase hover:text-night"
            >
              Reset all
            </button>
          </div>
        </div>
      )}

      <button
        aria-label="Accessibility options"
        onClick={() => setOpen(!open)}
        className="from-glacier to-ice flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br shadow-[0_8px_28px_rgba(56,189,248,0.5)] transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-night" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="4.5" r="2" />
          <path d="M4 8.5c2.7.7 5.3 1 8 1s5.3-.3 8-1M12 9.5v4.5M12 14l-3 6.5M12 14l3 6.5" />
        </svg>
      </button>
    </div>
  );
}
