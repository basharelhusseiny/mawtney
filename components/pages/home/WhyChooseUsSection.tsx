"use client";

import { DictProps } from "@/types/constants";
import { SectionHeader } from "@/components/ui";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  CreditCard,
  HeadphonesIcon,
} from "lucide-react";

const CARD_ICONS = [ShieldCheck, TrendingUp, CreditCard, HeadphonesIcon];

const WhyChooseUsSection = ({ dict }: DictProps) => {
  const why = dict.why_choose_us;
  const cards = why.cards;

  const statsData = [
    {
      value: "+500",
      label:
        (why as { stats?: { clients?: string } }).stats?.clients ?? "عميل راضٍ",
    },
    {
      value: "+200",
      label:
        (why as { stats?: { properties?: string } }).stats?.properties ??
        "عقار مباع",
    },
    {
      value: "8+",
      label:
        (why as { stats?: { years?: string } }).stats?.years ?? "سنوات خبرة",
    },
    {
      value: "98%",
      label:
        (why as { stats?: { satisfaction?: string } }).stats?.satisfaction ??
        "نسبة رضا العملاء",
    },
  ];

  return (
    <section className="relative py-14 md:py-20 overflow-hidden bg-[#f7f7fb]">
      {/* ── Subtle background pattern ── */}
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
        <SectionHeader title={why.title} description={why.description} />

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const Icon = CARD_ICONS[index % CARD_ICONS.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.55,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative bg-white rounded-2xl p-6 flex flex-col gap-4
                  border border-[#e8e8f0]
                  shadow-[0_2px_16px_rgba(0,0,0,0.05)]
                  hover:shadow-[0_8px_32px_rgba(213,51,54,0.14)]
                  hover:border-[#d53336]/20
                  transition-colors duration-300 cursor-default overflow-hidden"
              >
                {/* Card number watermark */}
                <span
                  className="absolute top-4 inset-e-4 text-6xl font-black text-[#e8e8f0]
                    group-hover:text-[#fde8e8] transition-colors duration-300 leading-none select-none"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon circle */}
                <div
                  className="relative w-14 h-14 rounded-2xl bg-[#fde8e8]
                    group-hover:bg-[#d53336] transition-colors duration-300
                    flex items-center justify-center shrink-0"
                >
                  <Icon
                    className="w-8 h-8 text-[#d53336] group-hover:text-white
                      transition-colors duration-300"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3
                    className="text-lg sm:text-xl font-bold text-[#1a1a2e] group-hover:text-[#d53336]
                      transition-colors duration-300 leading-snug"
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-[#616186] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5
                    bg-linear-to-r from-transparent via-[#d53336]/50 to-transparent
                    scale-x-0 group-hover:scale-x-100
                    transition-transform duration-500 origin-center"
                />
              </motion.div>
            );
          })}
        </div>

        {/* ── Stats Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {statsData.map(({ value, label }) => (
            <div
              key={label}
              className="bg-white rounded-2xl px-6 py-5 text-center border border-[#e8e8f0]
                shadow-sm hover:shadow-[0_4px_20px_rgba(213,51,54,0.1)]
                hover:border-[#d53336]/20 transition-all duration-300"
            >
              <p className="text-3xl md:text-4xl font-extrabold text-[#d53336] leading-none mb-1">
                {value}
              </p>
              <p className="text-sm font-semibold text-[#7e7ea7]">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
