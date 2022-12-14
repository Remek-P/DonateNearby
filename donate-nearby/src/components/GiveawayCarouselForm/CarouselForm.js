import React, {useState} from "react";

import CarouselFormNotificationBar from "./CarouselFormNotificationBar/CarouselFormNotificationBar";
import CarouselFormStep1 from "./CarouselFormSteps/CarouselFormStep1/CarouselFormStep1";
import CarouselFormStep2 from "./CarouselFormSteps/CarouselFormStep2/CarouselFormStep2";
import CarouselFormStep3 from "./CarouselFormSteps/CarouselFormStep3/CarouselFormStep3";
import CarouselFormStep4 from "./CarouselFormSteps/CarouselFormStep4/CarouselFormStep4";
import CarouselFormStepSumup from "./CarouselFormSteps/CarouselFormStepSumup/CarouselFormStepSumup";
import CarouselFormStepThankYou from "./CarouselFormSteps/CarouselFormStepThankYou/CarouselFormStepThankYou";

import image from "../../assets/images/Background-Form.jpg"

export default function CarouselForm() {

    const [ step,       setStep         ] = useState(3)
    const [ formData,   setFormData    ] = useState({
        // id,
        giveaway: "",
        bagNumber: 0,
        location: "",
        aidTarget: "",
        NGO: "",
        address: {
            street: "",
            city: "",
            postalCode: 0,
            phoneNumber: 0,
        },
        schedulePackage: {
            date: 0,
            time: 0,
            notes: "",
        },
    });

    console.log("formData:", formData)
    console.log("bagNumber:", typeof formData.bagNumber)

    const DisplayStep = () => {
        if (step === 0) {
            return (
                <CarouselFormStep1
                    formData={formData}
                    setFormData={setFormData}
                    setStep={setStep}
                />
            )
        } else if (step === 1) {
            return (
                <CarouselFormStep2
                    formData={formData}
                    setFormData={setFormData}
                    setStep={setStep}
                />
            )
        } else if (step === 2) {
            return (
                <CarouselFormStep3
                    formData={formData}
                    setFormData={setFormData}
                    setStep={setStep}
                />
            )
        } else if (step === 3) {
            return (
                <CarouselFormStep4
                    formData={formData}
                    setFormData={setFormData}
                    setStep={setStep}
                />
            )
        } else if (step === 4) {
            return (
                <CarouselFormStepSumup
                    formData={formData}
                    setFormData={setFormData}
                    setStep={setStep}
                />
            )
        } else if (step === 5) {
            return (
                <CarouselFormStepThankYou
                    formData={formData}
                    setFormData={setFormData}
                    setStep={setStep}
                />
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