import Bookings from "@/models/Bookings";
import { connectMongoDB } from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectMongoDB();
    const { fullname, email, phoneNumber, gender, time, date, address, city, purpose } =
      await req.json();

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
