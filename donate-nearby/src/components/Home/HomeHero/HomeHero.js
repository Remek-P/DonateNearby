import React, {useContext} from "react";
import { Link } from "react-router-dom";

import image from "../../../assets/images/Home-Hero-Image.jpg";
import {GlobalContext} from "../../../context/GlobalContext";

export default function HomeHero() {

    const { loggedUser } = useContext(GlobalContext);

    const link = loggedUser === "" ? "/login" : "/giveaway";

    return (
        <section
            className="hero"
            id="start"
            style={{backgroundImage: `url(${image})`}}
        >
            <div className={"hero-container"}>
                <h1 className="hero-container__header">Zacznij pomagać!<br/>Oddaj niechciane rzeczy
                    w&nbsp;zaufane&nbsp;ręce
                </h1>
                <div className="hero-container__links">
                    <Link className="hero-container__link-stuff" to={link}>
                        Oddaj<br/> rzeczy
                    </Link>
                    <Link className="hero-container__link-organise" to="/login">
                        Zorganizuj<br/>zbiórkę
                    </Link>
                </div>
            </div>
        </section>
    )
}