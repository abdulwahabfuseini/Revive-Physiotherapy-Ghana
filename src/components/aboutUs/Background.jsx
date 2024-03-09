"use client";

import HeadTitle from "../HeadTitle";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { bannerSlide } from "@/assets/Data";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const Background = () => {
  return (
    <>
      <HeadTitle path="About" title="Who we are" />
      <div className="flex flex-col my-6 lg:items-center lg:flex-row gap-x-10 gap-y-16 ">
        <div className="w-full space-y-5 lg:w-1/2">
          <motion.p
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn("left", 0.4)}
            className="text-lg break-words"
          >
            Welcome to Revive Physiotherapy - Ghana, We are a specialized team
            of physiotherapists with the energy, experience and enthusiasm to
            achieve the very best results for all patients regardless of age or
            problem. we offer home and private sessions that can be arranged
            through booking. We are committed to guiding you on your path to
            recovery, empowering you to live life to the fullest.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn("up", 0.4)}
            className="text-lg break-words"
          >
            At Revive Physiotherapy - Ghana, we specialize in restoring
            movement, enhancing function, and promoting overall well-being. With
            a dedicated team of experienced physiotherapists, we offer
            personalized care tailored to your unique needs. Our practice
            focuses on evidence-based treatments, utilizing a range of therapies
            and exercises to help you regain mobility, manage pain, and improve
            your quality of life.
          </motion.p>
        </div>
        <motion.div
          initial="hidden"
          whileInView={"show"}
          variants={fadeIn("right", 0.4)}
          className="w-full lg:w-1/2"
        >
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
                      className="object-cover w-full h-52 sm:h-72 lg:h-80"
                      alt="banner"
                    />
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </motion.div>
      </div>
    </>
  );
};

export default Background;
