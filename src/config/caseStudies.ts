export interface CaseStudy {
  id: string;
  title: string;
  clientType: string;
  location: string;
  service: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
  metrics: { label: string; value: string }[];
}

// Portfolio / case studies — rendered on /commercial and homepage.
export const caseStudies: CaseStudy[] = [
  {
    id: "it-park-ifm",
    title: "Integrated Facility Management for a 4-Tower IT Park",
    clientType: "Corporate / IT Park",
    location: "Pune",
    service: "Facility Management (IFM)",
    challenge:
      "A 2.5 million sq.ft IT campus struggled with fragmented housekeeping vendors, inconsistent quality, and no SLA tracking.",
    solution:
      "Deployed a dedicated facility manager with CAFM ticketing, 120 trained staff, colour-coded cleaning systems, and monthly performance reporting.",
    result:
      "Unified single-point accountability, 40% faster complaint resolution, and an NPS of 72 across occupant companies.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    metrics: [
      { label: "Area Covered", value: "2.5M sq.ft" },
      { label: "Staff Deployed", value: "120+" },
      { label: "Resolution Time", value: "-40%" },
    ],
  },
  {
    id: "hospital-infection-control",
    title: "Infection-Control Cleaning for a 300-Bed Hospital",
    clientType: "Healthcare",
    location: "Nashik",
    service: "Hospital Cleaning",
    challenge:
      "Post-expansion OT and ICU required NABH-aligned terminal cleaning with validated disinfection.",
    solution:
      "ATP-tested terminal cleaning, biomedical waste segregation, and colour-coded microfiber with disinfection logs per zone.",
    result:
      "Passed NABH audit with zero observations on housekeeping; HAI rate reduced by 28% over two quarters.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    metrics: [
      { label: "Beds", value: "300" },
      { label: "HAI Reduction", value: "-28%" },
      { label: "Audit", value: "NABH Pass" },
    ],
  },
  {
    id: "highrise-facade",
    title: "Glass Facade Restoration for a 32-Floor Commercial Tower",
    clientType: "Commercial High-Rise",
    location: "Pune",
    service: "High-Rise Facade Cleaning",
    challenge:
      "Years of weathering left the curtain wall stained and the building looking dated ahead of a tenant event.",
    solution:
      "IRATA rope-access team with water-fed poles and BMU, risk assessment and method statement per bay, weekend execution.",
    result:
      "Full facade restored in 9 days with zero downtime to tenants and a 60% improvement in glass clarity.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    metrics: [
      { label: "Floors", value: "32" },
      { label: "Duration", value: "9 days" },
      { label: "Clarity Gain", value: "+60%" },
    ],
  },
  {
    id: "society-common-areas",
    title: "Common-Area Program for a 14-Building Township",
    clientType: "Housing Society",
    location: "Nashik",
    service: "Society Cleaning",
    challenge:
      "Resident complaints about lobbies, clubhouse, and pool hygiene with no structured cleaning schedule.",
    solution:
      "Daily common-area schedules, quarterly water-tank disinfection, STP coordination, and a resident feedback portal.",
    result:
      "Complaint volume down 65%, water-tank compliance certified, and a 4.6★ resident satisfaction score.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    metrics: [
      { label: "Buildings", value: "14" },
      { label: "Complaints", value: "-65%" },
      { label: "Rating", value: "4.6★" },
    ],
  },
];

export const getCaseStudyById = (id: string) =>
  caseStudies.find((c) => c.id === id);
