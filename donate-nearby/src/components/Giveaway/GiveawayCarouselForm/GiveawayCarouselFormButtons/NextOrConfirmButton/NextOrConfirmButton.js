import React from "react";

export default function NextOrConfirmButton({ step }) {

    const displayNextOrConfirm = () => {
        return step === 4 ? "Potwierdzam" : "Dalej"
    }

    return (
        <button className="nextButton">
            {displayNextOrConfirm()}
        </button>
    )
}