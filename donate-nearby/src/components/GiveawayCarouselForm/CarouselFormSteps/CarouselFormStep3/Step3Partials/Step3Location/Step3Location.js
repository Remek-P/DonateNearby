import React from "react";

export default function Step3Location({ formData, setFormData }) {
    return (
        <div className="carouselFormStep3Location">
            <label htmlFor="location" id="location">Lokalizacja:</label>
            <select
                name="location"
                className="carouselFormStep3Location_container"
                onChange={event => setFormData({...formData, location: event.target.value})}
                required
            >
                <option value="">— wybierz —</option>
                <option
                    value="Poznań"
                    selected={formData.location === "Poznań"}
                >
                    Poznań
                </option>
                <option
                    value="Warszawa"
                    selected={formData.location === "Warszawa"}
                >
                    Warszawa<
                    /option>
                <option
                    value="Karków"
                    selected={formData.location === "Karków"}
                >
                    Karków
                </option>
                <option
                    value="Wrocław"
                    selected={formData.location === "Wrocław"}
                >
                    Wrocław
                </option>
                <option
                    value="Katowice"
                    selected={formData.location === "Katowice"}
                >
                    Katowice
                </option>
            </select>
        </div>
    )
}