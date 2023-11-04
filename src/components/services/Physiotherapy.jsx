"use client";

import Image from "next/image";
import React, { useState } from "react";

const Physiotherapy = ({ treatments }) => {
  const [toggleTab, setToggleTab] = useState(1);

  const toggleButton = (index) => {
    setToggleTab(index);
  };

  return (
    <div>
      <div>
        <h1 className="py-10 text-xl sm:text-3xl font-medium text-center uppercase">
          {treatments.type}
        </h1>
        <div className="grid sm:grid-cols-3 gap-8">
          <div className="relative h-80 sm:h-[550px] border-2 w-full rounded border-gray-50  sm:col-span-1 order-2 sm:order-1">
            <Image
              fill
              src={`/images/${treatments.cover}`}
              className=" object-cover"
              alt="service"
            />
          </div>
          <div className=" w-full sm:col-span-2 text-lg order-1 sm:order-2">
            <h1>{treatments.description}</h1>
            <div className="grid rounded-lg gap-3 p-1 grid-cols-3 bg-white max-w-sm mx-auto my-5 shadow-sm">
              <button
                onClick={() => toggleButton(1)}
                className={
                  toggleTab === 1
                    ? "bg-main ring-white text-white rounded-lg text-lg sm:text-xl shadow-lg ring-2 sm:ring-0 p-1.5"
                    : "bg-white sm:bg-transparent text-black rounded-lg p-1.5 sm:text-lg font-medium"
                }
              >
                {treatments.toggle1}
              </button>
              <button
                onClick={() => toggleButton(2)}
                className={
                  toggleTab === 2
                    ? "bg-main ring-white text-white rounded-lg text-lg sm:text-xl shadow-lg ring-2 sm:ring-0 p-1.5"
                    : "bg-white sm:bg-transparent text-black rounded-lg p-1.5 sm:text-lg font-medium"
                }
              >
                {treatments.toggle2}
              </button>
              <button
                onClick={() => toggleButton(3)}
                className={
                  toggleTab === 3
                    ? "bg-main ring-white text-white rounded-lg text-lg sm:text-xl shadow-lg ring-2 sm:ring-0 p-1.5"
                    : "bg-white sm:bg-transparent text-black rounded-lg p-1.5 sm:text-lg font-medium"
                }
              >
                {treatments.toggle3}
              </button>
            </div>
            {toggleTab === 1 && (
              <div>
                <h1 className="text-xl py-3 font-semibold uppercase">
                  {treatments.title1}
                </h1>
                {treatments.causes.map((cause, index) => (
                  <ul key={index} className="mx-8 list-disc">
                    <li className="text-[17px] py-1 font-bold">
                      {cause?.title}{" "}
                      <span className="font-normal">{cause?.desc}</span>
                    </li>
                  </ul>
                ))}
              </div>
            )}
            {toggleTab === 2 && (
              <div>
                <h1 className="text-xl py-3 font-semibold uppercase">
                  {treatments.title2}
                </h1>
                {treatments.symptoms.map((symptom, index) => (
                  <ul key={index} className="mx-8 list-disc">
                    <li className="text-[17px] py-1 font-bold">
                      {symptom?.title}{" "}
                      <span className="font-normal">{symptom?.desc}</span>
                    </li>
                  </ul>
                ))}
              </div>
            )}
            {toggleTab === 3 && (
              <div>
                <h1 className="text-xl py-3 font-semibold uppercase">
                  {treatments.title3}
                </h1>
                {treatments.treatment.map((treat, index) => (
                  <ul key={index} className="mx-8 list-disc">
                    <li className="text-[17px] py-1 font-bold">
                      {treat?.title}{" "}
                      <span className="font-normal">{treat?.desc}</span>
                    </li>
                  </ul>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="py-8">
          <h1 className="text-xl font-medium">NOTE:</h1>
          <p className="text-lg">{treatments?.note}</p>
        </div>
      </div>
    </div>
  );
};

export default Physiotherapy;
