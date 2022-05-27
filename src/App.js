import './App.css';
import Header from './components/Header';
import Hangman from './components/Hangman';
import Word from './components/Word';
import WrongLetters from './components/WrongLetters';
import Clue from './components/Clue';
import wordList from './components/data';
import Alert from './components/Alert';
import { useEffect, useState } from 'react';
import Popup from './components/Popup';

let randmonNumber = Math.floor(Math.random() * wordList.length);
let selectedWord = wordList[randmonNumber].word;
let selectedClue = wordList[randmonNumber].clue;

function App() {
  const [start, setStart] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [alert, setAlert] = useState([{ show: false, msg: '' }]);

  const checkLetter = (letter) => {
    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        setCorrectLetters([...correctLetters, letter]);
      } else {
        //letter already entered notification
        showAlert(true, 'Letter already entered!');
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        setWrongLetters([...wrongLetters, letter]);
      } else {
        //letter already entered notification
        showAlert(true, 'Letter already entered!');
      }
    }
  };

  const showAlert = (show = false, msg = '') => {
    setAlert({ show, msg });
  };

  const checkWin = (correctLetters, wrongLetters, selectedWord) => {
    let status = 'win';
    selectedWord.split('').forEach((letter) => {
      if (!correctLetters.includes(letter)) {
        status = '';
      }
    });
    if (wrongLetters.length >= 6) {
      status = 'lose';
    }
    return status;
  };

  const restartGame = () => {
    setStart(true);
    setCorrectLetters([]);
    setWrongLetters([]);

    randmonNumber = Math.floor(Math.random() * wordList.length);
    selectedWord = wordList[randmonNumber].word;
    selectedClue = wordList[randmonNumber].clue;
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const { key, keyCode } = e;
      if (start) {
        if (keyCode > 64 && keyCode < 91) {
          const letter = key.toLowerCase();
          checkLetter(letter);
        } else {
          showAlert(true, 'Please enter a letter!');
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [start, correctLetters, wrongLetters]);

  return (
    <main>
      <div className="header-container">
        <Header />
      </div>
      <div className="container">
        <div className="game-container">
          <Hangman wrongLetters={wrongLetters} />
          <div className="sub-container">
            {alert.show && (
              <Alert
                {...alert}
                removeAlert={showAlert}
                correctLetters={correctLetters}
                wrongLetters={wrongLetters}
              />
            )}
            <Clue selectedClue={selectedClue} />
            <Word selectedWord={selectedWord} correctLetters={correctLetters} />
            <WrongLetters wrongLetters={wrongLetters} />
          </div>
        </div>
      </div>
      <Popup
        checkWin={checkWin}
        selectedWord={selectedWord}
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        setStart={setStart}
        restartGame={restartGame}
      />
    </main>
  );
}

export default App;
