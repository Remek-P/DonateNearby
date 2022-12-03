import React from "react";
import { Link } from "react-router-dom";

export function CTA() {
    return (
        <section className="cta" id="cta">
            <header className="cta__header">
                <h2>Wystarczą 4 proste kroki</h2>
            </header>
            <ul className="cta-steps">
                <li className="cta-steps-li cta-steps-li-icon1">
                    <h5 className="cta-steps-li__header">Wybierz rzeczy</h5>
                    <p className="cta-steps-li__description">ubrania, zabawki, sprzęt i inne</p>
                </li>
                <li className="cta-steps-li cta-steps-li-icon2">
                    <h5 className="cta-steps-li__header">Spakuj je</h5>
                    <p className="cta-steps-li__description">skorzystaj z worków na śmieci</p>
                </li>
                <li className="cta-steps-li cta-steps-li-icon3">
                    <h5 className="cta-steps-li__header">Zdecyduj komu chcesz pomóc</h5>
                    <p className="cta-steps-li__description">wybierz zaufane miejsce</p>
                </li>
                <li className="cta-steps-li cta-steps-li-icon4">
                    <h5 className="cta-steps-li__header">Zamów kuriera</h5>
                    <p className="cta-steps-li__description">kurier przyjedzie w dogodnym terminie</p>
                </li>
            </ul>
            <Link to="/login" className="cta-link">
                oddaj<br/> rzeczy
            </Link>
        </section>
    )
}