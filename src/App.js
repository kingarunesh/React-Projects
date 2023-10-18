import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/layout/Home";
import NoPage from "./components/pages/NoPage";
import Counter from "./components/pages/Counter";
import StepCounter from "./components/pages/StepCounter";
import DateCounter from "./components/pages/DateCounter";
import SliderInputDateCounter from "./components/pages/SliderInputDateCounter";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route>
                        <Route index element={<Home />} />
                        <Route path="*" element={<NoPage />} />
                        <Route path="/counter" element={<Counter />} />
                        <Route path="/stepcounter" element={<StepCounter />} />
                        <Route path="/datecounter" element={<DateCounter />} />
                        <Route path="/sliderinputdatecounter" element={<SliderInputDateCounter />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
