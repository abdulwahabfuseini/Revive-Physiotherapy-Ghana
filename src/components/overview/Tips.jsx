import { Physio } from "@/assets/Data";
import Image from "next/image";
import React from "react";

const Tips = () => {
  return (
    <div className="my-8 sm:mt-4">
      <div className="grid lg:grid-cols-2">
        <div>
          <header className="text-3xl text-main">Tips For Physiotherapy</header>
          <div className="flex items-center gap-3 py-3">
            <h1 className="font-semibold text-green-600 uppercase">
              Physiotherapy Advice
            </h1>
            <span className="w-9 h-[1.8px] bg-green-600 sm:w-10 lg:w-16"></span>
          </div>
        </div>
        <div>
          <p className="text-lg">
            These tips serve as a guideline for physiotherapists, assisting in
            the improvement of patients&apos; physical health, overall wellness,
            and quality of life.
          </p>
        </div>
      </div>
      <div className="grid w-full gap-3 py-4 sm:grid-auto-fit-xl">
        {Physio.map((tips) => (
          <div
            key={tips.id}
            className="p-3 bg-white cursor-pointer sm:p-4 hover:shadow-md"
          >
            <Image
              width={60}
              height={60}
              src={`/SVG/${tips.icon}`}
              className="object-contain"
              alt="banner"
            />
            <h1 className="py-3 text-lg font-semibold text-green-600 truncate">
              {tips.title}
            </h1>
            <p className="text-lg">{tips.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;
