"use client";

import { Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const ServiceCard = ({ therapy }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="cardloader"></div>
      ) : (
        <Link href={`/service/${therapy?.type}`}>
          <div className="overflow-hidden bg-white hover:shadow-lg">
            <Image
              src={`/images/${therapy.cover}`}
              alt=""
              width={400}
              height={600}
              className="object-cover h-48 lg:hover:scale-105"
            />
            <div className="grid p-4 gap-y-2 place-items-center">
              <h1 className="text-xl font-semibold">
                {therapy.type}
              </h1>
              <Typography.Paragraph
                className="text-base break-word"
                ellipsis={{
                  rows: 2,
                  expandable: true,
                  symbol: "Read More",
                }}
              >
                {therapy.content}
              </Typography.Paragraph>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;
