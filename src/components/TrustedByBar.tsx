import { asset } from "@/lib/asset";

const TRUSTED_BY = [
  { name: "Fox News", img: "/media/partners/foxnews.png" },
  { name: "Univision", img: "/media/partners/univision.png" },
  { name: "Shell", img: "/media/partners/shell.png" },
  { name: "Aventura Mall", img: "/media/partners/aventuramall.png" },
];

export default function TrustedByBar() {
  return (
    <section className="bg-frost border-t border-night/10 py-5">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-5 px-6">
        <p className="font-[family-name:var(--font-plex-mono)] text-[11px] font-semibold tracking-[0.3em] text-night/50 uppercase">
          Trusted by
        </p>
        {TRUSTED_BY.map((p) => (
          <img
            key={p.name}
            src={asset(p.img)}
            alt={`Trusted by ${p.name}`}
            loading="lazy"
            className="h-7 w-auto object-contain md:h-8"
          />
        ))}
      </div>
    </section>
  );
}
