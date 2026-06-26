#!/usr/bin/env python3
"""
ScaleAIPros — HeyGen Avatar + Seedance B-Roll Pipeline

Flow:
  1. Submit avatar video job to HeyGen API
  2. Poll until HeyGen video is ready, download it
  3. Load b-roll checkpoints from broll_checkpoints.json
  4. For each unapproved checkpoint, generate a Seedance b-roll clip
  5. CHECKPOINT REVIEW — show each clip and wait for human approval
  6. Once all checkpoints approved, stitch final video with ffmpeg

Requirements:
  pip install requests
  apt/brew install ffmpeg
  .secrets/.env must contain HEYGEN_API_KEY and SEEDANCE_API_KEY
"""

import json
import os
import sys
import time
import subprocess
import shutil
from pathlib import Path
from dotenv import load_dotenv

# ── Config ────────────────────────────────────────────────────────────────────

ROOT = Path(__file__).parent.parent
SECRETS_ENV = ROOT / ".secrets" / ".env"
CHECKPOINTS_FILE = Path(__file__).parent / "broll_checkpoints.json"
OUTPUT_DIR = ROOT / "pipeline" / "output"
BROLL_DIR = OUTPUT_DIR / "broll_clips"
AVATAR_VIDEO = OUTPUT_DIR / "avatar_raw.mp4"
FINAL_VIDEO = OUTPUT_DIR / "final_video.mp4"

AVATAR_ID = "f517238c99d448cd8a227b6c10eacfd5"
VOICE_ID = "6fd58dfdfd3140c29ecf987e7ee8d6a8"

HEYGEN_API_BASE = "https://api.heygen.com"
SEEDANCE_API_BASE = "https://api.seedance.ai"  # update if endpoint differs

POLL_INTERVAL_SEC = 15
MAX_POLL_ATTEMPTS = 80  # ~20 minutes


# ── Bootstrap ─────────────────────────────────────────────────────────────────

def bootstrap():
    if not SECRETS_ENV.exists():
        print(f"[ERROR] Missing secrets file: {SECRETS_ENV}")
        print("Create .secrets/.env with HEYGEN_API_KEY and SEEDANCE_API_KEY")
        sys.exit(1)
    load_dotenv(SECRETS_ENV)
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    BROLL_DIR.mkdir(parents=True, exist_ok=True)


def require_env(key: str) -> str:
    val = os.getenv(key)
    if not val:
        print(f"[ERROR] {key} not set in {SECRETS_ENV}")
        sys.exit(1)
    return val


# ── HeyGen ────────────────────────────────────────────────────────────────────

def heygen_headers(api_key: str) -> dict:
    return {"X-Api-Key": api_key, "Content-Type": "application/json"}


def submit_avatar_video(api_key: str, script_text: str) -> str:
    """Submit a HeyGen video generation job. Returns video_id."""
    import requests

    payload = {
        "video_inputs": [
            {
                "character": {
                    "type": "avatar",
                    "avatar_id": AVATAR_ID,
                    "avatar_style": "normal"
                },
                "voice": {
                    "type": "text",
                    "voice_id": VOICE_ID,
                    "input_text": script_text,
                    "speed": 1.0
                },
                "background": {
                    "type": "color",
                    "value": "#0A0A0F"
                }
            }
        ],
        "dimension": {"width": 1920, "height": 1080},
        "caption": False
    }

    print("[HeyGen] Submitting avatar video job…")
    r = requests.post(
        f"{HEYGEN_API_BASE}/v2/video/generate",
        headers=heygen_headers(api_key),
        json=payload,
        timeout=30
    )
    r.raise_for_status()
    data = r.json()
    video_id = data["data"]["video_id"]
    print(f"[HeyGen] Job submitted — video_id: {video_id}")
    return video_id


def poll_heygen_video(api_key: str, video_id: str) -> str:
    """Poll until video is complete. Returns download URL."""
    import requests

    print(f"[HeyGen] Polling for completion (checking every {POLL_INTERVAL_SEC}s)…")
    for attempt in range(1, MAX_POLL_ATTEMPTS + 1):
        r = requests.get(
            f"{HEYGEN_API_BASE}/v1/video_status.get?video_id={video_id}",
            headers=heygen_headers(api_key),
            timeout=15
        )
        r.raise_for_status()
        data = r.json()["data"]
        status = data.get("status")
        print(f"  [{attempt:02d}] status={status}")

        if status == "completed":
            url = data.get("video_url")
            if not url:
                print("[ERROR] HeyGen returned completed but no video_url")
                sys.exit(1)
            print(f"[HeyGen] Video ready: {url}")
            return url
        elif status in ("failed", "error"):
            print(f"[ERROR] HeyGen job failed: {data}")
            sys.exit(1)

        time.sleep(POLL_INTERVAL_SEC)

    print("[ERROR] HeyGen polling timed out")
    sys.exit(1)


def download_video(url: str, dest: Path):
    import requests
    print(f"[Download] {url} → {dest}")
    with requests.get(url, stream=True, timeout=120) as r:
        r.raise_for_status()
        with open(dest, "wb") as f:
            for chunk in r.iter_content(chunk_size=65536):
                f.write(chunk)
    print(f"[Download] Done — {dest.stat().st_size // 1024} KB")


# ── Seedance ──────────────────────────────────────────────────────────────────

def seedance_headers(api_key: str) -> dict:
    return {"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"}


def submit_seedance_clip(api_key: str, checkpoint: dict) -> str:
    """Submit a Seedance b-roll generation job. Returns job_id."""
    import requests

    payload = {
        "prompt": checkpoint["seedance_prompt"],
        "style": checkpoint.get("seedance_style", "cinematic"),
        "duration": checkpoint["duration_sec"],
        "resolution": "1080p",
        "aspect_ratio": "16:9"
    }

    print(f"[Seedance] Submitting clip for checkpoint {checkpoint['id']} — {checkpoint['label']}")
    r = requests.post(
        f"{SEEDANCE_API_BASE}/v1/generate",
        headers=seedance_headers(api_key),
        json=payload,
        timeout=30
    )
    r.raise_for_status()
    job_id = r.json()["job_id"]
    print(f"[Seedance] Job submitted — job_id: {job_id}")
    return job_id


def poll_seedance_clip(api_key: str, job_id: str) -> str:
    """Poll until Seedance clip is ready. Returns download URL."""
    import requests

    print(f"[Seedance] Polling job {job_id}…")
    for attempt in range(1, MAX_POLL_ATTEMPTS + 1):
        r = requests.get(
            f"{SEEDANCE_API_BASE}/v1/jobs/{job_id}",
            headers=seedance_headers(api_key),
            timeout=15
        )
        r.raise_for_status()
        data = r.json()
        status = data.get("status")
        print(f"  [{attempt:02d}] status={status}")

        if status == "completed":
            url = data.get("video_url") or data.get("output_url")
            if not url:
                print("[ERROR] Seedance returned completed but no video URL")
                sys.exit(1)
            return url
        elif status in ("failed", "error"):
            print(f"[ERROR] Seedance job failed: {data}")
            sys.exit(1)

        time.sleep(POLL_INTERVAL_SEC)

    print("[ERROR] Seedance polling timed out")
    sys.exit(1)


# ── Checkpoint Review ──────────────────────────────────────────────────────────

def checkpoint_review(checkpoints: list, cp_file: Path) -> list:
    """
    Interactive approval loop.

    For each unapproved checkpoint, open the clip for preview and prompt
    the operator to approve, regenerate, edit the prompt, or skip.

    Returns the final approved checkpoints list.
    """
    approved_all = []

    for cp in checkpoints:
        clip_path = BROLL_DIR / f"{cp['id']}.mp4"

        if cp.get("approved") and clip_path.exists():
            print(f"\n[CHECKPOINT] {cp['id']} already approved — skipping review")
            approved_all.append(cp)
            continue

        if not clip_path.exists():
            print(f"\n[CHECKPOINT] {cp['id']} clip not downloaded yet — skipping review")
            continue

        print(f"\n{'='*60}")
        print(f"CHECKPOINT REVIEW — {cp['id']}: {cp['label']}")
        print(f"  Segment:  {cp['start_sec']}s → {cp['end_sec']}s")
        print(f"  Mode:     {cp['mode']}  (overlay = b-roll over audio, replace = full-frame)")
        print(f"  Prompt:   {cp['seedance_prompt']}")
        print(f"  Clip:     {clip_path}")
        print(f"{'='*60}")

        # Try to open the clip in a media player for preview
        _preview_clip(clip_path)

        while True:
            choice = input(
                "\n  [A]pprove  [R]egenerate  [E]dit prompt & regenerate  [S]kip  [Q]uit pipeline\n  > "
            ).strip().lower()

            if choice == "a":
                cp["approved"] = True
                approved_all.append(cp)
                print(f"  ✓ {cp['id']} approved.")
                break

            elif choice == "r":
                cp["approved"] = False
                print(f"  Marked for regeneration — re-run pipeline to generate a new clip.")
                break

            elif choice == "e":
                new_prompt = input("  Enter new Seedance prompt:\n  > ").strip()
                if new_prompt:
                    cp["seedance_prompt"] = new_prompt
                    cp["approved"] = False
                    print(f"  Prompt updated. Re-run pipeline to generate.")
                break

            elif choice == "s":
                print(f"  Skipped — checkpoint will not appear in final video.")
                break

            elif choice == "q":
                print("  Pipeline paused. Run again to continue from where you left off.")
                _save_checkpoints(checkpoints, cp_file)
                sys.exit(0)

            else:
                print("  Invalid choice.")

        _save_checkpoints(checkpoints, cp_file)

    return approved_all


def _preview_clip(clip_path: Path):
    """Try to open the clip in a system media player. Fails silently."""
    players = ["vlc", "mpv", "ffplay", "xdg-open", "open"]
    for player in players:
        if shutil.which(player):
            try:
                subprocess.Popen([player, str(clip_path)],
                                  stdout=subprocess.DEVNULL,
                                  stderr=subprocess.DEVNULL)
                print(f"  [Preview] Opened with {player} — watch the clip, then answer below.")
            except Exception:
                pass
            return
    print("  [Preview] No media player found — review the clip manually:")
    print(f"  {clip_path}")


def _save_checkpoints(checkpoints: list, cp_file: Path):
    data = json.loads(cp_file.read_text())
    data["checkpoints"] = checkpoints
    cp_file.write_text(json.dumps(data, indent=2))
    print(f"  [Saved] Checkpoint states written to {cp_file.name}")


# ── FFmpeg Stitching ───────────────────────────────────────────────────────────

def build_final_video(avatar_path: Path, approved_checkpoints: list, output_path: Path):
    """
    Use ffmpeg to composite approved b-roll clips onto the avatar video.

    overlay mode  → b-roll plays over avatar audio (avatar audio keeps playing)
    replace mode  → avatar video hidden, b-roll plays full-frame
    """
    if not approved_checkpoints:
        print("\n[Stitch] No approved b-roll checkpoints — copying avatar video as final output.")
        shutil.copy(avatar_path, output_path)
        print(f"[Stitch] Final video: {output_path}")
        return

    print(f"\n[Stitch] Building final video with {len(approved_checkpoints)} b-roll segment(s)…")

    # Build a complex ffmpeg filter graph.
    # Start with avatar as base track, then layer each approved b-roll clip.
    inputs = ["-i", str(avatar_path)]
    filter_parts = []
    last_video_label = "[0:v]"
    audio_label = "[0:a]"

    for idx, cp in enumerate(approved_checkpoints):
        clip_path = BROLL_DIR / f"{cp['id']}.mp4"
        if not clip_path.exists():
            print(f"  [WARN] Clip missing for {cp['id']} — skipping")
            continue

        input_idx = idx + 1
        inputs += ["-i", str(clip_path)]

        broll_in = f"[{input_idx}:v]"
        overlay_label = f"[v{input_idx}]"
        start_ms = cp["start_sec"] * 1000
        end_ms = cp["end_sec"] * 1000

        if cp["mode"] == "overlay":
            # Scale b-roll to match avatar resolution, overlay on top
            scale = f"{broll_in}scale=1920:1080[bscaled{input_idx}]"
            overlay = (
                f"[bscaled{input_idx}]"
                f"setpts=PTS-STARTPTS+{cp['start_sec']}/TB[bdelayed{input_idx}];"
                f"{last_video_label}[bdelayed{input_idx}]"
                f"overlay=enable='between(t,{cp['start_sec']},{cp['end_sec']})'"
                f"{overlay_label}"
            )
            filter_parts.append(scale)
            filter_parts.append(overlay)

        elif cp["mode"] == "replace":
            # Blank out avatar segment, fill with b-roll
            blank = (
                f"{last_video_label}"
                f"drawbox=t=fill:color=black@1.0:"
                f"enable='between(t,{cp['start_sec']},{cp['end_sec']})'[blanked{input_idx}];"
                f"{broll_in}scale=1920:1080[bscaled{input_idx}];"
                f"[bscaled{input_idx}]"
                f"setpts=PTS-STARTPTS+{cp['start_sec']}/TB[bdelayed{input_idx}];"
                f"[blanked{input_idx}][bdelayed{input_idx}]"
                f"overlay=enable='between(t,{cp['start_sec']},{cp['end_sec']})'[v{input_idx}]"
            )
            filter_parts.append(blank)
            overlay_label = f"[v{input_idx}]"

        last_video_label = overlay_label

    filter_parts.append(f"{last_video_label}copy[vout]")
    filter_graph = ";".join(filter_parts)

    cmd = (
        ["ffmpeg", "-y"]
        + inputs
        + ["-filter_complex", filter_graph]
        + ["-map", "[vout]", "-map", audio_label]
        + ["-c:v", "libx264", "-crf", "18", "-preset", "slow"]
        + ["-c:a", "aac", "-b:a", "192k"]
        + [str(output_path)]
    )

    print("  [ffmpeg] Running…")
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        print("[ERROR] ffmpeg failed:")
        print(result.stderr[-3000:])
        sys.exit(1)

    print(f"[Stitch] Done → {output_path}")


# ── Main Pipeline ──────────────────────────────────────────────────────────────

def load_script() -> str:
    """Load avatar script text from the asset file."""
    script_path = ROOT / "assets" / "heygen-video-script.md"
    raw = script_path.read_text()
    # Extract just the spoken lines (strip markdown headers and stage directions)
    lines = []
    in_stage_direction = False
    for line in raw.splitlines():
        line = line.strip()
        if line.startswith("*[") or line.startswith("*"):
            continue  # skip stage directions
        if line.startswith("#") or line.startswith("```") or line.startswith("{"):
            continue  # skip headers / code blocks
        if line and not line.startswith("---"):
            lines.append(line)
    return " ".join(lines)


def main():
    bootstrap()

    heygen_key = require_env("HEYGEN_API_KEY")
    seedance_key = require_env("SEEDANCE_API_KEY")

    cp_data = json.loads(CHECKPOINTS_FILE.read_text())
    checkpoints = cp_data["checkpoints"]

    # ── Step 1: HeyGen avatar video ──────────────────────────────────────────
    if AVATAR_VIDEO.exists():
        print(f"\n[Step 1] Avatar video already downloaded — skipping HeyGen job.")
        print(f"  Delete {AVATAR_VIDEO} to regenerate.")
    else:
        script_text = load_script()
        video_id = submit_avatar_video(heygen_key, script_text)
        download_url = poll_heygen_video(heygen_key, video_id)
        download_video(download_url, AVATAR_VIDEO)

    # ── Step 2: Seedance b-roll clips ────────────────────────────────────────
    print("\n[Step 2] Generating Seedance b-roll clips for unapproved checkpoints…")
    for cp in checkpoints:
        clip_path = BROLL_DIR / f"{cp['id']}.mp4"
        if clip_path.exists() and cp.get("approved"):
            print(f"  {cp['id']} already approved and downloaded — skipping.")
            continue
        if clip_path.exists() and not cp.get("approved"):
            print(f"  {cp['id']} clip exists but not approved — will review below.")
            continue

        job_id = submit_seedance_clip(seedance_key, cp)
        clip_url = poll_seedance_clip(seedance_key, job_id)
        download_video(clip_url, clip_path)

    # ── Step 3: Checkpoint review ────────────────────────────────────────────
    print("\n[Step 3] Checkpoint review — approve b-roll clips before final render.")
    approved = checkpoint_review(checkpoints, CHECKPOINTS_FILE)

    unapproved = [cp for cp in checkpoints if not cp.get("approved")]
    if unapproved:
        print(f"\n[Step 3] {len(unapproved)} checkpoint(s) still pending approval:")
        for cp in unapproved:
            print(f"  - {cp['id']}: {cp['label']}")
        print("Re-run pipeline after regenerating those clips.")

    # ── Step 4: Final stitch ─────────────────────────────────────────────────
    if not approved:
        print("\n[Step 4] No approved b-roll — final video = avatar video unchanged.")
        shutil.copy(AVATAR_VIDEO, FINAL_VIDEO)
    else:
        print(f"\n[Step 4] Stitching {len(approved)} approved b-roll segment(s) into final video…")
        build_final_video(AVATAR_VIDEO, approved, FINAL_VIDEO)

    print(f"\n[Done] Final video ready: {FINAL_VIDEO}")
    print("Upload to HeyGen, your website, or social — ScaleAIPros style.")


if __name__ == "__main__":
    main()
