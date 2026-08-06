export default function TopBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-40 border-b border-frost/10 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex h-10 max-w-6xl items-center justify-between gap-3 px-4 md:px-6">
        <p className="hud-label flex items-center gap-2.5 !text-frost/90">
          <span className="bg-ice inline-block h-1.5 w-1.5 animate-pulse rounded-full" />
          <span className="hidden sm:inline">Serving Miami-Dade &amp; Broward · 24/7</span>
          <span className="sm:hidden">Serving Miami-Dade · 24/7</span>
        </p>
        <a
          href="tel:+17865187045"
          className="hud-label !text-ice flex items-center gap-2 transition-colors hover:!text-frost"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5 fill-none stroke-current"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.5 2.9.7a2 2 0 0 1 1.7 2Z" />
          </svg>
          (786) 518-7045
        </a>
      </div>
    </div>
  );
}
