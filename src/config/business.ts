export const business = {
  name: "FACADE MASTER",
  fullName: "FACADE MASTER PROFESSIONAL SERVICES PVT. LTD.",
  tagline: "Premium Facade Cleaning & Building Maintenance Solutions",
  description:
    "India's leading facade cleaning specialists serving commercial buildings, high-rise towers, shopping malls, hotels, hospitals, and corporate offices across Mumbai, Pune, Nashik & Navi Mumbai. IRATA-certified rope access technicians, advanced water-fed systems, comprehensive insurance coverage, and over 8 years of specialized experience.",

  // Contact
  phone: "+91 96234 44499",
  whatsapp: "919623444499",
  email: "info@facademaster.in",

  // Address
  address: {
    flat: "Office 301, Plot 12, Sector 10",
    area: "Vashi",
    locality: "Navi Mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400703",
    full: "Office 301, Plot 12, Sector 10, Vashi, Navi Mumbai, Maharashtra 400703",
  },

  // Service cities (headquarters + service footprint)
  citiesServed: ["Mumbai", "Navi Mumbai", "Pune", "Nashik", "Ahmednagar", "Aurangabad"],

  // Hours
  hours: "Open 24 Hours",
  emergencyAvailable: true,

  // Social
  social: {
    facebook: "https://facebook.com/facademaster",
    instagram: "https://instagram.com/facademaster",
    twitter: "https://twitter.com/facademaster",
    linkedin: "https://linkedin.com/company/facademaster",
    youtube: "https://youtube.com/@facademaster",
  },

  // Ratings & scale
  rating: 4.8,
  reviewCount: 287,
  buildingsCleaned: 850,
  buildingsServed: 285,
  yearsExperience: 8,
  teamSize: 120,

  // SEO
  seo: {
    title:
      "FACADE MASTER | Professional Facade Cleaning Services Mumbai Pune Nashik",
    description:
      "IRATA-certified facade cleaning for high-rise buildings, glass facades, ACP panels, and commercial structures. Rope access specialists, modern equipment, fully insured. Get free site inspection.",
    keywords: [
      "facade cleaning mumbai",
      "glass facade cleaning pune",
      "high rise window cleaning",
      "rope access cleaning mumbai",
      "building exterior cleaning",
      "ACP panel cleaning",
      "pressure washing mumbai",
      "post construction cleaning",
      "silicone maintenance",
      "facade maintenance",
      "commercial building cleaning",
      "corporate office facade",
      "shopping mall cleaning",
      "hotel facade cleaning",
      "hospital facade cleaning",
      "industrial building cleaning",
      "IRATA certified cleaners",
      "BMU facade cleaning",
      "water fed pole cleaning",
      "facade cleaning contractors",
    ],
    ogImage: "/og-image.jpg",
  },

  // Currency
  currency: "INR",
  currencySymbol: "₹",
};

export type Business = typeof business;