import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCoins } from '../../context/coincontext';

// IMPORT FROM ASSETS
import { 
  coinPic, closeBtn, goBtn, 
  checkComp, checkINC, checkMrk 
} from "../../assets/assets";

function DailyGoals() {
  const navigate = useNavigate();
  const { coins, addCoins, completedGoals, setCompletedGoals, questionsAnswered } = useCoins();

  // Local state for the ticking animation
  const [displayedCoins, setDisplayedCoins] = useState(coins);
  const [animatingCoins, setAnimatingCoins] = useState([]);
  
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => navigate(-1), 100);
  };

  // Refs for animation start and end points
  const targetRef = useRef(null);
  const goal1Ref = useRef(null);
  const goal2Ref = useRef(null);
  const goal3Ref = useRef(null);

  // Task rewards
  const goal1coin = 10; // Answer 5 Questions
  const goal2coin = 5;  // Open App
  const goal3coin = 15; // Mini Game
  const earncoin = goal1coin + goal2coin + goal3coin; // Total possible coins

  // Complete "Answer 5 Questions" task automatically when 5 questions answered
  useEffect(() => {
    if (questionsAnswered >= 5 && !completedGoals.answerQuestions.done) {
      setCompletedGoals(prev => ({
        ...prev,
        answerQuestions: { ...prev.answerQuestions, done: true }
      }));
    }
  }, [questionsAnswered]);

  // Daily login is always claimable (dev mode)
  useEffect(() => {
    setCompletedGoals(prev => ({
      ...prev,
      openApp: { done: true, claimed: false }
    }));
  }, []);

  // --- ANIMATION GENERATOR ---
  const triggerCoinAnimation = (sourceRef, amount) => {
    if (!sourceRef.current || !targetRef.current) return;

    const sRect = sourceRef.current.getBoundingClientRect();
    const tRect = targetRef.current.getBoundingClientRect();

    const startX = sRect.left + sRect.width / 2;
    const startY = sRect.top + sRect.height / 2;
    const endX = tRect.left + tRect.width / 2;
    const endY = tRect.top + tRect.height / 2;

    const generated = Array.from({ length: amount }).map((_, i) => {
      // Fountain spread effect
      const randomOffsetX = (Math.random() - 0.5) * 100;
      const randomOffsetY = Math.random() * 50;

      let midX = (startX + endX) / 2 + randomOffsetX;
      let midY = Math.min(startY, endY) - 40 - randomOffsetY;

      // Keep within screen boundaries
      const padding = 30;
      midX = Math.max(padding, Math.min(window.innerWidth - padding, midX));
      midY = Math.max(padding, midY);

      return {
        id: Date.now() + i, // Unique ID per coin
        startX: `${startX}px`,
        startY: `${startY}px`,
        midX: `${midX}px`,
        midY: `${midY}px`,
        endX: `${endX}px`,
        endY: `${endY}px`,
        delay: `${i * 0.15}s`,
      };
    });

    // Add new coins to the screen
    setAnimatingCoins(prev => [...prev, ...generated]);

    // Tick the visual score up as each coin finishes its 1.2s flight
    generated.forEach((_, i) => {
      setTimeout(() => {
        setDisplayedCoins(prev => prev + 1);
        // Trigger a 50ms haptic buzz on mobile devices
        if (typeof navigator !== 'undefined' && navigator.vibrate) {
          navigator.vibrate(50);
        }
      }, 1200 + (i * 150));
    });

    // Clean up DOM elements after animation completes
    setTimeout(() => {
      setAnimatingCoins(prev => prev.filter(c => !generated.find(g => g.id === c.id)));
    }, 1200 + (amount * 150) + 500);
  };

  // --- Handle goal button click (Go or Claim) ---
  const handleGoalClick = (goalType, reward, sourceRef) => {
    const goal = completedGoals[goalType];

    if (goal.done) {
      if (!goal.claimed) {
        // 1. Mark as claimed visually immediately
        setCompletedGoals(prev => ({
          ...prev,
          [goalType]: { ...prev[goalType], claimed: true }
        }));

        // 2. Add coins to global context silently in background
        addCoins(reward);

        // 3. Trigger the flying animation (which will tick the local displayedCoins)
        triggerCoinAnimation(sourceRef, reward);
      }
    } else {
      // Navigate to page if task not done
      if (goalType === "answerQuestions" || goalType === "miniGame") {
        navigate('/game');
      }
    }
  };

  return (
    <div className={`absolute inset-0 flex items-center justify-center bg-black/50 z-50 overflow-hidden ${isClosing ? 'animate-fade-bg-out' : 'animate-fade-bg'}`}>
      
      {/* --- INJECTED DYNAMIC CSS FOR THE FLIGHT PATH TO WORLD TRADE CENTER --- */}
      {/* --- To change the intensity of the coin flash, change brightness(1.3) into something else. 1.3 means 30% brighter --- */}

      <style>{`
        @keyframes flyCoinDance {
          0% { transform: translate(var(--startX), var(--startY)) scale(0) rotate(0deg); opacity: 0; }
          15% { transform: translate(var(--startX), calc(var(--startY) - 30px)) scale(1.4) rotate(90deg); opacity: 1; }
          50% { transform: translate(var(--midX), var(--midY)) scale(1.2) rotate(360deg); opacity: 1; }
          85% { transform: translate(var(--endX), var(--endY)) scale(0.7) rotate(720deg); opacity: 1; }
          100% { transform: translate(var(--endX), var(--endY)) scale(0) rotate(810deg); opacity: 0; }
        }
        .flying-coin {
          position: fixed;
          top: -20px; 
          left: -20px;
          width: 40px;
          height: 40px;
          animation: flyCoinDance 1.2s ease-in-out forwards;
          z-index: 9999;
          pointer-events: none;
          opacity: 0; 
        }

        @keyframes targetPop {
          0% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.35); filter: brightness(1.3); }
          100% { transform: scale(1); filter: brightness(1); }
        }
        .animate-target-pop {
          animation: targetPop 0.15s ease-out;
        }
      `}</style>

      {/* --- RENDER THE FLYING COINS --- */}
      {animatingCoins.map(coin => (
        <img
          key={coin.id}
          src={coinPic}
          className="flying-coin"
          style={{
            '--startX': coin.startX,
            '--startY': coin.startY,
            '--midX': coin.midX,
            '--midY': coin.midY,
            '--endX': coin.endX,
            '--endY': coin.endY,
            animationDelay: coin.delay
          }}
          alt=""
        />
      ))}

      <div className={`bg-[#084E99] m-6 w-full h-auto p-5 gap-5 rounded-2xl border border-white relative z-0 ${isClosing ? 'animate-modal-pop-out' : 'animate-modal-pop'}`}>

        {/* Coins & Close */}
        <div className='flex flex-row justify-between'>
          <div className="flex flex-row px-2 border rounded-full border-white items-center gap-2 shadow-[inset_0_0_20px_rgba(0,0,0,0.4)] mb-5">
            {/* TARGET REF APPLIED HERE */}
            <img 
              key={`pop-${displayedCoins}`}
              ref={targetRef} 
              src={coinPic} 
              alt="coin" 
              className="w-12 h-12 relative z-10 animate-target-pop"
            />
            <h1 className="font-LG pr-2 text-white text-xl min-w-[24px] text-center">{displayedCoins}</h1>
          </div>

          <div>
            <img src={closeBtn} alt="close" onClick={handleClose} className='cursor-pointer active:scale-95'/>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center font-LG text-white'>
          <h1 className='text-4xl'>DAILY GOALS</h1>

          <div className='relative'>
            <img src={coinPic} alt="coin" className='w-[68px] h-[68px]' />
            <h1 className='text-lg absolute inset-7 left-0.5 text-gray-200 animate-pulse'style={{ WebkitTextStroke: '1px #084A97' }}>+{earncoin}</h1>
          </div>
        </div>

        {/* CHECKMARKS */}
        <div className='flex flex-row gap-2 pb-2 pt-2 items-center justify-center'>
          <img src={completedGoals.answerQuestions.claimed ? checkComp : checkINC} alt="check"/>
          <img src={completedGoals.openApp.claimed ? checkComp : checkINC} alt="check"/>
          <img src={completedGoals.miniGame.claimed ? checkComp : checkINC} alt="check"/>
        </div>

        <h1 className='font-LG text-xs pb-2 text-white text-center'>
          Complete 3 tasks today and earn more coins.
        </h1>

        {/* GOALS */}
        <div className='flex flex-col items-center justify-center gap-3 mt-2'>

          {/* 1. Answer 5 Questions */}
          <div
            className='relative bg-[#1C7CE2] p-1 rounded-2xl flex flex-row gap-5 w-[340px] items-center justify-between text-white cursor-pointer active:scale-[0.98] transition-transform'
            onClick={() => handleGoalClick('answerQuestions', goal1coin, goal1Ref)}
          >
            {/* SOURCE REF 1 */}
            <div ref={goal1Ref} className='relative bg-[#031B37] w-[55px] h-[55px] flex items-center justify-center rounded-2xl'>
              <img src={coinPic} className='w-[50px] h-[50px]'/>
              <h1 className='text-lg absolute inset-6 left-2 text-gray-200'>+{goal1coin}</h1>
            </div>

            <div className='flex-1'>
              <h1 className='text-l font-extrabold'>Answer 5 Questions</h1>
              <h1 className='text-l font-old'>Play the quiz game</h1>
            </div>

            <div>
              {completedGoals.answerQuestions.done ? (
                completedGoals.answerQuestions.claimed ? (
                  <img src={checkMrk} className='w-[73px] h-[43px]' />
                ) : (
                  <img src={goBtn} className='w-[73px] h-[43px]' />
                )
              ) : (
                <img src={goBtn} className='w-[73px] h-[43px]' />
              )}
            </div>
          </div>

          {/* 2. Open App (Daily Login) */}
          <div
            className='relative bg-[#1C7CE2] p-1 rounded-2xl flex flex-row gap-5 w-[340px] items-center justify-between text-white cursor-pointer active:scale-[0.98] transition-transform'
            onClick={() => handleGoalClick('openApp', goal2coin, goal2Ref)}
          >
            {/* SOURCE REF 2 */}
            <div ref={goal2Ref} className='relative bg-[#031B37] w-[55px] h-[55px] flex items-center justify-center rounded-2xl'>
              <img src={coinPic} className='w-[50px] h-[50px]'/>
              <h1 className='text-lg absolute inset-6 left-3 text-gray-200'>+{goal2coin}</h1>
            </div>

            <div className='flex-1'>
              <h1 className='text-l font-extrabold'>Open App</h1>
              <h1 className='text-l font-old'>Daily login bonus</h1>
            </div>

            <div>
              {completedGoals.openApp.claimed ? (
                <img src={checkMrk} className='w-[43px] h-[23px] pr-3 mr-3' />
              ) : (
                <img src={goBtn} className='w-[73px] h-[43px]' />
              )}
            </div>
          </div>

          {/* 3. Play Mini Game */}
          <div
            className='relative bg-[#1C7CE2] p-1 rounded-2xl flex flex-row gap-5 w-[340px] items-center justify-between text-white cursor-pointer active:scale-[0.98] transition-transform'
            onClick={() => handleGoalClick('miniGame', goal3coin, goal3Ref)}
          >
            {/* SOURCE REF 3 */}
            <div ref={goal3Ref} className='relative bg-[#031B37] w-[55px] h-[55px] flex items-center justify-center rounded-2xl'>
              <img src={coinPic} className='w-[50px] h-[50px]'/>
              <h1 className='text-lg absolute inset-6 left-2 text-gray-200'>+{goal3coin}</h1>
            </div>

            <div className='flex-1'>
              <h1 className='text-l font-extrabold'>Play Mini Game</h1>
              <h1 className='text-l font-old'>Have fun and earn coins</h1>
            </div>

            <div>
              {completedGoals.miniGame.done ? (
                completedGoals.miniGame.claimed ? (
                  <img src={checkMrk} className='w-[73px] h-[43px]' />
                ) : (
                  <img src={goBtn} className='w-[73px] h-[43px]' />
                )
              ) : (
                <img src={goBtn} className='w-[73px] h-[43px]' />
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default DailyGoals;