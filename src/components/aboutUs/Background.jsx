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
      <div className="flex items-center flex-col sm:flex-row gap-x-10 gap-y-16 my-6 ">
        <div className="w-full sm:w-1/2 space-y-3">
          <h1 className="uppercase text-2xl">Background</h1>
          <p className=" break-words text-justify">
            accusamus, unde laborum impedit soluta aperiam! Sequi vero harum
            sunt provident iure praesentium facere quidem distinctio maiores aut
            debitis natus quisquam impedit perferendis odio adipisci illo est ab
            corporis suscipit rem, reprehenderit nobis perspiciatis. Esse,
            libero! Cupiditate ea voluptatibus architecto impedit magni tempora
            tenetur?
          </p>
          <p className=" break-words text-justify">
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
                      className="object-cover sm:h-72 h-48"
                      alt="banner"
                    />
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
          {/* <Image
            width={600}
            height={600}
            src="/images/bg1.jpg"
            className="icon"
            alt="email"
          /> */}
        </div>
      </div>
    </>
  );
};

export default Background;
