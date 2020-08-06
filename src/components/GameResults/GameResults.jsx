import React from 'react';
import './GameResults.css';

function GameResults(props) {

  return (
    <div id="gameResults">
      <h2>Your score: {props.points}</h2>
      <button onClick={() => props.changeState("Menu")}>Home</button>
    </div>
  );
}

export default GameResults;