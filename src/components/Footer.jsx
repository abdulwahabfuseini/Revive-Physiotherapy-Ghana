import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/revive.jpg";
import Social from "./connect/Social";

const Footer = () => {
  return (
    <div className="w-full h-full bg-white">
      <div className="grid gap-6 px-4 py-10 mx-auto max-w-7xl sm:px-4 grid-auto-fit place-items-center ">
        <div>
          <Link href="/">
            <div className="flex items-center gap-2">
            <Image
                src={Logo}
                alt="logo"
                className="w-14 h-14 object-contain shadow-sm rounded-full p-[0.6px] bg-white"
              />
              <h1 className="mb-2 text-lg font-semibold sm:text-base ">
                REVIVE PHYSIOTHERAPY <br /> GHANA
              </h1>
            </div>
          </Link>
          <h1 className="text-lg font-medium"><span className="font-semibold">Motto:</span> Yes We Revive!!!</h1>
        </div>
        <div>
          <h1 className="mb-3 text-xl font-semibold uppercase">Quick Links</h1>
          <ul className="leading-10">
            <li className="text-xl hover:text-green-500 hover:underline">
              <Link href="/">Overview</Link>
            </li>
            <li className="text-xl hover:text-green-500 hover:underline">
              <Link href="/about">About Us</Link>
            </li>
            <li className="text-xl hover:text-green-500 hover:underline">
              <Link href="/service">Our Services</Link>
            </li>
            <li className="text-xl hover:text-green-500 hover:underline">
              <Link href="/contact">Contact Us</Link>
            </li>
            <li className="text-xl hover:text-green-500 hover:underline">
              <Link href="/blog">Our Blog</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="mb-3 text-xl font-semibold uppercase">Contact Info</h1>
          <div className="text-lg">
            <a href="tel:+233 55 433 9112">
              <span className="font-semibold">Hotline:</span>+233 55 433 9112
            </a>
            <p><span className="font-semibold">Address:</span> P.O.BOX 419 - Achimota</p>
            <p><span className="font-semibold">Location:</span> Achimota Mile 7, Accra</p>
            <a href="mailto:revivephysiotherapyghana@gmail.com">
              <span className="font-semibold">Email:</span> revivephysiotherapyghana@gmail.com
            </a>
          </div>
        </div>

        <Social />
      </div>
      <div className="grid py-4 text-lg text-center text-white place-items-center gap-y-3 bg-main">
        <h1 className="flex gap-2">
          &copy; 2023 - Revive Physiotherapy - Ghana{" "}
          <br className="sm:hidden" /> <span className="hidden sm:block">|</span> All right Reserved
        </h1>
        <h4 className="">Developed By: F.A.W</h4>
      </div>
    </div>
  );
};

export default Footer;
