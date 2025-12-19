import React from 'react'
import PeHealthLogo from '../CategoriesLogo/PELogo.png'

function PeAndHealth() {
  return (
    <div className="min-h-screen bg-[#081E41] flex flex-col  text-white">
          <div className='font-FD flex flex-col items-center justify-center m-10  '>
            <div className='flex flex-col items-center justify-center gap-14'>
              <h1 className='text-xl'>CATEGORY</h1>
              <h1 className='text-4xl text-center'>PHYSICAL EDUCATION <br />AND HEALTH</h1>
            </div>
    
            <div>
              <img src={PeHealthLogo} 
              alt="Pe And Healt logo" 
              className='pt-25'/>
    
            </div>
    
          </div>
    </div>
  )
}

export default PeAndHealth