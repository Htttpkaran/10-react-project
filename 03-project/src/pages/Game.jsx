import React, { useState } from "react";
import Top from "../components/game/Top";
import Middle from "../components/game/Middle";
import { GameContext } from "../context/GameContext";

const Game = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);

  return (
    <GameContext.Provider value={{ score, setScore, selectedNumber, setSelectedNumber }}>
      <div className="h-screen w-full ">
        {/* top section */}
        <Top />

        {/* middle section */}
        <Middle />
      </div>
    </GameContext.Provider>
  );
};

export default Game;
