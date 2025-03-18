import { cos } from "mathjs";
import "../css/Components/KeyBoard.css";
import { HandleMathString, AddMathString } from "../services/HandleCalculator";
import { useState, useEffect } from "react";
export default function KeyBoard({onKeyPress, mathString, setMathString}) {
  const key = [
    { value: "AC", type: "function" },
    { value: "SIN", type: "function" },
    { value: "COS", type: "function" },
    { value: "TAN", type: "function" },
    { value: "DEL", type: "function" },
    { value: "(", type: "operator" },
    { value: ")", type: "operator" },
    { value: "+", type: "operator" },
    { value: "-", type: "operator" },
    { value: "x", type: "operator" },
    { value: "/", type: "operator" },
    { value: "%", type: "operator" },
    { value: "6", type: "number" },
    { value: "7", type: "number" },
    { value: "8", type: "number" },
    { value: "9", type: "number" },
    { value: "2", type: "number" },
    { value: "3", type: "number" },
    { value: "4", type: "number" },
    { value: "5", type: "number" },
    { value: "0", type: "number" },
    { value: "1", type: "number" },
    { value: ".", type: "number" },
    { value: "=", type: "function" },
  ];

  useEffect(() => {console.log("math string now: ", mathString)}, [mathString]);

  return (
    <div className="keyboard">
      {key.map((item, index) => {
        return (
          <button
            key={index}
            type={item.type}
            className={`${item.type} key `}
            onClick={() => onKeyPress(item.value)}
          >
            {item.value}
          </button>
        );
      })}
    </div>
  );
}
