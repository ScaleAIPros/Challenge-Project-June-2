# ScaleAIPros — HeyGen Explainer Video Script
## Avatar ID: f517238c99d448cd8a227b6c10eacfd5
## Voice ID: 6fd58dfdfd3140c29ecf987e7ee8d6a8
## Format: Landscape MP4
## Structure: Full-frame intro → PiP walkthrough → Full-frame outro
## Target length: 2:30–3:00

---

## SEGMENT 1 — Full-Frame Intro (0:00–0:30)
*[Avatar on camera, dark cinematic background, soft spotlight]*

"What if you could create a professional marketing video — with a real on-screen presenter, custom backgrounds, captions, and music — without turning on your camera even once?

That is not a pitch. That is HeyGen. And in the next two and a half minutes, I am going to show you exactly how any business owner can use it — starting today, no tech skills required.

My name is [YOUR NAME] from ScaleAIPros, and honestly, what you are watching right now — this video — was made with the same tool I am about to show you.

Let's get into it."

---

## SEGMENT 2 — Picture-in-Picture Walkthrough (0:30–2:00)
*[Avatar in PiP corner, animated slides fill main frame]*

### Slide 1: "What HeyGen Does" (0:30–0:50)
*[Animated slide: prompt box → video output]*

"HeyGen is an AI video platform. You type what you want your video to be about. It builds the whole thing: the script, the presenter, the background, the captions, the music. Everything.

No camera. No editing software. No production crew."

---

### Slide 2: "AI Agent — One Prompt, Full Video" (0:50–1:10)
*[Animated slide: prompt being typed → video preview]*

"The fastest way to start is with AI Agent. From the home screen, you describe your video. Be specific — mention the tone, the audience, and what you want them to do after watching.

Hit generate. In about a minute, you have a finished video."

---

### Slide 3: "Clone Yourself" (1:10–1:30)
*[Animated slide: person recording → avatar clone]*

"Now here is the part that changes everything. You can clone yourself.

Fifteen seconds of webcam recording. HeyGen learns your face, your voice, your expressions. Then your AI twin can produce unlimited videos — in any style, any language — while you run your business."

---

### Slide 4: "Go Global" (1:30–1:50)
*[Animated slide: English → multiple language flags]*

"And once you have a video, you can translate it into over 175 languages automatically. Your avatar speaks each one naturally. No re-recording. No translator.

One video. Everywhere."

---

### Slide 5: "Go Faceless" (1:50–2:00)
*[Animated slide: animated character]*

"And if you never want to be on camera at all — that is fine too. HeyGen lets you create fully animated AI characters that can run an entire channel for you."

---

## SEGMENT 3 — Full-Frame Outro (2:00–2:30)
*[Avatar back on camera, full frame, direct to lens]*

"So that is HeyGen. AI video, plain English, starting today.

If you want the step-by-step breakdown, I put together a free cheat sheet — one page, every step, zero fluff. And there is a free tool on the site that finds the exact HeyGen use case that will have the biggest impact on YOUR specific business.

Both are free at ScaleAIPros.com.

The link is right below this video. Go grab it, try HeyGen for free, and if you have questions, reply to any of our emails — we read every one.

AI does not have to be complicated. See you in the next one."

*[End card: ScaleAIPros logo + scaleaipros.com]*

---

## HeyGen API Call Template
```json
{
  "video_inputs": [
    {
      "character": {
        "type": "avatar",
        "avatar_id": "f517238c99d448cd8a227b6c10eacfd5",
        "avatar_style": "normal"
      },
      "voice": {
        "type": "audio",
        "voice_id": "6fd58dfdfd3140c29ecf987e7ee8d6a8"
      },
      "background": {
        "type": "color",
        "value": "#0A0A0F"
      }
    }
  ],
  "dimension": {
    "width": 1920,
    "height": 1080
  }
}
```

Note: Requires HEYGEN_API_KEY in .secrets/.env
See .secrets/.env.example for required variables.
