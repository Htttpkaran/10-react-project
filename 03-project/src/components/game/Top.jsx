

import { useContext } from "react";
import NumberBox from "./NumberBox";
import { GameContext } from "../../context/GameContext";

const Top = () => {
  const { score } = useContext(GameContext);

  return (
    <div className=" h-[20%] w-full flex justify-between items-center px-20 py-5">
      <div className="left flex flex-col items-center">
        <h1 className="text-7xl font-semibold">{score}</h1>
        <p className="text-lg font-medium">Total Score</p>
      </div>
      <NumberBox />
    </div>
  );
};

export default Top;
