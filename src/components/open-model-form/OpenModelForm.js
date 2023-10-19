import { useState } from "react";

import "./open-model-form.scss";

export default function OpenModelForm() {
    const [loginOpen, setLoginOpen] = useState(false);

    const loginOpenHandler = function () {
        setLoginOpen((c) => !c);
    };

    return (
        <>
            <div className="open-model-form">
                {loginOpen && (
                    <div className="open-model-form__model">
                        <span className="material-symbols-outlined" onClick={loginOpenHandler}>
                            close
                        </span>
                        <form className="open-model-form__model--form">
                            <div className="open-model-form__model--form--input-group">
                                <label htmlFor="email">Username or Email</label>
                                <input type="text" placeholder="Username or Email" id="email" />
                            </div>

                            <div className="open-model-form__model--form--input-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" placeholder="Password" id="password" autoComplete="off" />
                            </div>

                            <div className="open-model-form__model--form--input-group">
                                <div>
                                    <button>Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
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
                        <li>Register</li>
                    </ul>
                </nav>

                <aside className="open-model-form__aside">SideBar</aside>

                <main className="open-model-form__main">Main Content</main>

                <footer className="open-model-form__footer">Footer</footer>
            </div>
        </>
    );
}
