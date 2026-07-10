export const business = {
  name: "UNIQUE CLEAN SERVICES",
  fullName: "UNIQUE CLEAN SERVICES",
  tagline: "Professional Cleaning & Facility Management Services",
  description:
    "Maharashtra's trusted cleaning & facility management company serving homes, offices, industries, hospitals, schools, hotels, and housing societies across Nashik & Pune. Background-verified staff, eco-friendly chemicals, ISO-aligned processes, and 24/7 support.",

  // Contact
  phone: "096234 44499",
  whatsapp: "919623444499",
  email: "hello@uniquecleanservices.in",

  // Address
  address: {
    flat: "N-53, AJ/1, 4/1",
    area: "Ambad - Uttam Nagar Road",
    locality: "CIDCO",
    city: "Nashik",
    state: "Maharashtra",
    pincode: "422010",
    full: "N-53, AJ/1, 4/1, Ambad - Uttam Nagar Road, CIDCO, Nashik, Maharashtra 422010",
  },

  // Service cities (headquarters + service footprint)
  citiesServed: ["Nashik", "Pune", "Mumbai", "Aurangabad", "Pimpri-Chinchwad"],

  // Hours
  hours: "Open 24 Hours",
  emergencyAvailable: true,

  // Social
  social: {
    facebook: "https://facebook.com/uniquecleanservices",
    instagram: "https://instagram.com/uniquecleanservices",
    twitter: "https://twitter.com/uniquecleanservices",
    linkedin: "https://linkedin.com/company/uniquecleanservices",
    youtube: "https://youtube.com/@uniquecleanservices",
  },

  // Ratings & scale
  rating: 4.4,
  reviewCount: 152,
  homesCleaned: 1500,
  businessesServed: 500,
  yearsExperience: 5,
  teamSize: 200,

  // SEO
  seo: {
    title:
      "UNIQUE CLEAN SERVICES | Cleaning & Facility Management In Maharashtra",
    description:
      "Professional residential, commercial, industrial & facility management cleaning services in Nashik & Pune. Background-verified staff, eco-friendly chemicals, ISO-aligned processes. Get a free quote.",
    keywords: [
      "cleaning services pune",
      "commercial cleaning pune",
      "office cleaning pune",
      "deep cleaning pune",
      "industrial cleaning pune",
      "facility management pune",
      "housekeeping services pune",
      "cleaning services nashik",
      "commercial cleaning nashik",
      "office cleaning nashik",
      "deep cleaning nashik",
      "facade cleaning pune",
      "high rise cleaning pune",
      "hospital cleaning pune",
      "hotel cleaning pune",
      "school cleaning pune",
      "warehouse cleaning pune",
      "post construction cleaning pune",
      "water tank cleaning pune",
      "marble polishing pune",
      "carpet cleaning pune",
      "sofa cleaning pune",
      "amc cleaning contract pune",
      "best cleaning company maharashtra",
      "professional cleaning services maharashtra",
    ],
    ogImage: "/og-image.jpg",
  },

  // Currency
  currency: "INR",
  currencySymbol: "₹",
};

export type Business = typeof business;
