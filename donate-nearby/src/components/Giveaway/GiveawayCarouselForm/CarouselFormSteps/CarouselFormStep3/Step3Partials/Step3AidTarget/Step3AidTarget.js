import React from "react";

export default function Step3AidTarget({ formData, setFormData }) {

    const aidOption1 = "dzieciom";
    const aidOption2 = "samotnym matkom";
    const aidOption3 = "bezdomnym";
    const aidOption4 = "niepełnosprawnym";
    const aidOption5 = "osobom starszym";

    return (
        <div className="carouselFormStep3AidTarget">
            <legend className="carouselFormStep3AidTarget__header">
                Komu chcesz pomóc?
            </legend>
            <div>
                <div className="carouselFormStep3AidTarget-container">
                    <input
                        type="radio"
                        id={aidOption1}
                        name="aidTarget"
                        value={aidOption1}
                        onChange={event => setFormData({...formData, aidTarget: event.target.value})}
                        checked={formData.aidTarget === "dzieciom"}
                        required
                    />
                    <label
                        htmlFor={aidOption1}
                        className="carouselFormStep3AidTarget-container__label"
                    >
                        {aidOption1}
                    </label>
                </div>
                <div className="carouselFormStep3AidTarget-container">
                    <input
                        type="radio"
                        id={aidOption2}
                        name="aidTarget"
                        value={aidOption2}
                        onChange={event => setFormData({...formData, aidTarget: event.target.value})}
                        checked={formData.aidTarget === aidOption2}
                    />
                    <label
                        htmlFor={aidOption2}
                        className="carouselFormStep3AidTarget-container__label"
                    >
                        {aidOption2}
                    </label>
                </div>
                <div className="carouselFormStep3AidTarget-container">
                    <input
                        type="radio"
                        id={aidOption3}
                        name="aidTarget"
                        value={aidOption3}
                        onChange={event => setFormData({...formData, aidTarget: event.target.value})}
                        checked={formData.aidTarget === aidOption3}
                    />
                    <label
                        htmlFor={aidOption3}
                        className="carouselFormStep3AidTarget-container__label"
                    >
                        {aidOption3}
                    </label>
                </div>
                <div className="carouselFormStep3AidTarget-container">
                    <input
                        type="radio"
                        id={aidOption4}
                        name="aidTarget"
                        value={aidOption4}
                        onChange={event => setFormData({...formData, aidTarget: event.target.value})}
                        checked={formData.aidTarget === aidOption4}
                    />
                    <label
                        htmlFor={aidOption4}
                        className="carouselFormStep3AidTarget-container__label"
                    >
                        {aidOption4}
                    </label>
                </div>
                <div className="carouselFormStep3AidTarget-container">
                    <input
                        type="radio"
                        id={aidOption5}
                        name="aidTarget"
                        value={aidOption5}
                        onChange={event => setFormData({...formData, aidTarget: event.target.value})}
                        checked={formData.aidTarget === aidOption5}
                    />
                    <label
                        htmlFor={aidOption5}
                        className="carouselFormStep3AidTarget-container__label"
                    >
                        {aidOption5}
                    </label>
                </div>
            </div>
        </div>
    )
}