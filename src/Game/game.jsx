import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import correctSound from '../assets/music/correctAnswer.wav'
import wrongSound from '../assets/music/wrongAnswer.wav'

import QuizUI from "./QuizUI";

import NextQuestion from "./nextquestion/nextQuestion";
import { questions } from "../data/questions"; 
import { useCoins } from "../context/coincontext";

import soundBG from '../assets/music/sampleSong.wav'

// LEVEL LOGIC
const getLevelTitle = (correctCount) => {
  if (correctCount >= 1501) return "MARANGAL";
  if (correctCount >= 901) return "ALAMAT";
  if (correctCount >= 501) return "MAESTRO";
  if (correctCount >= 201) return "MAHARLIKA";
  return "MANDIRIGMA";
};

export default function Game() {
  const navigate = useNavigate();
  const location = useLocation();
  const { coins, setCoins } = useCoins();

  // LEVEL & CORRECT COUNT
  const [correctCount, setCorrectCount] = useState(
    location.state?.correctCount ?? Number(localStorage.getItem("correctCount")) ?? 0
  );

  //MUSIC 
    useEffect(() => {
    //  ONE global audio instance (prevents layering)
    if (!window.bgMusic) {
      const audio = new Audio(soundBG);
      audio.loop = true;
      audio.volume = 0.4;
      window.bgMusic = audio;
  
      const unlockAndPlay = () => {
        audio.play().catch(() => {});
        window.removeEventListener("click", unlockAndPlay);
      };
  
      // Try autoplay first
      audio.play().catch(() => {
        // If blocked, play on first click
        window.addEventListener("click", unlockAndPlay);
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("correctCount", correctCount);
  }, [correctCount]);

  // Level up every 1 correct answers
  const levelNumber = Math.floor(correctCount / 1) + 1;
  // Level title
  const levelTitle = getLevelTitle(correctCount);

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


  // SOUND TOGGLE FROM SETTINGS
  const [soundOn, setSoundOn] = useState(() => {
    const saved = localStorage.getItem("soundOn");
    return saved === null ? true : JSON.parse(saved);
  });

  // AUDIO REFS: prevents the sound from restarting unexpectedly on each render
  const correctAudioRef = useRef(null);
  const wrongAudioRef = useRef(null);

  useEffect(() => {
    //correct answer sound
    correctAudioRef.current = new Audio(correctSound);
    correctAudioRef.current.volume = 0.4;
    correctAudioRef.current.playbackRate = 2.0;

    //wrong answer sound
    wrongAudioRef.current = new Audio(wrongSound);
    wrongAudioRef.current.volume = 0.4;
    wrongAudioRef.current.playbackRate = 3.0;
  }, []);


  // HANDLE CHOICE
  const handleChoiceClick = (idx) => {
    if (selected !== null || removedOptions.includes(idx)) return;
    setSelected(idx);

    // check sound setting and sound effect on
    const isSoundOn = JSON.parse(localStorage.getItem("soundOn") || "true");

    // If Correct: Show Green Modal
    if (Number(idx) === Number(question.correctIndex)) {

       // Only play sound if sound is on 
       // Correct answer sound
      if (isSoundOn && correctAudioRef.current) {
        correctAudioRef.current.currentTime = 0;// restart sound if already playing
        correctAudioRef.current.play().catch(() => {});
      }

      setTimeout(() => {
        setCoins(c => c + 3);

        setCorrectCount(prev => prev + 1);

        setShowNextModal(true);
      }, 300);

    } else {
       // Wrong answer sound effects
      if (isSoundOn && wrongAudioRef.current) {
        wrongAudioRef.current.currentTime = 0;
        wrongAudioRef.current.play().catch(() => {});
      }
    }
  };
    // hint
  const handleHint = () => {
    if (coins < 10) return;
    if (usedHints >= 2) return;

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
        hints={2 - usedHints}
        questionNumber={1} 
        question={question.question}
        choices={question.choices}
        selected={selected}
        correctIndex={question.correctIndex}
        removedOptions={removedOptions}
        levelNumber ={levelNumber}
        
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
        onHome={() =>
          navigate("/", {
              state: {
              correctCount,
              levelTitle,
              levelNumber, 
            },
          })
        }
      />
      )}
    </> 
  );
}