import Bookings from "@/models/Bookings";
import { connectMongoDB } from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectMongoDB();
    const { fullname, email, phoneNumber, gender, time, date, address, city, purpose } =
      await req.json();
      console.log("🚀 ~ file: route.js:9 ~ POST ~ fullname:", fullname)
      console.log("🚀 ~ file: route.js:9 ~ POST ~ email:", email)
      console.log("🚀 ~ file: route.js:9 ~ POST ~ phoneNumber:", phoneNumber)
      console.log("🚀 ~ file: route.js:9 ~ POST ~ gender:", gender)
      console.log("🚀 ~ file: route.js:9 ~ POST ~ time:", time)
      console.log("🚀 ~ file: route.js:9 ~ POST ~ date:", date)
      console.log("🚀 ~ file: route.js:9 ~ POST ~ address:", address)
      console.log("🚀 ~ file: route.js:9 ~ POST ~ city:", city)
      console.log("🚀 ~ file: route.js:9 ~ POST ~ purpose:", purpose)

    const appiontment = new Bookings({
      fullname,
      email,
      phoneNumber,
      gender,
      time,
      date,
      address,
      city,
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
