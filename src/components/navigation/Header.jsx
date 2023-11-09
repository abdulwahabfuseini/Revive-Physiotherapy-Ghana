import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full h-full py-5 text-white bg-main lg:py-3">
      <div className="px-3 mx-auto max-w-7xl lg:px-4">
        <div className="grid w-full sm:grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-3 lg:place-items-center">
          <div className="flex items-center gap-4 ">
            <Image
              width={25}
              height={25}
              src="/SVG/location.png"
              className="icon"
              alt="email"
            />
            <div className="leading-6">
              <h4>Visit our Location</h4>
              <p className="text-base text-gray-100">
              Achimota Mile 7, Accra - GHA
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 ">
            <Image
              width={25}
              height={25}
              src="/SVG/call.png"
              className="icon"
              alt="email"
            />
            <div className="leading-6">
              <h4>Give us a Call</h4>
              <a
                className="text-base text-gray-100"
                href="tel:+233 55 433 9112"
              >
                +233 55 433 9112
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 ">
            <Image
              width={25}
              height={25}
              src="/SVG/gmail.png"
              className="icon"
              alt="email"
            />
            <div className="leading-6">
              <h4>Send us a Message</h4>
              <a
                className="text-base text-gray-100"
                href="mailto:revivephysiotherapyghana@gmail.com"
              >
                revivephysiotherapyghana@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 ">
            <Image
              width={30}
              height={28}
              src="/SVG/clock.png"
              className="icon"
              alt="email"
            />
            <div className="leading-6">
              <h4>Working Hours </h4>
              <p className="text-base text-gray-100">Mon - Fri: 8AM - 5PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
