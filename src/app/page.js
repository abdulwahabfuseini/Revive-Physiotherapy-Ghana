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
      <div className="w-full h-full max-w-7xl mx-auto py-14 px-3">
        <Offer />
        <Tips />
        <Appointment />
        <Testimonial />
      </div>
    </>
  );
}
