"use client";

import { Typography } from "antd";
import Image from "next/image";
import React from "react";

const Card = ({ treat }) => {
  return (
    <div className="grid px-3 py-4 bg-white cursor-pointer hover:shadow-md place-items-center lg:hover:scale-105">
      <Image
        width={60}
        height={60}
        src={`/SVG/${treat.imgUrl}`}
        className="icon"
        alt="treat"
      />
      <div className="grid gap-y-2 place-items-center">
        <h1 className="pt-2 text-lg font-semibold">{treat.title}</h1>
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
  );
};

export default Card;
