import React from "react";

export default function NextOrConfirmButton({ step, buttonClassName }) {

    const displayNextOrConfirm = () => {
        return step === 4 ? "Potwierdzam" : "Dalej"
    }

    return (
        <button className={`formButton ${buttonClassName}`}>
            {displayNextOrConfirm()}
        </button>
    )
}