import type { Metadata } from "next";
import { SERVICES } from "@/lib/services";
import { asset } from "@/lib/asset";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AC Services — Skyline HVAC · Miami, Broward & Palm Beach",
  description:
    "AC repair, installation, maintenance, coil cleaning, duct work, walk-in coolers and commercial HVAC across Miami-Dade, Broward & Palm Beach. Licensed CAC1824633. (786) 807-8125.",
};

export default function ServicesPage() {
  return (
    <>
      <main className="bg-night min-h-screen">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="hud-label text-ice mb-4">Our services</p>
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-medium tracking-tight text-frost md:text-5xl">
            Everything cold,
            <br />
            under one roof.
          </h1>
          <p className="text-steel mt-5 max-w-xl leading-relaxed">
            Residential and commercial air conditioning across Miami-Dade,
            Broward, and Palm Beach — installed, serviced, and repaired by
            Florida state-certified techs. Licensed &amp; insured, CAC1824633.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <a
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group border-frost/10 hover:border-ice/40 overflow-hidden rounded-2xl border transition-colors duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={asset(s.image)}
                    alt={s.imageAlt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent" />
                </div>
                <div className="bg-abyss/40 p-5">
                  <h2 className="font-[family-name:var(--font-space-grotesk)] text-lg font-medium text-frost">
                    {s.title}
                  </h2>
                  <p className="text-steel mt-1.5 text-sm leading-relaxed">
                    {s.short}
                  </p>
                  <p className="text-ice mt-3 text-sm font-medium">
                    Learn more{" "}
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
