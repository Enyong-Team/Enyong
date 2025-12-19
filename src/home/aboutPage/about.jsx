import React, {  } from 'react';
import { closePic } from "../../assets/assets";
import { useNavigate } from 'react-router-dom';


function About() {
  const navigate = useNavigate();

  return (
    <div className="absolute inset-0 flex items-center justify-center  bg-black/50 z-50">
  <div className="relative bg-[#084E99] rounded-xl w-[368px] h-[494px] flex flex-col">
    
    <div className="relative bg-[#012F65] rounded-xl p-6 flex items-center justify-center w-full">
      <h1 className="text-white text-3xl font-LG">About the Game</h1>
      <img 
        src={closePic} 
        className="absolute right-4 cursor-pointer" 
        onClick={() => navigate(-1)} 
      />
    </div>

    <div className="p-4 text-white text-center ">
      About page content... <br />
      Pasensya na tropa ako'y nalate. si jokjok aking kadate, jok wag ka mag alala pag ako kasama mo safe na safe
    </div>

    <div className=" p-4 absolute right-1 bottom-1  text-white text-center ">
      Term of Service
    </div>

  </div>
</div>

  );
}

export default About;
