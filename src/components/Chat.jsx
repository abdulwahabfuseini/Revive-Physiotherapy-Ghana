"use client";

import Image from "next/image";
import { Tooltip } from "antd";
import { useEffect, useState } from "react";

const Chat = () => {
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 200 ? setAppear(true) : setAppear(false);
    });
  });
  return (
    <div>
      {appear && (
        <div className="bottom-6 right-6 fixed z-50">
          <Tooltip color=" green" title="Chat with us">
            <a href="https://wa.me/554339112" target="blank">
              <Image
                width={45}
                height={45}
                src="/SVG/whatsapp.png"
                alt="chat"
              />
            </a>
          </Tooltip>
        </div>
      )}
    </div>
  );
};

export default Chat;
