// ============================
// MANUAL IMPORTS (SAFE VERSION)
// ============================

import aimAgain from '../incorrectSoundEffect/aimAgain.wav'
import almost from '../incorrectSoundEffect/almost.wav'
import almostThere from '../incorrectSoundEffect/almostThere.wav'
import closeButNotCorrect from '../incorrectSoundEffect/closeButNotCorrect.wav'
import dontGiveUp from '../incorrectSoundEffect/dontGiveUp.wav'
import dontWorryNextTime from '../incorrectSoundEffect/dontWorryNextTime.wav'
import huwagSusuko from '../incorrectSoundEffect/huwagSusuko.wav'
import isipinMoUlet from '../incorrectSoundEffect/isipinMoUlet.wav'
import keepGoing from '../incorrectSoundEffect/keepGoing.wav'
import notQuite from '../incorrectSoundEffect/notQuite.wav'
import notThisTime from '../incorrectSoundEffect/notThisTime.wav'
import oopsTryAgain from '../incorrectSoundEffect/oopsTryAgain.wav'
import subukanMoUlit from '../incorrectSoundEffect/subukanMoUlit.wav'
import thinkAgain from '../incorrectSoundEffect/thinkAgain.wav'
import tryAgainHenyo from '../incorrectSoundEffect/tryAgainHenyo.wav'
import tryOnceMore from '../incorrectSoundEffect/tryOnceMore.wav'
import youCanDoIt from '../incorrectSoundEffect/youCanDoIt.wav'

// ============================
// SOUND ARRAY
// ============================

const incorrectSounds = [
  aimAgain,
  almost,
  almostThere,
  closeButNotCorrect,
  dontGiveUp,
  dontWorryNextTime,
  huwagSusuko,
  isipinMoUlet,
  keepGoing,
  notQuite,
  notThisTime,
  oopsTryAgain,
  subukanMoUlit,
  thinkAgain,
  tryAgainHenyo,
  tryOnceMore,
  youCanDoIt
];

// ============================
// AUDIO SYSTEM
// ============================

let audioPool = [];
let lastPlayedIndex = null;

export const initIncorrectSounds = () => {
  audioPool = incorrectSounds.map((sound) => {
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

// Play random incorrect sound
export const playRandomIncorrectSound = (soundOn = true) => {
  if (!soundOn) return;
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