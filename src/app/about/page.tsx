import type { Metadata } from "next";
import { asset } from "@/lib/asset";
import ConsultCard from "@/components/ConsultCard";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us — Skyline HVAC · South Florida's Trusted AC Experts",
  description:
    "Skyline HVAC is a locally owned, Florida state-certified AC company (CAC1824633) serving Miami-Dade, Broward & Palm Beach 24/7. Installation · Service · Repair.",
};

const CREDS = [
  {
    title: "Florida State Certified",
    copy: "Certified contractor license CAC1824633 — the license is on the door of every van and behind every job we sign.",
  },
  {
    title: "Licensed, Bonded & Insured",
    copy: "Full coverage on every project, residential or commercial. Your property is protected before a panel ever comes off.",
  },
  {
    title: "Locally Owned Family Business",
    copy: "Not a franchise, not a call center. A Miami crew that answers its own phone — nights, weekends, and holidays.",
  },
  {
    title: "24/7 Across Three Counties",
    copy: "Fully stocked trucks rolling through Miami-Dade, Broward, and Palm Beach every day. Most fixes happen on the first visit.",
  },
  {
    title: "Factory-Trained on Every Major Brand",
    copy: "Daikin, Ruud, Bryant, Amana, Goodman, Carrier, Rheem — we install and service them all to factory spec.",
  },
  {
    title: "Straight, Upfront Pricing",
    copy: "Flat quotes in writing before work starts. The price we say is the price you pay. Financing available.",
  },
];

export default function AboutPage() {
  return (
    <>
      <main className="bg-night min-h-screen">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="hud-label text-ice mb-4">About Skyline HVAC</p>
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-medium tracking-tight text-frost md:text-5xl">
            Born in Miami.
            <br />
            Built for the heat.
          </h1>

          <div className="mt-10 grid items-start gap-12 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <img
                src={asset("/van.png")}
                alt="The Skyline HVAC wrapped service van"
                className="w-full max-w-xl drop-shadow-[0_24px_48px_rgba(3,13,26,0.8)]"
              />
              <p className="text-steel mt-8 leading-relaxed">
                Skyline HVAC is a South Florida crew that knows exactly what an
                August afternoon feels like when the AC gives out. That&apos;s
                why the wrapped van you see around Miami-Dade, Broward, and
                Palm Beach rolls fully stocked — most repairs are diagnosed
                and fixed on the very first visit.
              </p>
              <p className="text-steel mt-4 leading-relaxed">
                From emergency repairs and seasonal tune-ups to complete
                high-efficiency installations, custom ductwork, and commercial
                refrigeration, our Florida state-certified techs handle the
                full life of your cooling system — and back every job with the
                license on the door: <span className="text-frost">CAC1824633</span>.
              </p>

              <h2 className="font-[family-name:var(--font-space-grotesk)] mt-12 text-2xl font-medium text-frost">
                Why South Florida trusts us
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {CREDS.map((c) => (
                  <div key={c.title} className="glass rounded-2xl p-5">
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-[17px] font-medium text-frost">
                      {c.title}
                    </h3>
                    <p className="text-steel mt-2 text-sm leading-relaxed">
                      {c.copy}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex justify-center sm:justify-start">
                <img
                  src={asset("/media/google-badge.png")}
                  alt="Rated Excellent — 5 stars on Google"
                  className="w-64 drop-shadow-[0_6px_24px_rgba(3,13,26,0.7)]"
                />
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <ConsultCard
                title="Meet your AC crew — free consult."
                subtitle="Tell us what's going on. A certified tech calls back fast."
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
