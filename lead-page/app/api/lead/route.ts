import { NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = "info@ScaleAIPros.com";
const CHEAT_SHEET_URL = "https://challenge-project-june-2-esfpz5syr-scale-aip.vercel.app/cheat-sheet.html";

async function sendEmail(to: string, subject: string, html: string) {
  if (!RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set — email skipped");
    return;
  }
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "ScaleAIPros <hello@scaleaipros.com>",
      to,
      subject,
      html,
    }),
  });
}

export async function POST(req: NextRequest) {
  const { name, email } = await req.json();

  if (!name || !email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  // Notify brand owner
  await sendEmail(
    TO_EMAIL,
    `New lead: ${name} (${email})`,
    `<h2>New Lead Captured</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>Source: HeyGen Cheat Sheet landing page</p>`
  );

  // Send cheat sheet to subscriber
  await sendEmail(
    email,
    `${name}, here's your HeyGen Quick-Start Cheat Sheet 🎬`,
    `
<div style="background:#0A0A0F;color:#F0F0F0;font-family:Inter,sans-serif;padding:40px;max-width:600px;margin:0 auto;">
  <h1 style="color:#00D4FF;font-size:24px;margin-bottom:8px;">Hey ${name}! 👋</h1>
  <p style="color:#CCCCDD;line-height:1.7;">Your free HeyGen Quick-Start Cheat Sheet is ready. Click the link below to download it — one page, plain English, every step you need to make your first AI video today.</p>
  <a href="${CHEAT_SHEET_URL}" style="display:inline-block;background:#00D4FF;color:#0A0A0F;padding:14px 28px;border-radius:8px;font-weight:800;text-decoration:none;margin:24px 0;">Download the Cheat Sheet →</a>
  <p style="color:#8888AA;font-size:13px;">Questions? Hit reply — we read every email.</p>
  <hr style="border:1px solid #1E1E2E;margin:24px 0;" />
  <p style="color:#555577;font-size:11px;">@ScaleAIPros · <a href="https://scaleaipros.com/" style="color:#555577;">scaleaipros.com</a> · AI does not have to be complicated.</p>
</div>
    `
  );

  return NextResponse.json({ ok: true });
}
