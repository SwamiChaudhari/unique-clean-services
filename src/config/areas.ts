import { business } from "./business";

export interface Area {
  id: string;
  name: string;
  slug: string;
  description: string;
  landmarks: string[];
  pincode: string;
}

export const areas: Area[] = [
  {
    id: "cidco",
    name: "CIDCO",
    slug: "cidco",
    description:
      "Our headquarters! Serving CIDCO with same-day cleaning services. Popular among families and working professionals.",
    landmarks: ["CIDCO Colony", "Rajiv Nagar", "CIDCO Bus Stand"],
    pincode: "422009",
  },
  {
    id: "ambad",
    name: "Ambad",
    slug: "ambad",
    description:
      "Premium residential cleaning in Ambad. Serving families and professionals in the Ambad industrial belt.",
    landmarks: ["Ambad MIDC", "Ambad Road", "ITI Ambad"],
    pincode: "422010",
  },
  {
    id: "uttam-nagar",
    name: "Uttam Nagar",
    slug: "uttam-nagar",
    description:
      "Comprehensive cleaning services in Uttam Nagar and surrounding areas. Trusted by hundreds of families.",
    landmarks: ["Uttam Nagar Road", "Ambad Link Road", "College Road"],
    pincode: "422010",
  },
  {
    id: "gangapur-road",
    name: "Gangapur Road",
    slug: "gangapur-road",
    description:
      "Professional cleaning for Gangapur Road area. Popular among families and commercial establishments.",
    landmarks: ["Gangapur Lake", "Gangapur Road Junction", "Pandit Colony"],
    pincode: "422013",
  },
  {
    id: "college-road",
    name: "College Road",
    slug: "college-road",
    description:
      "Expert cleaning services in College Road area. Serving the educational and residential community.",
    landmarks: ["College Road", "Mahatma Nagar", "Trimbak Road"],
    pincode: "422005",
  },
  {
    id: "indira-nagar",
    name: "Indira Nagar",
    slug: "indira-nagar",
    description:
      "Reliable cleaning in Indira Nagar. Convenient for residents near the Nashik-Pune highway corridor.",
    landmarks: ["Indira Nagar", "Gangapur Road", "Pandit Colony"],
    pincode: "422009",
  },
  {
    id: "satpur",
    name: "Satpur",
    slug: "satpur",
    description:
      "Fast-growing area with many industries. We provide residential and office cleaning in Satpur.",
    landmarks: ["Satpur MIDC", "Satpur Colony", "Ambad MIDC"],
    pincode: "422007",
  },
  {
    id: "panchavati",
    name: "Panchavati",
    slug: "panchavati",
    description:
      "Quality cleaning services in Panchavati. Close to the Kumbh Mela area and Ramkund.",
    landmarks: ["Panchavati", "Ramkund", "Muktidham"],
    pincode: "422003",
  },
  {
    id: "canada-corner",
    name: "Canada Corner",
    slug: "canada-corner",
    description:
      "Serving the Canada Corner area. We clean offices, apartments, and commercial spaces.",
    landmarks: ["Canada Corner", "Sharanpur Road", "College Road"],
    pincode: "422002",
  },
  {
    id: "dwarka",
    name: "Dwarka",
    slug: "dwarka",
    description:
      "Major residential and commercial area. We provide home cleaning, office cleaning, and commercial services.",
    landmarks: ["Dwarka Circle", "Gangapur Road", "Indira Nagar"],
    pincode: "422009",
  },
  {
    id: "nashik-road",
    name: "Nashik Road",
    slug: "nashik-road",
    description:
      "Serving Nashik Road and railway station area. We clean homes, offices, and commercial establishments.",
    landmarks: ["Nashik Road Railway Station", "Nashik Road Market", "Bytco Point"],
    pincode: "422101",
  },
  {
    id: "makhmalabad",
    name: "Makhmalabad",
    slug: "makhmalabad",
    description:
      "Comprehensive cleaning services in Makhmalabad. Trusted by families and businesses.",
    landmarks: ["Makhmalabad Road", "Makhmalabad Naka", "Pandit Colony"],
    pincode: "422004",
  },
  {
    id: "jail-road",
    name: "Jail Road",
    slug: "jail-road",
    description:
      "Professional cleaning for Jail Road area. Serving residential and commercial clients.",
    landmarks: ["Jail Road", "Nashik-Pune Road", "Ambad Area"],
    pincode: "422008",
  },
  {
    id: "pathardi-phata",
    name: "Pathardi Phata",
    slug: "pathardi-phata",
    description:
      "Expert cleaning services in Pathardi Phata. Serving the growing residential community.",
    landmarks: ["Pathardi Phata", "Mumbai-Agra Road", "Pathardi Area"],
    pincode: "422010",
  },
  {
    id: "trimurti-chowk",
    name: "Trimurti Chowk",
    slug: "trimurti-chowk",
    description:
      "Reliable cleaning in Trimurti Chowk area. Convenient for residents and businesses in central Nashik.",
    landmarks: ["Trimurti Chowk", "Sharanpur Road", "Main Road"],
    pincode: "422002",
  },
];

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
