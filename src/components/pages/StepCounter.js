import { useState } from "react";

export default function StepCounter() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    const stepIncrementHandler = function () {
        setStep((c) => c + 1);
    };

    const stepDecrementHandler = function () {
        setStep((c) => c - 1);
    };

    const countIncrementHandler = function () {
        setCount((c) => step + c);
    };

    const countDecrementHandler = function () {
        setCount((c) => c - step);
    };

    const resetHandler = function () {
        setStep(1);
        setCount(0);
    };

    return (
        <>
            <div className="stepcounter">
                <div className="stepcounter__step">
                    <button className="btn" onClick={stepDecrementHandler}>
                        -
                    </button>
                    <h2>Step : {step}</h2>
                    <button className="btn" onClick={stepIncrementHandler}>
                        +
                    </button>
                </div>

                <div className="stepcounter__count">
                    <button className="btn" onClick={countDecrementHandler}>
                        -
                    </button>
                    <h2>Count : {count}</h2>
                    <button className="btn" onClick={countIncrementHandler}>
                        +
                    </button>
                </div>

                {step !== 1 || count !== 0 ? (
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
