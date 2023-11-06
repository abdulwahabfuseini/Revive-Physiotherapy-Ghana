import Bookings from "@/models/Bookings";
import { connectMongoDB } from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectMongoDB();
    const { fullname, email, phoneNumber, subject, time, date, purpose } =
      await req.json();
    console.log("🚀 ~ file: route.js:7 ~ POST ~ purpose:", purpose);
    console.log("🚀 ~ file: route.js:7 ~ POST ~ fullname:", fullname);
    console.log("🚀 ~ file: route.js:7 ~ POST ~ email:", email);
    console.log("🚀 ~ file: route.js:7 ~ POST ~ phoneNumber:", phoneNumber);
    console.log("🚀 ~ file: route.js:7 ~ POST ~ subject:", subject);
    console.log("🚀 ~ file: route.js:7 ~ POST ~ time:", time);
    console.log("🚀 ~ file: route.js:7 ~ POST ~ date:", date);

    const appiontment = new Bookings({
      fullname,
      email,
      phoneNumber,
      subject,
      time,
      date,
      purpose,
    });

    await appiontment.save();
    return new NextResponse("Booking Details Submitted Successfully", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse("Failed to submit booking  details", {
      status: 500,
    });
  }
};
