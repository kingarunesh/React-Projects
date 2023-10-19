import { useState } from "react";

import "./open-model-form.scss";
import Login from "./Login";
import Register from "./Register";

export default function OpenModelForm() {
    const [loginOpen, setLoginOpen] = useState(false);
    const [registerOpen, setRegisterOpen] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const nameHandler = function (e) {
        setName(e.target.value);
    };

    const emailHandler = function (e) {
        setEmail(e.target.value);
    };

    const passwordHandler = function (e) {
        setPassword(e.target.value);
    };

    const onSubmitHandler = function (e) {
        e.preventDefault();

        // setName("");
        // setEmail("");
        // setPassword("");

        registerHandler(false);
    };

    const loginOpenHandler = function () {
        setLoginOpen((c) => !c);
    };

    const registerHandler = function () {
        setRegisterOpen((c) => !c);
    };

    return (
        <>
            <div className="open-model-form">
                {loginOpen && <Login onClick={loginOpenHandler} />}

                {registerOpen && (
                    <Register
                        onClick={registerHandler}
                        nameHandler={nameHandler}
                        emailHandler={emailHandler}
                        passwordHandler={passwordHandler}
                        name={name}
                        email={email}
                        password={password}
                        onSubmitHandler={onSubmitHandler}
                    />
                )}

                <header className="open-model-form__header">Header</header>

                <nav className="open-model-form__nav">
                    <ul>
                        <li>Home</li>
                        <li>Blog</li>
                        <li>Products</li>
                        <li>Contact Us</li>
                        <li>About Us</li>

                        <li onClick={loginOpenHandler}>Login</li>
                        <li onClick={registerHandler}>Register</li>
                    </ul>
                </nav>

                <aside className="open-model-form__aside">SideBar</aside>

                <main className="open-model-form__main">
                    <ul>
                        <li>Name: {name}</li>
                        <li>Email: {email}</li>
                        <li>Password: {password}</li>
                    </ul>
                </main>

                <footer className="open-model-form__footer">Footer</footer>
            </div>
        </>
    );
}
