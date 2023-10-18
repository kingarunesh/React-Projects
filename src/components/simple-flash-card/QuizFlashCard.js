import { useState } from "react";

import DATA from "./database";

export default function QuizFlashCard() {
    const [selectdId, setSelectedId] = useState(null);

    const selectHandler = function (id) {
        setSelectedId((currentID) => (currentID !== id ? id : null));
    };

    return (
        <>
            <div className="quizFlashCard">
                {DATA.map((item) => (
                    <div
                        style={{ backgroundColor: item.id === selectdId ? "red" : "" }}
                        className="quizFlashCard__card"
                        key={item.id}
                        // onClick={() => setSelectedId(item.id)}
                        onClick={() => selectHandler(item.id)}
                    >
                        {selectdId === item.id ? item.answer : item.question}
                    </div>
                ))}
            </div>
        </>
    );
}
