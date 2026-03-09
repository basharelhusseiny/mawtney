import { DictProps } from "@/types/constants";
import HeroContent from "./HeroContent";
import HeroSwiper from "./HeroSwiper";

const HeroSection = ({ dict, locale }: DictProps) => {
  const isRtl = locale === "ar";

  return (
    <section className="relative py-10 md:py-14 lg:py-16 flex items-center overflow-hidden bg-[#fbf8f9] min-h-[calc(100vh-138px)]">
      {/* ── Background decorative blobs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#d53336] rounded-full opacity-[0.1] blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-90 h-90 bg-[#d53336] rounded-full opacity-[0.1] blur-3xl" />
        <div
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage:
              "radial-gradient(circle, #d53336 2px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div
          className={`flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-16 ${
            isRtl ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          {/* Content */}
          <HeroContent dict={dict} locale={locale} />

          {/* Swiper */}
          <HeroSwiper dict={dict} locale={locale} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
