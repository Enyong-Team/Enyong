import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom";
import SaveBTN from '../authButtons/SaveBTN.png'
import BackBTN from '../authButtons/BackBTN.png'
import ForgotPasswordLogo from '../forgotpassword/forgotPassPics/ForgotPassOTPLOGO.png'

function createNewPassword() {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    if (password !== confirmPassword) {
      e.preventDefault();
      setErrorMsg("Passwords do not match");
      return;
    }
    setErrorMsg("");
  };

  return (
    <div>

      {/*Back BTN*/}
      <div 
          className=' flex justify-start p-10 pt-10 '>
          <div className='active:scale-95'>
              <Link to={"/forgotpass"}>
                  <img src={BackBTN} alt="" />
              </Link>
          </div>
      </div>

      <div className='flex justify-center font-LG'>
          <h1 className='text-white text-3xl'>
              CREATE NEW PASSWORD
          </h1>
      </div>

      {/*Game Logo Placeholder*/}
      <div className=' flex justify-center pt-5'>
          <div>
              <img src={ForgotPasswordLogo} alt="" />
          </div>
      </div>

      {/*OTP Message*/}
      <div className='text-white font-IN p-10 pt-15'>
          <p className=' text-left text-lg'>
              Create a password with atleast 8 letters and numbers. You’ll need this password to log in to your account.
          </p>
      </div>

      {/*Sing In Form*/}
      <div className='items-center flex flex-col justify-center '>
          <form action="/signin" className='space-y-6' onSubmit={handleSubmit}>

              {/*Input LRN*/}
              <div>
                  <input 
                      type="password" 
                      id="password" 
                      required
                      value={password}
                      onChange={(e)=> setPassword(e.target.value)}
                      className="bg-[#1C7CE2] rounded-2xl p-4 w-[343px] text-white 
                                 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter New Password"
                  />    
              </div>

              {/*Create Password*/}
              <div>
                  <input 
                      type="password" 
                      id="password" 
                      required
                      value={confirmPassword}
                      onChange={(e)=> setConfirmPassword(e.target.value)}
                      className="bg-[#1C7CE2] rounded-2xl p-4 w-[343px] text-white 
                                 focus:outline-none focus:ring-2 focus:ring-blue-400 "
                      placeholder=" Confirm New Password"
                  />    

                  {/* <= Error Message Display */}
                  {errorMsg && (
                      <p className="text-red-400 font-IN  pt-2">{errorMsg}</p>
                  )}
              </div>

              {/*Sign IN Button*/}
              <div className='flex justify-center pt-10'>
                  <button className='active:sclae-95' type='submit'> 
                      <img src={SaveBTN} alt="Sign IN" />
                  </button>
              </div>
          </form>
      </div>

    </div>
  )
}

export default createNewPassword
