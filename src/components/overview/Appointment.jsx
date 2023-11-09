import Image from "next/image";
import Link from "next/link";

const Appointment = () => {
  return (
    <div className="grid gap-6 py-3 sm:grid-cols-2 " id="appointment">
      <div>
        <header className="text-3xl text-main">Consultation With Revive</header>
        <div className="flex items-center gap-3 py-3">
          <h1 className="font-semibold text-green-600 uppercase ">
            Schedule an Appointment
          </h1>
          <span className="w-16 h-[1.8px] bg-green-600 sm:w-10 lg:w-16"></span>
        </div>
        <p className="text-lg">
          {" "}
          We offer home and private sessions that can be arranged through
          booking.{" "}
        </p>
        <div className="py-4 space-y-4 text-lg">
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
            className="px-3 py-3 my-6 text-white rounded-md sm:px-6 bg-main hover:bg-green-600 sm:text-lg"
          >
            Book an Appointment
          </button>
        </Link>
      </div>
      <div className="flex items-center justify-center bounce">
        <Image width={400} height={100} src="/images/consult.png" alt="booking"  objectFit="contain"/>
      </div>
    </div>
  );
};

export default Appointment;
