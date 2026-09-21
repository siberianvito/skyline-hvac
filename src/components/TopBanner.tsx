const ITEMS = [
  "Serving Miami-Dade",
  "Broward",
  "West Palm Beach",
  "24/7 Emergency Service",
  "Licensed & Insured · CAC1824633",
];

export default function TopBanner() {
  // content doubled for a seamless loop
  const run = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="bg-night border-frost/10 overflow-hidden border-b py-1.5">
      <div className="marquee-track flex w-max items-center">
        {run.map((t, i) => (
          <span
            key={i}
            className="hud-label flex shrink-0 items-center whitespace-nowrap"
          >
            <span className="px-5">{t}</span>
            <span className="text-ice">❄</span>
          </span>
        ))}
      </div>
    </div>
  );
}
