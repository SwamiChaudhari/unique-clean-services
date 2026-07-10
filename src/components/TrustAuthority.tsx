"use client";

import { motion } from "framer-motion";
import {
  Users,
  UserCheck,
  Wrench,
  Leaf,
  ShieldCheck,
  SearchCheck,
  Award,
  type LucideIcon,
} from "lucide-react";

const pillars: {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
  bg: string;
}[] = [
  {
    icon: Users,
    title: "Trained Staff",
    desc: "Professionally trained technicians in advanced cleaning techniques and equipment operation.",
    color: "text-blue",
    bg: "bg-blue-light",
  },
  {
    icon: UserCheck,
    title: "Background Verification",
    desc: "Police verification and reference checks for every field staff member — essential for homes, schools, and hospitals.",
    color: "text-emerald",
    bg: "bg-emerald-light",
  },
  {
    icon: Wrench,
    title: "Professional Equipment",
    desc: "Ride-on scrubbers, HEPA vacuums, water-fed poles, and ULV foggers for superior, efficient results.",
    color: "text-orange",
    bg: "bg-orange-light",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Chemicals",
    desc: "Biodegradable, non-toxic, Green-seal approved solutions safe for children, pets, and surfaces.",
    color: "text-teal",
    bg: "bg-teal-light",
  },
  {
    icon: ShieldCheck,
    title: "Safety Protocols",
    desc: "Risk assessments, method statements, PPE compliance, and MSDS-backed chemical handling on every site.",
    color: "text-navy",
    bg: "bg-navy-50",
  },
  {
    icon: SearchCheck,
    title: "Quality Control",
    desc: "Layered supervisor audits, checklists, and client sign-off ensure consistent, verifiable quality.",
    color: "text-gold",
    bg: "bg-orange-light",
  },
  {
    icon: Award,
    title: "Service Guarantee",
    desc: "Not satisfied? We re-clean free of charge. Your peace of mind is our priority, every single time.",
    color: "text-teal",
    bg: "bg-teal-light",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TrustAuthority() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-orange font-semibold text-sm tracking-wider uppercase mb-3">
            Trust &amp; Authority
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-[family-name:var(--font-poppins)]">
            Why Businesses &amp; Homes Trust Us
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Enterprise-grade standards applied to every job — from a 1BHK to a
            32-floor tower.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="bg-surface rounded-2xl p-6 border border-border/60 hover:shadow-card transition-all duration-300"
            >
              <div
                className={`w-11 h-11 ${p.bg} rounded-xl flex items-center justify-center mb-4`}
              >
                <p.icon className={`w-5 h-5 ${p.color}`} />
              </div>
              <h3 className="font-bold text-navy text-base mb-1.5">{p.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
