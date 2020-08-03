import React from 'react';
import './GameSquare.css';

function GameSquare(props) {
  return (
  <div class="square" id={props.squareColor}>
    <p>{props.squareColor}</p>
  </div>
  );
}

export default GameSquare;