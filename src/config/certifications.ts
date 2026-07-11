export interface Certification {
  id: string;
  title: string;
  icon: string;
  description: string;
}

// Trust & Authority certifications — rendered on homepage + /commercial.
export const certifications: Certification[] = [
  {
    id: "iso-9001",
    title: "ISO 9001:2015 Quality",
    icon: "Award",
    description:
      "Quality Management certified for consistent, auditable facade cleaning service delivery.",
  },
  {
    id: "iso-14001",
    title: "ISO 14001 Environment",
    icon: "Leaf",
    description:
      "Environmentally responsible operations with eco-friendly chemicals and waste reduction.",
  },
  {
    id: "iso-45001",
    title: "ISO 45001 Safety",
    icon: "ShieldCheck",
    description:
      "Occupational health & safety management ensuring worker and site safety.",
  },
  {
    id: "msme",
    title: "MSME Registered",
    icon: "BadgeCheck",
    description:
      "Government-recognised MSME enterprise eligible for institutional contracts.",
  },
  {
    id: "irata",
    title: "IRATA Certified",
    icon: "Anchor",
    description:
      "Fully IRATA-certified rope access team for safe high-rise facade operations.",
  },
  {
    id: "ipaf",
    title: "IPAF Certified",
    icon: "Armchair",
    description:
      "IPAF-certified operators for scissor lifts, boom lifts, and elevated work platforms.",
    category: "safety",
  },
  {
    id: "nebosh",
    title: "NEBOSH Safety",
    icon: "GraduationCap",
    description:
      "NEBOSH-certified safety officers ensuring compliance on every project.",
  },
  {
    id: "insured",
    title: "Fully Insured",
    icon: "FileCheck",
    description:
      "Comprehensive public liability and worker insurance on all assignments.",
  },
  {
    id: "mswc",
    title: "MSWC Member",
    icon: "Building",
    description:
      "Member of Maharashtra Safety & Welfare Council for construction safety.",
  },
];

export const getCertificationById = (id: string) =>
  certifications.find((c) => c.id === id);