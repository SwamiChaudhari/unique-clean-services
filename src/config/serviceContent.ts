export interface ServiceProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface ServiceGalleryItem {
  before: string;
  after: string;
  caption: string;
}

export interface ServiceTestimonial {
  name: string;
  role: string;
  quote: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceContent {
  benefits: string[];
  process: ServiceProcessStep[];
  gallery: ServiceGalleryItem[];
  testimonials: ServiceTestimonial[];
  faqs: ServiceFAQ[];
}

const IMG = {
  team: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
  deep: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80",
  kitchen: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  bath: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
  office: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  commercial: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
  industrial: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  facade: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  society: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  hospital: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  school: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
  hotel: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  restaurant: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  warehouse: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  marble: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
};

export const serviceContent: Record<string, ServiceContent> = {
  "home-cleaning": {
    benefits: [
      "Trained, background-verified professionals you can trust in your home",
      "Eco-friendly, child- and pet-safe cleaning products",
      "Flexible scheduling including same-day and weekends",
      "Consistent checklist-based cleaning every visit",
      "Transparent pricing with no hidden charges",
    ],
    process: [
      { step: "1", title: "Book & Schedule", desc: "Call, WhatsApp, or fill the form and pick a convenient slot." },
      { step: "2", title: "Arrival & Setup", desc: "Our team arrives on time with equipment and eco-chemicals." },
      { step: "3", title: "Room-by-Room Clean", desc: "Dusting, vacuuming, mopping, kitchen & bathroom sanitation." },
      { step: "4", title: "Final Check", desc: "Supervisor walkthrough and your sign-off before we leave." },
    ],
    gallery: [
      { before: IMG.bath, after: IMG.team, caption: "Living room — before & after" },
      { before: IMG.kitchen, after: IMG.deep, caption: "Kitchen — before & after" },
    ],
    testimonials: [
      { name: "Priya Sharma", role: "Homeowner, CIDCO Nashik", quote: "Spotless home every time. The team is punctual and trustworthy — my go-to for regular cleaning." },
    ],
    faqs: [
      { q: "How long does a standard home cleaning take?", a: "A 2BHK typically takes 3–4 hours with a 2-person team; larger homes are scoped during booking." },
      { q: "Do I need to provide cleaning supplies?", a: "No. We bring all equipment and eco-friendly products. You only need water and electricity access." },
      { q: "Are your staff background verified?", a: "Yes. Every team member undergoes police verification and reference checks." },
    ],
  },
  "deep-cleaning": {
    benefits: [
      "Reaches every corner missed in routine cleaning",
      "Hospital-grade disinfectants safe for kids & pets",
      "Ideal before festivals, guests, or post-illness",
      "Inside-appliance and hidden-surface cleaning",
      "Noticeably fresher, healthier home",
    ],
    process: [
      { step: "1", title: "Assessment", desc: "We note high-soil areas and tailor the deep-clean plan." },
      { step: "2", title: "Declutter & Dust", desc: "Fine dust removal from all surfaces, fixtures, and crevices." },
      { step: "3", title: "Deep Clean", desc: "Appliances, tiles, windows, carpets, and sanitization." },
      { step: "4", title: "Final Sanitization", desc: "Disinfection pass and supervisor quality check." },
    ],
    gallery: [
      { before: IMG.kitchen, after: IMG.deep, caption: "Kitchen deep clean — before & after" },
      { before: IMG.bath, after: IMG.team, caption: "Bathroom deep clean — before & after" },
    ],
    testimonials: [
      { name: "Sneha Kulkarni", role: "Homeowner, Ambad Nashik", quote: "Booked a deep clean before Diwali. The difference was unbelievable — looked like a new home." },
    ],
    faqs: [
      { q: "How often should I book deep cleaning?", a: "Every 3–4 months for homes, or before/after events, moves, and illnesses." },
      { q: "Do you move furniture?", a: "We clean around and under accessible furniture. Heavy lifting is assessed on-site for safety." },
    ],
  },
  "office-cleaning": {
    benefits: [
      "Healthier workplace, fewer sick days",
      "Flexible after-hours & weekend scheduling",
      "Trained teams with supervisor audits",
      "Consumables & pantry restocking options",
      "Transparent monthly reporting",
    ],
    process: [
      { step: "1", title: "Site Survey", desc: "We assess area, footfall, and hygiene requirements." },
      { step: "2", title: "Custom Schedule", desc: "Daily/weekly plans around your working hours." },
      { step: "3", title: "Execution", desc: "Workstations, common areas, washrooms, pantry." },
      { step: "4", title: "Audit & Report", desc: "Supervisor checklist and monthly performance report." },
    ],
    gallery: [
      { before: IMG.office, after: IMG.commercial, caption: "Workstation area — before & after" },
      { before: IMG.commercial, after: IMG.office, caption: "Common area — before & after" },
    ],
    testimonials: [
      { name: "Amit Deshmukh", role: "Facility Manager, IT Park Pune", quote: "Switched to Unique for our Pune office. Quality is consistent and reporting is spotless." },
    ],
    faqs: [
      { q: "Can you clean outside business hours?", a: "Yes. We specialise in after-hours and weekend cleaning to avoid disrupting work." },
      { q: "Do you provide consumables?", a: "Optional. We can supply and restock tissues, soaps, and pantry items." },
    ],
  },
  "commercial-cleaning": {
    benefits: [
      "Customised packages for retail, F&B, and clinics",
      "High-traffic area and floor-care expertise",
      "Dedicated account management",
      "Compliance-ready documentation",
      "Scales with your business",
    ],
    process: [
      { step: "1", title: "Requirement Study", desc: "Understand your space, hours, and compliance needs." },
      { step: "2", title: "Plan & Quote", desc: "Transparent scope with fixed or hourly pricing." },
      { step: "3", title: "Delivery", desc: "Trained crew with supervisor and QA checks." },
      { step: "4", title: "Review", desc: "Regular service reviews and continuous improvement." },
    ],
    gallery: [
      { before: IMG.commercial, after: IMG.office, caption: "Retail floor — before & after" },
    ],
    testimonials: [
      { name: "Neha Pawar", role: "Store Manager, Pune", quote: "Our showroom has never looked better. Open before hours, zero disruption." },
    ],
    faqs: [
      { q: "What businesses do you serve?", a: "Retail, restaurants, clinics, warehouses, and corporate buildings across Nashik & Pune." },
      { q: "Is pricing fixed or hourly?", a: "Both. We offer fixed monthly retainers and project-based hourly pricing." },
    ],
  },
  "industrial-cleaning": {
    benefits: [
      "Heavy-duty machinery & production-line cleaning",
      "Oil-spill and hazardous-residue response",
      "Full safety protocols with MSDS chemicals",
      "Work-around production schedules",
      "High-bay and structural dusting",
    ],
    process: [
      { step: "1", title: "Risk Assessment", desc: "Site survey, method statement, and permits." },
      { step: "2", title: "Isolation & Prep", desc: "Coordinate shutdowns and safety zones." },
      { step: "3", title: "Cleaning", desc: "Degreasing, vacuuming, high-bay dusting." },
      { step: "4", title: "Handover", desc: "Inspection, waste disposal, and sign-off." },
    ],
    gallery: [
      { before: IMG.industrial, after: IMG.warehouse, caption: "Production floor — before & after" },
    ],
    testimonials: [
      { name: "Rajendra Meher", role: "Plant Head, Aurangabad", quote: "Safe, methodical, and they worked around our production line. Exactly what we needed." },
    ],
    faqs: [
      { q: "Do you follow safety compliance?", a: "Yes. Risk assessments, method statements, PPE, and MSDS-backed chemicals on every job." },
      { q: "Can you work during shutdowns only?", a: "We plan around your schedule — shutdowns, weekends, or phased during operations." },
    ],
  },
  "high-rise-facade-cleaning": {
    benefits: [
      "IRATA-certified rope-access technicians",
      "BMU, cradle, and water-fed pole methods",
      "Glass, ACP, and stone facade expertise",
      "Risk assessment & method statements",
      "Fully insured with safety certification",
    ],
    process: [
      { step: "1", title: "Facade Survey", desc: "Material, access, and risk assessment." },
      { step: "2", title: "Method & Permit", desc: "Method statement and building permissions." },
      { step: "3", title: "Execution", desc: "Rope access / BMU cleaning bay by bay." },
      { step: "4", title: "QC & Report", desc: "Clarity checks and photo documentation." },
    ],
    gallery: [
      { before: IMG.facade, after: IMG.commercial, caption: "Glass curtain wall — before & after" },
    ],
    testimonials: [
      { name: "Vikram Shah", role: "Property Manager, Pune", quote: "32 floors done in 9 days with zero tenant disruption. Outstanding facade work." },
    ],
    faqs: [
      { q: "How high can you clean?", a: "We handle high-rises using rope access, BMU, and cradles with full safety certification." },
      { q: "Is it safe for occupants?", a: "Yes. Works are scheduled with building management and follow strict safety protocols." },
    ],
  },
  "water-tank-cleaning": {
    benefits: [
      "Municipal-guideline compliant process",
      "Mechanical scrub + high-pressure jet",
      "Chlorination disinfection",
      "Cleaning certificate & water test report",
      "AMC available for societies & buildings",
    ],
    process: [
      { step: "1", title: "Drain & Vacuum", desc: "Empty tank and remove sludge." },
      { step: "2", title: "Scrub & Jet", desc: "Mechanical scrubbing and high-pressure cleaning." },
      { step: "3", title: "Disinfect", desc: "Chlorination and rinse." },
      { step: "4", title: "Certify", desc: "Water quality test and cleaning certificate." },
    ],
    gallery: [
      { before: IMG.marble, after: IMG.team, caption: "Overhead tank — before & after" },
    ],
    testimonials: [
      { name: "Society Secretary", role: "Housing Society, Nashik", quote: "Quarterly AMC keeps our water safe and gives residents a certified report." },
    ],
    faqs: [
      { q: "How often should tanks be cleaned?", a: "Every 6 months for overhead and annually for underground, as per guidelines." },
      { q: "Do you provide a certificate?", a: "Yes — a cleaning certificate and water quality test report are provided." },
    ],
  },
  "marble-polishing": {
    benefits: [
      "Diamond abrasive multi-stage polishing",
      "Crystallization for mirror finish",
      "Stain, etch, and scratch removal",
      "Crack repair and protective sealing",
      "All stone types — marble, granite, Kota",
    ],
    process: [
      { step: "1", title: "Assessment", desc: "Stone type and damage evaluation." },
      { step: "2", title: "Grind & Hone", desc: "Diamond grinding to remove scratches." },
      { step: "3", title: "Polish & Crystallize", desc: "Mirror-finish crystallization." },
      { step: "4", title: "Seal", desc: "Protective penetrating sealer." },
    ],
    gallery: [
      { before: IMG.marble, after: IMG.deep, caption: "Marble floor — before & after" },
    ],
    testimonials: [
      { name: "Kavita Nair", role: "Homeowner, Pune", quote: "Our dull Italian marble now looks brand new. Beautiful mirror finish." },
    ],
    faqs: [
      { q: "Which stones do you polish?", a: "Italian & Indian marble, granite, Kota stone, terrazzo, and vitrified tiles." },
      { q: "How long does it last?", a: "With our sealer and a maintenance plan, shine lasts 12–18 months." },
    ],
  },
  "facility-management": {
    benefits: [
      "Single-point accountability for all soft services",
      "Dedicated facility manager",
      "CAFM ticketing & reporting",
      "SLA-driven service delivery",
      "Scales from one site to a portfolio",
    ],
    process: [
      { step: "1", title: "Consult", desc: "Understand your sites, services, and SLAs." },
      { step: "2", title: "Mobilise", desc: "Staff, supervisor, and CAFM setup." },
      { step: "3", title: "Operate", desc: "Integrated housekeeping, security, pest, horticulture." },
      { step: "4", title: "Improve", desc: "Monthly reviews, audits, and optimisation." },
    ],
    gallery: [
      { before: IMG.office, after: IMG.commercial, caption: "Campus IFM — before & after" },
    ],
    testimonials: [
      { name: "Operations Director", role: "IT Park, Pune", quote: "One vendor, one dashboard, one SLA. Complaint resolution dropped 40%." },
    ],
    faqs: [
      { q: "What's included in IFM?", a: "Housekeeping, security coordination, pest control, horticulture, waste management, and reporting." },
      { q: "Can you integrate with our systems?", a: "Yes. We provide CAFM ticketing and can align with your existing facilities workflow." },
    ],
  },
  "amc-cleaning": {
    benefits: [
      "Fixed monthly pricing",
      "Priority scheduling & dedicated team",
      "Quarterly deep cleaning included",
      "Supervisor audits & checklists",
      "24/7 emergency response",
    ],
    process: [
      { step: "1", title: "Scope", desc: "Define areas, frequency, and SLAs." },
      { step: "2", title: "Contract", desc: "Fixed pricing with clear deliverables." },
      { step: "3", title: "Deliver", desc: "Scheduled cleaning with supervisor audits." },
      { step: "4", title: "Report", desc: "Monthly performance and improvement reports." },
    ],
    gallery: [
      { before: IMG.commercial, after: IMG.office, caption: "AMC site — before & after" },
    ],
    testimonials: [
      { name: "CAO", role: "Corporate Office, Nashik", quote: "Predictable cost, reliable service. The AMC just works." },
    ],
    faqs: [
      { q: "What's the minimum term?", a: "Typically 12 months with multi-year discounts available." },
      { q: "Is deep cleaning included?", a: "Yes — quarterly deep cleaning is part of every AMC plan." },
    ],
  },
  "hospital-cleaning": {
    benefits: [
      "NABH / CDC / WHO aligned protocols",
      "OT & ICU terminal cleaning",
      "ATP-tested disinfection",
      "Biomedical waste segregation",
      "Infection-prevention trained staff",
    ],
    process: [
      { step: "1", title: "Zoning", desc: "Risk-zone mapping and colour coding." },
      { step: "2", title: "Terminal Clean", desc: "OT/ICU deep disinfection." },
      { step: "3", title: "Validate", desc: "ATP swab testing." },
      { step: "4", title: "Document", desc: "Disinfection logs and audits." },
    ],
    gallery: [
      { before: IMG.hospital, after: IMG.team, caption: "Ward — before & after" },
    ],
    testimonials: [
      { name: "Infection Control Officer", role: "300-Bed Hospital, Nashik", quote: "Passed NABH with zero housekeeping observations. HAI rate dropped 28%." },
    ],
    faqs: [
      { q: "Are you NABH compliant?", a: "Our protocols follow NABH, CDC, and WHO guidelines with documented validation." },
      { q: "How do you handle biomedical waste?", a: "Segregated collection per BMW Rules with auditable logs." },
    ],
  },
  "society-cleaning": {
    benefits: [
      "Complete common-area cleaning",
      "Quarterly water-tank disinfection",
      "STP/WTP coordination",
      "Waste segregation & collection",
      "Resident feedback portal",
    ],
    process: [
      { step: "1", title: "Audit", desc: "Map amenities and cleaning frequency." },
      { step: "2", title: "Schedule", desc: "Daily common-area + periodic specialist tasks." },
      { step: "3", title: "Execute", desc: "Trained team with supervisor checks." },
      { step: "4", title: "Engage", desc: "Resident portal for feedback and requests." },
    ],
    gallery: [
      { before: IMG.society, after: IMG.team, caption: "Society common area — before & after" },
    ],
    testimonials: [
      { name: "Society Chairman", role: "14-Building Township, Nashik", quote: "Complaints down 65%, residents happy. The portal made a big difference." },
    ],
    faqs: [
      { q: "Do you handle water tanks?", a: "Yes — quarterly disinfection with certificate and water test report." },
      { q: "How do residents raise issues?", a: "Through our society feedback portal with tracked resolution." },
    ],
  },
  "restaurant-cleaning": {
    benefits: [
      "FSSAI-compliant kitchen cleaning",
      "Exhaust hood & duct degreasing",
      "Grease-trap and equipment cleaning",
      "Health-inspection documentation",
      "Night/weekend service",
    ],
    process: [
      { step: "1", title: "Survey", desc: "Kitchen layout and compliance needs." },
      { step: "2", title: "Degrease", desc: "Hoods, ducts, and equipment." },
      { step: "3", title: "Sanitize", desc: "Food-safe disinfection." },
      { step: "4", title: "Certify", desc: "Documentation for inspections." },
    ],
    gallery: [
      { before: IMG.restaurant, after: IMG.kitchen, caption: "Commercial kitchen — before & after" },
    ],
    testimonials: [
      { name: "Restaurant Owner", role: "Pune", quote: "Passed FSSAI inspection with our cleaning certificate. Grease is gone." },
    ],
    faqs: [
      { q: "Are chemicals food-safe?", a: "Yes — non-toxic, food-safe products with FSSAI-aligned documentation." },
      { q: "When do you clean?", a: "Night or closed hours to avoid disrupting service." },
    ],
  },
  "school-cleaning": {
    benefits: [
      "Child-safe, non-toxic products",
      "Classrooms, labs, libraries, hostels",
      "Vacation deep-clean programs",
      "Mandatory staff background verification",
      "Flexible academic-schedule timing",
    ],
    process: [
      { step: "1", title: "Plan", desc: "Term-time and vacation schedules." },
      { step: "2", title: "Daily Clean", desc: "Classrooms, washrooms, common areas." },
      { step: "3", title: "Deep Clean", desc: "Vacation intensive program." },
      { step: "4", title: "Verify", desc: "Supervisor checks and reports." },
    ],
    gallery: [
      { before: IMG.school, after: IMG.team, caption: "Classroom — before & after" },
    ],
    testimonials: [
      { name: "Principal", role: "School, Nashik", quote: "Safe products and verified staff give parents confidence. Spotless campus." },
    ],
    faqs: [
      { q: "Are products safe for children?", a: "Yes — child-safe, non-toxic, and low-allergen cleaning agents only." },
      { q: "Do you clean during vacations?", a: "We run intensive deep-clean programs during holidays." },
    ],
  },
  "hotel-cleaning": {
    benefits: [
      "Brand-standard housekeeping",
      "24/7 room turnaround",
      "Public-area & lobby maintenance",
      "Kitchen stewarding",
      "Guest-privacy trained staff",
    ],
    process: [
      { step: "1", title: "Standardise", desc: "Align to your brand SOPs." },
      { step: "2", title: "Deploy", desc: "Trained housekeeping teams." },
      { step: "3", title: "Maintain", desc: "Public areas & back-of-house." },
      { step: "4", title: "Audit", desc: "Quality checks and reporting." },
    ],
    gallery: [
      { before: IMG.hotel, after: IMG.team, caption: "Guest room — before & after" },
    ],
    testimonials: [
      { name: "General Manager", role: "Hotel, Pune", quote: "Consistent luxury standard across 120 rooms with 24/7 support." },
    ],
    faqs: [
      { q: "Do you follow our brand standards?", a: "Yes — we train to your SOPs and quality benchmarks." },
      { q: "Is support round-the-clock?", a: "Yes — 24/7 operations support for turnarounds and events." },
    ],
  },
  "sanitization-services": {
    benefits: [
      "ULV fogging & electrostatic spraying",
      "UV-C surface treatment",
      "EPA/CDC approved chemicals",
      "Pre/post ATP swab testing",
      "Sanitization certificate provided",
    ],
    process: [
      { step: "1", title: "Assess", desc: "Area, risk, and coverage plan." },
      { step: "2", title: "Apply", desc: "Fogging / spraying / UV-C." },
      { step: "3", title: "Validate", desc: "ATP swab testing." },
      { step: "4", title: "Certify", desc: "Certificate of sanitization." },
    ],
    gallery: [
      { before: IMG.office, after: IMG.team, caption: "Workspace sanitization — before & after" },
    ],
    testimonials: [
      { name: "HR Lead", role: "Corporate, Pune", quote: "We sanitize the office quarterly. Staff feel safe and the certificate helps compliance." },
    ],
    faqs: [
      { q: "Which method do you use?", a: "ULV fogging, electrostatic spraying, and UV-C depending on the space." },
      { q: "Is it safe to re-enter soon?", a: "Yes — once surfaces dry (typically 30–60 min), areas are safe." },
    ],
  },
  "pest-control": {
    benefits: [
      "CIB&RC approved chemicals",
      "General, rodent, termite & bed-bug treatment",
      "Residential, commercial & industrial",
      "Annual contracts with quarterly service",
      "Digital reporting",
    ],
    process: [
      { step: "1", title: "Inspect", desc: "Identify pest and infestation." },
      { step: "2", title: "Treat", desc: "Targeted, safe application." },
      { step: "3", title: "Monitor", desc: "Traps and follow-up checks." },
      { step: "4", title: "Report", desc: "Digital service report." },
    ],
    gallery: [
      { before: IMG.commercial, after: IMG.office, caption: "Treated premises — before & after" },
    ],
    testimonials: [
      { name: "Facility Incharge", role: "Warehouse, Nashik", quote: "Integrated pest management keeps our warehouse audit-ready." },
    ],
    faqs: [
      { q: "Are the chemicals safe?", a: "Yes — CIB&RC approved and applied by trained technicians." },
      { q: "Do you offer contracts?", a: "Yes — annual contracts with quarterly scheduled services." },
    ],
  },
};

export const getServiceContent = (slug: string): ServiceContent | undefined =>
  serviceContent[slug];
