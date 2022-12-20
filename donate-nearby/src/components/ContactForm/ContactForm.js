import React, { useState } from "react";

export default function ContactForm() {

    const [ name,                       setName                     ] = useState("");
    const [ email,                      setEmail                    ] = useState("");
    const [ contactMessage,             setContactMessage           ] = useState("");
    const [ nameValidate,               setNameValidate             ] = useState("hiddenContactForm");
    const [ emailValidate,              setEmailValidate            ] = useState("hiddenContactForm");
    const [ contactMessageValidate,     setContactMessageValidate   ] = useState("hiddenContactForm");
    const [ success,                    setSuccess                  ] = useState(true);
    const [ contactForm,                setContactForm              ] = useState("visibleContactForm");
    const [ successMessage,             setSuccessMessage           ] = useState("hiddenContactForm");

    const checkName = /^[A-z]+-?\S$/.test(name);
    const checkEmail = /^\S+@\S+\.\S+$/.test(email);
    const checkMessage = contactMessage.length >= 120 && contactMessage.length <= 500;

    const nameValidation = () => {
        checkName ? setNameValidate("hiddenContactForm") : setNameValidate("visibleContactForm")
    };

    const emailValidation = () => {
        checkEmail ? setEmailValidate("hiddenContactForm") : setEmailValidate("visibleContactForm")
    };

    const contactMessageLength = () => {
        checkMessage ? setContactMessageValidate("hiddenContactForm") : setContactMessageValidate("visibleContactForm")
    };

    const hideContactForm = () => {
        success ? setContactForm("hiddenContactForm") : setContactForm("visibleContactForm")
    };

    const displaySuccessMessage = () => {
        success ? setSuccessMessage("visibleContactForm") : setSuccessMessage("hiddenContactForm")
    };

    console.log(success);
    console.log(contactForm);

    const passTest = () => {
        if (checkName === true && checkEmail === true && checkMessage === true) {
            const contactRequest = {name, email, message: contactMessage};
            fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(contactRequest)
            }).then(res => {
                if (res.ok) {
                    console.log("ok")
                    setSuccess(true)
                    setName("");
                    setEmail("");
                    setContactMessage("");
                    hideContactForm();
                    displaySuccessMessage();
                } else {
                    setSuccess(false)
                    throw Error("response is not ok")
                }
            }).catch(err => {
                console.log(err.message)
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        nameValidation();
        emailValidation();
        contactMessageLength();
        passTest();
    }

    return (
        <section
            className="contact-form"
            id="contact"
        >
            <h2 className="contact-form__header">
                Skontaktuj się z nami
            </h2>
            {/*TODO: ogacić*/}
            <div className={`contact-form-successMessage ${successMessage}`}>Wiadomość została wysłana!<br/> Wkrótce skontaktujemy się z Tobą.</div>
            <form
                onSubmit={handleSubmit}
                className={`contact-form__form ${contactForm}`}
            >
                <div className="contact-form__form-container">
                    <div className="contact-form__form-container-field">
                        <label
                            className="contact-form__form-container-field__label label"
                            htmlFor="name"
                        >
                            Wpisz swoje imię
                        </label>
                        <input
                            className="contact-form__form-container-field__input input"
                            type="text"
                            value={name}
                            onChange={event => setName(event.target.value)}
                            // pattern="^[A-z]+-?"
                            title="Imię powinno być jednym wyrazem"
                            placeholder="Krzysztof"
                            autoCorrect={"on"}
                            name="name"
                            id="name"
                            required
                        />
                        <div
                            className={`contact-form__form-container-field-validation ${nameValidate}`}
                        >
                            Imię powinno byc jednym wyrazem
                        </div>
                    </div>
                    <div className="contact-form__form-container-field">
                        <label
                            className="contact-form__form-container-field__label label"
                            htmlFor="email"
                        >
                            Wpisz swój email
                        </label>
                        <input
                            className="contact-form__form-container-field__input input"
                            type="text"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            // pattern="^\S+@\S+\.\S+"
                            title="Adres email nie może zawierać spacji, posiadać @ oraz ."
                            placeholder="abc@xyz.pl"
                            autoCorrect="on"
                            name="email"
                            id="email"
                            required
                        />
                        <div className={`contact-form__form-container-field-validation ${emailValidate}`}>Błędny adres email</div>
                    </div>
                </div>
                <div className="contact-form__form__textarea">
                    <label
                        className="contact-form__form__textarea__label label"
                        htmlFor="contactMessage"
                    >
                        Wpisz swoją wiadomość
                    </label>
                    <textarea
                        className="contact-form__form__textarea__input input"
                        name="contactMessage"
                        id="contactMessage"
                        rows="4"
                        // minLength={120}
                        // maxLength={500}
                        value={contactMessage}
                        onChange={event => setContactMessage(event.target.value)}
                        title="Wiadomość musi zawierać się między 120 a 500 znaków"
                        autoCorrect="on"
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat (for 500 characters)"
                        required
                    />
                    <div className={`contact-form__form-container-field-validation ${contactMessageValidate}`}>Wiadomość musi zawierać się między 120 a 500 znaków</div>
                </div>
                <div className="contact-form__form-button-container">
                    <button className="contact-form__form-button-container__button">
                        Wyślij
                    </button>
                </div>
            </form>
        </section>
    )
}