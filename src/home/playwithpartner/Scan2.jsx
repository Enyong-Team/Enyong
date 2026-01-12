import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { backBtn, header, qr } from "../../assets/assets";

const Scan2 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/scan3"); // redirect after 2 seconds
      }, 2000);

      return () => clearTimeout(timer); // if user leaves early
      }, [navigate]);

  return (
  <div className="min-h-screen flex justify-center p-6">
    <div className="w-full max-w-[420px] flex flex-col items-center">
      <button className="self-start pb-5 cursor-pointer">
          <Link to="/">
          <img src={backBtn} alt="Back Button" className="active:brightness-75 active:scale-95" />
          </Link>
      </button>
      <img src={header} className="mb-16" />

      {/* main section container */}
      <div className="flex flex-col items-center gap-6 text-[#DDDDDD] font-FD text-xs">
        <h1 className="text-white font-LG text-3xl"> Scan QR Code</h1>
        <p>Place QR Inside the frame to scan </p>
        <img src={qr}/>
        <p>Scanning code...</p>
      </div>
    </div>
  </div>
  )
}

export default Scan2