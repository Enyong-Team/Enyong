import React from 'react'
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





function MiniGameQuizUI() {

const choices = ["Mahoraga","Datord","Hoo lee Shet","Hot & Spicy"];
const letters =["A","B","C","D"];
  const navigate = useNavigate();   
  const location = useLocation();  

const selectedSubject = location.state?.subject || "No Subject";

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

const currentBG = subjectBackgrounds[selectedSubject] || ScienceBG;

  return (
    <div
  className='min-h-screen bg-cover bg-center bg-no-repeat space-y-6 p-6 item-center overflow-hidden flex flex-col font-LG'
  style={{
    backgroundImage: `url(${currentBG})`
  }}
>
      {/* return and setting */}
        <div className="flex justify-between pb-2">
          <Link to={"/selectSubject"} >
            <button >
                <img 
                  src={ReturnPic} 
                  className="h-12 active:scale-95
                              max-[380px]:w-9 max-[380px]:h-9" 
                  alt="back" />
            </button>
         </Link>
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
              <div className="bg-[#084E99]  shadow-[inset_0_0_15px_rgba(0,0,0,0.6)] 
                          cursor-pointer px-10 h-10 max-[380px]:h-8 flex justify-center items-center rounded-full">
               <h1 className="text-white max-[380px]:text-sm font-bold font-IN">
                {selectedSubject}
              </h1>
              </div>
            </div>

          {/*Coins */}
              < div className="flex items-center bg-[#084E99] shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] 
                              h-10 max-[380px]:h-8.5
                              rounded-full  px-2 gap-2 mb-2 font-LG">
                <img 
                  src={coinPic} 
                  className="w-10 h-10
                            max-[380px]:w-7 max-[380px]:h-7" 
                  alt="coin" />
                  
                <span className='text-white'>2</span>

                <img
                  src={plusPic}
                  className="w-8 h-8 
                            max-[380px]:w-7 max-[380px]:h-7
                            mt-1 cursor-pointer active:scale-95"
                  
                  alt="plus"
                />
              </div>
        </div>


              {/* --- MAIN CONTENT CONTAINER --- */}
      {/* This holds Card, Choices, and Button in a vertical column */}
      <div className="flex flex-col justify-center items-center w-full">
        
        {/* 1. QUESTION CARD */}
        <div className="flex justify-center items-center text-center pb-4 ">
            <div className="flex justify-center items-center text-center pb-4">
              
              <div
                className="w-[293px] sm:w-[360px] md:w-[393px] 
                          h-[260px] border
                          shadow-[inset_0_0_15px_rgba(0,0,0,0.6)] 
                          bg-[#084E99] rounded-3xl 
                          max-[380px]:w-[273px] max-[380px]:h-[250px]
                          flex flex-col p-6  "
              >
                <span className='text-white font-FD  '>Difficulity</span>
                <div className='flex flex-1 items-center justify-center'>
                    <h1 className="text-white text-center text-xl max-[340px]:text-sm font-FD leading-tight wrap-break-word">
                      Sunbject Question
                    </h1>
                </div>

              </div>
            </div>
        </div>
        
        {/* 2. CHOICES */}
        <div className="flex flex-col space-y-3 max-[380px]:space-y-2 w-full items-center">
          {choices.map((text, idx) => (
            <div
              key={idx}
              className="flex flex-row items-center w-full max-w-[360px] max-[380px]:max-w-[300px]  active:scale-95 cursor-pointer"
            >
              {/* Letter Badge */}
              <div
                className={`w-12 h-12 max-[380px]:w-10 max-[380px]:h-10
                            rounded-full flex items-center justify-center shrink-0 -mr-5 z-10
                            shadow-[inset_0_0_8px_rgba(0,0,0,0.5)]
                            ${idx % 2 !== 0 ? "bg-[#084E99]" : "bg-[#084E99]"}`}
              >
                <span className="text-white text-lg max-[380px]:text-sm font-bold font-FD">
                  {letters[idx]}
                </span>
              </div>

              {/* Answer Bar */}
              <div
                className={`flex-1 h-12 max-[380px]:h-10
                            rounded-full flex items-center justify-center
                            shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]
                            ${idx % 2 !== 0 ? "bg-[#084E99]" : "bg-[#084E99]"}`}
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

         <div 
                className="mt-6 cursor-pointer active:scale-95 z-20
                          max-[380px]:mt-2"
                
            >
                <img 
                    src={NextQuestionOrange} 
                    className="w-48 h-auto object-contain
                              max-[380px]:w-40" 
                    alt="Next Question"
                />
            </div>
        </div>
    </div>
  )
}

export default MiniGameQuizUI