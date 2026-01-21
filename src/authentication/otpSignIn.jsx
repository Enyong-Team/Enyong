import React from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom";
import NextBTN from './authButtons/NextBTN.png'
import BackBTN from './authButtons/BackBTN.png'

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
                className=' bg-white w-[117px] h-[101px]
                            items-center flex justify-center
                            shadow-2xl rounded-2xl'>
                <h1 className='font-IN text-center'>
                    Game Logo
                </h1>
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
                <div className='space-x-5'>
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
