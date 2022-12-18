import React from "react";

import GiveawayCarouselFormStepCount from "../../GiveawayCarouselFormStepCount/GiveawayCarouselFormStepCount";
import PreviousButton from "../../GiveawayCarouselFormButtons/PreviousButton/PreviousButton";
import NextOrConfirmButton from "../../GiveawayCarouselFormButtons/NextOrConfirmButton/NextOrConfirmButton";

export default function CarouselFormStep4({ formData, setFormData, step, setStep }) {

    const street = "street";
    const city = "city";
    const postalCode = "postal";
    const phoneNumber = "phoneNumber";
    const date = "date";
    const time = "time";
    const notes = "notes";

    const handlePrevious = (e) => {
        e.preventDefault();
        setStep((previousStep) => previousStep - 1)
    };

    const handleNext = (e) => {
        e.preventDefault();
        setStep((previousStep) => previousStep + 1)
    };

    return (
        <section className="carouselFormStep4">
            <GiveawayCarouselFormStepCount step={step} />
            {/*TODO: do I need id and name everywhere*/}
            <form
                name="giveawayForm"
                onSubmit={handleNext}
            >
                <legend className="carouselFormStep4__header">Podaj adres oraz termin odbioru rzecz przez kuriera</legend>
                <div className="carouselFormStep4-container">
                    <div>
                        <h5>Adres odbioru:</h5>
                        <div>
                            <label htmlFor={street}>Ulica</label>
                            <input
                                type="text"
                                value={formData.address.street}
                                onChange={event => setFormData({
                                    ...formData,
                                    address: {...formData.address, street: event.target.value}
                                })}
                                name={street}
                                id={street}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor={city}>Miasto</label>
                            <input
                                type="text"
                                value={formData.address.city}
                                onChange={event => setFormData({
                                    ...formData,
                                    address: {...formData.address, city: event.target.value}
                                })}
                                name={city}
                                id={city}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor={postalCode}>Kod pocztowy</label>
                            <input
                                type="text"
                                pattern="(\d{2})-(\d{3})"
                                value={formData.address.postalCode}
                                onChange={event => setFormData({
                                    ...formData,
                                    address: {...formData.address, postalCode: event.target.value}
                                })}
                                name={postalCode}
                                id={postalCode}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor={phoneNumber}>Numer telefonu</label>
                            <input
                                type="tel"
                                pattern="((\+|00)\d{1,2})?(\s|-)?(\d{3})(\s|-)?(\d{3})(\s|-)?(\d{3})"
                                value={formData.address.phoneNumber}
                                onChange={event => setFormData({
                                    ...formData,
                                    address: {...formData.address, phoneNumber: event.target.value}
                                })}
                                name={phoneNumber}
                                id={phoneNumber}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <h5>Termin odbioru:</h5>
                        <div>
                            <label htmlFor={date}>Data</label>
                            <input
                                type={date}
                                value={formData.schedulePackage.date}
                                onChange={event => setFormData({
                                    ...formData,
                                    schedulePackage: {...formData.schedulePackage, date: event.target.value}
                                })}
                                name={date}
                                id={date}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor={time}>Godzina</label>
                            <input
                                type={time}
                                value={formData.schedulePackage.time}
                                onChange={event => setFormData({
                                    ...formData,
                                    schedulePackage: {...formData.schedulePackage, time: event.target.value}
                                })}
                                name={time}
                                id={time}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor={notes}>Uwagi dla kuriera</label>
                            <textarea
                                value={formData.schedulePackage.notes}
                                onChange={event => setFormData({
                                    ...formData,
                                    schedulePackage: {...formData.schedulePackage, notes: event.target.value}
                                })}
                                autoCorrect="on"
                                spellCheck={true}
                                rows="3"
                                name={notes}
                                id={notes}
                            />
                        </div>
                    </div>
                </div>
                <div className="carouselFormStep4-buttonContainer">
                    <PreviousButton handlePrevious={handlePrevious}/>
                    <NextOrConfirmButton />
                </div>

            </form>
        </section>
    )
}