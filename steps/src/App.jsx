import { useState } from "react";

const messages = ["Click Next", "Click Next/Previous", "Click Previous"];
import "./App.css";

function App() {
  let [step, setStep] = useState(1);
  let [isOpen, setIsOpen] = useState(true);

  const close = "Close";
  const open = "Open";

  const stepIncrease = function () {
    if (step <= 2) {
      setStep((s) => s + 1);
    }
  };

  const stepDecrease = function () {
    if (step >= 2) {
      setStep((s) => s - 1);
    }
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
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
      )}
    </>
  );
}

export default App;
