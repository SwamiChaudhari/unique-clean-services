import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard", "/dashboard/*", "/api/*"],
    },
    sitemap: "https://unique-clean-services.vercel.app/sitemap.xml",
    host: "https://unique-clean-services.vercel.app",
  };
}
