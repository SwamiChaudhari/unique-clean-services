"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Truck,
  SprayCan,
  Wind,
  Droplets,
  CloudFog,
  Flame,
  Disc,
  Sun,
  Anchor,
  Leaf,
  type LucideIcon,
} from "lucide-react";
import { equipment } from "@/config/equipment";

const iconMap: Record<string, LucideIcon> = {
  Truck,
  SprayCan,
  Wind,
  Droplets,
  CloudFog,
  Flame,
  Disc,
  Sun,
  Anchor,
  Leaf,
};

const categoryColor: Record<string, string> = {
  Machines: "text-blue bg-blue-light",
  Sanitation: "text-teal bg-teal-light",
  Access: "text-orange bg-orange-light",
  Tools: "text-gold bg-orange-light",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function EquipmentSection() {
  return (
    <section className="py-16 lg:py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-teal rounded-full blur-[100px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-teal font-semibold text-sm tracking-wider uppercase mb-3">
            Professional Equipment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-[family-name:var(--font-poppins)]">
            Industrial-Grade Machinery, Not Mops
          </h2>
          <p className="text-white/70 mt-3 max-w-2xl mx-auto">
            We invest in the right equipment for every surface and scale — from
            ride-on scrubbers to IRATA rope-access gear.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {equipment.map((item) => {
            const Icon = iconMap[item.icon] || SprayCan;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-teal" />
                  </div>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${categoryColor[item.category] || "text-white bg-white/10"}`}
                  >
                    {item.category}
                  </span>
                </div>
                <h3 className="font-bold text-white text-base mb-1.5">
                  {item.name}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
