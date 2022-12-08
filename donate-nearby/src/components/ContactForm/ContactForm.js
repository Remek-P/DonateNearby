import React, {useState} from "react";

export function ContactForm() {

    const [ name,               setName                 ] = useState("");
    const [ email,              setEmail                ] = useState("");
    const [ message,            setMessage              ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <section
            className="contact-form"
        >
            <h2 className="contact-form__header">
                Skontaktuj się z nami
            </h2>
            <form className="contact-form__form">
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
                            required={true}
                            type="text"
                            value={name}
                            onChange={event => setName(event.target.value)}
                            placeholder="Krzysztof"
                            autoCorrect={"on"}
                            name="name"
                            id="name"
                        />
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
                            required={true}
                            type="email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            placeholder="abc@xyz.pl"
                            autoCorrect="on"
                            name="email"
                            id="email"
                        />
                    </div>
                </div>
                <div className="contact-form__form__textarea">
                    <label
                        className="contact-form__form__textarea__label label"
                        htmlFor="message"
                    >
                        Wpisz swoją wiadomość
                    </label>
                    <textarea
                        className="contact-form__form__textarea__input input"
                        name="message"
                        id="message"
                        required={true}
                        rows="4"
                        minLength={250}
                        maxLength={500}
                        value={message}
                        onChange={event => setMessage(event.target.value)}
                        autoCorrect="on"
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat (for 500 characters)"
                    />
                </div>
                <button
                    className="contact-form__form__button"
                    onClick={handleSubmit}
                >
                    Wyślij
                </button>
            </form>
        </section>
    )
}