import { useState } from "react";

const Flashcard = ({ q, id, a,show,sty }) => {


    function handleClick(id) {
     show(id)
    }
    return (
        <div className={id === sty ? "selected" : ""} onClick={() => handleClick(id)}>
            <p>{id === sty ? a : q}</p>
        </div>
    );
};

export default Flashcard;
