import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { backBtn, header, profileSm } from "../../assets/assets";

const Generate1 = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/generate2"); // redirect after 2 seconds
      }, 2000);

      return () => clearTimeout(timer); // if user leaves early
      }, [navigate]);

  // const generateRoomCode = () => {
  //   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  //   let code = "";

  //   for (let i = 0; i < 6; i++) {
  //     code += chars[Math.floor(Math.random() * chars.length)];
  //   }

  //   return code;
  // };

  // const [roomCode, setRoomCode] = useState("");
  // useEffect(() => {
  //   setRoomCode(generateRoomCode());
  // }, []);

  return (
  <div className="min-h-screen flex justify-center p-6">
    <div className="w-full max-w-[420px] flex flex-col items-center">
      <button className="self-start pb-5" onClick={() => navigate(-1)}>
        <img src={backBtn} className="active:brightness-75 active:scale-95" />
      </button>
      <img src={header} />

      {/* main section container */}
      <div className="w-full flex flex-col items-center mt-3.5 space-y-3">

        {/* code section */}
        <div className="text-center font-FD text-white px-2 py-3.5 rounded-lg bg-[#30AD17]">
          <h2 className="text-3xl mb-3 tracking-wider">OKS123</h2>
          <p>Share your room code with your partner</p>
          <p>or</p>
          <input
            className="p-3 mt-2 mx-auto bg-white border border-[#BFBEB9] rounded-lg placeholder:text-[#818181] placeholder:text-sm font-IN text-black outline-none"
            type="text" placeholder="Enter Your Partner Code to Join" maxlength="6"
          />
        </div>

        {/* versus section */}
        <div className="flex flex-col items-center font-FD text-white rounded-2xl space-y-2">
          <p className="text-[#30AD17] ">You</p>

          {/* player info container */}
          <div className="flex items-center w-full gap-3 pl-2 bg-[#021934] rounded-2xl">
            {/* left side */}
            <div className="text-center text-[#30AD17]">123</div>
            {/* right side */}
            <div className="flex items-center text-center p-2 gap-3 font-IN m-0.5 rounded-r-2xl rounded-l-4xl bg-[#084A97]">
              <img src={profileSm} alt="profile picture" />
              <div className="grid grid-cols-[auto_auto_1fr] gap-x-2 gap-y-1 items-center">
                <span>Name</span>
                <span>:</span>
                <span>Gerwin Nyaw</span>
                <span>LRN</span>
                <span>:</span>
                <span>105115 120415</span>
              </div>
            </div>
          </div>
          <p>vs</p>
          <p>Waiting for your partner to join...</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Generate1;