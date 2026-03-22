import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ReturnPic, settingPic, accPic, ClearBanner
} from "../../assets/assets";

import ParticipantPic from '../../assets/tournamentPics/participantPic.png';
import Setting from '../../home/settingPage/setting'; // 

function TournamentLobby() {
  const [schoolName, setSchoolName] = useState("Baliwag South");
  const [participantName, setParticipantName] = useState("DINIIIS");
  const [participantCount, setParticipantCount] = useState(10);

  // --- Modal state ---
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className='m-4 space-y-7 tracking-wider'>
      
      {/* First Layer: Top Buttons */}
      <div className='flex justify-between'>
        {/* Return Button */}
        <Link to={"/"}>
          <img 
            src={ReturnPic} 
            alt="Return" 
          />
        </Link>

        <div className='flex space-x-2'>
          {/* Account Button */}
          <Link to={"/account"}>
            <img 
              src={accPic} 
              alt="Account" 
            />
          </Link>

          {/* Setting Button */}
          <img 
            src={settingPic}
            alt="Setting"
            className="cursor-pointer"
            onClick={() => setShowSettings(true)}
          />
        </div>
      </div>

      {/* Banner | School Name */}
      <div className='flex justify-center items-center p-4 relative'>
        <img 
          src={ClearBanner}
          alt="Banner" 
          className='relative' 
        />
        <h1 className='absolute font-LG text-white text-2xl mb-5'>
          {schoolName}
        </h1>
      </div>

      {/* Participants */}
      <div className='flex flex-wrap justify-center items-center gap-7'>
        {Array.from({ length: participantCount }).map((_, index) => (
          <div key={index} className="relative space-y-5">
            <img
               src={ParticipantPic} 
               alt="participant" 
               />
            <h1 className='absolute bottom-0 left-1/2 transform -translate-x-1/2 
                           font-LG text-white text-sm bg-[#1b8811] p-1 rounded-full px-3'>
              {participantName}
            </h1>
          </div>
        ))}
      </div>

      {/* Waiting Indicator */}
      <div className='font-LG text-white flex space-x-1 text-lg items-center justify-center'>
        <h1>Waiting for more players</h1>
        <h1 className='animate-bounce delay-75'>.</h1>
        <h1 className='animate-bounce delay-150'>.</h1>
        <h1 className='animate-bounce delay-200'>.</h1>
      </div>

      {/* --- Settings Modal --- */}
      {showSettings && <Setting onClose={() => setShowSettings(false)} />}
    </div>
  );
}

export default TournamentLobby;