"use client";

import { NAV_LINKS } from "@/constants";
import { DictProps } from "@/types/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ dict, locale }: DictProps) => {
  const pathname = usePathname();

  const isActive = (href: string) =>
    (pathname === `/${locale}` && href === "/") ||
    pathname === `/${locale}${href}`;

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {NAV_LINKS.map((link) => {
        const active = isActive(link.href);
        return (
          <Link
            key={link.href}
            href={`/${locale}${link.href === "/" ? "" : link.href}`}
            className={`relative px-4 py-2 rounded-xl text-lg font-bold transition-all duration-300 group ${
              active ? "text-[#d53336]" : "text-[#4a4a6a] hover:text-[#d53336]"
            }`}
          >
            {dict.nav[link.key as keyof typeof dict.nav]}

            {/* Animated underline */}
            <span
              className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full bg-[#d53336]
                transition-all duration-300 origin-left
                ${active ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-60"}`}
            />
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;
