import { CITIES, COUNTIES } from "@/lib/cities";

export default function CityDirectory() {
  return (
    <section id="service-areas" className="bg-abyss/40 border-frost/10 relative border-t py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="hud-label text-ice mb-4">Service areas</p>
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-medium tracking-tight text-frost md:text-5xl">
          Proudly serving South Florida.
        </h2>
        <p className="text-steel mt-4 max-w-xl leading-relaxed">
          Skyline HVAC crews roll across Miami-Dade, Broward, and Palm Beach
          counties every day — licensed, insured, and usually same-day.
        </p>

        <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {COUNTIES.map((county) => (
            <div key={county}>
              <h3 className="font-[family-name:var(--font-space-grotesk)] border-frost/10 mb-5 border-b pb-3 text-lg font-medium text-frost">
                {county} County
              </h3>
              <ul className="space-y-2.5">
                {CITIES.filter((c) => c.county === county).map((c) => (
                  <li key={c.slug}>
                    <a
                      href={`/service-areas/${c.slug}`}
                      className="text-steel hover:text-ice group flex items-center gap-2.5 text-[15px] transition-colors"
                    >
                      <span className="text-ice/60 group-hover:text-ice text-xs">
                        ❄
                      </span>
                      AC Repair in {c.name}, FL
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
