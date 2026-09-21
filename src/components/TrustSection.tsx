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

export default function TrustSection() {
  // logos tripled for a seamless scrolling loop
  const run = [...PARTNERS, ...PARTNERS, ...PARTNERS];
  return (
    <section className="relative overflow-hidden bg-white py-6 md:py-7">
      {/* brand color edges */}
      <div className="from-glacier via-ice to-heat absolute inset-x-0 top-0 h-1 bg-gradient-to-r" />
      <p className="font-[family-name:var(--font-plex-mono)] text-glacier text-center text-[11px] font-semibold tracking-[0.3em] uppercase">
        ❄ Our trusted partners
      </p>
      <div className="mt-4 overflow-hidden">
        <div className="marquee-logos flex w-max items-center gap-16 pr-16">
          {run.map((p, i) => (
            <img
              key={`${p.name}-${i}`}
              src={asset(p.img)}
              alt={`${p.name} — installed & serviced by Skyline HVAC`}
              loading="lazy"
              className="h-8 w-auto shrink-0 object-contain md:h-9"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
