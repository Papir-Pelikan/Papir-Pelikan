// Zenelejátszók inicializálása
const players = [
    {
        id: 'espresso',
        duration: '2:56'
    },
    {
        id: 'summertime', 
        duration: '4:25'
    },
    {
        id: 'watermelon',
        duration: '2:54'
    },
    {
        id: 'nyarvan',
        duration: '3:15'
    },
    {
        id: 'alomhajo',
        duration: '3:42'
    }
];

// Minden zenelejátszó inicializálása
players.forEach(player => {
    const audioPlayer = document.getElementById(`audioPlayer-${player.id}`);
    const playBtn = document.getElementById(`play-${player.id}`);
    const progress = document.getElementById(`progress-${player.id}`);
    const volumeControl = document.getElementById(`volume-${player.id}`);
    const durationDisplay = document.getElementById(`duration-${player.id}`);
    let isPlaying = false;

    // Alapértelmezett idő beállítása
    durationDisplay.textContent = `0:00 / ${player.duration}`;

    // Hang beállítása
    audioPlayer.volume = 0.8;

    // Amikor az audio metaadatai betöltődtek (pl. hossz)
    audioPlayer.addEventListener('loadedmetadata', function() {
        const total = audioPlayer.duration;
        let totalMin = Math.floor(total / 60);
        let totalSec = Math.floor(total % 60).toString().padStart(2, '0');
        durationDisplay.textContent = `0:00 / ${totalMin}:${totalSec}`;
    });

    // Lejátszás/szünet gomb kezelése
    playBtn.addEventListener("click", () => {
        if (isPlaying) {
            audioPlayer.pause();
            playBtn.className = "play-btn";
        } else {
            // Minden másik lejátszó leállítása
            players.forEach(otherPlayer => {
                if (otherPlayer.id !== player.id) {
                    const otherAudio = document.getElementById(`audioPlayer-${otherPlayer.id}`);
                    const otherPlayBtn = document.getElementById(`play-${otherPlayer.id}`);
                    otherAudio.pause();
                    otherPlayBtn.className = "play-btn";
                }
            });
            
            audioPlayer.play();
            playBtn.className = "pause-btn";
        }
        isPlaying = !isPlaying;
    });

    // Progress frissítése
    function updateProgress() {
        if (!audioPlayer.duration) return;
        
        const current = audioPlayer.currentTime;
        const total = audioPlayer.duration;
        progress.value = (current / total) * 100;

        // idő kijelzés (perc:másodperc)
        let minutes = Math.floor(current / 60);
        let seconds = Math.floor(current % 60).toString().padStart(2, '0');
        let totalMin = Math.floor(total / 60);
        let totalSec = Math.floor(total % 60).toString().padStart(2, '0');
        durationDisplay.textContent = `${minutes}:${seconds} / ${totalMin}:${totalSec}`;
    }

    // Progress frissítés időzítő
    const progressInterval = setInterval(updateProgress, 500);

    // Keresés a progress bar-ral
    progress.addEventListener("input", () => {
        if (!audioPlayer.duration) return;
        const seekTime = (progress.value / 100) * audioPlayer.duration;
        audioPlayer.currentTime = seekTime;
    });

    // Hangerő szabályzás
    volumeControl.addEventListener("input", () => {
        audioPlayer.volume = volumeControl.value / 100;
    });

    // Amikor a zene véget ér, visszaállítás
    audioPlayer.addEventListener('ended', function() {
        playBtn.className = "play-btn";
        isPlaying = false;
        audioPlayer.currentTime = 0;
        progress.value = 0;
        updateProgress();
    });
});