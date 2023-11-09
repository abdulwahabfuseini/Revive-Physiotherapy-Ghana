import Comments from "@/models/Comments";
import { connectMongoDB } from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectMongoDB();
    const { fullname, email, description } = await req.json();
   
  
    const comment = new Comments({
      fullname,
      email,
      description
    });

    await comment.save();
    return new NextResponse("Thanks for your cmoment", { status: 201 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
