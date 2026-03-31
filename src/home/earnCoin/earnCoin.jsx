import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Import useCoins to access global state
import { useCoins } from "../../context/coincontext";
import { ReturnBTN, EarnCoinLogo, PlayBTN, Trophy, EmptyTrophy, coinPic, plusPic } from "../../assets/assets";



/* Get total days in the current month */
const getDaysInMonth = (year, month) =>
  new Date(year, month + 1, 0).getDate();

function EarnCoin() {
  const navigate = useNavigate();
    // WebWide Coin

  
// addCoins to reward the player, coins to display their total
  const { playedDates, markTodayAsPlayed, addCoins, coins } = useCoins();

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

  // --- CLAIM REWARD LOGIC ---
  const isMonthComplete = gamesPlayedInCurrentMonth >= daysInMonth;
  const claimKey = `claimedReward_${month}_${year}`; // Unique key per month/year
  
  // Check if they already claimed this month's reward
  const [isClaimed, setIsClaimed] = useState(() => localStorage.getItem(claimKey) === 'true');

  // Update claim status if they navigate to a different month
  React.useEffect(() => {
    setIsClaimed(localStorage.getItem(claimKey) === 'true');
  }, [month, year, claimKey]);

  const handleClaimReward = () => {
    if (isMonthComplete && !isClaimed) {
      addCoins(50); // Give the 50 petot!
      setIsClaimed(true);
      localStorage.setItem(claimKey, 'true'); // Save so they can't claim twice
      
      // double haptic buzz
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate([50, 100, 50]); 
      }
    }
  };

  return (
    /* Page Wrapper */
    <div className="min-h-screen flex flex-col">

      {/* ===================== */}
      {/* TOP SECTION */}
      {/* ===================== */}
      <div className="p-5 space-y-5 ">

        <div className="flex justify-between">
        {/* Return Button */}
        <Link to="/">
          <img src={ReturnBTN} alt="Return Button" />
        </Link>

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
        {/* Earn Coin Logo */}
        <div className="flex justify-center items-center ">
          <img src={EarnCoinLogo} alt="Earn Coin Logo" />
        </div>
  
        {/* Dynamic Trophy Section */}
        <div className="flex justify-center items-center relative h-[150px]">
            
            {/* +50 Coin Badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 -ml-2.5 z-10">
                <div className="relative">
                    <img 
                        src={coinPic} 
                        alt="coin" 
                        className="w-10 h-10 absolute -top-4 left-3 z-0 object-contain scale-150" 
                    />
                    
                    <span className="text-white font-LG  text-2xl leading-none relative z-10 drop-shadow-sm"
                    style={{ WebkitTextStroke: '1px #084A97' }}>
                        +50
                    </span>
                </div>
            </div>

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
        
        {/* Progress Text & Claim Button */}
        <div className="flex flex-col items-center gap-3">
            <div className="text-center text-[#ffffff] font-bold font-FD">
                {gamesPlayedInCurrentMonth} / {daysInMonth} Days Played
            </div>

            {/* Claim Button appears only when month is full */}
            {isMonthComplete && (
                <button 
                    onClick={handleClaimReward}
                    disabled={isClaimed}
                    className={`font-LG text-xl px-6 py-2 rounded-xl transition-all duration-300 ${
                        isClaimed 
                        ? 'bg-gray-500 text-gray-300 cursor-not-allowed border-2 border-gray-400' 
                        : 'bg-[#2FAA17] text-white active:scale-95 shadow-[inset_0_-5px_10px_rgba(0,0,0,0.3)] cursor-pointer hover:bg-green-500 border-2 border-white'
                    }`}
                >
                    {isClaimed ? "REWARD CLAIMED" : "CLAIM 50 COINS!"}
                </button>
            )}
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