import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {GlobalContext} from "../../../context/GlobalContext";

export default function HomeCTA() {

    const { loggedUser } = useContext(GlobalContext);

    const link = loggedUser === "" ? "/login" : "/giveaway"

    return (
        <section className="cta" id="cta">
            <header className="cta__header">
                <h2>Wystarczą 4 proste kroki</h2>
            </header>
            <ul className="cta-steps">
                <li className="cta-steps-li cta-steps-li-icon1">
                    <h6 className="cta-steps-li__header">
                        Wybierz rzeczy
                    </h6>
                    <p className="cta-steps-li__description">
                        ubrania, zabawki,<br/> sprzęt i inne
                    </p>
                </li>
                <li className="cta-steps-li cta-steps-li-icon2">
                    <h6 className="cta-steps-li__header">
                        Spakuj je
                    </h6>
                    <p className="cta-steps-li__description">
                        skorzystaj z<br/> worków na śmieci
                    </p>
                </li>
                <li className="cta-steps-li cta-steps-li-icon3">
                    <h6 className="cta-steps-li__header">
                        Zdecyduj komu<br/> chcesz pomóc
                    </h6>
                    <p className="cta-steps-li__description">
                        wybierz zaufane<br/> miejsce
                    </p>
                </li>
                <li className="cta-steps-li cta-steps-li-icon4">
                    <h6 className="cta-steps-li__header">
                        Zamów kuriera
                    </h6>
                    <p className="cta-steps-li__description">
                        kurier przyjedzie<br/> w dogodnym terminie
                    </p>
                </li>
            </ul>
            <Link to={link} className="cta-link">
                oddaj<br/> rzeczy
            </Link>
        </section>
    )
}