import React from "react";
import NextButton from "../../GiveawayCarouselFormButtons/NextButton/NextButton";
import GiveawayCarouselFormStepCount from "../../GiveawayCarouselFormStepCount/GiveawayCarouselFormStepCount";

export default function CarouselFormStep1({ formData, setFormData, step, setStep }) {

    const handleNext = (e) => {
        e.preventDefault();
        setStep((previousStep) => previousStep + 1)
    }

    console.log(formData.giveaway)

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
                        id="clothesReusable"
                        name="giveawayForm"
                        value="clothesReusable"
                        onChange={event => setFormData({...formData, giveaway: event.target.value})}
                        checked={formData.giveaway === "clothesReusable"}
                        required
                    />
                    <label
                        htmlFor="clothesReusable"
                        className="carouselFormStep1_container__label"
                    >
                        ubrania, które nadają się do ponownego użycia
                    </label>
                </div>
                <div className="carouselFormStep1_container">
                    <input
                        type="radio"
                        id="clothesGarbage"
                        name="giveawayForm"
                        value="clothesGarbage"
                        onChange={event => setFormData({...formData, giveaway: event.target.value})}
                        checked={formData.giveaway === "clothesGarbage"}
                    />
                    <label
                        htmlFor="clothesGarbage"
                        className="carouselFormStep1_container__label"
                    >
                        ubrania, do wyrzucenia
                    </label>
                </div>
                <div className="carouselFormStep1_container">
                    <input
                        type="radio"
                        id="toys"
                        name="giveawayForm"
                        value="toys"
                        onChange={event => setFormData({...formData, giveaway: event.target.value})}
                        checked={formData.giveaway === "toys"}
                    />
                    <label
                        htmlFor="toys"
                        className="carouselFormStep1_container__label"
                    >
                        zabawki
                    </label>
                </div>
                <div className="carouselFormStep1_container">
                    <input
                        type="radio"
                        id="books"
                        name="giveawayForm"
                        value="books"
                        onChange={event => setFormData({...formData, giveaway: event.target.value})}
                        checked={formData.giveaway === "books"}
                    />
                    <label
                        htmlFor="books"
                        className="carouselFormStep1_container__label"
                    >
                        książki
                    </label>
                </div>
                <div className="carouselFormStep1_container">
                    <input
                        type="radio"
                        id="other"
                        name="giveawayForm"
                        value="other"
                        onChange={event => setFormData({...formData, giveaway: event.target.value})}
                        checked={formData.giveaway === "other"}
                    />
                    <label
                        htmlFor="other"
                        className="carouselFormStep1_container__label"
                    >
                        Inne
                    </label>
                </div>
                <div className="carouselFormStep1-buttonContainer">
                    <NextButton />
                </div>
            </form>
        </div>
    )
}