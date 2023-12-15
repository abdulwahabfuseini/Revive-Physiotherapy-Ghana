import Comments from "@/models/Comments"
import { connectMongoDB } from "@/utils/db"
import { NextResponse } from "next/server"


export const GET = async (req, {params: {id}}) => {
    try {
        await connectMongoDB()
        const patient = await Comments.findById(id)
        return NextResponse.json({message: "Single Patient", data: patient}, {status: 201})
    } catch (error) {
        return new NextResponse("Database Error", {status: 500})
    }
}


export const DELETE = async (req, { params: {id} }) => {
 
  try {
    await connectMongoDB(); 
    const patient = await Comments.findByIdAndDelete(id);

    if (!patient) {
      return new NextResponse("Patient not found", { status: 404 });
    }
    return new NextResponse("Patient deleted successfully", { status: 201 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
