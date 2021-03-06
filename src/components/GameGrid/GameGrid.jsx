import React from "react";
import "./GameGrid.css";
import GameSquare from "../GameSquare/GameSquare.jsx";
import { useEffect } from "react";
import { useState } from "react";

function GameGrid(props) {
  const [gridLayout, setGridLayout] = useState([]);
  const [pattern, setPattern] = useState([]);
  const [playersTurn, setPlayersTurn] = useState("false");
  const [startBtnClickable, setStartBtnClickable] = useState("true");
  let [patternPos, setPatternPos] = useState(0);
  let [points, setPoints] = useState(0);
  let [turnNumber, setTurnNumber] = useState(0);

  useEffect(() => {
    console.warn("Re-Rendering GameGrid")
    if (props.difficulty === 4) {
      setGridLayout(["red", "white", "light-blue", "green"]);
    } else if (props.difficulty === 6) {
      setGridLayout(["red", "white", "blue", "light-blue", "green", "purple"]);
    } else if (props.difficulty === 8) {
      setGridLayout([
        "red",
        "white",
        "blue",
        "light-blue",
        "green",
        "purple",
        "yellow",
        "gray",
        "orange",
      ]);
    } else {
      console.error("Invalid Difficulty")
    }
  }, [props.difficulty]);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Generate pattern for player to follow
  function genPattern() {
    setStartBtnClickable("false");
    setTurnNumber((turnNumber += 1));
    let a = pattern; // set to value of pattern?
    a.push(Math.floor(Math.random() * props.difficulty));
    setPattern(a);
    showPattern(a);
  }

  // Show pattern on squares
  async function showPattern(array) {
    for (let i = 0; i < array.length; i++) {
      await sleep(500)
        //Light up square;
        .then(() => {
          document.getElementById(array[i]).style.opacity = "0.5";
        })
        //Wait
        .then(() => sleep(500))
        //Unlight square
        .then(() => {
          document.getElementById(array[i]).style.opacity = "1";
        });
    }
    await sleep(500)
      .then(() => {
        alert("Player's Turn!");
        setPattern(array);
      })
      .then(() => playerTurn());
  }

  function playerTurn() {
    setPatternPos(0);
    setPlayersTurn("true");
  }

  function handleSquareSelect(square) {
    if (pattern[patternPos] === square) {
      setPatternPos((patternPos += 1));
    } else if (pattern[patternPos] !== square) {
      // Reset
      setPatternPos(0);
      // Cpu turn
      setPlayersTurn("false");
      alert("You Lost")
      props.pointsChange(points);
      // Show score
      props.changeState("Results");
    }

    if (patternPos === pattern.length) {
      console.log("You win!");
      setPoints((points += 1));
      // Reset patternPos
      setPatternPos(0);
      // Cpu turn
      setPlayersTurn("false");
      alert("Computer's Turn");
      genPattern();
    }
  }

  return (
    <div id="gameGrid">
      {gridLayout.map((gridSquare) => {
        return (
          <GameSquare
            key={gridLayout.indexOf(gridSquare)}
            index={gridLayout.indexOf(gridSquare)}
            squareColor={gridSquare}
            playersTurn={playersTurn}
            handleSquareSelect={handleSquareSelect}
          />
        );
      })}
      <button disabled={startBtnClickable === "false"} id="start-btn" onClick={() => genPattern()}>
        Start Game
      </button>
    </div>
  );
}

export default GameGrid;
