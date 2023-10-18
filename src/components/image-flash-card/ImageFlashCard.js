import { useState } from "react";
import DATA from "./database";

export default function ImageFlashCard() {
    const [selectedID, setSelectedID] = useState(null);

    const cardHandler = function (id) {
        setSelectedID(id === selectedID ? null : id);
    };

    return (
        <>
            <div className="imageFlashCard">
                {DATA.map((item) => (
                    <div onClick={() => cardHandler(item.id)} className="imageFlashCard__container">
                        {selectedID === item.id ? (
                            <p className="imageFlashCard__container--name">{item.name}</p>
                        ) : (
                            <img src={item.image} alt={item.name} key={item.id} />
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}
