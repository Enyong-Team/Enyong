
export const initBgMusic = () => {
  if (!window.bgMusic) {
    window.bgMusic = new Audio('/assets/music/sampleSong.wav'); // correct path here
    window.bgMusic.loop = true;
    window.bgMusic.volume = 0.3;
  }
  return window.bgMusic;
};

export const playBgMusic = () => {
  const musicOn = JSON.parse(localStorage.getItem("musicOn") ?? "true");
  const bgMusic = initBgMusic();
  if (musicOn) bgMusic.play().catch(() => {});
  else bgMusic.pause();
};
