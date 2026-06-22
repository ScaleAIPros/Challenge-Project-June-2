import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, recommendations } = await req.json();
  if (!email || !email.includes("@")) return NextResponse.json({ error: "Invalid email" }, { status: 400 });

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (RESEND_API_KEY) {
    const recHtml = recommendations.map((r: { emoji: string; title: string; why: string }) =>
      `<div style="margin-bottom:16px;padding:16px;background:#12121A;border-left:3px solid #00D4FF;border-radius:8px;">
        <div style="font-size:24px;">${r.emoji}</div>
        <strong style="color:#F0F0F0;">${r.title}</strong>
        <p style="color:#8888AA;font-size:13px;margin-top:8px;">${r.why}</p>
      </div>`
    ).join("");

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "ScaleAIPros <hello@scaleaipros.com>",
        to: email,
        subject: "Your AI Video Opportunities from ScaleAIPros 🎯",
        html: `<div style="background:#0A0A0F;color:#F0F0F0;font-family:Inter,sans-serif;padding:40px;max-width:600px;margin:0 auto;">
          <h2 style="color:#00D4FF;">Your personalized AI video recommendations</h2>
          ${recHtml}
          <a href="https://scaleaipros.com/" style="display:inline-block;background:#00D4FF;color:#0A0A0F;padding:12px 24px;border-radius:8px;font-weight:800;text-decoration:none;margin-top:24px;">Visit ScaleAIPros for the free cheat sheet →</a>
          <p style="color:#555577;font-size:11px;margin-top:24px;">@ScaleAIPros · scaleaipros.com</p>
        </div>`,
      }),
    });

    // Also notify brand owner
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "ScaleAIPros <hello@scaleaipros.com>",
        to: "info@ScaleAIPros.com",
        subject: `New lead from AI Video Tool: ${email}`,
        html: `<p>New opt-in from the free tool: <strong>${email}</strong></p>`,
      }),
    });
  }

  return NextResponse.json({ ok: true });
}
