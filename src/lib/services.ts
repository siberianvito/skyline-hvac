export type Service = {
  slug: string;
  title: string;
  short: string;
  image: string;
  imageAlt: string;
  intro: string[];
  included: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "ac-repair",
    title: "AC Repair",
    short: "Fast, honest diagnostics and same-day fixes for any brand.",
    image: "/jobs/job-05.jpg",
    imageAlt: "Skyline HVAC technician-installed condenser after an AC repair in Miami",
    intro: [
      "When your AC quits in South Florida heat, every hour counts. Skyline HVAC runs fully stocked trucks across Miami-Dade, Broward, and Palm Beach so most repairs are diagnosed and fixed on the very first visit — days, nights, weekends, and holidays.",
      "Our Florida state-certified techs (CAC1824633) work on every major brand and give you a flat, upfront quote before a single panel comes off. No guesswork, no surprise charges — just cold air back in your home fast.",
    ],
    included: [
      "24/7 emergency response, same-day in most areas",
      "Full-system diagnostic with clear findings",
      "Flat, upfront pricing in writing before work starts",
      "Refrigerant leak detection and recharge",
      "Compressor, capacitor, fan motor & board repairs",
    ],
  },
  {
    slug: "ac-diagnosis",
    title: "AC Diagnosis",
    short: "Free full-system diagnostic for all new customers.",
    image: "/jobs/job-02.jpg",
    imageAlt: "Skyline HVAC technician-diagnosed rooftop condenser in Miami",
    intro: [
      "Weak airflow, warm spots, weird noises, a power bill that keeps climbing — before anyone sells you a fix, you deserve to know exactly what's wrong. A Skyline diagnosis checks the whole system: refrigerant pressures, electrical, airflow, coils, and controls, with clear findings you can understand.",
      "Right now the diagnostic is FREE for all new customers across Miami-Dade, Broward, and Palm Beach. You get straight answers and a flat, written quote — then you decide. No pressure, no mystery fees.",
    ],
    included: [
      "Free for all new customers — limited-time offer",
      "Full refrigerant pressure & leak check",
      "Electrical, capacitor & compressor testing",
      "Airflow, coil & ductwork inspection",
      "Written findings with a flat repair quote",
    ],
  },
  {
    slug: "ac-maintenance",
    title: "AC Maintenance",
    short: "Seasonal tune-ups that stop breakdowns before they start.",
    image: "/media/services/maintenance.jpg",
    imageAlt: "HVAC gauges connected to a condenser during an AC maintenance tune-up",
    intro: [
      "In South Florida your AC runs practically year-round — and the systems that survive August are the ones that get maintained. A Skyline tune-up catches worn parts, dirty coils, and low refrigerant before they turn into a sweaty 2 AM emergency.",
      "Regular maintenance also keeps your energy bill honest: a clean, calibrated system can run noticeably cheaper than a neglected one, and it protects your manufacturer's warranty.",
    ],
    included: [
      "Full inspection of electrical, refrigerant & airflow",
      "Coil condition check and drain line flush",
      "Refrigerant level and pressure verification",
      "Thermostat calibration and filter guidance",
      "Written condition report with photos",
    ],
  },
  {
    slug: "coil-cleaning",
    title: "Coil Cleaning",
    short: "Restore lost cooling power and cut your energy bill.",
    image: "/media/services/coil-cleaning.jpg",
    imageAlt: "Foaming coil cleaner being applied to AC condenser coils",
    intro: [
      "Dirty coils are the silent AC killer in South Florida — salt air, dust, and humidity coat your condenser and evaporator coils until the system works twice as hard to cool half as well. If your AC runs constantly but the house never feels cold, the coils are the first suspect.",
      "Skyline techs deep-clean both coil sets with professional foaming cleaners and fin-safe tools, restoring heat transfer, lowering head pressure, and extending the life of your compressor.",
    ],
    included: [
      "Condenser (outdoor) coil deep clean",
      "Evaporator (indoor) coil cleaning",
      "Fin straightening and inspection",
      "Drain pan and line treatment",
      "Before/after performance check",
    ],
  },
  {
    slug: "walk-in-cooler-repair",
    title: "Walk-In Cooler Repair",
    short: "Commercial refrigeration rescue — protect your inventory.",
    image: "/media/services/walk-in-cooler.jpg",
    imageAlt: "Commercial walk-in cooler interior with evaporator unit",
    intro: [
      "For a restaurant, market, or bar, a failing walk-in cooler isn't an inconvenience — it's inventory on a timer. Skyline HVAC answers commercial refrigeration calls across Miami-Dade, Broward, and Palm Beach 24/7, because product loss doesn't wait for business hours.",
      "We repair evaporators, condensing units, door gaskets, defrost systems, and temperature controls on all major walk-in brands, and we'll give you a straight answer on repair vs. replacement.",
    ],
    included: [
      "24/7 emergency commercial response",
      "Evaporator & condensing unit repair",
      "Refrigerant leak location and repair",
      "Defrost, thermostat & control fixes",
      "Door gasket and insulation assessment",
    ],
  },
  {
    slug: "condenser-replacement",
    title: "Condenser Replacement",
    short: "High-efficiency outdoor units, installed right.",
    image: "/jobs/job-03.jpg",
    imageAlt: "Two new Goodman condensers installed on fresh pads by Skyline HVAC",
    intro: [
      "When a compressor dies on an older unit, a new high-efficiency condenser is often smarter than a big repair — especially with Florida's cooling season running eleven months long. Skyline installs properly sized, properly charged condensers that are matched to your air handler, not just dropped on a pad.",
      "Every replacement includes a new pad where needed, pressure-tested line sets, a factory-spec refrigerant charge, and a full commissioning check so the system performs like the nameplate promises.",
    ],
    included: [
      "Load-matched sizing — never guesswork",
      "New pad, whip & disconnect as needed",
      "Pressure-tested, flushed line sets",
      "Factory-spec charge and commissioning",
      "Old unit haul-away and disposal",
    ],
  },
  {
    slug: "commercial-ac-repair",
    title: "Commercial AC Repair",
    short: "Rooftop units, split systems & server rooms — minimal downtime.",
    image: "/media/services/commercial-rtu.jpg",
    imageAlt: "Rooftop package unit serviced by Skyline HVAC on a Miami commercial roof",
    intro: [
      "A hot storefront empties fast, and a hot office gets nothing done. Skyline HVAC keeps South Florida businesses cool with rapid commercial response across Miami-Dade, Broward, and Palm Beach — rooftop package units, split systems, mini-splits, and server room cooling.",
      "We work around your operating hours where possible, communicate clearly with property managers, and document every repair so your maintenance records stay clean.",
    ],
    included: [
      "Rooftop package unit (RTU) repair",
      "Commercial split & VRF system service",
      "After-hours scheduling available",
      "Property-manager friendly reporting",
      "Preventive maintenance contracts",
    ],
  },
  {
    slug: "commercial-ac-installation",
    title: "Commercial AC Installation",
    short: "Design-build cooling for offices, restaurants & venues.",
    image: "/jobs/job-07.jpg",
    imageAlt: "Skyline HVAC crew installing ceiling ductwork in a commercial venue",
    intro: [
      "From restaurant build-outs to office floors and event venues, Skyline HVAC designs and installs commercial cooling that's sized for real occupancy loads — not rules of thumb. We handle equipment, ductwork, controls, and startup as one accountable crew.",
      "Licensed and insured (CAC1824633), we coordinate with GCs and inspectors, hit construction schedules, and commission every system with documented performance numbers.",
    ],
    included: [
      "Load calculation & system design",
      "RTU, split, VRF & mini-split installation",
      "Custom ductwork fabrication & install",
      "Thermostats, zoning & controls",
      "Permits, inspection & commissioning",
    ],
  },
  {
    slug: "duct-repair-replacement",
    title: "Duct Repair / Replacement",
    short: "Sealed, balanced ductwork — even cooling in every room.",
    image: "/jobs/job-04.jpg",
    imageAlt: "Custom sheet-metal ductwork fabricated by Skyline HVAC",
    intro: [
      "If one room is freezing and another never cools, or your energy bill keeps climbing, your ductwork is probably leaking cold air into the attic. Leaky, crushed, or undersized ducts can waste a huge share of the cooling you're paying for.",
      "Skyline repairs, seals, and replaces flex and sheet-metal duct systems — we even fabricate custom metal ductwork for commercial jobs — then balances airflow so every room gets its share of cold.",
    ],
    included: [
      "Duct leakage inspection & testing",
      "Sealing, insulation & repair",
      "Full duct system replacement",
      "Custom sheet-metal fabrication",
      "Airflow balancing room by room",
    ],
  },
  {
    slug: "ac-installation",
    title: "AC Installation",
    short: "New high-efficiency systems, installed to last.",
    image: "/jobs/job-01.jpg",
    imageAlt: "Skyline HVAC lifting a new condenser for a second-story installation",
    intro: [
      "A new AC is only as good as its installation — an oversized or sloppily installed system will short-cycle, sweat, and die young. Skyline sizes every system to your actual home, installs it to factory spec, and stands behind the work with the license on the door: CAC1824633.",
      "We install high-efficiency systems from every major brand, handle permits and inspections, and leave you with a system that cools evenly, runs quietly, and keeps the power bill in check. Financing available.",
    ],
    included: [
      "In-home load calculation & honest sizing",
      "All major brands — matched systems",
      "Permits, inspection & code compliance",
      "New pad, lines, drain & electrical whip",
      "Haul-away, cleanup & full commissioning",
    ],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
