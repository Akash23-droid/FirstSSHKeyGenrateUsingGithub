import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ success: true, data: "Hello From backend!!!" });
}

export async function POST(request) {
    const data = await request.json();
    console.log('Received data:', data);
    return NextResponse.json({ success: true, message: "Data received successfully!", receivedData: data });
}
