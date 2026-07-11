import { business } from "./business";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  avatar: string;
  bio: string;
  verified: boolean;
}

export const team: TeamMember[] = [
  {
    id: "ceo",
    name: "Facade Master Leadership Team",
    role: "Founder & CEO",
    experience: "8+ years",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    bio:
      "Founded FACADE MASTER with expertise in high-rise cleaning and building maintenance. Previously managed facade projects across 5 countries, bringing international standards to Indian commercial properties.",
    verified: true,
  },
  {
    id: "operations",
    name: "Operations Director",
    role: "Operations Head",
    experience: "6+ years",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    bio:
      "Oversees all facade cleaning operations with focus on safety, quality control, and efficient project execution. Certified IRATA Level 3 supervisor.",
    verified: true,
  },
  {
    id: "technical",
    name: "Technical Director",
    role: "Head of Rope Access",
    experience: "7+ years",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    bio:
      "Leads the IRATA-certified rope access team. Specializes in complex facade structures and height-work safety protocols. Previously worked on supertall buildings in UAE.",
    verified: true,
  },
  {
    id: "quality",
    name: "Quality Assurance Lead",
    role: "QC Manager",
    experience: "5+ years",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio:
      "Ensures all cleaning meets British and international standards. Conducts pre/post inspection and maintains quality documentation for every project.",
    verified: true,
  },
  {
    id: "safety",
    name: "Safety Compliance Officer",
    role: "HSE Manager",
    experience: "6+ years",
    avatar:
      "https://images.unsplash.com/photo-1559839136-6aca1b3705e5?w=400&q=80",
    bio:
      "Full-time safety officer ensuring all operations comply with IRATA, ISO 45001, and local building safety codes. Conducts daily equipment checks and site audits.",
    verified: true,
  },
  {
    id: "project",
    name: "Senior Project Manager",
    role: "Project Lead",
    experience: "5+ years",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    bio:
      "Manages multi-building projects and AMC contracts. Coordinates with facility managers, building owners, and developer teams for large-scale cleaning programs.",
    verified: true,
  },
];

export const companyInfo = {
  founded: "2018",
  mission:
    "To provide commercial properties across India with world-class facade cleaning and maintenance using IRATA-certified techniques, advanced equipment, and uncompromising safety standards.",
  vision:
    "To become India's most trusted facade maintenance partner for commercial, hospitality, and institutional properties.",
  values: [
    {
      title: "Safety First",
      description:
        "IRATA-certified procedures, full insurance, and zero-incident track record on every project.",
      icon: "ShieldCheck",
    },
    {
      title: "Quality Excellence",
      description:
        "British standards adherence with documented processes, pre/post inspections, and satisfaction guarantee.",
      icon: "Award",
    },
    {
      title: "Professional Expertise",
      description:
        "Years of experience on high-rise and complex facade structures with specialized equipment and techniques.",
      icon: "Building",
    },
    {
      title: "Transparent Pricing",
      description:
        "No hidden charges. Detailed quotations with scope, timeline, and warranty clearly defined.",
      icon: "IndianRupee",
    },
    {
      title: "Eco-Conscious",
      description:
        "Environmentally safe chemicals, water recycling systems, and minimal environmental impact cleaning methods.",
      icon: "Leaf",
    },
    {
      title: "Reliable Partnerships",
      description:
        "Long-term relationships with building owners, facility managers, and real estate developers.",
      icon: "Handshake",
    },
  ],
  stats: [
    { label: "Buildings Cleaned", value: "850+" },
    { label: "Client Satisfaction", value: "4.8★" },
    { label: "Years Experience", value: "8+" },
    { label: "IRATA Technicians", value: "25+" },
    { label: "Service Cities", value: "6+" },
    { label: "Insurance Coverage", value: "Full" },
  ],
};