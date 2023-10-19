import { useState } from "react";

import "./register-form-steps.scss";

const DATA = [
    {
        id: 1,
        title: "First Name",
        content: (
            <>
                <div className="registerFormSteps__container--form--group">
                    <label htmlFor="fname">First Name</label>
                    <input
                        type="text"
                        placeholder="First Name"
                        id="fname"
                        // value={fName}
                        // onChange={(e) => setFname(e.target.value)}
                    />
                </div>
                <div className="registerFormSteps__container--form--group">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" placeholder="Last Name" id="lname" />
                </div>
            </>
        ),
    },

    {
        id: 2,
        title: "Email",
        content: (
            <>
                <div className="registerFormSteps__container--form--group">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Email Address" id="email" />
                </div>

                <div className="registerFormSteps__container--form--group">
                    <label htmlFor="phone">Phone</label>
                    <input type="number" placeholder="Phone Number" id="phone" />
                </div>
            </>
        ),
    },

    {
        id: 3,
        title: "Password",
        content: (
            <>
                <div className="registerFormSteps__container--form--group">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" id="password" autoComplete="off" />
                </div>

                <div className="registerFormSteps__container--form--group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" placeholder="Confirm Password" id="confirm-password" autoComplete="off" />
                </div>
            </>
        ),
    },

    {
        id: 4,
        title: "Select Gender",
        content: (
            <div className="registerFormSteps__container--form--group">
                <div className="registerFormSteps__container--form--group--gender">
                    <input type="radio" id="male" autoComplete="off" name="gender" value="male" />
                    <label htmlFor="male">Male</label>
                </div>

                <div className="registerFormSteps__container--form--group--gender">
                    <input type="radio" id="female" autoComplete="off" name="gender" value="female" />
                    <label htmlFor="female">Female</label>
                </div>

                <div className="registerFormSteps__container--form--group--gender">
                    <input type="radio" id="other" autoComplete="off" name="gender" value="other" />
                    <label htmlFor="other">Other</label>
                </div>
            </div>
        ),
    },

    {
        id: 5,
        title: "Date of Birth",
        content: (
            <>
                <div className="registerFormSteps__container--form--group">
                    <label htmlFor="dob">Date of Birthday</label>
                    <input type="date" id="dob" />
                </div>

                <div className="registerFormSteps__container--form--group">
                    <button>Create</button>
                </div>
            </>
        ),
    },
];

export default function RegisterFormSteps() {
    const [step, setStep] = useState(0);

    // const [fName, setFname] = useState("");
    // const [lName, setLname] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    // const [password, setPassword] = useState("");
    // const [confrimPassword, setConfrimPassword] = useState("");
    // const [gender, setGender] = useState("");
    // const [dob, setDOB] = useState("");

    const nextHandler = function () {
        step < DATA.length - 1 && setStep((c) => c + 1);
    };

    const preHandler = function () {
        step > 0 && setStep((c) => c - 1);
    };

    return (
        <>
            <div className="registerFormSteps">
                <div className="registerFormSteps__container">
                    <form className="registerFormSteps__container--form">{DATA[step].content}</form>

                    <div className="registerFormSteps__container--btns">
                        {step === 0 ? (
                            <button onClick={preHandler} style={{ backgroundColor: "gray", cursor: "not-allowed" }}>
                                Previous
                            </button>
                        ) : (
                            <button onClick={preHandler}>Previous</button>
                        )}

                        {step === DATA.length - 1 ? (
                            <button onClick={nextHandler} style={{ backgroundColor: "gray", cursor: "not-allowed" }}>
                                Next
                            </button>
                        ) : (
                            <button onClick={nextHandler}>Next</button>
                        )}
                    </div>

                    <div className="registerFormSteps__container--indicator">
                        {DATA.map((_, i) => (
                            <div key={i} style={{ backgroundColor: `${step > i - 1 ? "#000" : ""}` }}></div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
