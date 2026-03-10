"use client";

import { motion } from "framer-motion";
import { Clock, Globe, CalendarDays, Sparkles, MapPin } from "lucide-react";
import { DictProps } from "@/types/constants";

const STAT_ICONS = [Clock, CalendarDays, Globe, MapPin];

export default function ContactHeroSection({ dict, locale }: DictProps) {
  const isRtl = locale === "ar";
  const data = dict.contact_page.hero;

  return (
    <section className="relative py-12 overflow-hidden bg-linear-to-br from-[#fbfbfd] via-white to-[#f8f9ff]">
      {/* ── Enhanced Animated Background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: "radial-gradient(#d53336 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating Orbs */}
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 right-10 w-100 h-100 bg-linear-to-br from-[#d53336]/12 via-[#f2555a]/8 to-transparent rounded-full blur-[80px]"
        />
        <motion.div
          animate={{
            x: [0, -15, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-10 left-10 w-87.5 h-87.5 bg-linear-to-tr from-[#c9a84c]/6 via-[#d53336]/4 to-transparent rounded-full blur-[80px]"
        />

        {/* Decorative Lines */}
        <div className="absolute top-1/4 left-0 w-24 h-px bg-linear-to-r from-transparent via-[#d53336]/15 to-transparent" />
        <div className="absolute top-3/4 right-0 w-32 h-px bg-linear-to-l from-transparent via-[#c9a84c]/15 to-transparent" />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div
          className={`flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8`}
        >
          {/* ── Enhanced Text Content ── */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 flex flex-col max-w-lg"
          >
            {/* Enhanced Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl font-black leading-[1.1] text-[#1a1a2e] tracking-tight mb-3"
            >
              {data.title}{" "}
              <span className="relative">
                <span className="absolute inset-0 bg-linear-to-r from-[#d53336] via-[#f2555a] to-[#d53336] bg-clip-text text-transparent blur-sm opacity-50">
                  {data.title_accent}
                </span>
                <span className="relative bg-linear-to-r from-[#d53336] via-[#f2555a] to-[#d53336] bg-clip-text text-transparent">
                  {data.title_accent}
                </span>
              </span>
            </motion.h1>

            {/* Enhanced Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-lg text-[#4a4a6a] leading-relaxed max-w-md font-semibold mb-4"
            >
              {data.description}
            </motion.p>
          </motion.div>

          {/* ── Enhanced Stats Grid ── */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="grid grid-cols-2 gap-2 sm:gap-3 w-full lg:w-auto shrink-0 max-w-xs lg:max-w-none"
          >
            {data.stats.map(
              (stat: { value: string; label: string }, i: number) => {
                const Icon = STAT_ICONS[i % STAT_ICONS.length];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                    whileHover={{
                      y: -4,
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                    className="group relative bg-white/95 backdrop-blur-sm border border-[#e8e8f0] rounded-xl p-3 sm:p-3.5 transition-all duration-300 hover:border-[#d53336]/30 hover:shadow-[0_12px_24px_-8px_rgba(213,51,54,0.15)] min-w-25 overflow-hidden"
                  >
                    {/* Animated Background Gradient */}
                    <motion.div
                      className="absolute inset-0 bg-linear-to-br from-[#d53336]/4 via-[#f2555a]/2 to-[#c9a84c]/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />

                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="relative w-9 h-9 rounded-xl bg-linear-to-br from-[#fde8e8] to-[#fef2f2] text-[#d53336] flex items-center justify-center group-hover:bg-linear-to-br group-hover:from-[#d53336] group-hover:via-[#f2555a] group-hover:to-[#b01f22] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md mb-2 mx-auto"
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </motion.div>

                    {/* Stats Content */}
                    <div className="relative text-center">
                      <motion.p
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.6 + i * 0.08,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className="text-lg sm:text-xl font-black text-[#1a1a2e] leading-none mb-1"
                      >
                        {stat.value}
                      </motion.p>
                      <p className="text-[10px] font-bold text-[#4a4a6a] uppercase tracking-wider opacity-80">
                        {stat.label}
                      </p>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-linear-to-br from-[#d53336]/6 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                );
              },
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
