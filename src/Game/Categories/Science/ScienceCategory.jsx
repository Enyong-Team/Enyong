import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import ScienceLogo from '../CategoriesLogo/ScienceLogo.png'
 
function ScienceCategory() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/game", { state: { subject: "Science" } });
    }, 300);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#081E41] flex flex-col text-white">
          <div className='font-FD flex flex-col items-center justify-center m-10'>
            <div className='flex flex-col items-center justify-center gap-14'>
              <h1 className='text-xl'>CATEGORY</h1>
              <h1 className='text-4xl'>SCIENCE</h1>
            </div>
    
            <div>
              <img src={ScienceLogo} 
              alt="SCIENCE logo" 
              className='pt-25'/>
            </div>
          </div>
    </div>
  )
}

export default ScienceCategory