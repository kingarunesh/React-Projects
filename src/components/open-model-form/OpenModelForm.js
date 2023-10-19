import "./open-model-form.scss";

export default function OpenModelForm() {
    return (
        <>
            <div className="open-model-form">
                <header className="open-model-form__header">Header</header>

                <nav className="open-model-form__nav">
                    <ul>
                        <li>Home</li>
                        <li>Blog</li>
                        <li>Products</li>
                        <li>Contact Us</li>
                        <li>About Us</li>

                        <li>Login</li>
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
