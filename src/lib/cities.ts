export type City = {
  slug: string;
  name: string;
  county: "Miami-Dade" | "Broward" | "Palm Beach";
  image: string;
};

// County scenes rotate across cities; Miami proper gets the skyline.
const MIA_SKY = "/media/hero-miami.jpg";
const MIA_RES = "/media/areas/miami-neighborhood.jpg";
const BRO_CANAL = "/media/areas/fort-lauderdale.jpg";
const BRO_RES = "/media/areas/broward-suburb.jpg";
const PB_SKY = "/media/areas/west-palm-beach.jpg";
const PB_RES = "/media/areas/palm-beach-residential.jpg";

const mk = (
  name: string,
  county: City["county"],
  image: string,
  slug?: string
): City => ({
  slug:
    slug ??
    name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-"),
  name,
  county,
  image,
});

export const CITIES: City[] = [
  // Miami-Dade
  mk("Miami", "Miami-Dade", MIA_SKY),
  mk("Miami Beach", "Miami-Dade", MIA_SKY),
  mk("Hialeah", "Miami-Dade", MIA_RES),
  mk("Coral Gables", "Miami-Dade", MIA_RES),
  mk("Doral", "Miami-Dade", MIA_RES),
  mk("Kendall", "Miami-Dade", MIA_RES),
  mk("Aventura", "Miami-Dade", MIA_SKY),
  mk("Miami Gardens", "Miami-Dade", MIA_RES),
  mk("Homestead", "Miami-Dade", MIA_RES),
  mk("Cutler Bay", "Miami-Dade", MIA_RES),
  mk("North Miami", "Miami-Dade", MIA_SKY),
  // Broward
  mk("Fort Lauderdale", "Broward", BRO_CANAL),
  mk("Hollywood", "Broward", BRO_CANAL),
  mk("Pembroke Pines", "Broward", BRO_RES),
  mk("Miramar", "Broward", BRO_RES),
  mk("Coral Springs", "Broward", BRO_RES),
  mk("Pompano Beach", "Broward", BRO_CANAL),
  mk("Davie", "Broward", BRO_RES),
  mk("Plantation", "Broward", BRO_RES),
  mk("Sunrise", "Broward", BRO_RES),
  mk("Weston", "Broward", BRO_RES),
  mk("Deerfield Beach", "Broward", BRO_CANAL),
  // Palm Beach
  mk("West Palm Beach", "Palm Beach", PB_SKY),
  mk("Boca Raton", "Palm Beach", PB_RES),
  mk("Boynton Beach", "Palm Beach", PB_RES),
  mk("Delray Beach", "Palm Beach", PB_SKY),
  mk("Wellington", "Palm Beach", PB_RES),
  mk("Jupiter", "Palm Beach", PB_SKY),
  mk("Palm Beach Gardens", "Palm Beach", PB_RES),
  mk("Lake Worth Beach", "Palm Beach", PB_SKY),
  mk("Royal Palm Beach", "Palm Beach", PB_RES),
  mk("Greenacres", "Palm Beach", PB_RES),
];

export const getCity = (slug: string) => CITIES.find((c) => c.slug === slug);

export const COUNTIES = ["Miami-Dade", "Broward", "Palm Beach"] as const;
