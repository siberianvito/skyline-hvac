import type { Metadata } from "next";
import ConsultCard from "@/components/ConsultCard";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us — Skyline HVAC · Miami, Broward & Palm Beach",
  description:
    "Reach Skyline HVAC 24/7 for AC repair, installation & maintenance across Miami-Dade, Broward & Palm Beach. Call (786) 807-8125 or request a free consultation.",
};

const POINTS = [
  { label: "Phone — 24/7", value: "786 · 807 · 8125", href: "tel:+17868078125" },
  { label: "Emergency service", value: "Nights, weekends & holidays" },
  { label: "Service area", value: "Miami-Dade · Broward · Palm Beach" },
  { label: "Licensed & insured", value: "Florida Certified Contractor CAC1824633" },
];

export default function ContactPage() {
  return (
    <>
      <main className="bg-night min-h-screen">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="hud-label text-ice mb-4">Contact us</p>
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-medium tracking-tight text-frost md:text-5xl">
            Talk to the crew.
          </h1>
          <p className="text-steel mt-5 max-w-xl leading-relaxed">
            Call anytime — a human answers 24/7. Or leave your info and a
            certified tech calls you back, usually within the hour.
          </p>

          <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1fr_1.05fr]">
            <div className="space-y-6">
              {POINTS.map((p) => (
                <div key={p.label} className="border-frost/10 border-b pb-5">
                  <p className="hud-label mb-1.5 opacity-60">{p.label}</p>
                  {p.href ? (
                    <a
                      href={p.href}
                      className="font-[family-name:var(--font-space-grotesk)] text-2xl text-frost transition-colors hover:text-ice md:text-3xl"
                    >
                      {p.value}
                    </a>
                  ) : (
                    <p className="font-[family-name:var(--font-space-grotesk)] text-xl text-frost/90">
                      {p.value}
                    </p>
                  )}
                </div>
              ))}

              <a
                href="tel:+17868078125"
                className="glow-cta from-glacier to-ice text-night inline-flex items-center gap-3 rounded-full bg-gradient-to-r px-8 py-4 font-[family-name:var(--font-plex-mono)] text-base font-semibold tracking-[0.1em]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-none stroke-current"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.5 2.9.7a2 2 0 0 1 1.7 2Z" />
                </svg>
                Call now — we answer
              </a>
            </div>

            <ConsultCard
              title="Request your free consultation."
              subtitle="Residential & commercial · no obligation, no pressure."
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
