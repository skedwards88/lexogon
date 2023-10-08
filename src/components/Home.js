import React from "react";

function ColorButton({color, setColor, currentColor}) {
  const selected = currentColor === color;
  const className = `${color} ${selected ? "selected" : ""}`;
  return (
    <button className={className} onClick={() => setColor(color)}>
      {color}
    </button>
  );
}

function LevelButton({level, setLevel ,currentLevel}) {
  const selected = currentLevel === level;
  const className = `${selected ? "selected" : ""}`;
  return <button className={className} onClick={() => setLevel(level)}>{level}</button>;
}
export default function Home({setColor, setLevel, setDisplay, currentColor, currentLevel}) {
  const colors = [
    "gray",
    "orange",
    "yellow",
    "pink",
    "blue",
    "green",
    "purple",
  ];
  const levels = [1, 2, 3, 4, 5];
  const colorButtons = colors.map((color) => (
    <ColorButton
      key={color}
      color={color}
      setColor={setColor}
      currentColor={currentColor}
    ></ColorButton>
  ));
  const levelButtons = levels.map((level) => (
    <LevelButton key={level} level={level} setLevel={setLevel} currentLevel={currentLevel}></LevelButton>
  ));

  return (
    <div className="app">
      <div id="colors">{colorButtons}</div>
      <div id="levels">{levelButtons}</div>
      <button className="command" onClick={() => setDisplay("clue")}>
        Go!
      </button>
    </div>
  );
}
