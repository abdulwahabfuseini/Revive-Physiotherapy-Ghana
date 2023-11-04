"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { bannerSlide } from "@/assets/Data";
import Link from "next/link";
const Banner = () => {
  const [text] = useTypewriter({
    words: ["Revive Physiotherapy - Ghana"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <div className="relative w-full sm:h-96 h-[490px]">
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
                  className="object-cover w-full sm:h-96 h-[490px]"
                  alt="banner"
                />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
      <div className="absolute top-0 left-0 z-40 w-full h-full px-2 text-white sm:px-4 bg-main bg-opacity-70">
        <div className="py-12 mx-auto sm:py-16 max-w-7xl ">
          <h1 className="text-2xl font-medium">WELCOME TO</h1>
          <h4 className="hidden py-2 text-3xl uppercase sm:block">
            <span>{text}</span> <Cursor />
          </h4>
          <h4 className="py-2 text-3xl uppercase sm:hidden font-medium">
            Revive Physiotherapy - Ghana
          </h4>
          <p className="w-full mb-6 text-lg sm:text-xl max-w-lg">
            When you are looking for a qualified and trusted Physioherapist,
            Revive Physiotherapy - Ghana got you covered. Don&lsquo;t hestiate
            to reach out to us, we are your most trusted consultants for
            Physiotherapy and wellness. We care about your health.
          </p>
          <Link href="/about">
            <button className="px-3 py-2 text-lg rounded-lg bg-main hover:bg-green-600">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
