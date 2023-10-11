import { useState } from "react";

const messages = ["Click Next", "Click Next/Previous", "Click Previous"];
import "./App.css";

function App() {
  let [step, setStep] = useState(1);

  const stepIncrease = function () {
    if (step <= 2) {
      step += 1;
      setStep(step);
    }
  };

  const stepDecrease = function () {
    if (step >= 2) {
      step -= 1;
      setStep(step);
    }
  };

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={stepDecrease}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={stepIncrease}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
