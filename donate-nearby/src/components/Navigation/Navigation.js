import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import React from "react";

export function Navigation() {
    return (
            <nav className="navbar">
                <div className="navbar-login-section">
                    <div className="navbar-login-section__login">
                        <NavLink to="/login">
                            Zaloguj
                        </NavLink>
                    </div>
                    <div className="navbar-login-section__register">
                        <NavLink to={"/register"}>
                            Załóż konto
                        </NavLink>
                    </div>
                </div>
                <div className="navbar-nav-section">
                    <ul className="navbar-nav-section__ul">
                        <li className="navbar-nav-section__ul__li">
                            <Link to="start" spy={true} smooth={true} delay={100} duration={500}>
                                Start
                            </Link>
                        </li>
                        <li className="navbar-nav-section__ul__li">
                            <Link to="statistics" spy={true} smooth="easeInOutQuad" delay={100} duration={500}>
                                O co chodzi?
                            </Link>
                        </li>
                        <li className="navbar-nav-section__ul__li">
                            <Link to="about" spy={true} smooth="easeInOutQuad" delay={100} duration={500}>
                                O nas
                            </Link>
                        </li>
                        <li className="navbar-nav-section__ul__li">
                            <Link to="partenrs" spy={true} smooth="easeInOutQuad" delay={100} duration={500}>
                                Fundacje i organizacje
                            </Link>
                        </li>
                        <li className="navbar-nav-section__ul__li">
                            <Link to="contact" spy={true} smooth="easeInOutQuad" delay={100} duration={500}>
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}