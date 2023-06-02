import React from "react";

export default function PreviousButton({ handlePrevious, buttonClassName }) {

    return (
        <button
            className={`formButton ${buttonClassName}`}
            onClick={handlePrevious}
        >
            Wstecz
        </button>
    )
}