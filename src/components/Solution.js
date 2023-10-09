import React from "react";

export default function Solution({currentSolution, currentColor, setDisplay}) {
  console.log(currentSolution);
  return (
    <div className={`app ${currentColor}`}>
      <div id="solution">
        {currentSolution.map((word) => (
          <div key={word}>{word}</div>
        ))}
      </div>
      <button className="command" onClick={() => setDisplay("home")}>
        Next turn
      </button>
    </div>
  );
}
