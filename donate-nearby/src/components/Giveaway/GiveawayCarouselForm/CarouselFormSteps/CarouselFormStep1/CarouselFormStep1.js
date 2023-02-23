import React from "react";

import NextOrConfirmButton from "../../GiveawayCarouselFormButtons/NextOrConfirmButton/NextOrConfirmButton";
import GiveawayCarouselFormStepCount from "../../GiveawayCarouselFormStepCount/GiveawayCarouselFormStepCount";

export default function CarouselFormStep1({ formData, setFormData, step, handleNext }) {

    const giveawayOption1 = "ubrania, które nadają się do ponownego użycia";
    const giveawayOption2 = "ubrania, do wyrzucenia";
    const giveawayOption3 = "zabawki";
    const giveawayOption4 = "książki";
    const giveawayOption5 = "inne";

    const giveawayOptions = [giveawayOption1, giveawayOption2, giveawayOption3, giveawayOption4, giveawayOption5]

    const chooseGiveawayOption = () => {
        return (
            giveawayOptions.map(el =>
                <div key={el} className="carouselFormStep1_container">
                    <input
                        type="radio"
                        id={el}
                        name="giveawayForm"
                        value={el}
                        onChange={event => setFormData({...formData, giveaway: event.target.value})}
                        checked={formData.giveaway === el}
                        required
                    />
                    <label
                        htmlFor={el}
                        className="carouselFormStep1_container__label"
                    >
                        {el}
                    </label>
                </div>
            )
        )
    }

    return (
        <div className="carouselFormStep1">
            <GiveawayCarouselFormStepCount step={step} />
            <form
                className="carouselFormStep1"
                name="giveawayForm"
                onSubmit={handleNext}
            >
                <legend className="carouselFormStep1__header">
                    Zaznacz co chcesz oddać:
                </legend>
                {
                    chooseGiveawayOption()
                }
                <div className="carouselFormStep1-buttonContainer">
                    <NextOrConfirmButton />
                </div>
            </form>
        </div>
    )
}