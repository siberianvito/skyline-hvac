import GHLForm, { FormLegalNote } from "./GHLForm";

export default function ConsultCard({
  title = "Skilled AC techs standing by — ready to help today.",
  subtitle = "Residential & commercial · a certified tech calls back fast.",
  idSuffix = "",
}: {
  title?: string;
  subtitle?: string;
  idSuffix?: string;
}) {
  return (
    <div className="overflow-hidden rounded-3xl bg-frost text-night shadow-[0_30px_90px_rgba(3,13,26,0.6)]">
      <div className="from-glacier to-ice flex items-center justify-between bg-gradient-to-r px-7 py-4 md:px-9">
        <p className="font-[family-name:var(--font-plex-mono)] text-xs font-semibold tracking-[0.24em] text-night uppercase">
          ❄ Free consultation
        </p>
        <p className="font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.18em] text-night/60 uppercase">
          No obligation
        </p>
      </div>

      <div className="px-5 pt-6 md:px-7">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold tracking-tight text-night md:text-2xl">
          {title}
        </h2>
        <p className="mt-1.5 text-[15px] text-night/60">{subtitle}</p>
      </div>

      <div className="p-3 md:p-5">
        <GHLForm idSuffix={idSuffix} />
        <div className="mt-2 pb-2 text-center">
          <p className="font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.18em] text-night/40 uppercase">
            No spam · no pressure · usually 1-hour callback
          </p>
          <div className="mt-3">
            <FormLegalNote />
          </div>
        </div>
      </div>
    </div>
  );
}
