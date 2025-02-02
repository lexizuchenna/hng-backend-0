import { NextResponse } from "next/server";

export async function GET() {
    const response = NextResponse.json({
        email: "lexizuchenna@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/lexizuchenna/hng-backend-0"
    });

    response.headers.set("Access-Control-Allow-Origin", "*");
    return response;
}
