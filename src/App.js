import React from 'react';
import './index.css';
import GameTitle from './components/GameTitle/GameTitle.jsx';
import GameDisplay from './components/GameDisplay/GameDisplay.jsx';

function App() {
  return (
    <div id="App">
      <GameTitle />
      <GameDisplay />
    </div>
  );
}

export default App;
