import Image from "next/image";
import { FaClock, FaEnvelope, FaHome, FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full h-full bg-main py-5 lg:py-2 text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-2">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-2 w-full">
          <div className="flex items-center gap-4 lg:gap-3 lg:justify-center">
          <Image
            width={25}
            height={25}
            src="/SVG/location.png"
            className="icon"
            alt="email"
          />
            <div className="leading-6">
              <h4>Visit our Location</h4>
              <h6 className="text-gray-300 text-xs">ACHIMOTA MILE 7, ACCRA - GHANA</h6>
            </div>
          </div>
          <div className="flex items-center gap-4 lg:gap-3 lg:justify-center">
          <Image
            width={25}
            height={25}
            src="/SVG/call.png"
            className="icon"
            alt="email"
          />
            <div className="leading-6">
              <h4>Give us a Call</h4>
              <a className="text-gray-300 text-sm" href="tel:+233 55 433 9112">+233 55 433 9112</a>
            </div>
          </div>
          <div className="flex items-center gap-4 lg:gap-3 lg:justify-center">
          <Image
            width={25}
            height={25}
            src="/SVG/gmail.png"
            className="icon"
            alt="email"
          />
            <div className="leading-6">
              <h4>Send us a Message</h4>
              <a className="text-gray-300 text-sm" href="mailto:revivephysiotherapyghana@gmail.com">
                revivephysiotherapyghana@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 lg:gap-3 lg:justify-center">
          <Image
            width={30}
            height={28}
            src="/SVG/clock.png"
            className="icon"
            alt="email"
          />
            <div className="leading-6">
              <h4>Working Hours </h4>
              <h6 className="text-gray-300 text-sm">Mon - Fri: 8AM - 5PM</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
