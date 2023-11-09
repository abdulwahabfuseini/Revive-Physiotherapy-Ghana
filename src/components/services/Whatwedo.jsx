import React from "react";
import HeadTitle from "../HeadTitle";
import { Therapies } from "./Data";
import ServiceCard from "./ServiceCard";

const Whatwedo = () => {
  return (
    <div>
      <HeadTitle path="Service" title="What we do" />
      <div>
        <div className="grid w-full py-8 sm:grid-cols-2">
          <div className="flex items-center gap-3">
            <span className="w-5 sm:w-10 h-[1.8px] bg-green-700"></span>
            <header className="text-2xl font-medium lg:text-3xl">
              Therapies We Offer
            </header>
            <span className="w-5 sm:w-10 h-[1.8px] bg-green-700"></span>
          </div>
          <p className="text-lg">
            Physiotherapy services encompass tailored, non-invasive treatments
            aimed at restoring mobility, reducing pain, and enhancing overall
            well-being through exercises, manual therapy, and personalized care
            plans.
          </p>
        </div>
        <div className="grid w-full gap-3 py-4 grid-auto-fit-sm lg:grid-auto-fit">
          {Therapies.map((therapy, index) => {
            return <ServiceCard key={index} therapy={therapy} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
