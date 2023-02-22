import React from "react";
import NextOrConfirmButton from "../../GiveawayCarouselFormButtons/NextOrConfirmButton/NextOrConfirmButton";
import PreviousButton from "../../GiveawayCarouselFormButtons/PreviousButton/PreviousButton";
import GiveawayCarouselFormStepCount from "../../GiveawayCarouselFormStepCount/GiveawayCarouselFormStepCount";

export default function CarouselFormStep2({ formData, setFormData, step, handlePrevious, handleNext }) {
    
    const bagNoOption = ["1", "2", "3", "4", "5"];

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
                        <option value="" selected hidden>— wybierz —</option>
                        {bagNoOption.map((el, index) =>
                            <option
                                key={index}
                                value={bagNoOption[index]}
                                selected={formData.bagNumber === bagNoOption[index]}
                            >
                                {bagNoOption[index]}
                            </option>)
                        }
                    </select>
                <div className="carouselFormStep2-buttonContainer">
                    <PreviousButton handlePrevious={handlePrevious}/>
                    <NextOrConfirmButton />
                </div>
            </form>
        </div>
    )
}