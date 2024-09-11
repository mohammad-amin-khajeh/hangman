import { useCallback, useEffect, useState } from "react";
import { commonWords } from "./assets/words.json";
import "./index.css";

import HangmanDrawing from "./components/hangmanDrawing";
import HangmanWord from "./components/hangmanWord";
import Keyboard from "./components/keyboard";

const fetchWord = () =>
  commonWords[Math.floor(Math.random() * commonWords.length)];

function App() {
  // select a random word from the word list in words.json
  const [wordToGuess, setWordToGuess] = useState(fetchWord);

  // add an event listener for keyboard events
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter),
  );

  const addLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters],
  );

  // listen to key presses
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/) || isLoser || isWinner) return;
      e.preventDefault();
      addLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [addLetter]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(fetchWord);
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  return (
    <section className="flex flex-col mx-auto max-w-screen-lg gap-8 items-center ">
      <div className="text-6xl">
        {isWinner && "you have won! - refresh to try again"}
        {isLoser && "Nice try - refresh to try again."}
      </div>
      <HangmanDrawing numberOfWrongGuesses={incorrectLetters.length} />
      <HangmanWord
        word={wordToGuess}
        isLoser={isLoser}
        guessedLetters={guessedLetters}
      />
      <Keyboard
        activeLetters={guessedLetters.filter((letter) =>
          wordToGuess.includes(letter),
        )}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addLetter}
        gameOver={isWinner || isLoser}
      />
    </section>
  );
}

export default App;
