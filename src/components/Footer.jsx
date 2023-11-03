import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.png";
import Social from "./connect/Social";

const Footer = () => {
  return (
    <div className="w-full h-full text-white bg-main">
      <div className="grid gap-4 px-4 py-10 mx-auto max-w-7xl sm:px-4 grid-auto-fit sm:place-items-center">
        <div>
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image
                src={Logo}
                alt="logo"
                className="object-contain w-14 h-14"
              />
              <h1 className="mb-2 text-lg font-semibold sm:text-base ">
                REVIVE PHYSIOTHERAPY <br /> GHANA
              </h1>
            </div>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            exercitationem eum sunt!
          </p>
        </div>
        <div>
          <h1 className="mb-3 text-xl uppercase">Quick Links</h1>
          <ul className="leading-10">
            <li className="text-lg hover:text-green-500 hover:underline">
              <Link href="/">Overview</Link>
            </li>
            <li className="text-lg hover:text-green-500 hover:underline">
              <Link href="/about">About Us</Link>
            </li>
            <li className="text-lg hover:text-green-500 hover:underline">
              <Link href="/service">Our Services</Link>
            </li>
            <li className="text-lg hover:text-green-500 hover:underline">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="mb-3 text-xl uppercase">Contact Info</h1>
          <div className="">
            <a href="tel:+233 55 433 9112" className="text-lg">
              Hotline: +233 55 433 9112
            </a>
            <p>Address: P.O.BOX 419 - Achimota</p>
            <p>Location: Achimota Mile 7, Accra</p>
            <a href="mailto:revivephysiotherapyghana@gmail.com">
              Email: revivephysiotherapyghana@gmail.com
            </a>
          </div>
        </div>

        <Social />
      </div>
      <div className="grid py-6 text-lg text-center place-items-center gap-y-5">
        <h1>
          &copy; 2023 - Revive Physiotherapy - Ghana{" "}
          <br className="sm:hidden" /> | All right Reserved
        </h1>
        <h4 className="">Developed By: F.A.W</h4>
      </div>
    </div>
  );
};

export default Footer;
