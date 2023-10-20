import { useState } from "react";

import "./simple-tip-calculator.scss";

export default function SimpleTipCalculator() {
    const [bill, setBill] = useState("");
    const [yourTip, setYourTip] = useState(0);
    const [friendTip, setFriendTip] = useState(0);

    const tip = bill * ((yourTip + friendTip) / 2 / 100);
    const finalBill = bill + tip;

    const resetHandler = function () {
        setBill("");
        setYourTip(0);
        setFriendTip(0);
    };

    return (
        <>
            <div className="simpleTipCalculator">
                <div className="simpleTipCalculator__container">
                    <form className="simpleTipCalculator__container--form">
                        <div className="simpleTipCalculator__container--form--group">
                            <label htmlFor="bill">How much was the bill?</label>
                            <input
                                type="number"
                                id="bill"
                                placeholder="Bill Value"
                                value={bill}
                                onChange={(e) => setBill(Number(e.target.value))}
                            />
                        </div>

                        <div className="simpleTipCalculator__container--form--group">
                            <label htmlFor="yourTip">How did you like the service?</label>

                            <select id="yourTip" value={yourTip} onChange={(e) => setYourTip(Number(e.target.value))}>
                                <option value="0">Dissatisfied (0%)</option>
                                <option value="5">It was okay (5%)</option>
                                <option value="10">It was good (10%)</option>
                                <option value="20">Absolutely amazing! (20%)</option>
                            </select>
                        </div>

                        <div className="simpleTipCalculator__container--form--group">
                            <label htmlFor="friendTip">How did your friend like the service?</label>

                            <select id="friendTip" value={friendTip} onChange={(e) => setFriendTip(Number(e.target.value))}>
                                <option value="0">Dissatisfied (0%)</option>
                                <option value="5">It was okay (5%)</option>
                                <option value="10">It was good (10%)</option>
                                <option value="20">Absolutely amazing! (20%)</option>
                            </select>
                        </div>
                    </form>

                    {bill && (
                        <div className="simpleTipCalculator__container--result">
                            <p>
                                You pay ${finalBill} (${bill} + ${tip})
                            </p>
                            <button onClick={resetHandler}>Reset</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
