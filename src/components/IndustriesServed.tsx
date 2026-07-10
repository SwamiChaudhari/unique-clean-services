"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
  type LucideIcon,
} from "lucide-react";
import { industries } from "@/config/industries";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function IndustriesServed() {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-orange font-semibold text-sm tracking-wider uppercase mb-3">
            Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-[family-name:var(--font-poppins)]">
            One Partner for Every Space
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            From homes to high-rises, hospitals to factories — professional
            cleaning & facility management tailored to your industry.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {industries.map((ind) => {
            const Icon = iconMap[ind.icon] || Building2;
            return (
              <motion.div
                key={ind.id}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl border border-border p-6 transition-all duration-300 hover:border-teal/30 hover:shadow-card"
              >
                <div className="w-12 h-12 bg-teal-light rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{ind.title}</h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">
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
              </motion.div>
            );
          })}
        </motion.div>

        <div className="text-center mt-10">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-bold px-8 py-4 rounded-xl transition-all hover:shadow-lg"
          >
            Explore All Industries
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
