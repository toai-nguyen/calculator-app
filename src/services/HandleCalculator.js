import { evaluate } from 'mathjs';
function HandleMathString(mathString){
    mathString = CompleteMathString(mathString);
    try {
        return evaluate(mathString);
    }
    catch (e) {
        return "Syntax Error";
    }
}
function AddMathString (mathString, value) {
    console.log("value in AddMathString: ", value);
    if (value === "SIN" || value === "COS" || value === "TAN") {
        value = value.toLowerCase();    
        return mathString + value + "(";
    }
    return mathString + value;
}
//check if math string is miss ) , if yes add )
function CompleteMathString(mathString) {
    if( mathString === "" ) return "";
    let count = 0;
    for (let i = 0; i < mathString.length; i++) {
        if (mathString[i] === "(") {
            count++;
        }
        if (mathString[i] === ")") {
            count--;
        }
    }
    if (count > 0) {
        for (let i = 0; i < count; i++) {
            mathString += ")";
        }
    }
    return mathString;
}

export { HandleMathString, AddMathString };