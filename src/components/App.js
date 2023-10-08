import React from "react";
import Home from "./Home";
import Clue from "./Clue";
import Solution from "./Solution";

export default function App() {
  const [display, setDisplay] = React.useState("home");
  const [currentColor, setColor] = React.useState("gray");
  const [currentLevel, setLevel] = React.useState(1);
  const [currentSolution, setSolution] = React.useState([]);

  switch (display) {
    case "clue":
      return (
        <Clue
          currentColor={currentColor}
          currentLevel={currentLevel}
          setDisplay={setDisplay}
          setSolution={setSolution}
        ></Clue>
      );
    case "solution":
      return (
        <Solution
        currentSolution={currentSolution}
        currentColor={currentColor}
        setDisplay={setDisplay}>
        </Solution>
      )
    default:
      return (
        <Home
          setColor={setColor}
          setLevel={setLevel}
          setDisplay={setDisplay}
          currentColor={currentColor}
          currentLevel={currentLevel}
        ></Home>
      );
  }
}
