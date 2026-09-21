"use client";

import { useEffect, useState } from "react";

export default function MobileCTABar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 250);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // scroll to the form on the current page; fall back to the homepage form
  const toForm = (e: React.MouseEvent) => {
    const frame = document.querySelector('iframe[id^="inline-"]');
    if (frame) {
      e.preventDefault();
      frame.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-[70] transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="border-frost/15 bg-night/95 grid grid-cols-2 gap-2.5 border-t p-2.5 backdrop-blur-md [padding-bottom:calc(0.625rem+env(safe-area-inset-bottom))]">
        <a
          href="tel:+17868078125"
          className="bg-heat flex items-center justify-center gap-2 rounded-xl py-3.5 font-[family-name:var(--font-space-grotesk)] text-[15px] font-bold text-white shadow-[0_4px_20px_rgba(232,68,42,0.45)]"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4.5 w-4.5 fill-none stroke-current"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.5 2.9.7a2 2 0 0 1 1.7 2Z" />
          </svg>
          Call Now
        </a>
        <a
          href="/#estimate"
          onClick={toForm}
          className="from-glacier to-ice text-night flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r py-3.5 font-[family-name:var(--font-space-grotesk)] text-[15px] font-bold shadow-[0_4px_20px_rgba(56,189,248,0.4)]"
        >
          ❄ Free Diagnostic
        </a>
      </div>
    </div>
  );
}
