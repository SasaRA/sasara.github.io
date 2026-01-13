# 🌀 SASARA PORTAL: Multiverse Engine

**A proprietary, label-ready immersive music player.**

## 🚀 Deployment Checklist
1. **Clone Repo:** `git clone https://github.com/YOUR_USER/sasara-portal.git`
2. **Add Media:** Place MP4s/MP3s in the `media/` folder.
3. **Update Config:** Edit `config.json` with new Song IDs and Timestamps.
4. **Push:** `git push origin main` -> GitHub Actions auto-deploys.

## ⚙️ Configuration (`config.json`)
- **`features`**: Toggle `haptics`, `ghost_tape`, or `visualizer`.
- **`assets`**: If `video_portrait` is empty, system defaults to **Audio-Only Mode**.
- **`timeline`**: Set `end_trigger` to the second the 4th wall breaks.

## 🎥 Key Features
- **Smart Asset Detection:** Auto-switches between Video and Audio+Visualizer.
- **Stabilization Ritual:** Haptic/Audio hold-to-start mechanic.
- **Lyric Capture:** Click-to-save lyric engine.
- **Ghost Tape:** Low-fi buffer loop for aesthetic loading.