
import Image from "next/image";
import Social from "./Social";


const Address = () => {
  return (
    <div>
      <header className="text-2xl font-medium uppercase">Contact Info</header>
      <div className="grid py-6 lg:grid-cols-2 gap-y-2 sm:gap-x-8 lg:gap-x-3">
        <div className="grid items-center bg-white hover:shadow-md cursor-pointer py-1.5 px-4">
          <Image
            width={45}
            height={45}
            src="/SVG/mail.gif"
            alt="email"
          />
          <h1 className="text-lg font-semibold text-main">Email Us</h1>
          <a href="mailto:revivephysiotherapyghana@gmail.com">
            revivephysiotherapyghana@gmail.com
          </a>
        </div>
        <div className="grid items-center gap-3 bg-white hover:shadow-md cursor-pointer py-1.5 px-4">
          <Image width={38} height={38} src="/SVG/phone.gif" alt="phone" />
          <h1 className="text-lg font-semibold text-main">Call Us</h1>
          <a href="tel:+233 55 433 9112" className="text-lg">
            +233 55 433 9112
          </a>
        </div>
        <div className="grid items-center gap-3 bg-white hover:shadow-md cursor-pointer py-1.5 px-4">
          <Image
            width={45}
            height={45}
            src="/SVG/location.gif"
            alt="location"
          />
          <h1 className="text-lg font-semibold text-main">Address</h1>
          <h1>ACHIMOTA MILE 7 - ACCRA</h1>
        </div>
        <div className="grid items-center gap-3 bg-white hover:shadow-md cursor-pointer py-1.5 px-4">
          <Image width={45} height={45} src="/SVG/earth.gif" alt="earth" />
          <h1 className="text-lg font-semibold text-main">Locate Us</h1>
          <h1>GHANA - WEST AFRICA</h1>
        </div>
        <div className="grid items-center gap-3 bg-white hover:shadow-md cursor-pointer py-1.5 px-4">
          <Image width={45} height={45} src="/SVG/postal.gif" alt="postal" />
          <h1 className="text-lg font-semibold text-main">
            Postal Address
          </h1>
          <h1>P.O.BOX 419</h1>
        </div>
        <div className="grid items-center gap-3 bg-white hover:shadow-md cursor-pointer py-1.5 px-4">
          <Image width={45} height={45} src="/SVG/street.gif" alt="street" />
          <h1 className="text-lg font-semibold text-main">Street</h1>
          <h1>STREET NAME</h1>
        </div>
      </div>
     <Social />
    </div>
  );
};

export default Address;
