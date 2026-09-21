"use client";

import { useEffect, useState } from "react";
import GHLForm, { FormLegalNote } from "./GHLForm";

const SEEN_KEY = "skyline-exit-shown";

export default function ExitPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let armed = false;
    // don't fire in the first seconds — let people actually read
    const armTimer = window.setTimeout(() => {
      armed = true;
    }, 8000);

    const seen = () => {
      try {
        return sessionStorage.getItem(SEEN_KEY) === "1";
      } catch {
        return false;
      }
    };
    const markSeen = () => {
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {}
    };

    // desktop exit intent: cursor leaves through the top of the window
    const onMouseOut = (e: MouseEvent) => {
      if (!armed || seen()) return;
      if (!e.relatedTarget && e.clientY <= 0) {
        markSeen();
        setOpen(true);
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mouseout", onMouseOut);
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(armTimer);
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto bg-night/80 p-4 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative my-8 w-full max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-hidden rounded-3xl bg-frost text-night shadow-[0_40px_120px_rgba(3,13,26,0.8)]">
          <div className="from-glacier to-ice flex items-center justify-between bg-gradient-to-r px-7 py-4">
            <p className="font-[family-name:var(--font-plex-mono)] text-xs font-semibold tracking-[0.24em] text-night uppercase">
              ❄ Wait — before you go
            </p>
            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="text-night/70 hover:text-night flex h-8 w-8 items-center justify-center rounded-full transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-none stroke-current"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div className="px-6 pt-5">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold tracking-tight text-night md:text-2xl">
              Don&apos;t sweat it — the consult is free.
            </h2>
            <p className="mt-1.5 text-[15px] text-night/60">
              Leave your info and a certified tech calls you back — usually
              within the hour. Or call now:{" "}
              <a
                href="tel:+17868078125"
                className="text-glacier font-semibold underline underline-offset-4"
              >
                786 · 807 · 8125
              </a>
            </p>
          </div>

          <div className="p-3 md:p-4">
            <GHLForm idSuffix="exit" />
            <div className="mt-3 pb-1">
              <FormLegalNote />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
