export interface CommercialPackage {
  id: string;
  name: string;
  audience: string;
  priceLabel: string;
  popular?: boolean;
  features: string[];
  icon: string;
}

export interface ContractType {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// AMC / contract tiers for businesses — rendered on /commercial.
export const commercialPackages: CommercialPackage[] = [
  {
    id: "essential",
    name: "Essential Housekeeping",
    audience: "Small offices & retail",
    priceLabel: "From ₹14,999 / month",
    features: [
      "Daily housekeeping & dusting",
      "Washroom & pantry hygiene",
      "Floor mopping & vacuuming",
      "Trash management",
      "Weekly supervisor audit",
    ],
    icon: "Sparkles",
  },
  {
    id: "professional",
    name: "Professional FM",
    audience: "Offices, clinics, showrooms",
    priceLabel: "From ₹34,999 / month",
    popular: true,
    features: [
      "Everything in Essential",
      "Deep cleaning (monthly)",
      "Glass & facade (quarterly)",
      "Dedicated supervisor",
      "Basic reporting & SLA",
      "Sanitization on demand",
    ],
    icon: "Building2",
  },
  {
    id: "enterprise",
    name: "Enterprise IFM",
    audience: "Campuses, hospitals, societies",
    priceLabel: "Custom Quote",
    features: [
      "Integrated soft services",
      "CAFM ticketing & reports",
      "SLA-driven delivery",
      "Dedicated facility manager",
      "Pest & horticulture coordination",
      "24/7 emergency response",
    ],
    icon: "LayoutGrid",
  },
];

export const contractTypes: ContractType[] = [
  {
    id: "one-time",
    title: "One-Time",
    description: "Project-based cleaning for moves, events, or specific requirements.",
    icon: "CalendarCheck",
  },
  {
    id: "recurring",
    title: "Recurring",
    description: "Scheduled daily, weekly, or monthly cleaning on a retainer.",
    icon: "Repeat",
  },
  {
    id: "amc",
    title: "AMC",
    description: "Annual maintenance contract with priority scheduling and fixed pricing.",
    icon: "FileText",
  },
  {
    id: "project",
    title: "Project-Based",
    description: "Post-construction, facade, or large-scale industrial engagements.",
    icon: "HardHat",
  },
];

export const getPackageById = (id: string) =>
  commercialPackages.find((p) => p.id === id);
