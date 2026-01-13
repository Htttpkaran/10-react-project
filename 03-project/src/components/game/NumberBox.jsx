import React, { useContext } from "react";
import { GameContext } from "../../context/GameContext";

const NumberBox = () => {
  const { selectedNumber, setSelectedNumber } = useContext(GameContext);
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const handleClick = (value) => {
    setSelectedNumber(value);
  };

  return (
    <div className="right ">
      <p className="flex justify-end text-red-500 font-medium text-lg mb-1">
        {selectedNumber === null ? "You have not selected any number" : ""}
      </p>
      <div className="flex gap-4">
        {arrNumber.map((num) => {
          return (
            <ul
              key={num}
              className={`py-2 px-4 border font-bold text-lg ${selectedNumber === num ? "bg-black text-white" : "bg-white text-black"}  cursor-pointer`}
              onClick={() => handleClick(num)}
            >
              {num}
            </ul>
          );
        })}
      </div>
      <div className="flex justify-end mt-3">
        <h3 className="font-bold text-lg">Select Number</h3>
      </div>
    </div>
  );
};

export default NumberBox;
