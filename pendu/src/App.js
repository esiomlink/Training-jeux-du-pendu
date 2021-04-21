import './App.css';
import GameWindow from './Components/GameWindow';

import { useState } from 'react';

const App = () => {
  const [word, setWord] = useState('superman');

  const [count, setCount] = useState(0);
  const [alphabet, setAlphabet] = useState([
    { letter: 'a', value: 'a', inWord: false, show: false },
    { letter: 'b', value: 'b', inWord: false, show: false },
    { letter: 'c', value: 'c', inWord: false, show: false },
    { letter: 'd', value: 'd', inWord: false, show: false },
    { letter: 'e', value: 'e', inWord: false, show: false },
    { letter: 'f', value: 'f', inWord: false, show: false },
    { letter: 'g', value: 'g', inWord: false, show: false },
    { letter: 'h', value: 'h', inWord: false, show: false },
    { letter: 'i', value: 'i', inWord: false, show: false },
    { letter: 'j', value: 'j', inWord: false, show: false },
    { letter: 'k', value: 'k', inWord: false, show: false },
    { letter: 'l', value: 'l', inWord: false, show: false },
    { letter: 'm', value: 'm', inWord: false, show: false },
    { letter: 'n', value: 'n', inWord: false, show: false },
    { letter: 'o', value: 'o', inWord: false, show: false },
    { letter: 'p', value: 'p', inWord: false, show: false },
    { letter: 'q', value: 'q', inWord: false, show: false },
    { letter: 'r', value: 'r', inWord: false, show: false },
    { letter: 's', value: 's', inWord: false, show: false },
    { letter: 't', value: 't', inWord: false, show: false },
    { letter: 'u', value: 'u', inWord: false, show: false },
    { letter: 'v', value: 'v', inWord: false, show: false },
    { letter: 'w', value: 'w', inWord: false, show: false },
    { letter: 'x', value: 'x', inWord: false, show: false },
    { letter: 'y', value: 'y', inWord: false, show: false },
    { letter: 'z', value: 'z', inWord: false, show: false },
  ]);

  function findLetterInWord() {
    alphabet.forEach((object, index) => {
      const newAlphabet = [...alphabet];
      word.includes(newAlphabet[index].letter)
        ? (newAlphabet[index].inWord = true)
        : (newAlphabet[index].inWord = false);
      setAlphabet(newAlphabet);
    });
  }
  function handleClick(index) {
    const newAlphabet = [...alphabet];
    newAlphabet[index].letter = '_';
    setAlphabet(newAlphabet);
    newAlphabet[index].inWord === true
      ? (newAlphabet[index].show = true)
      : (newAlphabet[index].show = false);

    setCount(count + 1);
  }

  const letters = word.split('');

  const notFoundLetter = letters.map((letter) => (letter = '_'));

  const findObject = alphabet.filter(
    (letter) => letter.show && letters.includes(letter.value)
  );

  const findLetter = findObject.map((e) => e.value);
  const showLetter = notFoundLetter;
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < findLetter.length; j++) {
      if (letters[i] === findLetter[j]) {
        showLetter[i] = findLetter[j];
      }
    }
  }

  return (
    <div id='game'>
      <GameWindow
        handleClick={handleClick}
        showLetter={showLetter}
        alphabet={alphabet}
        setAlphabet={setAlphabet}
        count={count}
        setCount={setCount}
        word={word}
        findLetterInWord={findLetterInWord}
      />
    </div>
  );
};

export default App;
