import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono, Manrope } from "next/font/google";
import NavBar from "@/components/NavBar";
import TopBanner from "@/components/TopBanner";
import ExitPopup from "@/components/ExitPopup";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const hud = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3004"),
  title: "Skyline HVAC — Air Conditioning · Miami",
  description:
    "Miami's premium air conditioning company. Installation · Service · Repair. Licensed & insured (CAC1824633). Call (786) 807-8125.",
  openGraph: {
    title: "Skyline HVAC — Air Conditioning · Miami",
    description:
      "Installation · Service · Repair. Licensed & insured (CAC1824633). 24/7 across Miami-Dade & Broward — (786) 807-8125.",
    images: [`${basePath}/media/hero-frozen.png`],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${hud.variable} ${body.variable} antialiased`}
      >
        <TopBanner />
        <NavBar />
        {children}
        <ExitPopup />
        <AccessibilityWidget />
      </body>
    </html>
  );
}
