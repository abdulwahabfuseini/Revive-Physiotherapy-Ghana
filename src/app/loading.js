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
        <div className="w-full h-screen flex items-center justify-center bg-gray-200 bottom-0 left-0 right-0 absolute">
          <div className="relative shadow-md rounded-full">
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
            fill
              src={Logo}
              alt="logo"
              id="logo"
              className="p-2 object-contain"
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
