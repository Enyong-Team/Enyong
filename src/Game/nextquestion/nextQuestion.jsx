import React from 'react';
import { HomeBtn, coinPic, NextQuestionBtn, SpinningBG } from "../../assets/assets";

function NextQuestion({ coins, rewardCoin, onNext, onHome }) {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/50 z-50">
      <div className="bg-[#084E99] border-2 border-white rounded-4xl w-[396px] max-[380px]:w-[300px] p-4">

        {/* Top layer: Home + Coins */}
        <div className="flex justify-between pb-4">
          <img
            src={HomeBtn}
            alt="Home"
            className="cursor-pointer active:scale-95 h-10 w-auto"
            onClick={onHome}
          />

          <div className="flex flex-row  items-center justify-center
                          w-[110px] bg-[#084E99]
                          shadow-[inset_0_0_10px_rgba(0,0,0,0.6)]
                          h-10 border-2 rounded-full border-white  gap-2">
            <img src={coinPic} alt="coin" className="w-10 h-10" />
            <h1 className="font-LG text-white text-xl">{coins}</h1>
          </div>
        </div>

        {/* Level up section */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-LG text-white  text-4xl mb-2">LEVEL UP</h1>

          <div className="relative flex justify-center items-center">
            <img src={coinPic} alt="coin" className="w-[px] h-[55px]" />
            <h1 className="absolute text-xl font-LG text-gray-200">
              +{rewardCoin}
            </h1>
          </div>
        </div>

        {/* Spinning graphic */}
        <div className="flex justify-center my-6">
          <img
            src={SpinningBG}
            alt="Spinning"
            className="animate-spin [animation-duration:10s] "
          />
        </div>

        {/* Next question button */}
        <div className="flex justify-center">
          <img
            src={NextQuestionBtn}
            alt="Next Question"
            className="cursor-pointer active:scale-95
                      max-[380px]:w-[190px]"
            onClick={onNext}
          />
        </div>

      </div>
    </div>
  );
}

export default NextQuestion;
