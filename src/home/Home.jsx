import './Home.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCoins } from "../context/coincontext";

import { 
  infoPic, accPic, settingPic, 
  scorePic, earthPic, coinPic, plusPic, 
  depedPic, minigamepic, playPic, MaharlikaB, 
  MandirigmaB, MaestroB,  MarangalB, PlayButton
} from "../assets/assets";



function Home() {

    {/* use to navigate to settings */}
    const navigate = useNavigate();
    const location = useLocation();


     {/* Control STATE for Dropdown Options */}
    const [showPartnerBtn, setShowPartnerBtn] = useState(false); //play with player
    const [showEarnCoinBtn, setShowEarnCoinBtn] = useState(false); //Earn  coin
    const [showLevelQuarterBtn, setShowLevelQuarterBtn] = useState(false);// Level & quarter
    const [showCoin, setShowCoin] = useState("10");// coins //disabled for now, change showCoin to Coins
    const [showRank, setShowRank] = useState("123");// Ranking


    //WebWide Coin
    const { coins } = useCoins();

    //Daily Quest State
    const [dailyLoginDone, setDailyLoginDone] = useState(false);

        useEffect(() => {
    // Automatically mark daily login as completed
    setDailyLoginDone(true);
    }, []);

    // from game: level logic
    const correctCount = location.state?.correctCount ?? Number(localStorage.getItem("correctCount")) ?? 0;
    // Auto-calculate level number
    const levelNumber = Math.floor(correctCount / 1) + 1;

    // Auto-calculate level title
    // Auto-calculate level title
    const getLevelTitle = (correctCount) => {
        if (correctCount >= 1501) return "MARANGAL";
        if (correctCount >= 901) return "ALAMAT";
        if (correctCount >= 501) return "MAESTRO";
        if (correctCount >= 201) return "MAHARLIKA";
        return "MANDIRIGMA";
    };
    const levelTitle = getLevelTitle(correctCount);





    // Map level titles to images
    const levelImages = {
        "MANDIRIGMA": MandirigmaB,
        "MAHARLIKA": MaharlikaB,
        "MAESTRO": MaestroB,
        "ALAMAT": MaharlikaB,   
        "MARANGAL": MarangalB
    };

    const currentLevelImage = levelImages[levelTitle] ?? MandirigmaB;
        
  return (
    <div className="min-h-screen w-full max-w-full overflow-hidden p-5 flex flex-col items-center gap-5 relative z-0">

       
        {/* Buttons row */}
        <div className="flex flex-row justify-between w-full  items-start">
           
            {/* About button */}
            <img
            src={infoPic}
            alt="info"
            className="w-[50px] h-12 cursor-pointer active:scale-95" // about button size to
            onClick={() => navigate("/about", { state: { backgroundLocation: location } })}
            />
           

            {/* Account & Settings buttons */}
            
            <div className="flex flex-row gap-4">
                <Link to="/account">
                    <img
                        src={accPic}
                        alt="account"
                        className="w-[50px] h-12 cursor-pointer active:scale-95" // account button size to
                    />
                </Link>

                    {/*  Settings buttons */}
                    <img
                        src={settingPic}
                        alt="settings"
                        className="w-[50px] h-12 cursor-pointer active:scale-95" // setting button size
                        onClick={() => navigate("/setting", { state: { backgroundLocation: location } })}
                    />
            
            </div>
        </div>

        {/* Button Second Row */}
        <div className="flex justify-center mb-2 ">
            <div className="flex flex-row  gap-4">
                
                 {/* Ranking and Maharlika */}
                <div className='flex flex-col justify-center items-center '>

                    <Link to={"/ranking"}>
                        <div className='flex flex-row  cursor-pointer active:scale-95'>
                        {/* Score button */}
                        <img
                        src={scorePic}
                        alt="score"
                        className="w-10 h-10 "
                        />

                        {/* Score placeholder */}
                        <h1 className="text-xl px-7 text-center border-t-2 border-r-2 border-b-2 border-[#999999] rounded-tr-full rounded-br-full  text-white mt-0.5 mb-1 font-LG">
                        {showRank}
                        </h1>

                        </div>
                    </Link>

                <Link to={"/rank"}>
                    <div className='flex flex-row mb-5 cursor-pointer active:scale-95'>
                        {/* maharlika */}
                        
                            <img
                            src={currentLevelImage}
                            alt="score"
                            className="w-10 h-10 bg-[#021934] rounded-lg p-1"
                            />
                        

                        {/* Maharlika placeholder */}
                        <h1 className="text-sm px-2 p-1 fix text-center border-t-2 border-r-2 border-b-2 border-[#999999] rounded-tr-full rounded-br-full  text-white mt-0.5 mb-1 font-LG">
                        {levelTitle}
                        </h1>

                    </div>
                </Link>
                </div>
                
                {/* Earth button */}
                <img
                src={earthPic}
                alt="earth"
                className="w-[94px] h-[94px] "
                />

                {/* Coin button */}
                <div className="flex flex-row w-[135px] h-10 border rounded-full border-white px-2 items-center gap-2 shadow-inner shadow-black/30 mb-5  ">
                {/* Coin image */}
                <img
                    src={coinPic}
                    alt="coin"
                    className="w-10 h-10"
                />

                {/* Number */}
                <h1 className="font-LG text-white text-xl">
                    {coins}
                </h1>

                {/* Plus icon */}
                <img
                    src={plusPic}
                    alt="plus"
                    className="w-8 h-8 mt-1 cursor-pointer"
                    onClick={() => navigate("/dailyGoals", { state: { backgroundLocation: location } })}
                />
                </div>

            </div>
        </div>
        
        {/* Level and title and Play  */}
        <div className='flex justify-center items-center flex-col mb-5'>

            {/* Level */}
            <h1 className='flex justify-center font-LG text-2xl text-white mr-4'>
                Level {levelNumber}
            </h1>

           

            {/* Title */}
           <img
            src={depedPic}
            alt="deped"
            className="w-[295px] h-[236px] " // Title Logo size to
             />

             {/* Play Button */}
             
             <button 
             onClick={() => navigate("/randomize")}>
              <img 
                src={PlayButton} 
                alt="PLAY"
                className=" w-[191px] h-[52px]  
                  cursor-pointer active:scale-95" />
            </button>

        </div>

        {/* Mini Games*/}
        <div className='bg-[#021934] flex justify-center items-center flex-col rounded-3xl p-2 w-[373px] h-auto gap-2'>
            {/* Mini Game Logo */}
           <img
            src={minigamepic}
            alt="minigamelogo"
            className="w-[220px] h-[59px] items-center justify-center mt-2 "  />

            {/* PWP | EC | LAQ buttons */}
            <div className='font-LG text-white flex justify-center gap-1'>

                 {/* PWP buttons */}
                <button 
                    onClick={() => {setShowPartnerBtn(!showPartnerBtn)
                                    setShowEarnCoinBtn(false) 
                                    setShowLevelQuarterBtn(false)}}  
                                    // ec CLOSE when pwp is clicked
                    className={`
                        text-sm px-6 p-1 rounded-tl-2xl rounded-bl-2xl transition cursor-pointer
                        ${showPartnerBtn 
                        ? "bg-green-600 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]"// this palit the kulay ahahah
                        : "bg-[#0A5090]"
                        } `}
                    >
                    PLAY WITH <br /> PARTNER
                </button>

                 {/* EC  buttons */}
                <button 
                    onClick={() => {setShowEarnCoinBtn(!showEarnCoinBtn)
                                    setShowPartnerBtn(false)
                                     setShowLevelQuarterBtn(false) }}
                                     // PWP CLOSE when EC is clicked
                    className={`
                        text-sm px-10 p-1 transition cursor-pointer
                        ${showEarnCoinBtn 
                        ? "bg-green-600 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]"// this palit the kulay ahahah
                        : "bg-[#0A5090]"
                        } `}
                    >
                    Earn <br /> Coins
                </button>

                {/* LAQ  buttons */}
                <button 
                    onClick={() => {setShowLevelQuarterBtn(!showLevelQuarterBtn)
                                    setShowPartnerBtn(false) 
                                    setShowEarnCoinBtn(false) }}
                                     // PWP CLOSE when EC is clicked
                    className={`
                         text-sm px-6 p-1 rounded-tr-2xl rounded-br-2xl transition cursor-pointer active:scale-95
                        ${showLevelQuarterBtn 
                        ? "bg-green-600 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]"// this palit the kulay ahahah
                        : "bg-[#0A5090]"
                        } `}>
                    LEVEL AND <br /> QUARTER
                </button>

            </div>

 
            {/* EXPANDING DROPDOWN 1v1 */}
            <div className={`
                w-full flex flex-col items-center overflow-hidden transition-all duration-300
                ${showPartnerBtn ? "max-h-40 " : "max-h-0"}`}>
                <div className=" w-[90%] rounded-xl p-3 flex flex-col gap-3 items-center justify-center " >

                    <h1 className='font-LG text-white text-center'>Scan a QR code to challenge a friend in a quiz battle.</h1>
                    <Link to={"/PlayWithPartner"}>
                     <img
                        src={playPic} 
                        alt="play1v1btn"
                        className="w-[50px] h-[49px] cursor-pointer active:scale-95" // play button size to
                        />
                    </Link>
                </div>
            </div>

            {/* EXPANDING DROPDOWN Earn Coin */}
            <div className={`
                w-full flex flex-col items-center overflow-hidden transition-all duration-300
                ${showEarnCoinBtn ? "max-h-40 " : "max-h-0"}`}>
                <div className=" w-[90%] rounded-xl p-3 flex flex-col gap-3 items-center justify-center " >

                    <h1 className='font-LG text-white text-center'>Answer fun questions to collect more coins and unlock rewards.</h1>
                    <Link to={"/earnCoins"}>
                     <img
                        src={playPic} 
                        alt="playECbtn"
                        className="w-[50px] h-[49px] cursor-pointer active:scale-95" // play button size to
                        />
                    </Link>
                </div>
            </div>

            {/* EXPANDING DROPDOWN Level and quarter */}
            <div className={`
                w-full flex flex-col items-center overflow-hidden transition-all duration-300
                ${showLevelQuarterBtn ? "max-h-40 " : "max-h-0"}`}>
                <div className=" w-[90%] rounded-xl p-3 flex flex-col gap-3 items-center justify-center " >

                    <h1 className='font-LG text-white text-center'>Replay lesson-based games by level and quarter to review and improve.</h1>
                    <Link to={"/levelandquarter"}>
                     <img
                        src={playPic} 
                        alt="playLAQbtn"
                        className="w-[50px] h-[49px] cursor-pointer active:scale-95" // play button size to
                        />
                    </Link>
                </div>
            </div>

        </div>



    </div>
  );
}

export default Home;
