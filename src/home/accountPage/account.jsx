import React,  { useState }  from 'react'
import { ReturnPic, LogoutPic, profilePic, editPic } from "../../assets/assets";
import { Link,  } from "react-router-dom";

function Account() {

 const [name, setName] = useState("Juan Dela Cruz")
 const [pnumber, setPnumber] = useState("09*********")
 const [lrn, setLrn] = useState("2025123456")
 const [password, setPassword] = useState("P4$sW0Rd")
 const [school, setSchool] = useState("Sabang Elementary School")
 
  
  const [isDisabled, setIsDisabled] = useState(true);
  

  const OnInput = () => {
    setIsDisabled(!isDisabled);
  }; 

  return (
   
    <div className='m-6  '>
      {/* return botton */}
      <div className=''>
           <Link to= "/">
             <img 
              src={ReturnPic} 
              alt="" 
              className='w-[50px] h-12'/>
           </Link>
      </div>

      <div className=' p-5 flex flex-col  items-center justify-center'>
        <img 
        src={profilePic} 
        alt="" 
        className='w-[138px] h-[138px]'/>
      </div>

      <div>
        <h1 className='font-LG text-4xl pb-8 text-white'>
          Edit Profile
        </h1>


      <div className='flex flex-col gap-8'>
         {/* Full Name */}
        <div className="flex flex-row relative">
          <form className="flex flex-col text-white text-xl  w-full">
            <label className='font-light' htmlFor="name">Full name</label>
            <input 
              type="text" 
              value={name} 
              disabled ={isDisabled}
              onChange={(e) => setName(e.target.value)}
              className='border-b-2 text-xl focus:outline-none focus:ring-2 focus:ring-blue-400'       
            />        
          </form>
           <img 
            src={editPic} 
            alt="" 
            onClick={OnInput}
            className='w-[23px] mt-5 cursor-pointer absolute right-0 h-[23px]'/>  
        </div>


        {/* Phone Number */}
        <div className="flex flex-row relative">
          <form className="flex flex-col text-white text-xl  w-full">
            <label className='font-light' htmlFor="name">Phone Number</label>
            <input 
              type="text" 
              value={pnumber} 
              disabled ={isDisabled}
              onChange={(e) => setPnumber(e.target.value)}
              className='border-b-2 text-xl focus:outline-none focus:ring-2 focus:ring-blue-400'       
            />        
          </form>
           <img 
            src={editPic} 
            alt="" 
            onClick={OnInput}
            className='w-[23px] mt-5 cursor-pointer absolute right-0  h-[23px]'/>    
        </div>

        {/* LRN */}
        <div className="flex flex-row ">
          <form className="flex flex-col text-white text-xl  w-full">
            <label className='font-light' htmlFor="name">LRN</label>
            <input 
              type="text" 
              value={lrn} 
              disabled ={isDisabled}
              onChange={(e) => setLrn(e.target.value)}
              className='border-b-2 text-xl focus:outline-none focus:ring-2 focus:ring-blue-400'       
            />        
          </form>
        </div>


        {/* PASSWORD */}
        <div className="flex flex-row relative">
          <form className="flex flex-col text-white text-xl   w-full">
            <label className='font-light' htmlFor="name">Password</label>
            <input 
             
              value={password} 
              disabled ={isDisabled}
              type ="password"
              onChange={(e) => setPassword(e.target.value)}
              className='border-b-2 text-xl focus:outline-none focus:ring-2 focus:ring-blue-400'       
            />        
          </form>
            <img 
              src={editPic} 
              alt="" 
              onClick={OnInput}
              className='w-[23px] mt-5 cursor-pointer absolute right-0 h-[23px]'/>    
        </div>

         {/* School */}
        <div className="flex flex-row ">
          <form className="flex flex-col text-white text-xl  w-full">
            <label className='font-light' htmlFor="name">School</label>
            <input 
              type="text" 
              value={school} 
              disabled ={isDisabled}
              onChange={(e) => setSchool(e.target.value)}
              className='border-b-2 text-xl focus:outline-none focus:ring-2 focus:ring-blue-400'       
            />        
          </form>

          

        </div>
      </div>


      </div>
      {/*Log out*/}
          <div className='flex justify-center items-center    m-20'>
            <img 
            src={LogoutPic} 
            alt="Log Out" />
          </div>

    </div>
  )
}

export default Account