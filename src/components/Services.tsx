"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building,
  Window,
  Water,
  Squeegee,
  Wrench,
  ArrowRight,
} from "lucide-react";
const services = [
  {
    id: 1,
    icon: "Building",
    title: "High-Rise Building Cleaning",
    shortDescription: "Safe and efficient cleaning for skyscrapers and tall buildings.",
    features: [
      "IRATA-certified technicians",
      "Advanced rope access methods",
      "Adherence to strict safety standards",
    ],
    startingPrice: 5000,
    slug: "high-rise-building-cleaning",
  },
  {
    id: 2,
    icon: "Window",
    title: "Glass Facade Cleaning",
    shortDescription: "Crystal-clear glass finishes for commercial properties.",
    features: [
      "Streak-free results",
      "Environment-friendly techniques",
      "Modern water-fed pole systems",
    ],
    startingPrice: 4000,
    slug: "glass-facade-cleaning",
  },
  {
    id: 3,
    icon: "Water",
    title: "Pressure Washing Services",
    shortDescription: "Deep cleaning for exterior walls and stubborn stains.",
    features: [
      "High-velocity cleaning",
      "Removes dirt, algae, and grime",
      "Perfect for ACP panels and stone walls",
    ],
    startingPrice: 3500,
    slug: "pressure-washing-services",
  },
  {
    id: 4,
    icon: "Squeegee",
    title: "ACP Panel Cleaning",
    shortDescription: "Restore the shine and appearance of ACP-clad buildings.",
    features: [
      "Non-abrasive techniques",
      "Preserves panel quality",
      "Increases building longevity",
    ],
    startingPrice: 4500,
    slug: "acp-panel-cleaning",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-orange font-semibold text-sm tracking-wider uppercase mb-3">
            Specialized Facade Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-[family-name:var(--font-poppins)]">
            Keeping Your Buildings Spotless
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            From high-rise cleaning to pressure washing, we ensure top-notch results for your property's exteriors.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => {
            const Icon = {
              Building,
              Window,
              Water,
              Squeegee,
              Wrench,
            }[service.icon] || Wrench;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.1)" }}
                className="group bg-white rounded-2xl border border-border p-6 transition-all duration-300 hover:border-blue/30 relative overflow-hidden"
              >
                <div className="w-12 h-12 bg-blue-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue/10 transition-colors">
                  <Icon className="w-6 h-6 text-blue" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                  {service.shortDescription}
                </p>
                <ul className="space-y-2 mb-5">
                  {service.features.slice(0, 3).map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <span className="w-1.5 h-1.5 bg-teal rounded-full shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-navy font-bold">
                    ₹{service.startingPrice}
                  </span>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-blue font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-bold px-8 py-4 rounded-xl transition-all hover:shadow-lg"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}