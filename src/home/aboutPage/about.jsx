import React from 'react';
import { closePic } from "../../assets/assets";
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="relative bg-[#084E99] rounded-xl w-[368px] h-[494px] flex flex-col overflow-hidden">

        {/* Header */}
        <div className="relative bg-[#012F65] rounded-t-xl p-4 flex items-center justify-center w-full shrink-0">
          <h1 className="text-white text-2xl font-LG">About the Game</h1>
          <img
            src={closePic}
            alt="Close"
            className="absolute right-4 cursor-pointer w-6 h-6"
            onClick={() => navigate(-1)}
          />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4 text-white text-center">
          <h1 className="text leading-relaxed whitespace-pre-line">
            {`BaliwagHenyo is an immersive, high-energy educational adventure designed for students from Grade 1 all the way to Grade 10!
              This game transforms traditional study sessions into an epic journey of discovery, tailored to grow with you every step of the way.

              Step into a world where history, culture, and core academic skills come to life through interactive quizzes, brain-bending puzzles, and strategic challenges.

              Project GAME Facilitators

              ROWENA T. QUIAMBAO, CESO VI
              Schools Division Superintendent

              ERWIN JOHN F. SANTOS
              Asst. Schools Division Superintendent

              ARNEL A. USMAN, PhD
              Chief - Curriculum Implementation Division

              ROSALIE S. SANTOS
              Education Program Supervisor - LRMDS

              MELWIN C. SAN PEDRO
              Project Development Officer II - LRMDS

              JENIFER E. CABALLERO
              Division Librarian

              Special Mentions

              Reina Torres-Payongayong, MIT
              Dean, IITI - BTECH

              Florentino Casuco Jr., LPT, MIT
              Program Director, IITI - BTECH

              Game Developers - Group ni Shinra

              John Carlo Alcantara
              Project Manager

              Ryan Dela Cruz
              Backend Developer

              Khian Jewelle Toribio
              Lead Frontend Developer

              John Lenard De Guzman
              Asst. Lead Frontend Developer

              Christian Arvin Garcia
              Frontend Developer

              Justine De Guzman
              Frontend Developer

              Denise Iral
              UI/UX Designer

              Rein Paul Asinas
              UI/UX Designer

              Argie Gatchalian
              UI/UX Designer

              Gerwin Niño
              UI/UX Designer

              Kirsten Shermaine Villaroman
              UI/UX Designer

              John Benedict Garcia
              Document`}
          </h1>
        </div>

        {/* Footer */}
        <div className="p-3 text-white text-end text-sm bg-[#084E99] shrink-0">
          Terms of Service
        </div>

      </div>
    </div>
  );
}

export default About;