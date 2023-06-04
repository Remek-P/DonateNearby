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

    const date = new Date()
    const dateString = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
    const timeString = date.getHours() + ":" + date.getMinutes();

    const [ step,       setStep         ] = useState(0);

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
            date: dateString,
            time: timeString,
            notes: "",
        },
    });

    const handlePrevious = (e) => {
        e.preventDefault();
        setStep((previousStep) => previousStep - 1)
    };

    const handleNext = (e) => {
        e.preventDefault();
        setStep((previousStep) => previousStep + 1)
    };

    // Getting the object from session storage to always update instead of overwrite
    const getFromSessionStorage = () => {
        return sessionStorage.getItem("formDataSessionStorage") !== null
            ? JSON.parse(sessionStorage.getItem("formDataSessionStorage"))
            : [];

    };

    // creating object from form data for the Statistic's component
    const statisticsData = () => {
        return {
            bagNumber: formData.bagNumber,
            NGO: formData.NGO,
        };
    };

    // Adding required form data to session storage, so the Statistic's section can be updated (instead of fetching data from some fake server)
    const addToSessionStorage = () => {
        const formDataSessionStorage = getFromSessionStorage();
        formDataSessionStorage.push(statisticsData());
        sessionStorage.setItem("formDataSessionStorage", JSON.stringify(formDataSessionStorage));
    };

    const handleSubmit = (e, formData) => {
        addToSessionStorage(formData);
        handleNext(e);
    };

    const DisplayStep = () => {
        if (step === 0) {
            return (
                <CarouselFormStep1
                    formData={formData}
                    setFormData={setFormData}
                    step={step}
                    handleNext={handleNext}
                />
            )
        } else if (step === 1) {
            return (
                <CarouselFormStep2
                    formData={formData}
                    setFormData={setFormData}
                    step={step}
                    handlePrevious={handlePrevious}
                    handleNext={handleNext}
                />
            )
        } else if (step === 2) {
            return (
                <CarouselFormStep3
                    formData={formData}
                    setFormData={setFormData}
                    step={step}
                    handlePrevious={handlePrevious}
                    handleNext={handleNext}
                />
            )
        } else if (step === 3) {
            return (
                <CarouselFormStep4
                    formData={formData}
                    setFormData={setFormData}
                    step={step}
                    handlePrevious={handlePrevious}
                    handleNext={handleNext}
                />
            )
        } else if (step === 4) {
            return (
                <CarouselFormStepSumup
                    formData={formData}
                    step={step}
                    handlePrevious={handlePrevious}
                    handleNext={handleSubmit}
                />
            )
        } else if (step === 5) {
            return (
                <CarouselFormStepThankYou />
            )
        }
    }

    return (
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