"use client";

import React, { useEffect, useState } from "react";
import Header from "./Header";
import Image from "next/image";
import Logo from "../../../public/images/revive.jpg";
import { Naviagte } from "@/assets/Navigate";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  });
  return (
    <>
      <div
        className={`${
          sticky
            ? "fixed top-0 left-0 w-full bg-main text-white"
            : "w-full  bg-white h-full text-slate-800"
        }  py-3 sm:px-6 px-2 z-50`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image
                src={Logo}
                alt="logo"
                className="w-14 h-14 object-contain shadow-sm rounded-full p-[0.6px]"
              />
              <h1 className="sm:text-lg font-semibold ">
                REVIVE PHYSIOTHERAPY <br /> GHANA
              </h1>
            </div>
          </Link>
          <ul className="lg:flex items-center gap-8 hidden">
            {Naviagte.map((navLink) => (
              <li className="text-xl font-semibold" key={navLink.id}>
                <Link href={navLink.path}>{navLink.display}</Link>
              </li>
            ))}
          </ul>
          <MobileNav />
        </div>
      </div>
      <Header />
    </>
  );
};

export default Navbar;
