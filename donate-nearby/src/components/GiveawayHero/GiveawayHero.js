import React from "react";

import image from "../../assets/images/Form-Hero-Image.jpg"

export function GiveawayHero() {

    return (
        <section
            className="giveaway-hero"
            id="start"
            style={{backgroundImage: `url(${image})`}}
        >
            <div className={"giveaway-hero-container"}>
                <header className="giveaway-hero-container__header">
                    <h2>
                        Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM
                    </h2>
                    <h3>
                        Wystarczą 4 proste kroki:
                    </h3>
                </header>
                <ul className="giveaway-hero-container__steps">
                    <li className="giveaway-hero-container__steps__step">
                        <h5>1</h5>
                        <div>Wybierz rzeczy</div>
                    </li>
                    <li className="giveaway-hero-container__steps__step">
                        <h5>2</h5>
                        <div>Spakuj je w worki</div>
                    </li>
                    <li className="giveaway-hero-container__steps__step">
                        <h5>3</h5>
                        <div>Wybierz fundację</div>
                    </li>
                    <li className="giveaway-hero-container__steps__step">
                        <h5>4</h5>
                        <div>Zamów kuriera</div>
                    </li>

                </ul>
            </div>
        </section>
    )
}
