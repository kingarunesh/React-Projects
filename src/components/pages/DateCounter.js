import { useState } from "react";

export default function DateCounter() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    const stepIncrementHandler = function () {
        setStep((c) => c + 1);
    };

    const stepDecrementHandler = function () {
        setStep((c) => c - 1);
    };

    const countIncrementHandler = function () {
        setCount((c) => c + step);
    };

    const countDecrementHandler = function () {
        setCount((c) => c - step);
    };

    const resetHandler = function () {
        setStep(1);
        setCount(0);
    };

    const date = new Date();

    let result = date.setDate(date.getDate() + count);

    result = date.toDateString();

    return (
        <>
            <div className="dateCounter">
                <div className="dateCounter__step">
                    <button className="btn" onClick={stepDecrementHandler}>
                        -
                    </button>
                    <h2>Step : {step}</h2>
                    <button className="btn" onClick={stepIncrementHandler}>
                        +
                    </button>
                </div>
                <div className="dateCounter__count">
                    <button className="btn" onClick={countDecrementHandler}>
                        -
                    </button>
                    <h2>Count : {count}</h2>
                    <button className="btn" onClick={countIncrementHandler}>
                        +
                    </button>
                </div>

                <div
                    className="dateCounter__result"
                    style={{ backgroundColor: `${count < 0 ? "red" : count === 0 ? "green" : "blue"}` }}
                >
                    {count === 0
                        ? `Today is ${result}`
                        : count > 0
                        ? `Form ${count} days, date will be ${result}`
                        : `${Math.abs(count)} days ago was ${result}`}
                </div>

                {count !== 0 || step !== 1 ? (
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
