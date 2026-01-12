import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Import useCoins to access global state
import { useCoins } from "../../context/coincontext";
import { ReturnBTN, EarnCoinLogo, PlayBTN, Trophy, EmptyTrophy } from "../../assets/assets";

/* Get total days in the current month */
const getDaysInMonth = (year, month) =>
  new Date(year, month + 1, 0).getDate();

function EarnCoin() {
  const navigate = useNavigate();
  
  // --- USE CONTEXT INSTEAD OF LOCAL STORAGE ---
  const { playedDates, markTodayAsPlayed } = useCoins();

  /* Get today's date */
  const today = new Date();

  /* State for Calendar Navigation */
  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  /* Extract date values */
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);

  /* Format month name */
  const monthName = currentDate
    .toLocaleString("default", { month: "long" })
    .toUpperCase();

  /* Navigate between months */
  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  /* --- LOGIC: Handle Game Play --- */
  const handlePlayGame = () => {
    // 1. Update Global Context
    markTodayAsPlayed();

    // 2. Navigate to Game
    navigate("/game");
  };

  /* --- LOGIC: Trophy Progress Calculation --- */
  const gamesPlayedInCurrentMonth = playedDates.filter((dateStr) => {
    const date = new Date(dateStr);
    return date.getMonth() === month && date.getFullYear() === year;
  }).length;

  // Calculate percentage (0 to 100)
  const progressPercent = Math.min((gamesPlayedInCurrentMonth / daysInMonth) * 100, 100);

  return (
    /* Page Wrapper */
    <div className="min-h-screen flex flex-col">

      {/* ===================== */}
      {/* TOP SECTION */}
      {/* ===================== */}
      <div className="p-3 space-y-5">

        {/* Return Button */}
        <Link to="/">
          <img src={ReturnBTN} alt="Return Button" />
        </Link>

        {/* Earn Coin Logo */}
        <div className="flex justify-center items-center pt-5">
          <img src={EarnCoinLogo} alt="Earn Coin Logo" />
        </div>

        {/* Dynamic Trophy Section */}
        <div className="flex justify-center items-center relative h-[150px]">
            {/* 1. Empty Trophy (Background) */}
            <img 
                src={EmptyTrophy} 
                alt="Empty Trophy" 
                className="absolute"
            />
            
            {/* 2. Full Trophy (Foreground with Clip Path) */}
            <img 
                src={Trophy} 
                alt="Trophy" 
                className="absolute transition-all duration-1000 ease-out"
                style={{
                    clipPath: `inset(${100 - progressPercent}% 0 0 0)`
                }}
            />
        </div>
        
        {/* Progress Text */}
        <div className="text-center text-[#ffffff] font-bold font-FD">
            {gamesPlayedInCurrentMonth} / {daysInMonth} Days Played
        </div>

      </div>


      {/* ===================== */}
      {/* CALENDAR SECTION */}
      {/* ===================== */}
      <div className="mt-auto w-full h-[60vh] overflow-hidden bg-white shadow-[0_-5px_20px_rgba(0,0,0,0.1)] rounded-t-3xl">

        <div className="p-6 w-full font-LG text-xl">

          {/* Month Navigation */}
          <div className="flex items-center justify-center gap-6 mb-4 text-[#084A97]">
            <button onClick={prevMonth} className="text-3xl font-bold">‹</button>
            <span className="tracking-widest">{monthName}</span>
            <button onClick={nextMonth} className="text-3xl font-bold">›</button>
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-4 text-center mt-6">
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              
              // Create date string for this specific cell
              const checkDate = new Date(year, month, day).toDateString();
              
              // Check Global State
              const isPlayed = playedDates.includes(checkDate);

              return (
                <div
                  key={day}
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold transition-colors duration-300
                    ${
                      isPlayed
                        ? "bg-[#2FAA17] text-white shadow-md" // Green if played
                        : "text-[#084A97] bg-gray-100" // Default
                    }`}
                >
                  {day}
                </div>
              );
            })}
          </div>

          {/* Play Button */}
          <div className="mt-10 flex justify-center">
            <button onClick={handlePlayGame} className="active:scale-95 transition-transform">
                <img
                src={PlayBTN}
                alt="Play"
                className="cursor-pointer"
                />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default EarnCoin;