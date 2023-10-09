import React from "react";

export default function Info({setDisplay}) {
  return (
    <div className="app">
      <div id="info">{`This app is meant to accompany the Lexogon board game to provide easier clue options.\n\nFor easier clues, select a lower number.`}</div>
      <button className="command" onClick={() => setDisplay("home")}>
        Return to game
      </button>
    </div>
  );
}
