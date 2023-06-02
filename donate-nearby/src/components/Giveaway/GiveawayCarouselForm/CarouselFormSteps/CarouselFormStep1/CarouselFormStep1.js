import React from "react";

import NextOrConfirmButton from "../../GiveawayCarouselFormButtons/NextOrConfirmButton/NextOrConfirmButton";
import GiveawayCarouselFormStepCount from "../../GiveawayCarouselFormStepCount/GiveawayCarouselFormStepCount";

export default function CarouselFormStep1({ formData, setFormData, step, handleNext }) {

    const giveawayOption1 = "ubrania do ponownego użycia";
    const giveawayOption2 = "ubrania do wyrzucenia";
    const giveawayOption3 = "zabawki";
    const giveawayOption4 = "książki";
    const giveawayOption5 = "inne";

    const giveawayOptions = [giveawayOption1, giveawayOption2, giveawayOption3, giveawayOption4, giveawayOption5];

    const buttonClassName = "padding1"

    const chooseGiveawayOption = () => {
        return (
            giveawayOptions.map(el =>
                <div key={el} className="carouselFormStep1__form--container">
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
                        className="carouselFormStep1__form--container__label"
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
                className="carouselFormStep1__form"
                name="giveawayForm"
                onSubmit={handleNext}
            >
                <legend className="carouselFormStep1__form__header">
                    Zaznacz co chcesz oddać:
                </legend>
                {
                    chooseGiveawayOption()
                }
                <div className="carouselFormStep1__form--buttonContainer">
                    <NextOrConfirmButton buttonClassName={buttonClassName} />
                </div>
            </form>
        </div>
    )
}