import React from "react";
import { useState } from "react";
import TotalScore from "./TotalScore";
import { useRef } from "react";

const GamePlayHeader = ({
  setError,
  error,
  selected_number,
  setSelected_number,
  score,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const prevButtonRef = useRef(null);

  const handleButtonClick = (e, value) => {
    if (prevButtonRef.current) {
      prevButtonRef.current.style.backgroundColor = "";
      prevButtonRef.current.style.color = "";
    }
    e.target.style.backgroundColor = "black";
    e.target.style.color = "white";
    setSelected_number(value);
    setError("");
    prevButtonRef.current = e.target;
  };

  return (
    <div>
      <div className="flex justify-around items-center w-screen h-[151px] mt-[20px] ">
        <div className="flex flex-col justify-center items-center">
          <TotalScore score={score} />
        </div>

        <div className="flex gap-[24px] flex-col">
          <h1 className="text-red-600 font-semibold text-[24px]">{error}</h1>
          <div className="flex gap-[24px]">
            {arrNumber.map((value, i) => (
              <button
                key={i}
                className={`w-[72px] h-[72px] border border-black hover:bg-black hover:text-white 
                   `}
                onClick={(e) => handleButtonClick(e, value)}
              >
                {value}
              </button>
            ))}
          </div>

          <div>
            <p className="text-[24px] font-bold">Select Number</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePlayHeader;
