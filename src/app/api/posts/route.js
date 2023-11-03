import { connectMongoDB } from "@/utils/db";
import { POST } from "../appointment/route";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await connectMongoDB();
    const posts = await POST.find();
    return new NextResponse(posts, { status: 201 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
