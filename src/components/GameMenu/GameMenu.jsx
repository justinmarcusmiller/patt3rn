import React from 'react';
import './GameMenu.css';

function GameMenu(props) {

  return (
    <div id="gameMenu">
      <ul>
        <li>
          <button onClick={() => props.onChange("Easy")}>Easy</button>
        </li>
        <li>
          <button onClick={() => props.onChange("Medium")}>Medium</button>
        </li>
        <li>
          <button onClick={() => props.onChange("Hard")}>Hard</button>
        </li>
      </ul>
    </div>
  );
}

export default GameMenu;