import React from "react";

export default function CarouselFormStep4({ formData, setFormData, setStep }) {

    return (
        <section className="CarouselFormStep4">
            <div>
                <h5></h5>
                <div>
                    <div className="CarouselFormStep4">
                        <label htmlFor="street">Ulica</label>
                        <input
                            type="text"
                            value={formData.address.street}
                            onChange={event => setFormData({...formData, address: {...formData.address, street: event.target.value}})}
                            name="street"
                            id="street"
                        />
                    </div>
                    <div className="CarouselFormStep4">
                        <label htmlFor="city">Miasto</label>
                        <input
                            type="text"
                            value={formData.address.city}
                            onChange={event => setFormData({...formData, address: {...formData.address, city: event.target.value}})}
                            name="city"
                            id="city"
                        />
                    </div>
                    <div className="CarouselFormStep4">
                        <label htmlFor="postal">Kod pocztowy</label>
                        <input
                            type="tel"
                            value={formData.address.postalCode}
                            onChange={event => setFormData({...formData, address: {...formData.address, postalCode: event.target.value}})}
                            name="postal"
                            id="postal"
                        />
                    </div>
                    <div className="CarouselFormStep4">
                        <label htmlFor="phoneNumber">Numer telefonu</label>
                        <input
                            type="tel"
                            value={formData.address.phoneNumber}
                            onChange={event => setFormData({...formData, address: {...formData.address, phoneNumber: event.target.value}})}
                            name="phoneNumber"
                            id="phoneNumber"
                        />
                    </div>
                </div>
                <h5></h5>
                <div>
                    <div className="CarouselFormStep4">
                        <label htmlFor="date">Data</label>
                        <input
                            type="date"
                            value={formData.schedulePackage.date}
                            onChange={event => setFormData({...formData, schedulePackage: {...formData.schedulePackage, date: event.target.value}})}
                            name="date"
                            id="date"
                        />
                    </div>
                    <div className="CarouselFormStep4">
                        <label htmlFor="time">Godzina</label>
                        <input
                            type="time"
                            value={formData.schedulePackage.time}
                            onChange={event => setFormData({...formData, schedulePackage: {...formData.schedulePackage, time: event.target.value}})}
                            name="time"
                            id="time"
                        />
                    </div>
                    <div className="CarouselFormStep4">
                        <label htmlFor="notes">Uwagi dla kuriera</label>
                        <textarea
                            value={formData.schedulePackage.notes}
                            onChange={event => setFormData({...formData, schedulePackage: {...formData.schedulePackage, notes: event.target.value}})}
                            name="notes"
                            id="notes"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
