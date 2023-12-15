import HeadTitle from "@/components/HeadTitle";
import Address from "@/components/connect/Address";
import Form from "@/components/connect/ContactForm";
import MapDirection from "@/components/connect/MapDirection";

export const metadata = {
  title: "Revive Physiotherapy | Contact Us",
  description: "Connect With Revive Physiotherapy Ghana",
};

const Contact = () => {
  return (
    <div className="w-full h-full px-3 mx-auto max-w-7xl py-14 sm:px-4">
     <HeadTitle path="Contact" title="Contact Us" />
      <header className="py-6 text-2xl leading-8 text-center font-smeibold">
        GET IN TOUCH WITH REVIVE PHYSIOTHERAPY - GHANA
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-6">
        <div className="w-full sm:col-span-1 lg:col-span-2">
          <Address />
        </div>
        <div className="w-full sm:col-span-1">
          <Form />
        </div>
      </div>
      <MapDirection />
    </div>
  );
};

export default Contact;
