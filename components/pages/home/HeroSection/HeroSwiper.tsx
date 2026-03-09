import MainSwiper from "./MainSwiper";
import { DictProps } from "@/types/constants";
import { BadgeCheck, MessageCircle } from "lucide-react";

const HeroSwiper = ({ dict, locale }: DictProps) => {
  const isRtl = locale === "ar";

  return (
    <div
      className={`flex-1 min-w-0 order-1 ${isRtl ? "md:order-1" : "md:order-1"} `}
    >
      <div className="relative">
        {/* ── Floating decorative shapes ── */}
        <div
          className={`absolute -top-4 w-10 h-10 rounded-xl bg-[#d53336]/20 animate-pulse z-0 ${
            isRtl ? "-right-4" : "-left-4"
          }`}
        />
        <div
          className={`absolute -bottom-4 w-6 h-6 rounded-full bg-[#d53336]/30 animate-bounce z-0 ${
            isRtl ? "-left-4" : "-right-4"
          }`}
        />

        {/* ── Image card wrapper ── */}
        <div
          className="relative bg-white rounded-2xl md:rounded-3xl shadow-[0_8px_40px_rgba(213,51,54,0.12)] p-2 md:p-3
          border border-[#e8e8f0] hover:shadow-[0_12px_50px_rgba(213,51,54,0.18)]
          transform hover:scale-[1.01] transition-all duration-500"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <MainSwiper />
            {/* Overlay gradient — subtle red tint at bottom */}
            <div className="absolute inset-0 bg-linear-to-t from-[#d53336]/15 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* ── Floating card: verified ── */}
        <div
          className={`absolute z-10 -top-5 bg-white/95 backdrop-blur-sm rounded-xl
            shadow-[0_4px_20px_rgba(213,51,54,0.15)] p-3
            border border-[#e8e8f0] animate-[float_3s_ease-in-out_infinite]
            ${isRtl ? "right-6" : "left-6"}`}
        >
          <div
            className={`flex items-center gap-2 ${isRtl ? "flex-row" : "flex-row-reverse"}`}
          >
            <BadgeCheck className="w-4 h-4 text-[#d53336] shrink-0" />
            <span className="text-sm font-semibold text-[#1a1a2e]">
              {dict.hero.floating_labels.verified_properties}
            </span>
          </div>
        </div>

        {/* ── Floating card: free consult ── */}
        <div
          className={`absolute z-10 -bottom-5 bg-white/95 backdrop-blur-sm rounded-xl
            shadow-[0_4px_20px_rgba(213,51,54,0.15)] p-3
            border border-[#e8e8f0] animate-[float_3s_ease-in-out_1.5s_infinite]
            ${isRtl ? "left-6" : "right-6"}`}
        >
          <div
            className={`flex items-center gap-2 ${isRtl ? "flex-row" : "flex-row-reverse"}`}
          >
            <MessageCircle className="w-4 h-4 text-[#d53336] shrink-0" />
            <span className="text-sm font-semibold text-[#1a1a2e]">
              {dict.hero.floating_labels.free_consultation}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSwiper;
