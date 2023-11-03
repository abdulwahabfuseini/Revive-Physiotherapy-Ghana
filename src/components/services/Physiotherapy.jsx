import Image from "next/image";
import React from "react";

const Physiotherapy = ({ treatment }) => {
  return (
    <div>
      <div>
        <h1 className="py-10 text-xl font-medium text-center uppercase">
          {treatment.type}
        </h1>
        <div className="relative h-64 border-2 rounded border-gray-50 sm:w-96">
          <Image
            fill
            src={`/images/${treatment.cover}`}
            className="object-cover "
            alt="service"
          />
        </div>
      </div>
    </div>
  );
};

export default Physiotherapy;
