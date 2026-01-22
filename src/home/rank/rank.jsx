import React, { useState } from "react";
import { Link,useLocation } from "react-router-dom";
import { 
  ReturnBTN, RankLogo, MaharlikaB, 
  Mandirigma, Maharlika, Maestro, Alamat, Marangal, Claim 
} from "../../assets/assets";
import coinPic from "../../assets/PIC/coin.png";




function Rank({ levelNumber: propLevelNumber, levelTitle: propLevelTitle }) {
  // Get correctCount from localStorage 
  const correctCount = Number(localStorage.getItem("correctCount")) || 0;

  // Compute levelNumber
  const levelNumber = propLevelNumber ?? Math.floor(correctCount / 1) + 1;

  // Function to get level title
  const getLevelTitle = (correctCount) => {
    if (correctCount >= 1501) return "MARANGAL";
    if (correctCount >= 901) return "ALAMAT";
    if (correctCount >= 501) return "MAESTRO";
    if (correctCount >= 201) return "MAHARLIKA";
    return "MANDIRIGMA";
  };

  // Compute levelTitle 
  const levelTitle = propLevelTitle ?? getLevelTitle(correctCount);
  const [rewardCoin, setrewardCoin] = useState("25");

  const rankRanges = [
  { title: "MANDIRIGMA", min: 0, max: 200 },
  { title: "MAHARLIKA", min: 201, max: 500 },
  { title: "MAESTRO", min: 501, max: 900 },
  { title: "ALAMAT", min: 901, max: 1500 },
  { title: "MARANGAL", min: 1501, max: 2000 }, // you can cap it higher if needed
];

// Find current rank info
const currentRank = rankRanges.find(
  (rank) => levelNumber >= rank.min && levelNumber <= rank.max
) || rankRanges[0];

// Calculate progress percentage within current rank
const progressPercent = Math.min(
  ((correctCount - currentRank.min) / (currentRank.max - currentRank.min)) * 100,
  100
);
  return (
    <div>
      <div className="p-3 space-y-5">
        {/*Return BTN | Rank LOGO*/}
        <div>
          <Link to={"/"}>
            <img src={ReturnBTN} alt="return button" />
          </Link>
          <div className="flex justify-center items-center pt-4">
            <img src={RankLogo} alt="Rank LOGO" />
          </div>
        </div>

        {/*Proggress Bar*/}
        <div className="items-center flex justify-center">
            <div className="bg-[#021934] p-2 items-center rounded-xl flex gap-2 w-[386px]">
            <img
                src={MaharlikaB}
                alt="maharlika picture B"
                className="w-[55px] h-14 "
            />

            <div className="flex flex-col gap-1">
                {/*Current Rank*/}
                <div>
                <div className="flex gap-3">
                    <h1 className="text-white font-LG ">Current:  </h1>
                    <h1 className="text-[#2AFF00] font-LG">{currentRank.title}</h1>
                </div>
                </div>

                {/*Progress Bar*/}
                <div className="">
                {/* Progress Bar */}
                    <div className="bg-white rounded-full w-[270px] h-4 overflow-hidden">
                    <div
                        className="bg-green-600 h-4 rounded-full transition-all duration-500"
                        style={{ width: `${progressPercent}%` }}
                    ></div>
                    </div>

                    {/* Show current rank range */}
                    <p className="text-white text-center font-LG text-xs">
                    {levelNumber}-{currentRank.max}
                    </p>

                </div>


            </div>
            </div>
        </div>
        
        <div className="space-y-7">
            {/*MANDIRIGMA | MAHARLIKA*/}
            <div className="flex gap-4 justify-center ">
                {/*mandirigma*/}
                <div className="drop-shadow-[0_0_5px_#AD9A87]">
                <div
                    className="bg-[#021934] w-[177px] h-[255px] 
                                rounded-2xl text-white font-LG
                                flex flex-col justify-center items-center 
                                drop-shadow-[0_0_5px_#AD9A87]"
                >
                    <h1 
                        className="pt-3">
                        MANDIRIGMA
                    </h1>

                    <p 
                        className="font-FD">
                        1 - 200
                    </p>

                    <img 
                        src={Mandirigma} 
                        alt="MANDIRIGMA" 
                        className="-mt-5" 
                    />

                    <p 
                        className="font-FD -mt-4">
                        Rank Reward
                    </p>

                    {/* Coin  */}
                    <div className="-mt-2">

                        {/* Coin image */}
                        <img 
                            src={coinPic} alt="coin" 
                            className="w-12 h-12" 
                        />

                        <h1 
                            className="-mt-7">
                            + {rewardCoin}
                        </h1>

                    </div>

                </div>
                </div>

                {/*maharlika*/}
                <div className="drop-shadow-[0_0_5px_#ECECEC]">
                <div
                    className="bg-[#021934] w-[177px] h-[255px] 
                                rounded-2xl text-white font-LG
                                flex flex-col justify-center items-center 
                                drop-shadow-[0_0_5px_#ECECEC]"
                >
                    <h1 
                        className="scroll-pt-10">
                        MAHARLIKA
                    </h1>

                    <p 
                        className="font-FD">
                        201 - 500
                    </p>

                    <img 
                        src={Maharlika} 
                        alt="MAHARLIKA" 
                        className="-mt-10" 
                    />

                    <p 
                        className="font-FD ">
                        Rank Reward
                    </p>

                    {/* Coin  */}
                    <div className="-mt-2">

                        {/* Coin image */}
                        <img 
                            src={coinPic} alt="coin" 
                            className="w-12 h-12" 
                        />

                        <h1 
                            className="-mt-7">
                            + {rewardCoin}
                        </h1>

                        
                    </div>
                    <img 
                            src={Claim} 
                            alt="" 
                            className="-mb-8 active:scale-95 cursor-pointer"/>  

                </div>
                </div>
            </div>

                    {/*MAESTRO | ALAMAT*/}
            <div className="flex gap-4 justify-center">
                {/*MAESTRO*/}
                <div className="drop-shadow-[0_0_5px_#34DC12]">
                <div
                    className="bg-[#021934] w-[177px] h-[255px] 
                                rounded-2xl text-white font-LG
                                flex flex-col justify-center items-center 
                                drop-shadow-[0_0_5px_#30AD17]"
                >
                    <h1 
                        className="pt-3">
                        MAESTRO
                    </h1>

                    <p 
                        className="font-FD">
                        501 - 900
                    </p>

                    <img 
                        src={Maestro} 
                        alt="MAESTRO" 
                        className="-mt-5" 
                    />

                    <p 
                        className="font-FD -mt-4">
                        Rank Reward
                    </p>

                    {/* Coin  */}
                    <div className="-mt-4">

                        {/* Coin image */}
                        <img 
                            src={coinPic} alt="coin" 
                            className="w-12 h-12" 
                        />

                        <h1 
                            className="-mt-7">
                            + {rewardCoin}
                        </h1>

                    </div>

                </div>
                </div>

                {/*ALAMAT*/}
                <div className="drop-shadow-[0_0_5px_#ffffff]">
                <div
                    className="bg-[#021934] w-[177px] h-[255px] 
                                rounded-2xl text-white font-LG
                                flex flex-col justify-center items-center 
                                drop-shadow-[0_0_5px_#ffffff]"
                >
                    <h1 
                        className="pt-3">
                        ALAMAT
                    </h1>

                    <p 
                        className="font-FD">
                        901 - 1500
                    </p>

                    <img 
                        src={Alamat} 
                        alt="ALAMAT" 
                        className="-mt-0.5" 
                    />

                    <p 
                        className="font-FD mt-2">
                        Rank Reward
                    </p>

                    {/* Coin  */}
                    <div className="-mt-4">

                        {/* Coin image */}
                        <img 
                            src={coinPic} alt="coin" 
                            className="w-12 h-12" 
                        />

                        <h1 
                            className="-mt-7">
                            + {rewardCoin}
                        </h1>

                    </div>

                </div>
                </div>
            </div>

            {/*MARANGAL*/}
            <div className="flex gap-5 justify-center">
                {/*MARANGAL*/}
                <div className="drop-shadow-[0_0_5px_#F7AD19]">
                <div
                    className="bg-[#021934] w-[177px] h-[255px] 
                                rounded-2xl text-white font-LG
                                flex flex-col justify-center items-center 
                                drop-shadow-[0_0_5px_#F7AD19]"
                >
                    <h1 
                        className="pt-3">
                        MARANGAL
                    </h1>

                    <p 
                        className="font-FD">
                        1501 - Above
                    </p>

                    <img 
                        src={Marangal} 
                        alt="MARANGAL" 
                        className="-mt-4" 
                    />

                    <p 
                        className="font-FD -mt-3">
                        Rank Reward
                    </p>

                    {/* Coin  */}
                    <div className="-mt-2">

                        {/* Coin image */}
                        <img 
                            src={coinPic} alt="coin" 
                            className="w-12 h-12" 
                        />

                        <h1 
                            className="-mt-7">
                            + {rewardCoin}
                        </h1>

                    </div>

                </div>
                </div>


            </div>
        </div>




      </div>
    </div>
  );
}

export default Rank;
