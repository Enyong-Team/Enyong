import React from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom";
import NextBTN from '../authButtons/NextBTN.png'
import BackBTN from '../authButtons/BackBTN.png'
import ForgotPasswordLogo from '../forgotpassword/forgotPassPics/ForgotPassOTPLOGO.png'

function forgotPassword() {
  return (
    <div>
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
            <div className='flex justify-center mt-10' >
              <img 
                src={ForgotPasswordLogo} 
                alt="" 
              />  
            </div>

          {/*OTP Message*/}
            <div className='text-white font-IN p-10 pt-15'>
                <p className=' text-center text-xl'>
                    Please verify your phone number to get an OTP</p>
            </div>

          {/*Input Number*/}
            <div>
              <form action="/verifynumber">

                {/*Input LRN*/}
                  <div  className=' flex justify-center'>
                      <input type="number" id="phone number" required
                      className="bg-[#1C7CE2]  rounded-2xl p-4 w-[343px] text-xl text-white 
                                  focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter Phone Number"/>    
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
    </div>
  )
}

export default forgotPassword
