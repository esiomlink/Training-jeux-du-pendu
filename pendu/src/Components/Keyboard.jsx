import React from 'react';

const Keyboard = () => {
  const [alphabet, setAlphabet] = React.useState([
    { letter: 'a', used: 0 },
    { letter: 'b', used: 0 },
    { letter: 'c', used: 0 },
    { letter: 'd', used: 0 },
    { letter: 'e', used: 0 },
    { letter: 'f', used: 0 },
    { letter: 'g', used: 0 },
    { letter: 'h', used: 0 },
    { letter: 'i', used: 0 },
    { letter: 'j', used: 0 },
    { letter: 'k', used: 0 },
    { letter: 'l', used: 0 },
    { letter: 'm', used: 0 },
    { letter: 'n', used: 0 },
    { letter: 'o', used: 0 },
    { letter: 'p', used: 0 },
    { letter: 'q', used: 0 },
    { letter: 'r', used: 0 },
    { letter: 's', used: 0 },
    { letter: 't', used: 0 },
    { letter: 'u', used: 0 },
    { letter: 'v', used: 0 },
    { letter: 'w', used: 0 },
    { letter: 'x', used: 0 },
    { letter: 'y', used: 0 },
    { letter: 'z', used: 0 },
  ]);
  console.log(alphabet);
  
  return (
    <div>
      {alphabet
      .filter((used)=>used.used!==1)
      .map((letters) => {
        return (
           <button 
           onClick={() => setAlphabet([...alphabet,{...letters.used=1}])}
           >
            {letters.letter}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
