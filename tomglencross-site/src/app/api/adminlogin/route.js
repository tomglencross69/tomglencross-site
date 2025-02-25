import { NextResponse } from "next/server";

export async function POST(request) {
    const {password} = await request.json()

    if (password === process.env.ADMIN_PASSWORD) {
        return NextResponse.json({success: true})
    } else { 
        return NextResponse.json({success: false})
    }
    }
