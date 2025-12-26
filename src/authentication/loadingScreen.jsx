import React from 'react'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function loadingScreen() {

const navigate = useNavigate();


  useEffect(() => {
    // direct to homepage
    const pages = [
      "/"
    ];

    
    const timer = setTimeout(() => {
      const randomPage = pages[Math.floor(Math.random() * pages.length)];
      if (randomPage) navigate(randomPage);
    }, 1500); 

    return () => clearTimeout(timer);
  }, [navigate]);


  return (
    <div className=''>

        {/*Game Logo Placeholder*/}
        <div 
            className=' flex justify-center pt-40'>
            <div 
                className=' bg-[#1C7CE2] w-40 h-40
                            items-center flex justify-center
                            shadow-2xl rounded-full'>
                <h1 className='font-IN text-center text-xl'>
                    Game Logo
                </h1>
            </div>
        </div>

        {/*Loading Ui*/}
        <div className='pt-20'>
            <div className='font-FD flex justify-center'>
                <h1 className='text-white text-xl'>
                    Loading Please Wait
                </h1>

            </div>
        </div>

        {/*Loading Animation*/}
        <div className='flex justify-center pt-6 '>
            <div class="flex space-x-2 ">
                <span class="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-0.3s]" ></span>
                <span class="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-0.10s]" ></span>
                <span class="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-0s]"></span>
            </div>
        </div>

    </div>
  )
}

export default loadingScreen
