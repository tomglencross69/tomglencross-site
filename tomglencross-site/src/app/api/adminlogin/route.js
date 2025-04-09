import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"

export async function POST(request) {
    const { password } = await request.json();

    if (password === process.env.ADMIN_PASSWORD) {
        const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        const response = NextResponse.json({ success: true });
        response.cookies.set("admin-auth", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
            maxAge: 60 * 60 * 24, // 1 day
        });

        return response;
    } else {
        return NextResponse.json({ success: false });
    }
}