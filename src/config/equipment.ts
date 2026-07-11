export interface EquipmentItem {
  id: string;
  name: string;
  icon: string;
  category: "Machines" | "Sanitation" | "Access" | "Tools";
  description: string;
}

// Professional facade cleaning equipment — rendered on homepage + /commercial.
export const equipment: EquipmentItem[] = [
  {
    id: "bmw-unit",
    name: "Building Maintenance Unit (BMU)",
    icon: "Truck",
    category: "Machines",
    description:
      "Motorised cradle systems for high-rise buildings with 100-500ft reach. Provides safe, efficient access for facade cleaning.",
  },
  {
    id: "cradle-system",
    name: "Suspended Cradle & Gondola",
    icon: "Anchor",
    category: "Machines",
    description:
      "Counterbalanced cradle systems for mid-rise buildings (20-100ft). Quick setup with full safety harness integration.",
  },
  {
    id: "water-fed-pole",
    name: "Water-Fed Pole System",
    icon: "Droplets",
    category: "Access",
    description:
      "Telescopic poles up to 60m with deionized water for streak-free glass cleaning. No chemicals, no spots, no streaks.",
  },
  {
    id: "rope-access-kit",
    name: "IRATA Rope Access Kit",
    icon: "Anchor",
    category: "Access",
    description:
      "Full IRATA-compliant rope access equipment including descenders, ascenders, harnesses, and fall-arrest systems.",
  },
  {
    id: "hp-washer",
    name: "High-Pressure Washer",
    icon: "SprayCan",
    category: "Tools",
    description:
      "Industrial pressure washers (500-3000 PSI) for concrete, steel, and cladding facades. Hot water option for grease removal.",
  },
  {
    id: "steam-cleaner",
    name: "Facade Steam Cleaner",
    icon: "Flame",
    category: "Sanitation",
    description:
      "Low-pressure steam cleaning for delicate facades, removing organic matter without chemical use.",
  },
  {
    id: "scissor-lift",
    name: "Scissor Lift & Aerial Platform",
    icon: "Scissors",
    category: "Machines",
    description:
      "Mobile elevated work platforms for buildings 10-50ft with safe personnel transport and tools storage.",
  },
  {
    id: "elevated-platform",
    name: "Boom Lift & Cherry Picker",
    icon: "Armchair",
    category: "Machines",
    description:
      "Articulating boom lifts for complex facade geometries and hard-to-reach architectural features.",
  },
  {
    id: "soft-wash",
    name: "Soft Wash System",
    icon: "SprayCan",
    category: "Tools",
    description:
      "Low-pressure chemical cleaning system for sensitive facades, roof tiles, and painted surfaces.",
  },
  {
    id: "deionized-tank",
    name: "Deionized Water Tank",
    icon: "Droplets",
    category: "Tools",
    description:
      "On-site deionized water generation for pure water cleaning without mineral streaks.",
  },
  {
    id: "inspection-drone",
    name: "Inspection Drone",
    icon: "Drone",
    category: "Access",
    description:
      "High-resolution facade inspection for damage assessment, leak detection, and cleaning planning.",
  },
  {
    id: "safety-harness",
    name: "Full Body Safety Harness",
    icon: "ShieldCheck",
    category: "Access",
    description:
      "EN-certified fall protection harness with shock absorption, used with all height work operations.",
  },
  {
    id: "microfiber-kit",
    name: "Specialty Microfiber Kit",
    icon: "Brush",
    category: "Tools",
    description:
      "Color-coded microfiber cloths for different facade materials, ensuring no cross-contamination.",
  },
  {
    id: "ppe-kit",
    name: "PPE Safety Kit",
    icon: "ShieldCheck",
    category: "Access",
    description:
      "Hard hats, safety goggles, gloves, and protective gear for all facade cleaning operations.",
  },
];

export const equipmentCategories = [
  "Machines",
  "Sanitation",
  "Access",
  "Tools",
] as const;