import React from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom";
import NextBTN from './authButtons/NextBTN.png'
import BackBTN from './authButtons/BackBTN.png'
import baliwagLogo from './authButtons/baliwagLogo.jpg'

function otpSignIn() {
  return (
    <div>

        {/*Back BTN*/}
        <div 
            className=' flex justify-start p-10 pt-10 '>
            <div 
                className='active:scale-95'>
                <Link to={"/signin"}>
                    <img 
                        src={BackBTN}
                        alt="" />
                </Link>
            </div>
        </div>

        {/*Game Logo Placeholder*/}
        <div 
            className=' flex justify-center pt-5'>
           <div 
                           className='
                                       items-center flex justify-center
                                       shadow-2xl rounded-full p-1 '>
                           <img
                            src={baliwagLogo} 
                            alt="Logo"
                            className='w-[180px] rounded-full p-1 h-[180px]' />
                       </div>
        </div>

        {/*OTP Message*/}
        <div className='text-white font-IN p-6 pt-30'>
            <p className=' text-center text-xl'>
                An OTP verification code has been sent to your phone number ending in ****</p>
        </div>

        {/*OTP Input*/}
        <div className=' flex justify-center'>
            <form action="/Enyong/loading">
                {/*input otp*/}
                <div className='space-x-2'>
                    <input type="text" inputmode="numeric" pattern="[0-9]" maxlength="1" required
                                className="bg-[#1C7CE2]  rounded-2xl h-20 w-20  text-white 
                                    focus:outline-none focus:ring-2 focus:ring-blue-400
                                    items-center text-center text-3xl font-IN"/>
                    <input type="text" inputmode="numeric" pattern="[0-9]" maxlength="1" required
                                        className="bg-[#1C7CE2]  rounded-2xl h-20 w-20  text-white 
                                            focus:outline-none focus:ring-2 focus:ring-blue-400
                                            items-center text-center text-3xl font-IN"/>
                    <input type="text" inputmode="numeric" pattern="[0-9]" maxlength="1" required
                                className="bg-[#1C7CE2]  rounded-2xl h-20 w-20  text-white 
                                    focus:outline-none focus:ring-2 focus:ring-blue-400
                                    items-center text-center text-3xl font-IN"/>
                    <input type="text" inputmode="numeric" pattern="[0-9]" maxlength="1" required
                                className="bg-[#1C7CE2]  rounded-2xl h-20 w-20  text-white 
                                    focus:outline-none focus:ring-2 focus:ring-blue-400
                                    items-center text-center text-3xl font-IN"/>
                </div>

                {/*Next button*/}
                <div className='flex justify-center pt-30'>
                    <button>
                        <img 
                            src={NextBTN} 
                            alt="Next Button" />
                    </button>
                </div>

            </form>
        </div>

        
    </div>
  )
}

export default otpSignIn
