"use client";

import { Typography } from "antd";
import Image from "next/image";
import React from "react";

const Card = ({ treat }) => {
  return (
    <div>
      <div className="px-3 py-4 bg-white cursor-pointer hover:shadow-md  lg:hover:scale-105 flex flex-col items-center">
        <Image
          width={60}
          height={60}
          src={`/SVG/${treat.imgUrl}`}
          className="icon"
          alt="treat"
        />
        <div className="">
          <h1 className="pt-2 text-center text-lg font-semibold text-green-600">
            {treat.title}
          </h1>
          <Typography.Paragraph
            className="text-lg break-word"
            ellipsis={{
              rows: 3,
              expandable: true,
              symbol: "Read More",
            }}
          >
            {treat.content}
          </Typography.Paragraph>
        </div>
      </div>
    </div>
  );
};

export default Card;
