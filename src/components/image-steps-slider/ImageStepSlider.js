import { useState } from "react";

const DATA = [
    {
        id: 1,
        image: "./assets/img/1.jpg",
        name: "Cheese Pizza",
        description:
            "It should be no shocker that a classic is the statistical favorite. Cheese pizza is one of the most popular choices. It will always be a simple, unadorned masterpiece on its own.",
    },
    {
        id: 2,
        image: "./assets/img/2.jpg",
        name: "Veggie Pizza",
        description:
            "When you want to jazz up your cheese pizza with color and texture, veggies are the perfect topping. And you’re only limited by your imagination. Everything from peppers and mushrooms, to eggplant and onions make for an exciting and tasty veggie pizza.",
    },
    {
        id: 3,
        image: "./assets/img/3.jpg",
        name: "Pepperoni Pizza",
        description:
            "There’s a reason this is one of the most popular types of pizza. Who doesn’t love biting into a crispy, salty round of pepperoni?",
    },
    {
        id: 4,
        image: "./assets/img/5.jpg",
        name: "Margherita Pizza",
        description:
            "Deceptively simple, the Margherita pizza is made with basil, fresh mozzarella, and tomatoes. There’s a reason it’s an Italian staple and one of the most popular types of pizza in the country.",
    },
];

export default function ImageStepSlider() {
    const [step, setStep] = useState(0);

    const nextHandler = function () {
        step < DATA.length - 1 && setStep((c) => c + 1);
    };

    const preHandler = function () {
        step > 0 && setStep((c) => c - 1);
    };

    return (
        <>
            <div className="imageStepSlider__container">
                <div
                    className="imageStepSlider__container--box"
                    style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${DATA[step].image})` }}
                >
                    <div className="imageStepSlider__container--box--content">
                        <h3>{DATA[step].name}</h3>
                        <p>{DATA[step].description}</p>
                        <button>Contact Me</button>
                    </div>

                    <div className="imageStepSlider__container--box--btns">
                        <button className="imageStepSlider__container--box--btns-left" onClick={preHandler}>
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button className="imageStepSlider__container--box--btns-right" onClick={nextHandler}>
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

// <div
//     className="imageStepSlider__container--box"
//     style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${"./assets/img/4.jpg"})` }}
// >
//     <div className="imageStepSlider__container--box--content">
//         <h3>Cheese Pizza</h3>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, perferendis!</p>
//         <button>Contact Me</button>
//     </div>

//     <div className="imageStepSlider__container--box--btns">
//         <button className="imageStepSlider__container--box--btns-left">
//             <span class="material-symbols-outlined">chevron_left</span>
//         </button>
//         <button className="imageStepSlider__container--box--btns-right">
//             <span class="material-symbols-outlined">chevron_right</span>
//         </button>
//     </div>
// </div>;
