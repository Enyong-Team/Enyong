import React from 'react';
import RankUpBanner from "../rankUp/rankUpImages/RankUpBanner.png";
import RankUpWheel from "../rankUp/rankUpImages/RankUpWheel.png";
import RankUpContinue from "../rankUp/rankUpImages/RankUpContinue.png";

import  { RankLogo, Mandirigma, Maharlika, 
  Maestro, Alamat, Marangal,  
  } from "../../assets/assets"
function rankUp() {
  return (
    <div className='   '>

        <div className=' min-h-screen space-y-5 flex flex-col items-center justify-center font-FD'>
            {/*Banner*/}
            <div>
                <img 
                    src={RankUpBanner} 
                    alt="RankUpBanner" 
                />
            </div>

            {/* Wheel */}
            <div className="relative flex justify-center items-center">
            
            <img 
                src={RankUpWheel}
                alt="RankUpBanner"
                className="animate-spin [animation-duration:10s]"
            />

            <img
                src={Alamat}
                alt="Alamat"
                className="absolute w-40 h-40 object-contain "
            />

            </div>
            <div className='text-center'>
                <h1 className='text-[#F7AD19] text-xl pb-5   animate-pulse-slow'>Congratulations!</h1>
                <h1 className='text-white'>You’ve advanced to </h1>
                <h1 className='text-[#2CA021] animate-pulse-slow'>MAHARLIKA</h1>
            </div>

        {/*Continue*/}
            <div>
                <img 
                    src={RankUpContinue} 
                    alt="RankUpBanner" 
                    className=' cursor-pointer active:scale-95 animate-pulse-slow'
                />
            </div>
        </div>
    </div>
  )
}

export default rankUp