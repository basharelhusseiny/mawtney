"use client";

import { DictProps } from "@/types/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: (value: boolean) => void;
  dict: DictProps["dict"];
  locale: string;
}

const MobileMenu = ({ isOpen, onClose, dict, locale }: MobileMenuProps) => {
  const pathname = usePathname();

  const isActive = (href: string) =>
    (pathname === `/${locale}` && href === "/") ||
    pathname === `/${locale}${href}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-49 top-[74px] bg-[#1a1a2e]/30 backdrop-blur-sm"
            onClick={() => onClose(false)}
          />

          {/* ── Drawer ── */}
          <motion.div
            key="drawer"
            initial={{ x: "-100%", opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0.5 }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed top-[74px] inset-e-0 z-50 h-[calc(100dvh-74px)] w-[300px] flex flex-col
              bg-white border-s border-[#e8e8f0] shadow-[4px_0_40px_rgba(213,51,54,0.10)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top accent stripe */}
            <div className="h-1 bg-linear-to-r from-[#d53336] via-[#f2555a] to-[#d53336]" />

            {/* Logo row inside drawer */}
            <div className="px-5 pt-5 pb-3 flex items-center gap-3 border-b border-[#e8e8f0]">
              <Image
                src="/logo/mawteny-main-logo-trans.png"
                alt="Mawtney"
                width={44}
                height={38}
                className="h-auto w-auto object-contain"
              />
              <div className="w-px h-6 bg-[#e8e8f0]" />
              <span className="text-xs font-semibold text-[#8b8ba8] uppercase tracking-widest">
                Navigation
              </span>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-1 p-4 flex-1 overflow-y-auto">
              {NAV_LINKS.map((link, i) => {
                const active = isActive(link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.06,
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  >
                    <Link
                      href={`/${locale}${link.href === "/" ? "" : link.href}`}
                      onClick={() => onClose(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-base transition-all duration-300 ${
                        active
                          ? "bg-[#fde8e8] text-[#d53336] border border-[#d53336]/20"
                          : "text-[#4a4a6a] hover:text-[#d53336] hover:bg-[#fde8e8]/60"
                      }`}
                    >
                      {/* Active pill indicator */}
                      <span
                        className={`shrink-0 rounded-full transition-all duration-300 ${
                          active
                            ? "w-2 h-2 bg-[#d53336]"
                            : "w-1.5 h-1.5 bg-[#d0d0e0]"
                        }`}
                      />
                      {dict.nav[link.key as keyof typeof dict.nav]}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Bottom decorative bar */}
            <div className="h-1 bg-linear-to-r from-transparent via-[#d53336]/30 to-transparent" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
