"use client";

import HeadTitle from "../HeadTitle";
import { Therapies } from "./Data";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const Whatwedo = () => {
  return (
    <div>
      <HeadTitle path="Service" title="What we do" />
      <div>
        <div className="grid w-full py-5 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn("left", 0.4)}
            className="flex items-center gap-3"
          >
            <span className="w-5 sm:w-10 h-[1.8px] bg-green-700"></span>
            <header className="mb-2 text-2xl font-semibold lg:text-3xl">
              Therapies We Offer
            </header>
            <span className="w-5 sm:w-10 h-[1.8px] bg-green-700"></span>
          </motion.div>
          <motion.p
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn("right", 0.4)}
            className="text-lg"
          >
            Physiotherapy services encompass tailored, non-invasive treatments
            aimed at restoring mobility, reducing pain, and enhancing overall
            well-being through exercises, manual therapy, and personalized care
            plans.
          </motion.p>
        </div>
        <div className="grid w-full grid-cols-2 gap-2 py-4 sm:grid-auto-fit-sm">
          {Therapies.map((therapy, index) => {
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView={"show"}
                variants={fadeIn("up", 0.4)}
              >
                <ServiceCard therapy={therapy} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
