import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const incrementHandler = function () {
        setCount((c) => c + 1);
    };

    const decrementHandler = function () {
        setCount((c) => c - 1);
    };

    const resetHandler = function () {
        setCount(0);
    };

    return (
        <>
            <div className="counter__container">
                <h2 className="counter__container--count">{count}</h2>

                <div className="counter__container--btns">
                    <div className="counter__container--btns-btn">
                        <button onClick={decrementHandler} className="btn">
                            -
                        </button>
                    </div>

                    <div className="counter__container--btn-btn">
                        <button onClick={incrementHandler} className="btn">
                            +
                        </button>
                    </div>

                    {count > 0 || count < 0 ? (
                        <div className="counter__container--btn-btn">
                            <button onClick={resetHandler} className="btn">
                                Reset
                            </button>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </>
    );
}
