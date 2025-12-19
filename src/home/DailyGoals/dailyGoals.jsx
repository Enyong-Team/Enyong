import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCoins } from '../../context/coincontext';
// IMPORT FROM ASSETS
import { 
  coinPic, closeBtn, goBtn, 
  checkComp, checkINC, checkMrk 
} from "../../assets/assets";

function DailyGoals() {
  const navigate = useNavigate();
  const { coins, addCoins } = useCoins();

  // Task rewards
  const goal1coin = 10; // Answer 5 Questions
  const goal2coin = 5;  // Open App
  const goal3coin = 15; // Mini Game
  const earncoin = goal1coin + goal2coin + goal3coin; // Total possible coins

const { completedGoals, setCompletedGoals, questionsAnswered } = useCoins();

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


  // Handle goal button click (Go or Claim)
    const handleGoalClick = (goalType, reward) => {
      const goal = completedGoals[goalType];

      if (goal.done) {
        if (!goal.claimed) {
          addCoins(reward);
          setCompletedGoals(prev => ({
            ...prev,
            [goalType]: { ...prev[goalType], claimed: true }
          }));
        }
      } else {
        // Navigate to page if task not done
        if (goalType === "answerQuestions" || goalType === "miniGame") {
          navigate('/game');
        }
      }
    };

return (
  <div className='absolute inset-0 flex items-center justify-center bg-black/50 z-50'>
    <div className='bg-[#084E99] m-6 w-full h-auto p-5 gap-5 rounded-2xl border border-white'>

      {/* Coins & Close */}
      <div className='flex flex-row justify-between'>
        <div className="flex flex-row px-2 border rounded-full border-white items-center gap-2 shadow-[inset_0_0_20px_rgba(0,0,0,0.4)] mb-5">
          <img src={coinPic} alt="coin" className="w-12 h-12"/>
          <h1 className="font-LG pr-2 text-white text-xl">{coins}</h1>
        </div>

        <div>
          <img src={closeBtn} alt="close" onClick={() => navigate(-1)} className='cursor-pointer'/>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center font-LG text-white'>
        <h1 className='text-4xl'>DAILY GOALS</h1>

        <div className='relative'>
          <img src={coinPic} alt="coin" className='w-[68px] h-[68px]' />
          <h1 className='text-lg absolute inset-7 left-0.5 text-gray-200'>+{earncoin}</h1>
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
          className='relative bg-[#1C7CE2] p-1 rounded-2xl flex flex-row gap-5 w-[340px] items-center justify-between text-white'
          onClick={() => handleGoalClick('answerQuestions', goal1coin)}
        >
          <div className='relative bg-[#031B37] w-[55px] h-[55px] flex items-center justify-center rounded-2xl'>
            <img src={coinPic} className='w-[50px] h-[50px]'/>
            <h1 className='text-lg absolute inset-6 left-2 text-gray-200'>+{goal1coin}</h1>
          </div>

          <div className='flex-1'>
            <h1 className='text-l font-extrabold'>Answer 5 Questions</h1>
            <h1 className='text-l font-old'>Play the quiz game</h1>
          </div>

          <div className='cursor-pointer'>
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
          className='relative bg-[#1C7CE2] p-1 rounded-2xl flex flex-row gap-5 w-[340px] items-center justify-between text-white'
        >
          <div className='relative bg-[#031B37] w-[55px] h-[55px] flex items-center justify-center rounded-2xl'>
            <img src={coinPic} className='w-[50px] h-[50px]'/>
            <h1 className='text-lg absolute inset-6 left-2 text-gray-200'>+{goal2coin}</h1>
          </div>

          <div className='flex-1'>
            <h1 className='text-l font-extrabold'>Open App</h1>
            <h1 className='text-l font-old'>Daily login bonus</h1>
          </div>

          <div className='cursor-pointer' onClick={() => handleGoalClick('openApp', goal2coin)}>
            {completedGoals.openApp.claimed ? (
              <img src={checkMrk} className='w-[73px] h-[43px]' />
            ) : (
              <img src={goBtn} className='w-[73px] h-[43px]' />
            )}
          </div>
        </div>

        {/* 3. Play Mini Game */}
        <div
          className='relative bg-[#1C7CE2] p-1 rounded-2xl flex flex-row gap-5 w-[340px] items-center justify-between text-white'
          onClick={() => handleGoalClick('miniGame', goal3coin)}
        >
          <div className='relative bg-[#031B37] w-[55px] h-[55px] flex items-center justify-center rounded-2xl'>
            <img src={coinPic} className='w-[50px] h-[50px]'/>
            <h1 className='text-lg absolute inset-6 left-2 text-gray-200'>+{goal3coin}</h1>
          </div>

          <div className='flex-1'>
            <h1 className='text-l font-extrabold'>Play Mini Game</h1>
            <h1 className='text-l font-old'>Have fun and earn more coins</h1>
          </div>

          <div className='cursor-pointer'>
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
