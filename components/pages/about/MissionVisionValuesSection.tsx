"use client";

import { motion } from "framer-motion";
import { Target, Eye, Diamond, CheckCircle2 } from "lucide-react";
import { DictProps } from "@/types/constants";
import { SectionHeader } from "@/components/ui";

const MissionVisionValuesSection = ({ dict, locale }: DictProps) => {
  const isRtl = locale === "ar";
  const data = dict.about_page;

  const cards = [
    {
      icon: Target,
      title: data.mission.title,
      description: data.mission.description,
      color: "text-[#d53336]",
      bgGlow: "from-[#d53336]/10 to-transparent",
      iconBg: "bg-[#d53336]/10",
      borderColor: "group-hover:border-[#d53336]/30",
      delay: 0.1,
    },
    {
      icon: Eye,
      title: data.vision.title,
      description: data.vision.description,
      color: "text-[#c9a84c]",
      bgGlow: "from-[#c9a84c]/10 to-transparent",
      iconBg: "bg-[#c9a84c]/10",
      borderColor: "group-hover:border-[#c9a84c]/30",
      delay: 0.2,
    },
  ];

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-[#fbfbfd]">
      {/* ── Background decoration ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(#1a1a2e 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-linear-to-bl from-[#d53336]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-linear-to-tr from-[#c9a84c]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-5 relative z-10 max-w-6xl">
        {/* ── Section Header ── */}
        <SectionHeader
          title={
            isRtl
              ? "نصنع الفارق في سوق العقارات"
              : "Making a Difference in Real Estate"
          }
          description=""
        />

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-10">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: card.delay }}
              className={`group relative overflow-hidden rounded-4xl bg-white p-8 sm:p-10 border border-[#e8e8f0]
                shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]
                transition-all duration-500 hover:-translate-y-1 ${card.borderColor}`}
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${card.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div
                    className={`w-16 h-16 rounded-2xl ${card.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <card.icon className={`w-8 h-8 ${card.color}`} />
                  </div>
                  <div
                    className={`w-12 h-12 rounded-full border border-gray-100 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform ${isRtl ? "-translate-x-4 group-hover:translate-x-0" : "translate-x-4 group-hover:translate-x-0"}`}
                  >
                    <svg
                      className={`w-5 h-5 ${card.color} ${isRtl ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>

                <h3
                  className={`text-2xl sm:text-3xl font-extrabold text-[#1a1a2e] mb-4`}
                >
                  {card.title}
                </h3>

                <p
                  className={`text-[#4a4a6a] text-base sm:text-lg leading-relaxed font-medium mt-auto`}
                >
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Values Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-[#1a1a2e] p-8 sm:p-12 lg:p-16 border border-[#2a2a4a] shadow-2xl"
        >
          {/* Inner dark background decor */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#d53336] rounded-full blur-[100px]" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#c9a84c] rounded-full blur-[100px]" />
          </div>

          <div
            className={`relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${isRtl ? "text-right lg:text-right" : "text-left"}`}
          >
            {/* Left side title */}
            <div className="lg:col-span-4 flex flex-col items-start">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md mb-6">
                <Diamond className="w-8 h-8 text-[#c9a84c]" />
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                {data.values.title}
              </h3>
              <div className="h-1 w-20 rounded-full bg-linear-to-r from-[#d53336] to-[#c9a84c]" />
            </div>

            {/* Right side items */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {data.values.items.map((item: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + 0.1 * i, duration: 0.4 }}
                    className="group flex flex-col gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#c9a84c]/30 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#c9a84c]/20 to-transparent border border-[#c9a84c]/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle2 className="w-5 h-5 text-[#c9a84c]" />
                      </div>
                      <span className="text-lg font-bold text-white leading-tight">
                        {item}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVisionValuesSection;
