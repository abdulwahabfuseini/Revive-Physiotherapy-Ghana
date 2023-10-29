import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeAbout = () => {
  return (
    <div className="sm:bg-gray-100 px-4 pt-8 mt-12 sm:mb-14">
      <div className="grid sm:grid-cols-2 place-items-center max-w-7xl mx-auto gap-y-12">
        <div className=" space-y-3">
          <div className="flex gap-2 items-center">
            <span className="w-10 h-[1.8px] bg-green-600"></span>
            <h1 className=" text-2xl text-green-600">DR. ISAAC BAAFI</h1>
            <span className="w-10 h-[1.8px] bg-green-600"></span>
          </div>
          <p className=" break-words">
            accusamus, unde laborum impedit soluta aperiam! Sequi vero harum
            sunt provident iure praesentium facere quidem distinctio maiores aut
            debitis natus quisquam impedit perferendis odio adipisci illo est ab
            corporis suscipit rem, reprehenderit nobis perspiciatis. Esse,
            libero! Cupiditate ea voluptatibus architecto impedit magni tempora
            tenetur?
          </p>
          <Link href="/about">
            <button className="bg-main py-2 px-5 rounded-3xl text-white mt-6 mb-2 hover:bg-green-600">
              Read More
            </button>
          </Link>
        </div>
        <div>
          <Image
            width={300}
            height={300}
            src="/images/isaac.png"
            className="icon"
            alt="email"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
