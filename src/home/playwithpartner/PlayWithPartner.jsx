import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";
import { backBtn, header } from "../../assets/assets";

const PlayWithPartner = () => {
    const navigate = useNavigate();

    // to see which page to go
    const [activeButton, setActiveButton] = useState(null);
    const handleContinue = () => {
        if (activeButton === "generate") {
            navigate("/generate1");
        } else if (activeButton === "scan") {
            navigate("/scan1");
        }
    };

    return (
        <div className="flex justify-center min-h-screen p-6">
            <div className="flex flex-col items-center w-full max-w-[420px]">
                <button className="self-start pb-5 cursor-pointer">
                    <img src={backBtn} alt="Back Button" className="active:brightness-75 active:scale-95" />
                </button>
                <img src={header} />

                {/* main section */}
                <div className="flex flex-col text-center items-center w-full mt-24 gap-7">
                    <h2 className="font-LG text-white text-xl">Choose an invitation method for your partner</h2>

                    {/* button container */}
                    <div className="flex flex-col items-center w-full gap-3 text-sm font-FD text-white">
                        <button
                            className={`py-4 rounded-lg w-[75%] cursor-pointer ${ activeButton === "generate" ? "bg-[#002754] border border-white" : "bg-[#021934]"}`}
                            onClick={() => {setActiveButton(prev => (prev === "generate" ? null : "generate"))}}
                        >Generate Code to Invite</button>
                        <p>or</p>
                        <button
                            className={`rounded-lg w-[75%] py-4 mb-7 cursor-pointer ${ activeButton === "scan" ? "bg-[#002754] border border-white" : "bg-[#021934]"}`}
                            onClick={() => {setActiveButton(prev => (prev === "scan" ? null : "scan"))}}
                        >Scan QR Code to Invite</button>

                        <button
                            onClick={handleContinue}
                            className={`bg-[#2FAA17] rounded-lg w-[75%] py-4 cursor-pointer transition-opacity duration-500 ease-in-out ${activeButton ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                        >Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayWithPartner;