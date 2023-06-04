import React, {useContext} from "react";
import { Link } from "react-router-dom";

import image from "../../../assets/images/Home-Hero-Image.jpg";
import {GlobalContext} from "../../../context/GlobalContext";

export default function HomeHero() {

    const { loggedUser } = useContext(GlobalContext);

    const link = loggedUser === "" ? "/login" : "/giveaway";

    const dataToolTip = "Ze względu na stan pandemii, organizacja zbiórek została czasowo wstrzymana."

    const handleClick = (e) => {
        return dataToolTip ? e.preventDefault() : false
    };

    return (
        <section
            className="hero"
            id="start"
            style={{backgroundImage: `url(${image})`}}
        >
            <div className={"hero-container"}>
                <h2 className="hero-container__header">Zacznij pomagać!<br/>Oddaj niechciane rzeczy
                    w&nbsp;zaufane&nbsp;ręce
                </h2>
                <div className="hero-container__links">
                    <Link className="hero-container__link-stuff" to={link} state={{direction: "giveaway"}}>
                        Oddaj<br/> rzeczy
                    </Link>
                    <Link className="hero-container__link-organise attrHover"
                          to="/campaign"
                          onClick={handleClick}
                          data-tool-tip={dataToolTip}
                    >
                        Zorganizuj<br/>zbiórkę
                    </Link>
                </div>
            </div>
        </section>
    )
}