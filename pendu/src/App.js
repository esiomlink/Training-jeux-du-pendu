import React from 'react';
import './App.css';
import Keyboard from './Components/Keyboard';


const App = () => {
  const words =["wordpress","gare","train"];
  const [word, setWord] = React.useState("");
  // const [win,setWin] = React.useState(0)
  // let attempt = 0;




  
  return (
    <div id="game">
      <h1>Pendu</h1>
      <div>{word}</div>
      <Keyboard />
      <button className="game" onClick={() => setWord(words[1])}>newGame</button>
    </div>
  );

}

export default App;

