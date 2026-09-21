"use client";

import { useEffect } from "react";

// GoHighLevel inline form embed. Paste the form's widget URL from
// GHL → Sites → Forms → Builder → Integrate (iframe src).
export const GHL_FORM_EMBED_URL =
  "https://api.leadconnectorhq.com/widget/form/DMv3BTR1bGX33BWCrS8G";

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
