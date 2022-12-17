import React from "react";

export default function PreviousButton({ handlePrevious }) {

    return (
        <button
            className="previousButton"
            onClick={handlePrevious}
        >
            Wstecz
        </button>
    )
}