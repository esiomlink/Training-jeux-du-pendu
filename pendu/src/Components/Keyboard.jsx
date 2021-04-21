import './style/Keyboard.css';
const Keyboard = (props) => {
  const { alphabet, handleClick } = props;

  return (
    <section className='keyboard-container'>
      {alphabet.map((letter, index) => {
        return (
          <button onClick={() => handleClick(index)}>
            {letter.letter}
            {letter.inWord}
          </button>
        );
      })}
    </section>
  );
};

export default Keyboard;
