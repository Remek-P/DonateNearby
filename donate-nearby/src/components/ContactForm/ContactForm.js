import React, {useState} from "react";

export function ContactForm() {

    const [ name,               setName                 ] = useState("");
    const [ email,              setEmail                ] = useState("");
    const [ message,            setMessage              ] = useState("");

    return(
        <section className="contact-form">
                <h2 className="contact-form-container__header">
                    Skontaktuj się z nami
                </h2>
                <form className="contact-form__form">
                    <div className="contact-form__form-container">
                        <label
                            className="contact-form__form-container__label"
                            htmlFor="name"
                        >
                            Wpisz swoje imię
                        </label>
                        <input
                            className="contact-form__form-container__input"
                            required={true}
                            type="text"
                            value={name}
                            onChange={event => setName(event.target.value)}
                            placeholder="Krzysztof"
                            autoCorrect={"on"}
                            name="name"
                            id="name"
                        />
                        <label
                            className="contact-form__form-container__label"
                            htmlFor="email"
                        >
                            Wpisz swój email
                        </label>
                        <input
                            className="contact-form__form-container__input"
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
                    <label className="contact-form__form-container__label"
                           htmlFor="message"
                    >
                        Wpisz swoją wiadomość
                    </label>
                    <textarea
                        className="contact-form__form__input"
                        name="message"
                        id="message"
                        maxLength={250}
                        value={message}
                        onChange={event => setMessage(event.target.value)}
                        autoCorrect="on"
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                    <button className="contact-form__form__button">
                        Wyślij
                    </button>
                </form>
        </section>
    )
}