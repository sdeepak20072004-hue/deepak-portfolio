import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(254),
  subject: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().min(10).max(5000),
  website: z.string().max(300).optional().default(""),
});

type RateEntry = { count: number; resetAt: number };
const rateLimit = new Map<string, RateEntry>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

function isRateLimited(key: string) {
  const now = Date.now();
  const current = rateLimit.get(key);
  if (!current || current.resetAt <= now) {
    rateLimit.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (current.count >= MAX_REQUESTS) return true;
  current.count += 1;
  return false;
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > 20_000) {
    return NextResponse.json({ message: "Your message is too large." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Please send a valid form submission." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Please check your name, email, and message, then try again." },
      { status: 400 },
    );
  }

  // Quietly accept bot submissions that fill the hidden honeypot field.
  if (parsed.data.website.trim() !== "") {
    return NextResponse.json({ message: "Thanks! Your message has been received." });
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientKey = forwardedFor?.split(",")[0]?.trim() || "local-client";
  if (isRateLimited(clientKey)) {
    return NextResponse.json(
      { message: "Too many attempts. Please wait a few minutes before trying again." },
      { status: 429 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error("Contact form email is not configured. Set RESEND_API_KEY, CONTACT_FROM_EMAIL, and CONTACT_TO_EMAIL.");
    return NextResponse.json(
      { message: "The contact form is not connected yet. Please email me directly using the address below." },
      { status: 503 },
    );
  }

  const { name, email, subject, message } = parsed.data;
  const safeSubject = subject || "New portfolio enquiry";
  const text = [
    "New message from your portfolio contact form",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${safeSubject}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio enquiry: ${safeSubject}`,
        text,
      }),
      cache: "no-store",
    });

    if (!emailResponse.ok) {
      console.error("Email provider rejected contact form message.", { status: emailResponse.status });
      return NextResponse.json(
        { message: "The message could not be sent right now. Please email me directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ message: "Thanks! Your message has been sent successfully." });
  } catch (error) {
    console.error("Contact form delivery error.", error);
    return NextResponse.json(
      { message: "Something went wrong while sending your message. Please email me directly." },
      { status: 502 },
    );
  }
}
