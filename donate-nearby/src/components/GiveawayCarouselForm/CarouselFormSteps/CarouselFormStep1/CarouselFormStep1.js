import React from "react";

export default function CarouselFormStep1({ formData, setFormData, setStep }) {

    const handleNext = (e) => {
        e.preventDefault();

        setStep((previousStep) => previousStep + 1)
    }

    console.log(formData.giveaway)

    return (
        <div className="carouselFormStep1">
            <h4 className="carouselFormStep1__stepCount">Krok 1/4</h4>
            <form className="carouselFormStep1">
                <fieldset>
                    <legend className="carouselFormStep1__header">
                        Zaznacz co chcesz oddać:
                    </legend>
                    <div className="carouselFormStep1_container">
                        <input
                            type="radio"
                            id="clothesReusable"
                            name="giveawayForm"
                            value="clothesReusable"
                            onChange={event => setFormData({ ...formData, giveaway: event.target.value})}
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
                            onChange={event => setFormData({ ...formData, giveaway: event.target.value})}
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
                            onChange={event => setFormData({ ...formData, giveaway: event.target.value})}
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
                            onChange={event => setFormData({ ...formData, giveaway: event.target.value})}
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
                            onChange={event => setFormData({ ...formData, giveaway: event.target.value})}
                        />
                        <label
                            htmlFor="other"
                            className="carouselFormStep1_container__label"
                        >
                            Inne
                        </label>
                    </div>
                    <button
                        disabled={formData.giveaway === ""}
                        className="carouselFormStep1-next"
                        onClick={handleNext}
                    >
                        Dalej
                    </button>
                </fieldset>
            </form>
        </div>
    )
}