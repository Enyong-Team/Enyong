import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import RankUpBanner from "../rankUp/rankUpImages/RankUpBanner.png";
import RankUpWheel from "../rankUp/rankUpImages/RankUpWheel.png";
import RankUpContinue from "../rankUp/rankUpImages/RankUpContinue.png";

import {
  mandirigmaRankUP,
  marangalRankUP,
  maharlikaRankUP,
  maestroRankUP,
  alamatRankUP,
} from "../../assets/assets";

function RankUp() {
  const location = useLocation();
  const navigate = useNavigate();

  const rank = location.state?.rank || "MANDIRIGMA";
  const correctCount = location.state?.correctCount || 0;

  const rankImages = {
    MANDIRIGMA: mandirigmaRankUP,
    MAHARLIKA: maharlikaRankUP,
    MAESTRO: maestroRankUP,
    ALAMAT: alamatRankUP,
    MARANGAL: marangalRankUP,
  };

  return (
    <div>
      <div className="min-h-screen space-y-5 flex flex-col items-center justify-center font-FD">

        {/* Banner */}
        <img
          src={RankUpBanner}
          alt="Rank Up"
        />

        {/* Wheel */}
        <div className="relative flex justify-center items-center">

          <img
            src={RankUpWheel}
            alt="Wheel"
            className="animate-spin [animation-duration:10s]"
          />

          <div className="absolute w-40 h-40 flex items-center justify-center">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl animate-pulse"></div>

            {/* Medal */}
            <img
              src={rankImages[rank]}
              alt={rank}
              className="
                relative z-10
                w-full h-full object-contain p-2
                drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]
                animate-pulse
              "
            />

            {/* Shine Spot */}
            <div
              className="
                absolute
                top-4 left-6
                w-6 h-6
                bg-white/70
                rounded-full
                blur-md
                animate-pulse
              "
            />
          </div>
        </div>

        {/* Text */}
        <div className="text-center">
          <h1 className="text-[#F7AD19] text-xl pb-5 animate-pulse">
            Congratulations!
          </h1>

          <h1 className="text-white">
            You've advanced to
          </h1>

          <h1 className="text-[#2CA021] text-3xl animate-pulse">
            {rank}
          </h1>

          <p className="text-white mt-2 ">
            Correct Answers: {correctCount}
          </p>
        </div>

        {/* Continue */}
        <img
          src={RankUpContinue}
          alt="Continue"
          className="cursor-pointer active:scale-95 animate-pulse "
          onClick={() => navigate("/game")}
        />
      </div>
    </div>
  );
}

export default RankUp;