    const audioPlayer = document.getElementById("audioPlayer");
    const playBtn = document.getElementById("play");
    const progress = document.getElementById("progress");
    const volumeControl = document.getElementById("volume");
    const durationDisplay = document.getElementById("duration");
    let isPlaying = false;

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
    setInterval(updateProgress, 500);

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





    