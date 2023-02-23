import React from "react";

export default function Step3AidTarget({ formData, setFormData }) {

    const aidOption1 = "dzieciom";
    const aidOption2 = "samotnym matkom";
    const aidOption3 = "bezdomnym";
    const aidOption4 = "niepełnosprawnym";
    const aidOption5 = "osobom starszym";

    const aidOptions = [aidOption1, aidOption2, aidOption3, aidOption4, aidOption5];

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

        const { checked } = event.target

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

    const chooseAidTarget = () => {
        return (
            aidOptions.map(el =>
                <div key={el} className="carouselFormStep3AidTarget-container">
                    <input
                        type="checkbox"
                        id={el}
                        name="aidTarget"
                        // value={formData.aidTarget.find(el => el.name === aidOption1).name}
                        value={el}
                        onChange={handleChange}
                        // checked={formData.aidTarget.find(el => el.name === aidOption1).value}
                        checked={formData.aidTarget.find(target => target === el)}
                        required={formData.aidTarget.length === 0}
                    />
                    <label
                        htmlFor={el}
                        className="carouselFormStep3AidTarget-container__label"
                    >
                        {el}
                    </label>
                </div>)

        )
    }

    return (
        <div className="carouselFormStep3AidTarget">
            <legend className="carouselFormStep3AidTarget__header">
                Komu chcesz pomóc? *
            </legend>
            <div>
                {
                    chooseAidTarget()
                }
            </div>
        </div>
    )
}