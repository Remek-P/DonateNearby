import React from "react";

import NextOrConfirmButton from "../../GiveawayCarouselFormButtons/NextOrConfirmButton/NextOrConfirmButton";
import GiveawayCarouselFormStepCount from "../../GiveawayCarouselFormStepCount/GiveawayCarouselFormStepCount";

export default function CarouselFormStep1({ formData, setFormData, step, handleNext }) {

    const giveawayOption1 = "ubrania, które nadają się do ponownego użycia";
    const giveawayOption2 = "ubrania, do wyrzucenia";
    const giveawayOption3 = "zabawki";
    const giveawayOption4 = "książki";
    const giveawayOption5 = "inne";

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
                <div className="carouselFormStep1_container">
                    <input
                        type="radio"
                        id="giveawayOption1"
                        name="giveawayForm"
                        value={giveawayOption1}
                        onChange={event => setFormData({...formData, giveaway: event.target.value})}
                        checked={formData.giveaway === giveawayOption1}
                        required
                    />
                    <label
                        htmlFor="giveawayOption1"
                        className="carouselFormStep1_container__label"
                    >
                        {giveawayOption1}
                    </label>
                </div>
                <div className="carouselFormStep1_container">
                    <input
                        type="radio"
                        id="giveawayOption2"
                        name="giveawayForm"
                        value={giveawayOption2}
                        onChange={event => setFormData({...formData, giveaway: event.target.value})}
                        checked={formData.giveaway === giveawayOption2}
                    />
                    <label
                        htmlFor="giveawayOption2"
                        className="carouselFormStep1_container__label"
                    >
                        {giveawayOption2}
                    </label>
                </div>
                <div className="carouselFormStep1_container">
                    <input
                        type="radio"
                        id="giveawayOption3"
                        name="giveawayForm"
                        value={giveawayOption3}
                        onChange={event => setFormData({...formData, giveaway: event.target.value})}
                        checked={formData.giveaway === giveawayOption3}
                    />
                    <label
                        htmlFor="giveawayOption3"
                        className="carouselFormStep1_container__label"
                    >
                        {giveawayOption3}
                    </label>
                </div>
                <div className="carouselFormStep1_container">
                    <input
                        type="radio"
                        id="giveawayOption4"
                        name="giveawayForm"
                        value={giveawayOption4}
                        onChange={event => setFormData({...formData, giveaway: event.target.value})}
                        checked={formData.giveaway === giveawayOption4}
                    />
                    <label
                        htmlFor="giveawayOption4"
                        className="carouselFormStep1_container__label"
                    >
                        {giveawayOption4}
                    </label>
                </div>
                <div className="carouselFormStep1_container">
                    <input
                        type="radio"
                        id="giveawayOption5"
                        name="giveawayForm"
                        value={giveawayOption5}
                        onChange={event => setFormData({...formData, giveaway: event.target.value})}
                        checked={formData.giveaway === giveawayOption5}
                    />
                    <label
                        htmlFor="giveawayOption5"
                        className="carouselFormStep1_container__label"
                    >
                        {giveawayOption5}
                    </label>
                </div>
                <div className="carouselFormStep1-buttonContainer">
                    <NextOrConfirmButton />
                </div>
            </form>
        </div>
    )
}