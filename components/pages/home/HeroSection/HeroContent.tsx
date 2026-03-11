import { Button } from "@/components/ui/buttons";
import {
  BadgeCheck,
  Building,
  Building2,
  CreditCard,
  Scale,
} from "lucide-react";
import { DictProps } from "@/types/constants";

const HeroContent = ({ dict, locale }: DictProps) => {
  const isRtl = locale === "ar";

  return (
    <div
      className={`flex-1 order-2 text-center  ${isRtl ? "md:order-1 lg:text-right" : " md:order-2 lg:text-left"}`}
    >
      <div className="space-y-5 md:space-y-3">
        <h1
          className={`text-2xl sm:text-3xl md:text-4xl font-bold leading-tight`}
        >
          <span className="bg-linear-to-r from-[#d53336] via-[#95191b] to-[#d53336] bg-clip-text text-transparent">
            {dict.hero.brand}
          </span>
          <br />
          <span className="text-[#1a1a2e]">{dict.hero.headline}</span>
        </h1>

        <div className="w-24 h-1 bg-linear-to-r from-[#f2555a] to-[#d53336] mx-auto lg:mx-0 rounded-full"></div>

        <h2 className="text-lg sm:text-xl font-bold text-[#4a4a6a] leading-relaxed max-w-2xl mx-auto lg:mx-0">
          {dict.hero.subheadline}
        </h2>

        <p className="text-sm sm:text-lg font-semibold text-gray-500 max-w-xl mx-auto lg:mx-0">
          {dict.hero.description}
        </p>

        {/* ================= CTA Buttons ================= */}
        <div className="group flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-3">
          <Button
            href="/products"
            size="md"
            variant="primary"
            className="min-w-[180px] h-14"
          >
            {dict.hero.cta_primary}
            <Building2
              className="mr-3 text-white/70 animate-pulse group-hover:-translate-x-1 duration-300"
              size={24}
            />
          </Button>
          <Button
            href="https://api.whatsapp.com/send?phone=905444644422"
            target="_blank"
            size="md"
            variant="secondary"
            className="h-14"
          >
            {dict.hero.cta_secondary}
          </Button>
        </div>

        {/* ================= Trust indicators ================= */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 pt-4 md:pt-8 text-sm md:text-base text-[#4a4a6a]">
          <div className="flex items-center gap-2 border border-[#fde8e8] rounded-full px-3 py-1">
            <BadgeCheck className="text-(--primary)" />
            <span className="font-semibold">
              {dict.hero.badges.citizenship}
            </span>
          </div>
          <div className="flex items-center gap-2 border border-[#fde8e8] rounded-full px-3 py-1">
            <Scale className="text-(--primary)" />
            <span className="font-semibold">{dict.hero.badges.valuation}</span>
          </div>
          <div className="flex items-center gap-2 border border-[#fde8e8] rounded-full px-3 py-1">
            <CreditCard className="text-(--primary)" />
            <span className="font-semibold">
              {dict.hero.badges.installments}
            </span>
          </div>
          <div className="flex items-center gap-2 border border-[#fde8e8] rounded-full px-3 py-1">
            <Building className="text-(--primary)" />
            <span className="font-semibold">
              {dict.hero.badges.property_management}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
