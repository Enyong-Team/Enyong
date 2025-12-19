// src/components/ScienceQuiz.jsx
import React, {useState} from 'react' 
import ScienceBG from './ScienceBackground/ScienceBG.png' 
import ReturnPic from '../../../ButtonPIC/returnBtn.png' 
import settingPic from '../../../ButtonPIC/setting.png'; 
import coinPic from '../../../PIC/coin.png' 
import plusPic from '../../../PIC/plus icon.png' 
import HintBtn from '../../../ButtonPIC/HintBtn.png' 
import QuizCard from '../../../PIC/QuizCard.png'
// Pure UI component — receives all data & callbacks via props
export default function ScienceQuiz(props) {
  const {
    question,
    coins,
    questionsAnswered,
    selected,
    removedOptions,
    showPopup,
    showNextButton,
    usedHints,

    onChoiceClick,
    onHint,
    onNext,
    onBack,
    onOpenSettings,
    onOpenDailyGoals,
  } = props;

  const letters = ["A", "B", "C", "D"];

  if (!question) return <div>Loading...</div>;

  const subject = question.subject || "SCIENCE";
  const difficulty = question.level || "EASY";

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat p-6 item-center"
      style={{ backgroundImage: `url(${ScienceBG})` }}
    >
      <div className="flex justify-between pb-2">
        <button onClick={onBack} aria-label="Back">
          <img src={ReturnPic} alt="return" className="h-12 w-auto" />
        </button>

        <img
          src={settingPic}
          alt="settings"
          className="w-[50px] h-12 cursor-pointer"
          onClick={onOpenSettings}
        />
      </div>

      <div className="flex justify-center pb-4">
        <div className="bg-[#081E41] border-2 border-white shadow-[inset_0_0_15px_rgba(0,0,0,0.6)] cursor-pointer px-19 h-10 flex justify-center items-center rounded-full">
          <h1 className="font-IN text-white font-bold">{subject}</h1>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="bg-[#081E41] border-2 border-white shadow-[inset_0_0_15px_rgba(0,0,0,0.6)] cursor-pointer px-3 h-10 flex justify-center items-center rounded-full">
          <h1 className="font-IN text-white font-bold">{difficulty}</h1>
        </div>

        <div>
          <div className="flex flex-row w-[135px] bg-[#084E99] shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] h-10 border-2 rounded-full border-white px-2 items-center gap-2 mb-2">
            <img src={coinPic} alt="coin" className="w-10 h-10" />
            <h1 className="font-LG text-white text-xl">{coins}</h1>
            <img
              src={plusPic}
              alt="plus"
              className="w-8 h-8 mt-1 cursor-pointer"
              onClick={onOpenDailyGoals}
            />
          </div>

          <div className="flex justify-end cursor-pointer">
            <div className="flex p-0 flex-row justify-center bg-[#299C2F] shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] border-2 rounded-full border-white px-1 items-center mb-5 w-auto">
              <img src={HintBtn} alt="hint" className="w-9 h-9" />
              <div className="bg-black/50 rounded-4xl px-2 items-center py-1 flex justify-center">
                <img src={coinPic} alt="hint coin" className="w-6 h-6" />
                <h1 className="font-LG text-center text-white text-sm">{usedHints}</h1>
              </div>
              <button
                onClick={onHint}
                className="ml-2 text-white font-bold px-2 py-1 rounded"
              >
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <div className="flex justify-center items-center pb-4 relative">
          <img src={QuizCard} alt="Quiz Card" className="w-[293px] h-auto" />

          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[72px] h-[72px] rounded-full flex items-center justify-center text-white text-2xl font-FD">
            {questionsAnswered + 1}
          </div>

          <div className="flex justify-center pt-8 absolute">
            <h1 className="px-6 p-6 w-[238px] items-center text-white text-center text-xl font-FD">
              {question.question}
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-start space-y-2 mx-auto">
          {question.choices.map((choiceText, idx) => {
            if (removedOptions.includes(choiceText)) return null;

            let colorClass = "";
            if (selected !== null) {
              if (idx === selected && idx !== question.correctIndex) colorClass = "bg-red-500";
              if (idx === question.correctIndex && selected !== question.correctIndex)
                colorClass = "bg-green-500";
            }

            return (
              <div
                key={choiceText}
                className="flex flex-row items-center justify-start w-full max-w-[400px] mx-auto"
              >
                <button
                  onClick={() => onChoiceClick(idx)}
                  className="rounded-full h-12 flex items-center px-4 bg-[#004C99] shadow-[inset_0_0_5px_rgba(0,0,0,0.6)] shrink-0 -mr-5 z-10"
                  aria-label={`Choice ${letters[idx]}`}
                >
                  <h1 className="text-white text-xl font-FD cursor-pointer">{letters[idx]}</h1>
                </button>

                <div
                  onClick={() => onChoiceClick(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") onChoiceClick(idx);
                  }}
                  className={`relative flex justify-center items-center rounded-full shadow-[inset_0_0_15px_rgba(0,0,0,0.6)] text-white flex-1 wrap-break-word text-xl font-FD cursor-pointer px-4 py-3 ${
                    colorClass !== "" ? "" : "bg-[#004C99]"
                  }`}
                  style={{
                    WebkitMask: "radial-gradient(circle 30px at 0% 50%, transparent 98%, black 100%)",
                    mask: "radial-gradient(circle 30px at 0% 50%, transparent 98%, black 100%)",
                  }}
                >
                  <div className="px-15 py-0">
                    <h1 className="p-2 py-2.5 pl-7">{choiceText}</h1>
                  </div>

                  {colorClass && (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: 9999,
                        opacity: 0.7,
                      }}
                      className={colorClass}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
