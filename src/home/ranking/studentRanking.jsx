import React, { useState } from "react";
import ReturnBTN from "../../assets/ButtonPIC/returnBtn.png";
import { Link } from "react-router-dom";
import { FirstPlacer, SecondPlacer, ThirdPlacer } from "../../assets/assets";

function StudentRanking() {
  const [expanded, setExpanded] = useState(false);

  const leaderboard = [
    { rank: 1, name: "GERWIN", level: "LVL 45", number: "0969" },
    { rank: 2, name: "REIN", level: "LVL 40", number: "0939" },
    { rank: 3, name: "JB", level: "LVL 38", number: "0962" },
    { rank: 4, name: "GIE", level: "LVL 30", number: "0962" },
    { rank: 5, name: "DENISE", level: "LVL 28", number: "0966" },
    { rank: 6, name: "SHARMIN", level: "LVL 26", number: "0949" },
    { rank: 7, name: "JUSTINE", level: "LVL 25", number: "0959" },
  ];
  return (
    <div className="p-4 overflow-x-hidden ">
      <div>
        <div className="absolute -z-10 w-[90vw] max-w-[648px] h-[596px] bg-[#103F80] 
            rounded-full top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        </div>



        <div>
          <Link to={"/"}>
            <img src={ReturnBTN} alt="return button" />
          </Link>
          <div>
            <h1 className="font-FD text-2xl text-center text-white p-6">
              LEADERBOARD
            </h1>
          </div>
        </div>

        {/*   */}
        {!expanded && (
          <div>
            {/*category ranking*/}
            <div className="font-FD font-light text-white flex justify-center ">
              <button
                className="bg-[#0F3767] text-lg px-6 p-5 rounded-tl-4xl 
                                                rounded-bl-4xl transition cursor-pointer 
                                                hover:bg-green-600 hover:rounded-full active:scale-95 "
              >
                Division
              </button>

              <button
                className="bg-[#0F3767] text-lg px-8 p-1
                                                transition cursor-pointer 
                                                hover:bg-green-600 hover:rounded-full active:scale-95"
              >
                District
              </button>

              <button
                className="bg-[#0F3767] text-lg px-6 p-2 rounded-tr-4xl 
                                                rounded-br-4xl transition cursor-pointer 
                                                hover:bg-green-600 hover:rounded-full active:scale-95 "
              >
                School
              </button>
            </div>

            {/*ranking stage ahahah*/}
            <div className="flex justify-center items-end">

                <div className="text-white font-FD flex flex-col item-end ">
                    <div className="flex flex-col items-center justify-center rounded-xl  py-3">
                            {/* Rank */}
                            <span className="bg-gray-400 p-3 px-5 rounded-t-2xl text-sm">
                                21
                            </span>

                            {/* Profile Picture */}
                            <img
                                src={SecondPlacer}
                                alt="Gerwin"
                                className="w-25 h-25 rounded-full object-cover -mt-3"
                            />

                            {/* Name */}
                            <span className="">
                                GERWIN
                            </span>
                     </div>


                    <img
                        src={SecondPlacer}
                        alt="second place"
                        className="h-[133px] w-[120px]"
                    />
                </div>

                <div  className="text-white font-FD ">
                    <div className="flex flex-col items-center justify-center rounded-xl  py-3">
                         {/* Rank */}
                            <span className="bg-gray-400 p-3 px-5 rounded-t-2xl text-sm">
                                45
                            </span>

                            {/* Profile Picture */}
                            <img
                                src={FirstPlacer}
                                alt="Gerwin"
                                className="w-25 h-25 rounded-full object-cover -mt-3"
                            />

                            {/* Name */}
                            <span className="">
                                REIN
                            </span>
                    </div>

                        <img
                            src={FirstPlacer}
                            alt="first place"
                            className="h-[155px] w-[126px]"
                        />
                </div>
              
                <div className="text-white font-FD ">
                    <div className="flex flex-col items-center justify-center rounded-xl  py-3">
                         {/* Rank */}
                            <span className="bg-gray-400 p-3 px-5 rounded-t-2xl text-sm">
                                14
                            </span>

                            {/* Profile Picture */}
                            <img
                                src={ThirdPlacer}
                                alt="Gerwin"
                                className="w-25 h-25 rounded-full object-cover  -mt-3 "
                            />

                            {/* Name */}
                            <span className="">
                                JB
                            </span></div>
                    <img
                        src={ThirdPlacer}
                        alt="third place"
                        className="h-[110px] w-[118px]"
                    />
                </div>
            </div>
          </div>
        )}

        <div className="items-center flex justify-center ">
          <div
            className={`w-full max-w-md items-center bg-[#3976A5] rounded-t-3xl transition-all 
                                    duration-500 overflow-hidden -mt-2 font-FD  ${
                                      expanded ? "h-[80vh]" : "h-[45vh]"
                                    }`}
          >
            {/* Drag Handle */}
            <div
              className="w-12 h-1.5 bg-[#021934] rounded-full mx-auto my-3 cursor-pointer"
              onClick={() => setExpanded(!expanded)}
            />

            {/* List */}
            <div className="bg-[#3976A5] rounded-t-3xl p-4 h-full overflow-y-auto">
              {leaderboard.slice(expanded ? 0 : 3).map((user) => (
                <div
                  key={user.rank}
                  className="flex items-center justify-between bg-white rounded-xl px-4 py-3 mb-3"
                >
                  <div className="flex items-center gap-3">
                    <span className=" text-[#404040]">{user.rank}</span>
                    <div className="w-8 h-8 bg-gray-300 rounded-full" />
                    <span className=" text-[#084A97]">
                      {user.name}
                      <p className="text-black text-xs">{user.number}</p>
                    </span>
                  </div>
                  <span className="text-[#FC9B00] font-bold text-sm">
                    {user.level}
                  </span>
                </div>
              ))}

              {!expanded && (
                <button
                  onClick={() => setExpanded(true)}
                  className="w-full text-center text-white text-sm mt-2"
                >
                  View Full Leaderboard
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentRanking;
