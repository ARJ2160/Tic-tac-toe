import { useEffect, useState } from "react";
import "./App.css";
import { BoxType, boxes, winningCoords } from "../data/data";

function App() {
  const [data, setData] = useState<BoxType[]>([]);
  const [count, setCount] = useState(1);
  const [winner, setWinner] = useState<string | null>(null);

  useEffect(() => setData([...boxes]), []);

  const calculateWinner = (newData: BoxType[]) => {
    for (let i = 0; i < winningCoords.length; i++) {
      let [a, b, c] = winningCoords[i];
      if (
        newData[a]?.symbol &&
        newData[a]?.symbol === newData[b]?.symbol &&
        newData[a]?.symbol === newData[c]?.symbol
      ) {
        return Boolean(newData[a]?.symbol);
      }
    }
    return false;
  };

  const handleClick = (x: BoxType) => {
    if (x.symbol || winner) return;

    const newData = data.map((box, i) => {
      if (x.id === i) {
        return count % 2 === 0
          ? { ...box, symbol: "O" }
          : { ...box, symbol: "X" };
      } else return box;
    });
    setData([...newData]);
    setCount((prevCount) => prevCount + 1);

    if (count > 2) {
      if (calculateWinner(newData)) {
        setWinner(count % 2 === 0 ? "O" : "X");
      }
      return;
    }
  };

  const X = () => <div className="text-5xl">X</div>;
  const O = () => <div className="text-5xl">O</div>;

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black text-white">
      <div className="grid grid-cols-3">
        {data.map((x: BoxType, i: number) => {
          return (
            <div
              key={i}
              className="col-span-1 border-white w-20 h-20 border-2 flex justify-center items-center"
              onClick={() => handleClick(x)}
            >
              {x.symbol === "X" ? <X /> : x.symbol === "O" ? <O /> : null}
            </div>
          );
        })}
      </div>
      <div>{winner && <div>Winner is {winner}</div>}</div>
    </div>
  );
}

export default App;
