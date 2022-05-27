import React from 'react';

const Word = ({ selectedWord, correctLetters }) => {
  return (
    <div className="word-container">
      <div className="word">
        {selectedWord.split('').map((letter, i) => {
          return (
            <h3 className="letter" key={i}>
              {correctLetters.includes(letter) ? letter : ''}
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default Word;
