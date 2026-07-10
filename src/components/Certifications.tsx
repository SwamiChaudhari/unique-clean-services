"use client";

import { motion } from "framer-motion";
import {
  Award,
  Leaf,
  ShieldCheck,
  BadgeCheck,
  Anchor,
  UtensilsCrossed,
  FlaskConical,
  FileCheck,
  type LucideIcon,
} from "lucide-react";
import { certifications } from "@/config/certifications";

const iconMap: Record<string, LucideIcon> = {
  Award,
  Leaf,
  ShieldCheck,
  BadgeCheck,
  Anchor,
  UtensilsCrossed,
  FlaskConical,
  FileCheck,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Certifications() {
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
            Certifications &amp; Compliance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-[family-name:var(--font-poppins)]">
            Certified, Insured &amp; Compliant
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Quality, safety, and environmental standards you can verify — because
            trust is built on proof.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {certifications.map((cert) => {
            const Icon = iconMap[cert.icon] || Award;
            return (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl border border-border p-6 text-center hover:border-emerald/30 hover:shadow-card transition-all duration-300"
              >
                <div className="w-14 h-14 bg-emerald-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-emerald" />
                </div>
                <h3 className="font-bold text-navy text-sm mb-1.5 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
