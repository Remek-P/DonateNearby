import React from "react";

export default function CarouselFormNotificationBar({ step }) {

    let textPicker = () => {
        if (step === 0) {
            return textPicker = "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."
        } else if (step === 1) {
            return textPicker = "Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ."
        } else if (step === 2) {
            return textPicker = "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy."
        } else if (step === 3) {
            return textPicker = "Podaj adres oraz termin odbioru rzeczy."
        } else {
        }
        return textPicker;
    }

    const ShowHideNotificationBar = () => {
        if (step <= 3) {
            return (
                <section className="giveaway-form">
                    <div className="giveaway-form__notification">
                        <h4 className="giveaway-form__notification__header">
                            Ważne!
                        </h4>
                        <div className="giveaway-form__notification__paragraph">
                            {textPicker()}
                        </div>
                    </div>
                    <div className="giveaway-form">

                    </div>
                </section>
            )
        }
    }

    return (
        ShowHideNotificationBar()
    )
}