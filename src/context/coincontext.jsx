import { createContext, useContext, useState } from "react";

const CoinContext = createContext();

export function CoinProvider({ children }) {
  const [coins, setCoins] = useState(10);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);

  //Keep track of Tasks || also keeps prevents claiming multiple times
  const [completedGoals, setCompletedGoals] = useState({
    answerQuestions: { done: false, claimed: false },
    openApp: { done: false, claimed: false },
    miniGame: { done: false, claimed: false },
  });

  const addCoins = (amount) => setCoins(prev => prev + amount);
  const incrementQuestionsAnswered = () => setQuestionsAnswered(prev => prev + 1);

  

  return (
    <CoinContext.Provider value={{
      coins, setCoins, addCoins,
      questionsAnswered, setQuestionsAnswered,
      completedGoals, setCompletedGoals
    }}>
      {children}
    </CoinContext.Provider>
  );
}

export function useCoins() {
  return useContext(CoinContext);
}
