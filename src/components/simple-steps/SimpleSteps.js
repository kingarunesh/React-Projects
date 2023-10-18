import { useState } from "react";

const DATA = [
    {
        id: 1,
        text: "First",
    },
    {
        id: 2,
        text: "Second",
    },
    {
        id: 3,
        text: "Third",
    },
    {
        id: 4,
        text: "Fourth",
    },
    {
        id: 5,
        text: "Fivth",
    },
];

export default function SimpleSteps() {
    const [step, setStep] = useState(0);

    const nextHandler = function () {
        step < DATA.length - 1 && setStep((c) => c + 1);
    };

    const previousHandler = function () {
        step > 0 && setStep((c) => c - 1);
    };

    return (
        <>
            <div className="simpleSteps">
                <div className="simpleSteps__message">
                    Step {step + 1} : {DATA[step].text}
                </div>

                <div className="simpleSteps__btns">
                    <button onClick={previousHandler}>Previous</button>
                    <button onClick={nextHandler}>Next</button>
                </div>

                <div className="simpleSteps__indicators">
                    {DATA.map((_, i) => (
                        <div key={i} style={{ backgroundColor: step > i - 1 ? "red" : "" }}>
                            {i + 1}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
