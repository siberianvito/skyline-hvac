import { asset } from "@/lib/asset";

export default function Footer() {
  return (
    <footer className="bg-abyss/60 relative border-t border-frost/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img src={asset("/logo.png")} alt="Skyline HVAC" className="h-16 w-auto" />
            <p className="text-steel mt-5 max-w-sm text-[15px] leading-relaxed">
              Miami&apos;s premium air conditioning company. Installation ·
              Service · Repair — done cold, done right.
            </p>
          </div>

          <div>
            <p className="hud-label text-ice mb-5">Contact</p>
            <a
              href="tel:+17868078125"
              className="font-[family-name:var(--font-space-grotesk)] text-2xl text-frost transition-colors hover:text-ice"
            >
              786 · 807 · 8125
            </a>
            <p className="text-steel mt-3 text-[15px]">
              24/7 emergency response
              <br />
              Miami-Dade &amp; Broward
            </p>
          </div>

          <div>
            <p className="hud-label text-ice mb-5">Licensed</p>
            <p className="text-steel text-[15px] leading-relaxed">
              Florida Certified Contractor
              <br />
              <span className="text-frost">CAC1824633</span>
              <br />
              Licensed &amp; insured
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-frost/10 pt-8 md:flex-row">
          <p className="hud-label opacity-50">
            © 2026 Skyline HVAC · Miami, FL
          </p>
          <p className="hud-label opacity-60">
            <a href="/privacy-policy" className="hover:text-ice">Privacy Policy</a>
            {" · "}
            <a href="/terms-of-service" className="hover:text-ice">Terms of Service</a>
          </p>
          <p className="hud-label opacity-40">
            Site by Quantum Impact Marketing
          </p>
        </div>
      </div>
    </footer>
  );
}
