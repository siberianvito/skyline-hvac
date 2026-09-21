"use client";

import { useEffect } from "react";

// GoHighLevel inline form embed. Paste the form's widget URL from
// GHL → Sites → Forms → Builder → Integrate (iframe src).
export const GHL_FORM_EMBED_URL =
  "https://api.leadconnectorhq.com/widget/form/DMv3BTR1bGX33BWCrS8G";

// Legal links under the form — dark, for the light form card
const linkClass =
  "font-medium text-night/75 underline decoration-night/25 underline-offset-2 transition-colors hover:text-glacier";

/* Consent + legal notice that sits at the foot of the form. Lives here rather
   than in the pages so it travels with the form everywhere it is embedded. */
export function FormLegalNote() {
  return (
    <p className="mx-auto max-w-md text-center text-[11.5px] leading-relaxed text-night/55">
      By submitting this form you agree to be contacted by phone, text, or email
      about your request. Message and data rates may apply and message frequency
      varies. Reply STOP to opt out, or HELP for help. See our{" "}
      <a href="/privacy" className={linkClass}>
        Privacy Policy
      </a>{" "}
      and{" "}
      <a href="/terms" className={linkClass}>
        Terms of Service
      </a>
      .
    </p>
  );
}

export default function GHLForm({ idSuffix = "" }: { idSuffix?: string }) {
  useEffect(() => {
    // GHL's resizer script — makes the iframe auto-fit the form height
    const existing = document.querySelector(
      'script[src="https://link.msgsndr.com/js/form_embed.js"]'
    );
    if (existing) return;
    const s = document.createElement("script");
    s.src = "https://link.msgsndr.com/js/form_embed.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  if (!GHL_FORM_EMBED_URL) return null;

  const formId = GHL_FORM_EMBED_URL.split("/").pop();

  return (
    <iframe
      src={GHL_FORM_EMBED_URL}
      id={`inline-${formId}${idSuffix ? `-${idSuffix}` : ""}`}
      title="Free consultation — Skyline HVAC"
      className="block w-full border-0"
      style={{ minHeight: 480 }}
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-activation-type="alwaysActivated"
      data-deactivation-type="neverDeactivate"
      data-form-name="Skyline HVAC — Free Consultation"
    />
  );
}
