"use client";

import { mission } from "@/assets/Data";
import { Typography } from "antd";
import React from "react";

const Objectives = () => {
  return (
    <div className="grid w-full gap-3 py-10 cursor-pointer grid-auto-fit">
      {mission.map((item) => {
        return (
          <div key={item.id} className="p-3 bg-white hover:shadow-md">
            <h3 className="pb-2 text-2xl font-medium text-main">
              {item.title}
            </h3>
            <Typography.Paragraph
              className="text-lg break-word"
              ellipsis={{
                rows: 3,
                expandable: true,
                symbol: "Read More",
              }}
            >
              {item.content}
            </Typography.Paragraph>
          </div>
        );
      })}
    </div>
  );
};

export default Objectives;
