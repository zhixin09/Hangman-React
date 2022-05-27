import React from 'react';

const WrongLetters = ({ wrongLetters }) => {
  return (
    <>
      <div className="wrong-letters-container">
        <h3>Wrong Letters:</h3>
        {wrongLetters.map((letter, i) => {
          return (
            <span className="wrong-letter" key={i}>
              {letter}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default WrongLetters;
