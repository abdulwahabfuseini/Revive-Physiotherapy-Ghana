import Appointment from "@/components/overview/Appointment";
import Banner from "@/components/overview/Banner";
import HomeAbout from "@/components/overview/HomeAbout";
import Offer from "@/components/overview/offer/Offer";
import Testimonial from "@/components/overview/Testimonial";
import Tips from "@/components/overview/Tips";

export default function Home() {
  return (
    <div>
      <Banner />
      <HomeAbout />
      <div className="w-full h-full px-3 mx-auto max-w-7xl sm:px-5">
        <Offer />
        <Tips />
        <Appointment />
        <Testimonial />
      </div>
    </div>
  );
}
