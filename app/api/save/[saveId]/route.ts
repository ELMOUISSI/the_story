import prisma from "@/prisma/client";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, { params }: { params: { saveId: string } }) {
    const { userId } = auth()
    if (!userId) {
        return NextResponse.json("Unauthorized", {
            status: 500
        })
    } 

    const body = await req.json()
    const existingSave = await prisma.save.findUnique({
        where: {
            id: params.saveId
        }
    })

    if (!existingSave) {
        return NextResponse.json("Story not found", {
            status: 404
        })
    }
    const updatedSave = await prisma.save.update(
        {
            where: {
                id: params.saveId

            },
            data: {
                ...body
            }

        }
    )
    return NextResponse.json(updatedSave, {
        status: 201
    })

}

export async function DELETE(req: NextRequest, { params }: { params: { saveId: string } }) {
    const { userId } = auth()
    if (!userId) {
        return NextResponse.json("Unauthorized", {
            status: 500
        })
    }

    const existingSave = await prisma.save.findUnique({
        where: {
            id: params.saveId
        }
    })

    if (!existingSave) {
        return NextResponse.json("Story not found", {
            status: 404
        })
    }
    const deletedSave = await prisma.save.delete({
        where: {
            id: params.saveId
        }
    })
    return NextResponse.json("Story deleted", { status: 201 })
}