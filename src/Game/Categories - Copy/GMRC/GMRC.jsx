import React from 'react'
import GMRCLogo from '../CategoriesLogo/GMRCLogo.png'

function GMRC() {
  return (
    <div className="min-h-screen bg-[#081E41] flex flex-col  text-white">
      <div className='font-FD flex flex-col items-center justify-center m-10  '>
        <div className='flex flex-col items-center justify-center gap-14'>
          <h1 className='text-xl'>CATEGORY</h1>
          <h1 className='text-4xl'>GMRC</h1>
        </div>

        <div>
          <img src={GMRCLogo} 
          alt="GMRC logo" 
          className='pt-25'/>

        </div>

      </div>
    </div>
  )
}

export default GMRC