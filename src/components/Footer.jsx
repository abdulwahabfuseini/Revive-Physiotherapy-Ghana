import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.png";

const Footer = () => {
  return (
    <div className="w-full h-64 bg-foot text-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-10">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src={Logo} alt="logo" className="w-14 h-14 object-contain" />
            <h1 className="text-sm sm:text-base font-semibold ">
              REVIVE PHYSIOTHERAPY <br /> GHANA
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
