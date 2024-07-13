import React from "react";

const StartGame = ({ toggle }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <img src="/images/dices.png" alt="" />
      <div>
        <h1 className="text-8xl font-bold">DICE GAME</h1>
        <button
          className="bg-black text-white w-[220px] h-[34px] border-none"
          onClick={toggle}
        >
          Play Now
        </button>
      </div>
    </div>
  );
};

export default StartGame;
