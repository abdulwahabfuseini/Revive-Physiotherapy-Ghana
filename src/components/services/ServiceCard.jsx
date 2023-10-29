"use client"

import { Typography } from "antd";
import Image from "next/image";
import Link from "next/link";


const ServiceCard = ({ therapy }) => {
  return (
    <div>
      <Link href={`/service/${therapy?.id}`}>
        <div className="bg-white hover:shadow-lg pb-3">
          <Image
            src={`/images/${therapy.cover}`}
            alt=""
            width={600}
            height={600}
            className=" h-40 object-cover"
          />
          <div className="p-3 pb-1.5  grid  place-items-center">
            <h1 className="text-xl font-medium">{therapy.type}</h1>
           
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
    </div>
  );
};

export default ServiceCard;
