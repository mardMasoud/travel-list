import { useState } from "react";
import Flashcard from "./Flashcard";

const Flashcards = ({ fc }) => {
    const [sty, setSty] = useState(null);
    return (
        <div className="flashcards">
            {fc.map((item) => (
                <Flashcard
                    q={item.question}
                    a={item.answer}
                    id={item.id}
                    key={item.id}
                    sty={sty}
                    show={() => {
                        if (item.id === sty) setSty(0);
                        else setSty(item.id);
                    }}
                />
            ))}
        </div>
    );
};

export default Flashcards;
