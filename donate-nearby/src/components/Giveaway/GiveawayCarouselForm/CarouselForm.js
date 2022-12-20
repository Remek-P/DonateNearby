import React, { useState } from "react";

import CarouselFormNotificationBar from "./CarouselFormNotificationBar/CarouselFormNotificationBar";
import CarouselFormStep1 from "./CarouselFormSteps/CarouselFormStep1/CarouselFormStep1";
import CarouselFormStep2 from "./CarouselFormSteps/CarouselFormStep2/CarouselFormStep2";
import CarouselFormStep3 from "./CarouselFormSteps/CarouselFormStep3/CarouselFormStep3";
import CarouselFormStep4 from "./CarouselFormSteps/CarouselFormStep4/CarouselFormStep4";
import CarouselFormStepSumup from "./CarouselFormSteps/CarouselFormStepSumup/CarouselFormStepSumup";
import CarouselFormStepThankYou from "./CarouselFormSteps/CarouselFormStepThankYou/CarouselFormStepThankYou";

import image from "../../../assets/images/Background-Form.jpg"

export default function CarouselForm() {

    const [ step,       setStep         ] = useState(0)
    // const [ formData,   setFormData    ] = useState({
    //     // id,
    //     giveaway: "",
    //     bagNumber: "",
    //     location: "",
    //     aidTarget: [
    //         {name: "dzieciom", value: false},
    //         {name: "samotnym matkom", value: false},
    //         {name: "bezdomnym", value: false},
    //         {name: "niepełnosprawnym", value: false},
    //         {name: "osobom starszym", value: false},
    //     ],
    //     NGO: "",
    //     address: {
    //         street: "",
    //         city: "",
    //         postalCode: "",
    //         phoneNumber: "",
    //     },
    //     schedulePackage: {
    //         date: 0,
    //         time: 0,
    //         notes: "",
    //     },
    // });

    const [ formData,   setFormData    ] = useState({
        // id,
        giveaway: "",
        bagNumber: "",
        location: "",
        aidTarget: [],
        NGO: "",
        address: {
            street: "",
            city: "",
            postalCode: "",
            phoneNumber: "",
        },
        schedulePackage: {
            date: 0,
            time: 0,
            notes: "",
        },
    });

    // const [ formData,   setFormData    ] = useState({
    //     // id,
    //     giveaway: "ubrania, które nadają się do ponownego użycia",
    //     bagNumber: "3",
    //     location: "Warszawa",
    //     aidTarget: ["dzieciom", "samotnym matkom", "bezdomnym", "niepełnosprawnym", "osobom starszym" ],
    //     NGO: "Jakiś",
    //     address: {
    //         street: "Leszczynowa 268",
    //         city: "Inowrocław",
    //         postalCode: "00-000",
    //         phoneNumber: "600606060",
    //     },
    //     schedulePackage: {
    //         date: "2022-12-22",
    //         time: "04:06",
    //         notes: "asdada ad aasd d",
    //     },
    // });

    console.log(formData)

    const DisplayStep = () => {
        if (step === 0) {
            return (
                <CarouselFormStep1
                    formData={formData}
                    setFormData={setFormData}
                    setStep={setStep}
                    step={step}
                />
            )
        } else if (step === 1) {
            return (
                <CarouselFormStep2
                    formData={formData}
                    setFormData={setFormData}
                    setStep={setStep}
                    step={step}
                />
            )
        } else if (step === 2) {
            return (
                <CarouselFormStep3
                    formData={formData}
                    setFormData={setFormData}
                    setStep={setStep}
                    step={step}
                />
            )
        } else if (step === 3) {
            return (
                <CarouselFormStep4
                    formData={formData}
                    setFormData={setFormData}
                    setStep={setStep}
                    step={step}
                />
            )
        } else if (step === 4) {
            return (
                <CarouselFormStepSumup
                    formData={formData}
                    setStep={setStep}
                    step={step}
                />
            )
        } else if (step === 5) {
            return (
                <CarouselFormStepThankYou />
            )
        }
    }

    return(
        <section className="carouselForm">
            <CarouselFormNotificationBar step={step} />
            <div
                className="carouselForm-container"
                style={{backgroundImage: `url(${image})`}}
            >
                <div className="carouselForm-container__steps">
                    {DisplayStep()}
                </div>
            </div>
        </section>
    )
}