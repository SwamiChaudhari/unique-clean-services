import { business } from "./business";

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  startingPrice: number;
  popular?: boolean;
  features: string[];
  category: "commercial" | "industrial" | "specialty" | "facility-management";
  image: string;
}

export const services: Service[] = [
  // ==================== COMMERCIAL FACADE SERVICES ====================\n  {\n    id: "glass-facade-cleaning\",\n    title: "Glass Facade Cleaning\",\n    slug: \"glass-facade-cleaning\",\n    description:\n      \"Professional cleaning of glass curtain walls, structural glazing, and building facades using deionized water-fed pole systems and rope access techniques. We ensure streak-free results on high-rise glass facades while maintaining safety standards. Services include interior glass partitions, exterior curtain walls, atrium glass cleaning, and skylights.\",\n    shortDescription:\n      \"Streak-free glass curtain walls & structural glazing — water-fed pole & rope access\",\n    icon: \"Building\",\n    startingPrice: 24999,\n    popular: true,\n    features: [\n      \"Glass Curtain Wall Cleaning\",\n      \"Structural Glazing Cleaning\",\n      \"Deionized Water-Fed Pole System\",\n      \"Streak-Free Finish Guaranteed\",\n      \"Interior Glass Partitions\",\n      \"Atrium & Skylight Cleaning\",\n      \"Safety Certification Provided\",\n      \"IRATA-Certified Technicians\",\n    ],\n    category: \"commercial\",\n    image:\n      \"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80\",\n  },\n  {\n    id: \"rope-access-cleaning\",\n    title: \"Rope Access Cleaning\",\n    slug: \"rope-access-cleaning\",\n    description:\n      \"IRATA-certified rope access technicians for safe, efficient cleaning of high-rise buildings and complex facades. Our team uses advanced climbing techniques to navigate challenging architectural structures without scaffolding. Includes rappelling, fall-arrest systems, and specialized access equipment for height work.\",\n    shortDescription:\n      \"IRATA-certified rope access — safe high-rise cleaning without scaffolding\",\n    icon: \"Anchor\",\n    startingPrice: 19999,\n    features: [\n      \"IRATA Level 1, 2, 3 Technicians\",\n      \"Fall-Arrest Safety Systems\",\n      \"No Scaffolding Required\",\n      \"Complex Architecture Access\",\n      \"Height Work Specialists\",\n      \"Risk Assessment & Method Statements\",\n      \"Insurance Coverage Included\",\n      \"Faster Project Completion\",\n    ],\n    category: \"commercial\",\n    image:\n      \"https://images.unsplash.com/photo-1562654570-d0b1c2dbd5fa?w=800&q=80\",\n  },\n  {\n    id: \"high-rise-window-cleaning\",\n    title: \"High-Rise Window Cleaning\",\n    slug: \"high-rise-window-cleaning\",\n    description:\n      \"Specialized window cleaning for high-rise commercial buildings using BMU (Building Maintenance Units), cradles, and water-fed poles. We clean windows from 10ft to 500ft+ with full safety protocols. Includes frame cleaning, track cleaning, and water-streak elimination for pristine results.\",\n    shortDescription:\n      \"BMU, cradles & water-fed poles for high-rise windows — up to 500ft\",\n    icon: \"Window\",\n    startingPrice: 15999,\n    features: [\n      \"BMU (Building Maintenance Unit) Operations\",\n      \"Cradle & Gondola Systems\",\n      \"Water-Fed Pole Up to 60m\",\n      \"Frame & Track Cleaning\",\n      \"Streak-Free Guarantee\",\n      \"24/7 Operations Available\",\n      \"Safety Harness & Fall Protection\",\n      \"Professional Certification\",\n    ],\n    category: \"commercial\",\n    image:\n      \"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80\",\n  },\n  {\n    id: \"building-exterior-cleaning\",\n    title: \"Building Exterior Cleaning\",\
    slug: \"building-exterior-cleaning\",\n    description:\n      \"Comprehensive exterior building cleaning including cladding, stone, metal panels, and architectural features. We remove dirt, pollution stains, algae, and weather marks while protecting building materials. Services for mixed-use facades with multiple material types.\",\n    shortDescription:\n      \"Cladding, stone, metal panels & architectural features cleaning\",\n    icon: \"Building2\",\n    startingPrice: 29999,\n    features: [\n      \"Cladding & Composite Panel Cleaning\",\n      \"Natural Stone Facade Care\",\n      \"Metal Panel Restoration\",\n      \"Pollution Stain Removal\",\n      \"Algae & Mold Elimination\",\n      \"Material-Safe Techniques\",\n      \"Pressure Washing Expertise\",\n      \"Annual Maintenance Programs\",\n    ],\n    category: \"commercial\",\n    image:\n      \"https://images.unsplash.com/photo-1545251122-b04c7c8ce1c2?w=800&q=80\",\n  },\n  {\n    id: \"acp-panel-cleaning\",\n    title: \"ACP Panel Cleaning\",\n    slug: \"acp-panel-cleaning\",\n    description:\n      \"Specialized Aluminum Composite Panel (ACP) cleaning using pH-balanced solutions and non-abrasive techniques. We remove dust, grime, oil stains, and oxidation marks while protecting panel coatings. Includes PVDF and PE-coated ACP cleaning with warranty.\",\n    shortDescription:\n      \"ACP cleaning with pH-balanced solutions — PVDF & PE coating safe\",\n    icon: \"Square\",\n    startingPrice: 12999,\n    features: [\n      \"PVDF-Coated ACP Cleaning\",\n      \"PE-Coated Panel Care\",\n      \"Oil & Grime Removal\",\n      \"Coating-Safe Solutions\",\n      \"Oxidation Prevention\",\n      \"Edge-to-Edge Cleaning\",\n      \"Warranty Included\",\n      \"Stain Removal Expertise\",\n    ],\n    category: \"specialty\",\n    image:\n      \"https://images.unsplash.com/photo-1567633888516-2fcbfa9ee2da?w=800&q=80\",\n  },\n  {\n    id: \"pressure-washing\",\n    title: \"Pressure Washing\",\n    slug: \"pressure-washing\",\n    description:\n      \"High-pressure washing for building exteriors, parking areas, walkways, and industrial surfaces. We use adjustable pressure systems (500-3000 PSI) with eco-friendly chemicals for effective cleaning without surface damage. Includes hot water pressure washing for oil and grease removal.\",\n    shortDescription:\n      \"Adjustable pressure (500-3000 PSI) for exteriors, parking, walkways\",\n    icon: \"SprayCan\",\n    startingPrice: 8999,\n    features: [\n      \"Adjustable Pressure (500-3000 PSI)\",\n      \"Eco-Friendly Chemicals\",\n      \"Hot Water Option Available\",\n      \"Parking Area Cleaning\",\n      \"Walkway & Driveway Care\",\n      \"Industrial Surface Cleaning\",\n      \"Oil & Grease Removal\",\n      \"Surface Protection Guarantee\",\n    ],\n    category: \"specialty\",\n    image:\n      \"https://images.unsplash.com/photo-1597765827884-8b4d3c8a6b6b?w=800&q=80\",\n  },\n  {\n    id: \"silicone-glass-maintenance\",\n    title: \"Silicone & Glass Maintenance\",\n    slug: \"silicone-glass-maintenance\",\n    description:\n      \"Maintenance and replacement of silicone sealants, gaskets, and glass joints on building facades. We identify leaks, deterioration, and weather damage while providing preventive maintenance to extend facade life. Includes caulking, resealing, and weatherproofing services.\",\n    shortDescription:\n      \"Sealant replacement, resealing, caulking, weatherproofing\",\n    icon: \"Wrench\",\n    startingPrice: 0, // Custom pricing\n    features: [\n      \"Sealant Inspection & Testing\",\n      \"Silicone Caulking & Replacement\",\n      \"Gasket & Joint Maintenance\",\n      \"Leak Detection & Repair\",\n      \"Weatherproofing Solutions\",\n      \"Preventive Maintenance\",\n      \"Structural Silicone Care\",\n      \"Waterproofing Warranty\",\n    ],\n    category: \"specialty\",\n    image:\n      \"https://images.unsplash.com/photo-1598970452089-99209f2e2dbe?w=800&q=80\",\n  },\n  {\n    id: \"post-construction-facade\",\
    title: \"Post-Construction Facade Cleaning\",\
    slug: \"post-construction-facade-cleaning\",\n    description:\n      \"Specialized cleaning after building construction or renovation. We remove concrete splatter, paint overspray, dust, adhesives, and construction residue from all facade surfaces. Includes final cleanup with protective coating application and handover-ready finish.\",\n    shortDescription:\n      \"Concrete splatter, paint overspray, dust removal — handover finish\",\n    icon: \"HardHat\",\n    startingPrice: 34999,\n    features: [\n      \"Concrete Splatter Removal\",\n      \"Paint Overspray Cleanup\",\n      \"Heavy Dust Elimination\",\n      \"Adhesive & Sticker Removal\",\n      \"Protective Coating Application\",\n      \"Handover-Ready Finish\",\n      \"Multi-Trade Coordination\",\n      \"Final Quality Inspection\",\n    ],\n    category: \"facility-management\",\
    image:\n      \"https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80\",\n  },\n"];

export interface ServiceCategoryMeta {
  id: Service["category"];
  label: string;
  description: string;
  icon: string;
}

export const serviceCategories: ServiceCategoryMeta[] = [
  {
    id: "commercial",
    label: "Commercial Facade",
    description: "Glass facades, high-rise windows, and commercial building exteriors.",
    icon: "Building",
  },
  {
    id: "industrial",
    label: "Industrial Cleaning",
    description: "Factories, warehouses, and heavy-duty industrial facade cleaning.",
    icon: "Factory",
  },
  {
    id: "specialty",
    label: "Specialty Services",
    description: "ACP panels, pressure washing, silicone maintenance & niche solutions.",
    icon: "Wrench",
  },
  {
    id: "facility-management",
    label: "Maintenance Contracts",
    description: "AMC, post-construction, and ongoing facade care programs.",
    icon: "Calendar",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export { formatPrice } from "./pricing";