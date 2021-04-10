import React from 'react';
import App from '../App';

const Keyboard = () => {
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const [used,setUsed] = React.useState("")


  console.log(used)
  





 
  return (
    <div>{
      alphabet.map(
        (letter, key)=>{
          return <button 
          onClick={()=>setUsed(used+letter)}
          >{letter}</button>
        }
        )
        
      }
    </div>
  );

}

export default Keyboard;
