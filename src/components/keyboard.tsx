const keys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const Keyboard = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  gameOver,
}: {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  gameOver: boolean;
}) => {
  return (
    <div className="flex text-6xl gap-4 flex-wrap">
      {keys.map((key, index) => {
        const handleClick = (key: string) => {
          if (gameOver) return;
          addGuessedLetter(key);
        };
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            type="button"
            onClick={() => handleClick(key)}
            className={`border-2 flex justify-center items-center uppercase size-20 border-black
            ${isActive && "bg-green-500 cursor-default"}
            ${isInactive && "opacity-35 cursor-default"}
            ${!(isActive || isInactive) && !gameOver && "hover:bg-cyan-300"}
            ${gameOver && "cursor-default"}
`}
            key={index}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
