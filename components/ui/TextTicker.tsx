"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Sparkles } from "lucide-react";
import "swiper/css";

const TextTicker = ({ texts }: { texts: string[] }) => {
  // const repeatedTexts = [...TEXTS_TICKER, ...TEXTS_TICKER, ...TEXTS_TICKER];

  return (
    <div className="w-full bg-(--primary) py-4 overflow-hidden shadow-lg relative z-10">
      <style jsx global>{`
        .swiper-ticker .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        loop={true}
        speed={5000}
        allowTouchMove={false}
        className="swiper-ticker"
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        spaceBetween={0}
      >
        {texts.map((text, index) => (
          <SwiperSlide key={`${text}-${index}`} style={{ width: "auto" }}>
            <div className="flex items-center gap-4 px-6 md:px-10">
              <span className="text-white text-xl md:text-2xl font-bold whitespace-nowrap tracking-wide">
                {text}
              </span>
              <Sparkles className="text-white w-5 h-5 fill-white animate-pulse" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TextTicker;
