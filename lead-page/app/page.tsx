"use client";
import { useState } from "react";

const benefits = [
  "The exact 7 steps to your first HeyGen video (under 10 minutes)",
  "How to clone yourself with a 15-second phone recording",
  "The AI prompt formula that builds great videos every time",
  "How to translate any video into 175+ languages instantly",
  "The one motion setting beginners always get wrong (and how to avoid it)",
  "How to go completely faceless with animated AI characters",
  "The business use cases generating the most ROI right now",
];

export default function LeadPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });
      if (!res.ok) throw new Error("Submit failed");
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email info@ScaleAIPros.com");
    }
  }

  const cardStyle = { background: "#12121A", border: "1px solid #1E1E2E", borderRadius: "16px", padding: "36px", maxWidth: "480px", margin: "0 auto" };
  const inputStyle = { width: "100%", background: "#0A0A0F", border: "1px solid #1E1E2E", color: "#F0F0F0", padding: "12px 14px", borderRadius: "8px", fontSize: "15px", marginBottom: "14px", display: "block" };
  const btnStyle = { width: "100%", background: "#00D4FF", color: "#0A0A0F", border: "none", padding: "14px", borderRadius: "8px", fontSize: "16px", fontWeight: 800, cursor: "pointer", boxShadow: "0 0 24px rgba(0,212,255,0.4)" };

  return (
    <div style={{ minHeight: "100vh", fontFamily: "Inter, sans-serif", color: "#F0F0F0", background: "#0A0A0F" }}>
      <nav style={{ borderBottom: "1px solid #1E1E2E", padding: "14px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "JetBrains Mono, monospace", color: "#00D4FF", fontSize: "13px", fontWeight: 600 }}>@ScaleAIPros</span>
        <a href="https://scaleaipros.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#8888AA", fontSize: "13px", textDecoration: "none" }}>scaleaipros.com →</a>
      </nav>

      <section style={{ maxWidth: "680px", margin: "0 auto", padding: "72px 24px 48px", textAlign: "center" }}>
        <div style={{ display: "inline-block", fontFamily: "JetBrains Mono, monospace", color: "#00D4FF", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)", padding: "4px 12px", borderRadius: "20px", marginBottom: "20px" }}>Free Download</div>
        <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, lineHeight: 1.15, margin: "0 0 20px" }}>
          Make Your First AI Video<br /><span style={{ color: "#00D4FF" }}>In Under 10 Minutes</span>
        </h1>
        <p style={{ color: "#8888AA", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "40px" }}>
          Get the free one-page HeyGen Cheat Sheet — no camera required.
        </p>

        {status === "success" ? (
          <div style={{ ...cardStyle, borderColor: "#00D4FF", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🎉</div>
            <h2 style={{ color: "#00D4FF", marginBottom: "12px" }}>Check your inbox!</h2>
            <p style={{ color: "#8888AA", lineHeight: 1.7 }}>The cheat sheet is heading to <strong style={{ color: "#F0F0F0" }}>{email}</strong>. Check spam if you do not see it in 2 minutes.</p>
            <a href="https://scaleaipros.com/" style={{ display: "inline-block", marginTop: "24px", color: "#00D4FF", textDecoration: "none", fontSize: "14px" }}>Visit ScaleAIPros.com while you wait →</a>
          </div>
        ) : (
          <div style={cardStyle}>
            <form onSubmit={handleSubmit}>
              <label style={{ display: "block", fontSize: "13px", color: "#8888AA", marginBottom: "6px", textAlign: "left" }}>First Name</label>
              <input style={inputStyle} type="text" placeholder="Your first name" value={name} onChange={e => setName(e.target.value)} required />
              <label style={{ display: "block", fontSize: "13px", color: "#8888AA", marginBottom: "6px", textAlign: "left" }}>Email Address</label>
              <input style={inputStyle} type="email" placeholder="you@yourcompany.com" value={email} onChange={e => setEmail(e.target.value)} required />
              {status === "error" && <p style={{ color: "#FF6B6B", fontSize: "13px", marginBottom: "12px" }}>{errorMsg}</p>}
              <button style={btnStyle} type="submit" disabled={status === "loading"}>{status === "loading" ? "Sending..." : "Send Me the Free Cheat Sheet →"}</button>
              <p style={{ fontSize: "11px", color: "#555577", marginTop: "12px" }}>No spam. No credit card. Unsubscribe anytime.</p>
            </form>
          </div>
        )}
      </section>

      <section style={{ maxWidth: "680px", margin: "0 auto", padding: "0 24px 80px" }}>
        <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "24px", textAlign: "center" }}>Here is exactly what is inside:</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {benefits.map((b, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", background: "#12121A", border: "1px solid #1E1E2E", borderRadius: "8px", padding: "14px 16px" }}>
              <span style={{ color: "#00D4FF", fontWeight: 800, minWidth: "20px" }}>✓</span>
              <span style={{ color: "#CCCCDD", fontSize: "14px", lineHeight: 1.6 }}>{b}</span>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ maxWidth: "680px", margin: "0 auto", padding: "40px 24px", textAlign: "center" }}>
        <p style={{ color: "#8888AA", fontSize: "13px" }}>Built by <a href="https://scaleaipros.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#00D4FF", textDecoration: "none" }}>ScaleAIPros</a> — AI does not have to be complicated.</p>
        <span style={{ fontFamily: "JetBrains Mono, monospace", color: "#555577", fontSize: "12px" }}>@ScaleAIPros</span>
      </footer>
    </div>
  );
}
