import React, { useEffect, useState, useRef } from 'react';
import { HomeBtn, coinPic, NextQuestionBtn, SpinningBG } from "../../assets/assets";

function NextQuestion({ coins, rewardCoin, onNext, onHome }) {
  const sourceRef = useRef(null);
  const targetRef = useRef(null);

  const [animatingCoins, setAnimatingCoins] = useState([]);
  const [displayedCoins, setDisplayedCoins] = useState(coins - rewardCoin);

  useEffect(() => {
    let timeouts = [];

    const mainTimer = setTimeout(() => {
      if (!sourceRef.current || !targetRef.current) return;

      const sRect = sourceRef.current.getBoundingClientRect();
      const tRect = targetRef.current.getBoundingClientRect();

      const startX = sRect.left + sRect.width / 2;
      const startY = sRect.top + sRect.height / 2;

      const endX = tRect.left + tRect.width / 2;
      const endY = tRect.top + tRect.height / 2;

      const generated = Array.from({ length: rewardCoin }).map((_, i) => {
        // tighter spread to not be too chaotic
        const randomOffsetX = (Math.random() - 0.5) * 100; 
        const randomOffsetY = Math.random() * 50;

        // Calculate a middle point (the peak of the jump)
        let midX = (startX + endX) / 2 + randomOffsetX;
        let midY = Math.min(startY, endY) - 40 - randomOffsetY; 

        // === SCREEN BOUNDARIES ===
        // Prevents the coins from ever leaving the visible screen
        const padding = 30; // Keep at least 30px away from the edges
        midX = Math.max(padding, Math.min(window.innerWidth - padding, midX));
        midY = Math.max(padding, midY); // Prevents flying off the top ceiling

        return {
          id: i,
          startX: `${startX}px`,
          startY: `${startY}px`,
          midX: `${midX}px`,
          midY: `${midY}px`,
          endX: `${endX}px`,
          endY: `${endY}px`,
          delay: `${i * 0.15}s`, 
        };
      });

      setAnimatingCoins(generated);

      generated.forEach((_, i) => {
        const t = setTimeout(() => {
          setDisplayedCoins((prev) => prev + 1);
        }, 1200 + (i * 150)); 
        timeouts.push(t);
      });

    }, 400);

    timeouts.push(mainTimer);

    return () => timeouts.forEach(clearTimeout);
  }, [rewardCoin]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/50 z-50">
      
      {/* --- INJECTED DYNAMIC CSS FOR THE DANCING FLIGHT PATH --- */}
      <style>{`
        @keyframes flyCoinDance {
          0% { 
            transform: translate(var(--startX), var(--startY)) scale(0) rotate(0deg); 
            opacity: 0; 
          }
          15% { 
            /* Pops out of the +3 text */
            transform: translate(var(--startX), calc(var(--startY) - 30px)) scale(1.4) rotate(90deg); 
            opacity: 1; 
          }
          50% { 
            /* The peak of the arc (Now strictly contained within the screen) */
            transform: translate(var(--midX), var(--midY)) scale(1.2) rotate(360deg); 
            opacity: 1; 
          }
          85% { 
            /* Arriving at the destination */
            transform: translate(var(--endX), var(--endY)) scale(0.7) rotate(720deg); 
            opacity: 1; 
          }
          100% { 
            /* Shrinks and disappears directly into the top total coin */
            transform: translate(var(--endX), var(--endY)) scale(0) rotate(810deg); 
            opacity: 0; 
          }
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
          opacity: 0; /* Ensures coin is invisible until the animation explicitly starts */
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

      <div className="bg-[#084E99] border-2 border-white rounded-4xl w-[396px] max-[380px]:w-[300px] p-4 relative z-0">

        {/* Top layer: Home + Coins */}
        <div className="flex justify-between pb-4">
          <img
            src={HomeBtn}
            alt="Home"
            className="cursor-pointer active:scale-95 h-10 w-auto"
            onClick={onHome}
          />

          <div className="flex flex-row items-center justify-center
                          w-[110px] bg-[#084E99]
                          shadow-[inset_0_0_10px_rgba(0,0,0,0.6)]
                          h-10 border-2 rounded-full border-white gap-2">
            <img ref={targetRef} src={coinPic} alt="coin" className="w-10 h-10 relative z-10" />
            <h1 className="font-LG text-white text-xl w-6 text-center">{displayedCoins}</h1>
          </div>
        </div>

        {/* Level up section */}
        <div className="flex flex-col justify-center items-center relative z-10">
          <h1 className="font-LG text-white text-4xl mb-2">LEVEL UP</h1>

          <div ref={sourceRef} className="relative flex justify-center items-center">
            <img src={coinPic} alt="coin" className="w-[55px] h-[55px]" />
            <h1 className="absolute text-xl font-LG text-gray-200">
              +{rewardCoin}
            </h1>
          </div>
        </div>

        {/* Spinning graphic */}
        <div className="flex justify-center my-6 relative z-0">
          <img
            src={SpinningBG}
            alt="Spinning"
            className="animate-spin [animation-duration:10s]"
          />
        </div>

        {/* Next question button */}
        <div className="flex justify-center relative z-10">
          <img
            src={NextQuestionBtn}
            alt="Next Question"
            className="cursor-pointer active:scale-95 max-[380px]:w-[190px]"
            onClick={onNext}
          />
        </div>

      </div>
    </div>
  );
}

export default NextQuestion;