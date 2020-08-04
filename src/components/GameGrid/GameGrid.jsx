import React from 'react';
import './GameGrid.css';
import GameSquare from "../GameSquare/GameSquare.jsx";
import { useState } from 'react';
import { useEffect } from 'react';

function GameGrid(props) {
  const [gridLayout, setGridLayout] = useState([]);
  const [pattern, setPattern] = useState([]);
  const [turn, setTurn] = useState('cpu');
  const [playerPattern, setPlayerPattern] = useState([]);

  useEffect(() => {
    if (props.difficulty === "easy") {
      setGridLayout(['red', 'white', 'light-blue', 'green']);
      genPattern(4)
    } else if (props.difficulty === "medium") {
      setGridLayout(['red', 'white', 'blue', 'light-blue', 'green', 'purple']);
    } else if (props.difficulty === "hard") {
      setGridLayout(['red', 'white', 'blue', 'light-blue', 'green', 'purple', 'yellow', 'gray', 'orange']);
    }
    //console.log(gridLayout);
  }, [])

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Generate pattern for player to follow
  function genPattern(difficulty) {
    for(let i = 0; i < difficulty; i++) {
      setPattern(pattern => pattern.concat(Math.floor((Math.random() * 4))));
    }
    //console.log(gridLayout);
    //console.log(pattern);
  }

  // Show pattern on squares
  async function showPattern() {
    //console.log(gridLayout);
    //console.log(pattern)
    for(let i = 0; i < pattern.length; i++) {
      await sleep(1000)
        //Light up square;
        .then(() => {document.getElementById(pattern[i]).style.opacity="0.5"})
        //Wait
        .then(() => sleep(1000))
        //Unlight square
        .then(() => {document.getElementById(pattern[i]).style.opacity="1"});
    }
    await sleep(1000)
      .then(() => {alert("Player's Turn!")})
      .then(() => playerTurn());
  }

  function playerTurn() {
    setTurn('player')
    console.log("player's turn")
  }

  return (
    <div id="gameGrid" >
      {gridLayout.map((gridSquare) => {
        return (
          <GameSquare key={gridLayout.indexOf(gridSquare)} index={gridLayout.indexOf(gridSquare)} squareColor={gridSquare} />
        )
      })}
      <button id="start-btn" onClick={() => showPattern()}>Start Game</button>
    </div>
  );
}

export default GameGrid;