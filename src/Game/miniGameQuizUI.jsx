import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom";
import { 
    ReturnPic, settingPic, coinPic, plusPic, 
    HintBtn, QuizCard, NextQuestionOrange 
} from "../assets/assets";

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
import NextQuestion from "./nextquestion/nextQuestion";

import { questions } from "../data/questions";

// FIX: COIN CONTEXT
import { useCoins } from "../context/coincontext";

function MiniGameQuizUI() {

const navigate = useNavigate();
const location = useLocation();

const letters = ["A","B","C","D"];

const [showNextModal, setShowNextModal] = useState(false);

// ✅ FIXED COINS (SAFE)
const { coins, setCoins } = useCoins();

// subject
const selectedSubject = location.state?.subject || "Science";

// filter questions
const subjectQuestions = questions.filter(
 q => q.subject.toUpperCase() === selectedSubject.toUpperCase()
);

// index for next question
const [questionIndex, setQuestionIndex] = useState(0);

// current question
const currentQuestion = subjectQuestions[questionIndex];
const choices = currentQuestion?.choices || [];

// answer state
const [selected, setSelected] = useState(null);

// background
const subjectBackgrounds = {
  SCIENCE: ScienceBG,
  MATH: MathBG,
  ENGLISH: EnglishBG,
  FILIPINO: FilipinoBG,
  "ARALING PANLIPUNAN": ApBG,
  "MUSIC AND ART": MaABG,
  "PE AND HEALTH": PEaHBG,
  TLE: TleBG,
  GMRC: GMRCBG
};

const currentBG =
subjectBackgrounds[selectedSubject.toUpperCase()] || ScienceBG;

// NEXT QUESTION LOGIC (REUSED)
const handleNextQuestion = () => {
  if (questionIndex < subjectQuestions.length - 1) {
    setQuestionIndex(prev => prev + 1);
  } else {
    setQuestionIndex(0);
  }

  setSelected(null);
  setShowNextModal(false);
};

// ANSWER CLICK LOGIC (FIXED COINS ONLY)
const handleChoiceClick = (idx) => {
  if (selected !== null) return;

  setSelected(idx);

  const isCorrect = idx === currentQuestion.correctIndex;

  if (isCorrect) {
    setCoins((prev) => (Number(prev) || 0) + 1);

    setTimeout(() => {
      setShowNextModal(true);
    }, 300);
  }
  // ❌ WRONG ANSWER = DO NOTHING (or just UI feedback)
};

// WRONG CHECK
const isWrong =
  selected !== null &&
  selected !== currentQuestion?.correctIndex;

// COLOR LOGIC (UNCHANGED)
const getOptionColor = (idx) => {
  if (selected === null) return "bg-[#084E99]";

  if (idx === currentQuestion.correctIndex)
    return "bg-green-500";

  if (idx === selected && idx !== currentQuestion.correctIndex)
    return "bg-red-500";

  return "bg-[#084E99]";

};


const [showExitPopup, setShowExitPopup] = useState(false);
const handleCloseExitPopup = () => {
  setShowExitPopup(false);
};


const handleOpenDailyGoals = () => {
  navigate("/dailyGoals", {
    state: {
      backgroundLocation: location,
      coins,
      subject: selectedSubject,
    },
  });
};

return (
    <div
  className='min-h-screen bg-cover bg-center bg-no-repeat space-y-6 p-6 item-center overflow-hidden flex flex-col font-LG'
  style={{
    backgroundImage: `url(${currentBG})`
  }}
>

      {/* EXIT CONFIRMATION POPUP */}
      {showExitPopup && (
        <div className="absolute font-LG inset-0 tracking-widest bg-black/60 flex items-center justify-center z-50 px-4">

          <div className="w-full max-w-[310px] rounded-[18px] overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.45)]">

            {/* TOP MESSAGE */}
            <div className="bg-[#0B4E99] px-6 py-5 flex items-center justify-center border-b border-white/30">
              <h2 className="text-white text-center text-2xl font-semibold leading-tight">
                Are you sure you <br /> want to exit?
              </h2>
            </div>

            {/* BOTTOM BUTTONS */}
            <div className="flex w-full">

              {/* EXIT */}
              <button
                onClick={() => navigate("/selectSubject")}
                className="w-1/2 bg-[#B73737] text-white text-2xl py-3 active:scale-[0.98] transition border-r border-white/30"
              >
                Exit
              </button>

              {/* CANCEL */}
              <button
                onClick={handleCloseExitPopup}
                className="w-1/2 bg-[#0B4E99] text-white text-2xl py-3 active:scale-[0.98] transition"
              >
                Cancel
              </button>

            </div>
          </div>
        </div>
      )}

      {/* return and setting */}
        <div className="flex justify-between pb-2">
          
            <button onClick={() => setShowExitPopup(true)}> 
                <img 
                  src={ReturnPic} 
                  className="h-12 active:scale-95
                              max-[380px]:w-9 max-[380px]:h-9" 
                  alt="back" />
            </button>


          <img
            src={settingPic}
            className="h-12 cursor-pointer active:scale-95
                      max-[380px]:w-9 max-[380px]:h-9"
            alt="settings"
            onClick={() =>
              navigate("/setting", { state: { backgroundLocation: location } })}
          />
        </div>

        <div className='flex justify-between'>

          {/* Subject */}
          <div className="flex justify-center pb-4 max-[380px]:pb-2">
            <div className="bg-[#084E99] shadow-[inset_0_0_15px_rgba(0,0,0,0.6)] 
                        cursor-pointer px-10 h-10 max-[380px]:h-8 flex justify-center items-center rounded-full">
              <h1 className="text-white max-[380px]:text-sm font-bold font-IN">
                {selectedSubject}
              </h1>
            </div>
          </div>

          {/*Coins (FIXED ONLY LOGIC) */}
          <div className="flex items-center bg-[#084E99] shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] 
                          h-10 max-[380px]:h-8.5
                          rounded-full  px-2 gap-2 mb-2 font-LG">

            <img 
              src={coinPic} 
              className="w-10 h-10 max-[380px]:w-7 max-[380px]:h-7" 
              alt="coin" />

            <span className='text-white'>
              {Number(coins) || 0}
            </span>

            <img
              src={plusPic}
              className="w-8 h-8 max-[380px]:w-7 max-[380px]:h-7 mt-1 cursor-pointer active:scale-95"
              alt="plus"
              onClick={handleOpenDailyGoals}
            />
            
          </div>

        </div>

        {/* MAIN CONTENT */}
        <div className="flex flex-col justify-center items-center w-full">

          {/* QUESTION CARD */}
          <div className="flex justify-center items-center text-center pb-4 ">
            <div
              className="w-[293px] sm:w-[360px] md:w-[393px] 
                        h-[260px] border
                        shadow-[inset_0_0_15px_rgba(0,0,0,0.6)] 
                        bg-[#084E99] rounded-3xl 
                        max-[380px]:w-[273px] max-[380px]:h-[250px]
                        flex flex-col p-6"
            >
              <span className='text-white font-FD'>
                {currentQuestion?.level}
              </span>

              <div className='flex flex-1 items-center justify-center'>
                <h1 className="text-white text-center text-xl max-[340px]:text-sm font-FD leading-tight wrap-break-word">
                  {currentQuestion?.question}
                </h1>
              </div>

            </div>
          </div>

          {/* CHOICES */}
          <div className="flex flex-col space-y-3 max-[380px]:space-y-2 w-full items-center">

            {choices.map((text, idx) => (
              <div
                key={idx}
                onClick={() => handleChoiceClick(idx)}
                className="flex flex-row items-center w-full max-w-[360px] max-[380px]:max-w-[300px] active:scale-95 cursor-pointer"
              >

                <div
                  className={`w-12 h-12 max-[380px]:w-10 max-[380px]:h-10
                              rounded-full flex items-center justify-center shrink-0 -mr-5 z-10
                              shadow-[inset_0_0_8px_rgba(0,0,0,0.5)]
                              ${getOptionColor(idx)}`}
                >
                  <span className="text-white text-lg max-[380px]:text-sm font-bold font-FD">
                    {letters[idx]}
                  </span>
                </div>

                <div
                  className={`flex-1 h-12 max-[380px]:h-10
                              rounded-full flex items-center justify-center
                              shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]
                              ${getOptionColor(idx)}`}
                  style={{
                    WebkitMask: "radial-gradient(circle 30px at 0% 50%, transparent 98%, black 100%)",
                    mask: "radial-gradient(circle 30px at 0% 50%, transparent 98%, black 100%)",
                  }}
                >
                  <span className="text-white text-base max-[380px]:text-sm font-FD pl-6 pr-4 text-center w-full">
                    {text}
                  </span>
                </div>

              </div>
            ))}

          </div>

          {/* NEXT BUTTON */}
          {isWrong && (
            <div 
              className="mt-6 cursor-pointer active:scale-95 z-20 max-[380px]:mt-2"
              onClick={handleNextQuestion}
            >
              <img 
                src={NextQuestionOrange} 
                className="w-48 h-auto object-contain max-[380px]:w-40" 
                alt="Next Question"
              />
            </div>
          )}

        </div>

        {/* NEXT QUESTION MODAL */}
        {showNextModal && (
         <NextQuestion
            coins={coins}
            rewardCoin={3}
            onNext={handleNextQuestion}
            onHome={() => navigate("/")}
          />
        )}

    </div>
)
}

export default MiniGameQuizUI;