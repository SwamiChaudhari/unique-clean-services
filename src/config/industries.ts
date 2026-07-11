export interface Industry {
  id: string;
  title: string;
  icon: string;
  description: string;
  examples: string[];
}

// Industries We Serve — used on homepage + /industries page.
export const industries: Industry[] = [
  {
    id: "commercial-buildings",
    title: "Commercial Buildings",
    icon: "Building2",
    description:
      "Facade and glass cleaning for corporate headquarters, business centers, and mixed-use commercial towers using BMU systems, cradles, and rope access techniques.",
    examples: ["Corporate HQs", "Business Centers", "Mixed-Use Towers", "IT Parks"],
  },
  {
    id: "high-rise-buildings",
    title: "High-Rise Buildings",
    icon: "Building",
    description:
      "Specialized high-rise facade cleaning for towers 20-200+ meters using IRATA-certified rope access, BMU operations, and advanced height-work safety protocols.",
    examples: ["Residential Towers", "Service Apartments", "Luxury High-Rises", "Supertalls"],
  },
  {
    id: "glass-facades",
    title: "Glass Facades",
    icon: "Window",
    description:
      "Professional glass curtain wall cleaning for commercial buildings, retail stores, and atrium structures with streak-free deionized water systems.",
    examples: ["Curtain Walls", "Atriums", "Skylight Systems", "Glass Canopies"],
  },
  {
    id: "corporate-offices",
    title: "Corporate Offices",
    icon: "Building2",
    description:
      "Premium exterior cleaning for corporate office buildings, ensuring pristine appearance for client-facing facades and maintaining building aesthetics.",
    examples: ["Office Towers", "Corporate Campuses", "Co-working Spaces", "BPO/KPO"],
  },
  {
    id: "shopping-malls",
    title: "Shopping Malls & Retail",
    icon: "ShoppingBag",
    description:
      "Large-scale facade cleaning for shopping malls, retail outlets, and entertainment complexes during non-operational hours to avoid disruption.",
    examples: ["Shopping Malls", "Retail Outlets", "Multiplexes", "Entertainment Zones"],
  },
  {
    id: "hotels-resorts",
    title: "Hotels & Resorts",
    icon: "Hotel",
    description:
      "Luxury facade cleaning for hotels and resorts with attention to brand standards, guest privacy, and maintaining premium building aesthetics.",
    examples: ["Luxury Hotels", "Resorts", "Serviced Apartments", "Banquet Halls"],
  },
  {
    id: "hospitals",
    title: "Hospitals & Healthcare",
    icon: "HeartPulse",
    description:
      "Specialized facade cleaning for healthcare facilities with infection control protocols, clean room standards, and compliance with healthcare regulations.",
    examples: ["Hospitals", "Clinics", "Diagnostic Centers", "Medical Offices"],
  },
  {
    id: "industrial-buildings",
    title: "Industrial Buildings",
    icon: "Factory",
    description:
      "Heavy-duty facade cleaning for manufacturing plants, factories, and industrial facilities with safety compliance and minimal operational disruption.",
    examples: ["Manufacturing Plants", "Factories", "Pharma Units", "Warehouses"],
  },
  {
    id: "educational",
    title: "Educational Institutions",
    icon: "GraduationCap",
    description:
      "Campus-wide facade cleaning for schools, colleges, and universities with flexible scheduling during holidays and safety-certified staff.",
    examples: ["Schools", "Colleges", "Universities", "Coaching Centers"],
  },
  {
    id: "government",
    title: "Government & Institutional",
    icon: "Landmark",
    description:
      "Compliant facade maintenance for government buildings, banks, courts, and public institutions with documented processes and audit trails.",
    examples: ["Government Offices", "Banks", "Courts", "Public Buildings"],
  },
  {
    id: "real-estate",
    title: "Real Estate Developers",
    icon: "HardHat",
    description:
      "Pre-handover facade cleaning and maintenance for builders, developers, and contractors to ensure pristine building presentation.",
    examples: ["Builders", "Developers", "Contractors", "Project Handover"],
  },
];

export const getIndustryById = (id: string) =>
  industries.find((i) => i.id === id);