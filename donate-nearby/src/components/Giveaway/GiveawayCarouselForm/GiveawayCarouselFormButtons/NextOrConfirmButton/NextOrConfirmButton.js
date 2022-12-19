import React from "react";

export default function NextOrConfirmButton({ step }) {

    const displayNextOrConfirm = () => {
        console.log(step)
        return step === 4 ? "Potwierdzam" : "Dalej"
    }

    return (
        <button className="nextButton">
            {displayNextOrConfirm()}
        </button>
    )
}