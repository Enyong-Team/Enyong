import React, {useState} from 'react'
import TleBg from './TLEBackground/TleBg.png'
import ReturnPic from '../../../ButtonPIC/returnBtn.png'
import settingPic from '../../../ButtonPIC/setting.png';
import coinPic from '../../../PIC/coin.png'
import plusPic from '../../../PIC/plus icon.png'
import HintBtn from '../../../ButtonPIC/HintBtn.png'
import QuizCard from '../../../PIC/QuizCard.png' 

import { Link, useNavigate, useLocation } from "react-router-dom";

function TLEQuiz() {


  // ----------------------------
  // State variables
  // ----------------------------
  const [subject, setSubject] = useState("EPP/TLE");        // Current quiz subject
  const [coin, setCoin] = useState("500");                 // User's coin balance
  const [difficulity, setDifficulity] = useState("EASY");   // Quiz difficulty level
  const [hint, setHint] = useState("10");                  // Number of available hints

  const [questionNumber, setQuestionNumber] = useState("1"); // Current question number
  const [question, setQuestion] = useState("EPP/TLE SUBJECT QUESTION"); // Current question text
  const [choiceA, setChoiceA] = useState("Choice A ");         // Choice A text
  const [choiceB, setChoiceB] = useState("Choice B");       // Choice B text
  const [choiceC, setChoiceC] = useState("Choice C");         // Choice C text
  const [choiceD, setChoiceD] = useState("Choice D");            // Choice D text

  // ----------------------------
  // Navigation hooks
  // ----------------------------
  const navigate = useNavigate(); // Programmatic navigation
  const location = useLocation(); // Get current route info (for modals or background state)
    

  return (

    // ----------------------------
    // Root container and Background
    // ----------------------------
    <div
    className='w-[300px]l min-h-screen bg-cover bg-center bg-no-repeat p-6 item-center'
    style={{backgroundImage:`url(${TleBg})`}}
    >
            
            
      {/* ----------------------------
          Top navigation: Return & Settings
      ---------------------------- */}
        <div className=' flex justify-between pb-2 '>
          
          {/* Return botton  */}
            <Link to= "/">
              <img 
                src={ReturnPic} 
                alt="" 
                className='w-[300px]px] h-12'/>
            </Link>

          {/*  Settings buttons */}
              <img
              src={settingPic}
              alt="settings"
              className="w-[50px] h-12 cursor-pointer" // setting button size
              onClick={() => navigate("/setting", { state: { backgroundLocation: location } })}/>
        </div>

      {/* ----------------------------
          Subject display
      ---------------------------- */}
        <div className='flex justify-center pb-4'>
          <div 
            className='  bg-[#081E41] border-2 border-white shadow-[inset_0_0_15px_rgba(0,0,0,0.6)] cursor-pointer  px-19 h-10 flex justify-center items-center rounded-full '>
              <h1 
              className=' font-IN text-white font-bold'>
              {subject}
              </h1>
          </div>
        </div>
      

      {/* ----------------------------
          Difficulty & Coin Section
      ---------------------------- */}
        <div className='flex justify-between  '>

            {/* Difficulty display */}
            <div 
              className='  bg-[#081E41] border-2 border-white shadow-[inset_0_0_15px_rgba(0,0,0,0.6)] cursor-pointer  px-3 h-10 flex justify-center items-center rounded-full '>
                <h1 
                className=' font-IN text-white font-bold'>
                {difficulity}
                </h1>
            </div>

            {/* Coin button and Hint BTN */}
            <div>
                  
              {/* Coin button */}
                <div className="flex flex-row w-[135px] bg-[#084E99] shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] h-10 border-2 rounded-full border-white px-2 items-center gap-2   mb-2  ">
                        {/* Coin image */}
                        <img
                            src={coinPic}
                            alt="coin"
                            className="w-10 h-10"
                        />

                        {/* Number */}
                        <h1 className="font-LG text-white text-xl">
                            {coin}
                        </h1>

                        {/* Plus icon */}
                        <img
                            src={plusPic}
                            alt="plus"
                            className="w-8 h-8 mt-1 cursor-pointer"
                            onClick={() => navigate("/dailyGoals", { state: { backgroundLocation: location } })}
                        />
                </div>

              {/* Hint button */}
              <div className='flex justify-end cursor-pointer'>
                <div className="flex p-0 flex-row justify-center bg-[#299C2F] shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] 
                                border-2 rounded-full border-white px-1 items-center  mb-5 w-auto ">
                        {/* Coin image */}
                        <img
                            src={HintBtn}
                            alt="hint"
                            className="w-9 h-9"
                        />

                        {/* Number */}
                        <div className='bg-black/50 rounded-4xl px-2 items-center py-1 flex justify-center'>
                        <img
                            src={coinPic}
                            alt="hint"
                            className="w-6 h-6"/>
                          <h1 className="font-LG text-center text-white text-sm ">
                              {hint}
                          </h1>
                        </div>
                        
                </div>
              </div>

            </div>

        </div>


      {/* ----------------------------
          Quiz card section
      ---------------------------- */}
        <div className='flex flex-col justify-center'>
          
            {/* Quiz placeholder */} 
          
            <div className='flex justify-center items-center pb-4'>

              {/* Question Card */}
              <img 
                src={QuizCard} 
                alt="Quiz Card" 
                className='w-[293px] sm:w-[360px] md:w-[393px] h-auto'/>
              
              {/* Level circle */}
              <div
                className="absolute top-60 left-1/2 -translate-x-1/2
                          w-[72px] h-[72px] rounded-full
                          flex items-center justify-center
                         text-white text-2xl font-FD">
                    {questionNumber}
              </div>

              {/* Question text Display*/}
                <div className='flex justify-center pt-8 absolute'>
                  <h1 className=" px-6 p-6 w-[238px] items-center 
                                text-white text-center text-xl font-FD">
                    {question}
                  </h1>
                </div>

            </div>



        {/* ----------------------------
            Choices section
        ---------------------------- */}
          <div className="flex flex-col justify-start space-y-2 mx-auto  ">
            
            {/* Choice A */}
             <div className="flex flex-row items-center justify-start w-full max-w-[400px] mx-auto">

                {/* Rounded label */}
                  <div className="rounded-full h-12 flex items-center px-4 bg-[#004C99]
                       shadow-[inset_0_0_5px_rgba(0,0,0,0.6)]  shrink-0 -mr-5 z-10">
                      <h1 className="text-white text-xl font-FD cursor-pointer">A</h1>
                  </div>

                {/* Eto yung lintik na Curve */}
                  <div
                    className="relative flex justify-center items-center  rounded-full bg-[#004C99] shadow-[inset_0_0_15px_rgba(0,0,0,0.6)]
                            text-white flex-1 wrap-break-word text-xl font-FD cursor-pointer "

                    // TO REVIEW PATO
                    style={{
                        WebkitMask: "radial-gradient(circle 30px at 0% 50%, transparent 98%, black 100%)",
                        mask: "radial-gradient(circle 30px at 0% 50%, transparent 98%, black 100%)",
                    }}>

                    {/* Rounded label  border adjust*/} 
                    <div className=' px-15 py-0'>
                      <h1 className="p-2 py-2.5 pl-7">{choiceA}</h1>
                    </div>
                  </div>

            </div>

            {/* Choice B */}
             <div className="flex flex-row items-center justify-start w-full max-w-[400px] mx-auto">

                {/* Rounded label */}
                  <div className="rounded-full h-12 flex items-center px-4 bg-[#004C99] 
                                shadow-[inset_0_0_5px_rgba(0,0,0,0.6)] shrink-0 -mr-5 z-10">
                      <h1 className="text-white text-xl font-FD cursor-pointer">B</h1>
                  </div>

                {/* Eto yung lintik na Curve */}
                  <div
                    className="relative flex justify-center items-center  rounded-full bg-[#004C99] shadow-[inset_0_0_15px_rgba(0,0,0,0.6)]
                            text-white flex-1 wrap-break-word text-xl font-FD cursor-pointer "

                    // TO REVIEW PATO
                    style={{
                        WebkitMask: "radial-gradient(circle 30px at 0% 50%, transparent 98%, black 100%)",
                        mask: "radial-gradient(circle 30px at 0% 50%, transparent 98%, black 100%)",
                    }}>

                    {/* Rounded label  border adjust*/} 
                    <div className=' px-15 py-0'>
                      <h1 className="p-2 py-2.5 pl-7">{choiceB}</h1>
                    </div>
                  </div>

            </div>

            {/* Choice C */}
             <div className="flex flex-row items-center justify-start w-full max-w-[400px] mx-auto">

                {/* Rounded label */}
                  <div className="rounded-full h-12 flex items-center px-4 bg-[#004C99] 
                                   shadow-[inset_0_0_5px_rgba(0,0,0,0.6)] shrink-0 -mr-5 z-10">
                      <h1 className="text-white text-xl font-FD cursor-pointer">C</h1>
                  </div>

                {/* Eto yung lintik na Curve */}
                  <div
                    className="relative flex justify-center items-center  rounded-full bg-[#004C99] shadow-[inset_0_0_15px_rgba(0,0,0,0.6)]
                            text-white flex-1 wrap-break-word text-xl font-FD cursor-pointer "

                    // TO REVIEW PATO
                    style={{
                        WebkitMask: "radial-gradient(circle 30px at 0% 50%, transparent 98%, black 100%)",
                        mask: "radial-gradient(circle 30px at 0% 50%, transparent 98%, black 100%)",
                    }}>

                    {/* Rounded label  border adjust*/} 
                    <div className=' px-15 py-0'>
                      <h1 className="p-2 py-2.5 pl-7">{choiceC}</h1>
                    </div>
                  </div>

            </div>

            {/* Choice D */}
             <div className="flex flex-row items-center justify-start w-full max-w-[400px] mx-auto">

                {/* Rounded label */}
                  <div className="rounded-full h-12 flex items-center px-4 bg-[#004C99] 
                      shadow-[inset_0_0_5px_rgba(0,0,0,0.6)] shrink-0 -mr-5 z-10">
                      <h1 className="text-white text-xl font-FD cursor-pointer">D</h1>
                  </div>

                {/* Eto yung lintik na Curve */}
                  <div
                    className="relative flex justify-center items-center  rounded-full bg-[#004C99] shadow-[inset_0_0_15px_rgba(0,0,0,0.6)]
                            text-white flex-1 wrap-break-word text-xl font-FD cursor-pointer "

                    // TO REVIEW PATO
                    style={{
                        WebkitMask: "radial-gradient(circle 30px at 0% 50%, transparent 98%, black 100%)",
                        mask: "radial-gradient(circle 30px at 0% 50%, transparent 98%, black 100%)",
                    }}>

                    {/* Rounded label  border adjust*/} 
                    <div className=' px-15 py-0'>
                      <h1 className="p-2 py-2.5 pl-7">{choiceD}</h1>
                    </div>
                  </div>

            </div>

          </div>
      </div>

    </div>   

  )
}

export default TLEQuiz