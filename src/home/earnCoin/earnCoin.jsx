import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ReturnBTN, EarnCoinLogo, PlayBTN, Trophy } from "../../assets/assets";

/*  Get total days in the current month */
const getDaysInMonth = (year, month) =>
  new Date(year, month + 1, 0).getDate();

function earnCoin() {
  /* Get today's date */
  const today = new Date();

  /* First day of the current month */
  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  /* Extract date values */
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);

  /* Format month name */
  const monthName = currentDate
    .toLocaleString("default", { month: "long" })
    .toUpperCase();

  /* Navigate between months */
  const prevMonth = () =>
    setCurrentDate(new Date(year, month - 1, 1));

  const nextMonth = () =>
    setCurrentDate(new Date(year, month + 1, 1));

  return (
    /* Page Wrapper */
    <div className="min-h-screen flex flex-col">

      {/* ===================== */}
      {/* TOP SECTION */}
      {/* RETURN | LOGO | TROPHY */}
      {/* ===================== */}
      <div className="p-3 space-y-5">

            {/* Return Button */}
            <Link to="/">
            <img src={ReturnBTN} alt="Return Button" />
            </Link>

            {/* Earn Coin Logo */}
            <div className="flex justify-center items-center pt-5">
            <img src={EarnCoinLogo} alt="Earn Coin Logo" />
            </div>

            {/* Trophy Image */}
            <div className="flex justify-center items-center">
            <img src={Trophy} alt="Trophy" />
            </div>

      </div>


      {/* ===================== */}
      {/* CALENDAR SECTION */}
      {/* ===================== */}
      <div className="mt-auto w-full h-[60vh] overflow-hidden bg-white shadow-2xl">

            <div className="p-6 w-full font-LG text-xl">

                {/* Month Navigation */}
                <div className="flex items-center justify-center gap-6 mb-4 text-gray-800">
                    <button onClick={prevMonth}>‹</button>
                    <span>{monthName}</span>
                    <button onClick={nextMonth}>›</button>
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-5 text-center">
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;

                    /* Check if today */
                    const isToday =
                        day === today.getDate() &&
                        month === today.getMonth() &&
                        year === today.getFullYear();

                    /* Check if past day */
                    const isPast =
                        new Date(year, month, day) <
                        new Date(
                        today.getFullYear(),
                        today.getMonth(),
                        today.getDate()
                        );

                    return (
                        <div
                        key={day}
                        className={`w-9 h-9 flex items-center justify-center rounded-full text-xl
                            ${
                            isToday
                                ? "bg-[#2FAA17] text-white"
                                : isPast
                                ? "text-[#30AD17]"
                                : "text-[#084A97]"
                            }`}
                        >
                        {day}
                        </div>
                    );
                    })}
                </div>

                {/* Play Button */}
                <div className="mt-8 flex justify-center">
                    <img
                    src={PlayBTN}
                    alt="Play"
                    className="cursor-pointer active:scale-95"
                    />
                </div>

            </div>

      </div>

    </div>
  );
}

export default earnCoin;
