import React from "react";
import NextButton from "../../GiveawayCarouselFormButtons/NextButton/NextButton";
import PreviousButton from "../../GiveawayCarouselFormButtons/PreviousButton/PreviousButton";
import GiveawayCarouselFormStepCount from "../../GiveawayCarouselFormStepCount/GiveawayCarouselFormStepCount";

export default function CarouselFormStep2({ formData, setFormData, step, setStep }) {

    const handlePrevious = (e) => {
        e.preventDefault();
        setStep((previousStep) => previousStep - 1)
    };

    const handleNext = (e) => {
        e.preventDefault();
        setStep((previousStep) => previousStep + 1)
    };

    console.log("Step2: ", formData.giveaway);
    console.log("Step2: ", typeof formData.bagNumber);

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
                <label htmlFor="location" id="location">Liczba 60l worków:</label>
                    <select
                        name="location"
                        className="carouselFormStep2_container"
                        onChange={event => setFormData({ ...formData, bagNumber: event.target.value})}
                        required
                    >
                        <option value="">— wybierz —</option>
                        <option
                            value={1}
                            selected={formData.bagNumber === "1"}
                        >
                            1
                        </option>
                        <option
                            value={2}
                            selected={formData.bagNumber === "2"}
                        >
                            2
                        </option>
                        <option
                            value={3}
                            selected={formData.bagNumber === "3"}
                        >
                            3
                        </option>
                        <option
                            value={4}
                            selected={formData.bagNumber === "4"}
                        >
                            4
                        </option>
                        <option
                            value={5}
                            selected={formData.bagNumber === "5"}
                        >
                            5
                        </option>
                    </select>
                <div className="carouselFormStep2-buttonContainer">
                    <PreviousButton handlePrevious={handlePrevious}/>
                    <NextButton />
                </div>
            </form>
        </div>
    )
}