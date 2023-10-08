import React from "react";
import {getClue} from "../logic/logic";

export default function Clue({currentColor, currentLevel, setDisplay, setSolution}) {
  const {clue, solution, description} = getClue({color: currentColor, level: currentLevel});

  return (
    <div id="clue" className={`app ${currentColor}`}>
      <div>{description}</div>
      <div id="clueLetters">{clue}</div>
      <button className="command" onClick={() => {
        setSolution(solution);
        setDisplay("solution")
        }}>
        Give up
      </button>
    </div>
  );
}
