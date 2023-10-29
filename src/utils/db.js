import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "Bookings",
    });
    return new NextResponse("Connected to MongoDB", { status: 201 });
  } catch (error) {
    return new NextResponse("Failed to connect to MongoDB", { status: 500 });
  }
};
