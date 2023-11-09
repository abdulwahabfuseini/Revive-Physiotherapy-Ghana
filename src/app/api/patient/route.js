import Comments from "@/models/Comments"
import { connectMongoDB } from "@/utils/db"
import { NextResponse } from "next/server"


export const GET = async (req) => {
    try {
        await connectMongoDB()
        const patient = await Comments.find()
        return new NextResponse(JSON.stringify(patient), {status: 201})
    } catch (error) {
        return new NextResponse("Database Error", {status: 500})
    }
}