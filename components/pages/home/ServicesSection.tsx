"use client";

import { SectionHeader } from "@/components/ui";
import { DictProps } from "@/types/constants";
import { motion } from "framer-motion";
import { Home, Globe, TrendingUp, Building2, Check } from "lucide-react";

const SERVICE_ICONS = [Home, Globe, TrendingUp, Building2];

const ServicesSection = ({ dict, locale }: DictProps) => {
  const isRtl = locale === "ar";
  const data = dict.services_section;
  const services = data.services;

  return (
    <section className="relative py-14 md:py-20 overflow-hidden bg-[#f7f7fb]">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.1]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #d53336 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* ── Corner glows ── */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#d53336] rounded-full opacity-[0.1] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#d53336] rounded-full opacity-[0.1] blur-3xl pointer-events-none" />
      <div className="container mx-auto px-5 relative z-10">
        {/* ── Section Header ── */}
        <SectionHeader title={data.title} description={data.description} />

        {/* ── Compact Grid Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mt-10 md:mt-12">
          {services.map((service, index) => {
            const Icon = SERVICE_ICONS[index % SERVICE_ICONS.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="group relative bg-white rounded-2xl p-5 md:p-6 lg:p-7 border border-[#e8e8f0]
                  shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(213,51,54,0.08)]
                  hover:border-[#d53336]/30 transition-all duration-300 flex flex-col"
              >
                {/* Accent line on hover */}
                <div
                  className={`absolute top-0 bottom-0 w-1 bg-linear-to-b from-[#d53336] to-[#f2555a]
                  scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top
                  ${isRtl ? "right-0 rounded-r-2xl" : "left-0 rounded-l-2xl"}`}
                />

                {/* ── Header: Icon + Title ── */}
                <div className={`flex items-center gap-3 mb-3`}>
                  <div className="w-12 h-12 rounded-xl bg-[#fde8e8] group-hover:bg-[#d53336] transition-colors duration-300 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#d53336] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3
                    className={`text-lg sm:text-xl font-bold text-[#1a1a2e] flex-1 ${isRtl ? "text-right" : "text-left"}`}
                  >
                    {service.name}
                  </h3>
                </div>

                {/* ── Description ── */}
                <p
                  className={`text-sm sm:text-base text-[#616186] leading-relaxed mb-5 flex-1 font-semibold ${isRtl ? "text-right" : "text-left"}`}
                >
                  {service.description}
                </p>

                {/* ── Items Box ── */}
                <div className="bg-[#fbfbfd] rounded-xl p-4 border border-[#f3f3f8]">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4">
                    {service.items.map((item, idx) => (
                      <li key={idx} className={`flex items-start gap-2`}>
                        <div className="w-5 h-5 rounded-full bg-[#fde8e8] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-[#d53336]" />
                        </div>
                        <span
                          className={`text-sm font-bold text-[#1a1a2e] leading-snug`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
