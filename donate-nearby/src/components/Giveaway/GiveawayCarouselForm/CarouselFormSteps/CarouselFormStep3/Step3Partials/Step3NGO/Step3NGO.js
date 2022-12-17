import React from "react";

export default function Step3NGO({ formData, setFormData }) {
    return (
            <div className="Step3NGO">
                <label htmlFor="NGO">Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
                <input
                    type="text"
                    value={formData.NGO}
                    onChange={event => setFormData({...formData, NGO: event.target.value})}
                    name="NGO"
                    id="NGO"
                />
            </div>
    )
}