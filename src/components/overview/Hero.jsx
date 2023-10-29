"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import { bannerSlide } from "@/assets/Data";
const Hero = () => {
  return (
    <div className="w-full h-96 relative">
      <Swiper
       spaceBetween={0}
       slidesPerView={1}
        loop={true}
        speed={3000}
        modules={[Autoplay]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
      
      >
        <div>
          {bannerSlide.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  width={400}
                  height={40}
                  src={`/images/${item.cover}`}
                  className="object-cover w-full h-96"
                  alt="banner"
                />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
      <div className="top-0 left-0 absolute w-full h-full bg-main bg-opacity-60 text-white z-40">
        <div className=" py-20 max-w-7xl mx-auto px-3 sm:px-10">
          <h1 className="text-2xl font-semibold">WELCOME TO</h1>
          <h4 className="text-3xl uppercase py-2">
            Revive Physiotherapy - Ghana{" "}
          </h4>
          <p className="text-lg w-full sm:w-1/2">
            When you are looking for a qualify and trusted Therapist, Revive Physiotherapy got you covered. Don&lsquo;t hestiate to reach out to us, we are your most trusted
            consultants for Physiotherapy and wellness. We care about tour
            health
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
