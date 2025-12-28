import React from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom";
import SignInBTN from './authButtons/SignInBTN.png'


function signIn() {
  return (
    <div className='flex  flex-col justify-center font-IN'>

        {/*Game Logo Placeholder*/}
        <div 
            className=' flex justify-center pt-30'>
            <div 
                className=' bg-white w-[117px] h-[101px]
                            items-center flex justify-center
                            shadow-2xl rounded-2xl'>
                <h1 className='font-IN text-center'>
                    Game Logo
                </h1>
            </div>
        </div>

        {/*Sing In Form*/}
        <div className='items-center flex flex-col justify-center pt-30'>
            <form action="/otpsignin" className='space-y-6'>
                {/*Input LRN*/}
                <div>
                    <input type="text" id="lrn" required
                    className="bg-[#1C7CE2]  rounded-2xl p-4 w-[343px]  text-white 
                                focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter LRN"/>    
                </div>

                {/*Create Password*/}
                <div>
                    <input type="password" id="password" required
                    className="bg-[#1C7CE2]  rounded-2xl p-4 w-[343px]  text-white 
                                focus:outline-none focus:ring-2 focus:ring-blue-400 "
                    placeholder="Create Password"/>    
                </div>

                {/* Forgot Password*/}
                <div className='flex justify-end-safe -mt-5'>
                    <Link to={"/forgotpass"}>
                        <h1 className='text-white active:scale-95'>
                            Forgot Password?
                        </h1>
                    </Link>
                </div>

                {/*Sign IN Button*/}
                <div className='flex justify-center pt-20'>
                    <button className='active:sclae-95' type='submit'> 
                        <img 
                        src={SignInBTN} 
                        alt="Sign IN" />
                    </button>
                </div>
            </form>
        </div>

    </div>
  )
}

export default signIn
