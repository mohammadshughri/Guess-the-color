import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

const getRandomColor = () => {
  const digits = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  const color = new Array(6)
    .fill("")
    .map(() => digits[Math.floor(Math.random() * digits.length)])
    .join("");

  return `#${color}`;
};

function App() {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<boolean | undefined>(undefined);

  const generateColors = () => {
    const actualColor = getRandomColor();
    setColor(actualColor);
    setAnswers(
      [actualColor, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  };

  useEffect(() => {
    generateColors();
  }, []);

  const handleAnswerClicked = (answer: string) => {
    if (answer === color) {
      setResult(true);
      generateColors();
    } else {
      setResult(false);
    }
  };

  return (
    <div className="App">
      <div>
        <div className="guess-me" style={{ background: color }}></div>

        {answers.map((answer) => (
          <button onClick={() => handleAnswerClicked(answer)} key={answer}>
            {answer}
          </button>
        ))}
        {result === false && <div className="wrong">Wrong Answer!</div>}
        {result === true && <div className="correct">Correct Answer!</div>}
      </div>
    </div>
  );
}
export default App;
