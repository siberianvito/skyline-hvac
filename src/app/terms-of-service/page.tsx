import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Skyline HVAC",
  description:
    "Terms governing the use of skylinehvacpros.com and Skyline HVAC's air conditioning services.",
};

const SECTIONS: { h: string; p: string[] }[] = [
  {
    h: "Who we are",
    p: [
      "Skyline HVAC is a Florida state-certified air conditioning contractor (license CAC1824633) serving Miami-Dade, Broward, and Palm Beach Counties. These terms govern your use of skylinehvacpros.com and your requests for our services through it.",
    ],
  },
  {
    h: "Estimates & consultations",
    p: [
      "Free consultations and estimates describe the anticipated scope and price of work based on the information available at the time. Final pricing is confirmed in writing before work begins. Promotional offers (such as new-customer promotions) may be modified or withdrawn at any time and cannot be combined unless stated.",
    ],
  },
  {
    h: "Scheduling & communications",
    p: [
      "By submitting a consultation request you agree that we may contact you by phone, text, or email about your request. Consent to marketing texts is not a condition of purchase, and you can opt out at any time by replying STOP.",
    ],
  },
  {
    h: "Services & workmanship",
    p: [
      "Work is performed by licensed, insured technicians to applicable code. Equipment is covered by the manufacturer's warranty; workmanship guarantees, when offered, are stated on your invoice or service agreement, which controls over anything on this website.",
    ],
  },
  {
    h: "Website content",
    p: [
      "Content on this site is provided for general information about our services and may change without notice. Logos and trademarks of equipment manufacturers and other companies belong to their respective owners; their appearance identifies the brands we install, service, or are affiliated with and does not imply endorsement.",
    ],
  },
  {
    h: "Limitation of liability",
    p: [
      "To the fullest extent permitted by Florida law, Skyline HVAC is not liable for indirect, incidental, or consequential damages arising from use of this website. Nothing in these terms limits rights you have under applicable law or under a signed service agreement.",
    ],
  },
  {
    h: "Governing law",
    p: [
      "These terms are governed by the laws of the State of Florida. Any disputes will be resolved in the courts of Miami-Dade County, Florida.",
    ],
  },
  {
    h: "Contact",
    p: [
      "Questions about these terms: call (786) 807-8125. Skyline HVAC · Miami-Dade, Broward & Palm Beach · License CAC1824633.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <main className="bg-night min-h-screen">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <p className="hud-label text-ice mb-4">Legal</p>
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-medium tracking-tight text-frost md:text-5xl">
            Terms of Service
          </h1>
          <p className="hud-label mt-4 opacity-60">Last updated: September 21, 2026</p>
          {SECTIONS.map((s) => (
            <section key={s.h} className="mt-10">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-medium text-frost">
                {s.h}
              </h2>
              {s.p.map((t) => (
                <p key={t.slice(0, 20)} className="text-steel mt-3 leading-relaxed">
                  {t}
                </p>
              ))}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
