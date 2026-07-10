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
    title: "ISO 9001:2015 QMS",
    icon: "Award",
    description:
      "Quality Management System certified processes for consistent, auditable service delivery across every site.",
  },
  {
    id: "iso-14001",
    title: "ISO 14001 Environment",
    icon: "Leaf",
    description:
      "Environmentally responsible operations with eco-friendly chemicals and waste-reduction protocols.",
  },
  {
    id: "iso-45001",
    title: "ISO 45001 Safety",
    icon: "ShieldCheck",
    description:
      "Occupational health & safety management ensuring worker and client-site safety on every job.",
  },
  {
    id: "msme",
    title: "MSME Registered",
    icon: "BadgeCheck",
    description:
      "Government-recognised MSME enterprise, eligible for compliant B2B and institutional engagements.",
  },
  {
    id: "irata",
    title: "IRATA Rope Access",
    icon: "Anchor",
    description:
      "IRATA-certified rope-access technicians for safe high-rise facade and glass cleaning operations.",
  },
  {
    id: "fssai",
    title: "FSSAI-Aligned Kitchen Cleaning",
    icon: "UtensilsCrossed",
    description:
      "Food-safe, non-toxic cleaning for commercial kitchens with documentation for health inspections.",
  },
  {
    id: "cibrc",
    title: "CIB&RC Approved Chemicals",
    icon: "FlaskConical",
    description:
      "Pest-control and disinfection using CIB&RC approved, scientifically validated formulations.",
  },
  {
    id: "insured",
    title: "Fully Insured",
    icon: "FileCheck",
    description:
      "Public liability and worker insurance coverage on every assignment for complete peace of mind.",
  },
];

export const getCertificationById = (id: string) =>
  certifications.find((c) => c.id === id);
