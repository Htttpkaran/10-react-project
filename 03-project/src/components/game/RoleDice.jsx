import React, { useContext, useState } from "react";
import dice1 from "../../image/game/dice_1.png";
import dice2 from "../../image/game/dice_2.png";
import dice3 from "../../image/game/dice_3.png";
import dice4 from "../../image/game/dice_4.png";
import dice5 from "../../image/game/dice_5.png";
import dice6 from "../../image/game/dice_6.png";
import { GameContext } from "../../context/GameContext";

const RoleDice = () => {
  const [currentDice, setCurrentDice] = useState(1);
  const { selectedNumber, setScore } = useContext(GameContext);

  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const handleClick = () => {
    if (selectedNumber === null) return;

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
  };
  return (
    <>
      <img
        src={diceImages[currentDice - 1]}
        className="cursor-pointer"
        onClick={handleClick}
      />
    </>
  );
};

export default RoleDice;
