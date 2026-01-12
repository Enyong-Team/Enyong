import { Link, useNavigate } from "react-router-dom";
import "../../index.css";
import { backBtn, header, profileLg, myQr } from "../../assets/assets";

const Scan1 = () => {
  const navigate = useNavigate();
  
  return (
  <div className="min-h-screen flex justify-center py-6 px-7">
    <div className="w-full max-w-[420px] flex flex-col items-center">
      <button className="self-start pb-5 cursor-pointer">
          <Link to="/">
          <img src={backBtn} alt="Back Button" className="active:brightness-75 active:scale-95" />
          </Link>
      </button>
      <img src={header} className="mb-16" />

      {/* main section container */}
      <div className="flex flex-col items-center relative w-[90%] pt-16 pb-11 px-11 mb-7 bg-[#30AD17] rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        <img src={profileLg} className="absolute -top-14" />
        <h2 className="font-LG mb-2.5 text-white text-xl">Gerwin Nyaw</h2>
        <p className="font-FD mb-5 text-xs text-[#DDDDDD]">Scan My QR Code</p>

        {/* container of qr */}
        <div className="p-5 rounded-3xl bg-[#D9D9D9]">
          <img src={myQr} alt="QR Code" />
        </div>
      </div>
      <button
        onClick={() => navigate("/scan2")}
        className="w-[80%] py-2 font-LG text-2xl text-white rounded-xl cursor-pointer bg-green-600 active:scale-95 shadow-[inset_10px_10px_20px_rgba(0,0,0,0.25),inset_-10px_-10px_20px_rgba(0,0,0,0.25)]"
      >Scan Code</button>
    </div>
  </div>
  )
}

export default Scan1;