import Appointment from "@/components/overview/Appointment";
import Banner from "@/components/overview/Banner";
import HomeAbout from "@/components/overview/HomeAbout";
import Offer from "@/components/overview/offer/Offer";
import Testimonial from "@/components/overview/Testimonial";
import Tips from "@/components/overview/Tips";

export default function Home() {
  return (
    <>
      <Banner />
      <HomeAbout />
      <div className="w-full h-full px-3 mx-auto smpx-5 max-w-7xl sm:px-5">
        <Offer />
        <Tips />
        <Appointment />
        <Testimonial />
      </div>
    </>
  );
}
