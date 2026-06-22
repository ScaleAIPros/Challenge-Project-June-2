"use client";
import { useState, useEffect } from "react";

const CTA_URL = "https://scaleaipros.com/";

const days = [
  {
    day: 1, theme: "The Hook", emoji: "🎣",
    goal: "Stop the scroll. Plant the seed. Get people curious about AI video.",
    posts: [
      { platform: "Facebook", icon: "👥", caption: "What if you never had to be on camera again — but still posted videos every day?\n\nThat is not a fantasy. It is HeyGen.\n\nI just dropped a free guide showing exactly how it works. No tech background needed.\n\n👇 Link in comments\n\n#AIVideo #ScaleAIPros #BusinessAutomation" },
      { platform: "Instagram", icon: "📸", caption: "POV: You just made a professional marketing video in 8 minutes. Without turning on your camera. Without editing a single frame.\n\nHeyGen does the heavy lifting. You just type what you want.\n\nFull guide is free → link in bio 🔗\n\n#AITools #ContentCreator #HeyGen #ScaleAIPros" },
      { platform: "TikTok", icon: "🎵", caption: "I made a whole video without being on camera and it looked MORE professional than my usual stuff 😭\n\nComment HEYGEN and I will send you the free guide\n\n@ScaleAIPros #AIVideo #SmallBusiness #HeyGen #BusinessTips" },
      { platform: "X (Twitter)", icon: "𝕏", caption: "Most business owners are sleeping on AI video.\n\nYou can now:\n• Clone yourself in 15 seconds\n• Generate videos from a prompt\n• Translate to 175+ languages automatically\n\nZero camera. Zero editing.\n\nFree guide → " + CTA_URL + "\n\n@ScaleAIPros" },
      { platform: "Community", icon: "🏘️", caption: "Hey everyone! Dropping something free today.\n\nI put together a plain-English guide to HeyGen 2026 — the AI video tool that lets you create professional videos without ever turning on your camera.\n\n7 key points, no fluff, no tech jargon.\n\nGrab it free here: " + CTA_URL + "\n\nLet me know what questions you have! 👇" },
    ]
  },
  {
    day: 2, theme: "The Problem", emoji: "😤",
    goal: "Call out the pain. Make them feel seen. Position AI video as the solution.",
    posts: [
      { platform: "Facebook", icon: "👥", caption: "Be honest — how long have you been putting off video content?\n\nMost business owners say the same things:\n❌ I hate how I look on camera\n❌ I do not have time to edit\n❌ I do not know where to start\n\nEvery single one of those excuses is now obsolete.\n\nFree guide: " + CTA_URL + "\n\n#AIVideo #ScaleAIPros" },
      { platform: "Instagram", icon: "📸", caption: "The old way to make a business video:\n\n1. Book a studio ($$$)\n2. Hire an editor ($$$)\n3. Write a script (hours)\n4. Record 47 takes\n5. Wait 2 weeks for the edit\n\nThe new way:\n→ Type what you want\n→ Get a finished video in minutes\n\nFree guide in bio 👆\n\n#HeyGen #AITools #ScaleAIPros" },
      { platform: "TikTok", icon: "🎵", caption: "Every competitor posting video while you are still thinking about it 😬\n\nHere is the thing — you do not need to be on camera anymore.\n\nFree guide → link in bio\n\n@ScaleAIPros #AIBusiness #HeyGen #BusinessTips" },
      { platform: "X (Twitter)", icon: "𝕏", caption: "Harsh truth: businesses posting video every week are eating the lunch of businesses that are not.\n\nHarder truth: the barrier just dropped to almost zero thanks to AI.\n\nFree guide → " + CTA_URL + "\n\n@ScaleAIPros" },
      { platform: "Community", icon: "🏘️", caption: "Quick question for the community:\n\nWhat has been your biggest barrier to creating video content?\n\nA) I hate being on camera\nB) No time to edit\nC) Do not know what to say\nD) The tech feels overwhelming\n\nReply below — the free guide at " + CTA_URL + " covers all of it." },
    ]
  },
  {
    day: 3, theme: "The Proof", emoji: "📊",
    goal: "Show the tool in action. Build belief. Remove skepticism.",
    posts: [
      { platform: "Facebook", icon: "👥", caption: "Here is what HeyGen produced in under 10 minutes:\n\n✅ A lifelike AI presenter reading my exact script\n✅ Custom background from a text prompt\n✅ Branded captions, music, and timing\n✅ Ready to post on every platform\n\nFree beginner guide: " + CTA_URL + "\n\n#HeyGen #AIVideo #ScaleAIPros" },
      { platform: "Instagram", icon: "📸", caption: "Real talk: I was skeptical too.\n\nThen I cloned myself in 15 seconds and watched my AI twin explain my services on camera without me doing anything.\n\nThe guide walks you through every step. Free.\n\nLink in bio 🔗\n\n#AIAvatar #HeyGen #ScaleAIPros" },
      { platform: "TikTok", icon: "🎵", caption: "I described a video in one sentence. HeyGen built the whole thing.\n\nScript ✅ Presenter ✅ Background ✅ Captions ✅ Music ✅\n\nAll I did was type.\n\nFree guide → link in bio\n\n@ScaleAIPros #AITools #HeyGen" },
      { platform: "X (Twitter)", icon: "𝕏", caption: "The HeyGen workflow:\n\n1. Type your video idea (be specific)\n2. Pick an avatar or clone yourself\n3. Hit generate\n4. Tweak in the editor\n5. Download and post\n\nTotal time: 8 to 15 minutes.\n\nFull breakdown → " + CTA_URL + "\n\n@ScaleAIPros" },
      { platform: "Community", icon: "🏘️", caption: "Day 3 and I keep getting the same question:\n\n'Is this actually good quality or does it look fake?'\n\nHonest answer: it depends on what you do with it. The guide covers exactly how to set up your clone recording — and the one motion setting you should NEVER touch.\n\nGrab it free: " + CTA_URL },
    ]
  },
  {
    day: 4, theme: "The Deep Dive", emoji: "🔍",
    goal: "Go deeper on one key feature. Show expertise. Drive guide downloads.",
    posts: [
      { platform: "Facebook", icon: "👥", caption: "The HeyGen feature no one talks about enough:\n\nYou can translate any video into 175+ languages automatically.\n\nRecord in English. Post in French, Spanish, Japanese, Portuguese.\n\nNo re-recording. No translator. No extra cost.\n\nOne video. Global reach.\n\nFull guide: " + CTA_URL + "\n\n#AIVideo #HeyGen #ScaleAIPros" },
      { platform: "Instagram", icon: "📸", caption: "What if your video could speak French?\n\nWith HeyGen translation:\n→ Upload your English video\n→ Choose any of 175+ languages\n→ Your avatar speaks it natively\n\nThis is how solopreneurs compete with global brands.\n\nFree guide in bio 👆\n\n#HeyGen #ScaleAIPros" },
      { platform: "TikTok", icon: "🎵", caption: "I uploaded my video in English. HeyGen translated it to French. My AI clone is now speaking French on camera without me.\n\nI do not speak French.\n\n175 languages. Zero re-recording.\n\n@ScaleAIPros #HeyGen #AIVideo" },
      { platform: "X (Twitter)", icon: "𝕏", caption: "HeyGen translation = one-to-many leverage.\n\nYour best video x 175 languages = 175 versions of your best video.\n\nThis is how you scale content without scaling effort.\n\nFree guide → " + CTA_URL + "\n\n@ScaleAIPros" },
      { platform: "Community", icon: "🏘️", caption: "Who here has a potential customer base outside of English-speaking markets?\n\nHeyGen lets you translate any video into 175+ languages — your AI clone speaks the language naturally.\n\nI cover this in the free guide: " + CTA_URL + "\n\nWhat language would you translate into first?" },
    ]
  },
  {
    day: 5, theme: "The Call to Action", emoji: "🚀",
    goal: "Close strong. Make it easy to say yes. Final push to the guide and community.",
    posts: [
      { platform: "Facebook", icon: "👥", caption: "This week I showed you:\n\n🎬 How to make AI videos from a single prompt\n🧬 How to clone yourself in 15 seconds\n🌍 How to translate into 175+ languages\n✨ How to go faceless with animated characters\n\nAll of it is in the free guide.\n\nLast chance to grab it this week: " + CTA_URL + "\n\n#HeyGen #AIVideo #ScaleAIPros" },
      { platform: "Instagram", icon: "📸", caption: "If you have been watching this week and thinking 'I need to try this' — today is the day.\n\nThe free cheat sheet is one page. Plain English. Every step.\n\nGo get it → link in bio 🔗\n\n@ScaleAIPros #AITools #HeyGen #JustStart" },
      { platform: "TikTok", icon: "🎵", caption: "You watched all week. Now it is time to actually do it.\n\nFree guide. One page. No tech skills needed.\n\nLink in bio. Go.\n\n@ScaleAIPros #HeyGen #AIVideo #TakeAction" },
      { platform: "X (Twitter)", icon: "𝕏", caption: "Week recap:\n\n→ AI video is here and it is good\n→ No camera needed\n→ Clone yourself in minutes\n→ 175 languages, zero re-recording\n→ Animated characters for faceless channels\n\nFree guide → " + CTA_URL + "\n\nSave this. Share it. Go build. @ScaleAIPros" },
      { platform: "Community", icon: "🏘️", caption: "Last post of launch week!\n\nThank you to everyone who downloaded the guide, tried HeyGen, and asked questions this week.\n\nIf you have not grabbed the free cheat sheet yet: " + CTA_URL + "\n\nDrop your first AI video below — I want to see what you build! 🙌\n\n— @ScaleAIPros" },
    ]
  },
];

export default function LaunchSite() {
  const [openDay, setOpenDay] = useState<number | null>(1);
  const [signedOff, setSignedOff] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("scaleai-signoffs");
      if (saved) setSignedOff(JSON.parse(saved));
    } catch {}
  }, []);

  function toggleSignOff(key: string) {
    const next = { ...signedOff, [key]: !signedOff[key] };
    setSignedOff(next);
    localStorage.setItem("scaleai-signoffs", JSON.stringify(next));
  }

  function copyCaption(text: string, key: string) {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  }

  const totalPosts = days.length * 5;
  const completedPosts = Object.values(signedOff).filter(Boolean).length;
  const progress = Math.round((completedPosts / totalPosts) * 100);

  const card = { background: "#12121A", border: "1px solid #1E1E2E", borderRadius: "12px", overflow: "hidden" as const };

  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0F", color: "#F0F0F0", fontFamily: "Inter, sans-serif" }}>
      <nav style={{ borderBottom: "1px solid #1E1E2E", padding: "14px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, background: "#0A0A0Fcc", backdropFilter: "blur(12px)", zIndex: 100 }}>
        <span style={{ fontFamily: "JetBrains Mono, monospace", color: "#00D4FF", fontSize: "13px", fontWeight: 600 }}>@ScaleAIPros</span>
        <a href={CTA_URL} target="_blank" rel="noopener noreferrer" style={{ color: "#00D4FF", fontSize: "13px", textDecoration: "none", border: "1px solid #00D4FF", padding: "6px 14px", borderRadius: "6px" }}>Get the Guide →</a>
      </nav>

      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 24px 40px", textAlign: "center" }}>
        <div style={{ display: "inline-block", fontFamily: "JetBrains Mono, monospace", color: "#00D4FF", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)", padding: "4px 12px", borderRadius: "20px", marginBottom: "20px" }}>Interactive Launch Plan</div>
        <h1 style={{ fontSize: "clamp(1.8rem,5vw,3rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "16px" }}>Your 5-Day HeyGen<br /><span style={{ color: "#00D4FF" }}>Launch Playbook</span></h1>
        <p style={{ color: "#8888AA", fontSize: "1rem", lineHeight: 1.7, marginBottom: "32px" }}>Copy-paste captions for every platform, every day. Check off each post as you send it.</p>
        <div style={{ background: "#12121A", border: "1px solid #1E1E2E", borderRadius: "12px", padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <span style={{ fontSize: "13px", color: "#8888AA" }}>Launch Progress</span>
            <span style={{ fontFamily: "JetBrains Mono, monospace", color: "#00D4FF", fontSize: "13px" }}>{completedPosts}/{totalPosts} posts</span>
          </div>
          <div style={{ background: "#1E1E2E", borderRadius: "4px", height: "6px", overflow: "hidden" }}>
            <div style={{ background: "linear-gradient(90deg,#7C3AED,#00D4FF)", height: "100%", width: `${progress}%`, transition: "width 0.4s ease", borderRadius: "4px" }} />
          </div>
          <div style={{ fontSize: "12px", color: "#555577", marginTop: "8px" }}>{progress}% complete</div>
        </div>
      </section>

      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "20px 24px 80px" }}>
        {days.map((d) => {
          const isOpen = openDay === d.day;
          const dayKey = `day-${d.day}`;
          const done = d.posts.filter((_, i) => signedOff[`${dayKey}-${i}`]).length;
          const allDone = done === d.posts.length;
          return (
            <div key={d.day} style={{ ...card, marginBottom: "12px", border: `1px solid ${isOpen ? "#00D4FF" : allDone ? "#7C3AED" : "#1E1E2E"}` }}>
              <button onClick={() => setOpenDay(isOpen ? null : d.day)} style={{ width: "100%", background: "none", border: "none", color: "#F0F0F0", padding: "20px 24px", display: "flex", alignItems: "center", gap: "16px", cursor: "pointer", textAlign: "left", fontFamily: "Inter, sans-serif" }}>
                <span style={{ fontSize: "1.5rem" }}>{allDone ? "✅" : d.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "JetBrains Mono, monospace", color: allDone ? "#7C3AED" : "#00D4FF", fontSize: "11px", letterSpacing: "2px", marginBottom: "2px" }}>DAY {d.day}</div>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>{d.theme}</div>
                  <div style={{ color: "#8888AA", fontSize: "12px", marginTop: "2px" }}>{d.goal}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "#8888AA" }}>{done}/{d.posts.length}</span>
                  <span style={{ color: "#8888AA", fontSize: "18px" }}>{isOpen ? "−" : "+"}</span>
                </div>
              </button>
              {isOpen && (
                <div style={{ borderTop: "1px solid #1E1E2E", padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
                  {d.posts.map((post, i) => {
                    const postKey = `${dayKey}-${i}`;
                    const isDone = signedOff[postKey];
                    return (
                      <div key={i} style={{ background: "#0A0A0F", border: `1px solid ${isDone ? "#7C3AED" : "#1E1E2E"}`, borderRadius: "10px", padding: "20px", opacity: isDone ? 0.7 : 1 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <span style={{ fontSize: "1.1rem" }}>{post.icon}</span>
                            <span style={{ fontWeight: 700, fontSize: "14px" }}>{post.platform}</span>
                          </div>
                          <div style={{ display: "flex", gap: "8px" }}>
                            <button onClick={() => copyCaption(post.caption, postKey)} style={{ background: "#1E1E2E", border: "1px solid #1E1E2E", color: copied === postKey ? "#00D4FF" : "#8888AA", padding: "5px 12px", borderRadius: "5px", fontSize: "12px", cursor: "pointer", fontFamily: "Inter, sans-serif" }}>{copied === postKey ? "Copied! ✓" : "Copy"}</button>
                            <button onClick={() => toggleSignOff(postKey)} style={{ background: isDone ? "#7C3AED" : "#1E1E2E", border: `1px solid ${isDone ? "#7C3AED" : "#1E1E2E"}`, color: isDone ? "#fff" : "#8888AA", padding: "5px 12px", borderRadius: "5px", fontSize: "12px", cursor: "pointer", fontFamily: "Inter, sans-serif" }}>{isDone ? "✓ Posted" : "Sign off"}</button>
                          </div>
                        </div>
                        <pre style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", lineHeight: 1.7, color: "#CCCCDD", whiteSpace: "pre-wrap", margin: 0 }}>{post.caption}</pre>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </section>

      <footer style={{ borderTop: "1px solid #1E1E2E", padding: "24px", textAlign: "center", color: "#555577", fontSize: "12px" }}>
        <span style={{ fontFamily: "JetBrains Mono, monospace", color: "#00D4FF" }}>@ScaleAIPros</span> · AI does not have to be complicated. · <a href={CTA_URL} target="_blank" rel="noopener noreferrer" style={{ color: "#8888AA", textDecoration: "none" }}>scaleaipros.com</a>
      </footer>
    </div>
  );
}
