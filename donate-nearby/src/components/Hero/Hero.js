import React from "react";
import { Link } from "react-router-dom";

export function Hero() {
    return (
        <section className="hero">
            <div className={"hero-container"}>
                <header className="hero-container__header">
                    <h1>Zacznij pomagać!</h1>
                    <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                </header>
                <div className="hero-container__links">
                    <Link className="hero-container__link-stuff" to="/login">
                        Oddaj<br/> rzeczy
                    </Link>
                    <Link className="hero-container__link-organise" to="/login">
                        Zorganizuj<br/> zbiórkę
                    </Link>
                </div>
            </div>
        </section>
    )
}