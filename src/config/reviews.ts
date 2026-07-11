import { business } from "./business";

export const reviewStats = {
  average: business.rating,
  total: business.reviewCount,
  distribution: {
    5: 5,
    4: 2,
    3: 1,
    2: 0,
    1: 0,
  },
};

export const reviews = [
  {
    id: 1,
    name: "Rajesh Mehta",
    rating: 5,
    text:
      "FACADE MASTER transformed our 25-story office tower. The glass facade looks brand new, and their IRATA-certified team worked safely without disrupting our tenants. Professional from start to finish.",
    service: "Glass Facade Cleaning",
    location: "Bandra Kurla Complex, Mumbai",
    date: "2026-06-20",
    verified: true,
    visible: true,
  },
  {
    id: 2,
    name: "Priya Sharma",
    rating: 5,
    text:
      "Excellent service for our shopping mall facades. They cleaned all ACP panels and glass entrances during non-operational hours. The building aesthetics improved significantly, and our footfall increased after the makeover.",
    service: "ACP Panel Cleaning",
    location: "Phoenix Marketcity, Pune",
    date: "2026-06-15",
    verified: true,
    visible: true,
  },
  {
    id: 3,
    name: "Amit Deshpande",
    rating: 5,
    text:
      "Outstanding rope access work on our hotel exterior. The team was professional, safety-conscious, and delivered exceptional results on our stone facade. Highly recommend for luxury properties.",
    service: "Rope Access Cleaning",
    location: "JW Marriott, Pune",
    date: "2026-06-10",
    verified: true,
    visible: true,
  },
  {
    id: 4,
    name: "Dr. Kavita Nair",
    rating: 4,
    text:
      "Great job on our hospital facades. The team followed all infection control protocols and cleaned during our scheduled maintenance window. The building now has a pristine professional appearance.",
    service: "Building Exterior Cleaning",
    location: "Fortis Hospital, Mumbai",
    date: "2026-06-05",
    verified: true,
    visible: true,
  },
  {
    id: 5,
    name: "Sanjay Gupta",
    rating: 5,
    text:
      "Post-construction cleaning for our new commercial tower. They removed all concrete splatter, paint overspray, and delivered a handover-ready finish. Saved us weeks of delay.",
    service: "Post-Construction Facade Cleaning",
    location: "L&T Construction, Navi Mumbai",
    date: "2026-05-28",
    verified: true,
    visible: true,
  },
  {
    id: 6,
    name: "Nitin Joshi",
    rating: 5,
    text:
      "Annual maintenance contract signed for our 3 commercial properties. Their quarterly cleaning schedule keeps our buildings looking pristine year-round. Transparent pricing and excellent communication.",
    service: "Facility Management AMC",
    location: "Multiple Locations, Mumbai",
    date: "2026-05-20",
    verified: true,
    visible: true,
  },
  {
    id: 7,
    name: "Meera Krishnan",
    rating: 4,
    text:
      "High-rise window cleaning for our residential tower. The team used BMU and harness systems with full safety protocols. Clean, professional work with minimal disruption to residents.",
    service: "High-Rise Window Cleaning",
    location: "Kalyan Dombivli, Mumbai",
    date: "2026-05-15",
    verified: true,
    visible: true,
  },
  {
    id: 8,
    name: "Director Ramesh Iyer",
    rating: 5,
    text:
      "Complete facade restoration including silicone joint replacement for our 15-year-old building. The team identified all leak points and provided warranty-backed maintenance. Exceeded expectations.",
    service: "Silicone & Glass Maintenance",
    location: "Raheja Complex, Navi Mumbai",
    date: "2026-05-01",
    verified: true,
    visible: true,
  },
  {
    id: 9,
    name: "Shweta Patel",
    rating: 5,
    text:
      "Pressure washing for our industrial facility. Removed 15 years of oil stains and grime from concrete facades. The building looks decades younger. Professional team with industrial expertise.",
    service: "Pressure Washing",
    location: "Hindustan Petrochemicals, Panvel",
    date: "2026-04-25",
    verified: true,
    visible: true,
  },
  {
    id: 10,
    name: "Kunal Shah",
    rating: 5,
    text:
      "Glass cleaning for our corporate office atrium. Impressive attention to detail with the water-fed pole system. No streaks, no mess — just pristine transparency. Will definitely use again.",
    service: "Glass Facade Cleaning",
    location: "ITC Royal Gardenia, Pune",
    date: "2026-04-18",
    verified: true,
    visible: true,
  },
];