import React, { useEffect, useState } from "react";
import "./GameDisplay.css";
import GameMenu from "../GameMenu/GameMenu.jsx";
import GameGrid from "../GameGrid/GameGrid.jsx";

function GameDisplay() {
  const [gameState, setGameState] = useState("menu");

  function handleGameStateChange(newValue) {
    setGameState(newValue);
  }

  if (gameState === "menu") {
    return (
      <div id="gameDisplay">
        <GameMenu gameState={gameState} onChange={handleGameStateChange} />
      </div>
    );
  } else if (gameState === "easy") {
    return (
      <div id="gameDisplay">
        <GameGrid difficulty={gameState}/>
      </div>
    );
  } else if (gameState === "medium") {
    return (
      <div id="gameDisplay">
        <GameGrid difficulty={gameState}/>
      </div>
    );
  } else if (gameState === "hard") {
    return (
      <div id="gameDisplay">
        <GameGrid difficulty={gameState}/>
      </div>
    );
  } else {
    return null;
  }
}

export default GameDisplay;
