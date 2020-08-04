import React from 'react';
import './GameSquare.css';

function GameSquare(props) {
  return (
  <div className={props.squareColor + " square"} id={props.index}>
  </div>
  );
}

export default GameSquare;