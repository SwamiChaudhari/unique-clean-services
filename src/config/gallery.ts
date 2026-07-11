export const galleryItems = [
  {
    id: "1",
    title: "Glass Facade Transformation",
    category: "Glass Facade",
    type: "image" as const,
    src:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    description: "Before & after glass curtain wall cleaning",
  },
  {
    id: "2",
    title: "ACP Panel Restoration",
    category: "ACP Cleaning",
    type: "image" as const,
    src:
      "https://images.unsplash.com/photo-1567633888516-2fcbfa9ee2da?w=800&q=80",
    description: "ACP panel deep cleaning and restoration",
  },
  {
    id: "3",
    title: "High-Rise Window Cleaning",
    category: "High-Rise",
    type: "image" as const,
    src:
      "https://images.unsplash.com/photo-1562654570-d0b1c2dbd5fa?w=800&q=80",
    description: "Rope access window cleaning at height",
  },
  {
    id: "4",
    title: "Building Exterior Revival",
    category: "Exterior",
    type: "image" as const,
    src:
      "https://images.unsplash.com/photo-1545251122-b04c7c8ce1c2?w=800&q=80",
    description: "Complete building exterior cleaning",
  },
  {
    id: "5",
    title: "Shopping Mall Facade",
    category: "Retail",
    type: "image" as const,
    src:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    description: "Shopping mall entrance facade cleaning",
  },
  {
    id: "6",
    title: "Hotel Exterior Makeover",
    category: "Hospitality",
    type: "image" as const,
    src:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    description: "Luxury hotel facade restoration",
  },
  {
    id: "7",
    title: "Post-Construction Cleanup",
    category: "Post-Construction",
    type: "image" as const,
    src:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    description: "Construction site facade cleanup",
  },
  {
    id: "8",
    title: "Pressure Washing",
    category: "Pressure Wash",
    type: "image" as const,
    src:
      "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62?w=800&q=80",
    description: "Industrial facade pressure washing",
  },
  {
    id: "9",
    title: "Rope Access Team",
    category: "Safety",
    type: "video" as const,
    src: "https://www.youtube.com/embed/example1",
    thumbnail:
      "https://images.unsplash.com/photo-1562654570-d0b1c2dbd5fa?w=800&q=80",
    description: "IRATA-certified team in action",
  },
  {
    id: "10",
    title: "Water-Fed Pole System",
    category: "Equipment",
    type: "image" as const,
    src:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    description: "Deionized water-fed pole cleaning",
  },
];

export const galleryCategories = [
  "All",
  ...Array.from(new Set(galleryItems.map((g) => g.category))),
];

export function getGalleryByCategory(category: string) {
  if (category === "All") return galleryItems;
  return galleryItems.filter((g) => g.category === category);
}