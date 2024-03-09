"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Therapies } from "../../services/Data";
import OfferCard from "./OfferCard";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const Offer = () => {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevtEl] = useState(null);

  return (
    <div className="py-10 sm:py-6">
      <div className="grid gap-2 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView={"show"}
          variants={fadeIn("left", 0.4)}
        >
          <header className="text-3xl text-main">
            Physiotherapy Services at Revive
          </header>
          <div className="flex items-center gap-3 py-3">
            <h1 className="font-semibold text-green-600 uppercase ">
              Physiotherapy Services
            </h1>
            <span className="w-9 h-[1.8px] bg-green-600 sm:w-10 lg:w-16"></span>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView={"show"}
          variants={fadeIn("right", 0.4)}
        >
          <p className="text-lg">
            Physiotherapy services encompass tailored, non-invasive treatments
            aimed at restoring mobility, reducing pain, and enhancing overall
            well-being through exercises, manual therapy, and personalized care
            plans.
          </p>
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView={"show"}
        variants={fadeIn("up", 0.4)}
      >
        <Swiper
          navigation={{ nextEl, prevEl }}
          spaceBetween={8}
          loop={true}
          speed={3000}
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          breakpoints={{
            0: {
              slidesPerView: 2.2,
            },
            400: {
              slidesPerView: 2.5,
            },
            600: {
              slidesPerView: 3.4,
            },
            768: {
              slidesPerView: 4.2,
            },
            1024: {
              slidesPerView: 6.2,
            },
          }}
        >
          <div>
            {Therapies.map((item, index) => {
              return (
                <SwiperSlide key={index} className="mt-16">
                  <OfferCard item={item} />
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </motion.div>

      <div className="items-center justify-center hidden gap-4 py-6 lg:flex">
        <button ref={(node) => setPrevtEl(node)}>
          <FaChevronLeft className="w-12 p-2 font-bold text-white border-2 rounded-sm h-11 bg-main" />
        </button>
        <button ref={(node) => setNextEl(node)}>
          <FaChevronRight className="w-12 p-2 font-bold text-white border-2 rounded-sm h-11 bg-main" />
        </button>
      </div>
    </div>
  );
};

export default Offer;
