import Image from "next/image";
import Link from "next/link";

const Appointment = () => {
  return (
    <div className="grid py-3 sm:grid-cols-2 gap-6" id="appointment">
      <div>
        <header className="text-3xl text-main">Consultation With Revive</header>
        <div className="flex items-center gap-3 py-3">
          <h1 className="font-semibold text-green-600 uppercase ">
            Book an Appointment
          </h1>

          <span className="w-16 h-[1.8px] bg-green-600 "></span>
        </div>
        <p className="text-lg">
          {" "}
          We offer home and private sessions that can be arranged through
          booking.{" "}
        </p>
        <div className="text-lg py-4 space-y-4">
          <div>
            <p>MONDAY - FRIDAY</p>
            <p>6:15 am - 5:30 pm</p>
          </div>
          <div>
            <p>SATURDAY</p>
            <p>6:15 am - 5:00 pm</p>
          </div>
          <div>
            <p>SUNDAY</p>
            <p>Closed</p>
          </div>
          
        </div>
        <Link href="/booking">
          <button
            type="submit"
            className="px-6 py-3 my-6 text-lg text-white rounded-md bg-main hover:bg-green-600 sm:text-xl"
          >
            Book an Appointment
          </button>
        </Link>
      </div>
      <div className="relative">
        <Image fill src="/images/booking.png" alt="booking"  objectFit="contain"/>
      </div>
    </div>
  );
};

export default Appointment;
