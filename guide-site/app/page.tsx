"use client";
import { useState } from "react";

const keyPoints = [
  {
    number: "01",
    icon: "🎬",
    title: "What HeyGen Actually Is",
    subtitle: "Turn a text prompt into a finished video — no camera needed",
    body: "HeyGen lets you type your video idea and get back a polished, professional video with a lifelike AI presenter reading your script. No filming. No editing. No studio. Just describe what you want, and HeyGen builds the whole thing: script, visuals, voice, captions, and timing.",
    tip: "Business owners are using HeyGen to create marketing explainers, onboarding videos, and social content in minutes — not days.",
    label: "The Tool",
  },
  {
    number: "02",
    icon: "🤖",
    title: "AI Agent: Describe It, Get a Video",
    subtitle: "One prompt → full video, automatically",
    body: "From HeyGen's home screen, describe what you want. The AI Agent builds your complete video from a single description — choosing the structure, writing the script, picking visuals, and syncing the voice. The secret is being specific: mention the tone, audience, and goal in your prompt.",
    tip: 'Try: "Create a 60-second explainer for my bookkeeping service. Show small business owners feeling relieved about their finances. Tone: warm and professional."',
    label: "The Shortcut",
  },
  {
    number: "03",
    icon: "✏️",
    title: "The Editor: You Stay in Control",
    subtitle: "AI builds the draft — you make it perfect",
    body: "After the AI builds your video, jump into AI Studio to refine every detail. Click any scene to rewrite the script. Change caption style to match your brand. Generate a custom background by describing it in plain English. Set the avatar's energy level — calm, welcoming, or excited.",
    tip: "Avoid the 'expressive motion' toggle unless you want your avatar to start doing... interpretive dance.",
    label: "The Control Room",
  },
  {
    number: "04",
    icon: "🧬",
    title: "Clone Yourself — Once and Done",
    subtitle: "15 seconds of recording → your AI twin that works forever",
    body: "HeyGen can create a digital twin of you from a short webcam or phone recording. Once created, your AI clone reads any script in your voice and likeness, appears in any video you generate, and can change outfits and environments without you ever recording again.",
    tip: "Record once. Let your clone produce content while you run your business. That's the real leverage.",
    label: "The Clone",
  },
  {
    number: "05",
    icon: "🎨",
    title: "One Video, Infinite Looks",
    subtitle: "Repurpose content across platforms without re-recording",
    body: "After creating a video with your clone, change the entire visual style with an AI prompt — different background, different outfit, different vibe — without touching the script or re-recording. Same content, totally new feel. Perfect for repurposing one video across LinkedIn, Instagram, and YouTube.",
    tip: 'Prompt example: "Dark cinematic stage, soft spotlight, subtle rim lighting, dark fitted jacket." Instant makeover.',
    label: "The Multiplier",
  },
  {
    number: "06",
    icon: "🌍",
    title: "Speak Every Language — Automatically",
    subtitle: "175+ languages, no re-recording, no translator",
    body: "Upload your English video, choose a target language (French, Spanish, Japanese — 175+ options), and HeyGen re-dubs it with your avatar speaking naturally in that language. One video, global reach. No translator needed. No re-recording.",
    tip: "You might not speak French. But your avatar can. That's the kind of scale that used to cost tens of thousands of dollars.",
    label: "The Translator",
  },
  {
    number: "07",
    icon: "✨",
    title: "Go Faceless — Animated Characters",
    subtitle: "Build a content channel without ever being on camera",
    body: "Don't want to be on camera? Create a fully animated AI character with a custom personality, voice, and look. Give it a name, choose its style (Pixar, realistic, cartoon), describe its world, and start generating content. You can build an educational mascot, a faceless content channel, or a story-driven series.",
    tip: "One animated character with unlimited looks = one channel that can scale to multiple audiences and niches without you ever pressing record.",
    label: "The Faceless Path",
  },
];

export default function Home() {
  const [openPoint, setOpenPoint] = useState<number | null>(null);

  return (
    <div style={{ background: "#0A0A0F", minHeight: "100vh", color: "#F0F0F0" }}>
      {/* Nav */}
      <nav style={{ borderBottom: "1px solid #1E1E2E", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, background: "#0A0A0Fcc", backdropFilter: "blur(12px)", zIndex: 100 }}>
        <span style={{ fontFamily: "JetBrains Mono, monospace", color: "#00D4FF", fontSize: "14px", fontWeight: 600 }}>@ScaleAIPros</span>
        <a href="https://scaleaipros.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#00D4FF", fontSize: "13px", textDecoration: "none", border: "1px solid #00D4FF", padding: "6px 14px", borderRadius: "6px" }}>
          Visit ScaleAIPros →
        </a>
      </nav>

      {/* Hero — two column: text left, video right */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 24px 48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "48px", flexWrap: "wrap" }}>

          {/* Left — text */}
          <div style={{ flex: "1", minWidth: "280px" }}>
            <div style={{ fontFamily: "JetBrains Mono, monospace", color: "#00D4FF", fontSize: "11px", letterSpacing: "3px", marginBottom: "16px", textTransform: "uppercase" }}>
              Free Interactive Guide
            </div>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.15, margin: "0 0 20px" }}>
              How to Create AI Videos<br />
              <span style={{ color: "#00D4FF" }}>Without Being on Camera</span>
            </h1>
            <p style={{ fontSize: "1rem", color: "#8888AA", marginBottom: "28px", lineHeight: 1.7 }}>
              A plain-English walkthrough of HeyGen 2026 — the tool that lets any business owner create professional videos with zero filming, zero editing, and zero camera anxiety.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="/cheat-sheet.html" target="_blank" rel="noopener noreferrer" style={{ border: "1px solid #7C3AED", color: "#7C3AED", padding: "12px 24px", borderRadius: "8px", fontWeight: 600, textDecoration: "none", fontSize: "14px" }}>
                Free Cheat Sheet
              </a>
            </div>
            {/* Stats */}
            <div style={{ display: "flex", gap: "32px", marginTop: "36px", flexWrap: "wrap" }}>
              {[["7", "Key Points"], ["175+", "Languages"], ["0", "Cameras Needed"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#00D4FF" }}>{num}</div>
                  <div style={{ fontSize: "12px", color: "#8888AA" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — video */}
          <div style={{ flex: "1", minWidth: "300px" }}>
            <div style={{ fontFamily: "JetBrains Mono, monospace", color: "#00D4FF", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px", textAlign: "center" }}>Watch First — 3 min</div>
            <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", background: "#12121A", border: "1px solid #1E1E2E", borderRadius: "14px", overflow: "hidden", boxShadow: "0 0 40px rgba(0,212,255,0.12)" }}>
              <iframe
                src="https://app.heygen.com/embeds/64ce5512259e4098a93e4aa80ce7f27c"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none", borderRadius: "14px" }}
                allow="autoplay; fullscreen"
                allowFullScreen
                title="ScaleAIPros — How to Create AI Videos Without Being on Camera"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3 Takeaways */}
      <section style={{ background: "#12121A", borderTop: "1px solid #1E1E2E", borderBottom: "1px solid #1E1E2E" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 24px" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, textAlign: "center", marginBottom: "40px" }}>The 3 Big Takeaways</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
            {[
              { n: "1", t: "Video is no longer optional", b: "But it doesn't have to cost you time or money. The tools are here." },
              { n: "2", t: "The biggest barrier is gone", b: "You don't need to be on camera. You don't need to know how to edit." },
              { n: "3", t: "Start now, not later", b: "The businesses winning are the ones who start while others overthink it." },
            ].map(({ n, t, b }) => (
              <div key={n} style={{ background: "#0A0A0F", border: "1px solid #1E1E2E", borderRadius: "12px", padding: "24px" }}>
                <div style={{ color: "#00D4FF", fontFamily: "JetBrains Mono, monospace", fontSize: "28px", fontWeight: 800, marginBottom: "12px" }}>{n}</div>
                <div style={{ fontWeight: 700, marginBottom: "8px" }}>{t}</div>
                <div style={{ color: "#8888AA", fontSize: "14px", lineHeight: 1.6 }}>{b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: "680px", margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, marginBottom: "16px" }}>
          Ready to Stop Overthinking AI<br />and Start Using It?
        </h2>
        <p style={{ color: "#8888AA", fontSize: "1.05rem", marginBottom: "32px", lineHeight: 1.7 }}>
          Download the free HeyGen Quick-Start Cheat Sheet — one page, plain English, every step you need to make your first AI video today.
        </p>
        <a
          href="/cheat-sheet.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "#00D4FF",
            color: "#0A0A0F",
            padding: "16px 36px",
            borderRadius: "8px",
            fontWeight: 800,
            fontSize: "1rem",
            textDecoration: "none",
            boxShadow: "0 0 30px rgba(0,212,255,0.4)",
          }}
        >
          Get the Free Cheat Sheet →
        </a>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #1E1E2E", padding: "24px", textAlign: "center", color: "#8888AA", fontSize: "13px" }}>
        <span style={{ fontFamily: "JetBrains Mono, monospace", color: "#00D4FF" }}>@ScaleAIPros</span>
        {" · "}
        <a href="https://scaleaipros.com/" style={{ color: "#8888AA", textDecoration: "none" }}>scaleaipros.com</a>
        {" · AI doesn't have to be complicated."}
      </footer>
    </div>
  );
}
