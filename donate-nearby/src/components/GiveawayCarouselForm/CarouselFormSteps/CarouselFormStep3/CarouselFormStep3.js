import React from "react";
import Step3Location from "./Step3Partials/Step3Location/Step3Location";
import Step3AidTarget from "./Step3Partials/Step3AidTarget/Step3AidTarget";
import Step3NGO from "./Step3Partials/Step3NGO/Step3NGO";
import PreviousButton from "../../GiveawayCarouselFormButtons/PreviousButton/PreviousButton";
import NextButton from "../../GiveawayCarouselFormButtons/NextButton/NextButton";
import GiveawayCarouselFormStepCount from "../../GiveawayCarouselFormStepCount/GiveawayCarouselFormStepCount";

export default function CarouselFormStep3({ formData, setFormData, step, setStep }) {

    const handlePrevious = (e) => {
        e.preventDefault();
        setStep((previousStep) => previousStep - 1)
    };

    const handleNext = (e) => {
        e.preventDefault();
        setStep((previousStep) => previousStep + 1)
    };

    return (
        <>
            <GiveawayCarouselFormStepCount step={step} />
            <form
                name="giveawayForm"
                onSubmit={handleNext}
            >
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
                <div className="carouselFormStep3-buttonContainer">
                    <PreviousButton handlePrevious={handlePrevious}/>
                    <NextButton/>
                </div>

            </form>
        </>
    )
}