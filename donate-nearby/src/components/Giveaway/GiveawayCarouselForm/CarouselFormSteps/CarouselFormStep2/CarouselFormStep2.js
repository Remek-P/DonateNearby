import React from "react";
import NextOrConfirmButton from "../../GiveawayCarouselFormButtons/NextOrConfirmButton/NextOrConfirmButton";
import PreviousButton from "../../GiveawayCarouselFormButtons/PreviousButton/PreviousButton";
import GiveawayCarouselFormStepCount from "../../GiveawayCarouselFormStepCount/GiveawayCarouselFormStepCount";

export default function CarouselFormStep2({ formData, setFormData, step, setStep }) {

    const bagNoOption1 = "1";
    const bagNoOption2 = "2";
    const bagNoOption3 = "3";
    const bagNoOption4 = "4";
    const bagNoOption5 = "5";

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
                            value={bagNoOption1}
                            selected={formData.bagNumber === bagNoOption1}
                        >
                            {bagNoOption1}
                        </option>
                        <option
                            value={bagNoOption2}
                            selected={formData.bagNumber === bagNoOption2}
                        >
                            {bagNoOption2}
                        </option>
                        <option
                            value={bagNoOption3}
                            selected={formData.bagNumber === bagNoOption3}
                        >
                            {bagNoOption3}
                        </option>
                        <option
                            value={bagNoOption4}
                            selected={formData.bagNumber === bagNoOption4}
                        >
                            {bagNoOption4}
                        </option>
                        <option
                            value={bagNoOption5}
                            selected={formData.bagNumber === bagNoOption5}
                        >
                            {bagNoOption5}
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