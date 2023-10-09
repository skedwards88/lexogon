import React from "react";
import {getClue} from "../logic/logic";
import Timer from "./Timer";

export default function Clue({
  currentColor,
  currentLevel,
  setDisplay,
  setSolution,
}) {
  const {clue, solution, description} = getClue({
    color: currentColor,
    level: currentLevel,
  });

  return (
    <div id="clue" className={`app ${currentColor}`}>
      <div>{description}</div>
      <div id="clueLetters">{clue}</div>
      <Timer initialSeconds={90}></Timer>
      <div>
        <button
          className="command"
          onClick={() => {
            setDisplay("home");
          }}
        >
          Solved
        </button>
        <button
          className="command"
          onClick={() => {
            setSolution(solution);
            setDisplay("solution");
          }}
        >
          Give up
        </button>
      </div>
    </div>
  );
}
