import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function CarouselFormStepThankYou() {

    const navigate = useNavigate();

    useEffect(() => {
        const timeID = setTimeout(() => {
            navigate("/")
        }, 5000);

        return () => clearTimeout(timeID)
    })

    return (
        <h3 className="thankYou__header">Dziękujemy za przesłanie formularza<br/> Na maila prześlemy wszelkie informacje o odbiorze.
        </h3>
    )
}