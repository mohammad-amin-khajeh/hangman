const HEAD = () => (
  <div className="border-black rounded-full w-14 h-14 absolute top-10 -left-[23px] border-[10px]" />
);

const BODY = () => (
  <div className="bg-black w-[10px] h-[100px] absolute top-[90px] " />
);

const RIGHT_ARM = () => (
  <div className="bg-black w-[100px] h-[10px] absolute -left-2 top-[110px] -rotate-[40deg] " />
);

const LEFT_ARM = () => (
  <div className="bg-black w-[100px] h-[10px] absolute -right-2 top-[110px] rotate-[40deg] " />
);

const RIGHT_LEG = () => (
  <div className="bg-black w-[100px] h-[10px] absolute top-[180px] origin-bottom-left rotate-[50deg] " />
);

const LEFT_LEG = () => (
  <div className="bg-black w-[100px] h-[10px] absolute top-[190px] left-[10px] origin-top-left rotate-[130deg] " />
);

const HangmanDrawing = ({
  numberOfWrongGuesses,
}: { numberOfWrongGuesses: number }) => (
  <div>
    <div className="h-[10px] w-[200px] bg-black " />
    <div className="h-12 w-[10px] float-right relative bg-black ">
      {numberOfWrongGuesses > 0 && <HEAD />}
      {numberOfWrongGuesses > 1 && <BODY />}
      {numberOfWrongGuesses > 2 && <RIGHT_ARM />}
      {numberOfWrongGuesses > 3 && <LEFT_ARM />}
      {numberOfWrongGuesses > 4 && <RIGHT_LEG />}
      {numberOfWrongGuesses > 5 && <LEFT_LEG />}
    </div>
    <div className="h-[350px] w-[10px] bg-black " />
    <div className="h-[10px] -mx-[95px] w-[200px] bg-black " />
  </div>
);

export default HangmanDrawing;
