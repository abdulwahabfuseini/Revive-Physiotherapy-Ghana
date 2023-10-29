import React from "react";
import HeadTitle from "../HeadTitle";
import { Therapies } from "../overview/offer/Data";
import ServiceCard from "./ServiceCard";

const Whatwedo = () => {
  return (
    <div>
      <HeadTitle path="Service" title="What we do" />
      <div>
        <div className="grid sm:grid-cols-2 w-full py-8">
          <div className="flex gap-3 items-center">
            <span className="w-5 sm:w-10 h-[1.8px] bg-green-700"></span>
            <header className="text-2xl lg:text-3xl font-medium">
              Therapies We Offer
            </header>
            <span className="w-5 sm:w-10 h-[1.8px] bg-green-700"></span>
          </div>
          <p>
            Physiotherapy services encompass tailored, non-invasive treatments
            aimed at restoring mobility, reducing pain, and enhancing overall
            well-being through exercises, manual therapy, and personalized care
            plans.
          </p>
        </div>
        <div className="grid grid-auto-fit-sm w-full py-4 gap-4">
          {Therapies.map((therapy, index) => {
            return <ServiceCard key={index} therapy={therapy} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
