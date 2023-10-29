import { connect } from "@/assets/SocialMedia";
import { Tooltip } from "antd";
import Image from "next/image";
import React from "react";

const Address = () => {
  return (
    <div>
      <header className="text-2xl uppercase font-medium">Contact Info</header>
      <div className="grid lg:grid-cols-2 py-6 gap-y-2 sm:gap-x-8 lg:gap-x-3">
        <div className="grid items-center bg-white shadow-md hover:bg-gray-50 hover:shadow-inner cursor-pointer py-1.5 px-4">
          <Image
            width={45}
            height={45}
            src="/SVG/mail.gif"
            className="icon"
            alt="email"
          />
          <h1 className="text-lg text-main font-semibold">Email Us</h1>
          <a href="mailto:revivephysiotherapyghana@gmail.com">
            revivephysiotherapyghana@gmail.com
          </a>
        </div>
        <div className="grid items-center gap-3 bg-white shadow-md hover:bg-gray-50 hover:shadow-inner cursor-pointer py-1.5 px-4">
          <Image width={38} height={38} src="/SVG/phone.gif" alt="phone" />
          <h1 className="text-lg text-main font-semibold">Call Us</h1>
          <a href="tel:+233 55 433 9112" className="text-lg">
            +233 55 433 9112
          </a>
        </div>
        <div className="grid items-center gap-3 bg-white shadow-md hover:bg-gray-50 hover:shadow-inner cursor-pointer py-1.5 px-4">
          <Image
            width={45}
            height={45}
            src="/SVG/location.gif"
            alt="location"
          />
          <h1 className="text-lg text-main font-semibold">Address</h1>
          <h1>ACHIMOTA MILE 7 - ACCRA</h1>
        </div>
        <div className="grid items-center gap-3 bg-white shadow-md hover:bg-gray-50 hover:shadow-inner cursor-pointer py-1.5 px-4">
          <Image width={45} height={45} src="/SVG/earth.gif" alt="earth" />
          <h1 className="text-lg text-main font-semibold">Locate Us</h1>
          <h1>GHANA - WEST AFRICA</h1>
        </div>
        <div className="grid items-center gap-3 bg-white shadow-md hover:bg-gray-50 hover:shadow-inner cursor-pointer py-1.5 px-4">
          <Image width={45} height={45} src="/SVG/postal.gif" alt="postal" />
          <h1 className="text-lg text-main font-semibold">
            Postal Address
          </h1>
          <h1>P.O.BOX 419</h1>
        </div>
        <div className="grid items-center gap-3 bg-white shadow-md hover:bg-gray-50 hover:shadow-inner cursor-pointer py-1.5 px-4">
          <Image width={45} height={45} src="/SVG/street.gif" alt="street" />
          <h1 className="text-lg text-main font-semibold">Street</h1>
          <h1>STREET NAME</h1>
        </div>
      </div>
      <div className="py-10 sm:py-0 sm:mt-5">
        <h1 className="pb-6 text-2xl">Connect With Revive</h1>
        <div className="flex py-4 gap-x-3">
          {connect.map((socialMedia) => (
            <div key={socialMedia.id}>
              <Tooltip color={socialMedia?.color} title={socialMedia?.title}>
                <a href={socialMedia?.link} target="blank">
                  <Image
                    width={34}
                    height={34}
                    className="hover:bg-gray-50:hover:scale-110 object-contain"
                    src={`/SVG/${socialMedia.icon}`}
                    alt="social"
                    draggable="false"
                  />
                </a>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Address;
