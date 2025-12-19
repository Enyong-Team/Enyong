import React from 'react'
import MusicAndArtLogo from '../CategoriesLogo/MusicAndArtLogo.png'

function MusicAndArt() {
  return (
    <div className="min-h-screen bg-[#081E41] flex flex-col  text-white">
            <div className='font-FD flex flex-col items-center justify-center m-10  '>
                <div className='flex flex-col items-center justify-center gap-14'>
                  <h1 className='text-xl'>CATEGORY</h1>
                  <h1 className='text-4xl text-center'>MUSIC AND ARTS</h1>
                </div>
        
                <div>   
                  <img src={MusicAndArtLogo} 
                  alt="Music and Art logo" 
                  className='pt-25'/>
        
                </div>
        
              </div>
    </div>
  )
}

export default MusicAndArt