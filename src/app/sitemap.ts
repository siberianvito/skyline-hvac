import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";
import { CITIES } from "@/lib/cities";

export const dynamic = "force-static";

const BASE = "https://skylinehvacpros.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`, lastModified: now, priority: 1 },
    { url: `${BASE}/services`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/about`, lastModified: now, priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: now, priority: 0.5 },
    { url: `${BASE}/privacy-policy`, lastModified: now, priority: 0.3 },
    { url: `${BASE}/terms-of-service`, lastModified: now, priority: 0.3 },
    ...SERVICES.map((s) => ({
      url: `${BASE}/services/${s.slug}`,
      lastModified: now,
      priority: 0.8,
    })),
    ...CITIES.map((c) => ({
      url: `${BASE}/service-areas/${c.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
  ];
}
