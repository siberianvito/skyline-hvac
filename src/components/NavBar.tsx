import { asset } from "@/lib/asset";
import { SERVICES } from "@/lib/services";

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
            {/* Services — hover dropdown */}
            <div className="group relative">
              <a
                href="/services"
                className="text-night/80 hover:text-glacier flex items-center gap-1.5 py-3 font-[family-name:var(--font-space-grotesk)] text-[15px] font-semibold tracking-wide transition-colors"
              >
                Services
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 fill-none stroke-current transition-transform duration-200 group-hover:rotate-180"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </a>
              <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-1 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <div className="overflow-hidden rounded-2xl border border-night/10 bg-white p-2 shadow-[0_24px_60px_rgba(3,13,26,0.18)]">
                  {SERVICES.map((s) => (
                    <a
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="text-night/80 hover:bg-frost hover:text-glacier block rounded-xl px-4 py-2.5 text-[14px] font-medium transition-colors"
                    >
                      {s.title}
                    </a>
                  ))}
                  <a
                    href="/services"
                    className="text-glacier block rounded-xl px-4 py-2.5 text-[14px] font-semibold"
                  >
                    All services →
                  </a>
                </div>
              </div>
            </div>

            <a
              href="/about"
              className="text-night/80 hover:text-glacier font-[family-name:var(--font-space-grotesk)] text-[15px] font-semibold tracking-wide transition-colors"
            >
              About Us
            </a>
            <a
              href="/blog"
              className="text-night/80 hover:text-glacier font-[family-name:var(--font-space-grotesk)] text-[15px] font-semibold tracking-wide transition-colors"
            >
              Blog
            </a>
            <a
              href="/contact"
              className="text-night/80 hover:text-glacier font-[family-name:var(--font-space-grotesk)] text-[15px] font-semibold tracking-wide transition-colors"
            >
              Contact Us
            </a>
          </nav>

          <div className="flex shrink-0 items-center gap-2.5 md:gap-3.5">
          <div className="text-right leading-tight">
            <p className="font-[family-name:var(--font-space-grotesk)] text-heat text-[14px] font-bold md:text-[15px]">
              24/7
            </p>
            <p className="font-[family-name:var(--font-plex-mono)] text-[8.5px] font-semibold tracking-[0.16em] text-night/60 uppercase md:text-[9.5px]">
              Emergency
            </p>
          </div>
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
        </div>

        {/* mobile links — always visible, no hamburger to hunt for */}
        <nav className="flex items-center justify-center gap-6 pb-2.5 md:hidden">
          {[
            { label: "Services", href: "/services" },
            { label: "About", href: "/about" },
            { label: "Blog", href: "/blog" },
            { label: "Contact", href: "/contact" },
          ].map((l) => (
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
