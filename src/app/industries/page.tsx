import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Building2,
  Home,
  Users,
  HeartPulse,
  GraduationCap,
  Hotel,
  ShoppingBag,
  Package,
  Factory,
  Building,
  Landmark,
  HardHat,
  ArrowRight,
  Phone,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { industries } from "@/config/industries";
import { business } from "@/config/business";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: `Industries We Serve | ${business.name}`,
  description:
    "Professional cleaning & facility management for corporate offices, hospitals, schools, hotels, warehouses, factories, housing societies, and more across Nashik & Pune.",
};

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Home,
  Users,
  HeartPulse,
  GraduationCap,
  Hotel,
  ShoppingBag,
  Package,
  Factory,
  Building,
  Landmark,
  HardHat,
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-teal rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-white/10 text-teal text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Industries We Serve
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-[family-name:var(--font-poppins)] mb-4">
            One Cleaning Partner for Every Industry
          </h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto mb-8">
            From a single home to a 32-floor commercial tower, a 300-bed hospital
            to a multi-warehouse logistics network — we deliver sector-specific
            cleaning & facility management with enterprise-grade standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#quote"
              className="bg-gradient-to-r from-orange to-gold text-white font-bold px-7 py-4 rounded-xl text-lg transition-all hover:scale-[1.03] flex items-center justify-center gap-2"
            >
              Get Free Quote
            </a>
            <a
              href={`tel:${business.phone}`}
              className="bg-white/10 border border-white/20 text-white font-bold px-7 py-4 rounded-xl text-lg transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" /> Call
            </a>
          </div>
        </div>
      </section>

      {/* Industries grid */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => {
              const Icon = iconMap[ind.icon] || Building2;
              return (
                <div
                  key={ind.id}
                  className="bg-white rounded-2xl border border-border p-7 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-teal-light rounded-2xl flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">{ind.title}</h3>
                  <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                    {ind.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {ind.examples.map((ex) => (
                      <span
                        key={ex}
                        className="text-[11px] font-medium bg-surface text-gray-600 px-2 py-1 rounded-md"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-14 bg-white border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy font-[family-name:var(--font-poppins)] mb-3">
            Don&apos;t see your industry?
          </h2>
          <p className="text-gray-500 mb-6">
            We tailor cleaning & facility management programs for any sector. Tell
            us your site and compliance needs — we&apos;ll design the solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald hover:bg-emerald/90 text-white font-bold px-7 py-4 rounded-xl text-lg transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
            <Link
              href="/commercial"
              className="bg-navy hover:bg-navy-light text-white font-bold px-7 py-4 rounded-xl text-lg transition-all flex items-center justify-center gap-2"
            >
              Commercial Solutions <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
