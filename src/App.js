import './style.css';
import StartingScreen from './StartingScreen';
import { useState } from 'react';
import Game from "./Game"

function App() {
  const [start, setStart] = useState(true)
  return (
      <>
        {start && <StartingScreen setStart={setStart} />}
        {!start && <Game />}
        <div id='space-invader'></div>
        <div id='pacman'></div>
      </>
    );
}

export default App;
