"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const HeadTitle = ({ path, title }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView={"show"}
      variants={fadeIn("left", 0.4)}
      className="relative"
    >
      <h1 className="py-6 font-bold text-gray-200 uppercase text-7xl">
        {path}
      </h1>
      <div className="absolute top-0 left-0">
        <div className="flex gap-1.5 items-center">
          <span className="w-5 sm:w-10 h-[1.8px] bg-green-500"></span>
          <p className="font-semibold text-green-600 uppercase">{title}</p>
          <span className="w-5 sm:w-10 h-[1.8px] bg-green-500"></span>
        </div>
        <h1 className="text-xl font-semibold sm:text-2xl text-main">
          REVIVE PHYSIOTHERAPY <br /> GHANA
        </h1>
      </div>
    </motion.div>
  );
};

export default HeadTitle;
