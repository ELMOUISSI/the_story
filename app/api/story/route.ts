import { NextRequest , NextResponse} from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/prisma/client";



export async function POST(req:NextRequest) {
    const {userId } =auth()
    if(!userId){
        return  NextResponse.json("Unauthorized",
            {
                status:500
            }
        )}
        const body= await req.json()
        const newStory = await prisma.story.create(
            {
                data:{
                    ...body
                }
            }
        )
    
        return NextResponse.json(newStory ,{status:201})
}