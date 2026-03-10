"use client";

import { DictProps } from "@/types/constants";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import MobileMenuToggle from "./MobileMenuToggle";
import LanguageToggle from "./Languagetoggle";
import { useState, useEffect } from "react";

const Header = ({ dict, locale }: DictProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[74px] transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_2px_24px_rgba(213,51,54,0.10)] border-b border-[#e8e8f0]"
            : "bg-white border-b border-[#e8e8f0]"
        }`}
      >
        <div className="container mx-auto h-full px-4 sm:px-6 flex flex-row-reverse items-center justify-between gap-4">
          {/* ── Logo ── */}
          <Link
            href={`/${locale}`}
            className="shrink-0 flex items-center group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              src="/logo/mawteny-main-logo-trans.png"
              alt="Mawtney Logo"
              width={70}
              height={60}
              className="h-auto w-auto object-contain transition-transform duration-300 scale-85"
              priority
            />
          </Link>

          {/* ── Desktop Nav (hidden on mobile) ── */}
          <div className="hidden lg:flex flex-1 justify-center">
            <NavLinks dict={dict} locale={locale} />
          </div>

          {/* ── Right Side ── */}
          <div className="flex items-center gap-3">
            {/* Hamburger — only on mobile */}
            <div className="lg:hidden">
              <MobileMenuToggle
                isOpen={isMobileMenuOpen}
                onClose={setIsMobileMenuOpen}
              />
            </div>

            {/* Language toggle — always visible */}
            <LanguageToggle locale={locale!} />
          </div>
        </div>
      </header>

      {/* Mobile Menu — rendered outside header to avoid clipping */}
      <MobileMenu
        dict={dict}
        locale={locale!}
        isOpen={isMobileMenuOpen}
        onClose={setIsMobileMenuOpen}
      />
    </>
  );
};

export default Header;
