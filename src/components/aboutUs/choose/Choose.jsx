"use client";

import { Treatment } from "@/assets/Data";
import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const Choose = () => {
  return (
    <div className="grid py-16 place-items-center">
      <div className="grid lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView={"show"}
          variants={fadeIn("left", 0.4)}
        >
          <header className="text-2xl font-semibold text-main">
            Revive Physiotherapy - Ghana
          </header>
          <div className="flex items-center gap-3 py-3">
            <h1 className="font-semibold text-green-600 uppercase ">
              why choose us
            </h1>
            <span className="w-9 h-[1.8px] bg-green-600 sm:w-6 lg:w-16"></span>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView={"show"}
          variants={fadeIn("right", 0.4)}
        >
          <p className="text-lg">
            Choosing physiotherapy can be a beneficial decision for various
            reasons, particularly when dealing with injuries, chronic pain,
            rehabilitation, or overall physical health. Here are some compelling
            reasons to consider physiotherapy
          </p>
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView={"show"}
        variants={fadeIn("up", 0.4)}
        className="grid w-full h-full gap-3 py-6 sm:grid-auto-fit-xl"
      >
        {Treatment.map((treat) => (
          <Card key={treat.id} treat={treat} />
        ))}
      </motion.div>
    </div>
  );
};

export default Choose;
