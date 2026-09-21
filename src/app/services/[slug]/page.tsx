import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES, getService } from "@/lib/services";
import { CITIES } from "@/lib/cities";
import { asset } from "@/lib/asset";
import ConsultCard from "@/components/ConsultCard";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: `${s.title} — Miami, Broward & Palm Beach | Skyline HVAC`,
    description: `${s.short} 24/7 across Miami-Dade, Broward & Palm Beach. Licensed & insured CAC1824633. Call (786) 807-8125.`,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  return (
    <>
      <main className="bg-night min-h-screen">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <p className="hud-label mb-4 opacity-60">
            <a href="/" className="hover:text-ice">Home</a> ·{" "}
            <a href="/services" className="hover:text-ice">Services</a> ·{" "}
            <span className="text-ice">{s.title}</span>
          </p>

          <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_1fr]">
            {/* left — content */}
            <div>
              <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-medium tracking-tight text-frost md:text-5xl">
                {s.title}
              </h1>
              <p className="hud-label text-ice mt-4">
                Miami-Dade · Broward · Palm Beach · 24/7
              </p>

              <div className="border-frost/10 mt-8 overflow-hidden rounded-2xl border">
                <img
                  src={asset(s.image)}
                  alt={s.imageAlt}
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>

              {s.intro.map((p) => (
                <p key={p.slice(0, 24)} className="text-steel mt-6 leading-relaxed">
                  {p}
                </p>
              ))}

              <h2 className="font-[family-name:var(--font-space-grotesk)] mt-10 text-2xl font-medium text-frost">
                What&apos;s included
              </h2>
              <ul className="mt-5 space-y-3.5">
                {s.included.map((b) => (
                  <li key={b} className="flex items-center gap-3.5">
                    <span className="from-glacier to-ice flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br">
                      <svg
                        viewBox="0 0 24 24"
                        className="stroke-night h-3.5 w-3.5 fill-none"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 12l5 5L20 6" />
                      </svg>
                    </span>
                    <span className="text-frost/90 text-[15.5px]">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="glass mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl px-7 py-6 sm:flex-row sm:items-center">
                <p className="font-[family-name:var(--font-space-grotesk)] text-lg text-frost">
                  Need it handled today?
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
                title={`Get a free ${s.title.toLowerCase()} consult.`}
                subtitle="Tell us what's going on — a certified tech calls back fast."
              />
            </div>
          </div>

          {/* internal links — other services + areas */}
          <div className="border-frost/10 mt-16 border-t pt-10">
            <h2 className="hud-label text-ice mb-5">More services</h2>
            <div className="flex flex-wrap gap-2.5">
              {SERVICES.filter((x) => x.slug !== s.slug).map((x) => (
                <a
                  key={x.slug}
                  href={`/services/${x.slug}`}
                  className="glass hover:border-ice/50 rounded-full px-4 py-2 text-sm text-frost/85 transition-colors"
                >
                  {x.title}
                </a>
              ))}
            </div>

            <h2 className="hud-label text-ice mt-10 mb-5">
              {s.title} near you
            </h2>
            <div className="flex flex-wrap gap-x-5 gap-y-2.5">
              {CITIES.map((c) => (
                <a
                  key={c.slug}
                  href={`/service-areas/${c.slug}`}
                  className="text-steel hover:text-ice text-sm transition-colors"
                >
                  {c.name}
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
