import React from 'react';
import './GameGrid.css';
import GameSquare from "../GameSquare/GameSquare.jsx";
import { useState } from 'react';
import { useEffect } from 'react';

function GameGrid(props) {
  const [gridLayout, setGridLayout] = useState([]);

  useEffect(() => {
    if (props.difficulty === "easy") {
      setGridLayout(['red', 'white', 'light-blue', 'green']);
    }
    console.log(gridLayout);
  }, [])
  return (
    <div id="gameGrid">
      {gridLayout.map((gridSquare) => {
        return (
          <GameSquare squareColor={gridSquare} />
        )
      })}
    </div>
  );
}

export default GameGrid;