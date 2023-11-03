"use client"

import { mission } from "@/assets/Data";
import { Typography } from "antd";
import React from "react";

const Objectives = () => {
  return (
    <div className="grid grid-auto-fit w-full py-10 gap-3 cursor-pointer">
      {mission.map((item) => (
        <div key={item.id} className="bg-white hover:shadow-md p-4">
          <h3 className="text-2xl text-main font-medium pb-2">{item.title}</h3>
          <Typography.Paragraph
            className="text-base break-word"
            ellipsis={{
              rows: 3,
              expandable: true,
              symbol: "Read More",
            }}
          >
            {item.content}
          </Typography.Paragraph>
        </div>
      ))}
    </div>
  );
};

export default Objectives;
