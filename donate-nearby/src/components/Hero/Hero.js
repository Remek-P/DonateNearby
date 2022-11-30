import React from "react";
import { Link } from "react-router-dom";

export function Hero() {
    return (
        <section className="hero">
            <h1 className="hero__header">
                <div>Zacznij pomagać!</div>
                <div>Oddaj niechciane rzeczy w zaufane ręce</div>
            </h1>
            <div className="hero__links">
                <Link className="hero__link-stuff" to="/login">
                    Oddaj rzeczy
                </Link>
                <Link className="hero__link-organise" to="/register">
                    Zorganizuj zbiórkę
                </Link>
            </div>
        </section>

    )
}