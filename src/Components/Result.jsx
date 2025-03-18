import "../css/Components/Result.css";

export default function Result ({isDone, mathString, result}) {
    return (
        //passing math string and result to this component
        <div className="screen">
            <div className="show-math-string">{mathString || "0"}</div>
            <div className="show-result">
                <p>Result</p>
                <p>{result || "0"}</p>
            </div>
        </div>
    );
}