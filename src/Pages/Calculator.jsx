import Result from "../Components/Result";
import KeyBoard from "../Components/KeyBoard";
import { useState } from "react";
import { HandleMathString, AddMathString } from "../services/HandleCalculator";

export default function Calculator() {
  const [mathString, setMathString] = useState("");
  const [result, setResult] = useState("");
    const [isDone, setIsDone] = useState(false);
  const handlePressing = (value) => {
    console.log("press " + value);
    switch (value) {
      case "AC":
        setMathString("");
        setResult("");
        break;
      case "=":
        const calcResult = HandleMathString(mathString);
        console.log("result: " + calcResult);
        setResult(calcResult);
        setIsDone(true);
        break;
      case "DEL":
        console.log("Delete");
        const deleteMathString = mathString.slice(0, -1);
        setMathString(deleteMathString);
        break;
      default:
        if(isDone === true){
            setMathString(value);
            setResult("");
            setIsDone(false);
            break;
        }
        const newMathString = AddMathString(mathString, value);
        setMathString(newMathString);
        break;
    }
  };
  return (
    <div className="Calculator">
      <Result mathString={mathString} result={result} />
      <KeyBoard
        onKeyPress={(value) => handlePressing(value)}
        mathString={mathString}
        setMathString={setMathString}
        isDone = {isDone}
      />
    </div>
  );
}
