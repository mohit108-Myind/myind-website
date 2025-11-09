import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Basic email sanitizer
const clean = (v: unknown) => (typeof v === "string" ? v.trim() : "");

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Honeypot: if bot filled this, drop
    if (clean(data.company_website)) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(data.name);
    const email = clean(data.email);
    const company = clean(data.company);
    const website = clean(data.website);
    const budget = clean(data.budget);
    const timeline = clean(data.timeline);
    const goals = clean(data.goals);
    const services = Array.isArray(data.services) ? data.services.join(", ") : clean(data.services);

    if (!name || !email) {
      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
    }

    const subject = `Project Inquiry — ${name}`;
    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "—"}`,
      `Website: ${website || "—"}`,
      `Monthly Budget: ${budget || "—"}`,
      `Timeline: ${timeline || "—"}`,
      `Interested Services: ${services || "—"}`,
      "",
      "Goals / Notes:",
      `${goals || "—"}`,
    ];

    // Change "from" to your verified domain sender after Resend domain setup
    const { data: sent, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // later: "MYIND <hello@myindmarketing.com>"
      to: ["mohit108@myindmarketing.com"],
      replyTo: email,
      subject,
      text: lines.join("\n"),
    });

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }
    return NextResponse.json({ ok: true, id: sent?.id });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message || "Unknown error" }, { status: 500 });
  }
}
