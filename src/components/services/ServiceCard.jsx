"use client"

import { Typography } from "antd";
import Image from "next/image";
import Link from "next/link";


const ServiceCard = ({ therapy }) => {
  return (
    <div>
      <Link href={`/service/${therapy?.id}`}>
        <div className="pb-3 bg-white hover:shadow-lg">
          <Image
            src={`/images/${therapy.cover}`}
            alt=""
            width={600}
            height={600}
            className="object-cover h-40 "
          />
          <div className="grid p-3 gap-y-2 place-items-center">
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
