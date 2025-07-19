import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
} from "swiper/modules";
import "./banner.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Banner1 from "../../assets/banner1.png";
import Banner2 from "../../assets/banner2.png";
import Banner3 from "../../assets/banner3.png";
import Banner4 from "../../assets/banner4.png";

const Banner = () => {
  const slides = [Banner1, Banner2, Banner3, Banner4];

  return (
    <div className="pt-[65px] w-11/12 lg:w-10/12 mx-auto" dir="rtl">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, reverseDirection: true }}
        pagination={{ clickable: true }}
        // navigation={true}
        effect="fade"
        className="rounded-2xl overflow-hidden my-6 sm:my-8 shadow-2xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] w-full">
              <img
                className="w-full h-full object-cover"
                src={slide}
                alt={`Banner ${index + 1}`}
              />
              <div className="absolute inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center text-center text-white p-4">
                <div className="w-full max-w-5xl">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 animate-fade-in-up dark:text-white">Connect Create Cultivate Your Passion
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl animate-fade-in-up animate-delay-300 dark:text-gray-200">
                    HobbyHub helps you discover, join, or create local hobby groups — from book clubs to hiking crews.  Connect with like-minded people, share your passions, and build real communities around what you love
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;

