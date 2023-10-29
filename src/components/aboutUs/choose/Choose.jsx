import { Treatment } from "@/assets/Data";
import React from "react";
import Card from "./Card";

const Choose = () => {
  return (
    <div className="py-16 grid place-items-center">
      <div className="grid sm:grid-cols-2">
        <div>
          <header className="text-2xl text-main font-semibold">
            Revive Physiotherapy - Ghana
          </header>
          <div className="flex gap-3 items-center py-3">
            <h1 className=" uppercase text-green-600 font-medium">
              why choose us
            </h1>
            <span className="w-16 h-[1.8px] bg-green-600"></span>
          </div>
        </div>
        <div>
          <p>
            Physiotherapy offers personalized, non-invasive treatments, focusing
            on restoring movement, managing pain, and improving overall quality
            of life.
          </p>
        </div>
      </div>
      <div className="grid grid-auto-fit-xl w-full gap-3 py-6">
        {Treatment.map((treat) => (
          <Card key={treat.id} treat={treat} />
        ))}
      </div>
    </div>
  );
};

export default Choose;
