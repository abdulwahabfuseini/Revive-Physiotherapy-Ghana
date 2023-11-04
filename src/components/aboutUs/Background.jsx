"use client";

import HeadTitle from "../HeadTitle";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import { bannerSlide } from "@/assets/Data";

const Background = () => {
  return (
    <>
      <HeadTitle path="About" title="Who we are" />
      <div className="flex flex-col items-center my-6 sm:flex-row gap-x-10 gap-y-16 ">
        <div className="w-full space-y-3 sm:w-1/2">
          <h1 className="text-2xl uppercase">Background</h1>
          <p className="text-justify break-words ">
            accusamus, unde laborum impedit soluta aperiam! Sequi vero harum
            sunt provident iure praesentium facere quidem distinctio maiores aut
            debitis natus quisquam impedit perferendis odio adipisci illo est ab
            corporis suscipit rem, reprehenderit nobis perspiciatis. Esse,
            libero! Cupiditate ea voluptatibus architecto impedit magni tempora
            tenetur?
          </p>
          <p className="text-lg text-justify break-words">
            accusamus, unde laborum impedit soluta aperiam! Sequi vero harum
            sunt provident iure praesentium facere quidem distinctio maiores aut
            debitis natus quisquam impedit perferendis odio adipisci illo est ab
            corporis suscipit rem, reprehenderit nobis perspiciatis. Esse,
            libero! Cupiditate ea voluptatibus architecto impedit magni tempora
            tenetur?
          </p>
        </div>
        <div className="w-full sm:w-1/2">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            speed={3000}
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="w-full"
          >
            <div>
              {bannerSlide.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Image
                      width={600}
                      height={40}
                      src={`/images/${item.cover}`}
                      className="object-cover h-48 sm:h-72"
                      alt="banner"
                    />
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Background;
