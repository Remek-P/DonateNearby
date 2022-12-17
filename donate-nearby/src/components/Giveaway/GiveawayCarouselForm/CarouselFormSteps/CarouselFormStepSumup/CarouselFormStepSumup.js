import React from "react";
import PreviousButton from "../../GiveawayCarouselFormButtons/PreviousButton/PreviousButton";
import NextOrConfirmButton from "../../GiveawayCarouselFormButtons/NextOrConfirmButton/NextOrConfirmButton";



export default function CarouselFormStepSumup({ formData, setFormData, step, setStep }) {

    const bagDeclination = () => {
        if (formData.bagNumber === 1) {
            return "worek"
        } else if (formData.bagNumber <= 4) {
            return "worki"
        } else {
            return "worków"
        }
    }

    const handlePrevious = (e) => {
        e.preventDefault();
        setStep((previousStep) => previousStep - 1)
    };

    const handleNext = (e) => {
        e.preventDefault();
        setStep((previousStep) => previousStep + 1)
    };

    return (
        <section className="CarouselFormStep4">
            <form
                name="giveawayForm"
                onSubmit={handleNext}
            >
                <legend>Podsumowanie Twojej darowizny</legend>

                <div>
                    <h5 className="">Oddajesz</h5>
                    <ul>
                        <li>
                            <div>
                                {formData.bagNumber} {bagDeclination()}, {formData.giveaway}, {formData.aidTarget}
                            </div>
                        </li>
                        <li>
                            <div>

                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5 className="">Adres odbioru:</h5>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <h5 className="">Termin odbioru:</h5>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="buttonContainer">
                    <PreviousButton handlePrevious={handlePrevious}/>
                    <NextOrConfirmButton />
                </div>
            </form>
        </section>
    )
}