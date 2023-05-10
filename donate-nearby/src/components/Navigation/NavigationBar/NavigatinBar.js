import React from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {

    return (
            <div className="navbar-section">
                <ul className="navbar-section__ul">
                    <li className="navbar-section__ul__li">
                        <NavLink
                            to="/"
                            className="navbar-section__ul__li-text"
                        >
                            Start
                        </NavLink>
                    </li>
                    <li className="navbar-section__ul__li">
                        <Link
                            to="statistics"
                            className="navbar-section__ul__li-text"
                            spy={true}
                            smooth="easeInQuad"
                            delay={100}
                            duration={1000}
                        >
                            O co chodzi?
                        </Link>
                    </li>
                    <li className="navbar-section__ul__li">
                        <Link
                            to="about"
                            className="navbar-section__ul__li-text"
                            spy={true}
                            smooth="easeInQuad"
                            delay={100}
                            duration={1000}
                            offset={-10}
                        >
                            O nas
                        </Link>
                    </li>
                    {/*<li className="navbar-section__ul__li">*/}
                    {/*    <Link*/}
                    {/*        to="partners"*/}
                    {/*        spy={true}*/}
                    {/*        smooth="easeInQuad"*/}
                    {/*        delay={100}*/}
                    {/*        duration={1000}*/}
                    {/*    >*/}
                    {/*        Fundacje i organizacje*/}
                    {/*    </Link>*/}
                    {/*</li>*/}
                    <li className="navbar-section__ul__li">
                        <Link
                            to="contact"
                            className="navbar-section__ul__li-text"
                            spy={true}
                            smooth="easeInOutQuad"
                            delay={100}
                            duration={1000}
                        >
                            Kontakt
                        </Link>
                    </li>
                </ul>
            </div>
    )
}