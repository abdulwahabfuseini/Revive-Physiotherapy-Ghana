import Image from "next/image";
import React from "react";

const Card = ({ treat }) => {
  return (
    <div className="bg-white shadow-lg px-3 py-4 grid place-items-center cursor-pointer hover:scale-105">
      <Image
        width={60}
        height={60}
        src={`/SVG/${treat.imgUrl}`}
        className="icon"
        alt="treat"
      />
      <h1 className="py-2 font-semibold text-lg">{treat.title}</h1>
      <p className="">{treat.content}</p>
    </div>
  );
};

export default Card;
