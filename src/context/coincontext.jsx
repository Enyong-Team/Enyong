import { createContext, useContext, useState } from "react";

const CoinContext = createContext();

export function CoinProvider({ children }) {
  const [coins, setCoins] = useState(10);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);

  // --- NEW: Track Played Dates for Calendar/Trophy ---
  const [playedDates, setPlayedDates] = useState([]); 

  // Keep track of Tasks || also prevents claiming multiple times
  const [completedGoals, setCompletedGoals] = useState({
    answerQuestions: { done: false, claimed: false },
    openApp: { done: false, claimed: false },
    miniGame: { done: false, claimed: false },
  });

  const addCoins = (amount) => setCoins(prev => prev + amount);
  const incrementQuestionsAnswered = () => setQuestionsAnswered(prev => prev + 1);

  // Helper to mark today as played (Avoiding duplicates)
  const markTodayAsPlayed = () => {
    const todayStr = new Date().toDateString();
    setPlayedDates(prev => {
      if (!prev.includes(todayStr)) {
        return [...prev, todayStr];
      }
      return prev;
    });
  };

  return (
    <CoinContext.Provider value={{
      coins, setCoins, addCoins,
      questionsAnswered, setQuestionsAnswered,
      completedGoals, setCompletedGoals,
      playedDates, markTodayAsPlayed // Exported for EarnCoin.jsx
    }}>
      {children}
    </CoinContext.Provider>
  );
}

export function useCoins() {
  return useContext(CoinContext);
}