import bcrypt from "bcrypt"

import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"

export async function POST(
    request: Request
){
    const body = await request.json()

    const {
        name,
        email,
        password
    } = body


    if(!email ||!name || !password){
        return new NextResponse("Missing info", {status: 400})
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await prisma.user.create({
        data: {
            name:name,
            email:email,
            hashedPassword:hashedPassword
        }
    })

    return NextResponse.json(user)

}