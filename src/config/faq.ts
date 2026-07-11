import { business } from "./business";

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What is facade cleaning and why is it important?",
    answer:
      "Facade cleaning involves professional cleaning of building exteriors including glass curtains, cladding, stone, metal panels, and architectural surfaces. Regular cleaning maintains building aesthetics, prevents material degradation, extends facade life, and ensures compliance with commercial property standards. It also improves energy efficiency by keeping surfaces clean.",
    category: "Facade Basics",
  },
  {
    id: "2",
    question: "How often should commercial facades be cleaned?",
    answer:
      "Commercial facades should be professionally cleaned every 6-12 months depending on location, pollution levels, and building height. High-rise buildings in metropolitan areas may need quarterly cleaning due to higher pollution exposure. We provide customized cleaning schedules based on your building's specific needs and environmental conditions.",
    category: "Maintenance",
  },
  {
    id: "3",
    question: "Are your rope access technicians IRATA certified?",
    answer:
      "Yes, all our height-work specialists are IRATA (Industrial Rope Access Trade Association) certified at Levels 1, 2, or 3. IRATA is the globally recognized standard for rope access operations, ensuring the highest safety protocols for working at heights up to 500 feet. All certifications are current and regularly renewed.",
    category: "Safety",
  },
  {
    id: "4",
    question: "What safety measures do you follow for high-rise cleaning?",
    answer:
      "We follow comprehensive safety protocols including site-specific risk assessments, method statements, full PPE compliance, fall-arrest systems, safety harnesses, anchor point testing, daily equipment inspections, and supervisor oversight. We maintain public liability and worker insurance on all assignments, and provide safety certifications upon completion.",
    category: "Safety",
  },
  {
    id: "5",
    question: "Do you use scaffolding for facade cleaning?",
    answer:
      "Not necessarily. We use multiple access methods: water-fed poles for buildings up to 60 meters, BMU (Building Maintenance Units) for equipped structures, cradles and gondolas for mid-rise buildings, and IRATA rope access for complex or sensitive facades. This reduces costs, time, and disruption compared to traditional scaffolding.",
    category: "Process",
  },
  {
    id: "6",
    question: "How do you ensure streak-free glass facade cleaning?",
    answer:
      "We use deionized water-fed pole systems that eliminate minerals causing streaks. Our water is purified through reverse osmosis and carbon filtration, then pumped through telescopic poles with soft-bristle brushes. For high-rise facades, we use specialized squeegees and pure water systems for crystal-clear results.",
    category: "Quality",
  },
  {
    id: "7",
    question: "What types of buildings do you service?",
    answer:
      "We service all commercial building types: corporate offices, high-rise residential towers, shopping malls, hotels & resorts, hospitals, industrial facilities, educational institutions, and government buildings. Our team has experience with various facade materials including glass, ACP, stone, metal, and composite panels.",
    category: "Services",
  },
  {
    id: "8",
    question: "Can you clean facades during business hours?",
    answer:
      "Yes, we can schedule cleaning during business hours with proper safety barriers, or prefer non-operational hours (evenings, weekends, holidays) for minimal disruption. For retail and hospitality, we schedule before opening or after closing. We coordinate with building management to ensure smooth operations during cleaning.",
    category: "Process",
  },
  {
    id: "9",
    question: "What is included in post-construction facade cleaning?",
    answer:
      "Our post-construction package includes: concrete splatter removal, paint overspray cleanup, heavy dust elimination, adhesive and sticker removal, protective film removal, final glass polishing, silicone joint cleaning, and handover-ready inspection. We work with contractors to ensure your building looks pristine for handover.",
    category: "Services",
  },
  {
    id: "10",
    question: "Do you provide annual maintenance contracts?",
    answer:
      "Yes, we offer comprehensive AMC packages including quarterly facade inspections, preventive cleaning schedules, silicone joint maintenance, pressure washing, and emergency response. Contracts include dedicated account managers, detailed reporting, and priority scheduling at discounted rates.",
    category: "Commercial",
  },
  {
    id: "11",
    question: "How much does facade cleaning typically cost?",
    answer:
      "Pricing depends on building height, facade area, access method, and cleaning frequency. Glass facade cleaning starts from ₹24,999, rope access from ₹19,999, and building exterior cleaning from ₹29,999. For an accurate quote, we provide free site inspection and customized proposal based on your building specifications.",
    category: "Pricing",
  },
  {
    id: "12",
    question: "Is FACADE MASTER insured for commercial work?",
    answer:
      "Yes, we carry comprehensive public liability insurance and worker compensation coverage for all commercial assignments. Our policies cover accidental damage, property damage, and workplace injuries. Insurance certificates are provided upon request, and all our technicians are covered under our commercial policies.",
    category: "Safety",
  },
  {
    id: "13",
    question: "How long does a typical facade cleaning project take?",
    answer:
      "Project duration varies by building size: Small commercial facades (up to 5,000 sq.ft) take 2-3 days, medium buildings (5,000-15,000 sq.ft) take 4-7 days, and large high-rises (15,000+ sq.ft) take 1-3 weeks depending on height. Weather conditions and access method also affect timing. We provide detailed timelines during quotation.",
    category: "Process",
  },
  {
    id: "14",
    question: "What chemicals do you use for facade cleaning?",
    answer:
      "We use pH-neutral, biodegradable cleaning solutions safe for all facade materials. Our chemicals are specifically formulated for glass, aluminum, stone, and composite panels. All products are environmentally compliant, and we provide SDS (Safety Data Sheets) for every chemical used on site.",
    category: "Quality",
  },
  {
    id: "15",
    question: "How do I get a quote for facade cleaning?",
    answer:
      `You can request a quote through multiple channels:\n• Call: ${business.phone}\n• WhatsApp: Send building photos and requirements\n• Website: Fill our quick quote form\n• Email: ${business.email}\n\nWe provide free site inspection, detailed scope of work, and transparent pricing with no hidden charges.`,
    category: "Booking",
  },
  {
    id: "16",
    question: "Do you clean silicone joints and sealants?",
    answer:
      "Yes, our silicone and glass maintenance service includes sealant inspection, cleaning, and replacement. We identify deteriorated joints, remove old sealant, clean surfaces, and apply new weatherproof sealants. This service helps prevent water infiltration and extends facade integrity.",
    category: "Services",
  },
  {
    id: "17",
    question: "What are your service areas?",
    answer:
      "We serve Mumbai, Navi Mumbai, Pune, Nashik, Ahmednagar, and Aurangabad. Our headquarters is in Navi Mumbai, and we have dedicated teams for each metropolitan area. For projects outside our regular service zone, we can arrange special site visits.",
    category: "Service Areas",
  },
  {
    id: "18",
    question: "Can you clean during monsoon season?",
    answer:
      "We can perform facade cleaning during monsoon season with modified schedules and additional safety measures. Wind speeds above 25 km/h may cause delays, and heavy rain requires temporary suspension. We recommend scheduling major projects before or after monsoon for optimal results.",
    category: "Process",
  },
];

export const faqCategories = [...new Set(faqs.map((f) => f.category))];

export function getFAQsByCategory(category: string): FAQ[] {
  return faqs.filter((f) => f.category === category);
}