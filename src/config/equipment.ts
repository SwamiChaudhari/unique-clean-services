export interface EquipmentItem {
  id: string;
  name: string;
  icon: string;
  category: "Machines" | "Sanitation" | "Access" | "Tools";
  description: string;
}

// Professional equipment inventory — rendered on homepage + /commercial.
export const equipment: EquipmentItem[] = [
  {
    id: "ride-on-scrubber",
    name: "Ride-On Auto Scrubber",
    icon: "Truck",
    category: "Machines",
    description:
      "High-coverage floor cleaning for warehouses, factories, and large commercial spaces — up to 5,000 sq.ft/hr.",
  },
  {
    id: "walk-behind-scrubber",
    name: "Walk-Behind Scrubber-Drier",
    icon: "SprayCan",
    category: "Machines",
    description:
      "Dual-action scrub and dry for offices, retail, and lobbies with minimal downtime.",
  },
  {
    id: "hepa-vacuum",
    name: "HEPA Filter Vacuum",
    icon: "Wind",
    category: "Tools",
    description:
      "Captures 99.97% of fine dust and allergens — essential for post-construction and healthcare sites.",
  },
  {
    id: "water-fed-pole",
    name: "Water-Fed Pole System",
    icon: "Droplets",
    category: "Access",
    description:
      "Deionised-water pole cleaning for streak-free glass up to 20 metres without ladders.",
  },
  {
    id: "ulv-fogger",
    name: "ULV Cold Fogger",
    icon: "CloudFog",
    category: "Sanitation",
    description:
      "Ultra-low-volume fogging for rapid disinfection of large areas and high-touch surfaces.",
  },
  {
    id: "electrostatic",
    name: "Electrostatic Sprayer",
    icon: "SprayCan",
    category: "Sanitation",
    description:
      "Charged-particle disinfection that wraps surfaces evenly for complete coverage.",
  },
  {
    id: "steam-cleaner",
    name: "Commercial Steam Cleaner",
    icon: "Flame",
    category: "Sanitation",
    description:
      "Chemical-free heat sanitation for kitchens, bathrooms, and upholstery.",
  },
  {
    id: "single-disc",
    name: "Single-Disc Polisher",
    icon: "Disc",
    category: "Machines",
    description:
      "Diamond polishing and crystallization for marble, granite, and stone flooring.",
  },
  {
    id: "hp-jet",
    name: "High-Pressure Jet Washer",
    icon: "SprayCan",
    category: "Tools",
    description:
      "Powerful exterior, facade, and tank cleaning with adjustable pressure settings.",
  },
  {
    id: "uvc",
    name: "UV-C Surface Sanitizer",
    icon: "Sun",
    category: "Sanitation",
    description:
      "Germicidal UV-C treatment for hospitals, clinics, and sensitised environments.",
  },
  {
    id: "rope-access",
    name: "Rope Access & BMU",
    icon: "Anchor",
    category: "Access",
    description:
      "IRATA-certified rope access, cradles, and BMU operation for high-rise facade work.",
  },
  {
    id: "eco-chemicals",
    name: "Eco-Friendly Chemicals",
    icon: "Leaf",
    category: "Sanitation",
    description:
      "Green-seal approved, biodegradable, non-toxic solutions safe for children and pets.",
  },
];

export const equipmentCategories = [
  "Machines",
  "Sanitation",
  "Access",
  "Tools",
] as const;
