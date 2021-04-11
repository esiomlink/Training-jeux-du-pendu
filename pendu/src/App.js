import React from 'react';
import './App.css';
import Keyboard from './Components/Keyboard';


const App = () => {
  const words =["wordpress","gare","train"];
  const [word, setWord] = React.useState("");

  const [alphabet, setAlphabet] = React.useState([
    { letter: 'a',inWord:false},
    { letter: 'b',inWord:false},
    { letter: 'c',inWord:false},
    { letter: 'd',inWord:false},
    { letter: 'e',inWord:false},
    { letter: 'f',inWord:false},
    { letter: 'g',inWord:false},
    { letter: 'h',inWord:false},
    { letter: 'i',inWord:false},
    { letter: 'j',inWord:false},
    { letter: 'k',inWord:false},
    { letter: 'l',inWord:false},
    { letter: 'm',inWord:false},
    { letter: 'n',inWord:false},
    { letter: 'o',inWord:false},
    { letter: 'p',inWord:false},
    { letter: 'q',inWord:false},
    { letter: 'r',inWord:false},
    { letter: 's',inWord:false},
    { letter: 't',inWord:false},
    { letter: 'u',inWord:false},
    { letter: 'v',inWord:false},
    { letter: 'w',inWord:false},
    { letter: 'x',inWord:false},
    { letter: 'y',inWord:false},
    { letter: 'z',inWord:false},
  ]);
  
  // const findWordLetter=(props)=>{
  //   props.letter.forEach((letters)=> letters.letter===[...word])
  //   console.log(props.inWord)
  // }
  // findWordLetter()



  
  return (
    <div id="game">
      <h1>Pendu</h1>
      <div>{word}</div>
      <Keyboard alphabet={alphabet} setAlphabet={setAlphabet} />
      <button className="game" onClick={() => setWord(words[1])}>newGame</button>
    </div>
  );

}

export default App;

