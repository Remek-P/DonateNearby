import React from "react";

export default function CarouselFormStep2({ formData, setFormData, setStep }) {

    const handlePrevious = (e) => {
        e.preventDefault();
        setStep((previousStep) => previousStep - 1)
    }

    const handleNext = (e) => {
        e.preventDefault();
        setStep((previousStep) => previousStep + 1)
    }

    console.log(formData.giveaway)

    return (
        <div className="carouselFormStep2">
            <h4 className="carouselFormStep2__stepCount">Krok 2/4</h4>
            <form className="carouselFormStep2">
                    <h3 className="carouselFormStep2__header">
                        Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
                    </h3>
                <label htmlFor="location" id="location">Liczba 60l worków:</label>
                    <select
                        name="location"
                        className="carouselFormStep2_container"
                        onChange={event => setFormData({ ...formData, bagNumber: event.target.value})}
                    >
                        <option value={0}>— wybierz —</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                <div className="carouselFormStep2-buttonContainer">
                    <button
                        className="carouselFormStep2-buttonContainer-previous"
                        onClick={handlePrevious}
                    >
                        Wstecz
                    </button>
                    <button
                        disabled={formData.bagNumber === ""}
                        className="carouselFormStep2-buttonContainer-next"
                        onClick={handleNext}
                    >
                        Dalej
                    </button>
                </div>
            </form>
        </div>
    )
}