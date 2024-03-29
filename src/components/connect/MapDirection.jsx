"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const MapDirection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView={"show"}
      variants={fadeIn("up", 0.4)}
      className="w-full h-[600px] mb-20"
    >
      <header className="pb-6 text-2xl font-medium text-center sm:text-3xl pt-14">
        {" "}
        Locate Us
      </header>
      <div>
        <iframe
          title="googleMap"
          width="100%"
          height="500"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20ACHIMOTA,%20Accra,%20Ghana+(Revive%20Physiotherapy%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/population/">
            Calculate population in area
          </a>
        </iframe>
      </div>
    </motion.div>
  );
};

export default MapDirection;
