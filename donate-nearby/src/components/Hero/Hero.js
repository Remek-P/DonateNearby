import React from "react";
import {Link} from "react-router-dom";

export function Hero() {
    return (
        <section className={"hero"}>
            <h1 className={"hero__header"}>
                <div>Zacznij pomagać!</div>
                <div>Oddaj niechciane rzeczy w zaufane ręce</div>
            </h1>
            <div className={"hero__links"}>
                <div className={"hero__link-stuff"}>
                    <Link to={"/login"}>
                        Oddaj rzeczy
                    </Link>
                </div>
                <div className={"hero__link-organise"}>
                    <Link to={"/register"}>
                        Zorganizuj zbiórkę
                    </Link>
                </div>

            </div>
        </section>

    )
}