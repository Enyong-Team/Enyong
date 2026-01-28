import React, { useState, useEffect } from 'react';
import { closePic, soundPic, musicPic, vibratePic } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

import { playBgMusic} from "../../assets/music/music.js";


function Setting() {



  const navigate = useNavigate();

  // --- Toggle states with localStorage persistence ---
  const [soundOn, setSoundOn] = useState(() => {
    const saved = localStorage.getItem('soundOn');
    return saved === null ? true : JSON.parse(saved);
  });

  const [musicOn, setMusicOn] = useState(() => {
    const saved = localStorage.getItem('musicOn');
    return saved === null ? true : JSON.parse(saved);
  });

  const [vibrateOn, setVibrateOn] = useState(() => {
    const saved = localStorage.getItem('vibrateOn');
    return saved === null ? true : JSON.parse(saved);
  });

    useEffect(() => {
  playBgMusic();
}, [musicOn]);

  // --- Toggle handlers ---
  const toggleSound = () => {
    setSoundOn(prev => {
      const newState = !prev;
      localStorage.setItem('soundOn', JSON.stringify(newState));
      return newState;
    });
  };

  const toggleMusic = () => {
    setMusicOn(prev => {
      const newState = !prev;
      localStorage.setItem("musicOn", JSON.stringify(newState));
      return newState;
    });
  };

  const toggleVibrate = () => {
    setVibrateOn(prev => {
      const newState = !prev;
      localStorage.setItem('vibrateOn', JSON.stringify(newState));
      return newState;
    });
  };

  // --- Render ---
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/50 z-50">
      <div className="bg-[#084E99] rounded-xl w-[368px] h-[216px] flex flex-col items-center">
        
        {/* Header */}
        <div className="relative bg-[#012F65] rounded-xl p-6 flex flex-row items-center justify-center w-full">
          <h1 className="font-LG text-white text-3xl">Settings</h1>
          <img
            src={closePic}
            alt="CloseButton"
            className="absolute right-4 cursor-pointer active:scale-95"
            onClick={() => navigate(-1)}
          />
        </div>

        {/* Toggles */}
        <div className="flex flex-row items-center justify-center gap-10 p-4">
          
          {/* Sound */}
          <div className="relative cursor-pointer active:scale-95" onClick={toggleSound}>
            <img src={soundPic} alt="SoundButton" />
            {!soundOn && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 mb-11 border-amber-400 border-2 p-px h-[60px] bg-red-600 rotate-45"></div>
              </div>
            )}
          </div>

          {/* Music */}
          <div className="relative cursor-pointer active:scale-95" onClick={toggleMusic}>
            <img src={musicPic} alt="MusicButton" />
            {!musicOn && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 mb-11 border-amber-400 border-2 p-px h-[60px] bg-red-600 rotate-45"></div>
              </div>
            )}
          </div>

          {/* Vibrate */}
          <div className="relative cursor-pointer active:scale-95" onClick={toggleVibrate}>
            <img src={vibratePic} alt="VibrateButton" />
            {!vibrateOn && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 mb-11 border-amber-400 border-2 p-px h-[60px] bg-red-600 rotate-45"></div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Setting;
