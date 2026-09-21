import { asset } from "@/lib/asset";

const PARTNERS = [
  { name: "Daikin", img: "/media/partners/daikin.png" },
  { name: "Ruud", img: "/media/partners/ruud.png" },
  { name: "Bryant", img: "/media/partners/bryant.svg" },
  { name: "Amana", img: "/media/partners/amana.png" },
  { name: "Goodman", img: "/media/partners/goodman.png" },
  { name: "Carrier", img: "/media/partners/carrier.png" },
  { name: "Rheem", img: "/media/partners/rheem.png" },
];

const TRUSTED_BY = [
  { name: "Fox News", img: "/media/partners/foxnews.png" },
  { name: "Univision", img: "/media/partners/univision.png" },
  { name: "Shell", img: "/media/partners/shell.png" },
  { name: "Aventura Mall", img: "/media/partners/aventuramall.png" },
];

export default function TrustSection() {
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-[family-name:var(--font-plex-mono)] text-center text-xs font-semibold tracking-[0.28em] text-night/50 uppercase">
          Our trusted partners
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {PARTNERS.map((p) => (
            <img
              key={p.name}
              src={asset(p.img)}
              alt={`${p.name} — installed & serviced by Skyline HVAC`}
              loading="lazy"
              className="h-8 w-auto object-contain md:h-10"
            />
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl border-t border-night/10 pt-10">
          <p className="font-[family-name:var(--font-plex-mono)] text-center text-xs font-semibold tracking-[0.28em] text-night/50 uppercase">
            Trusted by
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-7">
            {TRUSTED_BY.map((p) => (
              <img
                key={p.name}
                src={asset(p.img)}
                alt={`Trusted by ${p.name}`}
                loading="lazy"
                className="h-7 w-auto object-contain md:h-9"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
