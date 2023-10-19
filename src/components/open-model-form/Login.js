export default function Login({ onClick }) {
    return (
        <>
            <div className="open-model-form__model">
                <span className="material-symbols-outlined" onClick={onClick}>
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
        </>
    );
}
