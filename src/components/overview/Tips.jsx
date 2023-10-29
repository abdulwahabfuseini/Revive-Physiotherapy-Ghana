import { Physio } from "@/assets/Data";
import React from "react";

const Tips = () => {
  return (
    <div className="my-14">
      <div className="grid sm:grid-cols-2">
        <div>
          <header className="text-3xl text-main">Tips For Physiotherapy</header>
          <div className="flex gap-3 items-center py-3">
            <h1 className=" uppercase text-green-600 font-medium">Physiotherapy Advice</h1>
            <span className="w-16 h-[1.8px] bg-green-600"></span>
          </div>
        </div>
        <div>
          <p>
          These tips serve as a guideline for physiotherapists, assisting in the improvement of patients&apos; physical health, overall wellness, and quality of life.
          </p>
        </div>
      </div>
      <div className="grid grid-auto-fit-xl w-full gap-4 py-4">
        {Physio.map((tips) => (
          <div key={tips.id} className="p-4 bg-white shadow-md">
            <h1 className="text-lg py-3 font-medium text-green-600">{tips.title}</h1>
            <p>{tips.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;
