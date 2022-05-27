import React, { useEffect } from 'react';

const Alert = ({ msg, removeAlert, correctLetters, wrongLetters }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [correctLetters, wrongLetters]);
  return (
    <div className="alert">
      <h4>{msg}</h4>
    </div>
  );
};

export default Alert;
