import { useState } from "react";

export default function SliderInputDateCounter() {
    const [step, setStep] = useState(1);
    const [input, setInput] = useState(0);

    const stepIncrementHandler = function () {
        step < 10 && setStep((c) => c + 1);
    };

    const stepDecrementHandler = function () {
        step > 1 && setStep((c) => c - 1);
    };

    const inputIncrementHandler = function () {
        setInput((c) => c + step);
    };

    const inputDecrementHandler = function () {
        setInput((c) => c - step);
    };

    const resetHandler = function () {
        setStep(1);
        setInput(0);
    };

    const date = new Date();

    date.setDate(date.getDate() + input);

    const result = date.toDateString();

    return (
        <>
            <div className="sliderInputDateCounter">
                <div className="sliderInputDateCounter__slider">
                    <button className="btn" onClick={stepDecrementHandler}>
                        -
                    </button>

                    <div>
                        <input type="range" min="1" max="10" value={step} onChange={(e) => setStep(Number(e.target.value))} />

                        <span>Step : {step}</span>
                    </div>

                    <button className="btn" onClick={stepIncrementHandler}>
                        +
                    </button>
                </div>

                <div className="sliderInputDateCounter__count">
                    <button className="btn" onClick={inputDecrementHandler}>
                        -
                    </button>
                    <input type="number" value={input} onChange={(e) => setInput(Number(e.target.value))} />
                    <button className="btn" onClick={inputIncrementHandler}>
                        +
                    </button>
                </div>

                <div className="sliderInputDateCounter__result">{result}</div>

                {step !== 1 || input !== 0 ? (
                    <div>
                        <button className="btn" onClick={resetHandler}>
                            Reset
                        </button>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </>
    );
}
