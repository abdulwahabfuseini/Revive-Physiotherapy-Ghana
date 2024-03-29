"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { bannerSlide } from "@/assets/Data";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Revive Physiotherapy - Ghana"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <div className="relative w-full sm:h-96 h-[480px]">
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
                  className="object-cover w-full sm:h-96 h-[480px]"
                  alt="banner"
                />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
      <div className="absolute top-0 left-0 z-40 w-full h-full px-3 text-white sm:px-6 bg-main bg-opacity-90 sm:bg-opacity-80">
        <motion.div initial="hidden" whileInView={"show"}  variants={fadeIn("left", 0.4)} className="py-12 mx-auto max-w-7xl ">
          <h1 className="text-3xl font-medium">WELCOME TO</h1>
          <h4 className="hidden py-2 text-3xl uppercase sm:block">
            <span>{text}</span> <Cursor />
          </h4>
          <h4 className="py-2 text-2xl font-medium uppercase sm:text-3xl sm:hidden">
            Revive Physiotherapy - Ghana
          </h4>
          <p className="w-full max-w-lg mb-6 text-lg tracking-tight sm:text-xl">
            When you are looking for a qualified and trusted Physioherapist,
            Revive Physiotherapy - Ghana got you covered. Don&lsquo;t hestiate
            to reach out to us, we are your most trusted consultants for
            Physiotherapy and wellness. We care about your health.
          </p>
          <Link href="/about">
            <button
              type="button"
              className="px-3 py-2 text-lg ease-in-out bg-green-600 rounded-lg hover:bg-blue-600"
            >
              Learn More
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
