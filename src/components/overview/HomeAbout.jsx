"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const HomeAbout = () => {
  return (
    <div className="px-4 pt-8 mt-12 bg-gray-200 sm:mb-14">
      <div className="grid mx-auto sm:grid-cols-2 place-items-center max-w-7xl gap-y-12">
        <motion.div
          initial="hidden"
          whileInView={"show"}
          variants={fadeIn("left", 0.4)}
          className="space-y-3 "
        >
          <div className="flex items-center gap-2">
            <span className="w-5 sm:w-10 h-[1.8px] bg-green-600"></span>
            <h1 className="text-2xl font-semibold text-green-600">
              PT. ISAAC BARFI
            </h1>
            <span className="w-5 sm:w-10 h-[1.8px] bg-green-600"></span>
          </div>
          <p className="text-lg break-words sm:text-xl">
            A successful physiotherapist embodies a blend of clinical expertise,
            empathy, communication skills, a commitment to continual learning,
            and a patient-centered approach, aiming to provide quality care and
            support for patients in need of rehabilitation and improved physical
            health.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView={"show"}
          variants={fadeIn("right", 0.4)}
        >
          <Image
            width={300}
            height={300}
            src="/images/isaac.png"
            className="icon"
            alt="email"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HomeAbout;
