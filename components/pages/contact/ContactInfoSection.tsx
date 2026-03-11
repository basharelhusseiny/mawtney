"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ExternalLink,
  Share2,
} from "lucide-react";
import { DictProps } from "@/types/constants";
import { FOOTER_SOCIAL_LINKS } from "@/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  phone: Phone,
  mail: Mail,
  "map-pin": MapPin,
  clock: Clock,
};

const ContactInfoSection = ({ dict, locale }: DictProps) => {
  const isRtl = locale === "ar";
  const info = dict.contact_page.info;
  const whatsapp = dict.contact_page.whatsapp;

  return (
    <div className="flex flex-col gap-6">
      {/* Info card */}
      <div className="relative bg-[#1a1a2e] rounded-3xl overflow-hidden border border-white/10">
        {/* Texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-[#d53336]/50 to-transparent" />
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#d53336] rounded-full opacity-[0.07] blur-[60px] pointer-events-none" />

        <div className="relative p-8">
          {/* Title */}
          <div className="flex items-center gap-3 mb-7">
            <div className="w-8 h-px bg-[#d53336]" />
            <h3 className="text-white font-extrabold text-lg">{info.title}</h3>
          </div>

          {/* Items */}
          <div className="space-y-4">
            {info.items.map(
              (
                item: {
                  icon: string;
                  label: string;
                  value: string;
                  value2?: string;
                  href: string | null;
                },
                i: number,
              ) => {
                const Icon = ICON_MAP[item.icon] || Phone;
                const content = (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.45 }}
                    className={`group flex items-center gap-4 p-4 rounded-2xl border border-white/5 hover:border-[#d53336]/30 hover:bg-white/5 transition-all duration-300 ${item.href ? "cursor-pointer" : "cursor-default"} ${isRtl ? "flex-row-reverse" : ""}`}
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#d53336]/15 group-hover:bg-[#d53336]/25 border border-[#d53336]/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-[#d53336]" />
                    </div>
                    <div
                      className={`flex-1 min-w-0 ${isRtl ? "text-right" : ""}`}
                    >
                      <p className="text-xs font-bold text-white/40 uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-white font-semibold text-sm truncate">
                        {item.icon === "phone" ? (
                          <bdi dir="ltr">{item.value}</bdi>
                        ) : (
                          item.value
                        )}
                      </p>
                      {item.value2 && (
                        <p className="text-white font-semibold text-sm truncate">
                          {item.icon === "phone" ? (
                            <bdi dir="ltr">{item.value2}</bdi>
                          ) : (
                            item.value2
                          )}
                        </p>
                      )}
                    </div>
                    {item.href && (
                      <ExternalLink className="w-3.5 h-3.5 text-white/20 group-hover:text-[#d53336]/60 shrink-0 transition-colors duration-300" />
                    )}
                  </motion.div>
                );

                return item.href ? (
                  <Link
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content}
                  </Link>
                ) : (
                  <div key={i}>{content}</div>
                );
              },
            )}
          </div>
        </div>
      </div>

      {/* WhatsApp CTA card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link href={whatsapp.href} target="_blank" rel="noopener noreferrer">
          <div className="group relative rounded-3xl overflow-hidden cursor-pointer">
            {/* Green gradient BG */}
            <div className="absolute inset-0 bg-linear-to-br from-[#25D366] to-[#128C7E]" />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="absolute top-0 inset-x-0 h-px bg-white/30" />
            {/* Hover glow */}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />

            <div
              className={`relative p-6 flex items-center gap-5 ${isRtl ? "flex-row-reverse" : ""}`}
            >
              {/* WhatsApp icon */}
              <div className="w-14 h-14 rounded-2xl bg-white/20 group-hover:bg-white/30 transition-colors duration-300 flex items-center justify-center shrink-0">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <div className={`flex-1 ${isRtl ? "text-right" : ""}`}>
                <p className="text-white font-extrabold text-base">
                  {whatsapp.label}
                </p>
                <p className="text-white/75 text-sm font-medium mt-0.5">
                  {whatsapp.description}
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/20 group-hover:bg-white/30 flex items-center justify-center shrink-0 transition-colors duration-300">
                <ExternalLink className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Social Media Links */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="relative bg-white rounded-3xl overflow-hidden border border-[#e8e8f0] shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
          {/* Top gradient border */}
          <div className="h-1 bg-linear-to-r from-[#d53336] via-[#f2555a] to-[#c9a84c]" />

          {/* Texture */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #d53336 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative p-6">
            {/* Title */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-xl bg-linear-to-br from-[#d53336]/10 to-[#c9a84c]/10 flex items-center justify-center">
                <Share2 className="w-4 h-4 text-[#d53336]" />
              </div>
              <h3 className="text-[#1a1a2e] font-extrabold text-lg">
                {locale === "ar"
                  ? "تابعنا على"
                  : locale === "tr"
                    ? "Bizi Takip Edin"
                    : "Follow Us"}
              </h3>
            </div>

            {/* Social Links Grid */}
            <div className="grid grid-cols-3 gap-3">
              {FOOTER_SOCIAL_LINKS.map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div
                        className={`relative flex flex-col items-center gap-2 p-4 rounded-2xl border border-[#e8e8f0] bg-white hover:border-[#d53336]/30 hover:shadow-[0_8px_24px_-12px_rgba(213,51,54,0.15)] transition-all duration-300 ${social.hoverClass}`}
                      >
                        {/* Icon Container */}
                        <div className="w-12 h-12 rounded-xl bg-gray-100 group-hover:bg-white flex items-center justify-center transition-colors duration-300">
                          <Icon className="w-6 h-6 text-gray-600 group-hover:text-[#d53336] transition-colors duration-300" />
                        </div>

                        {/* Label */}
                        <span className="text-xs font-bold text-gray-600 group-hover:text-[#1a1a2e] transition-colors duration-300">
                          {social.label}
                        </span>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#d53336]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactInfoSection;
