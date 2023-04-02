import React from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {

    return (
            <div className="navbar-section">
                <ul className="navbar-section__ul">
                    <li className="navbar-section__ul__li">
                        <NavLink to="/">
                            Start
                        </NavLink>
                    </li>
                    <li className="navbar-section__ul__li">
                        <Link
                            to="statistics"
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