import { useState } from "react";

import "./single-simple-open-model.scss";

export default function SingleSimpleOpenModel() {
    const [open, setOpen] = useState(false);

    const modelHandler = function () {
        setOpen((c) => !c);
    };

    return (
        <>
            <div className="single-simple-open-model">
                {open && (
                    <div className="model">
                        <div className="model__box">
                            <div>Login Form</div>

                            <span class="material-symbols-outlined" onClick={modelHandler}>
                                close
                            </span>
                        </div>
                    </div>
                )}

                <header className="single-simple-open-model__header">
                    <h2>Lorem ipsum dolor sit.</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptates?</p>
                </header>

                <aside className="single-simple-open-model__aside">
                    <ul>
                        <li>Home</li>
                        <li>Blog</li>
                        <li>Products</li>
                        <li>Services</li>
                        <li>Contact Us</li>
                        <li>About Us</li>

                        <li className="login" onClick={modelHandler}>
                            Login
                        </li>
                        <li className="register">Register</li>
                    </ul>
                </aside>

                <main className="single-simple-open-model__main">
                    <article>Article</article>
                </main>

                <footer className="single-simple-open-model__footer">
                    <p>Footer</p>
                </footer>
            </div>
        </>
    );
}
