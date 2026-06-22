"use client";
import { useState } from "react";

const questions = [
  { id: "goal", q: "What is your main business goal right now?", options: ["Get more leads / customers", "Onboard clients faster", "Build brand awareness", "Save time on repetitive tasks", "Grow my social media presence"] },
  { id: "camera", q: "How do you feel about being on camera?", options: ["Love it — I am already recording", "Open to it but have not started", "Prefer to stay off camera", "I have a team member who can do it", "No preference"] },
  { id: "content", q: "What type of content does your audience respond to most?", options: ["Short-form video (Reels, TikTok)", "Long-form education / tutorials", "Email newsletters", "Social posts with text", "I am not sure yet"] },
  { id: "time", q: "How much time can you dedicate to content per week?", options: ["Less than 1 hour", "1 to 3 hours", "3 to 5 hours", "5+ hours", "I want to automate it completely"] },
  { id: "tech", q: "What is your comfort level with new tech tools?", options: ["Total beginner — keep it simple", "I can follow a tutorial", "I pick things up quickly", "I enjoy experimenting", "I have tech support or a VA"] },
];

function getRecommendations(answers: Record<string, string>) {
  const recs = [];
  if (answers.camera === "Prefer to stay off camera" || answers.camera === "No preference") {
    recs.push({ emoji: "🎭", title: "Faceless Animated Character Channel", why: "Build a full content channel with an animated AI character in HeyGen — no camera, no recording, just your words turned into video." });
  }
  if (answers.goal === "Get more leads / customers" || answers.goal === "Build brand awareness") {
    recs.push({ emoji: "📱", title: "Short-Form AI Video for Social", why: "Use HeyGen to produce 30 to 60 second AI presenter videos for Instagram, TikTok, and YouTube Shorts. One prompt, one minute, one video." });
  }
  if (answers.goal === "Onboard clients faster") {
    recs.push({ emoji: "🎬", title: "AI Avatar Onboarding Videos", why: "Clone yourself once, then generate onboarding and welcome videos for every new client automatically — no re-recording needed." });
  }
  if (answers.time === "Less than 1 hour" || answers.time === "I want to automate it completely") {
    recs.push({ emoji: "🤖", title: "AI Agent Video Batch Production", why: "HeyGen AI Agent lets you queue multiple videos from prompts. Describe 5 videos on Monday, have them all done by Tuesday." });
  }
  if (answers.goal === "Grow my social media presence" || answers.content === "Short-form video (Reels, TikTok)") {
    recs.push({ emoji: "🌍", title: "Multilingual Content Expansion", why: "Record your best video once, translate it into 10 languages with HeyGen. Reach audiences you could never afford to reach before." });
  }
  if (recs.length === 0) {
    recs.push({ emoji: "✨", title: "AI Clone — Your Digital Twin", why: "Start by cloning yourself in HeyGen. One 15-second recording creates a version of you that produces unlimited videos in any language or style." });
  }
  return recs.slice(0, 3);
}

export default function FreeTool() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string,string>>({});
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState<"idle"|"loading"|"sent">("idle");

  const currentQ = questions[step - 1];
  const recs = step === 6 ? getRecommendations(answers) : [];
  const progress = step === 0 ? 0 : Math.min((step / 5) * 100, 100);

  function selectAnswer(val: string) {
    const next = { ...answers, [currentQ.id]: val };
    setAnswers(next);
    setTimeout(() => setStep(s => Math.min(s + 1, 6)), 300);
  }

  async function handleSendEmail() {
    if (!email || !email.includes("@")) return;
    setEmailStatus("loading");
    try {
      await fetch("/api/send-results", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, recommendations: recs }) });
    } catch {}
    setEmailStatus("sent");
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0F", color: "#F0F0F0", fontFamily: "Inter, sans-serif" }}>
      <nav style={{ borderBottom: "1px solid #1E1E2E", padding: "14px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "JetBrains Mono, monospace", color: "#00D4FF", fontSize: "13px", fontWeight: 600 }}>@ScaleAIPros</span>
        <a href="https://scaleaipros.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#8888AA", fontSize: "13px", textDecoration: "none" }}>scaleaipros.com</a>
      </nav>

      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "60px 24px" }}>
        {step === 0 && (
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "inline-block", fontFamily: "JetBrains Mono, monospace", color: "#00D4FF", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)", padding: "4px 12px", borderRadius: "20px", marginBottom: "24px" }}>Free Tool</div>
            <h1 style={{ fontSize: "clamp(1.8rem,5vw,2.8rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "16px" }}>Find Your Best<br /><span style={{ color: "#00D4FF" }}>AI Video Use Case</span></h1>
            <p style={{ color: "#8888AA", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "40px" }}>Answer 5 quick questions. Get instant, personalized recommendations for how to use HeyGen in your specific business.</p>
            <button onClick={() => setStep(1)} style={{ background: "#00D4FF", color: "#0A0A0F", border: "none", padding: "16px 36px", borderRadius: "8px", fontSize: "16px", fontWeight: 800, cursor: "pointer", boxShadow: "0 0 24px rgba(0,212,255,0.4)" }}>Get My Recommendations →</button>
            <p style={{ color: "#555577", fontSize: "12px", marginTop: "12px" }}>Takes under 60 seconds. No sign-up required.</p>
          </div>
        )}

        {step >= 1 && step <= 5 && (
          <div>
            <div style={{ marginBottom: "40px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontFamily: "JetBrains Mono, monospace", color: "#8888AA", fontSize: "12px" }}>Question {step} of 5</span>
                <span style={{ fontFamily: "JetBrains Mono, monospace", color: "#00D4FF", fontSize: "12px" }}>{Math.round(progress)}%</span>
              </div>
              <div style={{ background: "#1E1E2E", borderRadius: "4px", height: "4px" }}>
                <div style={{ background: "#00D4FF", height: "100%", width: `${progress}%`, transition: "width 0.3s ease", borderRadius: "4px" }} />
              </div>
            </div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "28px", lineHeight: 1.4 }}>{currentQ.q}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {currentQ.options.map(opt => (
                <button key={opt} onClick={() => selectAnswer(opt)} style={{ background: answers[currentQ.id] === opt ? "rgba(0,212,255,0.1)" : "#12121A", border: `1px solid ${answers[currentQ.id] === opt ? "#00D4FF" : "#1E1E2E"}`, color: "#F0F0F0", padding: "14px 18px", borderRadius: "8px", fontSize: "14px", textAlign: "left", cursor: "pointer", fontFamily: "Inter, sans-serif", transition: "all 0.15s" }}>{opt}</button>
              ))}
            </div>
          </div>
        )}

        {step === 6 && (
          <div>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <div style={{ fontSize: "3rem", marginBottom: "12px" }}>🎯</div>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "12px" }}>Your Top AI Video Opportunities</h2>
              <p style={{ color: "#8888AA", lineHeight: 1.6 }}>Based on your answers, here are the highest-impact ways to use HeyGen in your business right now.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
              {recs.map((rec, i) => (
                <div key={i} style={{ background: "#12121A", border: "1px solid #1E1E2E", borderRadius: "12px", padding: "24px", borderLeft: "3px solid #00D4FF" }}>
                  <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{rec.emoji}</div>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: "8px" }}>{rec.title}</div>
                  <div style={{ color: "#8888AA", fontSize: "14px", lineHeight: 1.6 }}>{rec.why}</div>
                </div>
              ))}
            </div>
            {emailStatus !== "sent" ? (
              <div style={{ background: "#12121A", border: "1px solid #7C3AED", borderRadius: "12px", padding: "24px", textAlign: "center" }}>
                <h3 style={{ fontWeight: 700, marginBottom: "8px" }}>Email me these results</h3>
                <p style={{ color: "#8888AA", fontSize: "13px", marginBottom: "16px" }}>We will also send you the free HeyGen cheat sheet.</p>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
                  <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} style={{ flex: 1, minWidth: "200px", background: "#0A0A0F", border: "1px solid #1E1E2E", color: "#F0F0F0", padding: "10px 14px", borderRadius: "6px", fontSize: "14px" }} />
                  <button onClick={handleSendEmail} disabled={emailStatus === "loading"} style={{ background: "#7C3AED", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "6px", fontSize: "14px", fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>{emailStatus === "loading" ? "Sending..." : "Send Results →"}</button>
                </div>
              </div>
            ) : (
              <div style={{ background: "#12121A", border: "1px solid #00D4FF", borderRadius: "12px", padding: "24px", textAlign: "center" }}>
                <div style={{ color: "#00D4FF", fontWeight: 700 }}>Check your inbox!</div>
                <p style={{ color: "#8888AA", fontSize: "13px", marginTop: "8px" }}>Results + cheat sheet sent to {email}</p>
              </div>
            )}
            <div style={{ textAlign: "center", marginTop: "32px" }}>
              <button onClick={() => { setStep(0); setAnswers({}); setEmail(""); setEmailStatus("idle"); }} style={{ background: "none", border: "1px solid #1E1E2E", color: "#8888AA", padding: "10px 20px", borderRadius: "6px", cursor: "pointer", fontSize: "13px" }}>Start Over</button>
            </div>
          </div>
        )}
      </div>

      <footer style={{ borderTop: "1px solid #1E1E2E", padding: "24px", textAlign: "center", color: "#555577", fontSize: "12px" }}>
        <a href="https://scaleaipros.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#00D4FF", textDecoration: "none", fontFamily: "JetBrains Mono, monospace" }}>@ScaleAIPros</a> · AI does not have to be complicated.
      </footer>
    </div>
  );
}
