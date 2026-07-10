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
  category: "residential" | "commercial" | "industrial" | "specialty" | "facility-management";
  image: string;
}

export const services: Service[] = [
  // ==================== RESIDENTIAL SERVICES ====================
  {
    id: "home-cleaning",
    title: "Home Cleaning",
    slug: "home-cleaning",
    description:
      "Complete home cleaning service including dusting, vacuuming, mopping, kitchen cleaning, bathroom cleaning, and surface sanitizing. Our trained professionals use eco-friendly products and advanced equipment to ensure every corner of your home is spotless. Perfect for maintaining a clean and healthy home environment for your family. Same-day service available across all Nashik areas.",
    shortDescription:
      "Complete home cleaning — dusting, vacuuming, mopping, kitchen & bathroom",
    icon: "Home",
    startingPrice: 1499,
    features: [
      "Dusting & Vacuuming All Rooms",
      "Kitchen Deep Clean",
      "Bathroom Sanitization",
      "Floor Mopping",
      "Surface Disinfection",
      "Trash Removal",
    ],
    category: "residential",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
  },
  {
    id: "deep-cleaning",
    title: "Deep Cleaning",
    slug: "deep-cleaning",
    description:
      "Intensive deep cleaning that covers every corner of your home. Our team tackles inside appliances, baseboard scrubbing, window cleaning, carpet shampooing, and detailed sanitization of all surfaces. Ideal if you haven't had a professional clean in 3+ months, or before hosting guests. We use hospital-grade disinfectants safe for kids and pets.",
    shortDescription:
      "Intensive cleaning — inside appliances, baseboards, windows, carpets",
    icon: "Sparkles",
    startingPrice: 2499,
    popular: true,
    features: [
      "Inside Appliance Cleaning",
      "Baseboard Scrubbing",
      "Window Cleaning Inside",
      "Carpet Deep Clean",
      "Detailed Surface Sanitization",
      "Corner & Crevice Cleaning",
      "Exhaust Fan Cleaning",
      "Light Fixture Cleaning",
    ],
    category: "residential",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80",
  },
  {
    id: "kitchen-cleaning",
    title: "Kitchen Cleaning",
    slug: "kitchen-cleaning",
    description:
      "Professional kitchen cleaning including chimney deep cleaning, appliance interior scrubbing, countertop sanitization, tile and grout cleaning, and stubborn grease removal. Our team uses food-safe disinfectants and specialized tools to make your kitchen hygienic and sparkling. Recommended monthly for home kitchens and weekly for commercial ones.",
    shortDescription:
      "Chimney, appliances, countertops, tile & grease removal",
    icon: "CookingPot",
    startingPrice: 1499,
    features: [
      "Chimney Deep Clean",
      "Refrigerator Cleaning",
      "Microwave & Oven Cleaning",
      "Countertop Sanitization",
      "Tile & Grout Cleaning",
      "Grease & Oil Removal",
      "Cabinet Exterior Cleaning",
      "Sink & Faucet Polishing",
    ],
    category: "residential",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    id: "bathroom-cleaning",
    title: "Bathroom Cleaning",
    slug: "bathroom-cleaning",
    description:
      "Expert bathroom cleaning including tile scrubbing, fixture polishing, toilet deep clean, and complete sanitization. We remove stubborn stains, limescale buildup, soap scum, and kill 99.9% of germs using hospital-grade disinfectants. Your bathroom will look and smell fresh. Recommended weekly for commercial bathrooms and monthly for homes.",
    shortDescription:
      "Tile scrubbing, fixture polishing, toilet deep clean, sanitization",
    icon: "Bath",
    startingPrice: 999,
    features: [
      "Tile & Grout Scrubbing",
      "Toilet Deep Clean",
      "Fixture Polishing",
      "Mirror & Glass Cleaning",
      "Exhaust Fan Cleaning",
      "Floor & Wall Sanitization",
      "Soap Scum Removal",
      "Drain Cleaning",
    ],
    category: "residential",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
  },
  {
    id: "sofa-cleaning",
    title: "Sofa & Upholstery Cleaning",
    slug: "sofa-cleaning",
    description:
      "Professional sofa and upholstery cleaning using advanced hot-water extraction and dry cleaning equipment. We remove deep-set stains, dust mites, pet allergens, and stubborn odors to extend the life of your furniture by years. Suitable for all fabric types including cotton, silk, leather, and microfiber. Recommended every 6 months to keep your furniture hygienic and looking new.",
    shortDescription:
      "Stain removal, allergen elimination, fabric-safe deep clean",
    icon: "Sofa",
    startingPrice: 499,
    features: [
      "Deep Fabric Cleaning",
      "Stain Removal",
      "Allergen Elimination",
      "Odor Removal",
      "Fabric Protection",
      "Quick Drying",
      "Leather Conditioning (if applicable)",
      "Cushion Fluffing",
    ],
    category: "residential",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  },
  {
    id: "carpet-cleaning",
    title: "Carpet & Rug Cleaning",
    slug: "carpet-cleaning",
    description:
      "Professional carpet and rug cleaning using hot-water extraction (steam cleaning) and dry cleaning methods. We remove deep-seated dirt, stains, allergens, and odors from all types of carpets and rugs including Persian, Oriental, wool, synthetic, and commercial carpet tiles. Our eco-friendly solutions are safe for children and pets.",
    shortDescription:
      "Steam & dry cleaning for all carpet types, stain & allergen removal",
    icon: "Sparkles",
    startingPrice: 799,
    features: [
      "Hot Water Extraction (Steam Cleaning)",
      "Dry Cleaning for Delicate Rugs",
      "Stain & Spot Treatment",
      "Pet Odor & Stain Removal",
      "Allergen & Dust Mite Elimination",
      "Carpet Protection Treatment",
      "Fast Drying Technology",
      "Commercial Carpet Tile Cleaning",
    ],
    category: "residential",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
  },
  {
    id: "mattress-cleaning",
    title: "Mattress Cleaning",
    slug: "mattress-cleaning",
    description:
      "Deep mattress cleaning and sanitization service using UV-C light treatment and hot-water extraction. We eliminate dust mites, bed bugs, sweat stains, urine stains, and odors. Our medical-grade sanitization kills 99.9% of bacteria and allergens, ensuring a healthier sleep environment. Recommended every 6 months.",
    shortDescription:
      "UV sanitization, dust mite removal, stain & odor elimination",
    icon: "Bed",
    startingPrice: 699,
    features: [
      "UV-C Light Sanitization",
      "Hot Water Extraction Cleaning",
      "Dust Mite & Allergen Elimination",
      "Bed Bug Treatment",
      "Sweat & Urine Stain Removal",
      "Odor Neutralization",
      "Anti-Allergen Treatment",
      "Quick Dry (2-3 Hours)",
    ],
    category: "residential",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
  },
  {
    id: "glass-cleaning-residential",
    title: "Glass & Window Cleaning (Residential)",
    slug: "glass-cleaning-residential",
    description:
      "Professional window and glass cleaning for homes, apartments, and villas. We clean interior and exterior glass, frames, tracks, and sills using deionized water-fed pole systems for streak-free results. Safe for high windows up to 4 stories. Includes balcony glass, shower enclosures, mirrors, and glass partitions.",
    shortDescription:
      "Interior & exterior windows, frames, tracks — streak-free finish",
    icon: "Window",
    startingPrice: 599,
    features: [
      "Interior & Exterior Glass Cleaning",
      "Frame, Track & Sill Cleaning",
      "Deionized Water-Fed Pole System",
      "Balcony & Railing Glass",
      "Shower Enclosure Cleaning",
      "Mirror & Glass Partition Cleaning",
      "Hard Water Stain Removal",
      "Up to 4 Stories (Ground + 3)",
    ],
    category: "residential",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
  },
  {
    id: "water-tank-cleaning",
    title: "Water Tank Cleaning",
    slug: "water-tank-cleaning",
    description:
      "Complete overhead and underground water tank cleaning and disinfection as per municipal guidelines. Our certified process includes mechanical scrubbing, high-pressure jet cleaning, vacuum sludge removal, and chlorination disinfection. We provide cleaning certificate and water quality test report. Mandatory for housing societies and commercial buildings.",
    shortDescription:
      "Overhead/underground tanks, mechanical scrub, chlorination, certificate",
    icon: "Droplets",
    startingPrice: 1999,
    features: [
      "Mechanical Scrubbing & High-Pressure Jet",
      "Vacuum Sludge Removal",
      "Chlorination Disinfection",
      "Municipal Guideline Compliance",
      "Cleaning Certificate Provided",
      "Water Quality Test Report",
      "Overhead & Underground Tanks",
      "Annual AMC Available",
    ],
    category: "residential",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
  },
  {
    id: "marble-polishing",
    title: "Marble Polishing & Floor Restoration",
    slug: "marble-polishing",
    description:
      "Professional marble, granite, and natural stone polishing using diamond abrasives and crystallization. We restore dull, scratched, or stained stone surfaces to mirror-like finish. Services include Italian marble, Indian marble, granite, Kota stone, and terrazzo. Includes stain removal, crack filling, and protective sealing.",
    shortDescription:
      "Diamond polishing, crystallization, stain removal, sealing for all stone",
    icon: "Diamond",
    startingPrice: 2999,
    features: [
      "Diamond Abrasive Polishing (Multi-Stage)",
      "Crystallization for Mirror Finish",
      "Stain & Etch Mark Removal",
      "Crack & Chip Repair",
      "Protective Penetrating Sealer",
      "Italian & Indian Marble",
      "Granite, Kota, Terrazzo",
      "Maintenance Program Available",
    ],
    category: "specialty",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
  },
  {
    id: "floor-scrubbing",
    title: "Floor Scrubbing & Buffing",
    slug: "floor-scrubbing",
    description:
      "Mechanical floor scrubbing and buffing for hard floors including vitrified tiles, ceramic, marble, granite, epoxy, and concrete. Using ride-on and walk-behind auto-scrubbers with appropriate pads and chemicals. Removes ingrained dirt, scuff marks, and restores shine. Ideal for large areas in homes, offices, and commercial spaces.",
    shortDescription:
      "Auto-scrubber machines for tiles, epoxy, concrete — large area specialist",
    icon: "RotateCcw",
    startingPrice: 1499,
    features: [
      "Ride-On & Walk-Behind Auto-Scrubbers",
      "Vitrified, Ceramic, Marble, Granite",
      "Epoxy & Concrete Floor Cleaning",
      "Scuff Mark & Ingrained Dirt Removal",
      "High-Gloss Buffing Finish",
      "Eco-Friendly Cleaning Solutions",
      "Large Area Specialists",
      "Post-Construction Floor Cleaning",
    ],
    category: "specialty",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
  },

  // ==================== COMMERCIAL SERVICES ====================
  {
    id: "office-cleaning",
    title: "Office Cleaning",
    slug: "office-cleaning",
    description:
      "Professional office cleaning for businesses of all sizes across Nashik and Pune. We cover individual workstations, meeting rooms, common area sanitization, washroom deep cleaning, and pantry maintenance. Flexible scheduling available including after-hours and weekends to minimize disruption. Essential for maintaining employee health and workplace professionalism.",
    shortDescription:
      "Workstations, common areas, washrooms, pantry — flexible scheduling",
    icon: "Building2",
    startingPrice: 2999,
    features: [
      "Workstation Cleaning",
      "Common Area Sanitization",
      "Washroom Deep Clean",
      "Pantry & Kitchen Cleaning",
      "Floor Mopping & Vacuuming",
      "Glass Partition Cleaning",
      "Keyboard & Equipment Dusting",
      "Trash Management",
    ],
    category: "commercial",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    id: "commercial-cleaning",
    title: "Commercial Space Cleaning",
    slug: "commercial-cleaning",
    description:
      "Comprehensive commercial cleaning for retail stores, restaurants, warehouses, medical clinics, and corporate buildings. Customized packages based on your business needs with dedicated account management. Includes high-traffic area maintenance, floor care, washroom hygiene, and waste management.",
    shortDescription:
      "Retail, restaurants, warehouses, clinics — customized packages",
    icon: "Store",
    startingPrice: 4999,
    features: [
      "Large Space Cleaning",
      "High-Traffic Area Maintenance",
      "Floor Polishing & Buffing",
      "Window Cleaning (Interior)",
      "Restroom Sanitization",
      "Break Room Cleaning",
      "Waste Management",
      "Flexible Scheduling",
    ],
    category: "commercial",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
  },
  {
    id: "retail-cleaning",
    title: "Retail Store & Showroom Cleaning",
    slug: "retail-cleaning",
    description:
      "Specialized cleaning for retail stores, showrooms, and shopping outlets. We focus on customer-facing areas — entrance glass, display cases, fitting rooms, checkout counters, and high-gloss floor maintenance. Available before opening hours or after closing. Includes fitting room sanitization, mirror polishing, and display dusting.",
    shortDescription:
      "Display cases, fitting rooms, entrance glass, high-gloss floors — before/after hours",
    icon: "Store",
    startingPrice: 3499,
    features: [
      "Entrance & Facade Glass Cleaning",
      "Display Case & Counter Dusting",
      "Fitting Room Deep Sanitization",
      "Checkout Counter Cleaning",
      "High-Gloss Floor Maintenance",
      "Mirror & Glass Polishing",
      "Stock Room Organization",
      "Pre-Opening / Post-Closing Service",
    ],
    category: "commercial",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    id: "restaurant-cleaning",
    title: "Restaurant & Commercial Kitchen Deep Cleaning",
    slug: "restaurant-cleaning",
    description:
      "Deep cleaning for restaurants, commercial kitchens, canteens, and food processing areas. FSSAI-compliant cleaning including exhaust hood/duct cleaning, grease trap cleaning, equipment degreasing, cold room cleaning, and drain maintenance. We use food-safe, non-toxic chemicals. Certification provided for health inspections.",
    shortDescription:
      "Exhaust hood, grease traps, equipment degreasing, FSSAI compliant",
    icon: "CookingPot",
    startingPrice: 4999,
    features: [
      "Exhaust Hood & Duct Cleaning",
      "Grease Trap Cleaning & Maintenance",
      "Commercial Equipment Degreasing",
      "Cold Room & Freezer Cleaning",
      "Drain & Floor Drain Maintenance",
      "FSSAI-Compliant Documentation",
      "Food-Safe Non-Toxic Chemicals",
      "Night/Weekend Service Available",
    ],
    category: "commercial",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  },
  {
    id: "gym-cleaning",
    title: "Gym & Fitness Center Cleaning",
    slug: "gym-cleaning",
    description:
      "Specialized cleaning for gyms, fitness centers, yoga studios, and sports facilities. High-touch equipment sanitization, rubber flooring deep clean, locker room & shower sanitization, mat cleaning, and air vent dusting. We use hospital-grade disinfectants effective against MRSA, fungi, and viruses. Flexible early morning or late night schedules.",
    shortDescription:
      "Equipment sanitization, rubber flooring, locker rooms, hospital-grade disinfectants",
    icon: "Dumbbell",
    startingPrice: 2999,
    features: [
      "Equipment & Machine Sanitization",
      "Rubber Flooring Deep Clean",
      "Locker Room & Shower Sanitization",
      "Yoga Mat & Exercise Mat Cleaning",
      "Air Vent & HVAC Grille Dusting",
      "Hospital-Grade Disinfectants",
      "Anti-Fungal & Anti-Viral Treatment",
      "Early Morning / Late Night Service",
    ],
    category: "commercial",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
  },

  // ==================== INDUSTRIAL SERVICES ====================
  {
    id: "industrial-cleaning",
    title: "Industrial & Factory Cleaning",
    slug: "industrial-cleaning",
    description:
      "Heavy-duty industrial cleaning for manufacturing plants, factories, and production facilities. Services include machinery degreasing, production line cleaning, oil spill cleanup, silo/tank cleaning, conveyor belt cleaning, and high-bay dusting. We follow industrial safety protocols, provide MSDS for chemicals, and work around production schedules.",
    shortDescription:
      "Machinery degreasing, production lines, oil spills, high-bay — safety compliant",
    icon: "Factory",
    startingPrice: 9999,
    features: [
      "Machinery & Equipment Degreasing",
      "Production Line Cleaning",
      "Oil & Chemical Spill Cleanup",
      "Silo & Tank Cleaning",
      "Conveyor Belt Cleaning",
      "High-Bay & Structural Dusting",
      "Industrial Vacuum Systems",
      "Safety Protocols & MSDS Provided",
    ],
    category: "industrial",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    id: "warehouse-cleaning",
    title: "Warehouse & Logistics Center Cleaning",
    slug: "warehouse-cleaning",
    description:
      "Large-scale warehouse and logistics center cleaning including racking dusting, floor scrubbing (epoxy/concrete), loading bay cleaning, high-level dusting, pallet rack cleaning, and aisle maintenance. Ride-on sweepers and scrubbers for efficient coverage. Flexible scheduling to avoid operational disruption. Includes pest control coordination.",
    shortDescription:
      "Racking, epoxy floors, loading bays, high-level dusting — ride-on machines",
    icon: "Package",
    startingPrice: 7999,
    features: [
      "Racking & Shelving Dusting",
      "Eco-Friendly Chemicals",
      "Concrete/Epoxy Floor Scrubbing",
      "Loading Bay & Dock Cleaning",
      "High-Level Structural Dusting",
      "Pallet Rack Cleaning",
      "Ride-On Sweepers & Scrubbers",
      "Pest Control Coordination",
    ],
    category: "industrial",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    id: "high-rise-facade-cleaning",
    title: "High-Rise Facade & Glass Cleaning",
    slug: "high-rise-facade-cleaning",
    description:
      "Professional facade and glass cleaning for high-rise buildings using rope access (IRATA-certified), BMU (Building Maintenance Units), cradles, and water-fed poles. Services for glass curtain walls, aluminum composite panels, stone facades, and structural glass. Includes inspection, risk assessment, method statements, and safety certification. Inspired by international facade maintenance standards.",
    shortDescription:
      "Rope access, BMU, cradles for glass curtain walls, ACP, stone facades",
    icon: "Building",
    startingPrice: 14999,
    popular: true,
    features: [
      "IRATA-Certified Rope Access Technicians",
      "BMU (Building Maintenance Unit) Operations",
      "Cradle & Gondola Systems",
      "Water-Fed Pole (Up to 20m)",
      "Glass Curtain Wall Cleaning",
      "ACP & Stone Facade Cleaning",
      "Risk Assessment & Method Statements",
      "Safety Certification & Insurance",
    ],
    category: "industrial",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: "post-construction-cleaning",
    title: "Post-Construction & Renovation Cleaning",
    slug: "post-construction-cleaning",
    description:
      "Comprehensive post-construction cleaning for newly built or renovated properties. Includes debris removal, dust elimination from all surfaces, paint splatter removal, window cleaning, floor polishing, fixture polishing, and final touch-up. We work with builders, developers, and contractors for handover-ready finish. Phased cleaning available during construction.",
    shortDescription:
      "Debris removal, dust elimination, paint splatter, handover-ready finish",
    icon: "HardHat",
    startingPrice: 4999,
    features: [
      "Construction Debris Removal",
      "Fine Dust Elimination (HEPA Vacuum)",
      "Paint & Plaster Splatter Removal",
      "Window & Frame Deep Clean",
      "Floor Polishing & Protection",
      "Fixture & Hardware Polishing",
      "Sanitization of All Surfaces",
      "Phased Cleaning During Construction",
    ],
    category: "specialty",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },

  // ==================== FACILITY MANAGEMENT SERVICES ====================
  {
    id: "facility-management",
    title: "Integrated Facility Management (IFM)",
    slug: "facility-management",
    description:
      "End-to-end facility management services including housekeeping, security, pest control, horticulture, waste management, and front desk operations. Single-point accountability with dedicated facility manager, SLA-driven service delivery, CAFM software for ticketing and reporting. Customizable for offices, IT parks, hospitals, malls, and residential complexes.",
    shortDescription:
      "Housekeeping, security, pest control, horticulture — single-point accountability",
    icon: "Building2",
    startingPrice: 24999,
    features: [
      "Dedicated Facility Manager",
      "CAFM Software (Ticketing & Reports)",
      "SLA-Driven Service Delivery",
      "Integrated Housekeeping & Soft Services",
      "Security & Access Control Coordination",
      "Pest Control & Horticulture Management",
      "Waste Management & Recycling",
      "Monthly Performance Reports",
    ],
    category: "facility-management",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    id: "amc-cleaning",
    title: "Annual Maintenance Contracts (AMC) - Cleaning",
    slug: "amc-cleaning",
    description:
      "Annual cleaning maintenance contracts for offices, societies, commercial buildings, and industrial facilities. Fixed monthly pricing with priority scheduling, dedicated team, quarterly deep cleaning, and comprehensive reporting. Includes daily/weekly/monthly task schedules, supervisor audits, and 24/7 emergency response. Discounts for multi-year commitments.",
    shortDescription:
      "Fixed monthly pricing, priority scheduling, quarterly deep clean, 24/7 emergency",
    icon: "FileText",
    startingPrice: 14999,
    features: [
      "Fixed Monthly Pricing",
      "Priority Scheduling & Dedicated Team",
      "Quarterly Deep Cleaning Included",
      "Daily/Weekly/Monthly Task Schedules",
      "Supervisor Audits & Checklists",
      "24/7 Emergency Response",
      "Comprehensive Monthly Reports",
      "Multi-Year Discounts Available",
    ],
    category: "facility-management",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    id: "society-cleaning",
    title: "Housing Society & Township Cleaning",
    slug: "society-cleaning",
    description:
      "Complete cleaning solutions for housing societies, townships, and gated communities. Covers common areas — lobbies, corridors, staircases, clubhouse, gym, pool area, gardens, parking, and basements. Includes water tank cleaning, STP/WTP maintenance coordination, waste segregation, and festive deep cleaning. Society management portal for residents.",
    shortDescription:
      "Lobbies, clubhouse, pool, parking, gardens, water tanks — society portal included",
    icon: "Users",
    startingPrice: 19999,
    features: [
      "Lobby, Corridor & Staircase Cleaning",
      "Clubhouse, Gym & Pool Area Maintenance",
      "Garden & Landscape Coordination",
      "Parking & Basement Cleaning",
      "Water Tank Cleaning (Quarterly)",
      "STP/WTP Maintenance Coordination",
      "Waste Segregation & Collection",
      "Society Management Portal",
    ],
    category: "facility-management",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    id: "hospital-cleaning",
    title: "Hospital & Healthcare Facility Cleaning",
    slug: "hospital-cleaning",
    description:
      "Specialized cleaning for hospitals, clinics, diagnostic centers, and healthcare facilities following CDC/WHO guidelines and NABH standards. Terminal cleaning for OTs, ICUs, isolation wards. Color-coded microfiber system, ATP testing validation, biomedical waste segregation, and chemical disinfection logs. Trained in infection prevention protocols.",
    shortDescription:
      "OT/ICU terminal cleaning, NABH compliant, ATP testing, biomedical waste",
    icon: "HeartPulse",
    startingPrice: 19999,
    features: [
      "OT & ICU Terminal Cleaning",
      "Isolation Ward Protocols",
      "NABH/CDC/WHO Compliant",
      "Color-Coded Microfiber System",
      "ATP Testing Validation",
      "Biomedical Waste Segregation",
      "Chemical Disinfection Logs",
      "Infection Prevention Trained Staff",
    ],
    category: "facility-management",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  },
  {
    id: "school-cleaning",
    title: "School & College Cleaning",
    slug: "school-cleaning",
    description:
      "Educational institution cleaning for schools, colleges, universities, and coaching centers. Child-safe, non-toxic chemicals. Covers classrooms, labs, libraries, auditoriums, cafeterias, washrooms, play areas, and hostels. Vacation deep cleaning programs. Flexible schedules during breaks. Staff background verification mandatory.",
    shortDescription:
      "Classrooms, labs, hostels, play areas — child-safe chemicals, vacation deep clean",
    icon: "GraduationCap",
    startingPrice: 9999,
    features: [
      "Classroom & Lecture Hall Cleaning",
      "Laboratory & Library Cleaning",
      "Auditorium & Cafeteria Sanitization",
      "Washroom Deep Cleaning",
      "Play Area & Sports Facility Cleaning",
      "Hostel & Common Room Cleaning",
      "Child-Safe Non-Toxic Chemicals",
      "Vacation Deep Cleaning Programs",
    ],
    category: "facility-management",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
  },
  {
    id: "hotel-cleaning",
    title: "Hotel & Hospitality Cleaning",
    slug: "hotel-cleaning",
    description:
      "Complete hotel housekeeping and public area cleaning for hotels, resorts, serviced apartments, and banquets. Room turnaround service, deep cleaning, laundry coordination, public area maintenance, kitchen stewarding, and spa/gym cleaning. Branded hospitality standards. Trained in guest privacy and luxury service protocols. 24/7 operations support.",
    shortDescription:
      "Room turnaround, public areas, laundry, kitchen stewarding — 24/7 luxury standards",
    icon: "Hotel",
    startingPrice: 14999,
    features: [
      "Guest Room Turnaround Service",
      "Deep Cleaning & Rotation Programs",
      "Laundry & Linen Coordination",
      "Public Area & Lobby Maintenance",
      "Kitchen Stewarding & Back-of-House",
      "Spa, Gym & Pool Area Cleaning",
      "Banquet & Event Setup/Takedown",
      "Guest Privacy & Luxury Protocols",
    ],
    category: "facility-management",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  },
  {
    id: "sanitization-services",
    title: "Professional Sanitization & Disinfection",
    slug: "sanitization-services",
    description:
      "Advanced sanitization and disinfection services using ULV fogging, electrostatic spraying, and UV-C treatment. Effective against viruses, bacteria, fungi, and mold. Certified chemicals (EPA/CDC approved). Services for offices, homes, vehicles, ambulances, and high-touch areas. Pre/post ATP swab testing available. Certificate provided.",
    shortDescription:
      "ULV fogging, electrostatic spray, UV-C — EPA/CDC approved, ATP testing",
    icon: "Shield",
    startingPrice: 1999,
    features: [
      "ULV Cold Fogging",
      "Electrostatic Spraying",
      "UV-C Surface Treatment",
      "EPA/CDC Approved Chemicals",
      "Virucidal, Bactericidal, Fungicidal",
      "Pre/Post ATP Swab Testing",
      "Sanitization Certificate",
      "Vehicle & Ambulance Sanitization",
    ],
    category: "specialty",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
  },
  {
    id: "pest-control",
    title: "Integrated Pest Management (IPM)",
    slug: "pest-control",
    description:
      "Comprehensive pest control services for residential, commercial, and industrial properties. General pest control (cockroaches, ants, spiders), rodent management, termite treatment (pre/post construction), bed bug treatment, mosquito/fly control, and bird control. CIB&RC approved chemicals. Annual contracts with quarterly services. Digital reporting.",
    shortDescription:
      "General pests, rodents, termites, bed bugs — CIB&RC approved, annual contracts",
    icon: "Bug",
    startingPrice: 1499,
    features: [
      "General Pest Control (Cockroaches, Ants, Spiders)",
      "Rodent Management (Trapping & Baiting)",
      "Termite Treatment (Pre/Post Construction)",
      "Bed Bug Heat & Chemical Treatment",
      "Mosquito & Fly Control (Fogging/Larviciding)",
      "Bird Control (Netting & Spikes)",
      "CIB & RC Approved Chemicals",
      "Annual Maintenance Contracts (AMC)",
      "Digital Service Reports",
    ],
    category: "specialty",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
  },
];

export interface ServiceCategoryMeta {
  id: Service["category"];
  label: string;
  description: string;
  icon: string;
}

export const serviceCategories: ServiceCategoryMeta[] = [
  {
    id: "residential",
    label: "Residential Cleaning",
    description: "Homes, apartments & everyday living spaces kept spotless.",
    icon: "Home",
  },
  {
    id: "commercial",
    label: "Commercial Cleaning",
    description: "Offices, retail & business premises cleaned to brand standards.",
    icon: "Building2",
  },
  {
    id: "industrial",
    label: "Industrial Cleaning",
    description: "Plants, warehouses & heavy-duty facilities maintained safely.",
    icon: "Factory",
  },
  {
    id: "specialty",
    label: "Specialty Cleaning",
    description: "Sofa, carpet, marble, sanitization, pest control & more.",
    icon: "Sparkles",
  },
  {
    id: "facility-management",
    label: "Facility Management",
    description: "End-to-end housekeeping & soft FM for large properties.",
    icon: "Building",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export { formatPrice } from "./pricing";