import React from "react";
import { useState } from "react";

const RoleDice = ({ currDice, roll_dice }) => {
  return (
    <>
      <img
        className="w-[250px] h-[250px]"
        onClick={roll_dice}
        src={`/images/dice/dice_${currDice}.png`}
        alt=""
      />
    </>
  );
};

export default RoleDice;
