import React from "react";
import { Link } from "react-scroll";

export function NavigationBar() {

    return (
            <div className="navbar-section">
                <ul className="navbar-section__ul">
                    <li className="navbar-section__ul__li">
                        <Link
                            to="/"
                            spy={true}
                            smooth={true}
                            delay={100}
                            duration={500}
                        >
                            Start
                        </Link>
                    </li>
                    <li className="navbar-section__ul__li">
                        <Link
                            to="statistics"
                            spy={true}
                            smooth="easeInOutQuad"
                            delay={100}
                            duration={500}
                        >
                            O co chodzi?
                        </Link>
                    </li>
                    <li className="navbar-section__ul__li">
                        <Link
                            to="about"
                            spy={true}
                            smooth="easeInOutQuad"
                            delay={100}
                            duration={500}
                            offset={-10}
                        >
                            O nas
                        </Link>
                    </li>
                    <li className="navbar-section__ul__li">
                        <Link
                            to="partners"
                            spy={true}
                            smooth="easeInOutQuad"
                            delay={100}
                            duration={500}
                        >
                            Fundacje i organizacje
                        </Link>
                    </li>
                    <li className="navbar-section__ul__li">
                        <Link
                            to="contact"
                            spy={true}
                            smooth="easeInOutQuad"
                            delay={100} duration={500}
                        >
                            Kontakt
                        </Link>
                    </li>
                </ul>
            </div>
    )
}