import type { ReactNode } from "react";
import Footer from "@/components/Footer";

/* Shared shell for the legal pages (privacy policy, terms of service).
   Dark theme to match the rest of the site, narrow measure for long reading. */
export default function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  updated: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <main className="bg-night min-h-[70svh]">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <p className="hud-label text-ice mb-4">{eyebrow}</p>
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-medium tracking-tight text-frost md:text-5xl">
            {title}
          </h1>
          <p className="hud-label mt-6 opacity-50">Last updated · {updated}</p>

          {intro ? (
            <div className="text-steel mt-7 space-y-4 text-[16px] leading-relaxed">
              {intro}
            </div>
          ) : null}

          <div className="mt-14 space-y-12">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}

/* A numbered top-level section. */
export function Section({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold tracking-tight text-frost md:text-2xl">
        {heading}
      </h2>
      <div className="text-steel mt-4 space-y-4 text-[16px] leading-relaxed">
        {children}
      </div>
    </section>
  );
}

/* Bulleted list with ice-blue markers. */
export function List({ children }: { children: ReactNode }) {
  return <ul className="space-y-3.5">{children}</ul>;
}

export function Item({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3.5">
      <span
        aria-hidden
        className="bg-glacier mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full"
      />
      <span>{children}</span>
    </li>
  );
}

/* Callout for text that has to stand out — e.g. the mobile-information clause. */
export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="glass text-frost rounded-2xl px-6 py-6 text-[16px] leading-relaxed md:px-8">
      {children}
    </div>
  );
}
