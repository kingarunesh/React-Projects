import { Outlet, Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <header>
                <h2>Basic Projects and Components</h2>
            </header>

            <nav>
                <ol>
                    <li>
                        <Link to="/counter" target="_blank">
                            Counter
                        </Link>
                    </li>
                </ol>
            </nav>

            <Outlet />
        </>
    );
}
