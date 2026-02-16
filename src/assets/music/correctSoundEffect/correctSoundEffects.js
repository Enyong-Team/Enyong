// ============================
// MANUAL IMPORTS (SAFE VERSION)
// ============================

import amazing from '../correctSoundEffect/amazing.wav'
import angGaling from '../correctSoundEffect/angGaling.wav'
import astig from '../correctSoundEffect/astig.wav'
import awesome from '../correctSoundEffect/awesome.wav'
import ayos from '../correctSoundEffect/ayos.wav'
import boomCorrect from '../correctSoundEffect/boomCorrect.wav'
import brilliant from '../correctSoundEffect/brilliant.wav'
import bullseye from '../correctSoundEffect/bullseye.wav'
import correct from '../correctSoundEffect/correct.wav'
import fantastic from '../correctSoundEffect/fantastic.wav'
import greatJob from '../correctSoundEffect/greatJob.wav'
import keepItUp from '../correctSoundEffect/keepItUp.wav'
import levelUp from '../correctSoundEffect/levelUp.wav'
import magaling from '../correctSoundEffect/magaling.wav'
import mahusay from '../correctSoundEffect/mahusay.wav'
import panaloKa from '../correctSoundEffect/panaloKa.wav'
import perfect from '../correctSoundEffect/perfect.wav'
import superSound from '../correctSoundEffect/super.wav'
import tama from '../correctSoundEffect/tama.wav'
import tamaKa from '../correctSoundEffect/tamaKa.wav'
import wellDone from '../correctSoundEffect/wellDone.wav'
import youGotIt from '../correctSoundEffect/youGotIt.wav'
import youreABaliwagHenyo from '../correctSoundEffect/youreABaliwagHenyo.wav'

// ============================
// SOUND ARRAY
// ============================

const correctSounds = [
  amazing,
  angGaling,
  astig,
  awesome,
  ayos,
  boomCorrect,
  brilliant,
  bullseye,
  correct,
  fantastic,
  greatJob,
  keepItUp,
  levelUp,
  magaling,
  mahusay,
  panaloKa,
  perfect,
  superSound,
  tama,
  tamaKa,
  wellDone,
  youGotIt,
  youreABaliwagHenyo
];

// ============================
// AUDIO SYSTEM
// ============================

// AUDIO SYSTEM
let audioPool = [];
let lastPlayedIndex = null;

export const initCorrectSounds = () => {
  audioPool = correctSounds.map((sound) => {
    const audio = new Audio(sound);
    audio.preload = "auto";
    audio.volume = 1.0;
    audio.playbackRate = 1.0;
    return audio;
  });

  // Unlock sounds on first user click
  const unlockSounds = () => {
    audioPool.forEach(audio => audio.play().catch(() => {}));
    audioPool.forEach(audio => audio.pause());
    window.removeEventListener("click", unlockSounds);
  };
  window.addEventListener("click", unlockSounds);
};

// Play a random sound if sound is ON
export const playRandomCorrectSound = (soundOn = true) => {
  if (!soundOn) return; // <-- Respect the toggle
  if (audioPool.length === 0) return;

  const availableSounds = audioPool
    .map((audio, index) => ({ audio, index }))
    .filter(({ audio }) => audio.paused);

  if (availableSounds.length === 0) return;

  let randomSelection;
  do {
    randomSelection =
      availableSounds[Math.floor(Math.random() * availableSounds.length)];
  } while (
    availableSounds.length > 1 &&
    randomSelection.index === lastPlayedIndex
  );

  lastPlayedIndex = randomSelection.index;

  randomSelection.audio.currentTime = 0;
  randomSelection.audio.play().catch(() => {});
};

