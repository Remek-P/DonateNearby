import React from "react";
import PreviousButton from "../../GiveawayCarouselFormButtons/PreviousButton/PreviousButton";
import NextOrConfirmButton from "../../GiveawayCarouselFormButtons/NextOrConfirmButton/NextOrConfirmButton";



export default function CarouselFormStepSumup({ formData, setStep }) {

    const bagDeclination = () => {
        if (formData.bagNumber === "1") {
            return "worek"
        } else if (formData.bagNumber <= "4") {
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
        <section className="carouselFormSumup">
            <form
                name="giveawayForm"
                onSubmit={handleNext}
            >
                <legend className="carouselFormSumup__header">Podsumowanie Twojej darowizny</legend>
                <div className="carouselFormSumup-container">
                    <div>
                        <h5 className="">Oddajesz</h5>
                        <ul>
                            <li>
                                <div>{formData.bagNumber} {bagDeclination()}, {formData.giveaway}, {formData.aidTarget}</div>
                            </li>
                            <li>
                                <div>dla lokalizacji: {formData.location}</div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <h5 className="">Adres odbioru:</h5>
                            <ul>
                                <li>Ulica {formData.address.street}</li>
                                <li>Miasto {formData.address.city}</li>
                                <li>Numer<br/> telefonu {formData.address.phoneNumber}</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="">Termin odbioru:</h5>
                            <ul>
                                <li>Data {formData.schedulePackage.date}</li>
                                <li>Godzina {formData.schedulePackage.time}</li>
                                <li>Uwagi<br/> dla kuriera {formData.schedulePackage.notes}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="buttonContainer">
                    <PreviousButton handlePrevious={handlePrevious}/>
                    <NextOrConfirmButton/>
                </div>
            </form>
        </section>
    )
}