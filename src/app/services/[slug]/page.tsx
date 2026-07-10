import Image from "next/image";
import { services, getServiceBySlug, formatPrice } from "@/config/services";
import { getServiceContent } from "@/config/serviceContent";
import { reviews } from "@/config/reviews";
import { business } from "@/config/business";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import QuoteForm from "@/components/QuoteForm";
import {
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowRight,
  Clock,
  Shield,
  Star,
  Quote,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} in Nashik & Pune | ${business.name}`,
    description: service.description,
  };
}

const GENERIC_PROCESS = [
  { step: "1", title: "Book", desc: "Call, WhatsApp, or fill the form" },
  { step: "2", title: "Schedule", desc: "Pick a convenient date & time" },
  { step: "3", title: "We Clean", desc: "Our team arrives with equipment" },
  { step: "4", title: "Enjoy", desc: "Relax in your spotless space" },
];

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const content = getServiceContent(slug);
  const relatedServices = services
    .filter((s) => s.id !== service.id && s.category === service.category)
    .slice(0, 3);
  const fallbackRelated = services
    .filter((s) => s.id !== service.id)
    .slice(0, 3);
  const related = relatedServices.length ? relatedServices : fallbackRelated;
  const serviceFaqs = content?.faqs ?? [];
  const testimonials =
    content?.testimonials ??
    reviews
      .filter((r) => r.visible)
      .slice(0, 2)
      .map((r) => ({
        name: r.name,
        role: `${r.service} · ${r.location}`,
        quote: r.text,
      }));
  const process = content?.process ?? GENERIC_PROCESS;
  const benefits = content?.benefits ?? [];
  const gallery = content?.gallery ?? [];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-teal rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-white/60 hover:text-white text-sm mb-4"
              >
                ← All Services
              </Link>
              <span className="inline-block bg-white/10 text-teal text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider capitalize">
                {service.category.replace("-", " ")}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-[family-name:var(--font-poppins)] mb-4">
                {service.title}
              </h1>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  Starting from {formatPrice(service.startingPrice)}
                </span>
                <span className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 2-5 hours
                </span>
                <span className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5" /> 100% Satisfaction
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#quote"
                  className="bg-gradient-to-r from-orange to-gold text-white font-bold px-7 py-4 rounded-xl text-lg transition-all hover:scale-[1.03] flex items-center justify-center gap-2"
                >
                  Get Free Quote
                </a>
                <a
                  href={`https://wa.me/${business.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald hover:bg-emerald/90 text-white font-bold px-7 py-4 rounded-xl text-lg transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <a
                  href={`tel:${business.phone}`}
                  className="bg-white/10 border border-white/20 text-white font-bold px-7 py-4 rounded-xl text-lg transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call
                </a>
              </div>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={400}
                  className="w-full h-[300px] lg:h-[400px] object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      {benefits.length > 0 && (
        <section className="py-16 lg:py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="inline-block text-orange font-semibold text-sm tracking-wider uppercase mb-3">
                Why Choose This Service
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy font-[family-name:var(--font-poppins)]">
                Key Benefits
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white rounded-xl p-5 border border-border"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                  <span className="font-medium text-gray-700 text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What's Included */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            <div>
              <h2 className="text-2xl font-extrabold text-navy font-[family-name:var(--font-poppins)] mb-4">
                What&apos;s Included
              </h2>
              <p className="text-gray-500">
                Everything you need for a spotless {service.title.toLowerCase()}.
              </p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
              {service.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-surface rounded-xl p-4 border border-border"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald shrink-0" />
                  <span className="font-medium text-gray-700 text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold text-navy font-[family-name:var(--font-poppins)] text-center mb-10">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-teal to-blue rounded-2xl flex items-center justify-center mx-auto mb-3 text-white font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      {gallery.length > 0 && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="inline-block text-orange font-semibold text-sm tracking-wider uppercase mb-3">
                Before &amp; After
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy font-[family-name:var(--font-poppins)]">
                Real Results
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {gallery.map((g, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden border border-border shadow-card"
                >
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <Image
                        src={g.before}
                        alt={`${g.caption} - before`}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover"
                      />
                      <span className="absolute top-2 left-2 bg-navy/80 text-white text-[11px] font-bold px-2 py-1 rounded">
                        BEFORE
                      </span>
                    </div>
                    <div className="relative">
                      <Image
                        src={g.after}
                        alt={`${g.caption} - after`}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover"
                      />
                      <span className="absolute top-2 left-2 bg-emerald text-white text-[11px] font-bold px-2 py-1 rounded">
                        AFTER
                      </span>
                    </div>
                  </div>
                  <p className="text-center text-sm text-gray-500 py-3">
                    {g.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-16 lg:py-24 bg-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="inline-block text-orange font-semibold text-sm tracking-wider uppercase mb-3">
                Client Stories
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy font-[family-name:var(--font-poppins)]">
                What Our Clients Say
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-border shadow-card"
                >
                  <Quote className="w-8 h-8 text-teal mb-3" />
                  <p className="text-gray-600 leading-relaxed mb-4">
                    &quot;{t.quote}&quot;
                  </p>
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="w-4 h-4 text-gold fill-gold"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-navy text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {serviceFaqs.length > 0 && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-extrabold text-navy font-[family-name:var(--font-poppins)] text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {serviceFaqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-surface rounded-xl p-5 border border-border"
                >
                  <h3 className="font-semibold text-navy text-sm mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold text-navy font-[family-name:var(--font-poppins)] text-center mb-8">
            Other Services
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {related.map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.slug}`}
                className="bg-white rounded-2xl p-5 border border-border hover:shadow-card transition-all group"
              >
                <h3 className="font-bold text-navy mb-1 group-hover:text-blue transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {s.shortDescription}
                </p>
                <span className="text-blue font-semibold text-sm flex items-center gap-1">
                  View <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="quote" className="py-16 lg:py-24 bg-gradient-to-br from-navy to-navy-light">
        <div className="max-w-lg mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold text-white font-[family-name:var(--font-poppins)] text-center mb-2">
            Get Your Free Quote
          </h2>
          <p className="text-white/60 text-center mb-8">
            Response within 15 minutes
          </p>
          <QuoteForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
