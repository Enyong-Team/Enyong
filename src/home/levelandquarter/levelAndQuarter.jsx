import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { back, banner, left1, right1, left2, right2, startBTN } from "../../assets/assets";

export default function LevelQuarter() {
  const [grade, setGrade] = useState(1);
  const [quarterIndex, setQuarterIndex] = useState(0);

  const quarters = ["1ST", "2ND", "3RD", "4TH"];

  // 🔼 Increase Grade
  const increaseGrade = () => {
    setGrade((prev) => Math.min(prev + 1, 6));
  };

  // 🔽 Decrease Grade
  const decreaseGrade = () => {
    setGrade((prev) => Math.max(prev - 1, 1));
  };

  // 🔼 Next Quarter
  const nextQuarter = () => {
    setQuarterIndex((prev) => Math.min(prev + 1, 3));
  };

  // 🔽 Previous Quarter
  const prevQuarter = () => {
    setQuarterIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="min-h-screen flex justify-center p-6 font-LG">
      <div className="w-full max-w-[420px] flex flex-col items-center gap-6">

        {/* Back Button */}
        <button className="self-start">
          <Link to="/">
          <img src={back} className="w-[50px] h-[50px] active:scale-95 cursor-pointer"
           alt="Back Button" />
           </Link>
        </button>

        {/* Title Banner */}
        <img src={banner} alt="Banner" className="max-w-full h-auto" />

        {/* Subtitle */}
         <p className="text-white text-[20px] tracking-wide text-center">
          SELECT YOUR GRADE LEVEL AND QUARTER
        </p>

        {/* Grade Level Box */}
        <div className=" bg-[#30AD17]  w-full rounded-2xl shadow-lg overflow-hidden">
          <div className="text-center shadow-[inset_0_-10px_20px_rgba(0,0,0,0.3)] text-white py-3 text-[30px] font-normal">
            GRADE LEVEL
          </div>

            <div className="bg-white py-4 flex justify-between items-center px-6 text-[30px] text-[#2FAA17]">
            <img
              src={left1}
              className="h-[30px] cursor-pointer active:scale-95"
              onClick={decreaseGrade}
              alt="Decrease"
            />

            <span>{grade}</span>

            <img
              src={right1}
              className="h-[30px] cursor-pointer active:scale-95"
              onClick={increaseGrade}
              alt="Increase"
            />
          </div>
        </div>

        {/* Quarter Box */}
        <div className="bg-[#30AD17] w-full rounded-2xl shadow-lg overflow-hidden">
           <div className="text-center shadow-[inset_0_-10px_20px_rgba(0,0,0,0.3)] text-white py-3 text-[30px] font-normal">
            QUARTER
          </div>

           <div className="bg-white py-4 flex justify-between items-center px-6 text-[30px] text-[#2FAA17]">
            <img
              src={left2}
              className="h-[30px] cursor-pointer active:scale-95"
              onClick={prevQuarter}
              alt="Prev Quarter"
            />

            <span>{quarters[quarterIndex]}</span>

            <img
              src={right2}
              className="h-[30px] cursor-pointer active:scale-95"
              onClick={nextQuarter}
              alt="Next Quarter"
            />
          </div>
        </div>

        {/* Start Button */}
        <Link to="/game">
        
        <div>
          <img 
          src={startBTN}
          alt="" 
          className="active:scale-95 cursor-pointer"/>
        
        </div>
        </Link>
      </div>
    </div>
  );
}
