import "./Home.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCoins } from "../context/coincontext";

import {
  infoPic,
  accPic,
  settingPic,
  scorePic,
  earthPic,
  coinPic,
  plusPic,
  depedPic,
  minigamepic,
  playPic,
  MaharlikaB,
  MandirigmaB,
  MaestroB,
  MarangalB,
  PlayButton,
} from "../assets/assets";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  /* Control STATE for Dropdown Options */
  const [showPartnerBtn, setShowPartnerBtn] = useState(false);
  const [showEarnCoinBtn, setShowEarnCoinBtn] = useState(false);
  const [showLevelQuarterBtn, setShowLevelQuarterBtn] = useState(false);
  
  // REMOVED: const [showLevel, setShowRank] = useState("123"); 

  // WebWide Coin
  const { coins } = useCoins();

  // Daily Quest State
  const [dailyLoginDone, setDailyLoginDone] = useState(false);

  useEffect(() => {
    setDailyLoginDone(true);
  }, []);

  /* =========================================
     LEVEL & RANK LOGIC
     ========================================= */

  // 1. Get correctCount from storage or navigation state
  const correctCount =
    location.state?.correctCount ??
    Number(localStorage.getItem("correctCount")) ??
    0;

  // 2. Calculate LEVEL NUMBER (The math is already here!)
  const levelNumber = Math.floor(correctCount / 1) + 1;

  // 3. Determine RANK TITLE (The Medal)
  const getLevelTitle = (correctCount) => {
    if (correctCount >= 1501) return "MARANGAL";
    if (correctCount >= 901) return "ALAMAT";
    if (correctCount >= 501) return "MAESTRO";
    if (correctCount >= 20) return "MAHARLIKA";
    return "MANDIRIGMA";
  };
  const levelTitle = getLevelTitle(correctCount);

  // 4. Map Titles to Images
  const levelImages = {
    MANDIRIGMA: MandirigmaB,
    MAHARLIKA: MaharlikaB,
    MAESTRO: MaestroB,
    ALAMAT: MaharlikaB,
    MARANGAL: MarangalB,
  };

  const currentLevelImage = levelImages[levelTitle] ?? MandirigmaB;

  return (
    <div className="min-h-screen w-full max-w-full overflow-hidden p-5 flex flex-col items-center gap-5 relative z-0">
      
      {/* --- Top Buttons Row --- */}
      <div className="flex flex-row justify-between w-full items-start">
        <img
          src={infoPic}
          alt="info"
          className="w-[50px] h-12 max-[380px]:w-9 max-[380px]:h-9 cursor-pointer active:scale-95"
          onClick={() =>
            navigate("/about", { state: { backgroundLocation: location } })
          }
        />

        <div className="flex flex-row gap-4">
          <Link to="/account">
            <img
              src={accPic}
              alt="account"
              className="w-[50px] h-12 max-[380px]:w-9 max-[380px]:h-9 cursor-pointer active:scale-95"
            />
          </Link>

          <img
            src={settingPic}
            alt="settings"
            className="w-[50px] h-12 max-[380px]:w-9 max-[380px]:h-9 cursor-pointer active:scale-95"
            onClick={() =>
              navigate("/setting", { state: { backgroundLocation: location } })
            }
          />
        </div>
      </div>

      {/* --- Stats Row --- */}
      <div className="flex justify-center mb-2 ">
        <div className="flex flex-row gap-4 ">
          
          <div className="flex flex-col justify-center">
            
            {/* 1. Score Button -> NOW CONNECTED TO levelNumber */}
            <Link to={"/ranking"}>
              <div className="flex flex-row cursor-pointer active:scale-95">
                <img
                  src={scorePic}
                  alt="score"
                  className="w-10 h-10 max-[380px]:w-8 max-[380px]:h-8 "
                />
                <h1
                  className="text-xl px-7 text-center border-t-2 border-r-2 
                             border-b-2 pt-0.5 border-[#999999] 
                             max-[380px]:text-sm rounded-tr-full rounded-br-full text-white mt-0.5 mb-1 font-LG"
                >
                  {/* CHANGED THIS from {showLevel} to {levelNumber} */}
                  {levelNumber}
                </h1>
              </div>
            </Link>

            {/* 2. Rank Button -> Displays MEDAL TITLE (Maharlika, etc.) */}
            <Link to={"/rank"}>
              <div className="flex flex-row mb-5 cursor-pointer active:scale-95">
                <img
                  src={currentLevelImage}
                  alt="rank badge"
                  className="w-10 h-10 max-[380px]:w-8 max-[380px]:h-8 bg-[#021934] rounded-lg p-1"
                />
                <h1
                  className="max-[380px]:text-xs text-sm px-2 p-1 mt-1 
                             max-[380px]:mt-0.5 text-center 
                             border-t-2 border-r-2 border-b-2 border-[#999999]
                             rounded-tr-full rounded-br-full text-white mb-1 font-LG"
                >
                  {levelTitle}
                </h1>
              </div>
            </Link>
          </div>

          {/* Earth button */}
          <img
            src={earthPic}
            alt="earth"
            className="w-[94px] h-[94px] max-[380px]:w-15 max-[380px]:h-15 "
          />

          {/* Coin Display */}
          <div
            className="flex flex-row max-[323px]:flex-col h-10 max-[323px]:h-auto
                       border rounded-full border-white items-center
                       space-x-2 max-[380px]:space-x-2 max-[340px]:space-y-1
                       shadow-inner shadow-black/30 mb-5  max-[395px]:pr-2 "
          >
            <img
              src={coinPic}
              alt="coin"
              className="md:w-10 md:h-10 w-8 h-8 max-[380px]:w-7 max-[380px]:h-7 ml-1"
            />

            <h1 className="font-LG text-white max-[380px]:text-lg text-xl">
              {coins}
            </h1>

            <img
              src={plusPic}
              alt="plus"
              className=" w-8 h-8 max-[380px]:w-7 max-[380px]:h-7 
                         max-[391px]:mr-1  mt-1.5 mr-2 cursor-pointer"
              onClick={() =>
                navigate("/dailyGoals", {
                  state: { backgroundLocation: location },
                })
              }
            />
          </div>
        </div>
      </div>

      {/* --- Center Display --- */}
      <div className="flex justify-center items-center flex-col mb-5 max-[380px]:-mt-5">
        
        {/* Displays "Level X" based on correctCount */}
        <h1
          className="flex justify-center font-LG 
                     max-[380px]:text-xl text-2xl
                     text-white mr-4"
        >
          Level {levelNumber}
        </h1>

        <img
          src={depedPic}
          alt="deped"
          className="w-[295px] h-[236px] max-[380px]:w-50 max-[380px]:h-50"
        />

        <button onClick={() => navigate("/randomize")}>
          <img
            src={PlayButton}
            alt="PLAY"
            className=" w-[191px] h-[52px] cursor-pointer active:scale-95"
          />
        </button>
      </div>

      {/* --- Mini Games Menu --- */}
      <div
        className="bg-[#021934] flex justify-center 
                   items-center flex-col rounded-3xl p-2 mt-4
                   w-[373px] h-auto max-[380px]:-mt-2
                   max-[380px]:w-90 gap-2"
      >
        <img
          src={minigamepic}
          alt="minigamelogo"
          className="w-[220px] h-[59px] items-center justify-center mt-2 
                     max-[380px]:w-50 max-[380px]:h-14"
        />

        {/* Buttons */}
        <div className="font-LG text-white flex justify-center gap-1">
          <button
            onClick={() => {
              setShowPartnerBtn(!showPartnerBtn);
              setShowEarnCoinBtn(false);
              setShowLevelQuarterBtn(false);
            }}
            className={`text-sm px-6 p-1 rounded-tl-2xl rounded-bl-2xl transition cursor-pointer
              ${showPartnerBtn ? "bg-green-600 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]" : "bg-[#0A5090]"}`}
          >
            PLAY WITH <br /> PARTNER
          </button>

          <button
            onClick={() => {
              setShowEarnCoinBtn(!showEarnCoinBtn);
              setShowPartnerBtn(false);
              setShowLevelQuarterBtn(false);
            }}
            className={`text-sm px-10 p-1 transition cursor-pointer
              ${showEarnCoinBtn ? "bg-green-600 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]" : "bg-[#0A5090]"}`}
          >
            Earn <br /> Coins
          </button>

          <button
            onClick={() => {
              setShowLevelQuarterBtn(!showLevelQuarterBtn);
              setShowPartnerBtn(false);
              setShowEarnCoinBtn(false);
            }}
            className={`text-sm px-6 p-1 rounded-tr-2xl rounded-br-2xl transition cursor-pointer active:scale-95
              ${showLevelQuarterBtn ? "bg-green-600 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]" : "bg-[#0A5090]"}`}
          >
            LEVEL AND <br /> QUARTER
          </button>
        </div>

        {/* --- Dropdowns --- */}
        <div className={`w-full flex flex-col items-center overflow-hidden transition-all duration-300 ${showPartnerBtn ? "max-h-40 " : "max-h-0"}`}>
          <div className="w-[90%] rounded-xl p-3 flex flex-col gap-3 items-center justify-center">
            <h1 className="font-LG text-white text-center">Scan a QR code to challenge a friend in a quiz battle.</h1>
            <Link to={"/PlayWithPartner"}>
              <img src={playPic} alt="play1v1btn" className="w-[50px] h-[49px] cursor-pointer active:scale-95" />
            </Link>
          </div>
        </div>

        <div className={`w-full flex flex-col items-center overflow-hidden transition-all duration-300 ${showEarnCoinBtn ? "max-h-40 " : "max-h-0"}`}>
          <div className="w-[90%] rounded-xl p-3 flex flex-col gap-3 items-center justify-center">
            <h1 className="font-LG text-white text-center">Answer fun questions to collect more coins and unlock rewards.</h1>
            <Link to={"/earnCoins"}>
              <img src={playPic} alt="playECbtn" className="w-[50px] h-[49px] cursor-pointer active:scale-95" />
            </Link>
          </div>
        </div>

        <div className={`w-full flex flex-col items-center overflow-hidden transition-all duration-300 ${showLevelQuarterBtn ? "max-h-40 " : "max-h-0"}`}>
          <div className="w-[90%] rounded-xl p-3 flex flex-col gap-3 items-center justify-center">
            <h1 className="font-LG text-white text-center">Replay lesson-based games by level and quarter to review and improve.</h1>
            <Link to={"/levelandquarter"}>
              <img src={playPic} alt="playLAQbtn" className="w-[50px] h-[49px] cursor-pointer active:scale-95" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;