type hangmanProps = {
  word: string;
  guessedLetters: string[];
  isLoser: boolean;
};

const HangmanWord = ({ word, guessedLetters, isLoser }: hangmanProps) => {
  return (
    <div className="flex gap-10 text-9xl uppercase">
      {word.split("").map((letter, index) => (
        <span
          className="border-b-4 w-24 flex flex-col items-center border-black"
          key={index}
        >
          <span
            className={`${guessedLetters.includes(letter) || isLoser ? "visible" : "invisible"}
                       ${!guessedLetters.includes(letter) && isLoser && "text-[#f00]"} `}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
