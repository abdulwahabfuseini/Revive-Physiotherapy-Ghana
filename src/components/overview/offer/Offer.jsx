"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import { Therapies } from "../../services/Data";
import OfferCard from "./OfferCard";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Offer = () => {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevtEl] = useState(null);

  return (
    <div className="py-8">
      <div className="grid sm:grid-cols-2">
        <div>
          <header className="text-3xl text-main">
            Physiotherapy Services at Revive
          </header>
          <div className="flex items-center gap-3 py-3">
            <h1 className="font-medium text-green-600 uppercase ">
              Physiotherapy Services
            </h1>
            <span className="w-16 h-[1.8px] bg-green-600"></span>
          </div>
        </div>
        <div>
        <p className="text-lg">
            Physiotherapy services encompass tailored, non-invasive treatments
            aimed at restoring mobility, reducing pain, and enhancing overall
            well-being through exercises, manual therapy, and personalized care
            plans.
          </p>
        </div>
      </div>
      <Swiper
        navigation={{ nextEl, prevEl }}
        spaceBetween={8}
        loop={true}
        speed={3000}
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        breakpoints={{
          0: {
            slidesPerView: 1.8,
          },
          400: {
            slidesPerView: 2.2,
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
