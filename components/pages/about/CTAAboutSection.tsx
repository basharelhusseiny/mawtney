"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { DictProps } from "@/types/constants";
import Link from "next/link";

const CTAAboutSection = ({ dict, locale }: DictProps) => {
  const isRtl = locale === "ar";
  const data = dict.about_page.cta;
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="relative py-14 md:py-18 overflow-hidden bg-white">
      <div className="container mx-auto px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* ── Dark background ── */}
          <div className="absolute inset-0 bg-[#1a1a2e]" />

          {/* ── Glow effects ── */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#d53336] rounded-full opacity-[0.20] blur-[80px]" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#c9a84c] rounded-full opacity-[0.15] blur-[80px]" />

          {/* ── Top accent line ── */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#d53336] via-[#f2555a] to-[#c9a84c]" />

          {/* ── Background pattern ── */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff 2px, transparent 2px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* ── Content ── */}
          <div className="relative px-8 md:px-14 lg:px-20 py-14 md:py-16 flex flex-col items-center text-center gap-6">
            {/* Icon badge */}
            <div className="w-16 h-16 rounded-2xl bg-[#d53336]/20 border border-[#d53336]/30 flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-[#d53336]" />
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl">
              {data.title}
            </h2>

            {/* Description */}
            <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
              {data.description}
            </p>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={`/${locale}/contact`}
                className="mt-2 inline-flex items-center gap-3 px-8 py-4 rounded-2xl
                  bg-[#d53336] hover:bg-[#b01f22] text-white text-base font-bold
                  shadow-[0_4px_24px_rgba(213,51,54,0.45)] hover:shadow-[0_8px_40px_rgba(213,51,54,0.55)]
                  transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{isRtl ? "تواصل معنا الآن" : "Contact Us Now"}</span>
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* ── Decorative dots ── */}
            <div className="flex items-center gap-2 mt-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#d53336]" />
              <div className="w-8 h-px bg-[#d53336]/30" />
              <div className="w-2 h-2 rounded-full bg-[#c9a84c]" />
              <div className="w-8 h-px bg-[#d53336]/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#d53336]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAAboutSection;
