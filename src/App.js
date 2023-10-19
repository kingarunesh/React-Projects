import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/layout/Home";
import NoPage from "./components/pages/NoPage";
import Counter from "./components/pages/Counter";
import StepCounter from "./components/pages/StepCounter";
import DateCounter from "./components/pages/DateCounter";
import SliderInputDateCounter from "./components/pages/SliderInputDateCounter";
import ProfileCard from "./components/devprofile/ProfileCard";
import FoodMenu from "./components/food-menu/FoodMenu";
import QuizFlashCard from "./components/simple-flash-card/QuizFlashCard";
import ImageFlashCard from "./components/image-flash-card/ImageFlashCard";
import SimpleSteps from "./components/simple-steps/SimpleSteps";
import ImageStepSlider from "./components/image-steps-slider/ImageStepSlider";
import SingleSimpleOpenModel from "./single-simple-open-model/SingleSimpleOpenModel";
import OpenModelForm from "./components/open-model-form/OpenModelForm";

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
                        <Route path="/profilecard" element={<ProfileCard />} />
                        <Route path="/foodmenu" element={<FoodMenu />} />
                        <Route path="/quizflashcard" element={<QuizFlashCard />} />
                        <Route path="/image-flash-card" element={<ImageFlashCard />} />
                        <Route path="/simple-steps" element={<SimpleSteps />} />
                        <Route path="/image-step-slider" element={<ImageStepSlider />} />
                        <Route path="/single-simple-open-model" element={<SingleSimpleOpenModel />} />
                        <Route path="/open-model-form" element={<OpenModelForm />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
