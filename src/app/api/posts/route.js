import Comments from "@/models/Comments";
import { connectMongoDB } from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectMongoDB();
    const { fullname, email, picture, description } = await req.json();
    console.log("🚀 ~ file: route.js:7 ~ POST ~ description:", description)
    console.log("🚀 ~ file: route.js:7 ~ POST ~ picture:", picture)
    console.log("🚀 ~ file: route.js:7 ~ POST ~ email:", email)
    console.log("🚀 ~ file: route.js:7 ~ POST ~ fullname:", fullname)
  
    const comment = new Comments({
      fullname,
      email,
      picture, 
      description
    });

    await comment.save();
    return new NextResponse("Thanks for your cmoment", { status: 201 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
