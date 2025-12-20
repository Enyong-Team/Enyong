import React, { useState } from 'react';
import { closePic, soundPic, musicPic, vibratePic } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

function Setting() {
  const navigate = useNavigate();

  // Toggle states
  const [soundOn, setSoundOn] = useState(true);
  const [musicOn, setMusicOn] = useState(true);
  const [vibrateOn, setVibrateOn] = useState(true);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/50 z-50">

      <div className="bg-[#084E99] rounded-xl w-[368px] h-[216px] flex flex-col items-center">

        {/* Setting and Close Buttons */}
        <div className="relative bg-[#012F65] rounded-xl p-6 flex flex-row items-center justify-center w-full">
          <h1 className="font-LG text-white text-3xl">Settings</h1>
          <img
            src={closePic}
            alt="CloseButton"
            className="absolute right-4 cursor-pointer active:scale-95"
            onClick={() => navigate(-1)} // closes modal and goes back to Home
          />
        </div>


        {/* Sound Music and vibrate Buttons */}
        <div className="flex flex-row items-center justify-center gap-10 p-4">
          {/* Sound */}
          <div
            className="relative cursor-pointer active:scale-95"
            onClick={() => setSoundOn(!soundOn)}
          >
            <img src={soundPic} alt="SoundButton" />
            {!soundOn && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 mb-11 border-amber-400 border-2 p-px h-[60px] bg-red-600 rotate-45"></div> {/* off icon slash harang basta */}
              </div>
            )}
          </div>

          {/* Music */}
          <div
            className="relative cursor-pointer active:scale-95"
            onClick={() => setMusicOn(!musicOn)}
          >
            <img src={musicPic} alt="MusicButton" />
            {!musicOn && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 mb-11 border-amber-400 border-2 p-px h-[60px] bg-red-600 rotate-45"></div>
              </div>
            )}
          </div>

          {/* Vibrate */}
          <div
            className="relative cursor-pointer active:scale-95"
            onClick={() => setVibrateOn(!vibrateOn)}
          >
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
