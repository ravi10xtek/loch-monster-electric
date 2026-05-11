import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { phone = "", email = "" } = body ?? {};

    if (!phone || !email) {
      return NextResponse.json(
        { ok: false, message: "Phone and email are required." },
        { status: 400 }
      );
    }

    return NextResponse.json({ ok: true, message: "Request received." });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid payload." },
      { status: 400 }
    );
  }
}
