import React from "react";

export default function Step3AidTarget({ formData, setFormData }) {

    const aidOption1 = "dzieciom";
    const aidOption2 = "samotnym matkom";
    const aidOption3 = "bezdomnym";
    const aidOption4 = "niepełnosprawnym";
    const aidOption5 = "osobom starszym";

    // const handleChange = (event) => {
    //     setFormData(prev => {
    //         const { aidTarget } = formData;
    //         const tab = [...aidTarget];
    //         const tab2 = tab.map((el) => {
    //             if (el.name === event.target.value) {
    //                 el.value = !el.value;
    //             }
    //             return el;
    //         });
    //         return {
    //             ...prev,
    //             aidTarget: tab2
    //         };
    //     });
    // };

    const handleChange = (event) => {

        const {checked} = event.target

        if (checked) {
            setFormData({...formData, aidTarget: [...formData.aidTarget, event.target.value]})
        } else {
            setFormData({
                ...formData, aidTarget: [...formData.aidTarget].filter(element => {
                    return element !== event.target.value
                })
            })
        }
    };

    return (
        <div className="carouselFormStep3AidTarget">
            <legend className="carouselFormStep3AidTarget__header">
                Komu chcesz pomóc? *
            </legend>
            <div>
                <div className="carouselFormStep3AidTarget-container">
                    <input
                        type="checkbox"
                        id={aidOption1}
                        name="aidTarget"
                        // value={formData.aidTarget.find(el => el.name === aidOption1).name}
                        value={aidOption1}
                        onChange={handleChange}
                        // checked={formData.aidTarget.find(el => el.name === aidOption1).value}
                        checked={formData.aidTarget.find(target => target === aidOption1)}
                        required={formData.aidTarget.length === 0}
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
                        type="checkbox"
                        id={aidOption2}
                        name="aidTarget"
                        value={aidOption2}
                        onChange={handleChange}
                        checked={formData.aidTarget.find(target => target === aidOption2)}
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
                        type="checkbox"
                        id={aidOption3}
                        name="aidTarget"
                        value={aidOption3}
                        onChange={handleChange}
                        checked={formData.aidTarget.find(target => target === aidOption3)}
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
                        type="checkbox"
                        id={aidOption4}
                        name="aidTarget"
                        value={aidOption4}
                        onChange={handleChange}
                        checked={formData.aidTarget.find(target => target === aidOption4)}
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
                        type="checkbox"
                        id={aidOption5}
                        name="aidTarget"
                        value={aidOption5}
                        onChange={handleChange}
                        checked={formData.aidTarget.find(target => target === aidOption5)}
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