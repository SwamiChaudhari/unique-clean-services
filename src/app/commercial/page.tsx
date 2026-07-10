import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Sparkles,
  Building2,
  LayoutGrid,
  CalendarCheck,
  Repeat,
  FileText,
  HardHat,
  ShieldCheck,
  ClipboardList,
  GraduationCap,
  FlaskConical,
  FileCheck,
  SearchCheck,
  Siren,
  UserCheck,
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import {
  commercialPackages,
  contractTypes,
} from "@/config/commercialPackages";
import { caseStudies } from "@/config/caseStudies";
import { safetyProtocols } from "@/config/safety";
import { business } from "@/config/business";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import Certifications from "@/components/Certifications";

export const metadata: Metadata = {
  title: `Commercial & Facility Management Cleaning | ${business.name}`,
  description:
    "Facility management, AMC cleaning contracts, office & industrial cleaning for businesses in Nashik & Pune. Dedicated managers, SLA-driven delivery, ISO-aligned processes.",
};

const packageIconMap: Record<string, LucideIcon> = {
  Sparkles,
  Building2,
  LayoutGrid,
};
const contractIconMap: Record<string, LucideIcon> = {
  CalendarCheck,
  Repeat,
  FileText,
  HardHat,
};
const safetyIconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  ClipboardList,
  GraduationCap,
  FlaskConical,
  FileCheck,
  SearchCheck,
  Siren,
  UserCheck,
};

const stats = [
  { value: "500+", label: "Businesses Served" },
  { value: "200+", label: "Trained Staff" },
  { value: "5+", label: "Years Experience" },
  { value: "ISO", label: "Aligned Processes" },
];

export default function CommercialPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-teal rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-white/10 text-teal text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                For Business & Institutions
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-[family-name:var(--font-poppins)] mb-4">
                Commercial & Facility Management Cleaning
              </h1>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                Single-point accountability for offices, industries, hospitals,
                hotels, schools, and housing societies. Dedicated facility
                managers, SLA-driven delivery, and CAFM-backed reporting across
                Nashik & Pune.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${business.phone}`}
                  className="bg-gradient-to-r from-orange to-gold text-white font-bold px-7 py-4 rounded-xl text-lg transition-all hover:scale-[1.03] flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" /> Get Commercial Quote
                </a>
                <a
                  href={`https://wa.me/${business.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald hover:bg-emerald/90 text-white font-bold px-7 py-4 rounded-xl text-lg transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm"
                >
                  <div className="text-3xl font-extrabold text-teal mb-1">
                    {s.value}
                  </div>
                  <div className="text-white/70 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-orange font-semibold text-sm tracking-wider uppercase mb-3">
              Service Packages
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-[family-name:var(--font-poppins)]">
              Plans That Scale With You
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              From a single office to an enterprise portfolio — transparent
              monthly pricing with clear deliverables.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {commercialPackages.map((pkg) => {
              const Icon = packageIconMap[pkg.icon] || Building2;
              return (
                <div
                  key={pkg.id}
                  className={`relative bg-surface rounded-2xl border p-7 hover:shadow-card transition-all duration-300 ${
                    pkg.popular
                      ? "border-teal ring-2 ring-teal/30"
                      : "border-border"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange to-gold text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}
                  <div className="w-12 h-12 bg-teal-light rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-1">{pkg.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{pkg.audience}</p>
                  <div className="text-lg font-extrabold text-navy mb-5">
                    {pkg.priceLabel}
                  </div>
                  <ul className="space-y-2.5 mb-6">
                    {pkg.features.map((f, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`tel:${business.phone}`}
                    className="block text-center bg-navy hover:bg-navy-light text-white font-bold py-3 rounded-xl transition-all"
                  >
                    Enquire Now
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contract types */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-orange font-semibold text-sm tracking-wider uppercase mb-3">
              Engagement Models
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-[family-name:var(--font-poppins)]">
              Flexible Contracts
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contractTypes.map((c) => {
              const Icon = contractIconMap[c.icon] || FileText;
              return (
                <div
                  key={c.id}
                  className="bg-white rounded-2xl border border-border p-6 text-center hover:shadow-card hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-light rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-blue" />
                  </div>
                  <h3 className="font-bold text-navy mb-1.5">{c.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {c.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-orange font-semibold text-sm tracking-wider uppercase mb-3">
              Proof, Not Promises
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-[family-name:var(--font-poppins)]">
              Case Studies
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="bg-surface rounded-2xl border border-border overflow-hidden hover:shadow-card transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[11px] font-bold text-teal bg-white/90 px-2 py-1 rounded uppercase">
                      {cs.service}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy mb-1">{cs.title}</h3>
                  <p className="text-xs text-gray-500 mb-4">
                    {cs.clientType} · {cs.location}
                  </p>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {cs.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="text-center bg-white rounded-lg py-2 border border-border"
                      >
                        <div className="text-base font-extrabold text-teal">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-gray-500">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-2">
                    <span className="font-semibold text-navy">Challenge: </span>
                    {cs.challenge}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-2">
                    <span className="font-semibold text-navy">Solution: </span>
                    {cs.solution}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <span className="font-semibold text-navy">Result: </span>
                    {cs.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & compliance */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-orange font-semibold text-sm tracking-wider uppercase mb-3">
              Safety & Compliance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-[family-name:var(--font-poppins)]">
              Built-In Safety, Always
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {safetyProtocols.map((s) => {
              const Icon = safetyIconMap[s.icon] || ShieldCheck;
              return (
                <div
                  key={s.id}
                  className="bg-white rounded-2xl border border-border p-6 hover:shadow-card transition-all duration-300"
                >
                  <div className="w-11 h-11 bg-emerald-light rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-emerald" />
                  </div>
                  <h3 className="font-bold text-navy text-sm mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Certifications />

      <FinalCTA />
      <Footer />
    </main>
  );
}
