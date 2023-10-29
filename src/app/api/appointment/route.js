import Booking from "@/models/Booking";
import { connectMongoDB } from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { name, email, phoneNumber, subject, time, date } = req.json();

  await connectMongoDB();
  try {
    const appiontment = Booking.create({
      name,
      email,
      phoneNumber,
      subject,
      time,
      date,
    });

    await appiontment.save();
    return new NextResponse("Bookings Details Submitted", { status: 201 });
  } catch (error) {
    return new NextResponse("Failed to submit booking  details", {status: 500});
  }
};
