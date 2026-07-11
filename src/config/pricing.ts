import { business } from "./business";

export interface Package {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  features: string[];
  popular?: boolean;
  badge?: string;
  category: "regular" | "deep" | "commercial" | "move";
}

export const packages: Package[] = [
  {
    id: "glass-facade-basic",
    name: "Glass Facade Cleaning - Basic",
    description: "Exterior glass curtain wall cleaning up to 1000 sq.ft",
    price: 24999,
    originalPrice: 29999,
    features: [
      "Glass Curtain Wall Cleaning (Up to 1000 sq.ft)",
      "Deionized Water-Fed System",
      "Streak-Free Guarantee",
      "Safety Certification",
      "Professional Team",
    ],
    category: "commercial",
  },
  {
    id: "glass-facade-standard",
    name: "Glass Facade Cleaning - Standard",
    description: "Exterior glass curtain wall cleaning up to 5000 sq.ft",
    price: 89999,
    originalPrice: 119999,
    popular: true,
    features: [
      "Glass Curtain Wall Cleaning (Up to 5000 sq.ft)",
      "Interior Glass Partitions",
      "Frame & Track Cleaning",
      "Deionized Water System",
      "Safety Certification",
      "IRATA-Certified Technicians",
    ],
    category: "commercial",
  },
  {
    id: "high-rise-comprehensive",
    name: "High-Rise Facade Package",
    description: "Complete facade cleaning for buildings 50-200 ft",
    price: 149999,
    originalPrice: 199999,
    badge: "Most Popular",
    features: [
      "Glass Curtain Walls Cleaning",
      "Cladding & Panel Cleaning",
      "ACP Panel Maintenance",
      "Rope Access or BMU Methods",
      "Safety Protocol Included",
      "Multi-Trade Coordination",
      "Handover Documentation",
    ],
    category: "commercial",
  },
  {
    id: "high-rise-premium",
    name: "High-Rise Premium Package",
    description: "Complete facade cleaning for buildings 200+ ft",
    price: 299999,
    originalPrice: 399999,
    features: [
      "Glass Facades (Full Height)",
      "All Exterior Surfaces",
      "ACP, Stone, Metal Cleaning",
      "IRATA Rope Access Team",
      "BMU/Cradle Operations",
      "Safety Officer on Site",
      "Comprehensive Report",
      "Annual Maintenance Discount",
    ],
    category: "commercial",
  },
  {
    id: "amc-quarterly",
    name: "AMC - Quarterly",
    description: "Facades cleaning every 3 months",
    price: 79999,
    originalPrice: 99999,
    badge: "Best Value",
    features: [
      "4 Scheduled Cleanings/Year",
      "Priority Scheduling",
      "Dedicated Team",
      "Safety Inspections",
      "Monthly Reports",
      "Emergency Support",
      "20% Savings vs One-time",
    ],
    category: "commercial",
  },
  {
    id: "amc-monthly",
    name: "AMC - Monthly",
    description: "Monthly facade maintenance program",
    price: 59999,
    originalPrice: 74999,
    features: [
      "12 Cleanings/Year",
      "Dedicated Account Manager",
      "Preventive Maintenance",
      "Silicone Joint Inspection",
      "Quarterly Deep Cleaning",
      "Priority Response",
      "Detailed Analytics",
    ],
    category: "commercial",
  },
  {
    id: "post-construction",
    name: "Post-Construction Cleaning",
    description: "New building handover cleaning",
    price: 34999,
    originalPrice: 44999,
    features: [
      "Concrete Splatter Removal",
      "Paint Overspray Cleanup",
      "Dust & Debris Elimination",
      "Glass Polishing",
      "Sealant Cleaning",
      "Handover-Ready Finish",
      "Quality Inspection",
    ],
    category: "move",
  },
  {
    id: "pressure-washing",
    name: "Pressure Washing",
    description: "Exterior hard surface cleaning",
    price: 8999,
    originalPrice: 12999,
    features: [
      "Concrete Facade Cleaning",
      "Parking Area Wash",
      "Walkway Cleaning",
      "Eco-Friendly Chemicals",
      "Oil/Grease Removal",
      "Surface Protection",
    ],
    category: "regular",
  },
  {
    id: "acp-specialized",
    name: "ACP Panel Cleaning",
    description: "Aluminum composite panel deep cleaning",
    price: 12999,
    originalPrice: 17999,
    features: [
      "PVDF-Coated ACP Care",
      "Oil & Grime Removal",
      "Coating-Safe Solutions",
      "Edge-to-Edge Cleaning",
      "Warranty Included",
      "Stain Prevention",
    ],
    category: "regular",
  },
  {
    id: "silicone-maintenance",
    name: "Silicone & Maintenance",
    description: "Joint inspection and sealant maintenance",
    price: 0,
    features: [
      "Sealant Inspection",
      "Deterioration Detection",
      "Leak Point Identification",
      "Sealant Replacement",
      "Weatherproofing",
      "Preventive Care",
    ],
    category: "commercial",
  },
];

export function formatPrice(amount: number): string {
  if (amount === 0) return "Custom Quote";
  return `${business.currencySymbol}${amount.toLocaleString("en-IN")}`;
}

export function getPopularPackage(): Package | undefined {
  return packages.find((p) => p.popular);
}

export function getPackagesByCategory(category: string): Package[] {
  return packages.filter((p) => p.category === category);
}