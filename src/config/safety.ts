export interface SafetyProtocol {
  id: string;
  title: string;
  icon: string;
  description: string;
}

// Safety & compliance protocols — rendered on homepage + /commercial.
export const safetyProtocols: SafetyProtocol[] = [
  {
    id: "ppe",
    title: "PPE Compliance",
    icon: "ShieldCheck",
    description:
      "Mandatory personal protective equipment — gloves, masks, goggles, harnesses — for every task and site condition.",
  },
  {
    id: "risk-assessment",
    title: "Risk Assessment & Method Statements",
    icon: "ClipboardList",
    description:
      "Site-specific risk assessments and documented method statements before any industrial or height work begins.",
  },
  {
    id: "training",
    title: "Trained & Certified Staff",
    icon: "GraduationCap",
    description:
      "Technicians trained in equipment operation, chemical handling, and (for height work) IRATA rope-access certification.",
  },
  {
    id: "chemicals",
    title: "Safe Chemical Handling (MSDS)",
    icon: "FlaskConical",
    description:
      "MSDS-backed, eco-friendly chemicals with proper dilution, labelling, and storage protocols on every site.",
  },
  {
    id: "insurance",
    title: "Insurance Coverage",
    icon: "FileCheck",
    description:
      "Public liability and worker-compensation insurance on all assignments for full financial protection.",
  },
  {
    id: "audits",
    title: "Supervisor Audits & QC",
    icon: "SearchCheck",
    description:
      "Layered supervisor audits, checklists, and client sign-off ensure consistent, verifiable quality.",
  },
  {
    id: "emergency",
    title: "Emergency Response",
    icon: "Siren",
    description:
      "24/7 emergency response with defined escalation and incident-reporting procedures for every contract.",
  },
  {
    id: "bgv",
    title: "Background Verification",
    icon: "UserCheck",
    description:
      "Police verification and reference checks for all field staff — essential for homes, schools, and hospitals.",
  },
];

export const getSafetyProtocolById = (id: string) =>
  safetyProtocols.find((s) => s.id === id);
