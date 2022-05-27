import React from 'react';

const Clue = ({ selectedClue }) => {
  return (
    <>
      <div className="clue-container">
        <div className="clue">
          <h3>Clue: {selectedClue}</h3>
        </div>
      </div>
    </>
  );
};

export default Clue;
