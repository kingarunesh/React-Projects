export default function Register({
    onClick,
    nameHandler,
    emailHandler,
    passwordHandler,
    name,
    email,
    password,
    onSubmitHandler,
}) {
    return (
        <>
            {/* <div className="open-model-form__register" onClick={onClick}> */}
            <div className="open-model-form__register">
                <div className="open-model-form__register--box">
                    <span className="material-symbols-outlined" onClick={onClick}>
                        close
                    </span>

                    <form className="open-model-form__register--box--form">
                        <div className="open-model-form__register--box--form--group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter Full Name"
                                value={name}
                                // onChange={(e) => setName(e.target.value)}
                                onChange={(e) => nameHandler(e)}
                            />
                        </div>

                        <div className="open-model-form__register--box--form--group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                placeholder="Email"
                                id="email"
                                value={email}
                                // onChange={(e) => setEmail(e.target.value)}
                                onChange={(e) => emailHandler(e)}
                            />
                        </div>

                        <div className="open-model-form__register--box--form--group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                id="password"
                                autoComplete="off"
                                value={password}
                                // onChange={(e) => setPassword(e.target.value)}
                                onChange={(e) => passwordHandler(e)}
                            />
                        </div>

                        <div className="open-model-form__register--box--form--group">
                            <button onClick={onSubmitHandler}>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
