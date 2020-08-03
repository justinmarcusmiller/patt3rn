import React from 'react';
import './GameMenu.css';

function GameMenu(props) {

  return (
    <div id="gameMenu">
      <ul>
        <li>
          <button onClick={() => props.onChange('easy')}>Easy</button>
        </li>
        <li>
          <button onClick={() => props.onChange('medium')}>Medium</button>
        </li>
        <li>
          <button onClick={() => props.onChange('hard')}>Hard</button>
        </li>
      </ul>
    </div>
  );
}

export default GameMenu;