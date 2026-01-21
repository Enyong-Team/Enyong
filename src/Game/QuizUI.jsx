import React from "react";
// Background Imports
import ScienceBG from "./Categories/Science/Sciencebackground/ScienceBG.png";
import EnglishBG from "./Categories/English/EnglishBackground/EnglishBG.png";
import FilipinoBG from "./Categories/Filipino/FilipinoBackground/FilipinoBg.png";
import MathBG from "./Categories/Math/MathBackground/MathBG.png";
import ApBG from "./Categories/AralingPanlipunan/AralingPanlipunanbackground/AralingPanlipunanBG.png";
import TleBG from "./Categories/TLE/TLEBackground/TleBG.png";
import GMRCBG from "./Categories/GMRC/gmrcBackground/GMRCBG.png";
import MaABG from "./Categories/MusicAndArt/MusicAndArtBackground/MAPEHBG.png";
import PEaHBG from "./Categories/PhysicalEducationAndHealth/PhysicalEducationAndHealthBackground/MAPEHBG.png";

import { 
    ReturnPic, settingPic, coinPic, plusPic, 
    HintBtn, QuizCard, NextQuestionOrange 
} from "../assets/assets";

export default function QuizUI({
  subject, 
  difficulty, 
  coins, 
  hints, 
  questionNumber, 
  question, 
  choices, 
  selected, 
  correctIndex, 
  removedOptions, 
  onChoiceClick, 
  onHint, 
  onBack, 
  onOpenSettings, 
  onOpenDailyGoals,
  onNext, 
}) {
  const letters = ["A", "B", "C", "D"];

  const backgrounds = {
    "Science": ScienceBG,
    "English": EnglishBG,
    "Filipino": FilipinoBG,
    "Math": MathBG,
    "Araling Panlipunan": ApBG,
    "TLE": TleBG,
    "GMRC": GMRCBG, 
    "Music And Art": MaABG,
    "PE And Health": PEaHBG
  };

  const currentBg = backgrounds[subject] || ScienceBG;

  // Check if answer is wrong
  const isWrong = selected !== null && Number(selected) !== Number(correctIndex);

  const getOptionColor = (idx) => {
    if (removedOptions && removedOptions.includes(idx)) return "bg-gray-500 opacity-50";
    if (selected === null) return "bg-[#004C99]";
    if (Number(idx) === Number(correctIndex)) return "bg-green-500";
    if (selected === idx && Number(idx) !== Number(correctIndex)) return "bg-red-500";
    return "bg-[#004C99]";
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat p-6 item-center overflow-hidden flex flex-col"
      style={{ backgroundImage: `url(${currentBg})` }}
    >
       <div className="flex justify-between pb-2">
        <button onClick={onBack}>
          <img src={ReturnPic} className="h-12 active:scale-95" alt="back" />
        </button>

        <img
          src={settingPic}
          className="h-12 cursor-pointer active:scale-95"
          onClick={onOpenSettings}
          alt="settings"
        />
      </div>

      {/* Subject */}
      <div className="flex justify-center pb-4">
        <div className="bg-[#081E41] border-2 border-white shadow-[inset_0_0_15px_rgba(0,0,0,0.6)] cursor-pointer px-10 h-10 flex justify-center items-center rounded-full">
          <h1 className="text-white font-bold font-IN">{subject}</h1>
        </div>
      </div>
      
      {/* Difficulty + Coins */}
      <div className="flex justify-between relative z-10">
        <div className="bg-[#081E41] border-2 border-white shadow-[inset_0_0_15px_rgba(0,0,0,0.6)] cursor-pointer px-4 h-10 flex justify-center items-center rounded-full">
          <h1 className="text-white font-bold font-IN">{difficulty}</h1>
        </div>

        <div>
          <div className="flex items-center bg-[#084E99] shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] h-10 border-2 rounded-full border-white px-2 gap-2 mb-2">
            <img src={coinPic} className="w-10 h-10" alt="coin" />
            <span className="font-LG text-white text-xl">{coins}</span>
            <img
              src={plusPic}
              className="w-8 h-8 mt-1 cursor-pointer active:scale-95"
              onClick={onOpenDailyGoals}
              alt="plus"
            />
          </div>

          <div className="flex justify-end cursor-pointer" onClick={onHint}>
            <div className="flex p-0 flex-row justify-center active:scale-95 bg-[#299C2F] shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] border-2 rounded-full border-white px-1 items-center mb-5 w-auto">
              <img src={HintBtn} className="w-9 h-9" alt="hint" />
              <div className="bg-black/50 rounded-4xl px-2 items-center py-1 flex justify-center gap-1">
                <img src={coinPic} className="w-6 h-6" alt="coin" />
                <span className="font-LG text-center text-white text-sm">
                  {hints}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      {/* This holds Card, Choices, and Button in a vertical column */}
      <div className="flex flex-col justify-center items-center -mt-24 w-full">
        
        {/* 1. QUESTION CARD */}
        <div className="flex justify-center items-center pb-4 mt-15 relative z-0">
          <img
            src={QuizCard}
            className="w-[293px] sm:w-[360px] md:w-[393px] h-auto"
            alt="Quiz Card"
          />
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-[72px] h-[72px] rounded-full flex items-center justify-center text-white text-2xl font-FD">
            {questionNumber}
          </div>
          <div className="absolute inset-0 flex items-center justify-center pt-12">
            <h1 className="w-[238px] text-white text-center text-xl font-FD leading-tight">
              {question}
            </h1> 
          </div>
        </div>

        {/* 2. CHOICES */}
        <div className="flex flex-col justify-start space-y-2 mx-auto w-full items-center z-10">
          {choices.map((text, idx) => {
            const isRemoved = removedOptions && removedOptions.includes(idx);
            const optionColor = getOptionColor(idx);

            return (
              <div
                key={idx}
                className={`flex flex-row items-center justify-start w-full max-w-[400px] active:scale-95 cursor-pointer 
                  ${isRemoved ? "pointer-events-none cursor-not-allowed" : ""}`}
                onClick={() => onChoiceClick(idx)}
              >
                <div
                  className={`rounded-full h-12 flex items-center px-4 ${optionColor} shadow-[inset_0_0_5px_rgba(0,0,0,0.6)] shrink-0 -mr-5 z-10 transition-colors duration-300`}
                >
                  <h1 className="text-white text-xl font-FD cursor-pointer">
                    {letters[idx]}
                  </h1>
                </div>

                <div
                  className={`relative flex justify-center items-center rounded-full shadow-[inset_0_0_15px_rgba(0,0,0,0.6)] text-white flex-1 wrap-break-word text-xl font-FD cursor-pointer ${optionColor} transition-colors duration-300`}
                  style={{
                    WebkitMask:
                      "radial-gradient(circle 30px at 0% 50%, transparent 98%, black 100%)",
                    mask: "radial-gradient(circle 30px at 0% 50%, transparent 98%, black 100%)",
                  }}
                >
                  <div className="px-15 py-0">
                    <h1 className="p-2 py-2.5 pl-7">{text}</h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. NEXT BUTTON (Orange) */}
        {/* Rendered normally in the flow, BELOW the choices */}
        {isWrong && (
            <div 
                className="mt-6 cursor-pointer active:scale-95 z-20"
                onClick={onNext}
            >
                <img 
                    src={NextQuestionOrange} 
                    className="w-48 h-auto object-contain" 
                    alt="Next Question"
                />
            </div>
        )}

      </div>
    </div>
  );
}