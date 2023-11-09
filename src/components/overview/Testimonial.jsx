"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getComment = async () => {
      setLoading(true);
      const res = await fetch("https://revive-physiotherapy.vercel.app/api/patient", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const patient = await res.json();
      console.log("🚀 ~ file: page.jsx:33 ~ getComment ~ patient:", patient);

      setRecords(patient);
      setTimeout(() => {
        setLoading(false);
      }, 80);
    };
    getComment();
  }, []);

  return (
    <div className="py-10">
      <header className="text-3xl capitalize">
        What our patients say about us
      </header>
      <div className="py-10">
        {loading ? (
          "Please Wait..."
        ) : (
          <Swiper
            pagination={{ clickable: true }}
            spaceBetween={18}
            loop={true}
            speed={3000}
            modules={[Autoplay]}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              400: {
                slidesPerView: 1.1,
              },
              600: {
                slidesPerView: 1.4,
              },
              768: {
                slidesPerView: 1.8,
              },
              1024: {
                slidesPerView: 2.5,
              },
            }}
          >
            <div>
              {records.map((comment) => (
                <SwiperSlide key={comment._id} className="mt-6">
                  <div className="relative">
                  <FaQuoteLeft className="absolute top-0 text-3xl text-gray-400 left-3"/>
                   <div className="z-20 grid gap-2 p-3 place-items-center">
                   <Image
                      width={80}
                      height={80}
                      src="/SVG/man.png"
                      alt="logo"
                      className="object-contain rounded-full"
                    />
                    <h1 className="text-lg font-semibold text-green-600 capitalize">
                      {comment.fullname}
                    </h1>
                    <p>{comment.description}</p>
                   
                   </div>
                   <FaQuoteRight className="absolute bottom-0 text-3xl text-gray-400 right-3" />
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
