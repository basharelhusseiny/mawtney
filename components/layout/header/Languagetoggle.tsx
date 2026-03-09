"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, Globe } from "lucide-react";

import { Locale } from "@/types/constants";
import { LOCALES } from "@/constants";

const LanguageToggle = ({ locale }: { locale: Locale }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const switchLocale = (targetLocale: string) => {
    if (targetLocale === locale) {
      setIsOpen(false);
      return;
    }
    const newPath = pathname.replace(`/${locale}`, `/${targetLocale}`);
    setIsOpen(false);
    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <div ref={ref} className="relative" aria-label="Language switcher">
      {/* ── Trigger Button ── */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        disabled={isPending}
        whileTap={{ scale: 0.96 }}
        className={`
          flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 h-10
          rounded-xl border transition-all duration-300 text-sm sm:text-base font-bold
          ${
            isOpen
              ? "bg-[#d53336] text-white border-[#d53336] shadow-[0_4px_14px_rgba(213,51,54,0.35)]"
              : "bg-white text-[#4a4a6a] border-[#e8e8f0] hover:border-[#d53336]/40 hover:text-[#d53336] hover:shadow-[0_2px_12px_rgba(213,51,54,0.10)] shadow-sm"
          }
          ${isPending ? "cursor-wait opacity-60" : "cursor-pointer"}
        `}
      >
        <Globe
          className={`w-4 h-4 transition-colors duration-300 ${
            isOpen ? "text-white" : "text-[#d53336]"
          }`}
        />
        <span className="sm:hidden">{current.short}</span>
        <span className="hidden sm:block">{current.label}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <ChevronDown
            className={`w-4 h-4 transition-colors duration-300 ${
              isOpen ? "text-white/80" : "text-[#8b8ba8]"
            }`}
          />
        </motion.div>
      </motion.button>

      {/* ── Dropdown ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: -6 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[calc(100%+8px)] z-50 min-w-[160px]
              bg-white
              border border-[#e8e8f0] rounded-2xl
              shadow-[0_8px_32px_rgba(213,51,54,0.12),0_2px_8px_rgba(0,0,0,0.06)]
              overflow-hidden p-1.5 flex flex-col gap-1"
          >
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#d53336]/60 to-transparent" />

            {LOCALES.map(({ code, label }, i) => {
              const isActiveLocale = code === locale;
              return (
                <motion.button
                  key={code}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.18 }}
                  onClick={() => switchLocale(code)}
                  className={`
                    w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl
                    transition-all duration-200 text-start text-base font-semibold
                    ${
                      isActiveLocale
                        ? "bg-[#fde8e8] text-[#d53336]"
                        : "text-[#4a4a6a] hover:bg-[#f7f7fb] hover:text-[#d53336]"
                    }
                  `}
                >
                  <span>{label}</span>
                  {isActiveLocale && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 25,
                      }}
                    >
                      <Check className="w-3.5 h-3.5 text-[#d53336]" />
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageToggle;
