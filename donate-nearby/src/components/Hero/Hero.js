import React from "react";
import {Link} from "react-router-dom";

export function Hero() {
    return(
        <section className={"hero"}>
            <h1 className={"hero__heder"}>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h1>
            <div className={"hero__links"}>
            <Link to={"/login"} className={"hero__link-stuff"}>
                Oddaj rzeczy
            </Link>
            <Link to={"/register"} className={"hero__link-organise"}>
                Zorganizuj zbiórkę
            </Link>
            </div>
        </section>

    )
}