"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Social from "./Social";

const Address = () => {
  return (
    <div>
      <header className="text-2xl font-medium uppercase">Contact Info</header>
      <motion.div
        initial="hidden"
        whileInView={"show"}
        variants={fadeIn("up", 0.4)}
        className="grid py-6 lg:grid-cols-2 gap-y-2 sm:gap-x-8 lg:gap-x-3"
      >
        <div className="flex items-center gap-2 p-2 bg-white cursor-pointer hover:shadow-md overflow-hidden">
          <Image width={60} height={60} src="/SVG/mail.gif" alt="email" />
          <div>
            <h1 className="text-lg font-semibold text-main">Email Us</h1>
            <a className=" truncate w-full" href="mailto:revivephysiotherapyghana@gmail.com">
              revivephysiotherapyghana@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 bg-white cursor-pointer hover:shadow-md">
          <Image width={60} height={60} src="/SVG/phone.gif" alt="phone" />
          <div>
            <h1 className="text-lg font-semibold text-main">Call Us</h1>
            <a href="tel:+233 55 433 9112" className="text-lg">
              +233 55 433 9112
            </a>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 bg-white cursor-pointer hover:shadow-md">
          <Image
            width={60}
            height={60}
            src="/SVG/location.gif"
            alt="location"
          />
          <div>
            <h1 className="text-lg font-semibold text-main">Address</h1>
            <p>ACHIMOTA MILE 7 - ACCRA</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 bg-white cursor-pointer hover:shadow-md">
          <Image width={60} height={60} src="/SVG/earth.gif" alt="earth" />
          <div>
            <h1 className="text-lg font-semibold text-main">Locate Us</h1>
            <p>GHANA - WEST AFRICA</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 bg-white cursor-pointer hover:shadow-md">
          <Image width={60} height={60} src="/SVG/postal.gif" alt="postal" />
          <div>
            <h1 className="text-lg font-semibold text-main">Postal Address</h1>
            <p>P.O.BOX GS 0899 - Achimota</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 bg-white cursor-pointer hover:shadow-md">
          <Image width={60} height={60} src="/SVG/street.gif" alt="street" />
          <div>
            <h1 className="text-lg font-semibold text-main">Street</h1>
            <p>STREET NAME</p>
          </div>
        </div>
      </motion.div>
      <Social />
    </div>
  );
};

export default Address;
