"use client";

import Image from "next/image";
import Logo from "../../public/images/logo.jpeg";
import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";

const Loading = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, [isLoading]);

  return (
    <div>
      {isLoading ? (
        <div className="w-full h-screen flex items-center justify-center bg-main bg-opacity-30 top-0 left-0 right-0 absolute">
          <div className="relative">
            <Oval
              ariaLabel="loading-indicator"
              height={100}
              width={100}
              strokeWidth={5}
              strokeWidthSecondary={1}
              color="blue"
              secondaryColor="white"
            />
            <Image
              src={Logo}
              alt="logo"
              id="logo"
              className="w-24 h-24 object-contain p-1.5 top-[1.2px] left-[0.2vw]  absolute"
            />
          </div>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default Loading;
