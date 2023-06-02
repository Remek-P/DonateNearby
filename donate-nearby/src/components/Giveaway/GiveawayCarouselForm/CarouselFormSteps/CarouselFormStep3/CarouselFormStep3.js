import React from "react";
import Step3Location from "./Step3Partials/Step3Location/Step3Location";
import Step3AidTarget from "./Step3Partials/Step3AidTarget/Step3AidTarget";
import Step3NGO from "./Step3Partials/Step3NGO/Step3NGO";
import PreviousButton from "../../GiveawayCarouselFormButtons/PreviousButton/PreviousButton";
import GiveawayCarouselFormStepCount from "../../GiveawayCarouselFormStepCount/GiveawayCarouselFormStepCount";
import NextOrConfirmButton from "../../GiveawayCarouselFormButtons/NextOrConfirmButton/NextOrConfirmButton";

export default function CarouselFormStep3({ formData, setFormData, step, handleNext, handlePrevious }) {

  const buttonClassName = "padding3"

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
                    <PreviousButton handlePrevious={handlePrevious}
                                    buttonClassName={buttonClassName}
                    />
                    <NextOrConfirmButton buttonClassName={buttonClassName} />
                </div>

            </form>
        </>
    )
}