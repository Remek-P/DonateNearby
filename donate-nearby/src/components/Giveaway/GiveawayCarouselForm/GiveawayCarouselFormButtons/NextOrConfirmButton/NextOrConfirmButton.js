import React from "react";

export default function NextOrConfirmButton({ step, buttonClassName }) {

    const dataToolTip = () => {
        if (step === 0) {
            return "Wybierz co chcesz oddać"
        } else if (step === 1) {
            return "Podaj liczbę worków"
        } else if (step === 2) {
            return "Wskaż komu chcesz pomóc"
        }
    };



    const displayNextOrConfirm = () => {
        return step === 4 ? "Potwierdzam" : "Dalej"
    }

    return (
        <button className={`formButton ${buttonClassName}`}
                data-tool-tip={dataToolTip()}
        >
            {displayNextOrConfirm()}
        </button>
    )
}