import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NextBTN from '../../authentication/authButtons/NextBTN.png'

import { back, banner, left1, right1, left2, right2, startBTN } from "../../assets/assets";

function selectTerm() {
    const [term, setTerm] = useState(1);

  
    // 🔼 Increase Term
    const increaseTerm = () => {
      setTerm((prev) => Math.min(prev + 1, 3));
    };
  
    // 🔽 Decrease Term
    const decreaseTerm = () => {
      setTerm((prev) => Math.max(prev - 1, 1));
    };
  
  return (
    <div className="min-h-screen flex justify-center  p-6 font-LG">
      <div className="w-full max-w-[420px] flex flex-col items-center gap-6">

        {/* Back Button */}
        <button className="self-start">
          <Link to="/levelandterm">
          <img src={back} className="w-[50px] h-[50px] active:scale-95 cursor-pointer"
           alt="Back Button" />
           </Link>
        </button>

        {/* Title Banner */}
        <img src={banner} alt="Banner" className="max-w-full h-auto" />

        {/* Subtitle */}
         <p className="text-white text-[20px] tracking-wide text-center mt-20">
          SELECT YOUR TERM
        </p>

        {/* Grade Level Box */}
        <div className=" bg-[#30AD17]  w-full rounded-2xl shadow-lg overflow-hidden">
          <div className="text-center shadow-[inset_0_-10px_20px_rgba(0,0,0,0.3)] text-white py-3 text-[30px] font-normal">
            TERM
          </div>

            <div className="bg-white py-4 flex justify-between items-center px-6 text-[30px] text-[#2FAA17]">
            <img
              src={left1}
              className="h-[30px] cursor-pointer active:scale-95"
              onClick={decreaseTerm}
              alt="Decrease"
            />

            <span>{term}</span>

            <img
              src={right1}
              className="h-[30px] cursor-pointer active:scale-95"
              onClick={increaseTerm}
              alt="Increase"
            />
          </div>
        </div>



        {/* Start Button */}
        <Link to="/selectSubject">
        
        <div>
          <img 
          src={NextBTN}
          alt="" 
          className="active:scale-95 cursor-pointer"/>
        
        </div>
        </Link>
      </div>
    </div>
  )
}

export default selectTerm