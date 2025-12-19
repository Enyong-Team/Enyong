import { useNavigate } from "react-router-dom";
import { backBtn, header, profileLg } from "../../assets/assets";

const Scan3 = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex justify-center py-6 px-7 bg-[#084A97]">
            <div className="w-full max-w-[420px] flex flex-col items-center">
                {/* back button */}
                <button className="self-start pb-5">
                <img
                    src={backBtn}
                    className="active:brightness-75 active:scale-95"
                    onClick={() => navigate(-1)}
                />
                </button>
                
                <img src={header} alt="header" />

                {/* main section container */}
                <div className="flex flex-col w-[90%] mt-16 mb-7 text-white rounded-3xl shadow-[0_6px_20px_rgba(0,0,0,0.45)]">
                    {/* GREEN TOP */}
                    <div className="flex flex-col items-center relative pt-16 pb-3 text-white bg-[#30AD17] rounded-t-3xl">
                        <img
                            src={profileLg}
                            className="absolute -top-14 w-28 h-28 rounded-full"
                        />
                        <h2 className="font-LG text-xl">GERWIN NYAW</h2>
                    </div>
                    {/* BLUE BOTTOM */}
                    <div className="min-h-72 py-4 px-5 font-LG bg-[#004C99] rounded-b-3xl">
                        <h2 className="mb-6 text-lg text-center">Details</h2>
                        <div className="flex pb-3 px-6 font-FD text-xs mb-4 border-b border-[#30AD17]">
                            <p className="w-[30%]">LRN</p>
                            <p>105115 120415</p>    
                        </div>
                        <div className="flex pb-3 px-6 font-FD text-xs mb-4 border-b border-[#30AD17]">
                            <p className="w-[30%]">School</p>
                            <p>eme eme</p>
                        </div>
                    </div>
                </div>
                <button
                    className="font-LG text-2xl text-white cursor-pointer bg-green-600 active:scale-95 shadow-[inset_10px_10px_20px_rgba(0,0,0,0.25),inset_-10px_-10px_20px_rgba(0,0,0,0.25)] rounded-xl w-[80%] py-2"
                >Invite</button>
            </div>
        </div>
    )
}

export default Scan3;