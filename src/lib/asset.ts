// Prefixes public asset paths with the deploy base path (GitHub Pages
// serves the site from /skyline-hvac). Inlined at build time.
export const asset = (p: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${p}`;
