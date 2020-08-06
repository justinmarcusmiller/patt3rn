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
          <button onClick={() => props.onChange(6)}>Medium</button>
        </li>
        <li>
          <button onClick={() => props.onChange(8)}>Hard</button>
        </li>
      </ul>
    </div>
  );
}

export default GameMenu;