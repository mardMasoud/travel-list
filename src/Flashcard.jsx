import { useState } from "react";

const Flashcard = ({ q, id, a }) => {
    const [sty, setSty] = useState(null);

    function handleClick(id) {
        if (id === sty) setSty(0);
        else setSty(id);
    }
    return (
        <div className={id === sty ? "selected" : ""} onClick={() => handleClick(id)}>
            <p>{id === sty ? a : q}</p>
        </div>
    );
};

export default Flashcard;
