import React from "react";

export default function Step3AidTarget({ formData, setFormData }) {
    return (
        <div className="carouselFormStep3AidTarget">
            <legend className="carouselFormStep3AidTarget__header">
                Komu chcesz pomóc?
            </legend>
            <div>
                <div className="carouselFormStep3AidTarget-container">
                    <input
                        type="radio"
                        id="children"
                        name="aidTarget"
                        value="children"
                        onChange={event => setFormData({...formData, aidTarget: event.target.value})}
                        checked={formData.aidTarget === "children"}
                        required
                    />
                    <label
                        htmlFor="children"
                        className="carouselFormStep3AidTarget-container__label"
                    >
                        dzieciom
                    </label>
                </div>
                <div className="carouselFormStep3AidTarget-container">
                    <input
                        type="radio"
                        id="singleMothers"
                        name="aidTarget"
                        value="singleMothers"
                        onChange={event => setFormData({...formData, aidTarget: event.target.value})}
                        checked={formData.aidTarget === "singleMothers"}
                    />
                    <label
                        htmlFor="singleMothers"
                        className="carouselFormStep3AidTarget-container__label"
                    >
                        samotnym matkom
                    </label>
                </div>
                <div className="carouselFormStep3AidTarget-container">
                    <input
                        type="radio"
                        id="homeless"
                        name="aidTarget"
                        value="homeless"
                        onChange={event => setFormData({...formData, aidTarget: event.target.value})}
                        checked={formData.aidTarget === "homeless"}
                    />
                    <label
                        htmlFor="homeless"
                        className="carouselFormStep3AidTarget-container__label"
                    >
                        bezdomnym
                    </label>
                </div>
                <div className="carouselFormStep3AidTarget-container">
                    <input
                        type="radio"
                        id="disabled"
                        name="aidTarget"
                        value="disabled"
                        onChange={event => setFormData({...formData, aidTarget: event.target.value})}
                        checked={formData.aidTarget === "disabled"}
                    />
                    <label
                        htmlFor="disabled"
                        className="carouselFormStep3AidTarget-container__label"
                    >
                        niepełnosprawnym
                    </label>
                </div>
                <div className="carouselFormStep3AidTarget-container">
                    <input
                        type="radio"
                        id="elderly"
                        name="aidTarget"
                        value="elderly"
                        onChange={event => setFormData({...formData, aidTarget: event.target.value})}
                        checked={formData.aidTarget === "elderly"}
                    />
                    <label
                        htmlFor="elderly"
                        className="carouselFormStep3AidTarget-container__label"
                    >
                        osobom starszym
                    </label>
                </div>
            </div>
        </div>
    )
}