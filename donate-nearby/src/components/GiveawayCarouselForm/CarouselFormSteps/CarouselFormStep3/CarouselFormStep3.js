import React from "react";
import Step3Location from "./Step3Partials/Step3Location/Step3Location";
import Step3AidTarget from "./Step3Partials/Step3AidTarget/Step3AidTarget";
import Step3NGO from "./Step3Partials/Step3NGO/Step3NGO";

export default function CarouselFormStep3({ formData, setFormData, setStep }) {

    const handlePrevious = (e) => {
        e.preventDefault();
        setStep((previousStep) => previousStep - 1)
    };

    const handleNext = (e) => {
        e.preventDefault();
        setStep((previousStep) => previousStep + 1)
    };

    return (
        <div>
           <Step3Location
               formData={formData}
               setFormData={setFormData}
           />
            <Step3AidTarget
                formData={formData}
                setFormData={setFormData}
            />
            <Step3NGO
                formData={formData}
                setFormData={setFormData}
            />
            <button
                className="carouselFormStep2-buttonContainer-previous"
                onClick={handlePrevious}
            >
                Wstecz
            </button>
            <button
                disabled={formData.bagNumber === 0 || formData.bagNumber === "0"}
                className="carouselFormStep2-buttonContainer-next"
                onClick={handleNext}
            >
                Dalej
            </button>
        </div>

    )
}