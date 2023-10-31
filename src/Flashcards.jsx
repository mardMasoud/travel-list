import { useState } from "react";

const Flashcards = ({ fc }) => {
    const [sty, setSty] = useState(null);

    function handleClick(id) {
        if (id === sty) setSty(0);
        else setSty(id);
    }
    return (
        <div className="flashcards">
            {fc.map((item) => (
                <div key={item.id}
                    className={item.id === sty ? "selected" : ""}
                    onClick={() => handleClick(item.id)}
                >
                    <p>{item.id === sty ?item.answer :  item.question}</p>
                </div>
            ))}
        </div>
    );
};

export default Flashcards;
