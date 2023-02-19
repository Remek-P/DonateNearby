import React from "react";
import NextOrConfirmButton from "../../GiveawayCarouselFormButtons/NextOrConfirmButton/NextOrConfirmButton";
import PreviousButton from "../../GiveawayCarouselFormButtons/PreviousButton/PreviousButton";
import GiveawayCarouselFormStepCount from "../../GiveawayCarouselFormStepCount/GiveawayCarouselFormStepCount";

export default function CarouselFormStep2({ formData, setFormData, step, setStep }) {
    
    const bagNoOption = [1, 2, 3, 4, 5]

    const handlePrevious = (e) => {
        e.preventDefault();
        setStep((previousStep) => previousStep - 1)
    };

    const handleNext = (e) => {
        e.preventDefault();
        setStep((previousStep) => previousStep + 1)
    };

    return (
        <div className="carouselFormStep2">
            <GiveawayCarouselFormStepCount step={step} />
            <form
                className="carouselFormStep2"
                name="giveawayForm"
                onSubmit={handleNext}
            >
                    <h3 className="carouselFormStep2__header">
                        Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
                    </h3>
                <label htmlFor="bagNo" id="location">Liczba 60l worków:</label>
                    <select
                        name="location"
                        className="carouselFormStep2_container"
                        onChange={event => setFormData({ ...formData, bagNumber: event.target.value})}
                        required
                    >
                        <option value="">— wybierz —</option>
                        <option
                            value={bagNoOption[0]}
                            selected={formData.bagNumber === bagNoOption[0]}
                        >
                            {bagNoOption[0]}
                        </option>
                        <option
                            value={bagNoOption[1]}
                            selected={formData.bagNumber === bagNoOption[1]}
                        >
                            {bagNoOption[1]}
                        </option>
                        <option
                            value={bagNoOption[2]}
                            selected={formData.bagNumber === bagNoOption[2]}
                        >
                            {bagNoOption[2]}
                        </option>
                        <option
                            value={bagNoOption[3]}
                            selected={formData.bagNumber === bagNoOption[3]}
                        >
                            {bagNoOption[3]}
                        </option>
                        <option
                            value={bagNoOption[4]}
                            selected={formData.bagNumber === bagNoOption[4]}
                        >
                            {bagNoOption[4]}
                        </option>
                    </select>
                <div className="carouselFormStep2-buttonContainer">
                    <PreviousButton handlePrevious={handlePrevious}/>
                    <NextOrConfirmButton />
                </div>
            </form>
        </div>
    )
}