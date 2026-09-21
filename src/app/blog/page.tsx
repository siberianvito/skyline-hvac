import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — Skyline HVAC · Miami",
  description:
    "AC tips, maintenance guides, and cooling know-how for South Florida homes and businesses, from the Skyline HVAC crew.",
};

export default function BlogPage() {
  return (
    <>
      <main className="bg-night min-h-[70svh]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="hud-label text-ice mb-4">The cold log</p>
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-medium tracking-tight text-frost md:text-5xl">
            Cooling know-how,
            <br />
            straight from the crew.
          </h1>
          <p className="text-steel mt-6 max-w-lg leading-relaxed">
            AC tips, maintenance guides, and honest answers for South Florida
            homes and businesses. First posts are being written now — check
            back soon.
          </p>

          <div className="glass mt-12 inline-flex flex-col items-start gap-4 rounded-2xl px-8 py-7 sm:flex-row sm:items-center">
            <p className="text-frost font-[family-name:var(--font-space-grotesk)] text-lg">
              Can&apos;t wait for the reading material?
            </p>
            <a
              href="tel:+17868078125"
              className="glow-cta from-glacier to-ice text-night shrink-0 rounded-full bg-gradient-to-r px-6 py-3 font-[family-name:var(--font-plex-mono)] text-sm font-semibold tracking-[0.1em]"
            >
              Talk to a tech — 786 · 807 · 8125
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
