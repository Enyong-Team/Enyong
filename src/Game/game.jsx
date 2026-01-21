import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import QuizUI from "./QuizUI";
import NextQuestion from "./nextquestion/nextQuestion";
import { questions } from "../data/questions"; 
import { useCoins } from "../context/coincontext";

export default function Game() {
  const navigate = useNavigate();
  const location = useLocation();
  const { coins, setCoins } = useCoins();

  // Defaults to science if somehow the other subjects are missing
  const [currentSubject, setCurrentSubject] = useState(location.state?.subject || "Science"); 

  const [question, setQuestion] = useState(null);
  const [selected, setSelected] = useState(null);
  const [removedOptions, setRemovedOptions] = useState([]);
  const [usedHints, setUsedHints] = useState(0); 
  const [showNextModal, setShowNextModal] = useState(false);

  // RANDOMIZATION LOGIC 
  const fetchQuestion = () => {
    
    // Get list of subjects
    const allSubjects = [...new Set(questions.map((q) => q.subject))];

    // Pick a Random Subject
    const randomSubject = allSubjects[Math.floor(Math.random() * allSubjects.length)];

    // Update the UI State
    setCurrentSubject(randomSubject);

    // Filter questions using the NEW randomSubject
    const subjectQuestions = questions.filter(
      (q) => q.subject === randomSubject
    );

    if (subjectQuestions.length === 0) {
      console.error(`No questions found for subject: ${randomSubject}`);
      return; 
    }

    // Pick random question from that new subject
    const randomIndex = Math.floor(Math.random() * subjectQuestions.length);
    const q = subjectQuestions[randomIndex];
    
    // Set the new question and reset UI
    setQuestion(q);
    setSelected(null);
    setRemovedOptions([]);
    setUsedHints(0);
    setShowNextModal(false);
  };

  // Initial Load only
  useEffect(() => {
    // If you want the VERY first question to match the button they clicked (e.g. Science),
    // we manually run the logic for the *initial* subject here without randomizing the subject yet.
    // OR, if you want it to be random immediately, just call fetchQuestion().
    
    // Current logic: Respects the user's first choice, then randomizes after.
    const initialSubject = location.state?.subject || "Science";
    const subjectQuestions = questions.filter(q => q.subject === initialSubject);
    
    if (subjectQuestions.length > 0) {
        const randomIndex = Math.floor(Math.random() * subjectQuestions.length);
        setQuestion(subjectQuestions[randomIndex]);
    }
  }, []);

  const handleChoiceClick = (idx) => {
    if (selected !== null || removedOptions.includes(idx)) return;
    setSelected(idx);

    // If Correct: Show Green Modal
    if (Number(idx) === Number(question.correctIndex)) {
      setTimeout(() => {
        setCoins((c) => c + 3);
        setShowNextModal(true);
      }, 300);
    }
  };

  const handleHint = () => {
    if (coins < 10) return;
    if (usedHints >= 3) return;

    const availableWrongOptions = question.choices
      .map((_, index) => index)
      .filter((index) => index !== Number(question.correctIndex) && !removedOptions.includes(index));

    if (availableWrongOptions.length === 0) return;

    const randomIndex = Math.floor(Math.random() * availableWrongOptions.length);
    const optionToRemove = availableWrongOptions[randomIndex];

    setCoins((c) => c - 10);
    setRemovedOptions((prev) => [...prev, optionToRemove]);
    setUsedHints((prev) => prev + 1);
  };

  if (!question) return null;

  return (
    <>
      <QuizUI
        subject={currentSubject} // This will now update dynamically
        difficulty={question.level || "Easy"}
        coins={coins}
        hints={3 - usedHints}
        questionNumber={1} 
        question={question.question}
        choices={question.choices}
        selected={selected}
        correctIndex={question.correctIndex}
        removedOptions={removedOptions}
        
        onChoiceClick={handleChoiceClick}
        onHint={handleHint}
        
        // When Orange Button is clicked (Wrong Answer), it runs fetchQuestion
        // which now Randomizes the subject!
        onNext={fetchQuestion} 
        
        onBack={() => navigate("/")}
        onOpenSettings={() => navigate("/setting", { state: { backgroundLocation: location } })}
        onOpenDailyGoals={() => navigate("/dailyGoals", { state: { backgroundLocation: location } })}
      />

      {/* When Green Modal Button is clicked (Correct Answer), it also Randomizes */}
      {showNextModal && (
        <NextQuestion
          coins={coins}
          rewardCoin={3}
          onNext={fetchQuestion} 
          onHome={() => navigate("/")}
        />
      )}
    </> 
  );
}