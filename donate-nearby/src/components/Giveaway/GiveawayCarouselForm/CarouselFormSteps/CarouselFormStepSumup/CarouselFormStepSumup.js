import React from "react";
import PreviousButton from "../../GiveawayCarouselFormButtons/PreviousButton/PreviousButton";
import NextOrConfirmButton from "../../GiveawayCarouselFormButtons/NextOrConfirmButton/NextOrConfirmButton";



export default function CarouselFormStepSumup({ formData, step, handlePrevious, handleNext }) {

    const bagDeclination = () => {
        if (formData.bagNumber === "1") {
            return "worek"
        } else if (formData.bagNumber <= "4") {
            return "worki"
        } else {
            return "worków"
        }
    }

    const showAidTarget = () => {
        const aidTargetArray = [...formData.aidTarget];
        return  aidTargetArray.map(target => `, ${target}`)
    }

    return (
        <section className="carouselFormSumup">
            <form
                name="giveawayForm"
                onSubmit={handleNext}
            >
                <legend className="carouselFormSumup__header">Podsumowanie Twojej darowizny</legend>
                <div>
                    <div>
                        <h5 className="">Oddajesz</h5>
                        <ul className="carouselFormSumup__ul-giveaway">
                            <li>{formData.bagNumber} {bagDeclination()}, {formData.giveaway}{showAidTarget()}</li>
                            <li>dla lokalizacji: {formData.location}</li>
                        </ul>
                    </div>
                    <div className="carouselFormSumup-container">
                        <div>
                            <h5 className="">Adres odbioru:</h5>
                            <ul>
                                <li className="carouselFormSumup-container__ul__li">
                                    <h6>Ulica</h6>
                                    <div>{formData.address.street}</div>
                                </li>
                                <li className="carouselFormSumup-container__ul__li">
                                    <h6>Miasto</h6>
                                    <div>{formData.address.city}</div>
                                </li>
                                <li className="carouselFormSumup-container__ul__li">
                                    <h6>Kod<br/> pocztowy</h6>
                                    <div>{formData.address.postalCode}</div>
                                </li>
                                <li className="carouselFormSumup-container__ul__li">
                                    <h6>Numer<br/> telefonu</h6>
                                    <div>{formData.address.phoneNumber}</div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="">Termin odbioru:</h5>
                            <ul>
                                <li className="carouselFormSumup-container__ul__li">
                                    <h6>Data</h6>
                                    <div>{formData.schedulePackage.date}</div>
                                </li>
                                <li className="carouselFormSumup-container__ul__li">
                                    <h6>Godzina</h6>
                                    <div>{formData.schedulePackage.time}</div>
                                </li>
                                <li className="carouselFormSumup-container__ul__li last">
                                    <h6 className="carouselFormSumup-container__ul__li__last">Uwagi<br/> dla kuriera</h6>
                                    <div className="carouselFormSumup-container__ul__li__last">{formData.schedulePackage.notes}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="buttonContainer">
                    <PreviousButton handlePrevious={handlePrevious}/>
                    <NextOrConfirmButton step={step} />
                </div>
            </form>
        </section>
    )
}