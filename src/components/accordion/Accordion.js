import { useState } from "react";

import "./accordion.scss";

const DATA = [
    {
        id: 0,
        title: "What is HTML?",
        description:
            "HTML Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime amet, dolores illo sequiperspiciatis, fugiat beatae iste, quas culpa tenetur asperiores? Eius et incidunt eos illo animi vitaequod ipsam.",
    },

    {
        id: 1,
        title: "What is CSS?",
        description:
            "CSS Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime amet, dolores illo sequiperspiciatis, fugiat beatae iste, quas culpa tenetur asperiores? Eius et incidunt eos illo animi vitaequod ipsam.",
    },

    {
        id: 2,
        title: "What is JavaScript?",
        description:
            "JavaScript Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime amet, dolores illo sequiperspiciatis, fugiat beatae iste, quas culpa tenetur asperiores? Eius et incidunt eos illo animi vitaequod ipsam.",
    },
];

export default function Accordion() {
    const [open, setOpen] = useState(null);

    const openHandler = function (id) {
        setOpen((c) => (c === id ? null : id));
    };

    return (
        <>
            <div className="accordion">
                <div className="accordion__container">
                    {DATA.map((item) => (
                        <section className="accordion__container--box" key={item.id}>
                            <div className="accordion__container--box--number">
                                {item.id + 1 < 10 ? `0${item.id + 1}` : item.id}
                            </div>

                            <p className="accordion__container--box--title">{item.title}</p>

                            <div className="accordion__container--box--icon" onClick={() => openHandler(item.id)}>
                                <span className="material-symbols-outlined">add</span>
                            </div>
                        </section>
                    ))}
                    {open && <p className="accordion__container--box--body">{DATA[open].description}</p>}
                </div>
            </div>
        </>
    );
}
