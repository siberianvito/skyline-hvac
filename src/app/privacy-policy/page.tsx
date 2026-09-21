import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Skyline HVAC",
  description:
    "How Skyline HVAC collects, uses, and protects your information at skylinehvacpros.com.",
};

const SECTIONS: { h: string; p: string[] }[] = [
  {
    h: "Information we collect",
    p: [
      "When you request a consultation or contact us, we collect the information you provide: your name, phone number, email address, ZIP code, and any details you share about your service needs. Our consultation forms are processed by our customer-management platform (GoHighLevel / LeadConnector) on our behalf.",
      "Like most websites, we may also receive basic technical information automatically, such as your browser type, device, and pages visited, which helps us keep the site fast and useful.",
    ],
  },
  {
    h: "How we use your information",
    p: [
      "We use your information to respond to your requests, schedule and perform service, send appointment communications, and follow up about your consultation. If you opt in, we may send occasional offers — you can unsubscribe at any time.",
    ],
  },
  {
    h: "What we don't do",
    p: [
      "We do not sell your personal information. We share it only with the service providers who help us operate (such as our scheduling and customer-management platform), and only as needed to serve you.",
    ],
  },
  {
    h: "Cookies & analytics",
    p: [
      "This site may use cookies and similar technologies for basic functionality and to understand how visitors use it. You can control cookies through your browser settings.",
    ],
  },
  {
    h: "Data retention & security",
    p: [
      "We keep customer records as long as needed to provide service and meet legal obligations, and we use reasonable safeguards to protect them.",
    ],
  },
  {
    h: "Your choices",
    p: [
      "You may request access to, correction of, or deletion of your personal information by contacting us at (786) 807-8125. Texting STOP to any message opts you out of texts; unsubscribe links opt you out of emails.",
    ],
  },
  {
    h: "Children",
    p: [
      "Our services and website are directed to adults and are not intended for children under 13.",
    ],
  },
  {
    h: "Contact",
    p: [
      "Skyline HVAC · Serving Miami-Dade, Broward & Palm Beach Counties, Florida · (786) 807-8125 · License CAC1824633.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <main className="bg-night min-h-screen">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <p className="hud-label text-ice mb-4">Legal</p>
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-medium tracking-tight text-frost md:text-5xl">
            Privacy Policy
          </h1>
          <p className="hud-label mt-4 opacity-60">Last updated: September 21, 2026</p>
          <p className="text-steel mt-8 leading-relaxed">
            Skyline HVAC (&quot;we&quot;, &quot;us&quot;) respects your privacy.
            This policy explains what we collect on skylinehvacpros.com and how
            we use it.
          </p>
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
