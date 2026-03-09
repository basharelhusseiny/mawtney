"use client";

import { DictProps } from "@/types/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/ui";
import { Scale, CheckCircle2 } from "lucide-react";

const RealEstateLawsSection = ({ dict, locale }: DictProps) => {
  const isRtl = locale === "ar";
  const data = dict.real_estate_laws;

  return (
    <section className="relative py-14 md:py-20 overflow-hidden bg-[#f7f7fb]">
      {/* ── Subtle background ── */}
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

        <div
          className={`flex flex-col lg:flex-row items-stretch gap-0 rounded-3xl overflow-hidden
            shadow-[0_8px_60px_rgba(213,51,54,0.10)] border border-[#e8e8f0]
            ${isRtl ? "lg:flex-row" : "lg:flex-row-reverse"}`}
        >
          {/* ── Image Side ── */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative lg:w-[45%] min-h-[300px] lg:min-h-[560px] shrink-0 overflow-hidden"
          >
            <Image
              src="/hero/hero-img (3).jpg"
              alt={data.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />

            {/* Overlay gradient */}
            <div
              className={`absolute inset-0 bg-linear-to-${isRtl ? "r" : "l"}
                from-[#d53336]/30 via-transparent to-transparent`}
            />

            {/* ── Floating badge ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className={`absolute bottom-6 ${isRtl ? "right-6" : "left-6"}
                bg-white/95 backdrop-blur-sm rounded-2xl p-4
                shadow-[0_4px_24px_rgba(213,51,54,0.18)]
                border border-[#fde8e8] flex items-center gap-3`}
            >
              <div className="w-10 h-10 rounded-xl bg-[#fde8e8] flex items-center justify-center shrink-0">
                <Scale className="w-5 h-5 text-[#d53336]" />
              </div>
              <div className={isRtl ? "text-right" : "text-left"}>
                <p className="text-sm font-semibold text-[#8b8ba8] leading-none mb-1">
                  {isRtl ? "معتمد قانونياً" : "Legally Certified"}
                </p>
                <p className="font-extrabold text-[#1a1a2e] leading-tight">
                  {isRtl ? "100% أمان قانوني" : "100% Legal Security"}
                </p>
              </div>
            </motion.div>

            {/* ── Year badge ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65, duration: 0.4 }}
              className={`absolute top-6 ${isRtl ? "left-6" : "right-6"}
                bg-[#d53336] rounded-2xl px-4 py-3 text-center
                shadow-[0_4px_20px_rgba(213,51,54,0.4)]`}
            >
              <p className="text-2xl font-extrabold text-white leading-none">
                8+
              </p>
              <p className="text-sm font-bold text-white/80 mt-0.5">
                {isRtl ? "سنوات خبرة" : "Years Exp."}
              </p>
            </motion.div>
          </motion.div>

          {/* ── Text Side ── */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className={`flex-1 bg-white p-8 md:p-10 lg:p-14 flex flex-col justify-center gap-6
              ${isRtl ? "text-right" : "text-left"}`}
          >
            {/* Eyebrow */}
            <div
              className={`inline-flex items-center gap-2 self-start ${
                isRtl ? "flex-row-reverse self-end lg:self-start" : ""
              }`}
            >
              <div className="w-8 h-0.5 rounded-full bg-[#d53336]" />
              <span className="text-[#d53336] text-lg sm:text-xl font-bold uppercase tracking-widest">
                {isRtl ? "معلومات قانونية" : "Legal Info"}
              </span>
            </div>

            {/* Paragraphs */}
            <div className="flex flex-col gap-5">
              {data.paragraphs.map((para, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.15 + i * 0.1,
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                  className={`flex gap-3`}
                >
                  {/* Bullet */}
                  <CheckCircle2 className="w-5 h-5 text-[#d53336] shrink-0 mt-1" />
                  <p className="sm:text-lg font-medium text-[#4a4a6a] leading-relaxed">
                    {para}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* ── Bottom accent strip ── */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className={`mt-2 h-1 rounded-full bg-linear-to-r from-[#d53336] to-[#f2555a] w-20
                ${isRtl ? "origin-right" : "origin-left"}`}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RealEstateLawsSection;
