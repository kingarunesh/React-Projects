import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/layout/Home";
import NoPage from "./components/pages/NoPage";
import Counter from "./components/pages/Counter";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route>
                        <Route index element={<Home />} />
                        <Route path="/counter" element={<Counter />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
