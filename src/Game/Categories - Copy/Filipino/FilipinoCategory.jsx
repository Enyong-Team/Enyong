import React from 'react'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FilipinoLogo from '../CategoriesLogo/FilipinoLogo.png'

function FilipinoCategory() {
  const navigate = useNavigate();
    useEffect(() => {
      // list of categories to choose from
      const pages = [
          "/filipino_quiz"
        ];
  
      const timer = setTimeout(() => {
        const randomPage = pages[Math.floor(Math.random() * pages.length)];
        navigate(randomPage);
      }, 300); // 1.5 sec delay (optional)
  
      return () => clearTimeout(timer);
    }, [navigate]);
  return (
     <div className="min-h-screen bg-[#081E41] flex flex-col  text-white">
              <div className='font-FD flex flex-col items-center justify-center m-10  '>
                <div className='flex flex-col items-center justify-center gap-14'>
                  <h1 className='text-xl'>CATEGORY</h1>
                  <h1 className='text-4xl'>FILIPINO</h1>
                </div>
        
                <div>
                  <img src={FilipinoLogo} 
                  alt="FILIPINO logo" 
                  className='pt-25'/>
        
                </div>
        
              </div>
        </div>
  )
}

export default FilipinoCategory