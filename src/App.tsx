import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);


  const getRandomColor = () => {
    const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];


    const color = new Array(6).fill("").map(() => digits[Math.floor(Math.random() * digits.length)]).join("");

    return `#${color}`;
  };

  useEffect(() => {
    const actualColor = getRandomColor();
    setColor(getRandomColor());
    setAnswers([actualColor, getRandomColor(), getRandomColor()].sort(() => 0.5 - Math.random()))
  }, []);

  return (
    <div className="App">
      <div className="guess-me" style={{ background: color }}></div>

      {answers.map(answer => (
        <button key={answer}>{answer}</button>
      ))}
    </div>
  );
}
export default App;