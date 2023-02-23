import React from "react";

export default function Step3Location({ formData, setFormData }) {

    const locationNoOption1 = "Poznań";
    const locationNoOption2 = "Warszawa";
    const locationNoOption3 = "Karków";
    const locationNoOption4 = "Wrocław";
    const locationNoOption5 = "Katowice";

    const locationNoOptions = [locationNoOption1, locationNoOption2, locationNoOption3, locationNoOption4, locationNoOption5]

    const chooseLocationOption = () => {
        return (
            locationNoOptions.map((el, index) =>
                <option
                    key={index}
                    value={locationNoOptions[index]}
                    selected={formData.location === locationNoOptions[index]}
                >
                    {locationNoOptions[index]}
                </option>)
        )
    }

    return (
        <div className="carouselFormStep3Location">
            <label htmlFor="location" id="location">Lokalizacja:</label>
            <select
                name="location"
                className="carouselFormStep3Location_container"
                onChange={event => setFormData({...formData, location: event.target.value})}
            >
                <option value="">— wybierz —</option>
                {
                    chooseLocationOption()
                }
            </select>
        </div>
    )
}