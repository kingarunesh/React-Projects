import { Outlet, Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <header className="home__header">
                <h2>Basic Projects and Components</h2>
            </header>

            <nav>
                <ol>
                    <li>
                        <Link to="/counter" target="_blank">
                            Counter
                        </Link>
                    </li>
                    <li>
                        <Link to="/stepcounter" target="_blank">
                            Step Counter
                        </Link>
                    </li>
                    <li>
                        <Link to="/datecounter" target="_blank">
                            Date Counter
                        </Link>
                    </li>
                    <li>
                        <Link to="/sliderinputdatecounter" target="_blank">
                            Slider Input Date Counter
                        </Link>
                    </li>
                    <li>
                        <Link to="/profilecard" target="_blank">
                            Profile Card
                        </Link>
                    </li>
                    <li>
                        <Link to="/foodmenu" target="_blank">
                            Food Menu
                        </Link>
                    </li>
                    <li>
                        <Link to="/quizflashcard" target="_blank">
                            Quiz Flash Card
                        </Link>
                    </li>
                    <li>
                        <Link to="/image-flash-card" target="_blank">
                            Image Flash Card
                        </Link>
                    </li>
                    <li>
                        <Link to="/simple-steps" target="_blank">
                            Simple Steps
                        </Link>
                    </li>
                    <li>
                        <Link to="/image-step-slider" target="_blank">
                            Image Step Slider
                        </Link>
                    </li>
                    <li>
                        <Link to="/single-simple-open-model" target="_blank">
                            Single Simple Open Model
                        </Link>
                    </li>

                    <li>
                        <Link to="/open-model-form" target="_blank">
                            Open Model Form
                        </Link>
                    </li>

                    <li>
                        <Link to="/register-form-steps" target="_blank">
                            Register Form Steps
                        </Link>
                    </li>

                    <li>
                        <Link to="/accordion" target="_blank">
                            Accordion
                        </Link>
                    </li>

                    <li>
                        <Link to="/simple-tip-calculator" target="_blank">
                            Tip Calculator
                        </Link>
                    </li>
                </ol>
            </nav>

            <Outlet />
        </>
    );
}
