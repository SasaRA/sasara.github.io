let CONFIG = null;
let activeRelease = null;
let chargeTimer = null;
let audioContext = null;
let capturedLyric = "";

// 1. INITIALIZATION
fetch('config.json').then(r => r.json()).then(data => {
    CONFIG = data;
    loadRelease(CONFIG.active_release_id);
});

function loadRelease(id) {
    activeRelease = CONFIG.releases.find(r => r.id === id);
    document.documentElement.style.setProperty('--bpm', `${60/activeRelease.bpm}s`);
    document.documentElement.style.setProperty('--theme', activeRelease.color_theme);

    // Set Cover Art & Ghost Tape
    document.getElementById('loading-cover-art').src = activeRelease.assets.cover_art;

    if (CONFIG.features.ghost_tape_enabled && activeRelease.assets.ghost_tape) {
        const ghost = document.getElementById('ghost-tape');
        ghost.src = activeRelease.assets.ghost_tape;
        ghost.classList.remove('hidden');
        ghost.play();
    }
}

// 2. THE RITUAL (Haptics & Audio Ramp)
function startCharge() {
    const counter = document.getElementById('stabilize-counter');
    const hypeAudio = new Audio(activeRelease.assets.hype_preview);
    hypeAudio.volume = 0;
    hypeAudio.play();

    let charge = 0;
    chargeTimer = setInterval(() => {
        charge += 2;
        counter.style.letterSpacing = `${charge/10}px`;
        hypeAudio.volume = Math.min(charge/100, 1);

        if (CONFIG.features.haptics_enabled && navigator.vibrate) {
            navigator.vibrate(charge/2); // Rumble increases
        }

        if (charge >= 100) {
            clearInterval(chargeTimer);
            openPortal();
        }
    }, 30);
}

function cancelCharge() {
    clearInterval(chargeTimer);
    document.getElementById('stabilize-counter').style.letterSpacing = '0px';
}

// 3. OPEN PORTAL (Smart Asset Detection)
function openPortal() {
    document.getElementById('loader-portal').style.opacity = '0';
    setTimeout(() => document.getElementById('loader-portal').remove(), 1000);

    const vid = document.getElementById('video-main');
    const viz = document.getElementById('visualizer-container');

    // Check if video exists or if it's empty string
    if (activeRelease.assets.video_portrait && activeRelease.assets.video_portrait !== "") {
        // VIDEO MODE
        vid.src = activeRelease.assets.video_portrait;
        vid.classList.remove('hidden');
        vid.play();
        syncLyrics(vid);
    } else {
        // AUDIO ONLY MODE
        const audio = new Audio(activeRelease.assets.full_audio);
        audio.play();
        if (CONFIG.features.visualizer_enabled) viz.classList.remove('hidden');
        // Apply "Audio Mode" styling to background
        document.body.classList.add('audio-mode');
        syncLyrics(audio);
    }
}

// 4. LYRIC SYNC & HUD
function syncLyrics(mediaSource) {
    const hudTime = document.getElementById('hud-time');

    mediaSource.ontimeupdate = () => {
        const t = mediaSource.currentTime;

        // Director HUD
        if (!document.getElementById('director-hud').classList.contains('hidden')) {
            hudTime.innerText = t.toFixed(3);
        }

        // Lyric Check
        const currentLine = activeRelease.timeline.lyrics.find(l => Math.abs(t - l.time) < 0.5);
        if (currentLine) {
            const el = document.getElementById('lyric-stream');
            el.innerText = currentLine.text;
            el.style.opacity = 1;
            setTimeout(() => el.style.opacity = 0, 3000);
        }

        // End Trigger (Menu Open)
        if (t >= activeRelease.timeline.end_trigger && !document.getElementById('song-menu').classList.contains('open')) {
            toggleMenu();
            if(activeRelease.assets.sting_audio) new Audio(activeRelease.assets.sting_audio).play();
        }
    };
}

// 5. INTERACTION
function captureLyric() {
    const txt = document.getElementById('lyric-stream').innerText;
    if (txt) {
        capturedLyric = txt;
        document.getElementById('pass-lyric-box').innerText = `"${txt}"`;
        // Visual feedback
        document.getElementById('lyric-stream').style.textShadow = "0 0 20px var(--theme)";
    }
}

function toggleMenu() {
    document.getElementById('song-menu').classList.toggle('open');
    renderSongList();

    // Populate Passport Data
    document.getElementById('pass-artist').innerText = activeRelease.artist.name;
    document.getElementById('pass-song').innerText = activeRelease.title;
    document.getElementById('pass-handle').innerText = activeRelease.artist.handle;
}

// 6. UTILS (Director Mode)
document.addEventListener('keydown', (e) => {
    if (e.key === 'd' || e.key === 'D') {
        document.getElementById('director-hud').classList.toggle('hidden');
        document.getElementById('hud-bpm').innerText = activeRelease.bpm;
    }
});

function savePassport() {
    html2canvas(document.getElementById('passport-card')).then(canvas => {
        const link = document.createElement('a');
        link.download = `SASARA_PASS_${Date.now()}.png`;
        link.href = canvas.toDataURL();
        link.click();
    });
}

function renderSongList() {
    const list = document.getElementById('song-list');
    list.innerHTML = '';
    CONFIG.releases.forEach(song => {
        const div = document.createElement('div');
        div.className = `song-card ${song.status}`;

        if (song.status === 'leaked') {
            const days = Math.floor((new Date(song.unlock_date) - new Date()) / (1000*60*60*24));
            div.innerHTML = `<div class="locked">DECRYPTING: ${days} DAYS</div><img src="${song.assets.cover_art}" class="blur">`;
        } else {
            div.innerHTML = `<img src="${song.assets.cover_art}"><p>${song.title}</p>`;
            div.onclick = () => location.reload(); // Simple reload to switch for prototype
        }
        list.appendChild(div);
    });
}