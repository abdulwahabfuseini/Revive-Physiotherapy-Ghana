"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/revive.jpg";
import Social from "./connect/Social";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const Footer = () => {
  return (
    <footer aria-label="footer" className="w-full h-full bg-white shadow relative">
      <div className="grid gap-5 px-4 py-10 mx-auto max-w-7xl sm:px-5 grid-auto-fit lg:place-items-center ">
        <motion.div
          initial="hidden"
          whileInView={"show"}
          variants={fadeIn("left", 0.6)}
        >
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image
                src={Logo}
                alt="logo"
                className="object-contain bg-white rounded-full shadow-sm w-14 h-14"
              />
              <h1 className="mb-2 text-lg font-semibold sm:text-base ">
                REVIVE PHYSIOTHERAPY <br /> GHANA
              </h1>
            </div>
          </Link>
          <p className="p-3 text-xl font-medium">
            <span className="font-semibold">Motto:</span> Yes We Revive!!!
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView={"show"}
          variants={fadeIn("up", 0.4)}
        >
          <h1 className="mb-3 text-xl font-semibold uppercase">Quick Links</h1>
          <ul className="leading-10">
            <li className="text-xl hover:text-green-500 hover:underline py-1.5">
              <Link href="/">Overview</Link>
            </li>
            <li className="text-xl hover:text-green-500 hover:underline py-1.5">
              <Link href="/about">About Us</Link>
            </li>
            <li className="text-xl hover:text-green-500 hover:underline py-1.5">
              <Link href="/service">Our Services</Link>
            </li>
            <li className="text-xl hover:text-green-500 hover:underline py-1.5">
              <Link href="/contact">Contact Us</Link>
            </li>
            <li className="text-xl hover:text-green-500 hover:underline py-1.5">
              <Link href="/booking">Book Appointment</Link>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView={"show"}
          variants={fadeIn("up", 0.4)}
        >
          <h1 className="mb-3 text-xl font-semibold uppercase">Contact Info</h1>
          <div>
            <a href="tel:+233 55 433 9112" className="text-sm font-semibold">
              Hotline:
              <span className="text-lg font-normal "> +233 55 433 9112</span>
            </a>
            <p className="text-sm font-semibold py-1.5">
              Address:
              <span className="text-lg font-normal">
                {" "}
                P.O.BOX GS 0899 - Achimota
              </span>
            </p>
            <p className="text-sm font-semibold py-1.5">
              Location:
              <span className="text-lg font-normal">
                {" "}
                Achimota Mile 7, Accra
              </span>
            </p>
            <a
              href="mailto:revivephysiotherapyghana@gmail.com"
              className="text-sm font-semibold py-1.5"
            >
              Email:
              <span className="text-lg font-normal">
                {" "}
                revivephysiotherapyghana@gmail.com
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView={"show"}
          variants={fadeIn("right", 0.4)}
        >
          <Social />
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView={"show"}
        variants={fadeIn("up", 0.4)}
        className="grid py-4 text-lg text-center text-white place-items-center gap-y-3 bg-main"
      >
        <p className="flex gap-2">
          &copy; 2023 - Revive Physiotherapy - Ghana{" "}
          <br className="sm:hidden" />{" "}
          <span className="hidden sm:block">|</span> All Right Reserved
        </p>
        <h4 className="">Developed By: F.A.WAHAB</h4>
      </motion.div>
    </footer>
  );
};

export default Footer;
