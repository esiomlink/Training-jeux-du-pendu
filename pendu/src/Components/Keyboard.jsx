import React from "react";


const Keyboard = (props) => {
  const {alphabet , setAlphabet} = props
  console.log(alphabet , );
  
  
  return (
    <div>
      {alphabet
      .map((letters, key) => {
        return (
           <button 
           onClick={() => setAlphabet([...alphabet,{...letters.letter="#"}])}
           >
            {letters.letter}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
