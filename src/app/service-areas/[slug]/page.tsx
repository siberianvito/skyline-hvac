import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES, getCity } from "@/lib/cities";
import { SERVICES } from "@/lib/services";
import { asset } from "@/lib/asset";
import ConsultCard from "@/components/ConsultCard";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return CITIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCity(slug);
  if (!c) return {};
  return {
    title: `AC Repair & Installation in ${c.name}, FL | Skyline HVAC`,
    description: `24/7 air conditioning repair, installation & maintenance in ${c.name}, ${c.county} County. Licensed & insured CAC1824633, same-day service. Call (786) 807-8125.`,
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCity(slug);
  if (!c) notFound();

  const neighbors = CITIES.filter(
    (x) => x.county === c.county && x.slug !== c.slug
  );

  return (
    <>
      <main className="bg-night min-h-screen">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <p className="hud-label mb-4 opacity-60">
            <a href="/" className="hover:text-ice">Home</a> ·{" "}
            <a href="/#service-areas" className="hover:text-ice">Service areas</a> ·{" "}
            <span className="text-ice">{c.name}</span>
          </p>

          <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_1fr]">
            {/* left — content */}
            <div>
              <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-medium tracking-tight text-frost md:text-[2.9rem] md:leading-tight">
                AC Repair &amp; Installation
                <br />
                in {c.name}, FL
              </h1>
              <p className="hud-label text-ice mt-4">
                {c.county} County · 24/7 emergency service
              </p>

              <div className="border-frost/10 mt-8 overflow-hidden rounded-2xl border">
                <img
                  src={asset(c.image)}
                  alt={`Skyline HVAC service area — ${c.name}, Florida`}
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>

              <p className="text-steel mt-6 leading-relaxed">
                When the AC gives out in {c.name}, you don&apos;t need a
                voicemail — you need a truck on the way. Skyline HVAC runs
                fully stocked crews across {c.county} County every day, so
                most {c.name} repairs are diagnosed and fixed on the first
                visit, with flat, upfront pricing in writing before any work
                starts.
              </p>
              <p className="text-steel mt-4 leading-relaxed">
                From emergency AC repair and seasonal tune-ups to complete
                high-efficiency installations, our Florida state-certified
                techs (license CAC1824633) handle residential and commercial
                systems of every major brand — backed by 24/7 emergency
                response, nights, weekends, and holidays included. Financing
                available.
              </p>

              <h2 className="font-[family-name:var(--font-space-grotesk)] mt-10 text-2xl font-medium text-frost">
                AC services in {c.name}
              </h2>
              <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {SERVICES.map((s) => (
                  <a
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="glass hover:border-ice/50 group flex items-center gap-3 rounded-xl px-4 py-3 transition-colors"
                  >
                    <span className="text-ice text-xs">❄</span>
                    <span className="text-frost/90 text-[15px]">{s.title}</span>
                    <span className="text-ice ml-auto opacity-0 transition-opacity group-hover:opacity-100">
                      →
                    </span>
                  </a>
                ))}
              </div>

              <div className="glass mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl px-7 py-6 sm:flex-row sm:items-center">
                <p className="font-[family-name:var(--font-space-grotesk)] text-lg text-frost">
                  AC trouble in {c.name} right now?
                </p>
                <a
                  href="tel:+17868078125"
                  className="glow-cta from-glacier to-ice text-night shrink-0 rounded-full bg-gradient-to-r px-6 py-3 font-[family-name:var(--font-plex-mono)] text-sm font-semibold tracking-[0.1em]"
                >
                  786 · 807 · 8125
                </a>
              </div>
            </div>

            {/* right — form */}
            <div className="lg:sticky lg:top-24">
              <ConsultCard
                title={`Free AC consultation in ${c.name}.`}
                subtitle="Tell us what's going on — a certified tech calls back fast."
              />
            </div>
          </div>

          {/* neighbors */}
          <div className="border-frost/10 mt-16 border-t pt-10">
            <h2 className="hud-label text-ice mb-5">
              Also serving {c.county} County
            </h2>
            <div className="flex flex-wrap gap-x-5 gap-y-2.5">
              {neighbors.map((n) => (
                <a
                  key={n.slug}
                  href={`/service-areas/${n.slug}`}
                  className="text-steel hover:text-ice text-sm transition-colors"
                >
                  {n.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
