import { useState } from "react";
import "./App.css";

function App() {
  const [newCount, setCount] = useState(0);
  function decreaswHandler() {
    setCount(newCount - 1);
  }
  function increaseHandler() {
    setCount(newCount + 1);
  }

  function resetHandler() {
    setCount(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-[#344151] gap-10">
      <h1 className="text-[#0398d4] font-medium text-2xl"> Counter App</h1>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button
          onClick={decreaswHandler}
          className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"
        >
          -
        </button>
        <div className="font-bold gap-12 text-5xl">{newCount}</div>
        <button
          onClick={increaseHandler}
          className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl"
        >
          +
        </button>
      </div>

      <button
        onClick={resetHandler}
        className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg"
      >
        Reset
      </button>
    </div>
  );
}

export default App;
