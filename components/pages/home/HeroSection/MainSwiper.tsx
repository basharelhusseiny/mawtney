"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { HERO_IMAGES_SLIDES } from "@/constants";

const MainSwiper = () => {
  return (
    <Swiper
      loop={true}
      speed={2000}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="w-[320px] sm:w-[500px] md:w-full h-[270px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-lg overflow-hidden swiper-hero"
    >
      {HERO_IMAGES_SLIDES.map((img, index) => {
        return (
          <SwiperSlide key={index}>
            <Image
              src={img}
              alt={`Al Andalus Store ${index + 1}`}
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              priority={index === 0}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MainSwiper;
