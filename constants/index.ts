import { LocaleData, NavLink } from "@/types/constants";

export const NAV_LINKS: NavLink[] = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

export const LOCALES: LocaleData[] = [
  { code: "ar", label: "العربية", short: "AR" },
  { code: "en", label: "English", short: "EN" },
];

export const HERO_IMAGES_SLIDES: string[] = [
  "/hero/hero-img (1).jpg",
  "/hero/hero-img (2).jpg",
  "/hero/hero-img (3).jpg",
  "/hero/hero-img (4).jpg",
  "/hero/hero-img (5).jpg",
  "/hero/hero-img (6).jpg",
];
