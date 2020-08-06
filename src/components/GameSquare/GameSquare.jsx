import React from 'react';
import './GameSquare.css';



function GameSquare(props) {
  function handleClick(square) {
    props.handleSquareSelect(square)
  }
  
  return (
  <button disabled={props.playersTurn === 'false'} onClick={() => handleClick(props.index)} className={props.squareColor + " square"} id={props.index}>
  </button>
  );
}

export default GameSquare;