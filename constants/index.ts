import { LocaleData, NavLink } from "@/types/constants";
import {
  Facebook,
  Home,
  Info,
  Instagram,
  Mail,
  MapPin,
  MessageSquare,
  Music2,
  Phone,
} from "lucide-react";

export const NAV_LINKS: NavLink[] = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

export const LOCALES: LocaleData[] = [
  { code: "ar", label: "العربية", short: "AR" },
  { code: "en", label: "English", short: "EN" },
  { code: "tr", label: "Türkçe", short: "TR" },
];

export const HERO_IMAGES_SLIDES: string[] = [
  "/hero/hero-img (1).jpg",
  "/hero/hero-img (2).jpg",
  "/hero/hero-img (3).jpg",
  "/hero/hero-img (4).jpg",
  "/hero/hero-img (5).jpg",
  "/hero/hero-img (6).jpg",
];

export const FOOTER_SOCIAL_LINKS = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/share/14VGBcdGbGD/",
    label: "Facebook",
    hoverClass: "hover:bg-blue-600",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/mawtneyre?igsh=cW5ua2IxZzhzcWl2",
    label: "Instagram",
    hoverClass: "hover:bg-pink-600",
  },
  {
    icon: Music2,
    href: "https://www.tiktok.com/@mawtney?_r=1&_t=ZS-94LtVeKbe0S",
    label: "Tiktok",
    hoverClass: "hover:bg-red-600",
  },
];

export const FOOTER_CONTACT_ITEMS = [
  {
    icon: MapPin,
    key: "address",
    href: "https://maps.google.com",
    isExternal: true,
  },
  {
    icon: Phone,
    key: "phone",
    href: "tel:+905444644422",
    isExternal: false,
  },
  {
    icon: Mail,
    key: "email",
    href: "mailto:info@mawteny.com",
    isExternal: false,
  },
  {
    icon: Mail,
    key: "email2",
    href: "mailto:Mawtney@gmail.com",
    isExternal: false,
  },
] as const;

export const FOOTER_NAV_ICONS = {
  home: Home,
  about: Info,
  contact: MessageSquare,
} as const;
