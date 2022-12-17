import React from "react";

export default function Step3Location({ formData, setFormData }) {

    const locationNoOption1 = "Poznań";
    const locationNoOption2 = "Warszawa";
    const locationNoOption3 = "Karków";
    const locationNoOption4 = "Wrocław";
    const locationNoOption5 = "Katowice";

    return (
        <div className="carouselFormStep3Location">
            <label htmlFor="location" id="location">Lokalizacja:</label>
            <select
                name="location"
                className="carouselFormStep3Location_container"
                onChange={event => setFormData({...formData, location: event.target.value})}
            >
                <option value="">— wybierz —</option>
                <option
                    value={locationNoOption1}
                    selected={formData.location === locationNoOption1}
                >
                    {locationNoOption1}
                </option>
                <option
                    value={locationNoOption2}
                    selected={formData.location === locationNoOption2}
                >
                    {locationNoOption2}
                </option>
                <option
                    value={locationNoOption3}
                    selected={formData.location === locationNoOption3}
                >
                    {locationNoOption3}
                </option>
                <option
                    value={locationNoOption4}
                    selected={formData.location === locationNoOption4}
                >
                    {locationNoOption4}
                </option>
                <option
                    value={locationNoOption5}
                    selected={formData.location === locationNoOption5}
                >
                    {locationNoOption5}
                </option>
            </select>
        </div>
    )
}