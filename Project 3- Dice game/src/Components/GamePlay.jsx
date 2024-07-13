import React from "react";
import RoleDice from "./RoleDice";
import GamePlayHeader from "./GamePlayHeader";
import { useState } from "react";
import ShowRules from "./ShowRules";

const GamePlay = () => {
  const [selected_number, setSelected_number] = useState(null);
  const [currDice, setCurrDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, setshowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roll_dice = () => {
    if (selected_number === null) {
      setError("You have not selected any number");
      return;
    }
    setError("");
    const randomNumber = generateRandomNumber(1, 7);
    setCurrDice(randomNumber);

    if (currDice === selected_number) {
      setScore(score + selected_number);
    } else {
      setScore(score - 2);
    }
  };

  const reset = () => {
    setScore(0);
    setSelected_number(null);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Game Header */}
      <GamePlayHeader
        error={error}
        setError={setError}
        selected_number={selected_number}
        setSelected_number={setSelected_number}
        score={score}
      />
      <div className="flex flex-col gap-[20px] items-center mt-[20px]">
        {/* //Roll dice */}
        <RoleDice currDice={currDice} roll_dice={roll_dice} />
        <h4 className="text-[24px] font-medium">Click on Dice to roll</h4>

        <button
          className="w-[220px] h-[44px] border border-black font-semibold"
          onClick={reset}
        >
          Reset Scores
        </button>
        <button
          onClick={() => setshowRules(!showRules)}
          className="w-[220px] h-[44px] bg-black text-white font-semibold"
        >
          {showRules ? "Hide" : "Show"} Rules
        </button>
        {showRules && <ShowRules />}
      </div>
    </div>
  );
};

export default GamePlay;
