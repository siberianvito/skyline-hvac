import { asset } from "@/lib/asset";

const TRUSTED_BY = [
  { name: "Google", img: "/media/partners/google.png" },
  { name: "Fox News", img: "/media/partners/foxnews.png" },
  { name: "NBC News", img: "/media/partners/nbcnews.png" },
  { name: "Univision", img: "/media/partners/univision.png" },
  { name: "Telemundo", img: "/media/partners/telemundo.png" },
  { name: "HGTV", img: "/media/partners/hgtv.png" },
  { name: "Gucci", img: "/media/partners/gucci.png" },
  { name: "Shell", img: "/media/partners/shell.png" },
  { name: "Aventura Mall", img: "/media/partners/aventuramall.png" },
  { name: "BBB", img: "/media/partners/bbb.png" },
  { name: "Yelp", img: "/media/partners/yelp.png" },
  { name: "Angi", img: "/media/partners/angi.png" },
  { name: "Houzz", img: "/media/partners/houzz.png" },
  { name: "Meta Business", img: "/media/partners/meta.png" },
  { name: "US Chamber of Commerce", img: "/media/partners/uschamber.png" },
  { name: "DBPR", img: "/media/partners/dbpr.png" },
  { name: "ESCO Institute", img: "/media/partners/esco.png" },
  { name: "CBT College", img: "/media/partners/cbtcollege.png" },
  { name: "Housecall Pro", img: "/media/partners/housecallpro.svg" },
];

export default function TrustedByBar() {
  // doubled for a seamless scrolling loop
  const run = [...TRUSTED_BY, ...TRUSTED_BY];
  return (
    <section className="bg-frost border-t border-night/10 overflow-hidden py-5">
      <p className="font-[family-name:var(--font-plex-mono)] text-center text-[11px] font-semibold tracking-[0.3em] text-night/50 uppercase">
        Trusted by
      </p>
      <div className="mt-4 overflow-hidden">
        <div className="marquee-logos flex w-max items-center gap-14 pr-14">
          {run.map((p, i) => (
            <img
              key={`${p.name}-${i}`}
              src={asset(p.img)}
              alt={`Trusted by ${p.name}`}
              loading="lazy"
              className="h-7 w-auto shrink-0 object-contain md:h-8"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
