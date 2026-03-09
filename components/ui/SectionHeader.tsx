"use client";

import { SectionHeaderProps } from "@/types/ui";
import { motion } from "framer-motion";

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col items-center text-center mb-12 md:mb-16 px-4">
      {/* ── Eyebrow pill ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="inline-flex items-center gap-2 bg-[#fde8e8] border border-[#d53336]/20
          rounded-full px-4 py-1.5 mb-4 sm:mb-5"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#d53336] animate-pulse" />
        <span className="text-[#d53336] text-xs font-bold uppercase tracking-widest">
          {title}
        </span>
      </motion.div>

      {/* ── Main title ── */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a1a2e] leading-tight max-w-3xl"
      >
        {title}
      </motion.h2>

      {/* ── Divider ── */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mt-4 sm:mt-5 h-1 w-22 rounded-full bg-linear-to-r from-[#ad2628] to-[#f77f83] origin-center"
      />

      {/* ── Description ── */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="mt-4 sm:mt-5 text-base sm:text-lg text-[#4a4a6a] max-w-2xl leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
