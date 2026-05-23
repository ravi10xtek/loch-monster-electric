import { NextResponse } from "next/server";

const CMS = process.env.CMS_URL || "http://localhost:3001";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid payload." },
      { status: 400 }
    );
  }

  const name = (body?.name ?? "").toString().trim();
  const phone = (body?.phone ?? "").toString().trim();
  const email = (body?.email ?? "").toString().trim();
  const message = (body?.message ?? "").toString().trim();

  if (!name || !phone || !email) {
    return NextResponse.json(
      { ok: false, message: "Name, phone, and email are required." },
      { status: 400 }
    );
  }

  // Basic email shape check
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(`${CMS}/api/contact-submissions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, email, message: message || undefined }),
    });
    const json = await res.json().catch(() => ({}));

    if (!res.ok) {
      console.error("[contact] CMS rejected submission", res.status, json);
      return NextResponse.json(
        { ok: false, message: "We couldn't record your request. Please try again or call us." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, message: "Request received." });
  } catch (err) {
    console.error("[contact] Network error talking to CMS", err);
    return NextResponse.json(
      { ok: false, message: "We couldn't reach our system. Please try again or call us." },
      { status: 502 }
    );
  }
}
