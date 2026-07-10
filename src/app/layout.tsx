import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import JsonLdSchema from "@/components/JsonLdSchema";
import SkipLink from "@/components/SkipLink";
import ErrorBoundary from "@/components/ErrorBoundary";
import BottomActionBar from "@/components/BottomActionBar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
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
    "hospital cleaning pune",
    "hotel cleaning pune",
    "warehouse cleaning pune",
    "water tank cleaning pune",
    "marble polishing pune",
    "best cleaning company maharashtra",
    "professional cleaning services maharashtra",
  ],
  openGraph: {
    title:
      "UNIQUE CLEAN SERVICES | Cleaning & Facility Management In Maharashtra",
    description:
      "Professional cleaning & facility management for homes, offices & industries in Nashik & Pune. 4.4★ rated, 1,500+ homes & 500+ businesses served.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "UNIQUE CLEAN SERVICES | Cleaning & Facility Management In Maharashtra",
    description:
      "Professional cleaning & facility management for homes, offices & industries in Nashik & Pune. 4.4★ rated, 1,500+ homes & 500+ businesses served.",
  },
  alternates: {
    canonical: "https://unique-clean-services.vercel.app",
  },
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#0B1D3A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <meta name="theme-color" content="#0B1D3A" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className="font-sans antialiased text-gray-900 bg-white overflow-x-hidden">
        <SkipLink />
        <ErrorBoundary>
          <JsonLdSchema />
          {children}
          <BottomActionBar />
          <Suspense fallback={null}>
            <AnalyticsTracker />
          </Suspense>
        </ErrorBoundary>
      </body>
    </html>
  );
}
