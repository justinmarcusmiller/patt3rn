import React, { useEffect, useState } from "react";
import "./GameDisplay.css";
import GameMenu from "../GameMenu/GameMenu.jsx";
import GameGrid from "../GameGrid/GameGrid.jsx";
import GameResults from "../GameResults/GameResults.jsx";

function GameDisplay() {
  const [gameState, setGameState] = useState("Menu");
  const [points, setPoints] = useState(0);

  function handleGameStateChange(newValue) {
    setGameState(newValue);
  }

  function pointsChange(points) {
    setPoints(points);
  }

  if (gameState === "Menu") {
    return (
      <div id="gameDisplay">
        <GameMenu gameState={gameState} onChange={handleGameStateChange} pointsChange={pointsChange}/>
      </div>
    );
  } else if (gameState === "Easy") { // change to text
    return (
      <div id="gameDisplay">
        <GameGrid difficulty={4} changeState={handleGameStateChange} pointsChange={pointsChange}/>
      </div>
    );
  } else if (gameState === "Medium") {
    return (
      <div id="gameDisplay">
        <GameGrid difficulty={6} onChange={handleGameStateChange} pointsChange={pointsChange}/>
      </div>
    );
  } else if (gameState === "Hard") {
    return (
      <div id="gameDisplay">
        <GameGrid difficulty={8} onChange={handleGameStateChange} pointsChange={pointsChange}/>
      </div>
    );
  } else if (gameState === "Results"){
    return (
      <div id="gameResults">
        <GameResults points={points}  changeState={handleGameStateChange}/>
      </div>
    );
  }
}

export default GameDisplay;
