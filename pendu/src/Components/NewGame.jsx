import './style/NewGame.css';
const NewGame = ({ findLetterInWord }) => {
  return (
    <section className='new-game-container'>
      <button className='btn-game' onClick={() => findLetterInWord()}>
        newGame
      </button>
    </section>
  );
};

export default NewGame;
