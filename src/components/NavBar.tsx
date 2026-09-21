import { asset } from "@/lib/asset";

const LINKS = [
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-night/10 bg-white/95 shadow-[0_2px_20px_rgba(3,13,26,0.08)] backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex items-center justify-between gap-3 py-2 md:py-2.5">
          <a href="/" className="shrink-0">
            <img
              src={asset("/logo.png")}
              alt="Skyline HVAC"
              className="h-12 w-auto md:h-14"
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-night/80 hover:text-glacier font-[family-name:var(--font-space-grotesk)] text-[15px] font-semibold tracking-wide transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="tel:+17868078125"
            className="glow-cta from-glacier to-ice text-night inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r px-4 py-2 transition-transform duration-300 hover:scale-[1.04] md:px-5 md:py-2.5"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-none stroke-current"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.5 2.9.7a2 2 0 0 1 1.7 2Z" />
            </svg>
            <span className="font-[family-name:var(--font-plex-mono)] text-[13px] font-semibold tracking-[0.1em] md:text-sm">
              786 · 807 · 8125
            </span>
          </a>
        </div>

        {/* mobile links — always visible, no hamburger to hunt for */}
        <nav className="flex items-center justify-center gap-7 pb-2.5 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-night/80 font-[family-name:var(--font-space-grotesk)] text-sm font-semibold"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
