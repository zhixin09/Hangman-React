import React, { useEffect } from 'react';

const Popup = ({
  checkWin,
  selectedWord,
  correctLetters,
  wrongLetters,
  setStart,
  restartGame,
}) => {
  let message = '';
  let revealWord = selectedWord;
  let start = true;

  let result = checkWin(correctLetters, wrongLetters, selectedWord);

  if (result === 'win') {
    //show win popup
    message = 'Congrats you have won!';
    start = false;
  } else if (result === 'lose') {
    //show lose popup
    message = 'You have lost!';
    start = false;
  }
  useEffect(() => {
    setStart(start);
  });
  return (
    //if message is not empty show popup
    <div className={`popup-container ${message !== '' ? 'show' : 'hide'}`}>
      <div
        className={`popup ${
          result === 'win' ? 'green-background' : 'red-background'
        }`}
      >
        <h2>{message}</h2>
        <h3>The word is: {revealWord}</h3>
        <button onClick={restartGame}>
          <h3>Play Again</h3>
        </button>
      </div>
    </div>
  );
};

export default Popup;
