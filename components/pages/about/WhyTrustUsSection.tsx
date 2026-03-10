"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, TrendingUp, Headphones } from "lucide-react";
import { DictProps } from "@/types/constants";
import { SectionHeader } from "@/components/ui";

const TRUST_ICONS = [ShieldCheck, Users, TrendingUp, Headphones];

const WhyTrustUsSection = ({ dict, locale }: DictProps) => {
  const isRtl = locale === "ar";
  const data = dict.about_page.why_trust_us;

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-[#f7f7fb]">
      {/* ── Background ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #d53336 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#d53336] rounded-full opacity-[0.06] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c9a84c] rounded-full opacity-[0.06] blur-3xl pointer-events-none" />

      <div className="container mx-auto px-5 relative z-10">
        <SectionHeader title={data.title} description="" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-3">
          {data.items.map((item: string, i: number) => {
            const Icon = TRUST_ICONS[i % TRUST_ICONS.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative bg-white rounded-2xl p-6 border border-[#e8e8f0]
                  shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(213,51,54,0.12)]
                  hover:border-[#d53336]/25 transition-all duration-300 overflow-hidden"
              >
                {/* Number watermark */}
                <span className="absolute top-3 inset-e-4 text-7xl font-black text-[#f0f0f5] group-hover:text-[#fde8e8] transition-colors duration-300 select-none leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Accent left/right bar */}
                <div
                  className={`absolute top-0 bottom-0 w-1 bg-linear-to-b from-[#d53336] to-[#f2555a]
                    scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top
                    ${isRtl ? "right-0 rounded-r-2xl" : "left-0 rounded-l-2xl"}`}
                />

                <div
                  className={`relative flex items-start gap-4`}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl bg-[#fde8e8] group-hover:bg-[#d53336]
                      transition-colors duration-300 flex items-center justify-center shrink-0"
                  >
                    <Icon className="w-6 h-6 text-[#d53336] group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Text */}
                  <p
                    className={`text-lg font-bold text-[#4a4a6a] leading-relaxed pt-2 flex-1
                      ${isRtl ? "text-right" : "text-left"}`}
                  >
                    {item}
                  </p>
                </div>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#d53336]/40 to-transparent
                    scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUsSection;
