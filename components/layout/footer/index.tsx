"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Building2 } from "lucide-react";
import { DictProps } from "@/types/constants";
import { NAV_LINKS } from "@/constants";
import {
  FOOTER_SOCIAL_LINKS,
  FOOTER_CONTACT_ITEMS,
  FOOTER_NAV_ICONS,
} from "@/constants";

// ── Animation variants ──
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Footer = ({ dict, locale = "ar" }: DictProps) => {
  const isRtl = locale === "ar";
  const t = dict.footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-[#1a1a2e] overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* ── Top gradient border ── */}
      <div className="h-1 bg-linear-to-r from-[#d53336] via-[#f2555a] to-[#c9a84c]" />

      {/* ── Background decorative layers ── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, #d53336 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, #c9a84c 0%, transparent 40%)
          `,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Main content ── */}
      <motion.div
        className="relative container mx-auto px-4 sm:px-6 pt-16 pb-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* ── Col 1: Brand + Social ── */}
          <motion.div
            variants={itemVariants}
            className="sm:col-span-2 lg:col-span-1 flex flex-col gap-5"
          >
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-3 group w-fit"
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-[#d53336]/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src="/logo/mawteny-main-logo-trans.png"
                  alt="Mawteny Logo"
                  width={80}
                  height={54}
                  className="relative h-auto w-auto object-contain filter brightness-0 invert"
                />
              </div>
            </Link>

            <p className="text-[#c4c4d6] text-sm leading-relaxed max-w-[270px]">
              {t.about}
            </p>

            <div className="flex flex-col gap-3">
              <span className="text-sm font-bold text-[#c4c4d6] uppercase tracking-widest">
                {t.follow_us}
              </span>
              <div className="flex items-center gap-2">
                {FOOTER_SOCIAL_LINKS.map(
                  ({ icon: Icon, href, label, hoverClass }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center
                      text-[#c4c4d6] hover:text-white ${hoverClass} hover:border-transparent
                      transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_16px_rgba(213,51,54,0.3)]`}
                    >
                      <Icon className="w-4 h-4" />
                    </Link>
                  ),
                )}
              </div>
            </div>
          </motion.div>

          {/* ── Col 2: Quick Links ── */}
          <motion.div variants={itemVariants} className="flex flex-col gap-5">
            <h3 className="text-white font-bold text-xl inline-flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-[#d53336] shrink-0" />
              {t.quick_links}
            </h3>
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map(({ key, href }) => {
                const Icon =
                  FOOTER_NAV_ICONS[key as keyof typeof FOOTER_NAV_ICONS];
                const label = dict.nav[key as keyof typeof dict.nav];
                return (
                  <Link
                    key={href}
                    href={`/${locale}${href === "/" ? "" : href}`}
                    className="group flex items-center gap-3 px-3 py-2.5 rounded-xl
                      text-[#c4c4d6] hover:text-white hover:bg-white/5
                      transition-all duration-200 font-semibold"
                  >
                    {Icon && (
                      <Icon className="w-4 h-4 text-[#d53336]/60 group-hover:text-[#d53336] transition-colors duration-200 shrink-0" />
                    )}
                    <span>{label}</span>
                    <ArrowUpRight
                      className={`w-3 h-3 opacity-0 group-hover:opacity-60 transition-all duration-200 ms-auto ${
                        isRtl ? "rotate-180" : ""
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>
          </motion.div>

          {/* ── Col 3: Services ── */}
          <motion.div variants={itemVariants} className="flex flex-col gap-5">
            <h3 className="text-white font-bold text-xl inline-flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-[#c9a84c] shrink-0" />
              {t.our_services}
            </h3>
            <ul className="flex flex-col gap-1">
              {t.services.map((service: string, i: number) => (
                <li key={i}>
                  <Link
                    href={`/${locale}/contact`}
                    className="group flex items-center gap-3 px-3 py-2.5 rounded-xl
                      text-[#c4c4d6] hover:text-white hover:bg-white/5
                      transition-all duration-200 font-semibold"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]/50 group-hover:bg-[#c9a84c] transition-colors duration-200 shrink-0 mt-0.5" />
                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Col 4: Contact ── */}
          <motion.div variants={itemVariants} className="flex flex-col gap-5">
            <h3 className="text-white font-bold text-xl inline-flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-[#d53336] shrink-0" />
              {t.contact_us}
            </h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_CONTACT_ITEMS.map(
                ({ icon: Icon, key, href, isExternal }) => (
                  <li key={key}>
                    <Link
                      href={href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="group flex items-start gap-3 text-[#c4c4d6] hover:text-white transition-colors duration-200"
                    >
                      <div
                        className="w-8 h-8 rounded-lg bg-[#d53336]/10 border border-[#d53336]/20 flex items-center justify-center shrink-0
                      group-hover:bg-[#d53336]/20 group-hover:border-[#d53336]/40 transition-all duration-200"
                      >
                        <Icon className="w-4 h-4 text-[#d53336]" />
                      </div>
                      <span className="pt-1.5 font-semibold leading-snug">
                        {t.contact[key]}
                      </span>
                    </Link>
                  </li>
                ),
              )}
            </ul>

            <Link
              href={`/${locale}/contact`}
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl
                bg-[#d53336] hover:bg-[#b01f22] text-white text-sm font-bold w-fit
                transition-all duration-300 hover:shadow-[0_4px_20px_rgba(213,51,54,0.4)]
                hover:-translate-y-0.5 active:translate-y-0"
            >
              <Building2 className="w-4 h-4" />
              {t.cta}
            </Link>
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <div className="relative my-8">
          <div className="h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2">
            <div className="flex items-center gap-2 bg-[#1a1a2e] px-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#d53336]" />
              <div className="w-6 h-px bg-[#d53336]/40" />
              <div className="w-2 h-2 rounded-full bg-[#c9a84c]" />
              <div className="w-6 h-px bg-[#d53336]/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#d53336]" />
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-between gap-3 sm:text-lg text-gray-400 font-semibold ${
            isRtl ? "sm:flex-row-reverse" : ""
          }`}
        >
          <span>
            © {currentYear} {t.rights}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-[#d53336]" />
            {t.developedBy}
            <span className="w-1 h-1 rounded-full bg-[#d53336]" />
          </span>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
