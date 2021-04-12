import React from 'react';

const Keyboard = (props) => {
  const { alphabet, setAlphabet } = props;
  function handleClick (index){

    const newAlphabet = [...alphabet];
          newAlphabet[index].letter = '#'
          setAlphabet(newAlphabet)
  }

  return (
    <div>
      {alphabet.map((letter, key) => {
        return (
          <button
            onClick={()=>handleClick(key)}
          >
            {letter.letter}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
