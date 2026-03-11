"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, Star } from "lucide-react";
import { DictProps } from "@/types/constants";

const HeroAboutSection = ({ dict, locale }: DictProps) => {
  const data = dict.about_page.hero;

  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-[#1a1a2e]">
      {/* ── Dynamic Animated Background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle grid pattern for texture */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Animated Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[20%] -right-[10%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-linear-to-br from-[#d53336] to-[#f2555a] rounded-full opacity-[0.12] blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-[20%] -left-[10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-linear-to-tr from-[#c9a84c] to-[#e5c97b] rounded-full opacity-[0.08] blur-[100px]"
        />
      </div>

      {/* ── Top/Bottom Gradient borders ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#d53336]/40 to-transparent" />

      <div className="container mx-auto px-5 relative z-10 py-16 md:py-20">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* ── Main Title ── */}
          <div className="relative mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold"
            >
              <span className="block text-white mb-2 drop-shadow-md">
                {locale === "ar"
                  ? "موطني العقارية"
                  : locale === "tr"
                    ? "Mawtney Gayrimenkul"
                    : "Mawtney Real Estate"}
              </span>
              <span className="block bg-linear-to-r from-[#d53336] via-[#e77377] to-[#d53336] bg-clip-text text-transparent pb-2 drop-shadow-sm">
                {locale === "ar"
                  ? "شريكك في عالم العقارات التركية"
                  : locale === "tr"
                    ? "Türkiye Gayrimenkul Sektöründe Partneriniz"
                    : "Your Partner in Turkish Real Estate"}
              </span>
            </motion.h1>
          </div>

          {/* ── Divider ── */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-16 sm:w-24 bg-linear-to-r from-transparent to-[#d53336]" />
            <div className="w-2 h-2 rounded-full bg-[#c9a84c] shadow-[0_0_10px_#c9a84c]" />
            <div className="h-px w-16 sm:w-24 bg-linear-to-l from-transparent to-[#d53336]" />
          </motion.div>

          {/* ── Description ── */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl font-medium mb-12"
          >
            {data.description}
          </motion.p>

          {/* ── Stats Glassmorphic Cards ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full"
          >
            {[
              {
                icon: Building2,
                value: "+200",
                label:
                  locale === "ar"
                    ? "عقار مباع"
                    : locale === "tr"
                      ? "Satılan Projeler"
                      : "Properties Sold",
                color: "from-[#d53336]/20 to-[#f2555a]/5",
                iconColor: "text-[#d53336]",
                borderColor: "border-[#d53336]/30",
              },
              {
                icon: Star,
                value: "8+",
                label:
                  locale === "ar"
                    ? "سنوات خبرة"
                    : locale === "tr"
                      ? "Yıl Deneyim"
                      : "Years Exp.",
                color: "from-[#c9a84c]/20 to-[#e5c97b]/5",
                iconColor: "text-[#c9a84c]",
                borderColor: "border-[#c9a84c]/30",
              },
              {
                icon: MapPin,
                value: "Gokevker Mah",
                label: "Beykent Istanbul Turkey",
                color: "from-white/10 to-white/5",
                iconColor: "text-white",
                borderColor: "border-white/20",
                className: "col-span-2 md:col-span-1", // Spans full width on small screens if 3rd odd item
              },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className={`group relative overflow-hidden rounded-3xl bg-white/2 border border-white/5 backdrop-blur-xl p-4 transition-all duration-300 hover:-translate-y-2 hover:bg-white/4 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.5)] hover:border-white/10 ${
                    stat.className || ""
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${stat.borderColor} bg-black/20 shadow-inner overflow-hidden group-hover:scale-110 transition-transform duration-500`}
                    >
                      <Icon
                        className={`w-6 h-6 ${stat.iconColor} drop-shadow-lg`}
                      />
                    </div>

                    <div className="text-center">
                      <p className="text-3xl sm:text-4xl font-black text-white mb-1 tracking-tight drop-shadow-md">
                        {stat.value}
                      </p>
                      <p className="text-sm font-semibold text-white/50 uppercase tracking-wider group-hover:text-white/70 transition-colors">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroAboutSection;
