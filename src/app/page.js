import Appointment from "@/components/overview/Appointment";
import Hero from "@/components/overview/Hero";
import HomeAbout from "@/components/overview/HomeAbout";
import Offer from "@/components/overview/offer/Offer";
import Testimonial from "@/components/overview/Testimonial";
import Tips from "@/components/overview/Tips";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <div className="w-full h-full px-3 mx-auto max-w-7xl py-14">
        <Offer />
        <Tips />
        <Appointment />
        <Testimonial />
      </div>
    </>
  );
}
